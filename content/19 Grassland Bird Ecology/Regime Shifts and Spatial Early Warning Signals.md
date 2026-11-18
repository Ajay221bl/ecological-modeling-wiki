---
type: atomic
tags:
  - grassland-bird-ecology
  - landscape-ecology
  - resilience
  - flashcards
aliases:
  - "Regime Shift"
  - "regime shift"
  - "regime shifts"
  - "Spatial Early Warning Signals"
  - "early warning signals"
status: seedling
---

# Regime Shifts and Spatial Early Warning Signals
**In one line:** A regime shift is when an ecosystem flips into a different, lasting state (grassland to juniper woodland); spatial early warning signals are changes in the map pattern that hint the flip is coming.

> [!info] Before this, it helps to know
> [[Woody Plant Encroachment]] (the example flip) · [[Spatial Covariance]] (one of the map patterns watched)

## Start from zero
Picture a ball resting in a bowl. Push it a little and it rolls back. That is a stable state. Now picture two bowls side by side with a ridge between them. Push hard enough and the ball goes over the ridge into the other bowl, and it stays there. Pushing it back takes much more effort than keeping it in the first bowl would have.

Some ecosystems behave like that. A grassland held open by fire is one bowl. A juniper woodland that shades out grass and stops fire is the other. The jump from one to the other is a **regime shift**. ("Regime" here just means "a stable way the system runs".)

The analogy breaks down a little: real landscapes are patchy, so parts can flip at different times, and the "ridge" can move as climate or management change.

## Why it exists
Each state is held in place by **feedbacks**: loops where the state makes itself more likely. Fire keeps grass open; once trees pass a threshold they suppress the fire that would have removed them ([[Woody Plant Encroachment]]). Getting back can take far more effort than preventing the shift.

Because a flip is hard to undo, managers want warning **before** it happens. Theory suggests that as a system nears a threshold, its patterns change in predictable ways. In space, that can show up as changes in how land cover at one place relates to land cover nearby: rising patchiness, neighbouring cells becoming more alike ([[Spatial Autocorrelation]] in the cover map), changing [[Spatial Covariance]], and boundaries between grass and trees moving or sharpening. Watching those patterns over time is the idea behind spatial early warning signals.

A related idea appears in [[Batpurev et al. 2021]], who studied where people judge a rangeland to have "collapsed" as vegetation cover falls (p. 1, abstract). Thresholds, not just averages, matter for management.

> [!warning] Verify
> Dr. Roberts' group has published on grassland regime shifts and spatial signals of woody transitions in the Great Plains, and Berry et al. (2026) builds on that work. I have not confirmed the specific methods or findings here. Check the paper before attributing any specific signal or threshold to it.

## A tiny example
Tree cover in a 5 × 5 grid of map cells (1 = tree, 0 = grass), early and late:

| Stage | Pattern | What you see |
|---|---|---|
| Early | 2 scattered tree cells | Grass everywhere around them |
| Later | 8 tree cells in 2 clumps | Clumps growing, grass neighbourhoods breaking up |

Total cover went from 8% to 32%, but the warning is in the **arrangement**: clumps forming and joining. That arrangement change is what spatial signals try to catch before the whole grid is wooded.

## In my project
The theory of regime shifts is background, but its main tool is now in my model. It explains **why** Dr. Roberts cares about spatial covariance and cores: they are tools for spotting grasslands that are still intact versus ones sliding toward woodland. Spatial covariance at each point is a predictor in the habitat models (H2, fit Oct 13). As H2 predicted, focal grassland richness was higher toward core-like values and all-species richness higher toward edges ([[Grassland Core Habitat]], [[Hypotheses]], [[Preliminary Results]]). My data cover only one year per site, so they cannot show a shift happening over time ([[Why site and year cannot be separated]]).

The data release metadata explains one practical detail that comes from this theory. The study removed flooded pixels before computing spatial covariance because standing water "could interfere with regime shift signals": water is neither grass nor tree, so it would create false boundaries ([[Flood Masking]]). For the ecology behind regimes, see [[Ecological Resilience and Alternative States]] and [[Feedback Loops in Ecology]]; for why fire holds the grassland regime in place, see [[Why trees take over grasslands without fire]].

## Common confusions
- **"Any big change is a regime shift."** The key is feedbacks that hold the new state and make it hard to reverse.
- **"Average tree cover is the warning."** The arrangement in space can change before the average looks alarming.
- **"My data can detect a shift."** No: one year per site, no time series. My model uses spatial covariance as a snapshot of habitat, not as a warning signal over time.

## Connections
- **Builds on:** [[Woody Plant Encroachment]], [[Spatial Covariance]]
- **Leads to:** [[Grassland Core Habitat]], [[Spatial Autocorrelation]]
- **Part of:** [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]
- **Go deeper:** [[Berry et al. 2026]], [[Batpurev et al. 2021]]

> [!question]- Check yourself
> What makes a regime shift different from a gradual change?
> ?
> In a regime shift, feedbacks hold the system in each state, so it can flip suddenly once a threshold is crossed and is hard to reverse. A gradual change just follows its driver and reverses when the driver does.
