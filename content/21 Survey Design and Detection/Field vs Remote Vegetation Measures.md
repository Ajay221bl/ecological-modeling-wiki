---
type: atomic
tags:
  - survey-design
  - vegetation
  - remote-sensing
  - flashcards
aliases:
  - "field vegetation"
  - "field vs remote"
  - "remote vegetation measures"
  - "ground vs satellite vegetation"
status: seedling
---

# Field vs Remote Vegetation Measures
**In one line:** Vegetation can be measured by a person standing at the point (detailed but slow and patchy) or from satellite images (coarse but complete and repeatable), and the two often tell different stories.

> [!info] Before this, it helps to know
> [[Remote Sensing]] (seeing land from above) · [[Percent Cover]] (the most common vegetation number)

## Start from zero
Two ways to describe a backyard. You can kneel in it, measure grass height, count shrubs, and look under the hedge. Or you can look at it on an online map. Kneeling shows you a lot about a small area. The map shows the whole neighbourhood, but a shrub is a green smudge and you cannot see what is under a tree.

Ecologists face the same choice.
- **Field measures:** a person at the point records things like grass structure ([[Visual Obstruction (Robel Pole)]]), distance to trees and trunk size ([[Tree Density and DBH]]), and cover types within 50 m.
- **Remote measures:** a satellite pixel, here 30 m x 30 m, gets an estimated percent cover of grass, trees and other plant groups ([[Rangeland Analysis Platform]], [[Pixels and Spatial Resolution]]).

## Why it exists
Neither is simply "better". They trade off:

| | Field | Remote |
|---|---|---|
| Detail | Fine (centimetres) | Coarse (30 m pixels) |
| Coverage | Only where someone stood | Every pixel, everywhere |
| Cost per point | High (time on foot) | Low once set up |
| Past years | Only if measured then | Usually available back decades |
| Errors | Observer judgement, date of visit | Model predictions, cloud, water |

Remote products such as RAP are themselves **predictions**: a model trained on field plots guesses cover from the colours a satellite sees. RAP was developed mainly for western rangelands, so its accuracy in humid, wooded Arkansas deserves some caution (roughly: check this before leaning on small differences in cover).

The two kinds of measure also work at different [[Spatial Scale (Grain and Extent)|scales]]. A Robel reading describes a few square metres. A spatial covariance window describes up to 65 ha. They can disagree because they are looking at different things, not because one is broken.

## A tiny example
One made-up point, described both ways:

| Measure | Value | What it "sees" |
|---|---|---|
| Field Tree50 (woodland + forest within 50 m) | 0% | Open grass all around the observer |
| Remote 3x3 spatial covariance (90 m square) | -150 | A tree line just inside the window |

Both are right. The observer looked 50 m out; the window reached about 64 m from the centre to its corners and caught the tree line.

## In my project
The habitat file holds both kinds ([[Roberts et al. 2025]]):
- **Field:** `ROBEL_AVG` (224 points), `DENS_101` (304), `DBH_AVG` (192), and percent cover within 50 m for 13 classes, for example `WD50` woodland, `FO50` forest, `SC50` scrub, `NG50` native warm-season grass, `SO50` soybean.
- **Remote:** spatial covariance between grass and tree cover at three window sizes, missing at 39 points because of the [[Flood Masking|flood mask]].

The detailed field measures were mostly **not** collected at roadside points, so they are missing at 112 to 224 of the 416 points ([[Roadside Surveys]]). The final proposal (Oct 12) and the Oct 13 scripts therefore leave them out and uses only predictors available at all five properties:
- **tree cover = WD50 + FO50** and **scrub cover = SC50** (field cover classes),
- [[Spatial Covariance]] at one window size per model (remote),
- a complete-case set of **376 points and 1,130 point-visits**, the points left after dropping the 39 flood-masked ones and any with a missing cover value ([[Complete-Case Analysis]]).

Berry's 2024 thesis (University of Arkansas), Chapter I, compared the two kinds of measure directly.

> [!warning] Verify
> As summarised, Chapter I found spatial covariance was only **weakly** related to the field metrics (reported pseudo-R² values mostly below about 0.13). Check the thesis itself before quoting a number. "Weak" does not mean spatial covariance is useless; it may capture landscape pattern that point-level field data miss.

## Common confusions
- **"Field data are the truth; satellites are approximations."** Both are approximations with different errors and scales.
- **"If they disagree, one is wrong."** They often measure different areas and different properties.
- **"Satellite cover at a point is what a bird sees."** A bird sees the 3D structure under and around it; a pixel is an average from above.
- **"Complete cases are a random subset."** Points dropped for NAs are mostly roadside ones, so the subset differs systematically.

## Connections
- **Builds on:** [[Remote Sensing]], [[Percent Cover]], [[Visual Obstruction (Robel Pole)]], [[Tree Density and DBH]]
- **Leads to:** [[Spatial Covariance]], [[Predictor Variable]], [[Collinearity]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]], [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
- **Go deeper:** [[Berry et al. 2026]], [[Roberts et al. 2025]]

> [!question]- Check yourself
> Why might a point with 0% tree cover within 50 m still have strongly negative spatial covariance?
> ?
> The field measure only looks 50 m out, while even the smallest remote window is a 90 m square (and larger windows reach hundreds of metres). A tree line just beyond 50 m enters the window and creates a tree-grass boundary signal.
