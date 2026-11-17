---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Site-level covariates"
  - "siteCovs"
  - "Occupancy covariates"
status: seedling
---

# Site Covariates

**In one line:** site covariates are measurements that describe a site and stay fixed across its visits, such as forest cover or elevation, used to explain occupancy and sometimes detection.

> [!info] Before this, it helps to know
> [[Explanatory Variable]] · [[Single-season Occupancy]]

## The everyday picture
The size of a house when asking whether it has a cat. It does not change between your visits.

## Start from zero
1. **One value per site.**
2. **Can enter ψ** (where the species lives) **or p** (how easy it is to see there).
3. **Habitat often affects both:** dense vegetation can raise occupancy but lower detection.
4. **unmarked:** stored in `siteCovs` of an `unmarkedFrameOccu`.
5. **Standardize them** before fitting so the optimizer behaves.

## In the course
Occupancy guest lecture ([[Course Website]]).

## Common confusions
- **"Site covariates only go in ψ."** They can also explain p.

## Explain it back
- Give an example of a site covariate that might affect both ψ and p.

*Pass test:* you can place a covariate in the correct part of the model.

## Connections
- **Builds on:** [[Explanatory Variable]], [[Single-season Occupancy]]
- **Leads to:** [[Observation Covariates]], [[Standardizing|Standardizing Predictors]]
- **Part of:** [[MOC - Population Estimation]], molecular note [[Site vs Observation Covariates]]

## Flashcards

What is a site covariate in an occupancy model?
??
A site property constant across visits (habitat, elevation), used for ψ and sometimes p.
++++
