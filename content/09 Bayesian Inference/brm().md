---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "brm function"
status: seedling
---

# brm()

**In one line:** `brm()` is the function in brms that fits a Bayesian model from a formula, a data frame, a family and priors.

> [!info] Before this, it helps to know
> [[brms]] (the package) · [[Family Argument]] (shared with `glm`) · [[MCMC Chains]] and [[Burn-in]] (its sampling arguments)

## Start from zero
1. **`formula`:** as in `lmer`. `y ~ x + (1 | group)`.
2. **`data`:** a data frame.
3. **`family`:** `gaussian()` by default. `poisson()`, `bernoulli()`, `negbinomial()`, and so on.
4. **`prior`:** built with `prior()`. If omitted, defaults are used.
5. **`chains` (4), `iter` (2000), `warmup` (half of iter), `thin` (1).**
6. **`cores`:** chains to run in parallel. Usually set to the number of chains.
7. **`seed`:** for reproducibility.
8. **`control`:** `list(adapt_delta = 0.95)` to deal with divergences.
9. **`backend`:** `"rstan"` (default) or `"cmdstanr"`.
10. **`sample_prior = "only"`** samples from the priors alone, for prior predictive checks.
11. **`file = "fits/m1"`** saves the fitted model and reloads it next time, skipping the refit.

## In R
```r
# norun (needs Stan)
library(brms)
m1 <- brm(occ ~ tree, data = d, family = bernoulli(),
          prior = prior(normal(0, 1.5), class = "b"),
          chains = 4, cores = 4, iter = 2000, warmup = 1000, seed = 42,
          control = list(adapt_delta = 0.9), file = "fits/m1")
```

## In the course
Bayesian labs ([[Course Website]]).

## Common confusions
- **"`family = binomial` for 0/1 data."** brms prefers `bernoulli()` for single 0/1 outcomes. `binomial()` needs `y | trials(n)`.
- **"`iter = 2000` gives 2000 draws."** It gives 1000 kept per chain after warm-up, 4000 in all with four chains.

## Explain it back
- How many posterior draws do the defaults produce?

*Pass test:* you can write a `brm()` call with family, priors and sampling settings.

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
