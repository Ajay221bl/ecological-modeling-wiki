---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
description: "A Stan program is organised into named blocks in a fixed order, data, transformed data, parameters, transformed parameters, model and generated quantities, each with one job."
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

The sections of a lab report each have a place and an order: materials, unknowns you will estimate, method, and results computed afterwards. A **Stan program** is likewise organised into named blocks in a fixed order, data, transformed data, parameters, transformed parameters, model and generated quantities, each with one job ([[Stan]], [[Parameter]]). The data block declares types and sizes, which must match the [[Lists in R|named list]] you pass from R; transformed data holds constants computed once, such as a centred x; parameters are the unknowns, which Stan samples on an unconstrained scale ([[Constrained Parameters]]).

[[Transformed Parameters]] are [[Derived Quantities|functions of parameters]] that you want saved and used in the model; the model block holds priors and likelihood, which add to the log posterior ([[Sampling Statements and target +=]]); and [[Generated Quantities]] run once per draw after sampling, for predictions, [[log_lik for LOO|log_lik]] and derived values. The order is fixed, empty blocks can be left out, every statement ends with a semicolon, and comments use `//`. A minimal regression looks like this:

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

It is the first thing taught in the Stan lab on simple models ([[Course Website]], [[Data Types in Stan]]). Priors don't go in the parameters block: parameters are declared there, and priors go in the model block.

## Connections
- **Builds on:** [[Stan]], [[Parameter]], [[Lists in R]], [[Derived Quantities]], [[log_lik for LOO]]
- **Leads to:** [[Data Types in Stan]], [[Transformed Parameters]], [[Generated Quantities]], [[Sampling Statements and target +=]]
- **Part of:** [[MOC 17 - Stan|MOC - Stan]], molecular note [[Writing a Stan Model Step by Step]]

## Flashcards

Name the six Stan program blocks in order.
??
data, transformed data, parameters, transformed parameters, model, generated quantities.
++++

Where do priors go in a Stan program?
??
The model block.
++++
