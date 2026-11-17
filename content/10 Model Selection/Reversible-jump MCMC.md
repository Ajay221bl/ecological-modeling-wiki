---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "Reversible-jump MCMC is a sampler that moves not only within a model's parameter space but between models with different numbers of parameters, so the time it spends in each model estimates that model's posterior probability."
aliases:
  - "RJMCMC"
  - "Reversible jump"
  - "Trans-dimensional MCMC"
status: seedling
---

# Reversible-jump MCMC

**Reversible-jump MCMC** (RJMCMC) is a sampler that moves not only within a model's parameter space but between models with different numbers of parameters ([[MCMC]]). The model index becomes an unknown sampled along with the parameters, and moves can add or remove parameters, "jumping" between dimensions. A special acceptance rule, built on the [[Metropolis-Hastings Algorithm]], keeps the chain correct despite the change in dimension.

The fraction of iterations the chain spends in model k estimates its posterior probability P(Mₖ | y) ([[Model Probabilities]]), so it delivers [[Bayesian Model Averaging]] directly. It is powerful but hard to tune: proposals between models must be well designed or the chain rarely jumps.

Hobbs and Hooten discuss it, but it is rarely implemented by hand in applied ecology, and [[Indicator Variable Selection]] is an easier route ([[Hobbs and Hooten 2015 Ch9]]). RJMCMC is not a different kind of model; it is a sampling algorithm.

## Connections
- **Builds on:** [[MCMC]], [[Model Probabilities]]
- **Leads to:** [[Indicator Variable Selection]], [[Bayesian Model Averaging]]
- **Part of:** [[MOC 11 - Bayesian Model Selection|MOC - Bayesian Model Selection]]

## Flashcards

What is reversible-jump MCMC?
??
An MCMC algorithm that jumps between models of different dimension, estimating posterior model probabilities by time spent in each.
++++
