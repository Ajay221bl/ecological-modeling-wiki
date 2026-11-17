---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
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

**In one line:** a conditional autoregressive (CAR) model gives each site a spatial random effect whose expected value, given its neighbours, is the average of the neighbours' effects, so that adjacent sites are pulled toward each other.

> [!info] Before this, it helps to know
> [[Spatial Weights Matrix]] (defines neighbours) · [[Random Effect]] (the CAR term is one) · [[Hierarchical Model]] (where CAR is usually used)

## Start from zero
1. **Each site's effect, given its neighbours, is Normal with mean = average of the neighbours' effects** (times a dependence parameter) and variance inversely related to the number of neighbours.
2. **Usually used as a random effect inside a GLM or GLMM,** typically fitted with Bayesian methods (JAGS, Stan, brms `car()`, INLA).
3. **Intrinsic CAR (ICAR):** the dependence parameter is fixed at 1. Common in disease mapping and atlas data.
4. **BYM:** ICAR plus an unstructured random effect.
5. **Guélat and Kéry (2018)** used CAR random effects (and 2-D splines) in N-mixture models of atlas data and found that modelling autocorrelation and imperfect detection improved abundance maps.
6. **Suits gridded or areal data,** where "neighbour" is natural.

## In R
```r
# norun (Bayesian fit, shown for syntax only)
library(brms); W <- nb2mat(nb, style = "B", zero.policy = TRUE); rownames(W) <- d$cell
fit <- brm(count ~ forest + car(W, gr = cell, type = "icar"), data = d, data2 = list(W = W), family = poisson())
```

## In the course
[[Guélat and Kéry 2018]] (reading for the autocorrelation week).

## Common confusions
- **"CAR is the same as SAR."** They lead to different covariance structures and are usually used differently (CAR as a random effect in Bayesian hierarchical models).

## Explain it back
- What is the conditional mean of a site's CAR effect?

*Pass test:* you can describe the CAR assumption.

## Connections
- **Builds on:** [[Spatial Weights Matrix]], [[Random Effect]], [[Hierarchical Model]]
- **Leads to:** [[Spatial Autoregressive Models]], [[Imperfect Detection]], [[Spatial Smooths]]
- **Part of:** [[MOC - Autocorrelation]], molecular note [[SAR vs CAR Models]]

## Flashcards

What is the key assumption of a CAR model?
??
Given its neighbours, a site's spatial effect is centred on the average of the neighbours' effects.
++++

In what kind of model is a CAR term usually used?
??
As a spatial random effect in a Bayesian hierarchical GLM or GLMM.
++++
