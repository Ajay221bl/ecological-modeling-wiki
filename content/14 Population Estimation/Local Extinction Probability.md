---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Local extinction probability ε (epsilon) is the chance that a site occupied in one season is no longer occupied by the next season."
aliases:
  - "Local extinction (occupancy)"
  - "epsilon (occupancy)"
  - "ε (extinction)"
  - "Extinction probability (occupancy)"
status: seedling
---

# Local Extinction Probability

Back on the high street: of the shops trading this year, some will have closed by next year. That share is a [[Closure Assumption|closure]] rate, and it says nothing about the shops elsewhere. **Local extinction probability** ε ([[Error Term|epsilon]]) is the chance that a site occupied in one season is no longer occupied by the next season, the "1 to 0" move in the guest lecture ([[Multi-season Occupancy]], [[Conditional Probability]]). "Local" matters: the species disappears from this site, not from the planet. Written out, ε = Pr(zₜ₊₁ = 0 | zₜ = 1), so its complement 1 − ε is site persistence.

Together with [[Colonization Probability]] it sets how occupancy moves: ψₜ₊₁ = ψₜ(1 − ε) + (1 − ψₜ)γ. If γ and ε stay constant, occupancy settles at γ / (γ + ε) whatever it started at, as the figure shows for γ = 0.15 and ε = 0.10, where occupancy climbs from 0.2 towards 0.6. In the code below, 2,000 simulated sites with true ε = 0.25 give ε̂ = 0.257 from the true states.

[[Predictor Variable|Covariates]] on ε ask what makes sites lose a species: fire, timber harvest or a regulation change, the "events" the guest lecture suggests as time structures ([[Occupancy Guest Lecture]]). [[Happe et al. 2020]] could not estimate ε for fishers because they had too few detections, and used a [[Stacked Occupancy Design]] instead. Local extinction is not "detected last year, not this year": a site can look empty because of a miss, which the model handles through p.

![[Dynamic occupancy trajectory.png|700]]
*What to look at:* any starting ψ heads to the same level, γ / (γ + ε), set by the balance of colonization and extinction.

```r
set.seed(8); S <- 2000; z1 <- rbinom(S, 1, 0.3); gam <- 0.2; eps <- 0.25
z2 <- ifelse(z1 == 1, rbinom(S, 1, 1 - eps), rbinom(S, 1, gam))
round(c(eps_hat = sum(z1 == 1 & z2 == 0) / sum(z1 == 1), psi2_sim = mean(z2), psi2_formula = mean(z1) * (1 - eps) + (1 - mean(z1)) * gam), 3)
```

## Connections
- **Builds on:** [[Multi-season Occupancy]], [[Conditional Probability]], [[Closure Assumption]], [[Error Term]], [[Predictor Variable]]
- **Leads to:** [[Colonization Probability]], [[Stacked Occupancy Design]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Single-season vs Multi-season Occupancy]]

## Flashcards

Define local extinction probability ε.
??
Pr(site unoccupied next season | occupied this season), the 1 to 0 move.
![[Dynamic occupancy trajectory.png]]
++++

What is long-run occupancy if γ and ε are constant?
??
γ / (γ + ε).
++++
