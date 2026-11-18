---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Jolly-Seber models extend CJS by also modelling the first captures of unmarked animals, so they estimate abundance and recruitment as well as apparent survival."
aliases:
  - "Jolly-Seber"
  - "JS model"
  - "POPAN"
  - "Jolly-Seber model"
  - "Recruitment"
  - "Pradel model"
status: seedling
---

# Jolly-Seber and POPAN Models

**Jolly-Seber models** extend CJS by also modelling the first captures of unmarked animals, so they estimate abundance and recruitment as well as [[Apparent Survival|apparent survival]] ([[Cormack-Jolly-Seber Model]], [[Abundance]]). CJS conditions on first capture; JS models the first capture too, which lets it estimate N_t at each occasion and the number of new animals entering through births plus immigration.

POPAN (Schwarz and Arnason) parameterises entry through a [[Super-population]] and probabilities of entry b_t, and Pradel models estimate the [[Population Growth Rate|population growth rate]] λ directly. The assumptions are stronger: unmarked and marked animals must share p, so capture heterogeneity biases N̂ ([[Capture Heterogeneity Models]]).

They are covered in [[Powell and Gale 2015]] Ch10 and Ch13 ([[Open Population]], [[Program MARK]]). CJS and Jolly-Seber are not the same: JS also estimates abundance and recruitment.

## Connections
- **Builds on:** [[Cormack-Jolly-Seber Model]], [[Abundance]], [[Apparent Survival]], [[Population Growth Rate]]
- **Leads to:** [[Super-population]], [[Robust Design]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What does a Jolly-Seber model add to CJS?
??
Modelling first captures of unmarked animals, giving abundance and recruitment.
++++
