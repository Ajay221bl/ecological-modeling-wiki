---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "The Lincoln-Petersen estimator estimates closed population size from two samples as N̂ = n₁n₂ / m₂, using the fraction of marked animals in the second sample."
aliases:
  - "Lincoln-Petersen"
  - "Petersen estimator"
  - "Lincoln index"
  - "N̂ = n₁n₂/m₂"
  - "Two-sample mark-recapture"
status: seedling
---

# Lincoln-Petersen Estimator

Drop 100 red marbles into a jar of unknown size, shake, and scoop 100: if 20 of the scoop are red, red is a fifth of the jar, so the jar holds about 500. The **Lincoln-Petersen estimator** estimates closed population size from two samples as N̂ = n₁n₂ / m₂, using the fraction of marked animals in the second sample ([[Closed Population]], [[Proportion]], [[Capture History]]). The logic is m₂ / n₂ = n₁ / N, solved for N. Pollock et al. (1990, in Powell and Gale Ch8) banded 148 bobwhite (n₁); 82 were shot in a later hunt (n₂), 39 of them banded (m₂), so N̂ = 148 × 82 / 39 ≈ 311 quail.

Its assumptions are a closed population; the same capture probability for every animal on each occasion, though p₁ and p₂ may differ; marking does not change p₂, marks are not lost and all marks are recorded; and each sample is random ([[Behavioral Response to Capture]], [[Capture Heterogeneity Models]]). The capture methods can differ: Lincoln trapped ducks, then used hunter kills as the second sample. Small samples bias it upward, which the [[Chapman Estimator]] corrects. The figure shows twenty marked recaptures in a big population and nearly eighty in a small one. In the code below the bobwhite data give 311 by Lincoln-Petersen and 308 by Chapman, and in 2,000 simulated studies of a population of 400 with 80 animals per sample, Lincoln-Petersen averages 418 and Chapman 400.

Laplace used the same ratio in 1783 to estimate the population of France from births (Powell and Gale Ch8) ([[Powell and Gale 2015]] Ch8, [[Schnabel Estimator]]). The two samples need not use the same method; only the equal-catchability assumption matters.

![[Lincoln-Petersen logic.png|700]]
*What to look at:* twenty marked recaptures in the big population, nearly eighty in the small one.

```r
n1 <- 148; n2 <- 82; m2 <- 39
c(LP = n1 * n2 / m2, Chapman = (n1 + 1) * (n2 + 1) / (m2 + 1) - 1)
set.seed(7); N <- 400; est <- replicate(2000, { m <- sum(sample(N, 80) <= 80); c(LP = 80 * 80 / m, Chapman = 81 * 81 / (m + 1) - 1) })
round(rowMeans(est))   # true N = 400
```

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
