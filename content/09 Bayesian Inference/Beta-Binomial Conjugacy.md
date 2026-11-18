---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "With a Beta(a, b) prior on a probability and y successes in n trials, the posterior is Beta(a + y, b + n − y)."
aliases:
  - "Beta-binomial update"
  - "Beta prior with binomial likelihood"
  - "Beta-binomial model (conjugate)"
status: seedling
---

# Beta-Binomial Conjugacy

A tally board already has some chalk marks under "success" and "failure"; each new observation adds a mark to one column. **Beta-binomial conjugacy** is that board: with a Beta(a, b) prior on a probability and y successes in n trials, the posterior is Beta(a + y, b + n − y) ([[Conjugate Prior]], [[Beta Distribution]], [[Binomial Distribution]]). With a Beta(1, 1) prior and 3 of 10 ponds occupied, the posterior is Beta(4, 8), mean 4/12 = 0.33. A second survey finding 6 of 20 gives Beta(10, 22), mean 0.31, and narrower.

The algebra is short. The prior is ∝ p^(a−1)(1 − p)^(b−1), the likelihood ∝ p^y(1 − p)^(n−y), and their product ∝ p^(a+y−1)(1 − p)^(b+n−y−1), which is a Beta(a + y, b + n − y). The [[Posterior Summary|posterior mean]] (a + y)/(a + b + n) is a [[Weighted Mean|weighted average]] of the prior mean a/(a + b) and the data proportion y/n, with weights a + b and n, so a + b is the prior's "[[Sample Size|sample size]]": Beta(1, 1) is worth 2 observations, Beta(12, 8) worth 20. The code below confirms that updating in two batches gives the same Beta(10, 22) as using all 30 ponds at once (median 0.31, 95% interval 0.17 to 0.48), and that a Beta(12, 8) prior pulls 3 of 10 up to a posterior mean of 0.5.

It underlies the frog-pond examples throughout the Bayesian notes ([[Posterior Distribution]], [[Hobbs and Hooten 2015 Ch5]]). Don't confuse it with the [[Beta-binomial Distribution]], a distribution for [[Overdispersion|overdispersed]] data mentioned in [[Harrison et al. 2018]]: the first is an updating rule for a parameter, the second a model for counts. The Poisson counterpart is [[Gamma-Poisson Conjugacy]].

```r
post <- function(a, b, y, n) c(a = a + y, b = b + n - y)
post(1, 1, 3, 10); p1 <- post(1, 1, 3, 10); post(p1[1], p1[2], 6, 20); post(1, 1, 9, 30)      # sequential equals all at once
qbeta(c(0.025, 0.5, 0.975), 10, 22)
c(prior_mean = 12 / 20, data = 3 / 10, posterior_mean = (12 + 3) / (20 + 10))                 # Beta(12, 8) prior, 20 pseudo-observations, outweighs 10 real ones
```

## Connections
- **Builds on:** [[Conjugate Prior]], [[Beta Distribution]], [[Binomial Distribution]], [[Posterior Summary]], [[Weighted Mean]], [[Sample Size]], [[Overdispersion]]
- **Leads to:** [[Posterior Distribution]], [[Gamma-Poisson Conjugacy]], [[Beta-binomial Distribution]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

Beta(a, b) prior and y successes in n trials give what posterior?
??
Beta(a + y, b + n − y).
++++

What is the posterior mean in the beta-binomial model?
??
(a + y) / (a + b + n).
++++
