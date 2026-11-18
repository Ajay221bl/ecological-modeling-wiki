---
type: atomic
tags: [landscape-remote-sensing, flashcards]
aliases: ["moving window", "moving windows", "focal window", "window size", "3x3 window", "9x9 window", "27x27 window"]
status: seedling
---

# Moving Window Analysis
**In one line:** Slide a small square frame across a map, one pixel at a time; at each stop, calculate something about the pixels inside the frame and write the answer into the centre pixel of a new map.

> [!info] Before this, it helps to know
> [[Pixels and Spatial Resolution]] (maps are grids of pixels) · [[Spatial Scale (Grain and Extent)]] (the window size is the extent) · [[Average (Mean)]] (the simplest thing to compute in a window)

## Start from zero
Lay a sheet of graph paper over a map of tree cover. Cut a 3-square by 3-square hole in a card. Put the hole over the top-left corner. Nine numbers show through. Average them and write the result on a new sheet, in the square under the hole's centre. Slide the card one square right. Repeat, across every row.

That is a **moving window** (also called a focal or neighbourhood operation). The new map no longer says "what is in this pixel" but "what is the neighbourhood around this pixel like".

The window does not have to compute an average. It can compute anything from the pixels inside: a maximum, a [[Spread and Variability|spread]], or, in this project, a covariance between two maps.

## Why it exists
A bird, or a fire, or a seed does not respond to one 30 m square. It responds to the surroundings. A moving window turns pixel-level facts into **neighbourhood** facts, at a scale you choose by setting the window size.

Windows use **odd sizes** (3, 9, 27) so there is a centre pixel to write into. At the map's edge the window is incomplete, and software must shrink it, fill it, or leave the edge blank.

Changing the window size changes the question. A small window asks "is there a boundary right here?"; a large one asks "is there a boundary anywhere in this wider area?" That is why studies often try several sizes ([[Why the window size is a choice of scale]]).

## A tiny example
A strip of 7 pixels of tree cover (%), with a 3-pixel window computing the average:

| Pixel | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|
| Tree cover | 0 | 0 | 0 | 10 | 80 | 90 | 90 |
| Window average | edge | 0 | 3.3 | 30 | 60 | 86.7 | edge |

At pixel 4 the window holds 0, 10 and 80: average 30. The boundary that was a sharp jump becomes a gradual ramp.

The project version looks at **two** maps (PFG grass cover and TRE tree cover) and asks whether they rise and fall together. Take a 3x3 window: left column forest (PFG 10, TRE 80), middle column mixed (45, 45), right column grass (80, 10). Window averages: PFG 45, TRE 45. Multiply (PFG minus 45) by (TRE minus 45) in each pixel: left pixels give (-35)(35) = -1,225, middle 0, right (35)(-35) = -1,225. Average of all nine: (6 x -1,225) / 9 = about -817. **Strongly negative: a boundary.** A window of uniform grassland gives products near 0, so a value near 0.

## In my project
From the data release ([[Roberts et al. 2025]]):
- Spatial covariance between PFG and TRE cover from the [[Rangeland Analysis Platform]] v3.0 was "computed within a moving window algorithm" at three sizes.
- 3x3 pixels: 90 m a side, 90 x 90 = 8,100 m² = **0.81 ha** (1 ha = 10,000 m²).
- 9x9 pixels: 270 m a side, 72,900 m² = **7.29 ha**.
- 27x27 pixels: 810 m a side, 656,100 m² = **65.61 ha**.

How to read the result: **negative** means PFG and TRE are spatially separated (a boundary, such as a grassland-forest transition); **positive** means they co-occur; **at or near 0** means no spatial relationship, which can indicate a grassland core.

In Ajay's 416 points, the 3x3 median is -2.6 (range -934.5 to 185.3; 55% negative). Site medians: BK 0.0, HB -0.6, HO -11.4, DC -20.8, CR -41.0. BK's 0.0 means its points are open and treeless, but much of that ground is cropland, so it is not proof of grassland core ([[Percent Cover]]). The 9x9 and 27x27 medians are -69.8 and -182.4: bigger windows more often catch a forest edge. Values are NA at 39 points because of the [[Flood Masking|flood mask]].

> [!warning] Verify
> - Which values count as a core is unresolved between the metadata, the abstract and the thesis; the details are in [[Spatial Covariance]].
> - The exact covariance formula (for example, dividing by 9 or by 8) follows Uden et al. 2019, which I have not checked. My worked example divides by 9.

## Common confusions
- **"The window is drawn around the bird point."** It slides over the whole map; a bird point just picks up the value already computed for its location.
- **"Bigger window = better data."** Bigger windows summarise more ground, which suits wide-ranging processes but blurs local boundaries.
- **"Negative is bad data."** Negative is a meaningful answer: the two cover types sit apart.

## Connections
- **Builds on:** [[Pixels and Spatial Resolution]], [[Spatial Scale (Grain and Extent)]], [[Percent Cover]], [[Average (Mean)]]
- **Leads to:** [[Spatial Covariance]], [[Why negative spatial covariance marks a tree-grass boundary]], [[Why the window size is a choice of scale]], [[Grassland Core Habitat]]
- **Part of:** [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
- **Go deeper:** [[Roberts et al. 2025]], [[Berry et al. 2026]]

> [!question]- Check yourself
> In a 3x3 window, grass pixels have little tree cover and tree pixels have little grass. What sign will the spatial covariance have, and what does it mean?
> ?
> Negative. Wherever grass is above its window average, trees are below theirs, and vice versa, so the products are negative. That spatial separation marks a tree-grass boundary.
