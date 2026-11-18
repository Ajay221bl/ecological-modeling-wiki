---
type: atomic
tags: [landscape-remote-sensing, flashcards]
aliases: ["scale", "spatial scale", "grain", "extent", "grain and extent", "scale of analysis"]
status: seedling
---

# Spatial Scale (Grain and Extent)
**In one line:** How closely and how widely you look at the ground: **grain** is the size of the smallest thing you can see (one dot, one pixel), and **extent** is the size of the whole area you look at.

> [!info] Before this, it helps to know
> [[Landscape Ecology]] (pattern on the ground) · [[Pixels and Spatial Resolution]] (the smallest unit of a map)

## Start from zero
Look at a lawn with your nose on the grass. You see single blades, an ant, bare soil between stems. Stand up: you see a green lawn with a few weeds. Go up in a plane: the lawn is one tiny green dot among houses.

Nothing about the lawn changed. Your **scale** did. It has two separate parts:
- **Grain**: the finest detail you can tell apart. A phone photo of the lawn might have a grain of 1 mm; a satellite pixel might be 30 m.
- **Extent**: the total area covered. One photo of a 2 m patch of lawn, or a satellite scene 185 km wide.

## Why it exists
**The answer to an ecological question often changes with scale.** Ask "Is this place grassland?":
- At a 1 m grain, a single shrub is "not grassland".
- At a 30 m grain, that shrub is a speck inside a grassy pixel.
- Over a 1 km extent, the place might be mostly forest with a meadow in it.

Each answer is true at its scale. There is no single correct scale, only one that matches the process you care about. A Dickcissel picks a nest site over metres, defends a territory of perhaps a hectare or two, and migrates across a continent. If you measure habitat at a scale the bird does not respond to, you may find "no effect" even though the bird cares a lot about habitat at another scale.

That is why careful studies try **several scales** and let the data say which fits best, rather than guessing.

## A tiny example
The same strip of 9 pixels, tree cover (%):

`0  0  0  0  0  90  90  90  90`

- Grain 1 pixel, extent 1 pixel (the 3rd pixel): tree cover 0%. "Open grassland."
- Grain 1 pixel, extent 3 pixels centred on pixel 5 (pixels 4 to 6): 0, 0, 90. "A boundary."
- Extent all 9 pixels: average 40%. "A half-wooded mix."

Same land, three honest descriptions.

## In my project
Scale shows up in four places:

| What | Grain | Extent |
|---|---|---|
| RAP cover maps ([[Rangeland Analysis Platform]]) | 30 m x 30 m pixel | whole study area |
| Spatial covariance windows ([[Moving Window Analysis]]) | 30 m pixel | 3x3, 9x9 or 27x27 pixels |
| Field vegetation ([[Percent Cover]]) | visual estimate | 50 m radius circle |
| Bird counts ([[Point Count Survey]]) | one point | focal species within 100 m |

The three window sizes are three extents. Their arithmetic: 3 pixels x 30 m = 90 m a side, and 90 x 90 = 8,100 m² = 0.81 ha (1 ha = 10,000 m²). Likewise 270 m gives 72,900 m² = 7.29 ha, and 810 m gives 656,100 m² = 65.61 ha. Each step is 3 times wider and 9 times larger in area.

A neat match: a 50 m radius circle covers about 3.14 x 50 x 50 = 7,854 m², roughly 0.79 ha, almost the same area as the 3x3 window. So the smallest window and the field vegetation plots look at similar-sized pieces of ground.

The data show scale at work: the median spatial covariance in Ajay's points is -2.6 at 3x3 but -69.8 at 9x9 and -182.4 at 27x27, because a bigger window is more likely to reach a forest edge. See [[Why the window size is a choice of scale]].

> [!warning] Verify
> Per Berry's 2024 thesis (University of Arkansas) summary, the 3x3 window (0.81 ha) explained focal-species occupancy best; the data release abstract says the same. Treat this as approximate until checked against [[Berry et al. 2026]].

## Common confusions
- **"Scale" means map scale like 1:24,000.** Cartographers use "large scale" for a zoomed-in map. Ecologists usually mean grain and extent. Say which you mean.
- **"Finer is always better."** Finer grain shows more detail but also more noise, and may miss the pattern the animal responds to.
- **Grain and extent are one dial.** They are two independent dials.

## Connections
- **Builds on:** [[Landscape Ecology]], [[Pixels and Spatial Resolution]]
- **Leads to:** [[Moving Window Analysis]], [[Why the window size is a choice of scale]], [[Spatial Autocorrelation]]
- **Part of:** [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
- **Go deeper:** [[Berry et al. 2026]], [[Roberts et al. 2025]]

> [!question]- Check yourself
> The 9x9 window has a side of 270 m. Why is its area 9 times, not 3 times, that of the 3x3 window?
> ?
> Area is side times side. Tripling the side (90 m to 270 m) multiplies both directions by 3, so the area grows 3 x 3 = 9 times: 0.81 ha to 7.29 ha.
