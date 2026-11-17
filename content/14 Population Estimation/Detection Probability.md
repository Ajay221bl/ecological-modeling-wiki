---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "p (detection)"
  - "Detectability"
  - "Probability of detection"
  - "Encounter probability (survey)"
status: seedling
---

# Detection Probability

**In one line:** detection probability p is the chance that an animal or species that is present at a survey is actually recorded.

> [!info] Before this, it helps to know
> [[Imperfect Detection]] · [[Probability]] · [[Bernoulli Distribution]]

## The everyday picture
A goalkeeper's save rate, flipped around. Each shot that is really there either gets "seen" (recorded) or slips through. p is the share that gets seen.

## A tiny example
If p = 0.3 per visit, a present species is recorded on about 3 of every 10 visits. Over 4 visits the chance of at least one record is 1 − 0.7⁴ = 0.76, so about a quarter of occupied sites still look empty.

## Start from zero
1. **p is conditional on presence.** In occupancy models it is "detected, given present".
2. **It mixes two things** (Powell and Gale Ch14): availability (the animal is at the site and can be seen or heard) and detection given availability.
3. **It is estimated, not assumed,** from repeated visits, marks, observers or distances.
4. **It can depend on covariates:** observer, time of day, weather, effort, vegetation.
5. **Low p is the hard case:** estimates of occupancy or abundance become imprecise and sensitive to assumptions.

## In R
```r
p <- c(0.1, 0.3, 0.6); k <- 4
round(1 - (1 - p)^k, 2)   # chance of at least one detection in k visits
```

## In the course
[[Powell and Gale 2015]] Ch7, Ch14 and Ch15.

## Common confusions
- **"Detection probability is the proportion of sites where the species was seen."** That is naive occupancy. p is per visit and conditional on presence.

## Explain it back
- What is p conditional on?

*Pass test:* you can define p and compute the chance of at least one detection.

## Connections
- **Builds on:** [[Imperfect Detection]], [[Probability]]
- **Leads to:** [[Cumulative Detection Probability]], [[Capture Probability]], [[Availability for Detection|Availability and Presence Probability]], [[Observation Covariates]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Occupancy vs Detection Probability]]

## Flashcards

What is detection probability p?
??
The chance that a present animal or species is recorded on a survey.
++++

Detection probability p mixes which two components?
??
Availability (being there and detectable) and detection given availability.
++++
