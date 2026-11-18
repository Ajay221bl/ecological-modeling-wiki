---
type: atomic
tags:
  - ecology-basics
  - flashcards
aliases:
  - "levels of organization"
  - "ecological hierarchy"
  - "Levels of Ecological Organisation"
status: seedling
---

# Levels of Ecological Organization
**In one line:** Ecologists look at nature at nested levels, from one organism up to the whole planet, and each level asks a different kind of question.

> [!info] Before this, it helps to know
> [[Ecology]] (what the science is for)

## Start from zero
Think of an address: person, house, street, town, state, country. Each line contains the one before it. You can ask questions at each level, and the answers are different. "Is this person healthy?" is not the same question as "Is this town growing?"

Nature has a similar set of nested levels:

| Level | What it is | A question asked at this level |
|---|---|---|
| **Individual** (organism) | One living thing: one Dickcissel | Did this bird find a mate? |
| **[[Population]]** | All individuals of one species in one area | Are Dickcissels at this refuge increasing? |
| **[[Ecological Community]]** | All the populations of different species living together | How many bird species share this field? |
| **[[Ecosystem]]** | The community plus its non-living surroundings (soil, water, fire, weather) | What happens to the field when it floods or burns? |
| **Landscape** | A mosaic of several ecosystems side by side | How do woods, fields and farms fit together? ([[Landscape Ecology]]) |
| **[[Biome]]** | A huge region with similar climate and vegetation | Why is the Great Plains grassland and Arkansas mostly forest? |
| **Biosphere** | All life on Earth | How is life changing globally? |

## Why it exists
Two reasons.

**1. Different levels behave differently.** A single bird lives or dies. A population can grow by 5% a year. A community can have 6 species or 12. Only a community *has* a species count; only a population *has* a growth rate. Mixing levels leads to nonsense, like asking for the "species richness of one bird".

**2. Causes often come from one level up, effects show at one level down.** Fire is an ecosystem process. It shapes which plants grow (community), which shapes which birds can nest (population), which shapes whether a given bird raises young (individual). Knowing the levels helps you trace a cause through the chain.

## A tiny example
Imagine one survey point in a field.
- **Individual:** one Eastern Meadowlark singing on a post.
- **Population:** all the meadowlarks using that refuge this summer.
- **Community:** the meadowlark plus every other bird species at the point, say 6 species.
- **Ecosystem:** those birds plus the grass, insects, soil, rain and the prescribed burn last spring.
- **Landscape:** the field plus the woods on one side and the rice field on the other.

Same spot, five different stories, depending on the level you choose.

## In my project
My data touch several levels at once:
- My **response** is [[Species Richness]] at a point-visit: the number of species detected. That is a **community-level** measure.
- [[Berry et al. 2026]] modeled each of six declining species separately inside one [[Multi-species Occupancy Model]]: individual species' occupancy, combined into a **community** picture.
- [[Spatial Covariance]] is a **landscape-level** measure. It is computed from satellite pixels within a moving window (90 m, 270 m or 810 m on a side) and describes how grass and trees are arranged around a point.
- Every site sits inside a forested or agricultural "matrix" ([[Patch, Matrix and Corridor]]), which is a landscape idea.

So my model links a landscape-level predictor to a community-level response. That stops me from claiming something about individual birds ("birds choose to avoid trees") that richness alone cannot show.

Related but different: "level" is about *what kind of thing* you study. **Spatial scale** is about *how big an area* you look at ([[Spatial Scale (Grain and Extent)]]). A community can be studied in a 1 ha plot or across a whole state.

## Common confusions
- **"A higher level is more important."** No. Each level answers different questions. Conservation needs all of them.
- **"Level = size."** Not exactly. A population of ants can live in one log; a community can span a continent. Level means the *kind* of unit, not its area.
- **"A pattern at one level means the same pattern at another."** Richness can rise near edges while the six focal grassland species fall ([[Why all-species and focal-species richness can disagree]]).

## Connections
- **Builds on:** [[Ecology]]
- **Leads to:** [[Population]], [[Ecological Community]], [[Ecosystem]], [[Biome]], [[Landscape Ecology]]
- **Part of:** [[MOC 19 - Ecology Vocabulary|MOC - Ecology from Zero]]

> [!question]- Check yourself
> Species richness at a point: which level of organization is it, and why can't it describe a population?
> ?
> It is a community-level measure because it counts how many different species live together. A population is one species only, so it has a size or growth rate but no "number of species".
