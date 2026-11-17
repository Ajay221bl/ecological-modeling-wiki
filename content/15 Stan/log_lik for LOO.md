---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
aliases:
  - "log_lik"
  - "Pointwise log-likelihood"
  - "extract_log_lik()"
  - "log_lik vector"
status: seedling
---

# log_lik for LOO

**In one line:** log_lik is a vector of each observation's log-likelihood, computed in generated quantities for every draw, which the loo package needs to estimate leave-one-out predictive accuracy.

> [!info] Before this, it helps to know
> [[Generated Quantities]] · [[Leave-one-out Cross-validation]] · [[PSIS and Pareto k]]

## A tiny example
For the simple regression in [[Generated Quantities]], `loo()` gives elpd_loo = −34.6 (SE 5.1) and p_loo = 2.7, close to the three parameters a, b and σ, with all Pareto k below 0.5.

## Start from zero
1. **Name it log_lik** by convention; `loo::extract_log_lik()` looks for that name.
2. **One element per observation** (or per independent unit, such as a site, when observations are grouped).
3. **Use `_lpdf`/`_lpmf` with the same likelihood as the model block,** including all constants.
4. **Pass r_eff** (`relative_eff`) so the Monte Carlo error accounts for autocorrelated draws.
5. **Compare models** with `loo_compare()` on loo objects from the same data.
6. **brms and rstanarm do this for you** with `loo(fit)`.

## In the course
Stan labs ([[Course Website]]). [[Vehtari et al. 2017]].

## Common confusions
- **"Use the log-likelihood summed over all data."** LOO needs it pointwise, one value per observation.

## Explain it back
- Why must log_lik be pointwise?

*Pass test:* you can add log_lik to a Stan program and run loo.

## Connections
- **Builds on:** [[Generated Quantities]], [[Leave-one-out Cross-validation]], [[PSIS and Pareto k]]
- **Leads to:** [[loo_compare()]], [[WAIC]]
- **Part of:** [[MOC 17 - Stan|MOC - Stan]]

## Flashcards

Why compute log_lik in Stan's generated quantities?
??
loo and WAIC need each observation's log-likelihood for every draw.
++++
