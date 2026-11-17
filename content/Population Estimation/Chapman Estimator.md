---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Chapman modification"
  - "Bias-corrected Lincoln-Petersen"
  - "N̂ = (n₁+1)(n₂+1)/(m₂+1) − 1"
status: seedling
---

# Chapman Estimator

**In one line:** the Chapman estimator is a small-sample correction of Lincoln-Petersen, N̂ = (n₁ + 1)(n₂ + 1) / (m₂ + 1) − 1, which reduces its upward bias and works even when no marked animals are recaptured.

> [!info] Before this, it helps to know
> [[Lincoln-Petersen Estimator]] · [[Bias]]

## A tiny example
Bobwhite data: Chapman gives 308 against Lincoln-Petersen's 311 (Powell and Gale Ch8), a small difference because m₂ = 39 is not small. In a 2000-run simulation with N = 400 and 80 animals per sample, Lincoln-Petersen averaged 418 and Chapman 400.

## Start from zero
1. **Why Lincoln-Petersen is biased:** m₂ sits in the denominator, and small m₂ values inflate N̂ a lot; at m₂ = 0 it is infinite.
2. **Adding 1s** keeps the estimate finite and nearly unbiased when n₁ + n₂ ≥ N.
3. **Use it whenever recaptures are few.**

## In the course
[[Powell and Gale 2015]] Ch8.

## Common confusions
- **"Chapman is a different model."** Same assumptions; it only changes the arithmetic to reduce bias.

## Explain it back
- What happens to Lincoln-Petersen when m₂ = 0?

*Pass test:* you can apply the Chapman formula and say when it matters.

## Connections
- **Builds on:** [[Lincoln-Petersen Estimator]], [[Bias]]
- **Leads to:** [[Schnabel Estimator]]
- **Part of:** [[MOC - Population Estimation]]

## Flashcards

Write the Chapman estimator.
??
N̂ = (n₁ + 1)(n₂ + 1) / (m₂ + 1) − 1.
++++

Why is Lincoln-Petersen biased upward with few recaptures?
??
m₂ is in the denominator, so small values inflate N̂ (infinite at m₂ = 0).
++++
