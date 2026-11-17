---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "The Schnabel estimator extends Lincoln-Petersen to many capture occasions, N̂ = Σ(C_t M_t) / Σ R_t, where C_t is the catch, M_t the number marked beforehand and R_t the recaptures on occasion t."
aliases:
  - "Schnabel method"
  - "Schnabel census"
  - "Multiple-census estimator"
status: seedling
---

# Schnabel Estimator

The **Schnabel estimator** extends Lincoln-Petersen to many capture occasions, N̂ = Σ(C_t M_t) / Σ R_t, where C_t is the catch, M_t the number marked beforehand and R_t the recaptures on occasion t ([[Lincoln-Petersen Estimator]], [[Summation Notation]]). Each occasion is a Lincoln-Petersen experiment, and the estimator pools them. Batch marks are enough, because you only need to know whether a captured animal is marked ([[Mark-Recapture]]).

| Day | Caught C_t | Recaptures R_t | Marked before M_t |
|---|---|---|---|
| 1 | 155 | 0 | 0 |
| 2 | 175 | 109 | 155 |
| 3 | 131 | 116 | 221 |

In Powell and Gale's (Ch8) three-day iguana exercise above, N̂ = (0 + 175 × 155 + 131 × 221) / (0 + 109 + 116) = 56,076 / 225 ≈ 249, which the code below reproduces. It has the same assumptions as Lincoln-Petersen, including equal catchability ([[Closed Population]]).

Modern models replaced it once individual capture histories made it possible to test variation in p ([[Capture Heterogeneity Models]], [[Powell and Gale 2015]] Ch8). Schnabel does not need individual marks; it works with batch marks.

```r
C <- c(155, 175, 131); R <- c(0, 109, 116); M <- c(0, 155, 221)
sum(C * M) / sum(R)
```

## Connections
- **Builds on:** [[Lincoln-Petersen Estimator]], [[Summation Notation]]
- **Leads to:** [[Capture Heterogeneity Models]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

Write the Schnabel estimator.
??
N̂ = Σ(C_t M_t) / Σ R_t.
++++
