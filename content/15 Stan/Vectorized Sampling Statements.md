---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
description: "A vectorised sampling statement applies a distribution to a whole vector at once, such as `y ~ normal(mu, sigma)` with vector y and mu, which is shorter and much faster than a loop."
aliases:
  - "Vectorization in Stan"
  - "Vectorised likelihood"
  - "Vectorized statements"
status: seedling
---

# Vectorized Sampling Statements

A **vectorised sampling statement** applies a distribution to a whole vector at once, such as `y ~ normal(mu, sigma)` with vector y and mu, which is shorter and much faster than a loop ([[Sampling Statements and target +=]], [[Data Types in Stan]]). The loop `for (n in 1:N) y[n] ~ normal(a + b * x[n], sigma);` and the vectorised `y ~ normal(a + b * x, sigma);` give the same log density, but the vectorised form computes it, and its gradient, in one call.

Vectors and scalars can be mixed, so a scalar sigma is repeated for every element, and indexing works inside: `y ~ normal(a + u[g] + b * x, sigma)` uses the group index vector g ([[Group Index Vectors in Stan]]). Some operations still need loops, such as per-site [[Mixture Distribution|mixture]] likelihoods ([[Occupancy]]).

Vectorising is practised in the Stan labs ([[Course Website]], [[Loops, apply and map]]). Vectorising does not change the model; it only changes the speed.

## Connections
- **Builds on:** [[Sampling Statements and target +=]], [[Data Types in Stan]], [[Mixture Distribution]]
- **Leads to:** [[Group Index Vectors in Stan]]
- **Part of:** [[MOC 17 - Stan|MOC - Stan]]

## Flashcards

Why vectorise Stan sampling statements?
??
Same model, much faster gradients and shorter code.
++++
