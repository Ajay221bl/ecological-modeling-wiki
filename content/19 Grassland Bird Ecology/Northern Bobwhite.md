---
type: atomic
tags:
  - grassland-bird-ecology
  - species
  - flashcards/eco/grassland
description: "The Northern Bobwhite is a small, round, ground-living quail (Colinus virginianus, code NOBO) of grassy and brushy fields, named for the male's whistled \"bob-WHITE\", and a game bird that has declined for decades."
aliases:
  - "NOBO"
  - "bobwhite"
  - "Colinus virginianus"
  - "Bobwhite"
status: seedling
---

# Northern Bobwhite

A *quail* is a small, chunky bird that lives on the ground, walks more than it flies and bursts into flight only when startled. The **Northern Bobwhite** (*Colinus virginianus*, [[Four-Letter Species Codes|code]] NOBO) is the common quail of the eastern and central US, and on a survey you rarely see one: you hear it, a clear rising whistle, "bob-WHITE!", from the grass or a brushy fence line. It does not migrate, living in the same area all year and gathering outside the [[Breeding Season Timing|breeding season]] in small groups called *coveys*. It is one of the six [[Focal Species]] of the grassland bird project, and a game bird whose numbers have fallen range-wide for decades (often reported as more than 80% since the 1960s in [[Breeding Bird Survey]] data; check before quoting; [[Grassland Bird Decline]]).

It shows that "grassland bird" is not one thing. A [[Eastern Meadowlark|meadowlark]] wants wide-open grass with no trees; a bobwhite wants a mix: grass and weeds to nest and feed in, plus shrub patches nearby to hide from hawks and bad weather. So a little woody cover can help bobwhite while it harms a meadowlark, though dense woodland is bad for both ([[Woody Encroachment]], [[Grassland Specialists vs Generalists]]). Because it is mostly heard, counting it is a [[Detection Probability]] problem. Suppose a bobwhite at a point calls on average once every 4 minutes, at random times, and focal species were recorded during a three-minute count. In 3 minutes it is expected to call 0.75 times, and the chance it never calls is e^−0.75 ≈ 0.47 ([[Poisson Distribution]]): nearly a coin flip, though it is there. On a windy morning even a call may be drowned out. So two visits to the same occupied point can give "heard" and "not heard": detection changed, not presence ([[Imperfect Detection]]).

In the project data (re-counted Oct 12, codes trimmed, ground detections only) bobwhite was found on 202 of 1,250 point-visits at 138 points, 280 birds: HO 91 visits, DC 40, BK 36, CR 28, HB 7. Because detection depends on calling and conditions like wind, the models include Wind as a [[Detection Covariates|detection covariate]] ([[Why include wind and sky]]); in the Oct 13 results its effect on focal richness was unclear ([[Rate Ratio|rate ratio]] 0.95, 95% CI 0.84 to 1.08; [[Preliminary Results]]). For the richness response a bobwhite counts as one species at a point-visit whether one or five were heard ([[Species Richness]]). Berry's thesis summary says bobwhite avoided tree-grass boundaries less than the other focal species, which fits its use of shrubby cover ([[Habitat Selection]]); still to be checked. Bobwhite is also a classic teaching bird: [[Guthery and Bingham 2007]] use a model predicting hunter-days from a bobwhite [[Population Index|abundance index]] whose intercept implies hunting with no quail, a warning against stretching a line beyond the data (p. 685; [[Equation of a Line]]). The confusions to avoid: shrubs are not bad for all grassland birds, and not heard does not mean not there.

## Connections
- **Builds on:** [[Four-Letter Species Codes]], [[Focal Species]], [[Grassland Bird Decline]], [[Breeding Bird Survey]], [[Breeding Season Timing]], [[Eastern Meadowlark]], [[Rate Ratio]], [[Population Index]]
- **Leads to:** [[Detection Probability]], [[Poisson Distribution]], [[Imperfect Detection]], [[Detection Covariates]], [[Species Richness]], [[Habitat Selection]], [[Equation of a Line]]
- **Part of:** [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]
- **Go deeper:** [[Woody Encroachment]], [[Grassland Specialists vs Generalists]], [[Why include wind and sky]], [[Preliminary Results]], [[Guthery and Bingham 2007]], [[Brennan and Kuvlesky 2005]], [[Berry et al. 2026]]

## Flashcards

Why might woody cover affect Northern Bobwhite differently from strict grassland songbirds?
??
Bobwhite use shrubby patches for cover, so moderate woody cover can help them, while strict grassland species avoid trees. Very dense woodland harms both.
++++

A bobwhite calls on average every 4 minutes. What is the chance it stays silent through a 3-minute count?
??
Expected calls = 0.75, so the chance of none is e^−0.75 ≈ 47%.
++++
