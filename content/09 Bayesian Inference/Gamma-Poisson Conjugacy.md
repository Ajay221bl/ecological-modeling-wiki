---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "With a Gamma(a, b) prior on a Poisson rate and n counts that sum to S, the posterior is Gamma(a + S, b + n)."
aliases:
  - "Gamma-Poisson update"
  - "Gamma prior with Poisson likelihood"
status: seedling
---

# Gamma-Poisson Conjugacy

A running total: the prior is "a events seen in b units of effort", new data add S events over n more units, and the rate estimate is total events over total effort. **Gamma-Poisson conjugacy** says exactly that: with a Gamma(a, b) prior on a Poisson rate, b being a rate parameter, and n counts summing to S, the posterior is Gamma(a + S, b + n) ([[Conjugate Prior]], [[Gamma Distribution]], [[Poisson Distribution]]). With a Gamma(2, 1) prior, about 2 birds per point, and five point counts 3, 5, 4, 6 and 2 (sum 20), the posterior is Gamma(22, 6), mean 22/6 = 3.7.

The prior is ∝ λ^(a−1) e^(−bλ) and the likelihood of n counts ∝ λ^S e^(−nλ), so the product is ∝ λ^(a+S−1) e^(−(b+n)λ), a Gamma(a + S, b + n). The posterior mean (a + S)/(b + n) lies between the prior mean a/b and the sample mean S/n, and b acts as the prior's number of observations. The code below gives the update and a 95% interval of 2.3 to 5.4 birds per point, against a sample mean of 4.

R's gamma functions accept either a rate or a scale, and the update above uses the rate. The same pairing explains the [[Negative Binomial Distribution]]: a Poisson whose rate is gamma-distributed has a negative binomial distribution. The binomial counterpart is [[Beta-Binomial Conjugacy]].

```r
y <- c(3, 5, 4, 6, 2); a <- 2; b <- 1
c(shape = a + sum(y), rate = b + length(y), mean = (a + sum(y)) / (b + length(y)))
qgamma(c(0.025, 0.975), a + sum(y), b + length(y)); mean(y)
```

## Connections
- **Builds on:** [[Conjugate Prior]], [[Gamma Distribution]], [[Poisson Distribution]]
- **Leads to:** [[Beta-Binomial Conjugacy]], [[Negative Binomial Distribution]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

Gamma(a, b) prior and n Poisson counts summing to S give what posterior?
??
Gamma(a + S, b + n).
++++
