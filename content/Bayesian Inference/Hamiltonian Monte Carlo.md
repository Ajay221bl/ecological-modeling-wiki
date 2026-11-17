---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "HMC"
  - "NUTS"
  - "No-U-Turn Sampler"
  - "Hamiltonian Monte Carlo and NUTS"
  - "Hybrid Monte Carlo"
status: seedling
---

# Hamiltonian Monte Carlo

**In one line:** Hamiltonian Monte Carlo proposes new parameter values by simulating a frictionless ball rolling over the posterior surface, which lets it make long moves that are still likely to be accepted.

> [!info] Before this, it helps to know
> [[MCMC]] (the family) · [[Metropolis Algorithm]] (what it improves on) · [[Derivative]] (it uses the slope of the log posterior)

## The everyday picture
A skateboarder in a bowl. Give them a random push. They glide along the curved surface, trading speed for height, and end up far from where they began but still inside the bowl. Random-walk Metropolis is someone taking small blind hops on the same surface.

## Start from zero
1. **Turn the posterior upside down:** high probability becomes a valley.
2. **Give the current point a random momentum** (a flick in a random direction).
3. **Simulate the physics** for a while, in small leapfrog steps, using the gradient (slope) of the log posterior.
4. **Where the ball ends up is the proposal.** Accept or reject it with a Metropolis-type rule, which corrects for the error of the simulation.
5. **Because it follows the shape of the posterior,** proposals are distant yet rarely rejected.
6. **Draws are much less autocorrelated,** so far fewer iterations are needed.
7. **It copes with many correlated parameters,** where Gibbs and random-walk Metropolis struggle.
8. **NUTS (No-U-Turn Sampler)** chooses automatically how long to let the ball roll, stopping when the path begins to double back.
9. **Stan uses NUTS.** So do brms and rstanarm, which run Stan underneath.
10. **Limits:** parameters must be continuous (no discrete latent states unless summed out), and it reports "divergent transitions" when the surface is too sharply curved for its step size.

## In R
```r
# norun (needs Stan; shown for what a fit reports)
# fit <- brm(y ~ x, data = d, chains = 4, iter = 2000, warmup = 1000)
# nuts_params(fit)           # per-iteration step size, tree depth, divergences
c(typical_HMC_iterations = 2000, typical_Gibbs_iterations = 20000)
```

## In the course
The brms labs rely on it ([[Course Website]]). [[Hobbs and Hooten 2015 Ch7]] covers the older samplers it builds on.

## Common confusions
- **"Stan needs as many iterations as JAGS."** Its draws are closer to independent, so a few thousand are often enough.
- **"HMC can sample anything."** Discrete parameters must be marginalised out first.

## Explain it back
- What extra information does HMC use that Metropolis doesn't?
- What does NUTS automate?

*Pass test:* you can explain why HMC is more efficient and name its main warning.

## Connections
- **Builds on:** [[MCMC]], [[Metropolis Algorithm]], [[Derivative]]
- **Leads to:** [[Stan]], [[brms]], [[Divergent Transitions]], [[Effective Sample Size]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

What is Hamiltonian Monte Carlo?
??
An MCMC method that uses the gradient of the log posterior to simulate physical trajectories, producing distant proposals with high acceptance.
++++

What is NUTS?
??
The No-U-Turn Sampler: HMC that automatically chooses the trajectory length. It is Stan's default.
++++
