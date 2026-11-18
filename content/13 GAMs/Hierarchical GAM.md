---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "A hierarchical GAM fits smooth relationships that can differ among groups, with the group-level curves treated like random effects so that groups share information about the shape."
aliases:
  - "HGAM"
  - "HGAMs"
  - "Hierarchical generalized additive model"
  - "Hierarchical GAM (HGAM)"
status: seedling
---

# Hierarchical GAM

Picture spring [[Phenology|green-up]] curves for forty sites: they all rise and fall, but each site's curve is a little earlier, later, sharper or flatter. A **hierarchical GAM** (HGAM) fits smooth relationships that can differ among groups, with the group-level curves treated like [[Random Effect|random effects]] so that groups share information about the shape ([[Generalized Additive Model]], [[Mixed Effects Model]]). A [[GLMM]] lets groups differ in intercepts and straight-line slopes ([[Random Slope]]); an HGAM lets them differ in whole curves. The group curves are penalised, pulling them toward the global curve or toward zero, just as random effects are shrunk ([[Shrinkage]]).

[[Pedersen et al. 2019]] define five model types, G, GS, GI, S and I, by whether there is a [[Global Smoother]] and whether the [[Group-level Smoothers]] share wiggliness ([[Shared Wiggliness]]). The figure shows the five panels, with and without a black global curve and with similar or different wiggliness. They are fitted in mgcv with `fs` factor smooths, `by=` smooths and `bs = "re"` terms ([[Factor-smooth Interaction]], [[by= Smooths]], [[Random-effect Smooth]]). In the code below the `CO2` uptake data give AIC 62.6 for model G, one global curve, and −215.4 for model GS, which adds plant-level curves.

[[Lawton et al. 2022]] used HGAMs to model locust outbreaks against [[NDVI]] at nested spatial levels and chose among model types with AIC, BIC and out-of-sample checks; GS and S were usually selected. HGAMs are taught in the HGAM lectures and lab ([[Course Website]]). An HGAM is not a GAM with a [[Random Intercept|random intercept]]: random intercepts shift curves, while HGAMs let their shapes differ.

![[HGAM model types.png|700]]
*What to look at:* the five panels, with and without a black global curve, and with similar or different wiggliness.

```r
library(mgcv); CO2$Plant_uo <- factor(CO2$Plant, ordered = FALSE)
G <- gam(log(uptake) ~ s(log(conc), k = 5), data = CO2, method = "REML")
GS <- gam(log(uptake) ~ s(log(conc), k = 5, m = 2) + s(log(conc), Plant_uo, k = 5, bs = "fs", m = 2), data = CO2, method = "REML"); round(AIC(G, GS), 1)
```

## Connections
- **Builds on:** [[Generalized Additive Model]], [[Mixed Effects Model]], [[Random Slope]], [[Random Effect]], [[GLMM]], [[Random Intercept]]
- **Leads to:** [[Global Smoother]], [[Group-level Smoothers]], [[Shared Wiggliness]], [[Factor-smooth Interaction]], [[Phenology]], [[NDVI]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]], molecular note [[Choosing an HGAM Model Type]], [[HGAM vs GLMM with Random Slopes]]

## Flashcards

What does a hierarchical GAM allow that a GLMM does not?
??
Groups to differ in the whole shape of a smooth relationship, not just intercepts and straight slopes.
![[HGAM model types.png]]
++++
