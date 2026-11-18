---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Removal sampling estimates abundance by catching and removing animals over several quick passes and using how fast the catch declines to estimate how many were there."
aliases:
  - "Removal method"
  - "Removal Estimator"
  - "Depletion sampling"
  - "Zippin method"
  - "Removal sampling (two-pass)"
status: seedling
---

# Removal Sampling

Netting fish out of a garden pond (Powell and Gale Ch17), the first sweep gets many, the second fewer and the third fewer still, and the rate of decline tells you how many are left. **Removal sampling** estimates abundance by catching and removing animals over several quick passes and using how fast the catch declines to estimate how many were there ([[Closed Population]], [[Capture Probability]]). It works like a closed [[Mark-Recapture|mark-recapture]], but "marking" is removal: a caught animal cannot be caught again. It assumes a closed population and constant p across passes.

The two-pass [[Estimator|estimator]] is N̂ = C₁² / (C₁ − C₂), valid only if C₂ < C₁, with p̂ = (C₁ − C₂) / C₁. Regression versions plot catch against cumulative catch and extrapolate to zero. It is common in stream electrofishing, and the same likelihood is used for time-to-detection and some point-count data; in unmarked it is `multinomPois()` with a removal design ([[unmarked Package]]). In the code below catches of 60 then 24 give p̂ = 0.6 and N̂ = 100.

It is covered in [[Powell and Gale 2015]] Ch17 ([[Abundance]]). Removal doesn't need marks: removal replaces marking.

```r
C1 <- 60; C2 <- 24
c(p_hat = (C1 - C2) / C1, N_hat = C1^2 / (C1 - C2))
```

## Connections
- **Builds on:** [[Closed Population]], [[Capture Probability]], [[Mark-Recapture]], [[Estimator]]
- **Leads to:** [[Catch per Unit Effort]], [[Double-observer Methods]], [[unmarked Package]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

Two-pass removal estimator for N?
??
N̂ = C₁² / (C₁ − C₂).
++++

Why does removal sampling fail if C₂ ≥ C₁?
??
No decline means p cannot be estimated (estimate infinite or negative).
++++
