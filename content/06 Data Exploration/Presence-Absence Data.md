---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "Presence-absence data record whether a species was found (1) or not found (0) at each site or survey, the response for logistic regression, species distribution and occupancy models."
aliases:
  - "Presence/absence data"
  - "Detection/non-detection data"
  - "Occurrence data"
  - "0/1 occurrence data"
status: seedling
---

# Presence-Absence Data

**Presence-absence data** record whether a species was found (1) or not found (0) at each site or survey, the response for logistic regression, species distribution and [[Occupancy Model|occupancy models]] ([[Binary Variable]], [[Bernoulli Distribution]], [[Logistic Regression]]). A 1 is usually reliable, but a 0 may be a true absence or a missed species ([[Imperfect Detection]]).

Without [[Repeat-Visit Design|repeat visits]] the data are really detection/non-detection, and logistic regression models a detection-confounded occurrence ([[Naive Occupancy]]). With repeat visits, occupancy models separate occupancy and detection ([[Occupancy]], [[Detection History]]). Presence-only data, such as museum records, lack zeros and need different methods ([[Species Distribution Model]]).

[[Christensen et al. 2020]] modelled county-year presence or absence of haemorrhagic disease reports with a logistic GLMM ([[GLMM]], [[Powell and Gale 2015]] Ch15, [[Zuur et al. 2009 Ch10]]). A zero does not mean the species is absent; it means it was not detected.

## Connections
- **Builds on:** [[Binary Variable]], [[Bernoulli Distribution]]
- **Leads to:** [[Logistic Regression]], [[Occupancy]], [[Species Distribution Model]], [[Occupancy Model]], [[Repeat-Visit Design]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]], molecular note [[Naive vs Estimated Occupancy]]

## Flashcards

What is the problem with zeros in presence-absence data?
??
A zero may be a true absence or a missed detection.
++++
