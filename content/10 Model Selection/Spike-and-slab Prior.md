---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "A spike-and-slab prior is a mixture of a narrow \"spike\" at zero and a wide \"slab\", expressing the belief that each coefficient is either essentially zero or meaningfully nonzero."
aliases:
  - "Spike and slab"
  - "Spike-and-slab"
  - "Horseshoe prior (related)"
status: seedling
---

# Spike-and-slab Prior

A switch with a dimmer: most predictors are expected to be off, and a few to be on at whatever brightness the data say. A **spike-and-slab prior** is a [[Mixture Distribution]] of a narrow "spike" at zero and a wide "slab", βⱼ ~ (1 − π) × Spike + π × Slab, expressing the belief that each coefficient is either essentially zero or meaningfully nonzero ([[Prior Distribution]]). The spike is a point mass at 0 or a Normal(0, very small sd), the slab a Normal(0, large enough sd), and π is the prior probability that a predictor matters.

The posterior mixes too, giving the probability that each βⱼ came from the slab, like the switches of [[Indicator Variable Selection]]. With a continuous spike it can be sampled with HMC. In the code below, with π = 0.2 and a slab of sd 1, 81% of prior draws are within 0.05 of zero, while the 90th and 99th percentiles of |β| are 0.64 and 1.89.

Continuous shrinkage priors such as the horseshoe and regularised horseshoe are smooth relatives that shrink small effects hard and leave big ones alone; brms offers `horseshoe()` ([[Regularization]], [[Weakly Informative Prior]], [[Hobbs and Hooten 2015 Ch9]]). It is not the same as the lasso: both shrink, but spike-and-slab gives inclusion probabilities.

```r
set.seed(11); pi_slab <- 0.2; slab <- rbinom(10000, 1, pi_slab); b <- ifelse(slab == 1, rnorm(10000, 0, 1), rnorm(10000, 0, 0.01))
round(c(prop_near_zero = mean(abs(b) < 0.05), quantile(abs(b), c(0.5, 0.9, 0.99))), 2)
```

## Connections
- **Builds on:** [[Mixture Distribution]], [[Prior Distribution]]
- **Leads to:** [[Indicator Variable Selection]], [[Regularization]], [[Weakly Informative Prior]]
- **Part of:** [[MOC 11 - Bayesian Model Selection|MOC - Bayesian Model Selection]]

## Flashcards

What is a spike-and-slab prior?
??
A mixture of a narrow component at zero and a wide component, giving each coefficient a probability of being effectively zero or not.
++++
