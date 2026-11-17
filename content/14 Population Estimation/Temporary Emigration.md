---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Temporary emigration is when animals leave the sampled area during some primary periods and later return, so they are alive but unavailable to be caught."
aliases:
  - "Temporary emigration γ"
  - "gamma prime and gamma double prime"
  - "Random temporary emigration"
  - "Markovian temporary emigration"
status: seedling
---

# Temporary Emigration

**Temporary emigration** is when animals leave the sampled area during some primary periods and later return, so they are alive but unavailable to be caught ([[Robust Design]], [[Availability for Detection]]). Adult seabirds that skip breeding in some years and stay at sea are an example. In CJS it biases p low and can bias survival ([[Cormack-Jolly-Seber Model]]).

The robust design estimates it with γ″, the probability of being away given present before, and γ′, of being away given away before. Random temporary emigration means γ″ = γ′; Markovian means they differ, because being away makes being away again more or less likely ([[Markov Chain]]). The survey-sampling parallel is an animal that uses the site but is elsewhere at survey time, the presence probability of Powell and Gale Ch14 ([[Super-population]]).

Powell and Gale (Ch13) ask "How can the model estimate emigration?" ([[Powell and Gale 2015]] Ch13 and Ch14). An animal not caught in a year is not necessarily dead or missed; it may be temporarily away.

## Connections
- **Builds on:** [[Robust Design]], [[Availability for Detection|Availability and Presence Probability]]
- **Leads to:** [[Super-population]], [[Apparent Survival]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What is temporary emigration?
??
Animals leave the sampled area for some periods and return, alive but unavailable.
++++

Which design estimates temporary emigration?
??
The robust design.
++++
