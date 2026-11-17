---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "HGAM"
  - "HGAMs"
  - "Hierarchical generalized additive model"
  - "Hierarchical GAM (HGAM)"
status: seedling
---

# Hierarchical GAM

**In one line:** a hierarchical GAM fits smooth relationships that can differ among groups, with the group-level curves treated like random effects so that groups share information about the shape.

> [!info] Before this, it helps to know
> [[Generalized Additive Model]] · [[Mixed Effects Model]] · [[Random Slope]] (the linear analogue)

## The everyday picture
Spring green-up curves for forty sites. They all rise and fall, but each site's curve is a little earlier, later, sharper or flatter. An HGAM estimates the shared curve and how much each site departs from it.

## Start from zero
1. **GLMM:** groups differ in intercepts and straight-line slopes.
2. **HGAM:** groups differ in whole curves.
3. **Group curves are penalised,** pulling them toward the global curve (or toward zero), just as random effects are shrunk.
4. **Pedersen et al. (2019) define five model types** (G, GS, GI, S, I) by whether there is a global smooth and whether group smooths share wiggliness.
5. **Fitted in mgcv** with `fs` factor smooths, `by=` smooths and `bs = "re"` terms.
6. **Lawton et al. (2022)** used HGAMs to model locust outbreaks against NDVI at nested spatial levels and chose among model types with AIC, BIC and out-of-sample checks; GS and S were usually selected.

## See it
![[HGAM model types.png|700]]
*What to look at:* the five panels, with and without a black global curve, and with similar or different wiggliness.

## In R
```r
library(mgcv); CO2$Plant_uo <- factor(CO2$Plant, ordered = FALSE)
G <- gam(log(uptake) ~ s(log(conc), k = 5), data = CO2, method = "REML")
GS <- gam(log(uptake) ~ s(log(conc), k = 5, m = 2) + s(log(conc), Plant_uo, k = 5, bs = "fs", m = 2), data = CO2, method = "REML"); round(AIC(G, GS), 1)
```

## In the course
HGAM lectures and lab ([[Course Website]]). [[Pedersen et al. 2019]]. [[Lawton et al. 2022]].

## Common confusions
- **"An HGAM is a GAM with a random intercept."** Random intercepts shift curves; HGAMs let shapes differ.

## Explain it back
- How do HGAMs extend GLMMs?

*Pass test:* you can explain what an HGAM estimates.

## Connections
- **Builds on:** [[Generalized Additive Model]], [[Mixed Effects Model]], [[Random Slope]]
- **Leads to:** [[Global Smoother]], [[Group-level Smoothers]], [[Shared Wiggliness]], [[Factor-smooth Interaction]]
- **Part of:** [[MOC - GAMs]], molecular note [[Choosing an HGAM Model Type]], [[HGAM vs GLMM with Random Slopes]]

## Flashcards

What does a hierarchical GAM allow that a GLMM does not?
??
Groups to differ in the whole shape of a smooth relationship, not just intercepts and straight slopes.
![[HGAM model types.png]]
++++
