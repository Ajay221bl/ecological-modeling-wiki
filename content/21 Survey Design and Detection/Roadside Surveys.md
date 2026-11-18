---
type: atomic
tags:
  - survey-design
  - field-methods
  - flashcards
aliases:
  - "roadside survey"
  - "roadside points"
  - "roadside counts"
status: seedling
---

# Roadside Surveys
**In one line:** Point counts done at stops along a road, which are quick and easy to reach but sample the roadside strip rather than the whole landscape.

> [!info] Before this, it helps to know
> [[Point Count Survey]] (what a stop involves) · [[Systematic Grid Sampling]] (the alternative layout)

## Start from zero
Picture a country road at dawn. A truck stops, the observer steps out, counts birds for a few minutes, drives on, and stops again. In one morning they can do dozens of stops without wading through wet grass or getting lost.

That is the appeal of a roadside survey: **access**. Roads go where people can reach, and the counts are fast.

Now look at what lines that road. A ditch, a fence, a power line, maybe a row of trees, mowed verges, gravel and traffic noise. The strip next to a road is not a typical piece of the field behind it. It is an **edge** ([[Edge Effects]]).

## Why it exists
Big surveys need many points cheaply. The [[Breeding Bird Survey]], the largest bird monitoring program in North America, is built entirely on roadside stops for exactly this reason.

The trade-off is **representativeness**. Roads change which birds are there and which ones you notice:
- **Perches.** Fences and wires are lookout posts. Kingbirds, Scissor-tailed Flycatchers and shrikes hunt from them, so roadsides may attract them.
- **Edge birds.** Brushy ditches and tree rows suit generalists such as Indigo Buntings and Northern Cardinals ([[Grassland Specialists vs Generalists]]).
- **Noise.** Traffic can drown out quiet songs, lowering [[Detection Probability]].
- **Habitat.** Roads are usually built on drier ground and away from the interior of a patch, so they under-sample [[Grassland Core Habitat]].

None of this makes roadside counts useless. It means they answer a slightly different question, and mixing them with interior points needs care.

## A tiny example
Made-up counts at two kinds of point on the same site:

| Point type | Species detected | Grassland focal species |
|---|---|---|
| Interior grid point | DICK, EAME, RWBL, NOBO | 3 |
| Roadside point | INBU, NOCA, STFL, AMCR, FISP, YBCH | 1 |

The roadside point has **more** species but **fewer** grassland specialists. If a site has many roadside points, its average richness can look high for reasons that have nothing to do with the grassland itself ([[Why all-species and focal-species richness can disagree]]).

## In my project
The habitat file has a `Roadside` column (1 = roadside, 0 = interior). Roadside points per site:

| Site | Roadside | Total points | Share |
|---|---|---|---|
| BK | 67 | 96 | 70% |
| CR | 0 | 47 | 0% |
| DC | 52 | 93 | 56% |
| HB | 75 | 84 | 89% |
| HO | 44 | 96 | 46% |

So the mix differs a lot by site. Holla Bend is almost all roadside; Camp Robinson has none. That is one more way `Site` bundles many differences together ([[Confounding]], [[Why site identity is a weak test of a habitat hypothesis]]).

Two practical consequences:
- The detailed field vegetation measurements (Robel pole, tree distances, DBH) were mostly **not** collected at roadside points, which explains many of the NAs ([[Field vs Remote Vegetation Measures]]). Dropping rows with NAs therefore drops roadside points more often.
- `Roadside` could itself be a [[Predictor Variable]] or a [[Detection Covariates|detection covariate]], so the model can separate "roadside" from "habitat". That is an idea to raise with Dr. Roberts, not a decision yet ([[Open Questions]]).

## Common confusions
- **"More species at roadside points means roads are good habitat."** Mostly it means roads are edges, where species from two habitats meet.
- **"Roadside and grid points are interchangeable."** They follow different placement rules and see different slices of the landscape.
- **"The BBS is flawed because it uses roads."** Its strength is consistency over decades; trends stay useful even if roadside levels differ from interior levels, as long as roadsides change like the wider landscape.

## Connections
- **Builds on:** [[Point Count Survey]], [[Edge Effects]], [[Detection Probability]]
- **Leads to:** [[Breeding Bird Survey]], [[Confounding]], [[Field vs Remote Vegetation Measures]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]
- **Go deeper:** [[Roberts et al. 2025]] (roadside points 400 m apart around each site)

> [!question]- Check yourself
> Holla Bend has 89% roadside points and Camp Robinson has 0%. Why does that matter when I compare their richness?
> ?
> Roadside points sit on edges with fences, ditches and tree rows, which attract generalist species and change detection. A richness difference between HB and CR could partly reflect this survey mix rather than the grasslands themselves.
