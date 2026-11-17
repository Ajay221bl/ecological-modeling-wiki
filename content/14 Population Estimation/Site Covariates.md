---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Site covariates are measurements that describe a site and stay fixed across its visits, such as forest cover or elevation, used to explain occupancy and sometimes detection."
aliases:
  - "Site-level covariates"
  - "siteCovs"
  - "Occupancy covariates"
status: seedling
---

# Site Covariates

**Site covariates** are measurements that describe a site and stay fixed across its visits, such as forest cover or elevation, used to explain occupancy and sometimes detection, the way the size of a house stays the same between your visits when you ask whether it has a cat ([[Explanatory Variable]], [[Single-season Occupancy]]). There is one value per site. They can enter ψ, where the species lives, or p, how easy it is to see there ([[Detection Probability]]).

Habitat often affects both: dense vegetation can raise occupancy but lower detection, so a covariate in only one part of the model can be misread. In unmarked they are stored in the `siteCovs` of an `unmarkedFrameOccu` ([[unmarked Package]]). Standardise them before fitting so the optimiser behaves ([[Standardizing|Standardization]]).

They are used in the occupancy guest lecture ([[Course Website]]); the visit-level counterpart is [[Observation Covariates]]. Site covariates don't only go in ψ; they can also explain p.

## Connections
- **Builds on:** [[Explanatory Variable]], [[Single-season Occupancy]]
- **Leads to:** [[Observation Covariates]], [[Standardizing|Standardizing Predictors]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Site vs Observation Covariates]]

## Flashcards

What is a site covariate in an occupancy model?
??
A site property constant across visits (habitat, elevation), used for ψ and sometimes p.
++++
