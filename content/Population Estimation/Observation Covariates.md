---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Observation-level covariates"
  - "Survey covariates"
  - "obsCovs"
  - "Detection covariates"
  - "Visit covariates"
status: seedling
---

# Observation Covariates

**In one line:** observation covariates are measurements that change from visit to visit at a site, such as date, time, weather or observer, used to explain detection probability.

> [!info] Before this, it helps to know
> [[Detection Probability]] · [[Single-season Occupancy]]

## The everyday picture
Whether it was raining when you knocked on the door. It changes each visit and affects whether the cat shows itself, not whether one lives there.

## Start from zero
1. **One value per site per visit.**
2. **Belong only in p.** Occupancy is fixed within a season, so visit-level variables cannot explain it.
3. **Examples:** observer identity, survey duration, wind, temperature, day of year, time since sunrise.
4. **Finley et al. (2005, in Powell and Gale Ch15)** found swift fox detection peaked in February and October, during dispersal, and was low in June and July when foxes were in dens.
5. **unmarked:** `obsCovs`, entered after the first `~` in `occu(~ p covariates ~ ψ covariates)`.

## In the course
Occupancy guest lecture ([[Course Website]]). [[Powell and Gale 2015]] Ch15.

## Common confusions
- **"Weather can explain occupancy."** Not within a closed season; it explains detection.

## Explain it back
- Why can observation covariates not enter ψ?

*Pass test:* you can identify observation covariates and model them on p.

## Connections
- **Builds on:** [[Detection Probability]], [[Single-season Occupancy]]
- **Leads to:** [[Site Covariates]], [[unmarked Package]]
- **Part of:** [[MOC - Population Estimation]], molecular note [[Site vs Observation Covariates]]

## Flashcards

What is an observation covariate in an occupancy model?
??
A variable that changes visit to visit (weather, observer, date), used to explain p.
++++

Which side of occu(~ a ~ b) holds the detection covariates?
??
The first, a.
++++
