---
type: atomic
tags:
  - landscape-remote-sensing
  - flashcards/eco/landscape
description: "Moving window analysis slides a small square frame across a map one pixel at a time; at each stop it calculates something about the pixels inside and writes the answer into the centre pixel of a new map."
aliases:
  - "moving window"
  - "moving windows"
  - "focal window"
  - "window size"
  - "3x3 window"
  - "9x9 window"
  - "27x27 window"
status: seedling
---

# Moving Window Analysis

Lay a sheet of graph paper over a map of tree cover and cut a 3-square by 3-square hole in a card. Put the hole over the top-left corner: nine numbers show through. Average them and write the result on a new sheet, in the square under the hole's centre. Slide the card one square right and repeat, across every row. That is a **moving window** (also called a focal or neighbourhood operation): each [[Pixels and Spatial Resolution|pixel]], one small square of a map, gets a new value describing its neighbourhood rather than itself. The window can compute anything from the pixels inside: the [[Mean]] (the ordinary average), a maximum, a measure of spread such as the [[Variance]], or, in the grassland bird project, a [[Covariance]] between two maps.

Why bother? A bird, a fire or a seed does not respond to one 30 m square; it responds to the surroundings, so a moving window turns pixel facts into neighbourhood facts at a scale you choose by setting the window size. Windows use odd sizes (3, 9, 27) so there is a centre pixel to write into, and at the map's edge the window is incomplete, so software must shrink it, fill it or leave the edge blank. Watch what an averaging window does to a strip of 7 pixels of tree cover: 0, 0, 0, 10, 80, 90, 90. With a 3-pixel window, pixel 4 sees 0, 10 and 80 and gets 30; the full output is (edge), 0, 3.3, 30, 60, 86.7, (edge). The sharp jump has become a gradual ramp. The project version looks at two maps, grass (PFG) and tree (TRE) [[Percent Cover]], and asks whether they rise and fall together. Take a 3×3 window whose left column is forest (grass 10, trees 80), middle column mixed (45, 45) and right column grass (80, 10). Both averages are 45. Multiply (grass − 45) by (trees − 45) in each pixel: the left pixels give (−35)(35) = −1,225, the middle 0, the right (35)(−35) = −1,225. Average of all nine: 6 × (−1,225) / 9 ≈ −817, strongly negative, a boundary. A window of uniform grassland gives products near 0. That is [[Spatial Covariance]].

Changing the window size changes the question: a small window asks "is there a boundary right here?", a large one "is there a boundary anywhere in this wider area?", which is why studies try several sizes ([[Why the window size is a choice of scale]], [[Spatial Scale]]). Three confusions: the window is not drawn around a bird point (it slides over the whole map, and a point just picks up the value computed for its location); a bigger window is not better data (it suits wide-ranging processes but blurs local boundaries); and a negative value is not bad data but a meaningful answer. In the data release the covariance between [[Rangeland Analysis Platform]] v3.0 PFG and TRE cover was "computed within a moving window algorithm" at 3×3 pixels (90 m a side, 0.81 ha), 9×9 (270 m, 7.29 ha) and 27×27 (810 m, 65.61 ha) ([[Roberts et al. 2025]]). Across the project's 416 points the 3×3 median is −2.6 (range −934.5 to 185.3), with site medians BK 0.0, HB −0.6, HO −11.4, DC −20.8 and CR −41.0, and the 9×9 and 27×27 medians are −69.8 and −182.4, because bigger windows more often catch a forest edge; values are NA at 39 points because of the [[Flood Masking|flood mask]]. The exact formula (dividing by 9 or 8) follows Uden et al. 2019, unchecked; the worked example divides by 9.

```r
# An averaging moving window along a strip of tree cover (3-pixel window)
tree <- c(0, 0, 0, 10, 80, 90, 90)
stats::filter(tree, rep(1/3, 3), sides = 2)   # NA 0 3.3 30 60 86.7 NA: the jump becomes a ramp
```

## Connections
- **Builds on:** [[Pixels and Spatial Resolution]], [[Mean]], [[Variance]], [[Covariance]], [[Percent Cover]]
- **Leads to:** [[Spatial Covariance]], [[Spatial Scale]], [[Rangeland Analysis Platform]], [[Flood Masking]]
- **Part of:** [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
- **Go deeper:** [[Why the window size is a choice of scale]], [[Why negative spatial covariance marks a tree-grass boundary]], [[Grassland Core Habitat]], [[Roberts et al. 2025]], [[Berry et al. 2026]]

## Flashcards

In a 3×3 window, grass pixels have little tree cover and tree pixels have little grass. What sign will the spatial covariance have, and what does it mean?
??
Negative. Wherever grass is above its window average, trees are below theirs, and vice versa, so the products are negative. That spatial separation marks a tree-grass boundary.
++++

Why do moving windows use odd sizes?::So there is a centre pixel to write the result into.
