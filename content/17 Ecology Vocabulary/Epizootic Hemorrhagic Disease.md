---
type: atomic
tags:
  - ecology
  - flashcards/eco/ecology
description: "Hemorrhagic disease is a viral disease of deer and other ruminants caused by epizootic hemorrhagic disease virus (EHDV) and bluetongue virus (BTV), spread by biting midges, often causing late-summer deer die-offs."
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

**Haemorrhagic disease** (HD) is a viral disease of deer and other ruminants caused by epizootic haemorrhagic disease virus (EHDV) and bluetongue virus (BTV), spread by biting midges, and often causing late-summer deer die-offs ([[Vector-borne Disease]]). Both viruses are orbiviruses, and "HD" covers disease from either. Reports peak in late summer and early fall, when midges are abundant, and white-tailed deer (*Odocoileus virginianus*) were the focal host in the course reading.

[[Christensen et al. 2020]] modelled annual presence or absence of HD reports in 1,830 counties of 23 eastern US states from 2000 to 2014 with a logistic GLMM in lme4 ([[GLMM]]). The [[Fixed Effect|fixed effects]] were drought severity, physiographic region, wetland cover, latitude and longitude, plus drought × latitude and drought × wetland interactions, with state and year as [[Random Effect|random effects]] ([[Crossed Random Effects]], [[Drought Index]]). Drought severity was a significant [[Predictor Variable|predictor]] of HD presence, and its importance depended on latitude ([[Latitudinal Gradient]]).

The response was presence-absence of reports, a detection-type response subject to reporting effort ([[Imperfect Detection]]). It is a lab dataset ([[Course Website]]). No report does not mean no disease: reports depend on people finding and submitting dead deer.

## Connections
- **Builds on:** [[Vector-borne Disease]], [[Fixed Effect]], [[Random Effect]], [[Predictor Variable]]
- **Leads to:** [[Drought Index]], [[GLMM]], [[Imperfect Detection]]
- **Part of:** [[MOC 19 - Ecology Vocabulary|MOC - Ecology Vocabulary]]

## Flashcards

What causes hemorrhagic disease in deer?
??
EHDV and bluetongue virus, spread by Culicoides midges.
++++

What model did Christensen et al. 2020 use?
??
A logistic GLMM in lme4 with state and year random effects.
++++
