---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The inverse gamma distribution is the distribution of one divided by a gamma-distributed quantity, traditionally used as a prior for variances."
aliases:
  - "Inverse-gamma"
  - "Inverted gamma"
status: seedling
---

# Inverse Gamma Distribution

If your speed varies from trip to trip, your travel time, distance ÷ speed, varies too, but with a different shape. The **inverse gamma distribution** is to the [[Gamma Distribution]] what travel time is to speed: if X ~ Gamma(shape a, rate b), then 1/X follows an inverse gamma with the same a and b. It lives on positive numbers, is right-skewed with a heavy upper tail, and has mean b/(a − 1), which exists only when a > 1. With a = 3 and b = 4 the mean is 2, and the code below confirms it by inverting simulated gamma draws and shows the long upper tail in the quantiles.

It became the standard prior for a [[Variance]] because, with normal data, it is conjugate for σ²: an inverse gamma prior gives an inverse gamma posterior ([[Conjugate Prior]]). Equivalently, the precision 1/σ² gets a gamma prior, which is why old [[JAGS and BUGS]] code is full of `dgamma(0.001, 0.001)` on precisions ([[Precision Parameter]]).

It fell out of favour for random-effect variances. When the true group-level variance is near zero, the supposedly vague inverse-gamma(0.001, 0.001) turns out to be strongly informative and can dominate the posterior, a point Gelman made and the Bayesian mixed-model lab discusses ([[Variance Components|Variance Component]], [[Hobbs and Hooten 2015 Ch3]]). [[Half-Normal Prior|Half-normal]], half-Cauchy or exponential priors on the [[Standard Deviation|standard deviation]] are now preferred ([[Half-Cauchy Prior]]). So the confusion to avoid is thinking inverse gamma(0.001, 0.001) is harmless.

```r
set.seed(6); a <- 3; b <- 4
v <- 1 / rgamma(1e5, shape = a, rate = b)
c(mean(v), b / (a - 1))                         # 2
quantile(v, c(0.025, 0.5, 0.975))               # skewed: long upper tail
```

## Connections
- **Builds on:** [[Gamma Distribution]], [[Variance]], [[Standard Deviation]]
- **Leads to:** [[Conjugate Prior]], [[Precision Parameter]], [[Half-Cauchy Prior]], [[Variance Components|Variance Component]], [[JAGS and BUGS]], [[Half-Normal Prior]]
- **See also:** [[Prior Distribution]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What is the inverse gamma distribution?
??
The distribution of the reciprocal of a gamma random variable.
++++

What is it traditionally used for?
??
As a conjugate prior for a normal variance.
++++
