---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "A multi-season occupancy model follows sites over several closed seasons and estimates how occupancy changes through colonization γ (an empty site becomes occupied) and local extinction ε (an occupied site becomes empty)."
aliases:
  - "Dynamic occupancy"
  - "Colonization and extinction"
  - "Multi-season single-species occupancy"
  - "colext()"
  - "Multiple-season occupancy"
status: seedling
---

# Multi-season Occupancy

Picture a street of shops over several years: some empty units get tenants and some shops close, and each year you walk past a few times to check which are open. A **multi-season occupancy model** follows sites over several closed seasons and estimates how occupancy changes through colonization γ, an empty site becoming occupied, and local extinction ε, an occupied site becoming empty ([[Single-season Occupancy]], [[Closure Assumption]]). Within each season there is closure and [[Repeat-Visit Design|repeat visits]], as in the single-season model; between seasons the state can change, so ψₜ₊₁ = ψₜ(1 − ε) + (1 − ψₜ)γ.

Its parameters are the initial ψ₁, γ, ε and detection p, and all can take [[Predictor Variable|covariates]]. Its structure mirrors the [[Robust Design]] for [[Mark-Recapture|mark-recapture]] (MacKenzie et al. 2003, cited in Powell and Gale Ch15), and in unmarked it is `colext()` ([[unmarked Package]]). In the code below, starting from ψ = 0.2 with γ = 0.15 and ε = 0.1, occupancy climbs to 0.57 after ten seasons, approaching the equilibrium γ / (γ + ε) = 0.6.

Uses include range expansion of [[Invasive Species|invasive species]], disease spread, metapopulation turnover and climate shifts ([[Powell and Gale 2015]] Ch15 and Ch13). The guest lecture adds that the parameters can be fully time-varying, with different p, γ and ε each season, or the time structure can be chosen by [[Model Selection|model selection]] with AIC: all periods equal, or periods that differ by an "event" such as a fire, a timber harvest or a regulation change ([[Colonization Probability]], [[Local Extinction Probability]], [[Occupancy Guest Lecture]]). When detections are too few for γ and ε, a [[Stacked Occupancy Design]] is the fallback. A change in [[Naive Occupancy]] between years does not estimate colonization, because changes in detection can mimic colonization or extinction.

```r
psi <- numeric(10); psi[1] <- 0.2; gam <- 0.15; eps <- 0.1
for (t in 1:9) psi[t + 1] <- psi[t] * (1 - eps) + (1 - psi[t]) * gam
round(psi, 3); round(gam / (gam + eps), 2)  # equilibrium occupancy
```

## Connections
- **Builds on:** [[Single-season Occupancy]], [[Robust Design]], [[Predictor Variable]], [[Mark-Recapture]], [[Model Selection]]
- **Leads to:** [[Colonization Probability]], [[Local Extinction Probability]], [[Metapopulation]], [[Primary and Secondary Sampling Periods]], [[unmarked Package]], [[Repeat-Visit Design]], [[Invasive Species]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Single-season vs Multi-season Occupancy]]

## Flashcards

What are γ and ε in a dynamic occupancy model?
??
Colonization (empty site becomes occupied) and local extinction (occupied site becomes empty).
++++

What is the equilibrium occupancy with constant γ and ε?
??
γ / (γ + ε).
++++
