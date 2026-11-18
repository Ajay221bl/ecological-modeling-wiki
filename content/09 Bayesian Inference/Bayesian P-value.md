---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A Bayesian p-value is the proportion of replicate datasets simulated from the fitted model whose test statistic is more extreme than the same statistic in the real data."
aliases:
  - "Posterior predictive p-value"
  - "Bayesian p value"
  - "PPP"
  - "Bayesian P value"
status: seedling
---

# Bayesian P-value

Rank the real dataset among its forgeries: if it sits in the middle of the pack on some feature, the model reproduces that feature, and if it sits at the very top or bottom, it doesn't. A **Bayesian p-value** does this ranking: choose a discrepancy statistic T, such as the variance, the maximum or the number of zeros ([[Test Statistic]]), compute it for the real data and for each replicate from a [[Posterior Predictive Check]], and take P_B as the proportion of [[Replication|replicates]] with T([[Posterior Predictive Distribution|y_rep]]) ≥ T(y).

Near 0.5 means the model reproduces that feature; near 0 or 1 means lack of fit, with below about 0.05 or above 0.95 a common warning level. Unlike a classical [[P-value|p-value]], extreme in either direction is bad and the middle is good. In the code below, [[Overdispersion|overdispersed counts]] have variance 13.6 and no Poisson replicate is as variable, so P_B = 0; for counts that really are Poisson, P_B is 0.76, comfortably inside the range.

It isn't uniformly distributed under a true model; it tends to cluster near 0.5, so it is conservative: a bad value is strong evidence, a good value weak reassurance. Test several statistics, each aimed at an assumption you worry about ([[Model Validation]], [[Hobbs and Hooten 2015 Ch8]]). A Bayesian p-value below 0.05 does not mean a significant effect: it means the model fails to reproduce a feature of the data, so it tests the model, not a hypothesis about a parameter.

```r
set.seed(12); y <- rnbinom(200, mu = 4, size = 0.8); lam <- rgamma(2000, 0.01 + sum(y), 0.01 + 200)
T_rep <- sapply(lam, function(l) var(rpois(200, l))); c(T_obs = var(y), p_B = mean(T_rep >= var(y)))       # no Poisson replicate is as variable as the data
y2 <- rpois(200, 4); lam2 <- rgamma(2000, 0.01 + sum(y2), 0.01 + 200); mean(sapply(lam2, function(l) var(rpois(200, l))) >= var(y2))     # a correct model: somewhere in the middle
```

## Connections
- **Builds on:** [[Posterior Predictive Check]], [[Test Statistic]], [[Replication]], [[Posterior Predictive Distribution]], [[Overdispersion]]
- **Leads to:** [[P-value|p-value]], [[Model Validation]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is a Bayesian p-value?
??
The proportion of posterior predictive replicates whose discrepancy statistic exceeds that of the observed data.
++++

What Bayesian p-value indicates good fit?
??
Around 0.5. Values near 0 or 1 indicate lack of fit.
++++
