---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Naïve occupancy"
  - "Apparent occupancy"
  - "Observed occupancy"
  - "Proportion of sites detected"
status: seedling
---

# Naive Occupancy

**In one line:** naive occupancy is the proportion of surveyed sites where the species was detected at least once, ignoring that it may have been missed elsewhere.

> [!info] Before this, it helps to know
> [[Occupancy]] · [[Proportion]]

## The everyday picture
Counting houses where you saw a cat. Houses with hiding cats count as cat-free.

## A tiny example
Powell and Gale (2015 Ch15): two studies of ten sites both have naive occupancy 80%. Study 1 detected the species on most visits where it was present, so sites 9 and 10 are probably truly empty. Study 2 rarely re-detected it, so the true occupancy is probably higher than 80%.

## Start from zero
1. **Naive = s_D / s,** sites with any detection divided by sites surveyed.
2. **It is biased low** whenever p < 1, and the bias grows as p falls or visits shrink.
3. **It confounds occupancy and detection:** a habitat where the species is hard to see looks less occupied.
4. **It is still useful as a minimum** and as a quick check on fitted ψ̂.
5. **Christensen et al. (2020)** mapped hemorrhagic disease reports, which are detection-only data with the same issue.

## In the course
[[Powell and Gale 2015]] Ch15. [[Christensen et al. 2020]].

## Common confusions
- **"Naive occupancy is fine if I visit once."** One visit gives no information about p, so you cannot even tell how biased it is.

## Explain it back
- Why can two studies with equal naive occupancy differ in true occupancy?

*Pass test:* you can compute naive occupancy and say why it is biased.

## Connections
- **Builds on:** [[Occupancy]], [[Proportion]]
- **Leads to:** [[Detection History]], [[Cumulative Detection Probability]]
- **Part of:** [[MOC - Population Estimation]], molecular note [[Naive vs Estimated Occupancy]]

## Flashcards

What is naive occupancy?
??
The proportion of sites where the species was detected at least once.
++++

Which way is naive occupancy biased when p < 1?
??
Low: it underestimates true occupancy.
++++
