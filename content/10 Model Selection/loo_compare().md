---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "loo_compare"
  - "Comparing models with loo"
  - "elpd_diff"
  - "se_diff"
status: seedling
---

# loo_compare()

**In one line:** `loo_compare()` ranks fitted models by their leave-one-out (or WAIC) expected log predictive density and reports each one's difference from the best with a standard error.

> [!info] Before this, it helps to know
> [[Leave-one-out Cross-validation]] (what is compared) · [[Standard Error]] (for the difference)

## Start from zero
1. **Call:** `loo_compare(loo(m1), loo(m2), loo(m3))`. With brms: `loo_compare(m1, m2, criterion = "loo")` after `add_criterion()`.
2. **Output:** one row per model, best first. `elpd_diff` (0 for the best, negative for others) and `se_diff`.
3. **The SE of the difference is computed from paired pointwise differences,** which is more precise than combining the two models' separate SEs.
4. **Rough reading:** if |elpd_diff| is less than about 4, the models are hard to tell apart. If larger, compare it with se_diff: a difference several times its SE is meaningful.
5. **Equivalent AIC-scale difference = −2 × elpd_diff.**
6. **Models must be fitted to the same data.**
7. **Stacking weights** (`loo_model_weights()`) are a predictive alternative to Akaike-style weights.

## In R
```r
set.seed(8); x <- runif(80, 0, 10); y <- 1 + 0.5 * x + rnorm(80); post <- function(m, X) { B <- MASS::mvrnorm(4000, coef(m), vcov(m)); sig <- sigma(m) * sqrt(df.residual(m) / rchisq(4000, df.residual(m))); sapply(1:80, function(i) dnorm(y[i], B %*% X[i, ], sig, log = TRUE)) }
m1 <- lm(y ~ x); m0 <- lm(y ~ 1)
l1 <- suppressWarnings(loo::loo(post(m1, cbind(1, x)))); l0 <- suppressWarnings(loo::loo(post(m0, matrix(1, 80, 1))))
loo::loo_compare(list(slope = l1, intercept_only = l0))
```

## In the course
Bayesian model comparison lab ([[Course Website]]).

## Common confusions
- **"Any negative elpd_diff means the model is worse."** Small differences relative to se_diff are within noise.

## Explain it back
- How do you judge whether elpd_diff is meaningful?

*Pass test:* you can read a loo_compare table.

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
