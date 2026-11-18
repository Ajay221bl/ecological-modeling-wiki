---
type: atomic
tags:
  - grassland-bird-ecology
  - habitat
  - landscape-ecology
  - flashcards/eco/grassland
description: "An edge effect is any change in conditions near the border where one habitat meets another; for grassland birds, dangers from the neighbouring habitat leak in and nests near edges often do worse."
aliases:
  - "edge effect"
  - "edges"
  - "Habitat edge"
  - "Ecotone (edge)"
status: seedling
---

# Edge Effects

Walk across a pasture toward a line of trees. In the middle you see only grass and sky; within a few dozen metres of the trees things change: shade on the grass, a hawk watching from a branch, a raccoon trail coming out of the woods. The strip where one [[Habitat]] (the kind of place a species lives) meets another is an *edge*, and an **edge effect** is any change that happens because you are near that border. For a ground-nesting grassland bird the edge is where the dangers of the other habitat leak in: woodland predators such as raccoons, snakes and perched hawks hunt into the nearby grass; Brown-headed [[Brood Parasitism|Cowbirds]], which lay their eggs in other birds' nests, watch from trees to find nests; and light, wind and plant structure change.

So the usable area of a patch is smaller than its mapped area, and that is the link from [[Habitat Fragmentation]] (one habitat broken into many pieces) to bird numbers: small, irregular patches are a bigger share edge and leave less [[Grassland Core Habitat]], the part far from edges. But not every species loses at an edge. [[Habitat Generalist|Generalists]] that use both habitats are often more common there, so total [[Species Richness]], the number of species recorded, can go up at edges while [[Habitat Specialist|grassland specialists]] go down. Take two points on one property: the middle of a field records 5 species, 4 of them grassland specialists; a point beside a tree line records 7, only 2 of them specialists. Richness alone would rank the edge point as "better" though it is worse for grassland birds ([[Grassland Specialists vs Generalists]]). The direction and distance of edge avoidance differ by species and region, so never state "birds avoid trees within X m" without a published source.

Three confusions. An edge is a zone, often tens of metres wide, not just the fence line. Higher richness at edges does not make edges good habitat. And in a [[Mixed Effects Model|mixed model]], a [[Random Intercept]] for each survey point absorbs point-to-point differences such as one point being beside a tree line, but it does not explain them ([[Why a random intercept for point]]); to test edges you need a per-point variable such as distance to the woody edge or [[Spatial Covariance]], as Dr. Roberts suggested ([[Proposal Feedback from Dr Roberts]]). The Oct 13 grassland bird models did exactly that ([[Hypotheses]], [[Preliminary Results]]): all-species richness was about 7% higher per [[Standard Deviation|standard deviation]] toward edges (spatial covariance [[Rate Ratio|rate ratio]] 0.93 at the 65.61 ha window), as predicted, but tree cover within 50 m had no clear effect (1.00); focal grassland richness was about 45% lower per standard deviation more tree cover (0.55). Edges add species in general while specialists stay away, just like the two-point example. Because neighbouring points can share the same edge, edges are also one reason nearby points have similar richness ([[Spatial Autocorrelation]]), and spreading trees create new edges ([[Woody Encroachment]]).

## Connections
- **Builds on:** [[Habitat]], [[Habitat Fragmentation]], [[Species Richness]], [[Habitat Generalist]], [[Habitat Specialist]], [[Mixed Effects Model]], [[Standard Deviation]], [[Rate Ratio]], [[Brood Parasitism]]
- **Leads to:** [[Grassland Core Habitat]], [[Area Sensitivity]], [[Random Intercept]], [[Spatial Covariance]], [[Spatial Autocorrelation]], [[Woody Encroachment]]
- **Part of:** [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]
- **Go deeper:** [[Grassland Specialists vs Generalists]], [[Why a random intercept for point]], [[Proposal Feedback from Dr Roberts]], [[Hypotheses]], [[Preliminary Results]], [[Brennan and Kuvlesky 2005]]

## Flashcards

What is an edge effect?::Any change in conditions caused by being near the border between two habitats.

Why might richness be higher at an edge point even if it is worse habitat for grassland specialists?
??
Edges mix two habitats, so species from both are detected. Richness counts all species equally, so it can rise while specialists decline.
++++

Does a random intercept for point test for edge effects?
??
No. It absorbs point-to-point differences but does not say why they exist. A per-point edge or spatial covariance variable is needed to test edges.
++++
