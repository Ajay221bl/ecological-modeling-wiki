---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Multi-state models extend CJS to animals that move among states (sites, breeding status, disease status) and estimate state-specific survival, detection and transition probabilities ψ between states."
aliases:
  - "Multistate models"
  - "Multi-state mark-recapture"
  - "Arnason-Schwarz model"
  - "Transition probability"
  - "psi (transition)"
  - "Multi-strata models"
status: seedling
---

# Multi-state Models

**Multi-state models** extend CJS to animals that move among states, such as sites, breeding status or disease status, and estimate state-specific survival, detection and transition probabilities ψ between states ([[Cormack-Jolly-Seber Model]], [[Markov Chain]]). Capture histories use letters, such as A0BB, instead of 1s. The parameters are S^r, survival in state r; p^r, detection in state r; and ψ^rs, the probability of moving from r to s. History A0B, with states A and B, means the animal survived in A, then either stayed in A or moved to B and was missed on occasion 2, and was seen in B on occasion 3; all routes to B by occasion 3 are summed.

Uses include dispersal among colonies, transitions between breeding and non-breeding, and infection status. They reduce, but do not remove, apparent-survival problems (Powell and Gale Ch12), because animals can still leave all monitored sites ([[Apparent Survival]]). They are data hungry: each state adds survival, detection and transition parameters, so too many states make models unestimable.

They are covered in [[Powell and Gale 2015]] Ch12 ([[Program MARK]]). Powell and Gale use ψ here too, so ψ does not always mean [[Occupancy]]: in multi-state models it is a transition probability.

## Connections
- **Builds on:** [[Cormack-Jolly-Seber Model]], [[Markov Chain]]
- **Leads to:** [[Joint Live-dead Encounter Models]], [[Apparent Survival]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What is ψ in a multi-state model?
??
The probability of moving from one state to another between occasions.
++++

Why can you have too many states?
??
Each adds survival, detection and transition parameters, needing more data.
++++
