---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Dead recovery models estimate annual survival from marked animals that are later found dead and reported, usually by hunters or anglers, with a recovery probability that combines harvest, retrieval and reporting."
aliases:
  - "Recovery Models and Reporting Rate"
  - "Recovery models"
  - "Band recovery"
  - "Brownie models"
  - "Seber models"
  - "Reporting rate"
  - "Dead recovery (Brownie, Seber) Models"
  - "Recovery data"
status: seedling
---

# Dead Recovery Models

**Dead recovery models** estimate annual survival from marked animals that are later found dead and reported, usually by hunters or anglers, with a recovery probability that combines harvest, retrieval and reporting ([[Cohort]], [[Encounter Probability]], [[Survival Rate]]). They are common for waterfowl and fish, where large numbers are banded and harvested. The Brownie parameterisation uses S, annual survival, and f, the recovery rate = harvest × retrieval × reporting; the Seber parameterisation uses S and r, the probability a dead animal is found and reported, so f = (1 − S)r.

For a cohort banded in year 1, the Brownie model expects recoveries in proportion f₁ in year 1, S₁f₂ in year 2 and S₁S₂f₃ in year 3 (Powell and Gale Ch11); first-year, or direct, recoveries need no survival. The reporting rate λ (Powell and Gale Ch11) is the chance a retrieved band is reported, often estimated with reward bands. Unlike CJS, dead recoveries come from anywhere, so S is true survival, not apparent ([[Apparent Survival]], [[Joint Live-dead Encounter Models]]). They need very large marked cohorts, because recovery rates are small.

They are covered in [[Powell and Gale 2015]] Ch11. Recovery rate is not survival; it is the chance a banded animal is killed, retrieved and reported in a year.

## Connections
- **Builds on:** [[Cohort]], [[Encounter Probability]]
- **Leads to:** [[Joint Live-dead Encounter Models]], [[Apparent Survival]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[True vs Apparent Survival]], [[Choosing a Survival Model]]

## Flashcards

Expected recoveries from a year-1 cohort in year 3 (Brownie)?
??
R₁S₁S₂f₃.
++++

Why do dead recoveries estimate true rather than apparent survival?
??
Recoveries come from anywhere, so emigrants are not confused with deaths.
++++
