---
type: atomic
tags:
  - grassland-bird-ecology
  - landscape-ecology
  - remote-sensing
  - flashcards/eco/grassland
description: "Spatial covariance is a number computed from satellite maps that says, inside a small square of land, whether grass and trees are sorted into separate zones (a boundary), rise and fall together, or are unrelated (for example, all grass)."
aliases:
  - "spatial covariance"
  - "spatial covariance metric"
status: seedling
---

# Spatial Covariance

Lay a 90 m square over a landscape and split it into a 3 × 3 grid of [[Pixels and Spatial Resolution|pixels]], each 30 m wide. For every pixel a satellite product estimates two numbers: the [[Percent Cover]] of grass and wildflowers, and the percent cover of trees ([[Rangeland Analysis Platform]], [[Plant Functional Groups]]). [[Covariance]] answers one question about two numbers measured together: when one is above its [[Mean]], is the other usually above or below its own mean? Positive means they tend to be high together, negative means when one is high the other tends to be low, and near zero means no pattern. **Spatial covariance** asks this about grass and trees across the pixels of one square; then the square slides over one pixel and the calculation repeats ([[Moving Window Analysis]]), so every pixel ends up with a value describing its neighbourhood.

Here is why it is useful, with a 4-pixel window. In a boundary window the pixels are grass 80, 80, 10, 10 and trees 5, 5, 85, 85; both means are 45. For each pixel multiply (grass − 45) by (tree − 45): (+35)(−40) = −1,400 for the grassy pixels and (−35)(+40) = −1,400 for the wooded ones, so the average product is −1,400, strongly negative: grass and trees are sorted into separate zones and a tree-grass boundary runs through the square. In a core window grass is 80, 85, 75, 80 and trees are 0, 0, 0, 0; tree cover never moves from its mean of 0, so every product is 0 and the covariance is 0. Both windows contain lots of grass, so a grass map alone could not tell them apart; the covariance does. That matters because grassland birds need open grass away from trees ([[Grassland Core Habitat]], [[Edge Effects]]). Positive values happen where grass and trees rise and fall together, for example where some pixels have more of both and others more bare ground or water. Grassland and woodland behave like two stable states, and a map of strongly negative values is a map of the front line between them ([[Regime Shifts and Spatial Early Warning Signals]], [[Why negative spatial covariance marks a tree-grass boundary]]).

Four confusions. Negative does not mean bad and positive good: negative means a boundary is near, near zero means no boundary, which signals a core only if the open ground is grass, since a treeless soybean field also scores zero. Covariance is not [[Correlation]]: correlation is covariance rescaled to lie between −1 and 1, while covariance keeps units (here percent squared), so compare values only within one window size. And spatial covariance is not [[Spatial Autocorrelation]], which compares one thing with itself at nearby places; this compares two things within one place. In the grassland bird project's habitat file the columns `30m_PFG_TRE_3W_22`, `_9W_22` and `_27W_22` hold it for windows of 3, 9 and 27 pixels (0.81, 7.29 and 65.61 ha) from 2022 imagery (also applied to the 2023 sites), with NA at 39 points removed by [[Flood Masking]]. For the 3×3 window the median is −2.6 (55% of points negative, range −934.5 to 185.3), and site medians are BK 0.0, HB −0.6, HO −11.4, DC −20.8, CR −41.0: CR, the most wooded property, sits near boundaries, while BK's 0.0 means open and treeless, but about 42% of that open ground is cropland. Bigger windows give more negative medians (−69.8 at 9×9, −182.4 at 27×27) because a bigger square is more likely to reach a forest edge ([[Why the window size is a choice of scale]]). As Dr. Roberts suggested ([[Proposal Feedback from Dr Roberts]]), the wrangling script renames them `SpCov3`, `SpCov9`, `SpCov27`, [[Standardizing|standardizes]] them, and each habitat model uses one window size ([[Analysis Plan]]). The Oct 13 results matched both predictions ([[Hypotheses]], [[Preliminary Results]]): all-species [[Species Richness|richness]] was best explained at 65.61 ha, with a [[Rate Ratio]] of 0.93 per [[Standard Deviation|standard deviation]] (more species toward edges), and focal grassland richness at 0.81 ha, 1.17 per standard deviation (more toward cores; [[Why all-species and focal-species richness can disagree]]). Report Figure 2 plots raw counts against the 7.29 ha window, which is neither best scale. The core definition is still unresolved (metadata "at or near 0", abstract "near-zero or slightly positive", thesis "positive"); check [[Berry et al. 2026]].

```r
grass <- c(80, 80, 10, 10); tree <- c(5, 5, 85, 85)       # boundary window
mean((grass - mean(grass)) * (tree - mean(tree)))         # -1400: sorted zones
cov(grass, tree)                                          # R divides by n - 1: -1866.7, same sign
grass2 <- c(80, 85, 75, 80); tree2 <- c(0, 0, 0, 0)       # core window
cov(grass2, tree2)                                        # 0: trees never vary
cor(grass, tree)                                          # -1: correlation is covariance rescaled
```

## Connections
- **Builds on:** [[Pixels and Spatial Resolution]], [[Percent Cover]], [[Rangeland Analysis Platform]], [[Plant Functional Groups]], [[Covariance]], [[Mean]], [[Moving Window Analysis]], [[Species Richness]], [[Standard Deviation]]
- **Leads to:** [[Grassland Core Habitat]], [[Edge Effects]], [[Regime Shifts and Spatial Early Warning Signals]], [[Correlation]], [[Spatial Autocorrelation]], [[Flood Masking]], [[Standardizing]], [[Rate Ratio]]
- **Part of:** [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]], [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
- **Go deeper:** [[Why negative spatial covariance marks a tree-grass boundary]], [[Why the window size is a choice of scale]], [[Why all-species and focal-species richness can disagree]], [[Proposal Feedback from Dr Roberts]], [[Analysis Plan]], [[Hypotheses]], [[Preliminary Results]], [[Berry et al. 2026]], [[Roberts et al. 2025]], [[McGill 2013]]

## Flashcards

Two 90 m squares both average 60% grass. In one, spatial covariance is −800; in the other it is about 0. Which is better for grassland birds, and why?
??
The one near 0. −800 means grass and trees are sorted into separate zones, so a tree line runs through the square. Near 0 usually means trees are almost absent, so the grass is an open core (if the open ground is grass, not crops).
++++

Why is spatial covariance zero in a window with no trees?::Tree cover never moves away from its mean, so every product of deviations is zero.

How does spatial covariance differ from spatial autocorrelation?::Spatial covariance compares two variables (grass, trees) within one place; autocorrelation compares one variable with itself at nearby places.
