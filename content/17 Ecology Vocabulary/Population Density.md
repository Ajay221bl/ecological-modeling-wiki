---
type: atomic
tags:
  - ecology
  - flashcards/eco/ecology
aliases:
  - "Density (ecology)"
  - "Animal density"
  - "Density (D)"
  - "Individuals per unit area"
status: seedling
---

# Population Density

**In one line:** population density is the number of individuals per unit area (or volume), such as deer per square kilometre, which lets you compare places of different size.

> [!info] Before this, it helps to know
> [[Abundance]]

## The everyday picture
People per square kilometre. A big country can have many people but a low density; a small city-state can have fewer people but be packed.

## Start from zero
1. **D = N / A.** Abundance divided by area.
2. **Needs a defined area,** which is easy for a plot and hard for an open landscape (what area did your traps sample?).
3. **Distance sampling estimates density directly;** mark-recapture gives N, which needs an effective trapping area to become D.
4. **Density drives many processes:** competition, disease transmission, density-dependent growth.
5. **Christensen et al. (2020) note** that host (deer) density was not available as a predictor of hemorrhagic disease, a common gap in disease ecology.

## In R
```r
N <- c(site_A = 120, site_B = 120); area_km2 <- c(4, 30)
round(N / area_km2, 1)   # same abundance, very different density
```

## In the course
[[Powell and Gale 2015]] Ch14 and Ch19. [[Christensen et al. 2020]].

## Common confusions
- **"High abundance means high density."** Only for the same area.

## Explain it back
- How do you turn a mark-recapture N̂ into density?

*Pass test:* you can compute density and explain why it needs an area.

## Connections
- **Builds on:** [[Abundance]]
- **Leads to:** [[Distance Sampling]], [[Carrying Capacity]], [[Density Dependence]]
- **Part of:** [[MOC 19 - Ecology Vocabulary|MOC - Ecology Vocabulary]]

## Flashcards

What is population density?
??
Number of individuals per unit area, D = N / A.
++++
