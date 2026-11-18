---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "A conditional autoregressive (CAR) model gives each site a spatial random effect whose expected value, given its neighbours, is the average of the neighbours' effects, so that adjacent sites are pulled toward each other."
aliases:
  - "CAR"
  - "CAR model"
  - "ICAR"
  - "Intrinsic CAR"
  - "BYM"
  - "Besag-York-Mollié"
  - "CAR random effect"
status: seedling
---

# Conditional Autoregressive Model

A **conditional autoregressive (CAR) model** gives each site a spatial random effect whose [[Expected Value|expected value]], given its neighbours, is the average of the neighbours' effects, so adjacent sites are pulled toward each other ([[Spatial Weights Matrix]], [[Random Effect]]). Each site's effect, given its neighbours, is normal with mean equal to the neighbours' average times a dependence parameter, and variance inversely related to the number of neighbours. The intrinsic CAR (ICAR) fixes the dependence parameter at 1 and is common in disease mapping and atlas data; BYM adds an unstructured random effect to an ICAR.

It is usually a random effect inside a GLM or [[GLMM]], typically fitted with [[Bayesian Inference|Bayesian methods]] such as JAGS, Stan, brms `car()` or INLA, within a [[Hierarchical Model]]. It suits gridded or areal data, where "neighbour" is natural. The code below shows the brms syntax for a Poisson model with an ICAR term; it is not run in the wiki build.

Guélat and Kéry (2018) used CAR random effects, and 2-D splines ([[Spatial Smooths]]), in [[N-mixture Model|N-mixture models]] of atlas data and found that modelling both autocorrelation and [[Imperfect Detection]] improved abundance maps ([[Guélat and Kéry 2018]]). CAR is not the same as SAR ([[Spatial Autoregressive Models]]): they lead to different covariance structures and are usually used differently, CAR as a random effect in Bayesian hierarchical models.

```r
# norun (Bayesian fit, shown for syntax only)
library(brms); W <- nb2mat(nb, style = "B", zero.policy = TRUE); rownames(W) <- d$cell
fit <- brm(count ~ forest + car(W, gr = cell, type = "icar"), data = d, data2 = list(W = W), family = poisson())
```

## Connections
- **Builds on:** [[Spatial Weights Matrix]], [[Random Effect]], [[Hierarchical Model]], [[Expected Value]], [[Bayesian Inference]]
- **Leads to:** [[Spatial Autoregressive Models]], [[Imperfect Detection]], [[Spatial Smooths]], [[GLMM]], [[N-mixture Model]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]], molecular note [[SAR vs CAR Models]]

## Flashcards

What is the key assumption of a CAR model?
??
Given its neighbours, a site's spatial effect is centred on the average of the neighbours' effects.
++++

In what kind of model is a CAR term usually used?
??
As a spatial random effect in a Bayesian hierarchical GLM or GLMM.
++++
