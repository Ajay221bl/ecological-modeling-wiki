---
type: molecular
tags:
  - molecular
  - landscape-ecology
  - remote-sensing
aliases:
  - "Reading the sign of spatial covariance"
  - "Negative covariance means boundary"
status: seedling
---

# Why negative spatial covariance marks a tree-grass boundary
> [!summary] In plain words
> Inside a small square of map, spatial covariance asks: where grass cover is high, is tree cover high or low? At a forest edge, one side is all grass and the other all trees, so wherever one is high the other is low: the covariance is negative. In a grassland core there are almost no trees, so tree cover barely varies and the covariance sits near zero. But any treeless ground, including a crop field, also sits near zero. The sign and size tell you whether a point sits on a boundary, not whether the open ground is grassland.

## The question
The habitat file gives each point a spatial covariance value, with a 3x3 median of -2.6 and a minimum of -934.5. Why does a negative number mean "tree-grass boundary", and what does near zero mean?

## Built from
- [[Spatial Covariance]]: the measure itself.
- [[Average (Mean)]] and [[Spread and Variability]]: covariance is built from distances to the average.
- [[Percent Cover]] and [[Plant Functional Groups]]: the two inputs are grass-and-forb cover and tree cover.
- [[Pixels and Spatial Resolution]] and [[Moving Window Analysis]]: how a 3x3 block of 30 m pixels is scored.
- [[Edge Effects]] and [[Grassland Core Habitat]]: what boundaries and cores mean for birds.

## The reasoning, step by step
1. **Each pixel has two numbers.** From the [[Rangeland Analysis Platform]], every 30 m pixel has a percent cover of perennial forbs and grasses (PFG) and a percent cover of trees (TRE).
2. **Look at a small window.** Take the pixels in a square around the point (9 pixels for a 3x3 window). Work out the average PFG and average TRE in the window.
3. **Ask whether they move together.** For each pixel, note how far PFG is from its average and how far TRE is from its average. Multiply the two. Average those products. That is the covariance.
   - Both above average together (or both below): product positive.
   - One above, one below: product negative.
4. **A boundary gives negative.** Four made-up pixels across a forest edge (PFG, TRE): (90, 0), (90, 0), (10, 80), (10, 80). Averages: PFG 50, TRE 40. Distances: (+40, -40) twice and (-40, +40) twice. Each product is -1,600. Average = **-1,600**. Grass is high exactly where trees are low: the two groups are spatially separated.
5. **A core gives near zero.** Four pixels of open grassland: (90, 0), (85, 0), (95, 0), (90, 0). TRE never differs from its average of 0, so every product is 0. Covariance = **0**. Nothing to separate, because there are no trees.
6. **Positive means co-occurrence.** Pixels (70, 40), (70, 40), (20, 5), (20, 5): averages 45 and 22.5, and both are above average in the same pixels, so the covariance is positive (+437.5). Grass and trees rise and fall together, as in an open woodland next to bare crop ground.
7. **Bigger magnitude means stronger contrast.** A sharp edge with full forest beside full grass gives a large negative number; a few scattered trees give a small one.
8. **Why this matters to birds.** A negative value says "this point sits on a transition", with edge predators, perches and fewer grassland specialists. Near zero says the point is inside a uniform, treeless patch; whether that patch is grassland or cropland needs the land-cover data ([[Percent Cover]], [[Why grassland birds avoid trees]]).

## So in my project
- 3x3 window values: median **-2.6**, minimum **-934.5**, maximum **185.3**; **55%** of points are negative ([[Roberts et al. 2025]]).
- Site medians (3x3): BK **0.0**, HB **-0.6**, HO **-11.4**, DC **-20.8**, CR **-41.0**. Camp Robinson points sit closest to tree-grass boundaries; Bald Knob points least. That matches the land cover: CR is the most wooded property (woodland 40% plus forest 10% within 50 m), and BK the least wooded ([[Percent Cover]]).
- The data release abstract reports the community was positively associated with "near-zero or slightly positive" spatial covariance, which it reads as grassland cores ([[Roberts et al. 2025]], [[Berry et al. 2026]]).
- This value is a predictor in my models (proposal Oct 12, fit Oct 13). H2 predicted all-species richness higher at more negative values (edges) and focal grassland richness higher near zero or slightly positive ([[Hypotheses]]). Both held: all species rate ratio 0.93 per SD (65.61 ha), so more species toward edges; focal species 1.17 per SD (0.81 ha), so more toward cores ([[Preliminary Results]]).

> [!warning] Verify
> Which values count as a core (at or near zero, near zero or slightly positive, or positive) is unresolved between the metadata, the abstract and Berry's 2024 thesis; see [[Spatial Covariance]]. The Report reads near zero as cores, citing [[Berry et al. 2026]]. The rate ratios themselves only say "more species toward less negative values", which is true whatever the core definition; confirm the wording with Dr. Roberts before the Final Draft.

## What would go wrong otherwise
- **Reading near zero as "good grassland" without checking.** A soybean field with no trees also gives zero, because TRE never varies. Near zero means "no tree-grass contrast", not automatically "grassland". BK's median of 0.0 is exactly this case. The habitat file shows that about 42% of the ground within 50 m of BK points is soybean or rice ([[Percent Cover]]). So BK is open and treeless, much of it cropland, not proof of an intact grassland core. Its high focal richness comes mainly from Dickcissel and Eastern Meadowlark, which use open grass and farm mosaics.
- **Treating the number like percent cover.** It is in squared percent units and depends on window size, so -40 is not "40% less grass".
- **Ignoring the flood mask.** Standing water would distort both covers, so 39 points have NA ([[Flood Masking]]).

## Connections
- **Related:** [[Why the window size is a choice of scale]], [[Regime Shifts and Spatial Early Warning Signals]], [[Field vs Remote Vegetation Measures]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]], [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]
