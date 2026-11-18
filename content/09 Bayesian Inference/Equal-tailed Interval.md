---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "An equal-tailed interval is a credible interval that leaves the same amount of posterior probability outside each end, such as 2.5% below and 2.5% above."
aliases:
  - "ETI"
  - "Quantile interval"
  - "Percentile interval (posterior)"
  - "Central interval"
  - "Equal-tailed credible interval"
status: seedling
---

# Equal-tailed Interval

Trim the same length from both ends of a loaf. An **equal-tailed interval** (ETI) is a [[Credible Interval]] that leaves the same amount of [[Posterior Distribution|posterior probability]] outside each end: a 95% ETI runs from the 2.5% [[Quantile]] to the 97.5% quantile. It is simple to compute, stable because quantiles are easy to estimate from draws, and the default in brms and Stan.

It is invariant to [[Transformation|transformation]]: the ETI of exp(θ) is exp of the ETI of θ, which is convenient for [[Back-transformation]]. In the code below, the 95% ETI of an exponential posterior is 0.027 to 3.76, and computing it on the log scale and transforming back gives the same interval. For symmetric posteriors it equals the highest density interval.

For strongly skewed posteriors it can leave out the most probable values near a boundary and include less probable ones in the long tail. In the exponential example the most probable value, 0, lies outside the interval, so the ETI does not always contain the most probable value; the [[Highest Posterior Density Interval]] does ([[Hobbs and Hooten 2015 Ch8]]).

```r
set.seed(4); d <- rexp(20000, 1); quantile(d, c(0.025, 0.975))            # for this skewed posterior the mode (0) lies outside the equal-tailed interval
exp(quantile(log(d), c(0.025, 0.975)))                                    # transformation-invariant: same interval via the log scale
```

## Connections
- **Builds on:** [[Credible Interval]], [[Quantile]], [[Posterior Distribution]], [[Transformation]]
- **Leads to:** [[Highest Posterior Density Interval]], [[Back-transformation]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[Equal-tailed vs Highest Density Interval]]

## Flashcards

What is an equal-tailed 95% interval?
??
The interval between the 2.5% and 97.5% posterior quantiles.
++++
