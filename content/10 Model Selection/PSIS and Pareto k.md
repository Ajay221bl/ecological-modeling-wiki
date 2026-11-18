---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "Pareto smoothed importance sampling is the technique that approximates leave-one-out posteriors from a single fit, and its Pareto k value flags observations for which the approximation is unreliable."
aliases:
  - "Pareto smoothed importance sampling"
  - "PSIS"
  - "Pareto k"
  - "Pareto k diagnostic"
  - "k-hat"
status: seedling
---

# PSIS and Pareto k

**Pareto smoothed importance sampling** (PSIS) is the technique that approximates leave-one-out posteriors from a single fit ([[Leave-one-out Cross-validation]]). Importance sampling reweights draws from the [[Joint Posterior Distribution|full posterior]] so they behave like draws from the posterior without observation i, with weight ∝ 1 / p(yᵢ | θ) ([[Posterior Draws]]). If yᵢ is very influential, a few draws get enormous weights and the estimate is unstable, so PSIS fits a generalised Pareto distribution to the largest weights and replaces them with smoothed values. The fitted [[Distribution Parameters|shape parameter]] is **k**.

The loo package's thresholds are k below 0.5 good, 0.5 to 0.7 ok and above 0.7 bad, meaning the estimate for that observation is unreliable; recent versions adjust the threshold slightly for the number of draws. In the code below one far-out point is added to a regression: every other observation has k at most 0.21, while the influential point has k = 2.15.

With a bad k, check the observation for an [[Outlier]] or coding error, refit leaving it out (`reloo`), use [[Cross-validation|k-fold CV]], or reconsider the model, for example with a heavier-tailed likelihood ([[Cook's Distance|Influential Observation]]). Many high k values usually mean a misspecified or overly flexible model. Pareto k tables appear in `loo()` output in the labs, and feed into [[loo_compare()]] ([[Course Website]]). High k does not mean the model is wrong; it means the LOO estimate for that point is unreliable, and the model may or may not be at fault.

```r
set.seed(7); x <- c(runif(59, 0, 10), 30); y <- c(1 + 0.5 * x[1:59] + rnorm(59), 1); m <- lm(y ~ x)          # one far-out, influential point
B <- MASS::mvrnorm(4000, coef(m), vcov(m)); sig <- sigma(m) * sqrt(58 / rchisq(4000, 58)); ll <- sapply(1:60, function(i) dnorm(y[i], B[, 1] + B[, 2] * x[i], sig, log = TRUE))
k <- suppressWarnings(loo::loo(ll))$diagnostics$pareto_k; round(c(max_other = max(k[-60]), influential_point = k[60]), 2)
```

## Connections
- **Builds on:** [[Leave-one-out Cross-validation]], [[Posterior Draws]], [[Cook's Distance|Influential Observation]], [[Joint Posterior Distribution]], [[Distribution Parameters]], [[Cross-validation]]
- **Leads to:** [[loo_compare()]], [[Outlier]]
- **Part of:** [[MOC 11 - Bayesian Model Selection|MOC - Bayesian Model Selection]]

## Flashcards

What does a Pareto k above 0.7 mean in loo output?
??
The importance-sampling estimate for that observation is unreliable, usually because the point is highly influential.
++++
