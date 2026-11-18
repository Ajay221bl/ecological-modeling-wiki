---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "An F-test judges whether a group of terms improves a linear model by comparing the drop in residual variation they produce with the residual variation that remains."
aliases:
  - "F test"
  - "F statistic"
  - "Partial F-test"
  - "Extra sum of squares test"
status: seedling
---

# F-test

To decide whether a new tool was worth buying, compare the extra work it got done per unit of cost with the work still left undone per remaining unit of effort; if the ratio is about 1, the tool did no better than chance. An **F-test** judges whether a group of terms improves a [[Linear Model|linear model]] the same way. Fit a smaller model and a larger one that contains it ([[Nested Models]]). The [[Residual Sum of Squares|residual sum of squares]] always drops from the small to the large ([[Sum of Squares]]), so ask whether it dropped by more than chance: F = [(RSS_small − RSS_large) / extra parameters] ÷ [RSS_large / residual df]. If the extra terms do nothing, F is about 1; comparing it with the [[F Distribution]] gives a p-value.

It is needed instead of separate t-tests when a question involves several coefficients at once. A habitat factor with four levels has three coefficients, and "does habitat matter?" is about all three together. In the code below, `anova(small, large)` tests the habitat factor jointly, the F statistic is recomputed by hand from the two residual sums of squares, and `drop1(large, test = "F")` tests each term in turn. The overall F at the bottom of `summary(lm())` compares your model with the [[Null Model|intercept-only model]] ([[ANOVA]], [[t-test]]).

A significant overall F means at least one [[Predictor Variable|predictor]] matters, not that every one does. In the course, F-tests are used for nested comparisons of linear models before moving to the [[Likelihood Ratio Test]] and AIC, which work for any model fitted by likelihood ([[Zuur et al. 2009 Appendix A]]).

```r
set.seed(13); d <- data.frame(hab = factor(rep(c("a", "b", "c", "d"), each = 8)), x = rnorm(32))
d$y <- 2 + 0.5 * d$x + c(0, 0.5, 1, 1.5)[d$hab] + rnorm(32)
small <- lm(y ~ x, d); large <- lm(y ~ x + hab, d); anova(small, large)
((deviance(small) - deviance(large)) / 3) / (deviance(large) / df.residual(large))    # F by hand
drop1(large, test = "F")
```

## Connections
- **Builds on:** [[F Distribution]], [[Sum of Squares]], [[Linear Model]], [[Residual Sum of Squares]], [[Predictor Variable]]
- **Leads to:** [[ANOVA]], [[Likelihood Ratio Test]], [[Nested Models]], [[t-test]], [[Null Model]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What does an F-test compare?
??
The reduction in residual sum of squares from added terms, per parameter, against the residual variance of the larger model.
++++

When is an F-test needed instead of a t-test?
??
When testing several coefficients jointly, such as a factor with more than two levels.
++++
