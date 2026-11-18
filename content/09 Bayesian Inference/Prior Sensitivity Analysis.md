---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A prior sensitivity analysis refits the model under different reasonable priors to see whether the conclusions change."
aliases:
  - "Sensitivity analysis (priors)"
  - "Prior sensitivity"
  - "Sensitivity to priors"
status: seedling
---

# Prior Sensitivity Analysis

If two doctors who start from different assumptions reach the same diagnosis, you trust it more; if they disagree, the evidence alone hasn't settled the matter. A **prior sensitivity analysis** gets those second opinions: refit the model under different reasonable priors, wider, narrower or from a different family, and compare the posteriors for the quantities you care about ([[Prior Distribution]], [[Posterior Distribution]], [[Sensitivity Analysis]]). If they agree, the data dominate and you can say so; if they differ, the prior matters, so report that honestly and defend your choice, or collect more data.

The code below fits a [[Survival Rate|survival probability]] under a flat, a sceptical Beta(2, 8) and an optimistic Beta(8, 2) prior. With 2 survivors out of 8 the posterior means are 0.30, 0.22 and 0.56, so the prior matters; with 50 out of 200 they are 0.25, 0.25 and 0.28, so it barely does. A quick visual check is to overlay prior and posterior: a posterior that looks like its prior means the data said little.

The most sensitive parameters are variance parameters with few groups, parameters with little data and weakly identified parameters ([[Identifiability]]). It pairs naturally with an [[Informative Prior]] and with a [[Prior Predictive Check]], and [[Hobbs and Hooten 2015 Ch5]] recommends it. It does not mean trying priors until you like the result; it means reporting all of them.

```r
y <- 2; n <- 8; pri <- list(flat = c(1, 1), skeptical = c(2, 8), optimistic = c(8, 2))
t(sapply(pri, function(ab) round(c(mean = (ab[1] + y) / (sum(ab) + n), qbeta(c(.025, .975), ab[1] + y, ab[2] + n - y)), 2)))    # small n: the prior matters
y <- 50; n <- 200; t(sapply(pri, function(ab) round(c(mean = (ab[1] + y) / (sum(ab) + n), qbeta(c(.025, .975), ab[1] + y, ab[2] + n - y)), 2)))   # large n: it barely does
```

## Connections
- **Builds on:** [[Prior Distribution]], [[Posterior Distribution]], [[Survival Rate]]
- **Leads to:** [[Informative Prior]], [[Prior Predictive Check]], [[Identifiability]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[How to choose a prior]]

## Flashcards

What is a prior sensitivity analysis?
??
Refitting a model with alternative reasonable priors to see whether the posterior conclusions change.
++++
