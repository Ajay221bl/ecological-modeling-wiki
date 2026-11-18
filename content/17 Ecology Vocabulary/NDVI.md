---
type: atomic
tags:
  - ecology
  - flashcards/eco/ecology
description: "NDVI is a satellite index of vegetation greenness, (NIR − Red) / (NIR + Red), ranging from −1 to 1, with higher values meaning more live green vegetation."
aliases:
  - "Normalized Difference Vegetation Index"
  - "Greenness index"
  - "Remote-sensed greenness"
status: seedling
---

# NDVI

**NDVI**, the Normalized Difference Vegetation Index, is a satellite index of vegetation greenness, (NIR − Red) / (NIR + Red), ranging from −1 to 1, with higher values meaning more live green vegetation ([[Predictor Variable|Explanatory Variable]]). Healthy plants reflect near-infrared and absorb red light, so their NDVI is high: water and bare ground sit near or below 0, and dense vegetation at 0.6 to 0.9. In the code below reflectances for dense vegetation, sparse vegetation and water give NDVI values of 0.72, 0.20 and −0.09.

[[Time Series|Time series]] of NDVI show green-up and senescence, which is plant [[Phenology]]. NDVI saturates in dense forests, so it cannot distinguish high biomass levels. [[Lawton et al. 2022]] modelled desert locust and Australian plague locust outbreaks against prior NDVI with hierarchical [[Generalized Additive Model|GAMs]] at nested spatial levels ([[Hierarchical GAM]]).

NDVI does not measure biomass; it measures greenness, which saturates at high biomass.

```r
nir <- c(0.50, 0.30, 0.05); red <- c(0.08, 0.20, 0.06)
round((nir - red) / (nir + red), 2)   # dense vegetation, sparse, water
```

## Connections
- **Builds on:** [[Predictor Variable|Explanatory Variable]], [[Time Series]], [[Generalized Additive Model]]
- **Leads to:** [[Phenology]], [[Hierarchical GAM]]
- **Part of:** [[MOC 19 - Ecology Vocabulary|MOC - Ecology Vocabulary]]

## Flashcards

Formula for NDVI?
??
(NIR − Red) / (NIR + Red).
++++
