---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
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

**In one line:** multi-state models extend CJS to animals that move among states (sites, breeding status, disease status) and estimate state-specific survival, detection and transition probabilities ψ between states.

> [!info] Before this, it helps to know
> [[Cormack-Jolly-Seber Model]] · [[Markov Chain]]

## A tiny example
History A0B with states A and B: survive in A, then either stay in A or move to B, missed in occasion 2, then seen in B on occasion 3. All routes to B by occasion 3 are summed.

## Start from zero
1. **Capture histories use letters,** such as A0BB, instead of 1s.
2. **Parameters:** S^r (survival in state r), p^r (detection in state r), ψ^rs (moving from r to s).
3. **Uses:** dispersal among colonies, breeding versus non-breeding transitions, infection status.
4. **They reduce, but do not remove, apparent-survival problems** (Powell and Gale Ch12): animals can still leave all monitored sites.
5. **Data hungry:** each state adds survival, detection and transition parameters, so too many states make models unestimable.
6. **Powell and Gale also use ψ here,** a different meaning from occupancy's ψ.

## In the course
[[Powell and Gale 2015]] Ch12.

## Common confusions
- **"ψ always means occupancy."** In multi-state models ψ is a transition probability.

## Explain it back
- What three parameter types does a multi-state model have?

*Pass test:* you can describe multi-state parameters.

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
