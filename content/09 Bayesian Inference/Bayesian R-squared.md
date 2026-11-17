---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Bayes R2"
  - "bayes_R2()"
  - "Bayesian R2"
status: seedling
---

# Bayesian R-squared

**In one line:** Bayesian R-squared measures the share of variance explained by a Bayesian model, computed for every posterior draw so that it comes with its own uncertainty.

> [!info] Before this, it helps to know
> [[R-squared]] (the classical version) · [[Posterior Draws]] (it is computed per draw) · [[Variance]] (what is partitioned)

## The everyday picture
The usual "how much of the scatter does the model account for", reported as a range to show that the answer itself is uncertain.

## Start from zero
1. **Classical R² = 1 − residual SS / total SS.** In a Bayesian model with strong priors this can exceed 1, which makes no sense.
2. **Bayesian version, for each draw s:** R²_s = Var(fitted values) / (Var(fitted values) + Var(residuals)).
3. **Always between 0 and 1.**
4. **You get a posterior distribution of R².** Report its median and interval.
5. **In brms:** `bayes_R2(fit)`.
6. **For mixed models:** computed with or without group-level effects, corresponding to conditional and marginal R².
7. **Same cautions as any R²:** it isn't a model selection tool and says nothing about whether assumptions hold.

## In R
```r
set.seed(13); x <- runif(60); y <- 1 + 2 * x + rnorm(60, 0, 0.6); m <- lm(y ~ x); X <- cbind(1, x)
B <- MASS::mvrnorm(2000, coef(m), vcov(m)); r2 <- apply(B, 1, function(b) { f <- X %*% b; var(f) / (var(f) + var(y - f)) })
round(c(median = median(r2), quantile(r2, c(.025, .975)), classical = summary(m)$r.squared), 3)
```

## In the course
`bayes_R2()` in the brms labs ([[Course Website]]).

## Common confusions
- **"Bayesian R² and classical R² are the same number."** They are usually close, but the Bayesian one is a distribution.

## Explain it back
- Why does the Bayesian version use fitted variance over fitted plus residual variance?

*Pass test:* you can report R² for a brms model with an interval.

## Connections
- **Builds on:** [[R-squared]], [[Posterior Draws]]
- **Leads to:** [[Marginal and Conditional R-squared]], [[Deviance Explained]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

How is Bayesian R² defined for one posterior draw?
??
Variance of the fitted values divided by (variance of fitted values + variance of residuals).
++++
