---
type: atomic
tags:
  - survey-design
  - hierarchical-models
  - community-ecology
  - flashcards
aliases:
  - "ecological similarity"
  - "similarity assumption"
status: seedling
---

# Ecological Similarity Assumption
**In one line:** The assumption, made by multi-species models, that the species grouped together are alike enough in how they live that it makes sense to treat their responses as variations on one shared pattern.

> [!info] Before this, it helps to know
> [[Multi-species Occupancy Model]] (where the assumption is used) · [[Partial Pooling]] (what the assumption licenses)

## Start from zero
Suppose you want to guess how tall a 12-year-old you have never met is. A sensible guess is "about the average height of 12-year-olds". That works because 12-year-olds are similar enough that their average is meaningful.

Now suppose your group is "12-year-old children, giraffes and houseplants". The average height of that group is a number, but it is useless for guessing any one member. Borrowing from that average would make your guess worse, not better.

A [[Multi-species Occupancy Model]] borrows exactly like this. Each species' estimate is pulled toward the group average ([[Partial Pooling]]). That only helps if the group is a sensible group. The **ecological similarity assumption** says: these species share enough of their way of life (habitat, food, nesting) that they belong together.

## Why it exists
Borrowing strength is powerful, but it can mislead. Picture what happens if the assumption is broken:
- Put a forest bird, which likes trees, in with five grassland birds, which avoid them.
- The community average says "the group avoids trees".
- If the forest bird is rare, its estimate gets pulled toward "avoids trees", the opposite of the truth.
- Meanwhile the community average itself is a blend of two different stories, so it describes nobody well.

So the assumption is not a technicality. It decides whether the pooled estimates are sensible.

Similar does **not** mean identical. The model still lets each species differ from the average; it just assumes the differences are scatter around one centre, not two separate groups ([[Hierarchical Model]]).

## A tiny example
Made-up tree-avoidance slopes (negative = avoids trees):

| Group | Species slopes | Average | Spread around average |
|---|---|---|---|
| Grassland birds only | -1.0, -0.8, -0.6, -0.4 | -0.7 | small |
| Same + two forest birds | -1.0, -0.8, -0.6, -0.4, +1.2, +1.4 | about -0.03 | large |

In the second group the average is near zero, which describes no species well. A rare grassland bird pulled toward "-0.03" would look like it does not care about trees, which hides a real effect ([[Spread and Variability]]).

## In my project
The data release explains why these six species were chosen ([[Roberts et al. 2025]]):
1. All are **grassland-dependent** (the metadata cites Vickery et al. 1999), so they meet the ecological similarity assumption of the multi-species occupancy model (citing Devarajan, Morelli and Tenan 2020).
2. All are **declining** across much of their range (citing Ziolkowski et al. 2023), so they matter for conservation ([[Grassland Bird Decline]]).

The six are [[Northern Bobwhite]], [[Dickcissel]], [[Eastern Meadowlark]], [[Scissor-tailed Flycatcher]], [[Eastern Kingbird]] and [[Loggerhead Shrike]] ([[Focal Species]]).

Similar is a judgement call even here. Bobwhite use shrubby, woody-open mixes much more than meadowlarks do, and kingbirds often nest in trees. The data release abstract says "The strength of tree-grass boundary avoidance was idiosyncratic across species", so the group is similar in being grassland birds, not in being clones.

This assumption is **not** part of my richness model: Poisson richness counts every species, generalists included, with no pooling across species ([[Why all-species and focal-species richness can disagree]]).

## Common confusions
- **"Similar means they respond identically."** No: species can differ; they are assumed to scatter around one shared centre.
- **"Any list of species can go in an MSOM."** It can be fitted, but if the species are not alike, the borrowing misleads.
- **"The assumption is tested by the model."** Mostly it is argued from ecology (shared habitat use) before fitting, though large species-to-species spread is a warning sign.

## Connections
- **Builds on:** [[Multi-species Occupancy Model]], [[Partial Pooling]], [[Grassland Specialists vs Generalists]]
- **Leads to:** [[Focal Species]], [[Hierarchical Model]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]], [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]
- **Go deeper:** [[Berry et al. 2026]]

> [!question]- Check yourself
> Why would adding Northern Cardinal to the grassland focal species make the shared community estimate less useful?
> ?
> Cardinals are edge and shrub birds that respond to trees very differently. Their responses would drag the community average toward zero and widen the spread, so rare grassland species would be pulled toward a pattern that does not describe them.
