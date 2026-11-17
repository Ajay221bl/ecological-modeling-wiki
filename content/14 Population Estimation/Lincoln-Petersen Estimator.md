---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Lincoln-Petersen"
  - "Petersen estimator"
  - "Lincoln index"
  - "N̂ = n₁n₂/m₂"
  - "Two-sample mark-recapture"
status: seedling
---

# Lincoln-Petersen Estimator

**In one line:** the Lincoln-Petersen estimator estimates closed population size from two samples as N̂ = n₁n₂ / m₂, using the fraction of marked animals in the second sample.

> [!info] Before this, it helps to know
> [[Closed Population]] · [[Proportion]] · [[Capture History]]

## The everyday picture
Dropping 100 red marbles into a jar of unknown size, shaking, and scooping 100. If 20 of the scoop are red, red is a fifth of the jar, so the jar holds about 500.

## A tiny example
Pollock et al. (1990, in Powell and Gale Ch8): 148 bobwhite banded (n₁), 82 shot in a later hunt (n₂), 39 of them banded (m₂). N̂ = 148 × 82 / 39 ≈ 311 quail.

## Start from zero
1. **Logic:** m₂ / n₂ = n₁ / N, solve for N.
2. **Assumptions:**
   - Closed population.
   - Every animal has the same capture probability on each occasion (p₁ and p₂ may differ).
   - Marking does not change p₂; marks are not lost; all marks are recorded.
   - Each sample is random.
3. **Capture methods can differ:** Lincoln trapped ducks, then used hunter kills as the second sample.
4. **Small samples bias it upward;** the [[Chapman Estimator]] corrects this.
5. **Laplace used the same ratio in 1783** to estimate the population of France from births (Powell and Gale Ch8).

## See it
![[Lincoln-Petersen logic.png|700]]
*What to look at:* twenty marked recaptures in the big population, nearly eighty in the small one.

## In R
```r
n1 <- 148; n2 <- 82; m2 <- 39
c(LP = n1 * n2 / m2, Chapman = (n1 + 1) * (n2 + 1) / (m2 + 1) - 1)
set.seed(7); N <- 400; est <- replicate(2000, { m <- sum(sample(N, 80) <= 80); c(LP = 80 * 80 / m, Chapman = 81 * 81 / (m + 1) - 1) })
round(rowMeans(est))   # true N = 400
```

## In the course
[[Powell and Gale 2015]] Ch8.

## Common confusions
- **"The two samples must use the same method."** Only the equal-catchability assumption matters, not identical methods.

## Explain it back
- Solve the bobwhite example.

*Pass test:* you can compute N̂ and list the assumptions.

## Connections
- **Builds on:** [[Closed Population]], [[Proportion]]
- **Leads to:** [[Chapman Estimator]], [[Schnabel Estimator]], [[Capture Heterogeneity Models]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What is the Lincoln-Petersen estimator?
??
N̂ = n₁n₂ / m₂.
![[Lincoln-Petersen logic.png]]
++++

148 marked, 82 caught later, 39 marked. N̂?
??
About 311.
++++
