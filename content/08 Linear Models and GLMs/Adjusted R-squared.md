---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Adjusted R-squared is R-squared with a penalty for the number of predictors, so that it rises only when a new predictor improves the fit by more than chance would."
aliases:
  - "Adjusted R²"
  - "R² adjusted"
status: seedling
---

# Adjusted R-squared

Adding a player to a team always adds points to the total score, but only a useful player raises the average per player. **Adjusted R-squared** is [[R-squared]] with a penalty for the number of [[Predictor Variable|predictors]], so that it rises only when a new predictor improves the fit by more than chance would. It compares variances rather than sums of squares: adjusted R² = 1 − (RSS/(n − p)) / (TSS/(n − 1)), where p counts all coefficients ([[Degrees of Freedom]]). It is always below R², it can go down when a useless predictor is added, and it can even be negative.

In the code below, 30 observations with one real predictor are fitted with and without five extra predictors of pure noise. R² rises with the junk predictors; adjusted R² does not reward them.

It is only a partial fix for [[Overfitting]], because the penalty is mild. Johnson and Omland mention it as an early, limited model selection criterion ([[Johnson and Omland 2004]]); [[AIC]] and [[Cross-validation|cross-validation]] are better tools for [[Model Selection]]. So adjusted R² does not solve model selection: it under-penalises complexity.

```r
set.seed(11); n <- 30; x <- rnorm(n); y <- 1 + 0.5 * x + rnorm(n); junk <- matrix(rnorm(n * 5), n)
s1 <- summary(lm(y ~ x)); s2 <- summary(lm(y ~ x + junk))
rbind(r2 = c(s1$r.squared, s2$r.squared), adj = c(s1$adj.r.squared, s2$adj.r.squared))    # R² rises with 5 junk predictors. Adjusted R² does not reward them
```

## Connections
- **Builds on:** [[R-squared]], [[Degrees of Freedom]], [[Predictor Variable]]
- **Leads to:** [[AIC]], [[Model Selection]], [[Overfitting]], [[Cross-validation]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

How does adjusted R² differ from R²?
??
It penalises the number of predictors, so it increases only if a new predictor improves fit more than expected by chance.
++++
