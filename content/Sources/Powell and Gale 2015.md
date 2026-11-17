---
type: source
tags:
  - source
  - reading
aliases:
  - "Powell and Gale"
  - "Powell and Gale 2015 Ch5 to 19"
  - "Estimation of Parameters for Animal Populations"
status: seedling
---
<!-- gen_sources -->

# Powell and Gale 2015

> [!summary] In plain words
> A friendly primer on estimating population parameters when animals are missed: likelihood, AIC, then mark-recapture, survival, survey sampling, occupancy, removal, N-mixture and distance methods, each built from probability statements about what you can observe.

**Citation:** Powell, L. A., and G. A. Gale. 2015. *Estimation of Parameters for Animal Populations: A Primer for the Rest of Us.* Caught Napping Publications, Lincoln, NE.
**Syllabus week:** Ch1 to Ch4 are assigned (Aug 18, Sep 15); Ch5 to Ch19 support the occupancy guest lectures (Nov 3 and 5).

> [!warning] Verify
> In the Ch9 worked example, the book's variance step multiplies by 0.9545 where (1 − Ŝ) = 0.0455 belongs; the correct SE is 0.016, not 0.07. See [[Mayfield Nest Survival]].

## What it's about
The book teaches every method the same way: write the probability of each observable history (a capture history, a detection history, a count), multiply them into a likelihood, and estimate the parameters. Chapters 1 to 4 build the tools (models, inference, maximum likelihood, AIC). Chapters 5 to 19 apply them to animal populations.

## Key ideas I use
- Ch5: variance and the delta method → [[Delta Method]], [[Variance of an Estimate]]
- Ch6: linear models as the engine for covariates in Program MARK → [[Design Matrix in Program MARK]]
- Ch7: mark-recapture, encounter probability, cohorts, open vs closed → [[Mark-Recapture]], [[Encounter Probability]], [[Cohort]], [[Open vs Closed Populations]]
- Ch8: closed populations; Lincoln-Petersen (bobwhite N̂ ≈ 311), Chapman (308), Schnabel (iguanas, N̂ ≈ 249), Otis models → [[Lincoln-Petersen Estimator]], [[Chapman Estimator]], [[Schnabel Estimator]], [[Capture Heterogeneity Models]]
- Ch9: known fate; Mayfield (wood thrush daily survival 0.9545), Kaplan-Meier, censoring, staggered entry → [[Mayfield Nest Survival]], [[Kaplan-Meier Estimator]], [[Censoring]]
- Ch10: CJS and apparent survival → [[Cormack-Jolly-Seber Model]], [[Apparent Survival]]
- Ch11 to Ch13: recoveries, multi-state models, robust design → [[Dead Recovery Models]], [[Multi-state Models]], [[Robust Design]]
- Ch14: census, index, abundance estimate; availability and detection → [[Census vs Index vs Estimate]], [[Availability for Detection]]
- Ch15: occupancy; naive vs estimated, closure, d = 1 − (1 − p)^k → [[Occupancy]], [[Naive Occupancy]], [[Cumulative Detection Probability]]
- Ch16 to Ch19: double observers, removal, N-mixture, distance sampling → [[Double-observer Methods]], [[Removal Sampling]], [[N-mixture Model]], [[Distance Sampling]]

## Notes that rely on it (72)
[[Abundance]], [[Age and Time Structure in Survival Models]], [[Apparent Survival]], [[Availability for Detection]], [[Behavioral Response to Capture]], [[Capture Heterogeneity Models]], [[Capture History]], [[Capture Probability]], [[Catch per Unit Effort]], [[Censoring]], [[Census]], [[Chapman Estimator]], [[Closed Population]], [[Closure Assumption]], [[Cohort]], [[Cormack-Jolly-Seber Model]], [[Count-based Abundance Estimation]], [[Course Schedule]], [[Cumulative Detection Probability]], [[Dead Recovery Models]], [[Design Matrix in Program MARK]], [[Detection Function]], [[Detection History]], [[Detection on the Line g(0)]], [[Detection Probability]], [[Distance Sampling]], [[Double-observer Methods]], [[Effective Strip Width]], [[Encounter Probability]], [[Exposure Days]], [[Finite Population Correction]], [[Goodness of Fit and c-hat]], [[Habitat]], [[Hazard Rate]], [[Horvitz-Thompson Estimator]], [[Huggins Closed Capture Model]], [[Imperfect Detection]], [[Joint Live-dead Encounter Models]], [[Jolly-Seber and POPAN Models]], [[Kaplan-Meier Estimator]], [[Known-fate Models]], [[Lincoln-Petersen Estimator]], [[Line Transects]], [[Logistic Exposure Model]], [[Mark-Recapture]], [[Mayfield Nest Survival]], [[Multi-season Occupancy]], [[Multi-state Models]], [[N-mixture Model]], [[Naive Occupancy]], [[Observation Covariates]], [[Occupancy]], [[Open Population]], [[Parameter Index Matrix]], [[Point Transects]], [[Population Density]], [[Population Index]], [[Presence-Absence Data]], [[Primary and Secondary Sampling Periods]], [[Program MARK]], [[Radio-telemetry Data]], [[Removal Sampling]], [[Robust Design]], [[Schnabel Estimator]], [[Single-season Occupancy]], [[Staggered Entry Design]], [[Super-population]], [[Survey Sampling Designs]], [[Tag Loss]], [[Temporary Emigration]], [[Vital Rates]], [[Woody Encroachment]]

## Connections
- **Part of:** [[MOC - Course Readings]]
