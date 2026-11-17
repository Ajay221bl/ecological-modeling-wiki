---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Detection probability p is the chance that an animal or species that is present at a survey is actually recorded."
aliases:
  - "p (detection)"
  - "Detectability"
  - "Probability of detection"
  - "Encounter probability (survey)"
status: seedling
---

# Detection Probability

Think of a goalkeeper's save rate flipped around: each animal that is really there either gets "seen" and recorded or slips through, and p is the share that gets seen. **Detection probability** p is the chance that an animal or species that is present at a survey is actually recorded ([[Imperfect Detection]], [[Probability]], [[Bernoulli Distribution]]). It is conditional on presence: in occupancy models it means "detected, given present". If p = 0.3 per visit, a present species is recorded on about 3 of every 10 visits, and over 4 visits the chance of at least one record is 1 − 0.7⁴ = 0.76, so about a quarter of occupied sites still look empty ([[Cumulative Detection Probability]]).

Powell and Gale (Ch14) note that p mixes two things: availability, whether the animal is at the site and can be seen or heard, and detection given availability ([[Availability for Detection]]). It is estimated, not assumed, from repeated visits, marks, observers or distances, and it can depend on covariates such as observer, time of day, weather, effort and vegetation ([[Observation Covariates]]). Low p is the hard case, where estimates of occupancy or abundance become imprecise and sensitive to assumptions. In the code below four visits give at least one detection with probability 0.34 when p = 0.1, 0.76 when p = 0.3 and 0.97 when p = 0.6.

It is central to [[Powell and Gale 2015]] Ch7, Ch14 and Ch15 ([[Occupancy]], [[Capture Probability]]). Detection probability is not the proportion of sites where the species was seen; that is [[Naive Occupancy]]. p is per visit and conditional on presence.

```r
p <- c(0.1, 0.3, 0.6); k <- 4
round(1 - (1 - p)^k, 2)   # chance of at least one detection in k visits
```

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
