---
type: source
tags:
  - source
  - reading
aliases:
  - "Happe et al. 2019"
  - "Happe 2020"
  - "Happe et al."
  - "Occupancy Patterns in a Reintroduced Fisher Population during Reestablishment"
status: seedling
---
<!-- gen_sources -->

# Happe et al. 2020

> [!summary] In plain words
> Four years of camera and hair-snare surveys of fishers reintroduced to Washington's Olympic Peninsula, analysed with stacked single-season occupancy models: occupancy was low (0.08 to 0.24), tied to the edge between wilderness and managed forest rather than to the dense mature forest planners assumed, and still shifting; DNA showed at least two new generations.

**Citation:** Happe, P. J., K. J. Jenkins, R. M. McCaffery, J. C. Lewis, K. L. Pilgrim, and M. K. Schwartz. 2020. Occupancy patterns in a reintroduced fisher population during reestablishment. *Journal of Wildlife Management* 84: 344 to 358. https://doi.org/10.1002/jwmg.21788
**Syllabus week:** Reading for the occupancy guest lecture and lab (Nov 3 and 5).

> [!warning] Verify
> The PDF header reads 2020, volume 84(2); the file name says 2019 because the article appeared online in late 2019. The paper does not say whether the distance covariate was standardized, so β = −1.37 is per unit of the covariate as the authors coded it.

## What it's about
90 fishers were translocated from British Columbia in 2008 to 2010. From 2013 to 2016 the authors surveyed 143 hexagons (263 hex-years) with 788 baited camera and hair-snare stations, 3 visits 14 days apart. They modelled detection first with a global occupancy model (date, date², year, bait, percent wilderness), found ĉ = 1.37, ranked 33 occupancy models by QAIC, and used evidence ratios and model averaging. Distance to the wilderness boundary dominated (β = −1.37 ± 0.40, ER = 254); canopy cover, tree size and structural diversity had negligible support. Per-visit p ≈ 0.59. Forest composition was compared among land designations with Kruskal-Wallis tests.

## Key ideas I use
- Reintroduction context → [[Translocation]], [[Reintroduction]]
- Design → [[Spatially Balanced Sampling]], [[Site Independence Assumption]], [[Camera Trap]], [[Hair Snare]], [[Home Range]]
- Model → [[Single-season Occupancy]], [[Stacked Occupancy Design]], [[Observation Covariates]], [[Unexplained Heterogeneity in Detection]]
- Selection and fit → [[Goodness of Fit and c-hat]], [[QAIC]], [[Evidence Ratio]], [[Model Averaging]]
- Findings → [[Edge Effect]], [[Naive Occupancy]]
- Other tests → [[Chi-square Test]], [[Kruskal-Wallis Test]]
- Worked walk-through → [[Fisher Occupancy Case Study]]

## Notes that rely on it (22)
[[Camera Trap]], [[Change Log]], [[Chi-square Test]], [[Course Schedule]], [[Edge Effect]], [[Hair Snare]], [[Home Range]], [[Kruskal-Wallis Test]], [[Local Extinction Probability]], [[Naive Occupancy]], [[Observation Covariates]], [[Occupancy Workflow in R]], [[Reintroduction]], [[Single-season Occupancy]], [[Single-season vs Multi-season Occupancy]], [[Site Covariates]], [[Site Independence Assumption]], [[Spatially Balanced Sampling]], [[Stacked Occupancy Design]], [[Translocation]], [[Unexplained Heterogeneity in Detection]], [[unmarked Package]]

## Connections
- **Part of:** [[MOC 21 - Course Readings|MOC - Course Readings]]
- **Previous:** [[Occupancy Guest Lecture]]
