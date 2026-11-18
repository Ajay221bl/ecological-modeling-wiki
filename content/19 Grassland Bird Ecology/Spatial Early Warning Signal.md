---
type: atomic
tags:
  - grassland-bird-ecology
  - resilience
  - flashcards/eco/grassland
description: "A spatial early warning signal is a change in the map pattern of an ecosystem, such as trees clumping and grass neighbourhoods breaking up, that hints a regime shift is coming before the average looks alarming."
status: seedling
aliases:
  - "Spatial Early Warning Signals"
  - "early warning signals"
---

# Spatial Early Warning Signal

A doctor can spot trouble before you feel ill, from small changes in a blood test. Ecologists hope to do the same for landscapes. A **spatial early warning signal** is a change in the map pattern of an ecosystem that hints a [[Regime Shift]] (a flip to a different, lasting state) is coming, before the average looks alarming. Theory suggests that as a system nears its [[Tipping Point|tipping point]] its patterns change in predictable ways, and in space that can show up as rising patchiness, neighbouring cells becoming more alike ([[Spatial Autocorrelation]] in the cover map), changing [[Spatial Covariance]] between grass and trees, and grass-tree boundaries moving or sharpening.

See it on a 5 × 5 grid of map cells, each tree (1) or grass (0). Early on, 2 scattered cells are trees, grass everywhere around them: 8% cover. Later, 8 cells are trees in 2 clumps, and the grass neighbourhoods are breaking up: 32% cover. The average went up, but the warning is in the arrangement: clumps forming and joining. That arrangement change is what spatial signals try to catch before the whole grid is wooded. A related idea appears in [[Batpurev et al. 2021]], who studied where people judge a [[Rangeland Health|rangeland]] to have "collapsed" as [[Percent Cover|vegetation cover]] falls (p. 1): thresholds, not just averages, matter for management. The signal needs a [[Time Series|time series]], because it is the change in pattern that warns.

In the grassland bird project, spatial covariance is used as a snapshot of habitat at each point, not as a warning over time, because there is only one year per site. One practical detail comes straight from this theory: flooded pixels were removed before computing spatial covariance because standing water "could interfere with regime shift signals" ([[Roberts et al. 2025]]); water is neither grass nor tree, so it would create false boundaries ([[Flood Masking]]). Dr. Roberts' group has published on spatial signals of woody transitions in the Great Plains and [[Berry et al. 2026]] builds on that work; check the papers before attributing any specific signal or threshold to them ([[Regime Shifts and Spatial Early Warning Signals]]).

## Connections
- **Builds on:** [[Regime Shift]], [[Spatial Autocorrelation]], [[Spatial Covariance]], [[Rangeland Health]], [[Time Series]], [[Tipping Point]]
- **Leads to:** [[Flood Masking]], [[Batpurev et al. 2021]], [[Percent Cover]]
- **Part of:** [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]
- **Go deeper:** [[Regime Shifts and Spatial Early Warning Signals]], [[Roberts et al. 2025]], [[Berry et al. 2026]]

## Flashcards

Tree cover rises from 8% to 32% in a grid. What does a spatial early warning signal look at beyond that average?
??
The arrangement: whether tree cells are clumping and joining and grass neighbourhoods breaking up. The pattern can change before the average looks alarming.
++++

Why were flooded pixels removed before computing spatial covariance?::Water is neither grass nor tree, so it would create false boundaries that could interfere with regime shift signals.
