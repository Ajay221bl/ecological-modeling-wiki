---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Encounter history (occupancy)"
  - "Detection/non-detection history"
  - "Detection histories"
status: seedling
---

# Detection History

**In one line:** a detection history is the string of 1s and 0s recording whether a species was detected at a site on each visit, such as 0101.

> [!info] Before this, it helps to know
> [[Binary Variable]] · [[Occupancy]]

## The everyday picture
A loyalty card stamped on visits when the café had your favourite cake. 0101 means you went four times and found it on the second and fourth.

## A tiny example
Probabilities of two five-visit histories (Powell and Gale Ch15):
- 01010: ψ (1 − p₁) p₂ (1 − p₃) p₄ (1 − p₅).
- 00000: ψ (1 − p₁)(1 − p₂)(1 − p₃)(1 − p₄)(1 − p₅) + (1 − ψ).

## Start from zero
1. **One row per site, one column per visit.**
2. **Any history with a 1 means the site is occupied,** so its probability starts with ψ.
3. **An all-zero history has two routes:** occupied but missed every time, or unoccupied. Their probabilities add.
4. **Unlike mark-recapture capture histories,** occupancy histories can be all zeros, because sites, not captured animals, are the units.
5. **Missing visits** are coded NA and simply skipped in the likelihood.
6. **The likelihood** multiplies the probabilities of all sites' histories.

## In R
```r
psi <- 0.6; p <- 0.3
h1 <- psi * (1 - p) * p * (1 - p) * p * (1 - p)        # 01010
h0 <- psi * (1 - p)^5 + (1 - psi)                     # 00000
round(c(h01010 = h1, h00000 = h0), 4)
```

## In the course
[[Powell and Gale 2015]] Ch15.

## Common confusions
- **"An all-zero history means absent."** It means absent or missed every time.

## Explain it back
- Write the probability of 000 with three visits.

*Pass test:* you can write the probability of any detection history.

## Connections
- **Builds on:** [[Binary Variable]], [[Occupancy]]
- **Leads to:** [[Capture History]], [[Single-season Occupancy]], [[Likelihood Function]]
- **Part of:** [[MOC - Population Estimation]]

## Flashcards

What is the probability of detection history 00 (two visits)?
??
ψ(1 − p)² + (1 − ψ).
++++

Why can occupancy histories be all zeros but capture histories cannot?
??
Sites are chosen in advance; capture histories start from a captured, marked animal.
++++
