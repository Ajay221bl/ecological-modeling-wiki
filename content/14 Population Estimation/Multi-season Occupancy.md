---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Dynamic occupancy"
  - "Colonization and extinction"
  - "Colonization"
  - "Local extinction"
  - "gamma and epsilon"
  - "colext()"
  - "Multiple-season occupancy"
status: seedling
---

# Multi-season Occupancy

**In one line:** a multi-season occupancy model follows sites over several closed seasons and estimates how occupancy changes through colonization γ (an empty site becomes occupied) and local extinction ε (an occupied site becomes empty).

> [!info] Before this, it helps to know
> [[Single-season Occupancy]] · [[Robust Design]] · [[Closure Assumption]]

## The everyday picture
A street of shops over several years. Some empty units get tenants (colonization), some shops close (extinction). Each year you walk past a few times to check which are open.

## Start from zero
1. **Within each season:** closure and repeat visits, as in the single-season model.
2. **Between seasons the state can change:**
   - ψ_{t+1} = ψ_t (1 − ε) + (1 − ψ_t) γ.
3. **Parameters:** initial ψ₁, colonization γ, extinction ε, detection p. All can take covariates.
4. **Structure mirrors the robust design** for mark-recapture (MacKenzie et al. 2003, cited in Powell and Gale Ch15).
5. **Uses:** range expansion of invasive species, disease spread, metapopulation turnover, climate shifts.
6. **unmarked:** `colext()`.

## In R
```r
psi <- numeric(10); psi[1] <- 0.2; gam <- 0.15; eps <- 0.1
for (t in 1:9) psi[t + 1] <- psi[t] * (1 - eps) + (1 - psi[t]) * gam
round(psi, 3); round(gam / (gam + eps), 2)  # equilibrium occupancy
```

## In the course
[[Powell and Gale 2015]] Ch15 and Ch13.

## Common confusions
- **"Change in naive occupancy between years estimates colonization."** Changes in detection can mimic colonization or extinction.

## Explain it back
- Write occupancy next season in terms of γ and ε.

*Pass test:* you can explain γ and ε and project occupancy.

## Connections
- **Builds on:** [[Single-season Occupancy]], [[Robust Design]]
- **Leads to:** [[Primary and Secondary Sampling Periods]], [[unmarked Package]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What are γ and ε in a dynamic occupancy model?
??
Colonization (empty site becomes occupied) and local extinction (occupied site becomes empty).
++++

What is the equilibrium occupancy with constant γ and ε?
??
γ / (γ + ε).
++++
