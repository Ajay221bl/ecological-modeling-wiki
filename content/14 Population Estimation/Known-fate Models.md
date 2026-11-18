---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Known-fate models estimate survival from marked animals whose fate (alive or dead) is known at every check, so detection does not need to be estimated."
aliases:
  - "Known fate"
  - "Known-fate data"
  - "Known-fate survival"
  - "Known-fate analysis"
status: seedling
---

# Known-fate Models

If every phone call to your friends gets through, you always know who is fine and only need to count. **Known-fate models** estimate survival from marked animals whose fate, alive or dead, is known at every check, so detection does not need to be estimated ([[Survival Rate]], [[Binomial Distribution]], [[Cohort]]). Detection is assumed to be 1 for live and dead animals at each check, so survival is a straightforward binomial, and the simplest estimate is Ŝ = y / n, the y survivors out of n animals. Typical data come from radio-collared animals and monitored nests ([[Radio-telemetry Data]]).

The methods handle three complications: animals lost to follow-up ([[Censoring]]), animals entering at different times ([[Staggered Entry Design]]), and checks at irregular intervals ([[Exposure Days]]). [[Predictor Variable|Covariates]] such as mass, age or habitat can be modelled with logistic-type links, as in [[Program MARK]] ([[Logistic Exposure Model]]). The main [[Estimator|estimators]] are [[Mayfield Nest Survival]] and the [[Kaplan-Meier Estimator]].

Powell and Gale (Ch9) note the structure is the simplest, though the data are not the cheapest to collect ([[Powell and Gale 2015]] Ch9). Known-fate data are not cheap: collars and frequent checks are expensive, and it is the model that is simple.

## Connections
- **Builds on:** [[Survival Rate]], [[Binomial Distribution]], [[Cohort]], [[Predictor Variable]], [[Estimator]]
- **Leads to:** [[Censoring]], [[Staggered Entry Design]], [[Mayfield Nest Survival]], [[Kaplan-Meier Estimator]], [[Radio-telemetry Data]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Choosing a Survival Model]]

## Flashcards

What makes a survival model "known fate"?
??
The fate of every marked animal is known at each check, so detection is 1.
++++
