---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "Hamiltonian Monte Carlo proposes new parameter values by simulating a frictionless ball rolling over the posterior surface, which lets it make long moves that are still likely to be accepted."
aliases:
  - "HMC"
  - "NUTS"
  - "No-U-Turn Sampler"
  - "Hamiltonian Monte Carlo and NUTS"
  - "Hybrid Monte Carlo"
status: seedling
---

# Hamiltonian Monte Carlo

Give a skateboarder in a bowl a random push: they glide along the curved surface, trading speed for height, and end up far from where they began but still inside the bowl. Random-walk Metropolis is someone taking small blind hops on the same surface. **Hamiltonian Monte Carlo** (HMC) proposes new parameter values by simulating that frictionless glide over the posterior surface ([[MCMC]], [[Metropolis Algorithm]]). Turn the posterior upside down so high probability becomes a valley, give the current point a random momentum, and simulate the physics in small "leapfrog" steps using the gradient, the slope, of the log posterior ([[Derivative]]). Where the ball ends up is the proposal, accepted or rejected by a Metropolis-type rule that corrects for the error of the simulation.

Because it follows the shape of the posterior, proposals are distant yet rarely rejected, draws are much less [[Autocorrelation|autocorrelated]] and far fewer iterations are needed ([[Effective Sample Size]]). It copes with many correlated parameters, where [[Gibbs Sampling|Gibbs]] and random-walk Metropolis struggle. NUTS, the No-U-Turn Sampler, chooses automatically how long to let the ball roll, stopping when the path begins to double back. [[Stan]] uses NUTS, and so do [[brms]] and rstanarm, which run Stan underneath. The code below shows the brms call and, as a rough guide, that a few thousand HMC iterations often do the work of tens of thousands of Gibbs iterations.

Its limits are that parameters must be continuous, so discrete latent states must be summed out first, and that it reports [[Divergent Transitions]] when the surface is too sharply curved for its [[Step Size and Maximum Tree Depth|step size]]. The brms labs rely on it, and [[Hobbs and Hooten 2015 Ch7]] covers the older samplers it builds on ([[Course Website]]). Stan does not need as many iterations as JAGS, because its draws are closer to independent, and HMC cannot sample anything: discrete parameters must be marginalised out.

```r
# norun (needs Stan; shown for what a fit reports)
# fit <- brm(y ~ x, data = d, chains = 4, iter = 2000, warmup = 1000)
# nuts_params(fit)           # per-iteration step size, tree depth, divergences
c(typical_HMC_iterations = 2000, typical_Gibbs_iterations = 20000)
```

## Connections
- **Builds on:** [[MCMC]], [[Metropolis Algorithm]], [[Derivative]], [[Gibbs Sampling]]
- **Leads to:** [[Stan]], [[brms]], [[Divergent Transitions]], [[Effective Sample Size]], [[Autocorrelation]], [[Step Size and Maximum Tree Depth]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is Hamiltonian Monte Carlo?
??
An MCMC method that uses the gradient of the log posterior to simulate physical trajectories, producing distant proposals with high acceptance.
++++

What is NUTS?
??
The No-U-Turn Sampler: HMC that automatically chooses the trajectory length. It is Stan's default.
++++
