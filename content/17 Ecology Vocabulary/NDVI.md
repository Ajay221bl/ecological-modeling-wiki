---
type: atomic
tags:
  - ecology
  - flashcards/eco/ecology
aliases:
  - "Normalized Difference Vegetation Index"
  - "Greenness index"
  - "Remote-sensed greenness"
status: seedling
---

# NDVI

**In one line:** NDVI is a satellite index of vegetation greenness, (NIR − Red) / (NIR + Red), ranging from −1 to 1, with higher values meaning more live green vegetation.

> [!info] Before this, it helps to know
> [[Explanatory Variable]]

## Start from zero
1. **Healthy plants reflect near-infrared and absorb red light,** so their NDVI is high.
2. **Values:** water and bare ground near or below 0; dense vegetation 0.6 to 0.9.
3. **Time series of NDVI** show green-up and senescence (phenology).
4. **Lawton et al. (2022)** modelled desert locust and Australian plague locust outbreaks against prior NDVI with hierarchical GAMs at nested spatial levels.
5. **Saturates** in dense forests, so it cannot distinguish high biomass levels.

## In R
```r
nir <- c(0.50, 0.30, 0.05); red <- c(0.08, 0.20, 0.06)
round((nir - red) / (nir + red), 2)   # dense vegetation, sparse, water
```

## In the course
[[Lawton et al. 2022]].

## Common confusions
- **"NDVI measures biomass."** It measures greenness, which saturates at high biomass.

## Explain it back
- Why is NDVI high for healthy vegetation?

*Pass test:* you can compute and interpret NDVI.

## Connections
- **Builds on:** [[Explanatory Variable]]
- **Leads to:** [[Phenology]], [[Hierarchical GAM]]
- **Part of:** [[MOC 19 - Ecology Vocabulary|MOC - Ecology Vocabulary]]

## Flashcards

Formula for NDVI?
??
(NIR − Red) / (NIR + Red).
++++
