---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A divergent transition is a warning from Hamiltonian Monte Carlo that its simulated path went badly off course in a region of the posterior too sharply curved for its step size, which means that region may not have been sampled properly."
aliases:
  - "Divergences"
  - "Divergent transition"
  - "Divergent iterations"
  - "Divergent transitions after warmup"
status: seedling
---

# Divergent Transitions

A car taking a hairpin bend at motorway speed leaves the road: on open road, checking the steering every few metres is enough, but on a hairpin it is too coarse. A **divergent transition** is a warning from [[Hamiltonian Monte Carlo]] that its simulated path left the road in a region of the posterior too sharply curved for its [[Step Size and Maximum Tree Depth|step size]] ([[Tuning Parameter]]). HMC follows the posterior's surface in discrete steps; where it curves sharply the steps are too coarse and the path flies off, and Stan flags the iteration. It matters because the sampler is failing to enter that region, so draws under-represent it and estimates can be biased.

The classic cause is the "funnel" in a [[Hierarchical Model]]: when a group-level [[Standard Deviation|standard deviation]] is near zero, the group effects are squeezed into a narrow neck. In the code below, group effects θ drawn with a standard deviation τ have mean absolute size 0.08 when τ is below 0.2 and 12 when τ is above 5: a funnel that is very narrow at one end. Fixes are raising `adapt_delta` from 0.8 to 0.95 or 0.99, which forces smaller steps; reparameterising, since the non-centered parameterisation removes the funnel and brms does this automatically for [[Group-level Model|group-level effects]]; and stronger priors on variance parameters ([[Weakly Informative Prior]]), or a simpler model if it is over-parameterised for the data.

Ideally there are none; a handful among thousands may be harmless, but check where they occur with `pairs()` plots. They come up in the brms and Stan labs ([[Stan]], [[Course Website]], [[MCMC Convergence]]). Divergences are not harmless warnings: they signal possibly biased results. And more iterations do not fix them, they give more divergences; change the step size or the parameterisation.

```r
# norun (brms syntax)
# fit <- brm(y ~ x + (1 | site), data = d, control = list(adapt_delta = 0.99))
# Warning: There were 37 divergent transitions after warmup.
set.seed(29); tau <- exp(rnorm(2000, 0, 1.5)); theta <- rnorm(2000, 0, tau)             # the funnel: when tau is small, theta is squeezed
round(tapply(abs(theta), cut(tau, c(0, 0.2, 1, 5, Inf)), mean), 2)
```

## Connections
- **Builds on:** [[Hamiltonian Monte Carlo]], [[Tuning Parameter]], [[Standard Deviation]], [[Group-level Model]]
- **Leads to:** [[MCMC Convergence]], [[Hierarchical Model]], [[Stan]], [[Weakly Informative Prior]], [[Step Size and Maximum Tree Depth]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[How to check an MCMC fit]]

## Flashcards

What is a divergent transition?
??
An HMC iteration whose simulated trajectory became numerically unstable in a region of high curvature, signalling possibly biased sampling.
++++

What is the first setting to change when divergences appear?
??
Increase adapt_delta (for example to 0.95 or 0.99).
++++
