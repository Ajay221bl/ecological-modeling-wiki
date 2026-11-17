---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - autocorrelation
aliases: []
status: seedling
---

# SAR vs CAR Models

> [!summary] In plain words
> SAR models specify all sites' dependence simultaneously and are usually fitted by maximum likelihood on areal data, while CAR models specify each site's distribution conditional on its neighbours and are usually used as spatial random effects in Bayesian hierarchical models.

## The question
What is the difference between SAR and CAR, and which suits my data?

## Built from
- [[Spatial Autoregressive Models]] and [[Conditional Autoregressive Model]].
- [[Spatial Weights Matrix]]: both need one.
- [[Hierarchical Model]]: where CAR usually lives.

## The reasoning, step by step
1. **Both define dependence through a neighbour matrix W.**
2. **SAR:** a single simultaneous equation for all sites (u = λWu + ε).
3. **CAR:** a set of conditional distributions, one per site given its neighbours.
4. **They imply different covariance matrices,** so the same λ or ρ means different things.
5. **SAR is common in spatial econometrics and frequentist macroecology** (spatialreg).
6. **CAR is common in Bayesian disease mapping and species distribution models** (brms, INLA, JAGS), often as ICAR or BYM random effects (Guélat and Kéry 2018).

| | SAR | CAR |
|---|---|---|
| Specification | Simultaneous | Conditional on neighbours |
| Typical use | Error or lag term in regression | Random effect in hierarchical models |
| Typical fitting | ML (spatialreg) | Bayesian (brms, INLA, JAGS) |
| Data | Areal units, grids | Areal units, grids |

## So in practice
For a frequentist regression on a grid, a spatial error SAR is a quick option. For a Bayesian hierarchical model (counts, detection), use a CAR random effect.

## What would go wrong otherwise
Assuming a published λ from a SAR model can be compared with a ρ from a CAR model.

## Explain it back
- Why aren't SAR and CAR parameters comparable?

*Pass test:* you can choose between them for a given analysis.

## Connections
- **Related:** [[How to detect and handle autocorrelation]], [[OLS vs GLS]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

How do SAR and CAR models differ in specification?
??
SAR specifies dependence for all sites simultaneously; CAR specifies each site conditional on its neighbours.
++++
