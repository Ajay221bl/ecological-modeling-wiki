---
type: atomic
tags:
  - grassland-bird-ecology
  - management
  - conservation
  - flashcards
aliases:
  - "Defend the Core framework"
  - "grow the core"
  - "defend and grow the core"
status: seedling
---

# Defend the Core
**In one line:** A conservation strategy: first protect the grassland that is still intact from invading trees, then expand outward from it, instead of spreading effort thin on the most damaged places.

> [!info] Before this, it helps to know
> [[Grassland Core Habitat]] (what is being defended) · [[Woody Plant Encroachment]] (what it is defended against) · [[Ecological Resilience and Alternative States]] (why lost ground is hard to win back)

## Start from zero
Imagine weeding a garden with one free afternoon. One bed has three small weeds. Another bed is completely overgrown. Where do you start?

Most gardeners pull the three small weeds first: ten minutes saves the good bed and stops those weeds seeding. The overgrown bed will take weeks and may never fully recover.

**Defend the Core** applies the same logic to grassland. The "good bed" is the **core**: large, still-open grassland with few trees. The overgrown bed is land already turned to woods.

## Why it exists
Three reasons.

1. **Cost.** Killing a few seedlings with fire is cheap. Cutting mature trees, hauling them and then burning is expensive ([[Grassland Restoration and Management]]).
2. **Chance of success.** A core still has the grass fuel that lets fire carry, native seeds in the soil, and grassland birds already present. Land that has flipped to woodland is held there by its own feedbacks: shade, less fuel, less fire ([[Feedback Loops in Ecology]], [[Why trees take over grasslands without fire]]). Pushing it back may take repeated, costly work.
3. **Spread.** Trees invade from edges and from scattered seed trees (birds drop eastern redcedar seeds under perches). Each tree left in a core becomes a new seed source and a new edge. Defending the core removes those sources early.

The second half is **grow the core**: restore land next to the core, working outward from its edge. The core grows like a widening circle. The alternative, restoring scattered patches far from any core, makes small islands that are mostly edge ([[Edge Effects]], [[Area Sensitivity]]).

You cannot defend what you cannot find. That is where satellite maps come in. [[Spatial Covariance]] between tree cover and grass cover flags the boundaries (strongly negative values) and the cores (values near zero) ([[Why negative spatial covariance marks a tree-grass boundary]]).

## A tiny example
Same made-up budget, $20,000, two plans:

| Plan | What it buys | Result |
|---|---|---|
| A: restore wooded land at $1,000/ha | 20 ha | A 20 ha square is about 447 m on a side. With a 50 m edge band, the core is (447 - 100)² = about 120,000 m² = **12 ha** |
| B: defend an existing core at $50/ha | 400 ha | **400 ha** kept open, and its core stays intact |

Plan A creates 12 ha of new core. Plan B protects about 30 times that much (400 / 12 is roughly 33).

## In my project
The study my data come from is titled "Finding the (small) cores" ([[Berry et al. 2026]]). Its point was to show that spatial covariance can find cores even in fragmented Arkansas grassland, where cores are small, so managers know what to defend.

Site medians of 3x3 spatial covariance in my habitat file: BK 0.0, HB -0.6, HO -11.4, DC -20.8, CR -41.0. BK scores closest to zero and also has the highest mean number of [[Focal Species]] per point-visit (0.99 on the 376 model points, against an overall 0.55). It is tempting to call BK the best "core", but that would be a mistake. BK is open and treeless, and much of it is cropland (soybean and rice are about 42% of the ground near its points, [[Percent Cover]]). Near-zero covariance there means "no tree-grass boundary", not "intact grassland". Its focal score comes mostly from Dickcissel and Eastern Meadowlark, which use open grass and farm mosaics. And it is five sites, each tied to a year, so site medians are a pattern to test, not proof ([[Why site identity is a weak test of a habitat hypothesis]]).

The point-level test is done (Oct 13). With spatial covariance at each point as a predictor, focal grassland richness was about 17% higher per SD toward cores at the 0.81 ha window, and about 45% lower per SD of tree cover, as H2 predicted ([[Hypotheses]], [[Preliminary Results]]). That supports the idea behind defending cores, for my six focal species. All-species richness went the other way (higher toward edges), a reminder that the goal must name which birds it serves.

> [!warning] Verify
> - **Framework source.** Berry's 2024 thesis presents Defend the Core as used by USDA NRCS, for example in the Great Plains Grassland Initiative under Working Lands for Wildlife. Check the program names and wording against an NRCS source before citing.
> - **Sign.** What counts as a core (near zero, or near zero or slightly positive, or positive) is unresolved; see [[Spatial Covariance]].
> - **Scale.** Per the thesis summary, the smallest window (3x3, 0.81 ha) best explained occupancy. Check in the paper.

## Common confusions
- **"Ignore degraded land."** No: it comes second, and is best tackled from the core's edge outward.
- **"Core = the biggest field."** A core is intact, open grassland away from trees, whatever the total area.
- **"Defending means doing nothing."** Cores need regular fire or mowing to stay cores.

## Connections
- **Builds on:** [[Grassland Core Habitat]], [[Woody Plant Encroachment]], [[Ecological Resilience and Alternative States]]
- **Leads to:** [[Why defend the core instead of restoring everywhere]], [[Spatial Covariance]], [[Grassland Restoration and Management]]
- **Part of:** [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]
- **Go deeper:** [[Berry et al. 2026]], [[Roberts et al. 2025]]

> [!question]- Check yourself
> Give two reasons why protecting an intact grassland core usually comes before restoring a wooded area.
> ?
> It is much cheaper per hectare, and it is far more likely to succeed: the core still has fuel for fire, native seeds and birds, while woodland is held in place by its own feedbacks. Defending cores also removes new seed trees before they spread.
