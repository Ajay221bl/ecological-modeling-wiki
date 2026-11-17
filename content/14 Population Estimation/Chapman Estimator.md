---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "The Chapman estimator is a small-sample correction of Lincoln-Petersen, N̂ = (n₁ + 1)(n₂ + 1) / (m₂ + 1) − 1, which reduces its upward bias and works even when no marked animals are recaptured."
aliases:
  - "Chapman modification"
  - "Bias-corrected Lincoln-Petersen"
  - "N̂ = (n₁+1)(n₂+1)/(m₂+1) − 1"
status: seedling
---

# Chapman Estimator

The **Chapman estimator** is a small-sample correction of the [[Lincoln-Petersen Estimator]], N̂ = (n₁ + 1)(n₂ + 1) / (m₂ + 1) − 1, which reduces its upward [[Bias]] and works even when no marked animals are recaptured. Lincoln-Petersen is biased because m₂ sits in the denominator, so small values of m₂ inflate N̂ a lot, and at m₂ = 0 it is infinite. Adding 1s keeps the estimate finite and nearly unbiased when n₁ + n₂ ≥ N.

For the bobwhite data Chapman gives 308 against Lincoln-Petersen's 311 (Powell and Gale Ch8), a small difference because m₂ = 39 is not small. In a 2,000-run simulation with N = 400 and 80 animals per sample, Lincoln-Petersen averaged 418 and Chapman 400, as the code in the Lincoln-Petersen note shows. Use it whenever recaptures are few ([[Closed Population]]).

It is covered in [[Powell and Gale 2015]] Ch8. Chapman is not a different model: it has the same assumptions and only changes the arithmetic to reduce bias.

## Connections
- **Builds on:** [[Lincoln-Petersen Estimator]], [[Bias]]
- **Leads to:** [[Schnabel Estimator]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

Write the Chapman estimator.
??
N̂ = (n₁ + 1)(n₂ + 1) / (m₂ + 1) − 1.
++++

Why is Lincoln-Petersen biased upward with few recaptures?
??
m₂ is in the denominator, so small values inflate N̂ (infinite at m₂ = 0).
++++
