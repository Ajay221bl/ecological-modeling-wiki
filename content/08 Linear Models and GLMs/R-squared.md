---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "R-squared is the proportion of the variation in the response that the model's fitted values account for."
aliases:
  - "R²"
  - "Coefficient of determination"
  - "Multiple R-squared"
status: seedling
---

# R-squared

Think of tidying a messy room. The scatter of the raw data around their mean is the starting mess, and the scatter left around the fitted line is what remains; **R-squared** (R²) is the share you cleared. It is the proportion of the variation in the response that the model's fitted values account for. The total variation is TSS = Σ(yᵢ − ȳ)², the unexplained part is RSS = Σ(yᵢ − ŷᵢ)², and R² = 1 − RSS/TSS ([[Sum of Squares]], [[Residual]]). R² = 0 means no better than the mean; 1 means a perfect fit.

For the bird plots, TSS = 30 and RSS = 1.1, so R² = 1 − 1.1/30 = 0.963. In simple regression R² equals r², the squared [[Correlation]], and the code below checks all three calculations agree. It then adds a predictor of pure random noise, and R² goes up anyway.

That is its key weakness: R² never goes down when you add a predictor, even a useless one, so it cannot be used to choose between models of different size ([[Overfitting]], [[Adjusted R-squared]]). It measures fit to this sample, not correctness and not predictive ability. Two confusions. A high R² does not mean the model is right: a curve fitted by a straight line can have a high R² and a clear residual pattern. And a low R² does not mean an effect is not real: a real slope can sit in very noisy data, and in field ecology 0.2 can be a strong result. For GLMs the analogous idea uses [[Deviance]], and mixed models split it into [[Marginal and Conditional R-squared]] ([[Harrison et al. 2018]], [[Zuur et al. 2009 Appendix A]]).

```r
d <- data.frame(tree = c(0, 10, 20, 30, 40), rich = c(12, 11, 9, 8, 5))
m <- lm(rich ~ tree, d); summary(m)$r.squared
1 - sum(resid(m)^2) / sum((d$rich - mean(d$rich))^2); cor(d$tree, d$rich)^2
set.seed(10); d$junk <- rnorm(5); summary(lm(rich ~ tree + junk, d))$r.squared     # goes up with a random predictor
```

## Connections
- **Builds on:** [[Sum of Squares]], [[Correlation]]
- **Leads to:** [[Adjusted R-squared]], [[Overfitting]], [[Marginal and Conditional R-squared]], [[Deviance]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What does R² measure?
??
The proportion of variance in the response explained by the model: 1 − RSS/TSS.
++++

Why can't R² be used to compare models with different numbers of predictors?
??
It never decreases when a predictor is added, so it always favours the larger model.
++++
