---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "R²"
  - "Coefficient of determination"
  - "Multiple R-squared"
status: seedling
---

# R-squared

**In one line:** R-squared is the proportion of the variation in the response that the model's fitted values account for.

> [!info] Before this, it helps to know
> [[Sum of Squares]] (what is compared) · [[Residual]] (the unexplained part) · [[Correlation]] (R² is its square in simple regression)

## The everyday picture
How much of a mess you've tidied. The scatter of the raw data around their mean is the starting mess. The scatter left around the fitted line is what remains. R² is the share you cleared.

## A tiny example
Total sum of squares 30. Residual sum of squares 1.1. R² = 1 − 1.1/30 = 0.963.

## Start from zero
1. **Total variation:** TSS = Σ(yᵢ − ȳ)².
2. **Unexplained:** RSS = Σ(yᵢ − ŷᵢ)².
3. **R² = 1 − RSS/TSS.**
4. **0 means no better than the mean. 1 means a perfect fit.**
5. **In simple regression R² = r²,** the squared correlation.
6. **It never goes down when you add a predictor,** even a useless one. *So it can't be used to choose between models of different size.*
7. **It measures fit to this sample,** not correctness and not predictive ability.
8. **What counts as "good" depends on the field.** In field ecology 0.2 can be a strong result.

## In R
```r
d <- data.frame(tree = c(0, 10, 20, 30, 40), rich = c(12, 11, 9, 8, 5))
m <- lm(rich ~ tree, d); summary(m)$r.squared
1 - sum(resid(m)^2) / sum((d$rich - mean(d$rich))^2); cor(d$tree, d$rich)^2
set.seed(10); d$junk <- rnorm(5); summary(lm(rich ~ tree + junk, d))$r.squared     # goes up with a random predictor
```

## In the course
[[Zuur et al. 2009 Appendix A]]. Mixed-model versions: [[Harrison et al. 2018]].

## Common confusions
- **"High R² means the model is right."** A curve fitted by a line can have a high R² and clear residual pattern.
- **"Low R² means the effect isn't real."** A real slope can sit in very noisy data.

## Explain it back
- Why does R² never decrease when predictors are added?

*Pass test:* you can compute R² from sums of squares and state two limits.

## Connections
- **Builds on:** [[Sum of Squares]], [[Correlation]]
- **Leads to:** [[Adjusted R-squared]], [[Overfitting]], [[Marginal and Conditional R-squared]], [[Deviance]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

What does R² measure?
??
The proportion of variance in the response explained by the model: 1 − RSS/TSS.
++++

Why can't R² be used to compare models with different numbers of predictors?
??
It never decreases when a predictor is added, so it always favours the larger model.
++++
