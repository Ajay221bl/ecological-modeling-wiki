---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Adjusted R²"
  - "R² adjusted"
status: seedling
---

# Adjusted R-squared

**In one line:** adjusted R-squared is R-squared with a penalty for the number of predictors, so that it rises only when a new predictor improves the fit by more than chance would.

> [!info] Before this, it helps to know
> [[R-squared]] (what is adjusted) · [[Degrees of Freedom]] (the penalty) · [[Overfitting]] (what it guards against)

## The everyday picture
Judging a team's score per player instead of the raw total. Adding a player always adds points. Only a useful player raises the average.

## Start from zero
1. **Adjusted R² = 1 − (RSS/(n − p)) / (TSS/(n − 1)).** p counts all coefficients.
2. **It compares variances, not sums of squares.**
3. **It can go down** when a useless predictor is added, and can even be negative.
4. **It is always below R².**
5. **Why it is only a partial fix:** it is a mild penalty. AIC and cross-validation are better tools for choosing models.

## In R
```r
set.seed(11); n <- 30; x <- rnorm(n); y <- 1 + 0.5 * x + rnorm(n); junk <- matrix(rnorm(n * 5), n)
s1 <- summary(lm(y ~ x)); s2 <- summary(lm(y ~ x + junk))
rbind(r2 = c(s1$r.squared, s2$r.squared), adj = c(s1$adj.r.squared, s2$adj.r.squared))    # R² rises with 5 junk predictors. Adjusted R² does not reward them
```

## In the course
Mentioned by [[Johnson and Omland 2004]] as an early, limited model selection criterion.

## Common confusions
- **"Adjusted R² solves model selection."** It under-penalises complexity.

## Explain it back
- Why can adjusted R² decrease when a predictor is added?

*Pass test:* you can explain the difference from plain R².

## Connections
- **Builds on:** [[R-squared]], [[Degrees of Freedom]]
- **Leads to:** [[AIC]], [[Model Selection]], [[Overfitting]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

How does adjusted R² differ from R²?
??
It penalises the number of predictors, so it increases only if a new predictor improves fit more than expected by chance.
++++
