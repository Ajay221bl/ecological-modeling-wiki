---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "`loo_compare()` ranks fitted models by their leave-one-out (or WAIC) expected log predictive density and reports each one's difference from the best with a standard error."
aliases:
  - "loo_compare"
  - "Comparing models with loo"
  - "elpd_diff"
  - "se_diff"
status: seedling
---

# loo_compare()

**`loo_compare()`** ranks fitted models by their leave-one-out (or WAIC) expected log predictive density and reports each one's difference from the best with a standard error ([[Leave-one-out Cross-validation]], [[Expected Log Predictive Density]]). Call it as `loo_compare(loo(m1), loo(m2), loo(m3))`, or with brms as `loo_compare(m1, m2, criterion = "loo")` after `add_criterion()`. The output has one row per model, best first, with `elpd_diff` (0 for the best, negative for the others) and `se_diff`.

The SE of the difference is computed from paired pointwise differences, which is more precise than combining the two models' separate SEs ([[Standard Error]]). As a rough reading, if |elpd_diff| is less than about 4 the models are hard to tell apart; if larger, compare it with se_diff, and a difference several times its SE is meaningful. The equivalent AIC-scale difference is −2 × elpd_diff ([[Delta AIC]]). In the code below the intercept-only model is 41.9 elpd units behind the model with a slope, with se_diff 7.0, about six standard errors.

Models must be fitted to the same data. Stacking weights from `loo_model_weights()` are a predictive alternative to Akaike-style weights ([[Model Averaging]]). It is used in the Bayesian model comparison lab ([[Course Website]]). A negative elpd_diff does not always mean a worse model: small differences relative to se_diff are within noise.

```r
set.seed(8); x <- runif(80, 0, 10); y <- 1 + 0.5 * x + rnorm(80); post <- function(m, X) { B <- MASS::mvrnorm(4000, coef(m), vcov(m)); sig <- sigma(m) * sqrt(df.residual(m) / rchisq(4000, df.residual(m))); sapply(1:80, function(i) dnorm(y[i], B %*% X[i, ], sig, log = TRUE)) }
m1 <- lm(y ~ x); m0 <- lm(y ~ 1)
l1 <- suppressWarnings(loo::loo(post(m1, cbind(1, x)))); l0 <- suppressWarnings(loo::loo(post(m0, matrix(1, 80, 1))))
loo::loo_compare(list(slope = l1, intercept_only = l0))
```

## Connections
- **Builds on:** [[Leave-one-out Cross-validation]], [[Standard Error]]
- **Leads to:** [[Expected Log Predictive Density]], [[Model Averaging]], [[Delta AIC]]
- **Part of:** [[MOC 11 - Bayesian Model Selection|MOC - Bayesian Model Selection]]

## Flashcards

What does loo_compare() report?
??
For each model, elpd_diff from the best model and its standard error se_diff.
++++

How is elpd_diff converted to the AIC scale?
??
Multiply by −2.
++++
