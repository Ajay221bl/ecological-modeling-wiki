---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Removal method"
  - "Removal Estimator"
  - "Depletion sampling"
  - "Zippin method"
  - "Removal sampling (two-pass)"
status: seedling
---

# Removal Sampling

**In one line:** removal sampling estimates abundance by catching and removing animals over several quick passes and using how fast the catch declines to estimate how many were there.

> [!info] Before this, it helps to know
> [[Closed Population]] · [[Capture Probability]]

## The everyday picture
Netting fish out of a garden pond (Powell and Gale Ch17). The first sweep gets many, the second fewer, the third fewer still. The rate of decline tells you how many are left.

## A tiny example
Two-pass formula: catches of 60 then 24 give p̂ = (60 − 24)/60 = 0.6 and N̂ = 60² / (60 − 24) = 100.

## Start from zero
1. **Like a closed mark-recapture,** but "marking" is removal: a caught animal cannot be caught again.
2. **Assumes constant p across passes** and a closed population.
3. **Two-pass estimator:** N̂ = C₁² / (C₁ − C₂), valid only if C₂ < C₁.
4. **Regression versions** plot catch against cumulative catch and extrapolate to zero.
5. **Common in stream electrofishing,** and the same likelihood is used for time-to-detection and some point-count data.
6. **unmarked:** `multinomPois()` with a removal design (code norun here).

## In R
```r
C1 <- 60; C2 <- 24
c(p_hat = (C1 - C2) / C1, N_hat = C1^2 / (C1 - C2))
```

## In the course
[[Powell and Gale 2015]] Ch17.

## Common confusions
- **"Removal needs marks."** Removal replaces marking.

## Explain it back
- What does a weak decline between passes imply?

*Pass test:* you can compute a two-pass removal estimate and state its assumptions.

## Connections
- **Builds on:** [[Closed Population]], [[Capture Probability]]
- **Leads to:** [[Catch per Unit Effort]], [[Double-observer Methods]], [[unmarked Package]]
- **Part of:** [[MOC - Population Estimation]]

## Flashcards

Two-pass removal estimator for N?
??
N̂ = C₁² / (C₁ − C₂).
++++

Why does removal sampling fail if C₂ ≥ C₁?
??
No decline means p cannot be estimated (estimate infinite or negative).
++++
