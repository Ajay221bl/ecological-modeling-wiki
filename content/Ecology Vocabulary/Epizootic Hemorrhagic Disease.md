---
type: atomic
tags:
  - ecology
  - flashcards/eco/ecology
aliases:
  - "Hemorrhagic disease"
  - "HD"
  - "EHD"
  - "EHDV"
  - "Bluetongue"
  - "BTV"
status: seedling
---

# Epizootic Hemorrhagic Disease

**In one line:** hemorrhagic disease is a viral disease of deer and other ruminants caused by epizootic hemorrhagic disease virus (EHDV) and bluetongue virus (BTV), spread by biting midges, often causing late-summer deer die-offs.

> [!info] Before this, it helps to know
> [[Vector-borne Disease]]

## A tiny example
Christensen et al. (2020) modelled annual presence or absence of HD reports in 1,830 counties of 23 eastern US states from 2000 to 2014 with a logistic GLMM (lme4): drought severity, physiographic region, wetland cover, latitude and longitude as fixed effects, plus drought × latitude and drought × wetland interactions, with state and year as random effects.

## Start from zero
1. **Both viruses are Orbiviruses;** "HD" covers disease from either.
2. **Reports peak in late summer and early fall** when midges are abundant.
3. **Christensen et al. (2020) found** drought severity was a significant predictor of HD presence, and its importance depended on latitude.
4. **Data were presence-absence of reports,** a detection-type response (subject to reporting effort).
5. **White-tailed deer** (*Odocoileus virginianus*) were the focal host.

## In the course
[[Christensen et al. 2020]]. Lab dataset ([[Course Website]]).

## Common confusions
- **"No report means no disease."** Reports depend on people finding and submitting dead deer.

## Explain it back
- What were the random effects in Christensen et al.'s model?

*Pass test:* you can describe the HD study and its model.

## Connections
- **Builds on:** [[Vector-borne Disease]]
- **Leads to:** [[Drought Index]], [[GLMM]], [[Imperfect Detection]]
- **Part of:** [[MOC - Ecology Vocabulary]]

## Flashcards

What causes hemorrhagic disease in deer?
??
EHDV and bluetongue virus, spread by Culicoides midges.
++++

What model did Christensen et al. 2020 use?
??
A logistic GLMM in lme4 with state and year random effects.
++++
