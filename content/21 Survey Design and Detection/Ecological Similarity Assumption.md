---
type: atomic
tags:
  - survey-design
  - hierarchical-models
  - community-ecology
  - flashcards/eco/survey
description: "The ecological similarity assumption, made by multi-species models, is that the species grouped together are alike enough in how they live that their responses can be treated as variations on one shared pattern."
aliases:
  - "ecological similarity"
  - "similarity assumption"
status: seedling
---

# Ecological Similarity Assumption

Guess the height of a 12-year-old you have never met. A sensible guess is "about the average height of 12-year-olds", and it works because 12-year-olds are similar enough that their average means something. Now suppose your group is "12-year-olds, giraffes and houseplants": the average height of that group is a number, but useless for guessing any one member, and borrowing from it makes your guess worse. A [[Multi-species Occupancy Model]] borrows exactly like this: each species' estimate is pulled toward the group average, which is [[Partial Pooling]], and that only helps if the group is sensible. The **ecological similarity assumption** says the species grouped together share enough of their way of life (habitat, food, nesting) that they belong together. Similar does not mean identical: each species can still differ, but the differences are assumed to scatter around one shared centre, as in any [[Hierarchical Model]].

See what happens when it breaks, with made-up tree-avoidance slopes (negative means avoids trees). Four grassland birds have slopes −1.0, −0.8, −0.6 and −0.4: average −0.7, small spread. Add two forest birds at +1.2 and +1.4, and the average of all six is about −0.03 with a large spread, a number that describes no species well. A rare grassland bird pulled toward −0.03 would look as if it did not care about trees, hiding a real effect, and a rare forest bird would be pulled toward "avoids trees", the opposite of the truth. So the assumption is not a technicality: it decides whether pooled estimates are sensible. It is mostly argued from ecology before fitting, though a large species-to-species spread after fitting is a warning sign.

Three confusions: similar does not mean responding identically; any list of species can be fitted, but if they are not alike the borrowing misleads; and the model does not test the assumption for you. The grassland bird data release explains why its six species were chosen ([[Roberts et al. 2025]]): all are grassland-dependent (citing Vickery et al. 1999), meeting the ecological similarity assumption (citing Devarajan, Morelli and Tenan 2020), and all are declining (citing Ziolkowski et al. 2023; [[Grassland Bird Decline]]). They are the [[Focal Species]]: [[Northern Bobwhite]], [[Dickcissel]], [[Eastern Meadowlark]], [[Scissor-tailed Flycatcher]], [[Eastern Kingbird]] and [[Loggerhead Shrike]]. Even here "similar" is a judgement call: bobwhite use shrubby mixes much more than meadowlarks, kingbirds often nest in trees, and the abstract says boundary avoidance was "idiosyncratic across species", so the group is similar in being grassland birds, not in being clones ([[Grassland Specialists vs Generalists]]). The assumption is not part of the project's Poisson [[Species Richness|richness]] model, which counts every species with [[No Pooling|no pooling]] across species ([[Why all-species and focal-species richness can disagree]]).

## Connections
- **Builds on:** [[Multi-species Occupancy Model]], [[Partial Pooling]], [[Hierarchical Model]], [[Species Richness]], [[No Pooling]]
- **Leads to:** [[Focal Species]], [[Grassland Bird Decline]], [[Grassland Specialists vs Generalists]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]], [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]
- **Go deeper:** [[Why all-species and focal-species richness can disagree]], [[Northern Bobwhite]], [[Dickcissel]], [[Eastern Meadowlark]], [[Scissor-tailed Flycatcher]], [[Eastern Kingbird]], [[Loggerhead Shrike]], [[Berry et al. 2026]], [[Roberts et al. 2025]]

## Flashcards

Why would adding Northern Cardinal to the grassland focal species make the shared community estimate less useful?
??
Cardinals are edge and shrub birds that respond to trees very differently. Their responses would drag the community average toward zero and widen the spread, so rare grassland species would be pulled toward a pattern that does not describe them.
++++

Does the ecological similarity assumption mean species respond identically?::No. Species can differ; their responses are assumed to scatter around one shared centre.
