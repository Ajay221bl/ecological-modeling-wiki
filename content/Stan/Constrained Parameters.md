---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
aliases:
  - "lower and upper bounds"
  - "<lower=0>"
  - "Bounds in Stan"
  - "simplex"
  - "cholesky_factor_corr"
status: seedling
---

# Constrained Parameters

**In one line:** a constrained parameter is declared with limits such as `<lower=0>`, and Stan samples it on a transformed unconstrained scale so the bounds are always respected.

> [!info] Before this, it helps to know
> [[Data Types in Stan]] · [[Parameter]]

## A tiny example
`real<lower=0> sigma;` for a standard deviation, `real<lower=0, upper=1> p;` for a probability, `simplex[K] theta;` for proportions that sum to one.

## Start from zero
1. **Every scale parameter needs `<lower=0>`.** Without it the sampler proposes negative SDs and fails.
2. **Behind the scenes:** σ = exp(σ_unconstrained); p = logit⁻¹(p_unconstrained). Stan adds the needed Jacobian automatically for declared constraints.
3. **Constraints must match the prior's support.** A beta prior needs `<lower=0, upper=1>`.
4. **Bounds on data** are checks, not transformations: they stop bad data at read time.
5. **Special types:** simplex, ordered, cholesky_factor_corr (for LKJ priors).

## In the course
Stan labs ([[Course Website]]).

## Common confusions
- **"A half-normal prior is a different distribution in Stan."** Declare `<lower=0>` and write `normal(0, s)`; the bound truncates it.

## Explain it back
- What happens if a standard deviation lacks `<lower=0>`?

*Pass test:* you can declare bounded parameters.

## Connections
- **Builds on:** [[Data Types in Stan]], [[Parameter]]
- **Leads to:** [[Jacobian Adjustment]], [[Half-Normal Prior]], [[LKJ Prior]]
- **Part of:** [[MOC - Stan]]

## Flashcards

How do you declare a standard deviation in Stan?
??
real<lower=0> sigma;
++++

How do you get a half-normal prior in Stan?
??
Declare <lower=0> and write sigma ~ normal(0, s).
++++
