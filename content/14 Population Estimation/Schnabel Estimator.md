---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Schnabel method"
  - "Schnabel census"
  - "Multiple-census estimator"
status: seedling
---

# Schnabel Estimator

**In one line:** the Schnabel estimator extends Lincoln-Petersen to many capture occasions, N̂ = Σ(C_t M_t) / Σ R_t, where C_t is the catch, M_t the number marked beforehand and R_t the recaptures on occasion t.

> [!info] Before this, it helps to know
> [[Lincoln-Petersen Estimator]] · [[Summation Notation]]

## A tiny example
Powell and Gale (Ch8) iguana exercise, three days:
| Day | Caught C_t | Recaptures R_t | Marked before M_t |
|---|---|---|---|
| 1 | 155 | 0 | 0 |
| 2 | 175 | 109 | 155 |
| 3 | 131 | 116 | 221 |
N̂ = (0 + 175 × 155 + 131 × 221) / (0 + 109 + 116) = 56076 / 225 ≈ 249.

## Start from zero
1. **Each occasion is a Lincoln-Petersen experiment;** the estimator pools them.
2. **Batch marks are enough:** you only need to know whether a captured animal is marked.
3. **Same assumptions** as Lincoln-Petersen, including equal catchability.
4. **Modern models replaced it** once individual capture histories made it possible to test variation in p.

## In R
```r
C <- c(155, 175, 131); R <- c(0, 109, 116); M <- c(0, 155, 221)
sum(C * M) / sum(R)
```

## In the course
[[Powell and Gale 2015]] Ch8.

## Common confusions
- **"Schnabel needs individual marks."** It works with batch marks.

## Explain it back
- What are C_t, M_t and R_t?

*Pass test:* you can compute a Schnabel estimate.

## Connections
- **Builds on:** [[Lincoln-Petersen Estimator]], [[Summation Notation]]
- **Leads to:** [[Capture Heterogeneity Models]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

Write the Schnabel estimator.
??
N̂ = Σ(C_t M_t) / Σ R_t.
++++
