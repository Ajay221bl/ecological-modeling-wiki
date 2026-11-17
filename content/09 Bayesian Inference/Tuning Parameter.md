---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A tuning parameter is a setting of the sampling algorithm, such as the width of the proposal, that affects how efficiently it explores the posterior without changing what the posterior is."
aliases:
  - "Tuning"
  - "Proposal scale"
  - "Adaptation"
  - "Tuning the sampler"
status: seedling
---

# Tuning Parameter

A bicycle reaches the same destination in any gear, but the right gear gets you there with far less effort. A **tuning parameter** is a setting of the sampling algorithm, such as the standard deviation of a Metropolis proposal or, in HMC, the step size and number of steps, that affects how efficiently it explores the posterior without changing what the posterior is ([[Proposal Distribution]]). It is not part of the model; it belongs to the algorithm. A bad setting doesn't bias the answer in the long run, but it can mean you need vastly more iterations.

For random-walk Metropolis the usual target is an acceptance rate of roughly 20 to 50% ([[Acceptance Rate]]); the code below lists the three proposal sds from the Proposal Distribution note, 0.005 too small, 0.1 about right and 2 too large. Modern software tunes itself during warm-up, called adaptation: JAGS adapts, and Stan adapts its step size and mass matrix. Draws made while tuning must be discarded ([[Burn-in]]).

The controls you may still touch in Stan or brms are `adapt_delta` and `max_treedepth`, shown in the commented line; raising `adapt_delta` makes [[Hamiltonian Monte Carlo]] take smaller steps, the usual fix for [[Divergent Transitions]] ([[Hobbs and Hooten 2015 Ch7]]). Tuning changes efficiency, not the result.

```r
# norun (brms settings; shown for the syntax)
# fit <- brm(y ~ x, data = d, control = list(adapt_delta = 0.95, max_treedepth = 12))
c(too_small = 0.005, about_right = 0.1, too_large = 2)                   # proposal sds from the Proposal Distribution note
```

## Connections
- **Builds on:** [[Proposal Distribution]]
- **Leads to:** [[Acceptance Rate]], [[Burn-in]], [[Hamiltonian Monte Carlo]], [[Divergent Transitions]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is a tuning parameter in MCMC?
??
An algorithm setting (such as proposal width or step size) that affects sampling efficiency but not the target posterior.
++++
