---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "Adapt_delta and max_treedepth are Stan sampler settings: raising adapt_delta makes the sampler take smaller, more careful steps, which removes divergent transitions at the cost of speed."
aliases:
  - "adapt_delta"
  - "control = list(adapt_delta)"
  - "Sampler settings"
  - "Hamiltonian Monte Carlo tuning"
  - "Tree depth"
  - "Hamiltonian Monte Carlo Tuning (step size, tree depth)"
status: seedling
---

# adapt_delta and Sampler Settings

**adapt_delta** and **max_treedepth** are Stan sampler settings ([[Hamiltonian Monte Carlo]]). adapt_delta is the target acceptance rate during warm-up, default 0.8; raising it to 0.95 or 0.99 makes the sampler take smaller, more careful steps, which removes [[Divergent Transitions]] at the cost of speed. Use it when Stan warns "There were N divergent transitions after warmup", since even a few divergences can bias results. max_treedepth caps how many doublings a trajectory may take, default 10; warnings about hitting it signal inefficiency, not bias.

In brms the settings go in `brm(..., control = list(adapt_delta = 0.95, max_treedepth = 12))`, alongside `chains = 4`, `iter = 2000`, `warmup = 1000`, `cores = 4` and `seed`. If divergences persist, the model needs changing: tighter priors on SDs or a non-centred parameterisation, which brms already uses for random effects ([[Priors on Standard Deviations]], [[Non-centered Parameterization]]). The code below, not run in the wiki build, shows the syntax and `rstan::check_hmc_diagnostics()`.

They are used in the Bayesian mixed models lab and Homework 4 ([[Course Website]], [[Bayesian GLMM]]). Don't raise adapt_delta until the warnings vanish and stop worrying: persistent divergences point to a model problem.

```r
# norun (brms fit, shown for syntax)
fit <- brm(y ~ x + (1 | site), data = d, control = list(adapt_delta = 0.99, max_treedepth = 12), chains = 4, cores = 4, seed = 1)
rstan::check_hmc_diagnostics(fit$fit)
```

## Connections
- **Builds on:** [[Hamiltonian Monte Carlo]], [[Divergent Transitions]]
- **Leads to:** [[Bayesian GLMM]], [[How to check an MCMC fit]], [[Priors on Standard Deviations]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What does raising adapt_delta do in Stan?
??
Lowers the step size, reducing divergent transitions at the cost of speed.
++++

What is the default max_treedepth in Stan?
??
10.
++++
