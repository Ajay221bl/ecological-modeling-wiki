---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "The expected log predictive density is the quantity WAIC and LOO aim to estimate: the log score a model would earn, on average, when predicting new data from the same process."
aliases:
  - "elpd"
  - "ELPD"
  - "elpd_loo"
  - "elpd_waic"
  - "Expected log pointwise predictive density"
status: seedling
---

# Expected Log Predictive Density

The **expected log predictive density** (elpd) is the quantity [[WAIC]] and [[Leave-one-out Cross-validation|LOO]] aim to estimate: the log score a model would earn, on average, when predicting new data from the same process ([[Out-of-sample Prediction]]). The [[Log Pointwise Predictive Density]] scores the data used for fitting, and elpd scores new data, so elpd ≈ lppd minus a correction for overfitting. WAIC estimates it as lppd − p_waic, and LOO as Σ log p(yᵢ | y without i).

Higher elpd is better, on the log-likelihood scale; on the information-criterion scale, −2 × elpd, smaller is better and comparable with AIC. It has a standard error from the spread of the pointwise contributions, so differences between models come with uncertainty ([[loo_compare()]]). In the code below `loo()` on a regression gives elpd_loo = −94.2 with SE 4.7, p_loo = 3.0 and looic = 188.5.

It appears as the `elpd_loo` row of `loo()` output in the labs ([[Course Website]]). Higher elpd is not worse, as it would be for AIC: higher elpd is better, and LOOIC = −2 elpd is the AIC-like scale.

```r
set.seed(2); x <- runif(60, 0, 10); y <- 1 + 0.5 * x + rnorm(60); m <- lm(y ~ x)
B <- MASS::mvrnorm(2000, coef(m), vcov(m)); sig <- sigma(m) * sqrt(58 / rchisq(2000, 58))
ll <- sapply(1:60, function(i) dnorm(y[i], B[, 1] + B[, 2] * x[i], sig, log = TRUE))
l <- suppressWarnings(loo::loo(ll)); l$estimates
```

## Connections
- **Builds on:** [[Log Pointwise Predictive Density]], [[Out-of-sample Prediction]]
- **Leads to:** [[WAIC]], [[Leave-one-out Cross-validation]], [[loo_compare()]]
- **Part of:** [[MOC 11 - Bayesian Model Selection|MOC - Bayesian Model Selection]]

## Flashcards

What does elpd estimate?
??
The expected log predictive density for new data: a model's out-of-sample predictive accuracy.
++++

How is LOOIC related to elpd_loo?
??
LOOIC = −2 × elpd_loo.
++++
