---
type: molecular
tags:
  - survey-design
  - vegetation
  - remote-sensing
  - flashcards/eco/why
description: "Vegetation can be measured by a person at the point (detailed but slow and patchy) or from satellite images (coarse but complete and repeatable); the two often tell different stories, and the project uses both."
aliases:
  - "Field vs Remote Vegetation Measures"
  - "field vegetation"
  - "field vs remote"
  - "remote vegetation measures"
  - "ground vs satellite vegetation"
status: seedling
---

# Field vs Remote Vegetation Measures

> [!summary] In plain words
> A person standing at a point sees fine detail over a few square metres; a satellite sees every 30 m pixel everywhere but only as an average from above. Neither is the truth: they have different errors and look at different areas, so they can disagree without either being broken. The project uses field cover classes for tree and scrub cover and a satellite measure for spatial covariance.

## The question
Why does the habitat file hold two kinds of vegetation measure, and why did the project keep only some of each?

## Built from
- [[Percent Cover]]: the share of ground each plant group covers, the most common vegetation number
- [[Visual Obstruction (Robel Pole)]]: a field measure of grass height and density
- [[Tree Density]]: a field measure of how many trees stand near the point
- [[Remote Sensing]]: measuring land from above
- [[Pixels and Spatial Resolution]]: why a satellite sees a 30 m smudge, not a shrub
- [[Rangeland Analysis Platform]]: the satellite cover product used here

## See it
| | Field | Remote |
|---|---|---|
| Detail | Fine (centimetres) | Coarse (30 m pixels) |
| Coverage | Only where someone stood | Every pixel, everywhere |
| Cost per point | High (time on foot) | Low once set up |
| Past years | Only if measured then | Usually available back decades |
| Errors | Observer judgement, date of visit | Model predictions, cloud, water |

*What to look at:* each row is a trade-off, not a winner.

## The reasoning, step by step
1. **Field measures are detailed but patchy.** *Why:* a person at the point records grass structure, distance to trees, trunk size ([[Diameter at Breast Height]]) and cover within 50 m, but only where and when they stood.
2. **Remote measures are complete but coarse, and are themselves predictions.** *Why:* RAP uses a model trained on field plots to guess cover from the colours a satellite sees, and it was built mainly for western rangelands, so its accuracy in humid, wooded Arkansas deserves caution.
3. **The two work at different [[Spatial Scale|scales]].** A Robel reading describes a few square metres; a spatial covariance window describes up to 65 ha.
4. **So they can disagree without either being wrong.**

**A worked example in numbers.** One made-up point has field tree cover within 50 m of 0% (open grass all around the observer) and remote 3 × 3 spatial covariance (a 90 m square) of −150. Both are right: the observer looked 50 m out, while the window reaches about 64 m from its centre to its corners and caught a tree line.

## So in practice
The habitat file holds both ([[Roberts et al. 2025]]). Field: `ROBEL_AVG` (224 points), `DENS_101` (304), `DBH_AVG` (192), and percent cover within 50 m for 13 classes such as `WD50` woodland, `FO50` forest, `SC50` scrub and `NG50` native warm-season grass. Remote: [[Spatial Covariance]] at three window sizes, missing at 39 points because of the [[Flood Masking|flood mask]]. The detailed field measures were mostly not collected at roadside points ([[Roadside Surveys]]), so they are missing at 112 to 224 of the 416 points, and the final proposal (Oct 12) and Oct 13 scripts use only predictors available at all five properties: tree cover = WD50 + FO50 and scrub cover = SC50 (field), spatial covariance at one window per model (remote), on a complete-case set of 376 points and 1,130 point-visits ([[Complete-Case Analysis]]). Berry's 2024 thesis (Chapter I) compared the two directly and, as summarised, found spatial covariance only weakly related to the field metrics (pseudo-R² mostly below about 0.13); check the thesis before quoting a number. Weak does not mean useless: it may capture landscape pattern that point-level data miss.

## What would go wrong otherwise
- You would treat field data as the truth and satellites as approximations, when both are approximations with different errors and scales.
- You would assume one measure is broken whenever they disagree, though they often measure different areas.
- You would read satellite cover as what a bird sees, though a bird sees 3D structure and a pixel is an average from above.
- You would treat the complete cases as a random subset, though the points dropped for missing field data are mostly roadside ones.

## Connections
- **Related:** [[Percent Cover]], [[Remote Sensing]], [[Spatial Covariance]], [[Predictor Variable]], [[Collinearity]], [[Complete-Case Analysis]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]], [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
- **Go deeper:** [[Berry et al. 2026]], [[Roberts et al. 2025]], [[Dataset]]

## Flashcards

Why might a point with 0% tree cover within 50 m still have strongly negative spatial covariance?
??
The field measure only looks 50 m out, while even the smallest remote window is a 90 m square (and larger windows reach hundreds of metres). A tree line just beyond 50 m enters the window and creates a tree-grass boundary signal.
++++

Why did the project drop the Robel and tree-density field measures?::They were mostly not collected at roadside points, so they are missing at 112 to 224 of the 416 points.
