---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Capture probability p is the chance that an animal in the population is caught on a given occasion; in closed models c is the separate chance of recapture for an animal already caught."
aliases:
  - "p (capture)"
  - "Initial capture probability"
  - "Recapture probability c"
  - "c (recapture)"
  - "Catchability"
status: seedling
---

# Capture Probability

**Capture probability** p is the chance that an animal in the population is caught on a given occasion; in closed models, c is the separate chance of recapture for an animal already caught ([[Encounter Probability]], [[Closed Population]]). p is for first capture and c for recapture: c > p means trap happy, c < p trap shy, and c = p no behavioural response ([[Behavioral Response to Capture]]). The fraction of the population caught on an occasion is p, which is why N̂ = n / p̂.

p can vary by time (p_t), individual (p_h) and behaviour (p_b), and it is modelled on the [[Link Scale|logit scale]] with [[Predictor Variable|covariates]] such as trap effort or weather ([[Capture Heterogeneity Models]], [[Logit Link]]). Powell and Gale (Ch8) write the probability of a 10-occasion history with time and behaviour effects: 0100111000 has probability (1 − p₁)p₂(1 − c₃)(1 − c₄)c₅c₆c₇(1 − c₈)(1 − c₉)(1 − c₁₀). Before first capture you use p, and after it c ([[Capture History]]).

It is used throughout [[Powell and Gale 2015]] Ch7 and Ch8 ([[Huggins Closed Capture Model]], [[Catch per Unit Effort]]). c is not the probability of being caught twice; it is the per-occasion probability of capture for an animal already caught at least once.

## Connections
- **Builds on:** [[Encounter Probability]], [[Closed Population]], [[Link Scale]], [[Predictor Variable]]
- **Leads to:** [[Behavioral Response to Capture]], [[Capture Heterogeneity Models]], [[Huggins Closed Capture Model]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

In closed capture models, what are p and c?
??
p: probability of first capture; c: probability of recapture after being caught.
++++
