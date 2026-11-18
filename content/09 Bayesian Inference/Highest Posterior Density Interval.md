---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A highest posterior density interval is the narrowest range that contains the stated share of the posterior, so every value inside it is more probable than any value outside."
aliases:
  - "HPDI"
  - "HPD interval"
  - "HDI"
  - "Highest density interval"
  - "Highest posterior density"
status: seedling
---

# Highest Posterior Density Interval

Flood a landscape, then lower the water until 95% of the land area is exposed: what stands above the waterline is the highest ground, one stretch for a single hill and possibly two islands for two hills. A **highest posterior density interval** (HPDI or HDI) is the narrowest range containing the stated share of the posterior, so every value inside it is more probable than any value outside ([[Credible Interval]], [[Probability Density Function]]). To find it from draws, find the shortest interval containing 95% of them.

For symmetric posteriors it matches the [[Equal-tailed Interval]]. For skewed posteriors it shifts toward the peak and is shorter. In the code below, for an exponential posterior the equal-tailed interval is 0.025 to 3.67 while the HPD interval runs from 0 to 3.02, starting at the mode. For posteriors with several peaks it may be a set of separate intervals.

It is not invariant to [[Transformation|transformation]], since the HPDI of σ² isn't the square of the HPDI of σ, and it is noisier to estimate from draws than quantiles. In R use `coda::HPDinterval()`, `bayestestR::hdi()` or `tidybayes::hdi()` ([[Posterior Summary]], [[Hobbs and Hooten 2015 Ch8]]). HPDI and ETI do not contain different amounts of probability: both contain 95%, and they differ in which 95%.

```r
set.seed(5); d <- rexp(20000, 1); library(coda)
rbind(equal_tailed = quantile(d, c(0.025, 0.975)), hpd = HPDinterval(mcmc(d))[1, ])       # HPD starts at the mode and is shorter
```

## Connections
- **Builds on:** [[Credible Interval]], [[Equal-tailed Interval]], [[Transformation]]
- **Leads to:** [[Posterior Summary]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[Equal-tailed vs Highest Density Interval]]

## Flashcards

What is a highest posterior density interval?
??
The narrowest interval containing the specified posterior probability. All points inside have higher density than points outside.
++++
