---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "p (capture)"
  - "Initial capture probability"
  - "Recapture probability c"
  - "c (recapture)"
  - "Catchability"
status: seedling
---

# Capture Probability

**In one line:** capture probability p is the chance that an animal in the population is caught on a given occasion; in closed models c is the separate chance of recapture for an animal already caught.

> [!info] Before this, it helps to know
> [[Encounter Probability]] · [[Closed Population]]

## A tiny example
Powell and Gale (Ch8) probability of a 10-occasion history with time and behaviour effects:
0100111000 → (1 − p₁)p₂(1 − c₃)(1 − c₄)c₅c₆c₇(1 − c₈)(1 − c₉)(1 − c₁₀).
Before first capture you use p; after, c.

## Start from zero
1. **p:** first capture. **c:** recapture.
2. **c > p:** trap happy. **c < p:** trap shy. c = p: no behavioural response.
3. **Can vary by time (p_t), individual (p_h) and behaviour (p_b).**
4. **The fraction of the population caught on an occasion is p,** which is why N̂ = n / p̂.
5. **Model on the logit scale** with covariates such as trap effort or weather.

## In the course
[[Powell and Gale 2015]] Ch7 and Ch8.

## Common confusions
- **"c is the probability of being caught twice."** It is the per-occasion probability of capture for an animal that has already been caught at least once.

## Explain it back
- When does a capture history switch from p to c?

*Pass test:* you can write capture probabilities with p and c.

## Connections
- **Builds on:** [[Encounter Probability]], [[Closed Population]]
- **Leads to:** [[Behavioral Response to Capture]], [[Capture Heterogeneity Models]], [[Huggins Closed Capture Model]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

In closed capture models, what are p and c?
??
p: probability of first capture; c: probability of recapture after being caught.
++++
