---
type: atomic
tags:
  - grassland-bird-ecology
  - habitat
  - landscape-ecology
  - flashcards
aliases:
  - "core habitat"
  - "grassland cores"
  - "Core Habitat"
  - "cores"
status: seedling
---

# Grassland Core Habitat
**In one line:** The middle part of a grassland, far enough from trees and other borders that it stays reliably open; the part grassland specialists depend on most.

> [!info] Before this, it helps to know
> [[Edge Effects]] (why the border strip is worse) · [[Habitat Fragmentation]] (how cores shrink)

## Start from zero
Think of a pizza. The crust runs all around the outside; the middle is the good part. A grassland patch works similarly: the outer strip near trees and roads is "crust" (edge), and the middle, far from everything, is the **core**.

For a ground-nesting grassland bird, the core is where predators from the woods rarely reach and the view is wide open. It is the part of the patch that really does the job.

## Why it exists
If [[Edge Effects]] make the outer band worse, then the part that truly supports grassland specialists is what is left in the middle. Thinking in cores changes the conservation question from "how much grass is there?" to "where are the intact cores, and how do we protect and grow them?"

Core area shrinks fast under [[Habitat Fragmentation]] and [[Woody Plant Encroachment]], because each new tree line carves an edge band out of the interior on **both** sides.

Cores can also be spotted from above. With satellite land-cover maps, researchers look at how grass and trees are arranged across a small neighbourhood, not just at one spot. Where grass and trees are sorted into separate zones, there is a boundary; where trees are essentially absent from a grassy neighbourhood, there is a core. That is the idea behind using [[Spatial Covariance]] to find cores. The word "grassy" matters: a treeless crop field has no boundary either, but it is not grassland core.

## A tiny example
A 300 m × 300 m field, and suppose birds avoid the outer 50 m (a made-up distance for the arithmetic).
- Core: 200 × 200 = 40,000 m² of the 90,000 m² total, about 44%.
- Now a line of trees grows across the middle, north to south. Each half is about 150 m wide. Its core is (150 - 100) × 200 = 10,000 m², so 20,000 m² for both halves, about 22%.

The trees themselves cover only a thin strip. Yet core area halved.

## In my project
The paper my data come from is titled "Finding the (small) cores: Spatial covariance tracks grassland bird community occupancy in fragmented grasslands" ([[Berry et al. 2026]]). As I understand it from the title and the project brief, it asked whether remotely sensed grassland cores predict where declining grassland birds occur, using Bayesian multi-species [[Occupancy Model|occupancy models]]. In fragmented Arkansas grasslands the cores may be small, hence the title.

From the data release metadata ([[Roberts et al. 2025]]): the study treated spatial covariance between grass cover and tree cover at or near zero as a sign of a grassland core, and strongly negative values as a tree-grass boundary. It measured this in windows of 0.81, 7.29 and 65.61 ha, and the smallest (0.81 ha, a square 90 m on a side) explained bird occupancy best. So in these fragmented Arkansas grasslands, a "core" that matters to birds can be as small as about one city block. That is what "small cores" in the title means ([[Why negative spatial covariance marks a tree-grass boundary]], [[Why the window size is a choice of scale]], [[Defend the Core]]).

> [!warning] Verify
> Which values count as a core is unresolved between the metadata, the abstract and Berry's 2024 thesis. I use "near zero or slightly positive"; the details are in [[Spatial Covariance]]. Check the paper's wording before defining a core in the Report.

My project uses cores directly. The habitat file gives a spatial covariance value for every point (NA at 39 flood-masked points), and the Oct 13 models put it next to tree and scrub cover. H2 predicted focal grassland richness higher where spatial covariance is near zero or slightly positive (core-like), and all-species richness higher at edges ([[Hypotheses]]). The results agree ([[Preliminary Results]]):
- Focal richness was about 17% higher per SD of spatial covariance (rate ratio 1.17), at the **0.81 ha** window, the same small scale that worked best in the paper.
- Focal richness was about 45% lower per SD of tree cover within 50 m (rate ratio 0.55). All-species richness showed no tree effect (1.00).

A per-point habitat measure is a much stronger test than property identity alone ([[Why site identity is a weak test of a habitat hypothesis]]).

One caution from my own sites: BK has the most core-like median (0.0) and the most focal species per visit, but much of the open ground around its points is soybean and rice ([[Percent Cover]]). Near zero there means open and treeless, not necessarily grassland core.

## Common confusions
- **"Core = the whole grassland."** No: core is grassland minus the edge band.
- **"A grassy point is a core point."** Not if it is surrounded by trees; the neighbourhood matters.
- **"Core size is fixed."** It depends on how wide the edge band is, which differs by species.
- **"No trees means core."** Only if the open ground is grassland. A treeless crop field also has no edge to trees.

## Connections
- **Builds on:** [[Edge Effects]], [[Habitat Fragmentation]], [[Woody Plant Encroachment]]
- **Leads to:** [[Spatial Covariance]], [[Regime Shifts and Spatial Early Warning Signals]]
- **Part of:** [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]
- **Go deeper:** [[Berry et al. 2026]], [[Roberts et al. 2025]]

> [!question]- Check yourself
> Why does adding one tree line through the middle of a grassland reduce core area much more than it reduces grass area?
> ?
> The trees take little area, but they create a new edge band on both sides. All of that band stops counting as core, so interior habitat drops sharply.
