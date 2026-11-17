---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - popest
aliases: []
status: seedling
---

# Occupancy vs Detection Probability

> [!summary] In plain words
> occupancy ψ is about the site (is the species there at all this season?), while detection p is about the visit (if it is there, will this survey record it?), and occupancy models need repeat visits to separate them.

## The question
How do occupancy and detection probability differ, and how does the model tell them apart?

## Built from
- [[Occupancy]] and [[Detection Probability]].
- [[Site Covariates]] and [[Observation Covariates]].
- [[Single-season Occupancy]]: the likelihood.

## The reasoning, step by step
1. **ψ: one per site per season.** p: one per visit.
2. **With one visit,** the chance of a detection is ψp; only the product is estimable.
3. **With repeat visits,** sites with mixed histories (0101) show p < 1 directly, which separates p from ψ.
4. **Covariates go where they act:** habitat on ψ (and maybe p), weather and observer on p.
5. **Confounding risk:** a habitat covariate that lowers p but is put only on ψ makes the habitat look avoided.

| | ψ (occupancy) | p (detection) |
|---|---|---|
| Unit | Site × season | Site × visit |
| Question | Is it there? | Did we record it, if there? |
| Covariates | Habitat, landscape | Weather, observer, date, effort |
| Estimable from one visit? | No (only ψp) | No |

## So in practice
Put habitat covariates that could affect visibility on both ψ and p and compare models with AIC.

## What would go wrong otherwise
Modelling occupancy as a function of survey date within a closed season.

## Explain it back
- What is identifiable from a single visit?

*Pass test:* you can assign a covariate to ψ or p and explain the identifiability problem.

## Connections
- **Related:** [[Site vs Observation Covariates]], [[Naive vs Estimated Occupancy]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

With one visit per site, what can an occupancy model estimate?
??
Only the product ψp, not ψ and p separately.
++++
