---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
description: "Log_lik is a vector of each observation's log-likelihood, computed in generated quantities for every draw, which the loo package needs to estimate leave-one-out predictive accuracy."
aliases:
  - "log_lik"
  - "Pointwise log-likelihood"
  - "extract_log_lik()"
  - "log_lik vector"
status: seedling
---

# log_lik for LOO

**log_lik** is a vector of each observation's [[Log-likelihood|log-likelihood]], computed in generated quantities for every draw, which the loo package needs to estimate leave-one-out predictive accuracy ([[Generated Quantities]], [[Leave-one-out Cross-validation]], [[PSIS and Pareto k]]). Name it `log_lik` by convention, since `loo::extract_log_lik()` looks for that name, with one element per observation, or per independent unit such as a site when observations are grouped. Use `_lpdf` or `_lpmf` with the same likelihood as the [[Stan Program Blocks|model block]], including all constants.

Pass r_eff (`relative_eff`) so the [[Monte Carlo Simulation|Monte Carlo]] error accounts for [[Autocorrelation|autocorrelated]] draws, and compare models with `loo_compare()` on loo objects from the same data ([[loo_compare()]]). brms and rstanarm do this for you with `loo(fit)`. For the simple regression in [[Generated Quantities]], `loo()` gives elpd_loo = −34.6 (SE 5.1) and [[Effective Number of Parameters|p_loo]] = 2.7, close to the three parameters a, b and σ.

It is used in the Stan labs and follows [[Vehtari et al. 2017]] ([[Course Website]], [[Expected Log Predictive Density|ELPD]]). Don't use the log-likelihood summed over all data: LOO needs it pointwise, one value per observation.

## Connections
- **Builds on:** [[Generated Quantities]], [[Leave-one-out Cross-validation]], [[PSIS and Pareto k]], [[Log-likelihood]], [[Stan Program Blocks]], [[Monte Carlo Simulation]], [[Autocorrelation]], [[Effective Number of Parameters]]
- **Leads to:** [[loo_compare()]], [[WAIC]]
- **Part of:** [[MOC 17 - Stan|MOC - Stan]]

## Flashcards

Why compute log_lik in Stan's generated quantities?
??
loo and WAIC need each observation's log-likelihood for every draw.
++++
