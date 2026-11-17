---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
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

**In one line:** adapt_delta and max_treedepth are Stan sampler settings: raising adapt_delta makes the sampler take smaller, more careful steps, which removes divergent transitions at the cost of speed.

> [!info] Before this, it helps to know
> [[Hamiltonian Monte Carlo]] · [[Divergent Transitions]]

## Start from zero
1. **adapt_delta:** the target acceptance rate during warm-up. Default 0.8. Higher (0.95, 0.99) gives a smaller step size.
2. **Use it when:** "There were N divergent transitions after warmup". A few divergences can bias results.
3. **max_treedepth:** how many doublings a trajectory may take. Default 10. Warnings about hitting it signal inefficiency, not bias.
4. **In brms:** `brm(..., control = list(adapt_delta = 0.95, max_treedepth = 12))`.
5. **If divergences persist,** the model needs changing: tighter priors on SDs, or a non-centred parameterisation (brms already uses one for random effects).
6. **Other settings:** `chains = 4`, `iter = 2000`, `warmup = 1000`, `cores = 4`, `seed`.

## In R
```r
# norun (brms fit, shown for syntax)
fit <- brm(y ~ x + (1 | site), data = d, control = list(adapt_delta = 0.99, max_treedepth = 12), chains = 4, cores = 4, seed = 1)
rstan::check_hmc_diagnostics(fit$fit)
```

## In the course
Bayesian mixed models lab and Homework 4 ([[Course Website]]).

## Common confusions
- **"Raise adapt_delta until warnings vanish and stop worrying."** Persistent divergences point to a model problem.

## Explain it back
- What is the default adapt_delta?

*Pass test:* you can respond to divergence and treedepth warnings.

## Connections
- **Builds on:** [[Hamiltonian Monte Carlo]], [[Divergent Transitions]]
- **Leads to:** [[Bayesian GLMM]], [[How to check an MCMC fit]], [[Priors on Standard Deviations]]
- **Part of:** [[MOC - Mixed Models]]

## Flashcards

What does raising adapt_delta do in Stan?
??
Lowers the step size, reducing divergent transitions at the cost of speed.
++++

What is the default max_treedepth in Stan?
??
10.
++++
