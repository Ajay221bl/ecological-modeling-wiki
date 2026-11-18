---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Co-occurrence probability is the chance that two species both occupy the same site, the joint probability from a multi-species occupancy model."
aliases:
  - "Probability of co-occurrence"
  - "P(co-occurrence)"
  - "Joint occupancy"
status: seedling
---

# Co-occurrence Probability

The share of houses on a street that have both a cat and a dog is a co-occurrence. **Co-occurrence probability** is the chance that two species both occupy the same site, the [[Joint Probability]] from a [[Multi-species Occupancy Model|Multi-species Occupancy]] model: P(z_A = 1 and z_B = 1). It equals ψ(A) times ψ(B | A), the marginal of one species times the conditional of the other ([[Conditional Occupancy]], [[Marginal Occupancy]]).

Its meaning comes from comparison with [[Independence of Observations|independence]]. If the species ignored each other, co-occurrence would be ψ(A)·ψ(B). With ψ(puma) = 0.4 and ψ(culpeo) = 0.38 that would be 0.152, but the model in the code below has puma and culpeo together at only 0.08 of sites; the ratio 0.08 / 0.152 = 0.53 is the species interaction factor. In the guest lecture's carnivore example (read roughly from panel B of the slide), culpeo and puma co-occurred at about 0.06 of sites although independence would predict about 0.29 × 0.38 = 0.11, while chilla fox and humans co-occurred at about 0.53, close to 0.64 × 0.77 = 0.49 ([[Occupancy Guest Lecture]]).

A small co-occurrence is not evidence of avoidance by itself: two rare species will seldom co-occur even if they ignore each other. Always compare it with the product of the marginals, or look at the conditional occupancies directly ([[Species Interaction]]).

```r
psiA <- 0.4; psiB <- 0.38; both <- 0.4 * 0.2
round(c(observed = both, if_independent = psiA * psiB, SIF = both / (psiA * psiB)), 3)
```

## Connections
- **Builds on:** [[Joint Probability]], [[Multi-species Occupancy Model|Multi-species Occupancy]], [[Independence of Observations]]
- **Leads to:** [[Conditional Occupancy]], [[Marginal Occupancy]], [[Species Interaction]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Marginal vs Conditional Occupancy]]

## Flashcards

What is co-occurrence probability?
??
The chance both species occupy a site, P(A and B) = ψ(A) × ψ(B given A).
++++

Why compare co-occurrence with ψ(A) × ψ(B)?
??
That product is what co-occurrence would be if the species were independent; rare species co-occur rarely anyway.
++++
