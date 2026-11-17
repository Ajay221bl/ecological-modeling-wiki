---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Divergences"
  - "Divergent transition"
  - "Divergent iterations"
  - "Divergent transitions after warmup"
status: seedling
---

# Divergent Transitions

**In one line:** a divergent transition is a warning from Hamiltonian Monte Carlo that its simulated path went badly off course in a region of the posterior too sharply curved for its step size, which means that region may not have been sampled properly.

> [!info] Before this, it helps to know
> [[Hamiltonian Monte Carlo]] (where they occur) · [[Tuning Parameter]] (step size) · [[Hierarchical Model]] (where they are commonest)

## The everyday picture
A car taking a hairpin bend at motorway speed. On open road, checking the steering every few metres is enough. On a hairpin that sampling of the road is too coarse, and the car leaves the tarmac. A divergence is the sampler leaving the road.

## Start from zero
1. **HMC follows the posterior's surface in discrete steps.**
2. **Where the surface curves sharply** the steps are too coarse and the simulated path flies off. Stan detects this and flags the iteration.
3. **Why it matters:** the sampler is failing to enter that region. Draws under-represent it, so estimates can be biased.
4. **Classic cause: the "funnel"** in hierarchical models. When a group-level standard deviation is near zero, the group effects are squeezed into a narrow neck.
5. **Fix 1:** raise `adapt_delta` (0.8 by default) to 0.95 or 0.99, which forces smaller steps.
6. **Fix 2:** reparameterise. The non-centered parameterisation removes the funnel (brms does this automatically for group-level effects).
7. **Fix 3:** stronger priors on variance parameters. Simplify the model if it is over-parameterised for the data.
8. **How many are acceptable?** Ideally none. A handful among thousands may be harmless, but check where they occur (`pairs()` plots).

## In R
```r
# norun (brms syntax)
# fit <- brm(y ~ x + (1 | site), data = d, control = list(adapt_delta = 0.99))
# Warning: There were 37 divergent transitions after warmup.
set.seed(29); tau <- exp(rnorm(2000, 0, 1.5)); theta <- rnorm(2000, 0, tau)             # the funnel: when tau is small, theta is squeezed
round(tapply(abs(theta), cut(tau, c(0, 0.2, 1, 5, Inf)), mean), 2)
```

## In the course
The brms and Stan labs ([[Course Website]]).

## Common confusions
- **"Divergences are harmless warnings."** They signal possibly biased results.
- **"More iterations fix them."** More iterations give more divergences. Change the step size or the parameterisation.

## Explain it back
- What does a divergence say about the posterior's shape?
- Name two remedies.

*Pass test:* you can respond sensibly to a divergence warning.

## Connections
- **Builds on:** [[Hamiltonian Monte Carlo]], [[Tuning Parameter]]
- **Leads to:** [[MCMC Convergence]], [[Hierarchical Model]], [[Stan]], [[Weakly Informative Prior]]
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
