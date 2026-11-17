---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Presence/absence data"
  - "Detection/non-detection data"
  - "Occurrence data"
  - "0/1 occurrence data"
status: seedling
---

# Presence-Absence Data

**In one line:** presence-absence data record whether a species was found (1) or not found (0) at each site or survey, the response for logistic regression, species distribution and occupancy models.

> [!info] Before this, it helps to know
> [[Binary Variable]] · [[Bernoulli Distribution]]

## Start from zero
1. **A 1 is usually reliable;** a 0 may be a true absence or a missed species.
2. **Without repeat visits** it is really detection/non-detection, and logistic regression models detection-confounded occurrence.
3. **With repeat visits** occupancy models separate occupancy and detection.
4. **Presence-only data** (museum records) lack zeros and need different methods.
5. **Christensen et al. (2020)** modelled county-year presence or absence of hemorrhagic disease reports with a logistic GLMM.

## In the course
[[Christensen et al. 2020]]. [[Powell and Gale 2015]] Ch15. [[Zuur et al. 2009 Ch10]].

## Common confusions
- **"A zero means the species is absent."** It means it was not detected.

## Explain it back
- What extra data turn presence-absence into occupancy data?

*Pass test:* you can say what presence-absence data can and cannot tell you.

## Connections
- **Builds on:** [[Binary Variable]], [[Bernoulli Distribution]]
- **Leads to:** [[Logistic Regression]], [[Occupancy]], [[Species Distribution Model]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]], molecular note [[Naive vs Estimated Occupancy]]

## Flashcards

What is the problem with zeros in presence-absence data?
??
A zero may be a true absence or a missed detection.
++++
