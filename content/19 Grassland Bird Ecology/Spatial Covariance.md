---
type: atomic
tags:
  - grassland-bird-ecology
  - landscape-ecology
  - remote-sensing
  - flashcards
aliases:
  - "spatial covariance"
  - "spatial covariance metric"
status: seedling
---

# Spatial Covariance
**In one line:** Spatial covariance is a number computed from satellite maps. Inside a small square of land, it says whether grass and trees are separated (a boundary), mixed together, or not related at all (for example, all grass).

> [!info] Before this, it helps to know
> - [[Average (Mean)]]: covariance is built from distances to the average.
> - [[Percent Cover]]: the two things being compared are percent grass cover and percent tree cover.
> - [[Pixels and Spatial Resolution]]: the square is made of 30 m satellite pixels.

> [!note] Corrected Oct 12, 2026
> An earlier version of this note described spatial covariance as grass cover compared with grass cover next door. That was wrong for this study. The data release metadata ([[Roberts et al. 2025]]) shows that it compares **two different plant groups, grass and trees, inside one window**. The note below follows the metadata.

## Start from zero
Look down at a landscape from a plane and lay a small square over it, 90 m on a side. Split the square into a 3 by 3 grid of 9 cells, each 30 m wide. For every cell, a satellite product estimates two numbers: how much of the cell is covered by grass and wildflowers, and how much by trees ([[Rangeland Analysis Platform]], [[Plant Functional Groups]]).

**Covariance** answers one question: when one number is above its average, is the other number usually above or below its own average?
- **Positive covariance:** the two tend to be high together.
- **Negative covariance:** when one is high, the other tends to be low.
- **Near zero:** there is no pattern.

**Spatial covariance** asks this about grass and trees across the cells of one square. Then the square slides over by one cell and the calculation repeats ([[Moving Window Analysis]]). Every pixel ends up with a value that describes its neighbourhood.

## Why it exists
Grassland birds need open grass away from trees ([[Grassland Core Habitat]], [[Edge Effects]]). A plain map of percent grass cannot tell a big open field from a strip of grass beside a forest. Spatial covariance can, because it looks at how grass and trees are arranged relative to each other:
- **Strongly negative:** the grassy cells are the treeless ones and the treey cells are the grassless ones. Grass and trees are sorted into separate zones, so a tree-grass **boundary** runs through the square.
- **At or near zero:** usually trees are nearly absent everywhere in the square, so tree cover does not vary and cannot line up with grass. There is **no tree-grass boundary** nearby. In a grassland this is the sign of a **core**. But a treeless soybean field also scores about zero, so near zero says "open and treeless", not "grassland".
- **Positive:** grass and trees rise and fall together, for example where some cells have more of both plants and others more bare ground or water.

This links to [[Regime Shifts and Spatial Early Warning Signals]]. Grassland and woodland behave like two stable states, and the boundary between them is where change happens. A map of strongly negative values is a map of those front lines ([[Why negative spatial covariance marks a tree-grass boundary]]).

## A tiny example
Here is a window of 4 cells; real windows have 9 or more. Each cell gets a product: (grass minus the grass average) times (tree minus the tree average). Covariance is roughly the average of those products.

**A boundary:**

| Cell | Grass % | Tree % | Grass minus 45 | Tree minus 45 | Product |
|---|---|---|---|---|---|
| 1 | 80 | 5 | +35 | -40 | -1,400 |
| 2 | 80 | 5 | +35 | -40 | -1,400 |
| 3 | 10 | 85 | -35 | +40 | -1,400 |
| 4 | 10 | 85 | -35 | +40 | -1,400 |

The average product is -1,400. That is strongly negative, so there is a boundary.

**A core:** grass is 80, 85, 75, 80 and trees are 0, 0, 0, 0. Tree cover never moves away from its average of 0, so every product is 0 and the covariance is 0.

Both windows contain grass, so a grass map alone would not separate them. The covariance does.

## In my project
The habitat file in the data release has three spatial covariance columns: `30m_PFG_TRE_3W_22`, `_9W_22` and `_27W_22`. In each name:
- PFG means perennial forb and grass cover.
- TRE means tree cover.
- 3W, 9W and 27W are the window widths in pixels: 0.81 ha, 7.29 ha and 65.61 ha.
- 22 means the values come from 2022 imagery. The 2023 sites (CR, HB) also use 2022 imagery.

The values are missing (NA) at 39 points because flooded pixels were removed ([[Flood Masking]]).

For the 3x3 window:
- The median value is -2.6 and 55% of points are negative.
- The values range from -934.5 to 185.3.
- Site medians are BK 0.0, HB -0.6, HO -11.4, DC -20.8 and CR -41.0.

Read those medians with the land cover in hand ([[Percent Cover]]). CR, the most wooded property, is the most negative: its points sit near tree-grass boundaries. BK's 0.0 means its points are open and treeless, but much of that open ground is cropland (soybean and rice are about 42% of the area near its points). So BK is "no boundary nearby", not proof of a grassland core.

Bigger windows give more negative medians (-69.8 at 9x9 and -182.4 at 27x27), because a bigger square is more likely to reach a forest edge ([[Why the window size is a choice of scale]]).

Dr. Roberts suggested using this metric as a per-point [[Predictor Variable]] ([[Proposal Feedback from Dr Roberts]]). The final proposal (Oct 12) did, and the Oct 13 scripts fit it. The wrangling script renames the three columns `SpCov3`, `SpCov9` and `SpCov27` and standardizes them (`SpCov3_z` and so on: 1 unit = 1 standard deviation, or SD; [[Standardizing Predictors]]). Each habitat model (M2a, M2b, M2c) uses one window size plus tree and scrub cover, because the three sizes are correlated (Spearman 0.47 to 0.76; [[Why the window size is a choice of scale]], [[Analysis Plan]]).

H2 predicted opposite patterns for the two responses ([[Hypotheses]]). The Oct 13 results match both ([[Preliminary Results]] has the full tables):
- **All species:** best scale 65.61 ha. [[Interpreting Poisson Coefficients|Rate ratio]] 0.93 per SD (95% CI 0.91 to 0.95): each 1 SD *higher* covariance means about 7% *fewer* species, so more species toward tree-grass edges. (The EDA hinted at this: Spearman -0.41 with the 27x27 window.)
- **Focal grassland species:** best scale 0.81 ha. Rate ratio 1.17 per SD (1.02 to 1.33): about 17% more focal species per SD, so more toward cores (EDA: Spearman +0.26 with 3x3; [[Why all-species and focal-species richness can disagree]]).

One caution when reading the Report: Figure 2 plots raw counts against the **7.29 ha** window (`SpCov9`), which is neither best scale. It shows the shape of the data; the rate ratios above come from the models.

The values come from 2022 imagery and are also applied to the 2023 surveys, on the assumption that tree cover changed little in one year. Run any code in RStudio, since R is not available in Claude's environment.

> [!warning] Verify
> - The core definition is unresolved. The data release methods say values "at or near 0", its abstract says "near-zero or slightly positive", and Berry's 2024 thesis says *positive*. I use "near zero or slightly positive"; check [[Berry et al. 2026]] before defining a core in the Report.
> - The units are products of percent covers (percent squared), so only compare values within one window size.

## Common confusions
- **"Negative means bad habitat and positive means good."** Negative means a boundary is nearby. Near zero means no boundary, which is the core signal only if the open ground is grass. Strongly positive means grass and trees go up and down together, which is not a core.
- **"BK scores 0.0, so BK is intact grassland."** BK is open and treeless, but much of it is soybean and rice ([[Percent Cover]]).
- **"Covariance is the same as correlation."** Correlation is covariance rescaled to sit between -1 and 1. Covariance keeps the units, so its size depends on how variable the covers are.
- **"Spatial covariance is the same as [[Spatial Autocorrelation]]."** No. Autocorrelation compares one thing with itself at nearby places. This metric compares two things (grass and trees) within one place.

## Connections
- **Builds on:** [[Percent Cover]], [[Plant Functional Groups]], [[Moving Window Analysis]], [[Variance]]
- **Leads to:** [[Regime Shifts and Spatial Early Warning Signals]], [[Grassland Core Habitat]], [[Why negative spatial covariance marks a tree-grass boundary]]
- **Part of:** [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]], [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
- **Go deeper:** [[Berry et al. 2026]] (the bird results), [[Roberts et al. 2025]] (the method as written in the metadata), [[McGill 2013]] (nearby things being alike as information)

> [!question]- Check yourself
> Two 90 m squares both average 60% grass. In one, spatial covariance is -800; in the other it is about 0. Which is better for grassland birds, and why?
> ?
> The one near 0. A value of -800 means grass and trees are sorted into separate zones, so a tree line runs through the square. Near 0 usually means trees are almost absent, so the grass is an open core. (Here we know both squares are mostly grass; for a square of unknown land use, near 0 could also be a treeless crop field.)
