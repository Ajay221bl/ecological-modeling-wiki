---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Conditional occupancy is the probability that a site is occupied by one species given that another species is present (or given that it is absent)."
aliases:
  - "Conditional occupancy probability"
  - "psi conditional"
  - "Occupancy given another species"
status: seedling
---

# Conditional Occupancy

Among only the houses that have a big dog, what share also have a cat? And among houses with no dog? Those two answers are conditional, and comparing them is how you see whether dogs keep cats away. **Conditional occupancy** is the probability that a site is occupied by one species given that another species is present, or given that it is absent ([[Multi-species Occupancy Model|Multi-species Occupancy]], [[Conditional Probability]]). The guest lecture defines it as "probability that site is occupied by species X given species Y is present/absent". Written for culpeo and puma: ψ(culpeo | puma) and ψ(culpeo | no puma).

The comparison of the two is the interaction. If ψ(culpeo | puma) = 0.20 but ψ(culpeo | no puma) = 0.50, culpeo are much less likely where pumas are, which fits avoidance or predation; if the two were equal, the species would be independent ([[Independent Events]], [[Species Interaction]]). In the simulation below, 2,000 sites built with those values give 0.197 and 0.512. A conditional value can also be recovered from a joint one by dividing by the marginal: using the slide's rough values for culpeo and puma, a co-occurrence of about 0.06 divided by puma's marginal 0.38 gives ψ(culpeo | puma) ≈ 0.16, well below culpeo's marginal of about 0.29 ([[Co-occurrence Probability]], [[Marginal Occupancy]]).

Conditional occupancy shows association, not cause: culpeo may avoid pumas, or both may respond to some habitat feature the model left out, which is why habitat [[Predictor Variable|covariates]] belong in multi-species models too ([[Correlation vs Causation]], [[Occupancy Guest Lecture]]). The slide panel labelled "Conditional" actually plots P(co-occurrence), the [[Joint Probability|joint probability]], so read its y-axis label before reading its numbers.

```r
set.seed(9); S <- 2000; zA <- rbinom(S, 1, 0.4); zB <- rbinom(S, 1, ifelse(zA == 1, 0.2, 0.5))
round(c(B_given_A = mean(zB[zA == 1]), B_given_noA = mean(zB[zA == 0])), 3)
round(0.06 / 0.38, 2)   # conditional = joint / marginal (slide's rough culpeo-puma values)
```

## Connections
- **Builds on:** [[Multi-species Occupancy Model|Multi-species Occupancy]], [[Conditional Probability]], [[Predictor Variable]], [[Joint Probability]]
- **Leads to:** [[Marginal Occupancy]], [[Co-occurrence Probability]], [[Species Interaction]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Marginal vs Conditional Occupancy]]

## Flashcards

What is conditional occupancy?
??
The chance a site is occupied by one species given another species is present (or absent).
++++

How do you read an interaction from conditional occupancy?
??
Compare ψ(B given A present) with ψ(B given A absent); a difference means the species are not independent.
++++

How do you get conditional occupancy from joint and marginal values?
??
ψ(B given A) = P(A and B) / ψ(A).
++++
