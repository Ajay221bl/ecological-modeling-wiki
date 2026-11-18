---
type: atomic
tags:
  - grassland-bird-ecology
  - habitat
  - flashcards
aliases:
  - "habitat choice"
  - "habitat preference"
  - "habitat use"
  - "use vs availability"
status: seedling
---

# Habitat Selection
**In one line:** The process by which an animal ends up in some places more than others, using them more often than you would expect if it wandered at random.

> [!info] Before this, it helps to know
> [[Habitat]] (where a species lives) · [[Probability]] (what "expected by chance" means) · [[Correlation vs Causation]] (seeing a pattern is not the same as knowing why)

## Start from zero
Think about how you chose where to live. First a city, then a neighbourhood, then a building, then which room to put your desk in. Each choice happened at a different **scale**, and each used different cues: jobs, rent, a quiet street, a window.

Birds do something similar. A Dickcissel flying north in spring picks a region, then a field, then a patch of tall weeds within the field, then a spot for its nest. At each step it reacts to cues: how tall and thick the grass is, whether trees are nearby, whether other Dickcissels are already singing there.

**Habitat selection** is the name for this whole process. Ecologists see the result as a pattern: the bird is found in some kinds of places **more often than they are available**.

## Why it exists
Without the idea of selection, a count is just a count. Say 60% of my meadowlark sightings are in grass. Is that a preference? It depends on how much of the landscape is grass. If the landscape is 60% grass, the bird is just going where most of the land is. If it is 20% grass, the bird is choosing grass strongly.

So selection always compares **use** (where the animal is found) with **availability** (what was on offer).

Two warnings come with it:
- **Selection is not always good for the bird.** A bird can settle in a field that looks right but is a bad place to raise young, for example a hayfield mowed while nests are still active ([[Mowing]], [[Breeding Season Timing]]). Ecologists call this an **ecological trap**.
- **Scale matters.** A bird may select open grass within a field (fine scale) but tolerate a landscape that is mostly forest (broad scale). A study measures selection only at the scales it looks at ([[Spatial Scale (Grain and Extent)]]).

## A tiny example
A refuge is 20% open grassland and 80% other cover (woods, crops, water). A surveyor finds a species at 10 spots:

| Cover type | Share available | Spots used | Share used |
|---|---|---|---|
| Grassland | 20% | 6 | 60% |
| Other | 80% | 4 | 40% |

Used 60% vs available 20%: a ratio of 3. The species is found in grassland three times as often as random wandering would predict. That is evidence of selection for grassland. If it had used grassland 2 times out of 10 (20%), the ratio would be 1: no selection detectable.

## In my project
My data record where birds were **detected**, which is use. Detection is not the same as presence ([[Imperfect Detection]]), so an [[Occupancy Model]] separates "is it there?" from "did we notice it?".

[[Berry et al. 2026]] asked a selection-style question: is the chance a point is occupied by each of the six [[Focal Species]] related to [[Spatial Covariance]] around that point, at windows of 0.81, 7.29 and 65.61 ha? The data release abstract says the community avoided tree-grass boundaries and was positively associated with more intact cores at all three scales, and that the response was "idiosyncratic across species" ([[Roberts et al. 2025]]).

The habitat file also has field measures of the cues birds might use at the 50 m scale: [[Visual Obstruction (Robel Pole)]] for grass height and density, distance to trees and tree size ([[Tree Density and DBH]]), and [[Percent Cover]] of 13 cover types. My models (proposal Oct 12, fit Oct 13) use tree cover (woodland plus forest within 50 m) and scrub cover alongside spatial covariance; the Robel and tree measures are missing at too many roadside points to use.

> [!warning] Verify
> Berry's 2024 thesis (Chapter I) reportedly found spatial covariance only weakly related to these field measures, which suggests the satellite and ground measures capture different things; the figure and caveats are in [[Field vs Remote Vegetation Measures]].

## Common confusions
- **"Found there = chose it."** Maybe the bird had no other option. Compare use with availability.
- **"Chose it = good for it."** Ecological traps exist.
- **"One study scale tells the whole story."** Birds select at several scales at once.
- **"Selection is proven by a correlation."** Habitat and site, year or date may move together ([[Confounding]]).

## Connections
- **Builds on:** [[Habitat]], [[Ecological Niche]], [[Probability]]
- **Leads to:** [[Occupancy Model]], [[Area Sensitivity]], [[Why grassland birds avoid trees]]
- **Part of:** [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]
- **Go deeper:** [[Berry et al. 2026]], [[Roberts et al. 2025]]

> [!question]- Check yourself
> A species is found in grassland at 30% of its sightings, and grassland makes up 30% of the area. Is it selecting grassland?
> ?
> No evidence of it. It uses grassland in exactly the share that grassland is available, which is what random wandering would produce. Selection shows up only when use differs from availability.
