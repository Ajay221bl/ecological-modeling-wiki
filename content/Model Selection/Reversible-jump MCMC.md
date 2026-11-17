---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "RJMCMC"
  - "Reversible jump"
  - "Trans-dimensional MCMC"
status: seedling
---

# Reversible-jump MCMC

**In one line:** reversible-jump MCMC is a sampler that moves not only within a model's parameter space but between models with different numbers of parameters, so the time it spends in each model estimates that model's posterior probability.

> [!info] Before this, it helps to know
> [[MCMC]] (the base method) · [[Model Probabilities]] (what it estimates) · [[Metropolis-Hastings Algorithm]] (its acceptance rule)

## Start from zero
1. **The model index becomes an unknown,** sampled along with parameters.
2. **Moves can add or remove parameters** ("jumps" between dimensions).
3. **A special acceptance rule** keeps the chain correct despite the change in dimension.
4. **Fraction of iterations in model k ≈ P(Mₖ | y).**
5. **Powerful but hard to tune.** Proposals between models must be well designed or the chain rarely jumps.
6. **Discussed by Hobbs and Hooten;** rarely implemented by hand in applied ecology. Indicator variables are an easier route.

## In the course
[[Hobbs and Hooten 2015 Ch9]].

## Common confusions
- **"RJMCMC is a different kind of model."** It is a sampling algorithm.

## Explain it back
- What does the share of time in each model estimate?

*Pass test:* you can say what problem RJMCMC solves.

## Connections
- **Builds on:** [[MCMC]], [[Model Probabilities]]
- **Leads to:** [[Indicator Variable Selection]], [[Bayesian Model Averaging]]
- **Part of:** [[MOC - Bayesian Model Selection]]

## Flashcards

What is reversible-jump MCMC?
??
An MCMC algorithm that jumps between models of different dimension, estimating posterior model probabilities by time spent in each.
++++
