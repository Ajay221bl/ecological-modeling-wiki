---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "N = C / p"
  - "Correcting counts for detection"
  - "Design-based and model-based correction"
  - "Strip counts"
  - "N̂ = C / (P_area × P_d)"
status: seedling
---

# Count-based Abundance Estimation

**In one line:** count-based abundance estimation turns a raw count into an abundance estimate by dividing by the fraction of the area surveyed and by the estimated detection probability.

> [!info] Before this, it helps to know
> [[Abundance]] · [[Detection Probability]] · [[Proportion]]

## The everyday picture
You count 30 people in one of four equal rooms of a party, and you think you notice only three quarters of the people in a room. Estimate: 30 ÷ 0.25 ÷ 0.75 = 160 guests.

## A tiny example
Powell and Gale (2015 Ch14) strip-count exercise: 88 impala seen in strips covering 791 of 2110 ha gives N̂ = 88 × 2110 / 791 ≈ 235 impala, and 22 kudu gives about 59, assuming every animal in a strip was seen.

## Start from zero
1. **N̂ = C / (P_area × P̂_d).**
2. **P_area is design-based:** you know it from the map of what you surveyed.
3. **P_d is model-based:** it must be estimated from the data (repeat visits, marks, distances, observers).
4. **Strip counts** apply only the area correction, so they are biased low if detection in the strip is below 1.
5. **Uncertainty in P̂_d carries into N̂;** the [[Delta Method]] or a bootstrap gives its variance.

## In R
```r
C <- c(impala = 88, kudu = 22); area_total <- 2110; area_strip <- 791
round(C * area_total / area_strip)   # design-based correction only
round(88 / (791 / 2110) / 0.8)       # if detection in strips were 0.8
```

## In the course
[[Powell and Gale 2015]] Ch7 and Ch14.

## Common confusions
- **"Scaling up by area is enough."** That assumes perfect detection in the surveyed part.

## Explain it back
- Which correction is design-based and which model-based?

*Pass test:* you can correct a count for area and detection.

## Connections
- **Builds on:** [[Abundance]], [[Detection Probability]]
- **Leads to:** [[Availability for Detection|Availability and Presence Probability]], [[Distance Sampling]], [[Survey Sampling Designs]]
- **Part of:** [[MOC - Population Estimation]], molecular note [[Census vs Index vs Estimate]]

## Flashcards

What is the general count-correction formula for abundance?
??
N̂ = C / (P_area × P̂_d).
++++

Why is P_area design-based but P_d model-based?
??
The surveyed fraction is known from the design; detection must be estimated from data.
++++
