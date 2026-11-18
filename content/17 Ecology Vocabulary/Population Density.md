---
type: atomic
tags:
  - ecology
  - flashcards/eco/ecology
description: "Population density is the number of individuals per unit area (or volume), such as deer per square kilometre, which lets you compare places of different size."
aliases:
  - "Density (ecology)"
  - "Animal density"
  - "Density (D)"
  - "Individuals per unit area"
status: seedling
---

# Population Density

A big country can have many people but a low density, while a small city-state can have fewer people and be packed. **Population density** is the number of individuals per unit area, or volume, such as deer per square kilometre, which lets you compare places of different size: D = N / A, abundance divided by area ([[Abundance]]). It needs a defined area, which is easy for a plot and hard for an open landscape, where you must ask what area your traps actually sampled.

[[Distance Sampling]] estimates density directly, while [[Mark-Recapture]] gives N, which needs an effective trapping area to become D. Density drives many processes, including competition, disease transmission and density-dependent growth ([[Density Dependence]]). In the code below two sites each hold 120 animals, but one covers 4 km² and the other 30 km², so their densities are 30 and 4 per km².

[[Christensen et al. 2020]] note that host (deer) density was not available as a [[Predictor Variable|predictor]] of haemorrhagic disease, a common gap in disease ecology ([[Powell and Gale 2015]] Ch14 and Ch19). High abundance means high density only for the same area.

```r
N <- c(site_A = 120, site_B = 120); area_km2 <- c(4, 30)
round(N / area_km2, 1)   # same abundance, very different density
```

## Connections
- **Builds on:** [[Abundance]], [[Predictor Variable]]
- **Leads to:** [[Distance Sampling]], [[Carrying Capacity]], [[Density Dependence]]
- **Part of:** [[MOC 19 - Ecology Vocabulary|MOC - Ecology Vocabulary]]

## Flashcards

What is population density?
??
Number of individuals per unit area, D = N / A.
++++
