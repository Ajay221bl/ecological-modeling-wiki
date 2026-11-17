---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - popest
aliases: []
status: seedling
---

# Site vs Observation Covariates

> [!summary] In plain words
> site covariates are fixed for a site across visits and can explain occupancy or detection, whereas observation covariates change between visits and can only explain detection.

## The question
Which covariates go on occupancy and which on detection?

## Built from
- [[Site Covariates]] and [[Observation Covariates]].
- [[Occupancy vs Detection Probability]].
- [[unmarked Package]]: where each is stored.

## The reasoning, step by step
1. **Ask: does the value change between visits?** Yes: observation covariate, detection only. No: site covariate.
2. **Then ask: can it affect the species being there, being seen, or both?**
3. **Site covariates in p** are common (vegetation density hides animals).
4. **In unmarked:** `siteCovs` (data frame, one row per site) and `obsCovs` (list of site × visit matrices).

| | Site covariate | Observation covariate |
|---|---|---|
| Varies by visit? | No | Yes |
| Can explain ψ? | Yes | No |
| Can explain p? | Yes | Yes |
| Examples | Forest cover, elevation, patch area | Wind, date, observer, duration |
| unmarked slot | siteCovs | obsCovs |

## So in practice
Write a two-column table of your covariates before fitting, marking for each whether it plausibly affects ψ, p or both.

## What would go wrong otherwise
Putting temperature on the visit day into ψ.

## Explain it back
- Can an observation covariate ever go in ψ?

*Pass test:* you can classify covariates for an occupancy model.

## Connections
- **Related:** [[Occupancy vs Detection Probability]], [[Occupancy Workflow in R]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Population Estimation]]

## Flashcards

Site vs observation covariate: which can enter ψ?
??
Only site covariates; observation covariates change between visits and explain p.
++++
