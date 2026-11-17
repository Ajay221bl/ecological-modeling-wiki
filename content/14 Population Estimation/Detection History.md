---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "A detection history is the string of 1s and 0s recording whether a species was detected at a site on each visit, such as 0101."
aliases:
  - "Encounter history (occupancy)"
  - "Detection/non-detection history"
  - "Detection histories"
status: seedling
---

# Detection History

A loyalty card stamped on the visits when the café had your favourite cake reads 0101 if you went four times and found it on the second and fourth. A **detection history** is the string of 1s and 0s recording whether a species was detected at a site on each visit ([[Binary Variable]], [[Occupancy]]). The data have one row per site and one column per visit. Any history with a 1 means the site is occupied, so its probability starts with ψ: for five visits, 01010 has probability ψ(1 − p₁)p₂(1 − p₃)p₄(1 − p₅).

An all-zero history has two routes, occupied but missed every time or unoccupied, and their probabilities add: 00000 has probability ψ(1 − p₁)(1 − p₂)(1 − p₃)(1 − p₄)(1 − p₅) + (1 − ψ). The likelihood multiplies the probabilities of all sites' histories, and missing visits are coded NA and skipped ([[Likelihood Function]]). In the code below, with ψ = 0.6 and p = 0.3, history 01010 has probability 0.0185 and 00000 has 0.5008, so half the sites would look empty.

Unlike mark-recapture [[Capture History|capture histories]], occupancy histories can be all zeros, because sites, not captured animals, are the units ([[Powell and Gale 2015]] Ch15, [[Single-season Occupancy]]). An all-zero history does not mean absent; it means absent or missed every time.

```r
psi <- 0.6; p <- 0.3
h1 <- psi * (1 - p) * p * (1 - p) * p * (1 - p)        # 01010
h0 <- psi * (1 - p)^5 + (1 - psi)                     # 00000
round(c(h01010 = h1, h00000 = h0), 4)
```

## Connections
- **Builds on:** [[Binary Variable]], [[Occupancy]]
- **Leads to:** [[Capture History]], [[Single-season Occupancy]], [[Likelihood Function]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What is the probability of detection history 00 (two visits)?
??
ψ(1 − p)² + (1 − ψ).
++++

Why can occupancy histories be all zeros but capture histories cannot?
??
Sites are chosen in advance; capture histories start from a captured, marked animal.
++++
