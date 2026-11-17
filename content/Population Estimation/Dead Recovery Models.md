---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
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

**In one line:** dead recovery models estimate annual survival from marked animals that are later found dead and reported, usually by hunters or anglers, with a recovery probability that combines harvest, retrieval and reporting.

> [!info] Before this, it helps to know
> [[Cohort]] · [[Encounter Probability]] · [[Survival Rate]]

## A tiny example
Brownie model expected recoveries for a cohort banded in year 1 (Powell and Gale Ch11): f₁ in year 1, S₁f₂ in year 2, S₁S₂f₃ in year 3. First-year (direct) recoveries need no survival.

## Start from zero
1. **Common for waterfowl and fish,** where large numbers are banded and harvested.
2. **Brownie parameterisation:** S (annual survival) and f (recovery rate = harvest × retrieval × reporting).
3. **Seber parameterisation:** S and r, the probability a dead animal is found and reported, f = (1 − S) r.
4. **Reporting rate λ** (Powell and Gale Ch11) is the chance a retrieved band is reported, often estimated with reward bands.
5. **Unlike CJS,** dead recoveries come from anywhere, so S is true survival, not apparent.
6. **Requires very large marked cohorts,** because recovery rates are small.

## In the course
[[Powell and Gale 2015]] Ch11.

## Common confusions
- **"Recovery rate is survival."** Recovery rate is the chance a banded animal is killed, retrieved and reported in a year.

## Explain it back
- In a Brownie model, what does f combine?

*Pass test:* you can write expected recoveries under a Brownie model.

## Connections
- **Builds on:** [[Cohort]], [[Encounter Probability]]
- **Leads to:** [[Joint Live-dead Encounter Models]], [[Apparent Survival]]
- **Part of:** [[MOC - Population Estimation]], molecular note [[True vs Apparent Survival]], [[Choosing a Survival Model]]

## Flashcards

Expected recoveries from a year-1 cohort in year 3 (Brownie)?
??
R₁S₁S₂f₃.
++++

Why do dead recoveries estimate true rather than apparent survival?
??
Recoveries come from anywhere, so emigrants are not confused with deaths.
++++
