---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Count-based abundance estimation turns a raw count into an abundance estimate by dividing by the fraction of the area surveyed and by the estimated detection probability."
aliases:
  - "N = C / p"
  - "Correcting counts for detection"
  - "Design-based and model-based correction"
  - "Strip counts"
  - "N̂ = C / (P_area × P_d)"
status: seedling
---

# Count-based Abundance Estimation

You count 30 people in one of four equal rooms at a party and think you notice only three quarters of the people in a room, so you estimate 30 ÷ 0.25 ÷ 0.75 = 160 guests. **Count-based abundance estimation** turns a raw count into an abundance estimate by dividing by the fraction of the area surveyed and by the estimated detection probability: N̂ = C / (P_area × P̂_d) ([[Abundance]], [[Detection Probability]], [[Proportion]]). P_area is design-based: you know it from the map of what you surveyed ([[Survey Sampling Designs]]). P_d is model-based: it must be estimated from the data, by [[Repeat-Visit Design|repeat visits]], marks, distances or observers.

Strip counts apply only the area correction, so they are biased low if detection in the strip is below 1. Uncertainty in P̂_d carries into N̂, and the [[Delta Method]] or a [[Bootstrap|bootstrap]] gives its variance. In the code below, Powell and Gale's strip-count exercise of 88 impala seen in strips covering 791 of 2,110 ha scales up to 235 impala, and 22 kudu to 59, assuming every animal in a strip was seen; if detection in the strips were 0.8, the impala estimate would rise to 293.

It is the general recipe behind [[Powell and Gale 2015]] Ch7 and Ch14 ([[Availability for Detection]], [[Horvitz-Thompson Estimator]]). Scaling up by area is not enough, since that assumes perfect detection in the surveyed part.

```r
C <- c(impala = 88, kudu = 22); area_total <- 2110; area_strip <- 791
round(C * area_total / area_strip)   # design-based correction only
round(88 / (791 / 2110) / 0.8)       # if detection in strips were 0.8
```

## Connections
- **Builds on:** [[Abundance]], [[Detection Probability]], [[Bootstrap]]
- **Leads to:** [[Availability for Detection|Availability and Presence Probability]], [[Distance Sampling]], [[Survey Sampling Designs]], [[Repeat-Visit Design]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Census vs Index vs Estimate]]

## Flashcards

What is the general count-correction formula for abundance?
??
N̂ = C / (P_area × P̂_d).
++++

Why is P_area design-based but P_d model-based?
??
The surveyed fraction is known from the design; detection must be estimated from data.
++++
