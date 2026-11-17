---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A posterior summary condenses a posterior distribution into a few numbers, usually a central value, a spread and an interval."
aliases:
  - "Posterior mean"
  - "Posterior median"
  - "Posterior standard deviation"
  - "Posterior Summary (mean, median, SD)"
  - "Point estimate (Bayesian)"
  - "Est.Error"
status: seedling
---

# Posterior Summary

A weather forecast's headline gives the most representative temperature and a range, though behind it is a whole distribution of possible temperatures. A **posterior summary** condenses a posterior into a few numbers, usually a central value, a spread and an interval ([[Posterior Draws]]). The posterior [[Mean]] of the draws is the commonest point estimate. The posterior [[Median]] is the middle draw; it suits skewed posteriors and transforms cleanly, since the median of exp(θ) is exp of the median of θ. The posterior mode is the peak ([[Maximum a Posteriori Estimate]]) and is harder to estimate from draws. The posterior [[Standard Deviation]] is the spread of the draws, the Bayesian counterpart of a standard error, which brms calls `Est.Error`. The interval is usually a [[Credible Interval]] from the 2.5% and 97.5% quantiles.

For symmetric posteriors the mean, median and mode coincide. For skewed ones, such as variance parameters and back-transformed quantities, they differ, so report the median and say so. In the code below, a right-skewed posterior like that of a group-level standard deviation has mean 0.98, median 0.82 and mode 0.58, standard deviation 0.65 and interval 0.26 to 2.67.

Look at the whole distribution before trusting a summary, since two peaks or a pile-up at a boundary can't be seen in a mean ([[Marginal Posterior Distribution]]). The `Estimate`, `Est.Error`, `l-95% CI` and `u-95% CI` columns of a brms summary are these quantities ([[Course Website]], [[Hobbs and Hooten 2015 Ch8]]). `Est.Error` is not a standard error in the frequentist sense; it is the posterior standard deviation.

```r
set.seed(2); sigma_draws <- rlnorm(4000, log(0.8), 0.6)                  # a right-skewed posterior, as for a group-level sd
d <- density(sigma_draws); round(c(mean = mean(sigma_draws), median = median(sigma_draws), mode = d$x[which.max(d$y)], sd = sd(sigma_draws), quantile(sigma_draws, c(.025, .975))), 2)
```

## Connections
- **Builds on:** [[Posterior Draws]], [[Mean]], [[Median]]
- **Leads to:** [[Credible Interval]], [[Maximum a Posteriori Estimate]], [[Marginal Posterior Distribution]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What does "Est.Error" mean in a brms summary?
??
The posterior standard deviation of the parameter.
++++

Which posterior summary is preferable for a skewed posterior?
??
The median (with a quantile-based interval).
++++
