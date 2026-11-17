---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "`brm()` is the function in brms that fits a Bayesian model from a formula, a data frame, a family and priors."
aliases:
  - "brm function"
status: seedling
---

# brm()

**`brm()`** is the function in [[brms]] that fits a Bayesian model from a formula, a data frame, a family and priors. `formula` is written as in `lmer`, such as `y ~ x + (1 | group)`; `data` is a data frame; `family` defaults to `gaussian()`, with `poisson()`, `bernoulli()`, `negbinomial()` and others available ([[Family Argument]]); and `prior` is built with `prior()`, with defaults used if it is omitted ([[Setting Priors in brms]]).

The sampling arguments are `chains` (4), `iter` (2000), `warmup` (half of iter) and `thin` (1) ([[MCMC Chains]], [[Burn-in]]); `cores` sets how many chains run in parallel, usually the number of chains, and `seed` makes the run reproducible. `control = list(adapt_delta = 0.95)` deals with [[Divergent Transitions]]; `backend` chooses `"rstan"` (the default) or `"cmdstanr"`; `sample_prior = "only"` samples from the priors alone for a prior predictive check; and `file = "fits/m1"` saves the fit and reloads it next time, skipping the refit. The code below, not run in the wiki build because it needs Stan, fits a logistic occupancy model with all these arguments set; check it afterwards with [[pp_check()]].

It is used throughout the Bayesian labs ([[Course Website]]). Two slips. For single 0/1 outcomes brms prefers `bernoulli()`; `binomial()` needs `y | trials(n)`. And `iter = 2000` does not give 2,000 draws: it gives 1,000 kept per chain after warm-up, 4,000 in all with four chains.

```r
# norun (needs Stan)
library(brms)
m1 <- brm(occ ~ tree, data = d, family = bernoulli(),
          prior = prior(normal(0, 1.5), class = "b"),
          chains = 4, cores = 4, iter = 2000, warmup = 1000, seed = 42,
          control = list(adapt_delta = 0.9), file = "fits/m1")
```

## Connections
- **Builds on:** [[brms]], [[Family Argument]]
- **Leads to:** [[Setting Priors in brms]], [[MCMC Chains]], [[Divergent Transitions]], [[pp_check()]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

With brm() defaults (4 chains, iter = 2000), how many post-warmup draws result?
??
4000 (1000 per chain).
++++

Which brm() argument addresses divergent transitions?
??
control = list(adapt_delta = ...).
++++
