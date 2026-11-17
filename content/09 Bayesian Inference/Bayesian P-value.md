---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Posterior predictive p-value"
  - "Bayesian p value"
  - "PPP"
  - "Bayesian P value"
status: seedling
---

# Bayesian P-value

**In one line:** a Bayesian p-value is the proportion of replicate datasets simulated from the fitted model whose test statistic is more extreme than the same statistic in the real data.

> [!info] Before this, it helps to know
> [[Posterior Predictive Check]] (the procedure it summarises) · [[Test Statistic]] (what is compared) · [[P-value|p-value]] (what it is not)

## The everyday picture
Ranking the real dataset among its forgeries. If the real one sits in the middle of the pack on some feature, the model reproduces that feature. If it sits at the very top or bottom, it doesn't.

## Start from zero
1. **Choose a discrepancy statistic T:** variance, maximum, number of zeros, a chi-square-type sum.
2. **Compute T for the real data** and for each replicate.
3. **P_B = proportion of replicates with T(y_rep) ≥ T(y).**
4. **Near 0.5:** the model reproduces that feature.
5. **Near 0 or 1:** lack of fit. Below about 0.05 or above 0.95 is a common warning level.
6. **Unlike a classical p-value, extreme in either direction is bad** and the middle is good.
7. **It isn't uniformly distributed under a true model.** It tends to cluster near 0.5, so it is conservative: a bad value is strong evidence, a good value is weak reassurance.
8. **Test several statistics,** each aimed at an assumption you worry about.

## In R
```r
set.seed(12); y <- rnbinom(200, mu = 4, size = 0.8); lam <- rgamma(2000, 0.01 + sum(y), 0.01 + 200)
T_rep <- sapply(lam, function(l) var(rpois(200, l))); c(T_obs = var(y), p_B = mean(T_rep >= var(y)))       # no Poisson replicate is as variable as the data
y2 <- rpois(200, 4); lam2 <- rgamma(2000, 0.01 + sum(y2), 0.01 + 200); mean(sapply(lam2, function(l) var(rpois(200, l))) >= var(y2))     # a correct model: somewhere in the middle
```

## In the course
[[Hobbs and Hooten 2015 Ch8]].

## Common confusions
- **"A Bayesian p-value below 0.05 means a significant effect."** It means the model fails to reproduce a feature of the data. It tests the model, not a hypothesis about a parameter.

## Explain it back
- What value indicates a good fit, and why?

*Pass test:* you can compute a Bayesian p-value for a chosen statistic.

## Connections
- **Builds on:** [[Posterior Predictive Check]], [[Test Statistic]]
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
