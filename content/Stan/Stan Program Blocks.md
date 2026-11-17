---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
aliases:
  - "Stan blocks"
  - "data block"
  - "parameters block"
  - "model block"
  - "Stan Program Blocks (data, parameters, model)"
  - "transformed data"
status: seedling
---

# Stan Program Blocks

**In one line:** a Stan program is organised into named blocks in a fixed order, data, transformed data, parameters, transformed parameters, model and generated quantities, each with one job.

> [!info] Before this, it helps to know
> [[Stan]] · [[Parameter]]

## The everyday picture
The sections of a lab report: materials (data), unknowns you will estimate (parameters), method (model), and results computed afterwards (generated quantities). Each has its place and order.

## A tiny example
```
data {                      // what you supply from R
  int<lower=0> N;
  vector[N] x;
  vector[N] y;
}
parameters {                // what Stan samples
  real a;
  real b;
  real<lower=0> sigma;
}
model {                     // priors and likelihood
  a ~ normal(0, 10);
  b ~ normal(0, 10);
  sigma ~ exponential(1);
  y ~ normal(a + b * x, sigma);
}
```

## Start from zero
1. **data:** declared types and sizes; must match the named list you pass from R.
2. **transformed data:** constants computed once (centring x, for example).
3. **parameters:** the unknowns; Stan samples them on an unconstrained scale.
4. **transformed parameters:** functions of parameters you want saved and used in the model.
5. **model:** priors and likelihood; adds to the log posterior.
6. **generated quantities:** run once per draw after sampling: predictions, log_lik, derived values.
7. **Order is fixed;** empty blocks can be left out.
8. **Every statement ends with a semicolon;** comments use `//`.

## In the course
Stan lab: simple models ([[Course Website]]).

## Common confusions
- **"Priors go in the parameters block."** Parameters are declared there; priors go in the model block.

## Explain it back
- Which block runs once per draw after sampling?

*Pass test:* you can write a three-block Stan program.

## Connections
- **Builds on:** [[Stan]], [[Parameter]]
- **Leads to:** [[Data Types in Stan]], [[Transformed Parameters]], [[Generated Quantities]], [[Sampling Statements and target +=]]
- **Part of:** [[MOC - Stan]], molecular note [[Writing a Stan Model Step by Step]]

## Flashcards

Name the six Stan program blocks in order.
??
data, transformed data, parameters, transformed parameters, model, generated quantities.
++++

Where do priors go in a Stan program?
??
The model block.
++++
