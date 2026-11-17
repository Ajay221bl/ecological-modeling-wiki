---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Spike and slab"
  - "Spike-and-slab"
  - "Horseshoe prior (related)"
status: seedling
---

# Spike-and-slab Prior

**In one line:** a spike-and-slab prior is a mixture of a narrow "spike" at zero and a wide "slab", expressing the belief that each coefficient is either essentially zero or meaningfully nonzero.

> [!info] Before this, it helps to know
> [[Mixture Distribution]] (its form) · [[Prior Distribution]] (its role) · [[Indicator Variable Selection]] (its discrete cousin)

## The everyday picture
A switch with a dimmer. Most predictors are expected to be off (the spike). A few are expected to be on, at whatever brightness the data say (the slab).

## Start from zero
1. **βⱼ ~ (1 − π) × Spike + π × Slab.**
2. **Spike:** a point mass at 0, or Normal(0, very small sd).
3. **Slab:** Normal(0, large enough sd).
4. **π:** the prior probability that a predictor matters.
5. **The posterior mixes too:** you get the probability that each βⱼ came from the slab.
6. **With a continuous spike** it can be sampled with HMC.
7. **Continuous shrinkage priors** (horseshoe, regularised horseshoe) are smooth relatives that shrink small effects hard and leave big ones alone. brms offers `horseshoe()`.

## In R
```r
set.seed(11); pi_slab <- 0.2; slab <- rbinom(10000, 1, pi_slab); b <- ifelse(slab == 1, rnorm(10000, 0, 1), rnorm(10000, 0, 0.01))
round(c(prop_near_zero = mean(abs(b) < 0.05), quantile(abs(b), c(0.5, 0.9, 0.99))), 2)
```

## In the course
[[Hobbs and Hooten 2015 Ch9]] in connection with regularization and model selection.

## Common confusions
- **"It is the same as lasso."** Both shrink, but spike-and-slab gives inclusion probabilities.

## Explain it back
- What do the spike and the slab represent?

*Pass test:* you can describe the prior and its output.

## Connections
- **Builds on:** [[Mixture Distribution]], [[Prior Distribution]]
- **Leads to:** [[Indicator Variable Selection]], [[Regularization]], [[Weakly Informative Prior]]
- **Part of:** [[MOC 11 - Bayesian Model Selection|MOC - Bayesian Model Selection]]

## Flashcards

What is a spike-and-slab prior?
??
A mixture of a narrow component at zero and a wide component, giving each coefficient a probability of being effectively zero or not.
++++
