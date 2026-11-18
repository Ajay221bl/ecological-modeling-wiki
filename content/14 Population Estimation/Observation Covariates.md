---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Observation covariates are measurements that change from visit to visit at a site, such as date, time, weather or observer, used to explain detection probability."
aliases:
  - "Observation-level covariates"
  - "Survey covariates"
  - "obsCovs"
  - "Visit covariates"
status: seedling
---

# Observation Covariates

Whether it was raining when you knocked on the door changes each visit and affects whether the cat shows itself, not whether one lives there. **Observation covariates** are measurements that change from visit to visit at a site, such as date, time, weather or observer, used to explain [[Detection Probability]] ([[Single-season Occupancy]]). There is one value per site per visit. They belong only in p, because occupancy is fixed within a season and visit-level variables cannot explain it ([[Closure Assumption]]).

Examples are observer identity, survey duration, wind, temperature, [[Dates in R|day of year]] and time since sunrise. Finley et al. (2005, in Powell and Gale Ch15) found swift fox detection peaked in February and October, during dispersal, and was low in June and July when foxes were in dens. In unmarked they are `obsCovs`, entered after the first `~` in `occu(~ p covariates ~ ψ covariates)` ([[unmarked Package]]).

The guest lecture's examples are temperature, date, lunar cycle, wind speed and precipitation, and it stresses that p can take both site-specific and survey-specific [[Predictor Variable|covariates]] ([[Occupancy Guest Lecture]], [[Course Website]], [[Powell and Gale 2015]] Ch15, [[Site Covariates]]). [[Happe et al. 2020]] used date and date², year, bait availability and percent wilderness for fisher detection ([[Unexplained Heterogeneity in Detection]]). Weather can't explain occupancy within a closed season; it explains detection.

## Connections
- **Builds on:** [[Detection Probability]], [[Single-season Occupancy]], [[Dates in R]], [[Predictor Variable]]
- **Leads to:** [[Site Covariates]], [[unmarked Package]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Site vs Observation Covariates]]

## Flashcards

What is an observation covariate in an occupancy model?
??
A variable that changes visit to visit (weather, observer, date), used to explain p.
++++

Which side of occu(~ a ~ b) holds the detection covariates?
??
The first, a.
++++
