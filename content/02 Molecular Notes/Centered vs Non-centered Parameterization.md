---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - stan
aliases: []
status: seedling
---

# Centered vs Non-centered Parameterization

> [!summary] In plain words
> centred and non-centred parameterisations describe the same hierarchical model, but the centred form samples well when groups have lots of data and the non-centred form samples well when groups have little data or the group SD is small.

## The question
When should I use a centred or non-centred parameterisation?

## Built from
- [[Non-centered Parameterization]] and [[Random Intercepts in Stan]].
- [[Divergent Transitions]] and [[Hamiltonian Monte Carlo]].

## The reasoning, step by step
1. **Centred:** θ_j ~ normal(μ, τ). Group effects and τ are tightly linked when data per group are few, creating a funnel.
2. **Non-centred:** z_j ~ normal(0, 1), θ_j = μ + τz_j. z and τ are nearly independent a priori, so the funnel disappears.
3. **When data per group are many,** the likelihood pins each θ_j, and the non-centred form creates its own awkward correlation; centred is better.
4. **Diagnose by trying:** divergences or low ESS for τ point to the other form.

| | Centred | Non-centred |
|---|---|---|
| Write as | θ ~ normal(μ, τ) | θ = μ + τz, z ~ normal(0, 1) |
| Best when | Much data per group | Little data per group, small τ |
| Eight schools (4 × 2000) | 51 divergences | 0 divergences |
| Default in brms | No | Yes |

## So in practice
Start non-centred for random effects in ecological data (few observations per site or year) and switch only if diagnostics improve.

## What would go wrong otherwise
Reporting a centred model's τ with dozens of divergences, which likely understates small values of τ.

## Explain it back
- Which form suits many observations per group?

*Pass test:* you can choose a parameterisation and justify it.

## Connections
- **Related:** [[Writing a Stan Model Step by Step]], [[lme4 vs brms]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Stan]], [[MOC - Mixed Models]]

## Flashcards

Centred vs non-centred: which for little data per group?
??
Non-centred.
++++
