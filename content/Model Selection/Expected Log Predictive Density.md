---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "elpd"
  - "ELPD"
  - "elpd_loo"
  - "elpd_waic"
  - "Expected log pointwise predictive density"
status: seedling
---

# Expected Log Predictive Density

**In one line:** the expected log predictive density is the quantity WAIC and LOO aim to estimate: the log score a model would earn, on average, when predicting new data from the same process.

> [!info] Before this, it helps to know
> [[Log Pointwise Predictive Density]] (its in-sample version) · [[Out-of-sample Prediction]] (what "expected" refers to)

## Start from zero
1. **lppd scores the data used for fitting.** elpd scores new data.
2. **elpd ≈ lppd − (a correction for overfitting).**
3. **WAIC estimates it as lppd − p_waic.**
4. **LOO estimates it as Σ log p(yᵢ | y without i).**
5. **Higher elpd is better.** It is on the log-likelihood scale.
6. **Information-criterion scale:** −2 × elpd. Smaller is better, comparable with AIC.
7. **It has a standard error,** from the spread of the pointwise contributions. So differences between models come with uncertainty.

## In R
```r
set.seed(2); x <- runif(60, 0, 10); y <- 1 + 0.5 * x + rnorm(60); m <- lm(y ~ x)
B <- MASS::mvrnorm(2000, coef(m), vcov(m)); sig <- sigma(m) * sqrt(58 / rchisq(2000, 58))
ll <- sapply(1:60, function(i) dnorm(y[i], B[, 1] + B[, 2] * x[i], sig, log = TRUE))
l <- suppressWarnings(loo::loo(ll)); l$estimates
```

## In the course
The `elpd_loo` row of `loo()` output in the labs ([[Course Website]]).

## Common confusions
- **"Higher elpd is worse, like AIC."** Higher elpd is better. LOOIC = −2 elpd is the AIC-like scale.

## Explain it back
- How is elpd related to LOOIC?

*Pass test:* you can read elpd and its SE from loo output.

## Connections
- **Builds on:** [[Log Pointwise Predictive Density]], [[Out-of-sample Prediction]]
- **Leads to:** [[WAIC]], [[Leave-one-out Cross-validation]], [[loo_compare()]]
- **Part of:** [[MOC - Bayesian Model Selection]]

## Flashcards

What does elpd estimate?
??
The expected log predictive density for new data: a model's out-of-sample predictive accuracy.
++++

How is LOOIC related to elpd_loo?
??
LOOIC = −2 × elpd_loo.
++++
