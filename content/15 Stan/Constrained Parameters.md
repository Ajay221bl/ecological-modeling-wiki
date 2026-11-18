---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
description: "A constrained parameter is declared with limits such as `<lower=0>`, and Stan samples it on a transformed unconstrained scale so the bounds are always respected."
aliases:
  - "lower and upper bounds"
  - "<lower=0>"
  - "Bounds in Stan"
  - "simplex"
  - "cholesky_factor_corr"
status: seedling
---

# Constrained Parameters

A **constrained parameter** is declared with limits such as `<lower=0>`, and Stan samples it on a transformed, unconstrained scale so the bounds are always respected ([[Data Types in Stan]], [[Parameter]]). Typical declarations are `real<lower=0> sigma;` for a [[Standard Deviation|standard deviation]], `real<lower=0, upper=1> p;` for a probability, and `simplex[K] theta;` for proportions that sum to one. Every [[Distribution Parameters|scale parameter]] needs `<lower=0>`; without it the sampler proposes negative SDs and fails.

Behind the scenes σ = exp(σ_unconstrained) and p = [[Logit Link|logit]]⁻¹(p_unconstrained), and Stan adds the needed [[Jacobian Adjustment]] automatically for declared constraints. Constraints must match the prior's support, so a beta prior needs `<lower=0, upper=1>` ([[Beta Distribution]]). Bounds on data are checks, not transformations: they stop bad data at read time. Special types include simplex, ordered and cholesky_factor_corr, the last used with LKJ priors ([[LKJ Prior]]).

They are used throughout the Stan labs ([[Course Website]], [[Priors on Standard Deviations]]). A half-normal prior is not a different distribution in Stan: declare `<lower=0>` and write `normal(0, s)`, and the bound truncates it ([[Half-Normal Prior]]).

## Connections
- **Builds on:** [[Data Types in Stan]], [[Parameter]], [[Standard Deviation]], [[Distribution Parameters]], [[Logit Link]]
- **Leads to:** [[Jacobian Adjustment]], [[Half-Normal Prior]], [[LKJ Prior]]
- **Part of:** [[MOC 17 - Stan|MOC - Stan]]

## Flashcards

How do you declare a standard deviation in Stan?
??
real<lower=0> sigma;
++++

How do you get a half-normal prior in Stan?
??
Declare <lower=0> and write sigma ~ normal(0, s).
++++
