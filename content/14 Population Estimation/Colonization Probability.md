---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Colonization probability γ (gamma) is the chance that a site unoccupied in one season becomes occupied by the next season."
aliases:
  - "Colonization (occupancy)"
  - "gamma (occupancy)"
  - "γ (colonization)"
  - "Colonisation probability"
status: seedling
---

# Colonization Probability

Think of empty shop units on a high street: each year some of them get a new tenant. The share of last year's empty units that are occupied this year is a colonization rate. **Colonization probability** γ (gamma) is the chance that a site unoccupied in one season becomes occupied by the next season, the "0 to 1" move in the guest lecture ([[Multi-season Occupancy]], [[Conditional Probability]]). It is conditional: it is only about sites that were empty, so it is γ = Pr(zₜ₊₁ = 1 | zₜ = 0), where z is the true, hidden state ([[Latent Variable]]).

It is a parameter of the dynamic occupancy model, which keeps closure within each season and lets the state change between seasons ([[Closure Assumption]], [[Robust Design]]). Next season's occupancy is the occupied sites that stay plus the empty sites that get colonized: ψₜ₊₁ = ψₜ(1 − ε) + (1 − ψₜ)γ, with ε the [[Local Extinction Probability]]. In the code below, 2,000 sites start with true occupancy 0.30 and γ = 0.20; counting the true empty sites that became occupied gives γ̂ = 0.207, and the formula predicts next season's occupancy of 0.366 against the simulated 0.368. A real study never sees z, so the model estimates γ from [[Detection History|detection histories]] in both seasons, using the within-season visits to separate "newly colonized" from "missed last year".

[[Predictor Variable|Covariates]] on γ ask what makes empty sites attractive or reachable, such as distance to occupied sites in metapopulation and invasion studies ([[Metapopulation]]). The guest lecture notes that γ, ε and p can differ every season or be held equal, with time structures compared by [[AIC]] ([[Occupancy Guest Lecture]]). Colonization is not a rise in naive occupancy: detection changes between years can mimic it, which is why the model needs [[Repeat-Visit Design|repeat visits]] within each season ([[Naive Occupancy]]).

```r
set.seed(8); S <- 2000; z1 <- rbinom(S, 1, 0.3); gam <- 0.2; eps <- 0.25
z2 <- ifelse(z1 == 1, rbinom(S, 1, 1 - eps), rbinom(S, 1, gam))
round(c(gamma_hat = sum(z1 == 0 & z2 == 1) / sum(z1 == 0), psi2 = mean(z2), psi2_formula = mean(z1) * (1 - eps) + (1 - mean(z1)) * gam), 3)
```

## Connections
- **Builds on:** [[Multi-season Occupancy]], [[Conditional Probability]], [[Detection History]], [[Predictor Variable]]
- **Leads to:** [[Local Extinction Probability]], [[Metapopulation]], [[Repeat-Visit Design]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Single-season vs Multi-season Occupancy]]

## Flashcards

Define colonization probability γ.
??
Pr(site occupied next season | unoccupied this season), the 0 to 1 move.
++++

Write next season's occupancy using γ and ε.
??
ψₜ₊₁ = ψₜ(1 − ε) + (1 − ψₜ)γ.
++++
