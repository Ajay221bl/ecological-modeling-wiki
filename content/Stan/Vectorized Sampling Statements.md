---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
aliases:
  - "Vectorization in Stan"
  - "Vectorised likelihood"
  - "Vectorized statements"
status: seedling
---

# Vectorized Sampling Statements

**In one line:** a vectorised sampling statement applies a distribution to a whole vector at once, such as `y ~ normal(mu, sigma)` with vector y and mu, which is shorter and much faster than a loop.

> [!info] Before this, it helps to know
> [[Sampling Statements and target +=]] · [[Data Types in Stan]]

## A tiny example
Loop: `for (n in 1:N) y[n] ~ normal(a + b * x[n], sigma);`
Vectorised: `y ~ normal(a + b * x, sigma);`

## Start from zero
1. **Same log density,** computed in one call.
2. **Faster** because the gradient is computed once for the vector.
3. **Mix vectors and scalars:** a scalar sigma is repeated for every element.
4. **Indexing works inside:** `y ~ normal(a + u[g] + b * x, sigma)` uses group index vector g.
5. **Some operations still need loops,** such as per-site mixture likelihoods.

## In the course
Stan labs ([[Course Website]]).

## Common confusions
- **"Vectorising changes the model."** It only changes the speed.

## Explain it back
- Rewrite a loop over n as a vectorised statement.

*Pass test:* you can vectorise a likelihood.

## Connections
- **Builds on:** [[Sampling Statements and target +=]], [[Data Types in Stan]]
- **Leads to:** [[Group Index Vectors in Stan]]
- **Part of:** [[MOC - Stan]]

## Flashcards

Why vectorise Stan sampling statements?
??
Same model, much faster gradients and shorter code.
++++
