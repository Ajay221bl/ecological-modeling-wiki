---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "An open population is one where births, deaths, immigration or emigration happen between sampling occasions, so models estimate rates of change such as survival rather than one fixed size."
aliases:
  - "Open populations"
  - "Open-population model"
status: seedling
---

# Open Population

A café over a whole day has customers coming and going: you can estimate how long people stay and how many arrive, but not "the" number of customers. An **open population** is one where births, deaths, immigration or emigration happen between sampling occasions, so models estimate rates of change such as survival rather than one fixed size ([[Closed Population]], [[Survival Rate]]). Studies run longer than closed ones, and we want deaths to happen, or survival cannot be estimated (Powell and Gale Ch7).

Open models include the [[Cormack-Jolly-Seber Model]] for survival, [[Jolly-Seber and POPAN Models]] for recruitment and N as well, [[Dead Recovery Models]] and [[Multi-state Models]]. "Short" and "long" are relative to the species: a closed study of elephants can last longer than an open study of mice ([[Closure Assumption]]). A 0 in an open-model history can mean dead, emigrated or missed ([[Apparent Survival]]).

They are covered in [[Powell and Gale 2015]] Ch7 and Ch10, and the [[Robust Design]] combines open and closed periods. Open models don't give N easily: CJS conditions on marked animals and does not estimate N, so Jolly-Seber types are needed.

## Connections
- **Builds on:** [[Closed Population]], [[Survival Rate]]
- **Leads to:** [[Cormack-Jolly-Seber Model]], [[Robust Design]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Open vs Closed Populations]]

## Flashcards

What is an open population?
??
One where births, deaths or movement occur between sampling occasions.
++++

For a CJS open model, what is P(history 10) over two occasions?
??
S₁(1 − p₂) + (1 − S₁).
++++
