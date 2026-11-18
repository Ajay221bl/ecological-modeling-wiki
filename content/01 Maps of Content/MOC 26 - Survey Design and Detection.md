---
type: moc
tags:
  - moc
  - survey-design
aliases:
  - "MOC - Survey Design and Detection"
  - "Survey Design"
  - "Detection"
status: seedling
---

# MOC 26 - Survey Design and Detection

> [!tip] New to this?
> Every note here starts from zero, but if a word still feels unfamiliar, the [[MOC 01 - Basics from Zero|MOC - Basics from Zero]] notes explain the groundwork (averages, spread, probability, logarithms, lines).

My data come from point counts: an observer stands at a point, records every bird species seen or heard, and notes how far away each was. A species that is present can still be missed, so the number of species I count is not the true number present. This cluster explains how the data were collected and what that means for the analysis.

## 1. How the data were collected
- [[Point Count Survey]]: the field method
- [[Repeat-Visit Design]]: each point visited up to three times per season
- [[Distance Bands]]: the Dist_50, Dist_100 and Dist_400 columns
- [[Fly-over Detections]]: birds passing overhead, the FlyOver column
- [[Four-Letter Species Codes]]: DICK, NOBO and the stray-space problem
- [[Systematic Grid Sampling]]: points 400 m apart on a randomly anchored grid
- [[Roadside Surveys]]: the extra points along roads, and why they differ
- [[Breeding Bird Survey]]: the national survey whose protocol (wind and sky codes) these counts follow

## 1b. How the habitat was measured on the ground
- [[Visual Obstruction (Robel Pole)]]: how tall and dense the grass is
- [[Tree Density and DBH]]: how close and how big the trees are
- [[Field vs Remote Vegetation Measures]]: ground measures vs satellite measures, and why the habitat file has so many NAs

## 2. Detection
- [[Detection Probability]]: the chance a present species is recorded
- [[Imperfect Detection]]: why observed counts underestimate the truth
- [[Detection Covariates]]: Wind and Sky, which change how easy birds are to detect
- [[Observer Effects]]: different people detect different amounts

## 3. What to estimate
- [[Occupancy vs Abundance vs Richness]]: three different questions
- [[Occupancy Model]]: separating "present" from "detected" using repeat visits
- [[Multi-species Occupancy Model]]: the model the original study used for all six focal species at once
- [[Ecological Similarity Assumption]]: why the six species had to be alike

## Related molecular notes
- [[Why include wind and sky]]
- [[Why exclude fly-overs]]
- [[Why observed richness is not true richness]]
- [[How the project could grow into Bayesian and occupancy models]]

## Key readings
[[Powell and Gale 2015 Ch1]] · [[Powell and Gale 2015 Ch2]] · [[Roberts et al. 2025]] · [[Berry et al. 2026]]

## Related MOCs
[[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]] · [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]] · [[MOC 23 - Grassland Bird Richness Project|MOC - Grassland Bird Richness Project]]
