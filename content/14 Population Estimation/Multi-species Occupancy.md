---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "A multi-species occupancy model estimates the occupancy of two or more species at the same sites together, so it can ask whether one species' presence changes the chance that another is there, while still correcting for imperfect detection."
aliases:
  - "Multispecies occupancy model"
  - "Two-species occupancy"
  - "Single-season multi-species occupancy"
  - "occuMulti()"
  - "Co-occurrence model"
status: seedling
---

# Multi-species Occupancy

Whether a house has a cat may depend on whether next door has a big dog. To ask that question with imperfect sightings of both animals you need one model that keeps track of both at once. A **multi-species occupancy model** estimates the occupancy of two or more species at the same sites together, so it can ask whether one species' presence changes the chance that another is there, while still correcting for each species' [[Imperfect Detection]] ([[Occupancy]], [[Species Interaction]]). The guest lecture's motivation is that "biotic and community interactions are important": predators, competitors and people shape where a species can live, and two separate single-species models cannot see that.

Each site now has a hidden state for every species, such as (puma present, culpeo absent), and each species has its own detection probability. The model reports [[Marginal Occupancy]] (the chance a species is there, whatever the others do), [[Conditional Occupancy]] (the chance it is there given another species is present or absent) and [[Co-occurrence Probability]] (the chance both are there). If species were independent, co-occurrence would equal the product of the marginals, and the gap between the two is the evidence of interaction. In the code below a puma occupies 40% of sites and culpeo occupy 50% of puma-free sites but only 20% of puma sites; culpeo's marginal occupancy is then 0.38, and a species interaction factor of 0.53 (below 1) says they co-occur about half as often as independence would predict.

The lecture warns that the simpler models (MacKenzie et al. 2004) handle two species, while newer ones (in unmarked, `occuMulti()`) handle more than two "but need more data and sometimes have convergence issues", because the number of possible joint states doubles with every species added ([[unmarked Package]], [[Convergence]], [[Occupancy Guest Lecture]]). A multi-species occupancy model is not a community model of species richness: it tracks named species and their interactions, not how many species a site holds.

```r
psiA <- 0.4; psiB_A <- 0.2; psiB_a <- 0.5          # puma; culpeo with puma; culpeo without puma
psiB <- psiA * psiB_A + (1 - psiA) * psiB_a         # culpeo marginal occupancy
SIF <- (psiA * psiB_A) / (psiA * psiB)              # species interaction factor: < 1 means avoidance
round(c(marginal_culpeo = psiB, both = psiA * psiB_A, SIF = SIF), 3)
```

## Connections
- **Builds on:** [[Occupancy]], [[Species Interaction]], [[Joint Probability]]
- **Leads to:** [[Marginal Occupancy]], [[Conditional Occupancy]], [[Co-occurrence Probability]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Marginal vs Conditional Occupancy]]

## Flashcards

What question does a multi-species occupancy model answer that two single-species models cannot?
??
Whether one species' presence changes the chance another species is present, with detection corrected for both.
++++

Why do multi-species occupancy models need lots of data?
??
The number of joint states doubles with each species, so there are many more parameters to estimate.
++++

What does a species interaction factor below 1 mean?
??
The species co-occur less often than independence predicts (avoidance).
++++
