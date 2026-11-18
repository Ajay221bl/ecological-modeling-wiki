---
type: atomic
tags:
  - grassland-bird-ecology
  - habitat
  - landscape-ecology
  - flashcards
aliases:
  - "edge effect"
  - "edges"
status: seedling
---

# Edge Effects
**In one line:** Near the border where grassland meets something else (a tree line, a crop field, a road), conditions change, and birds nesting there often do worse.

> [!info] Before this, it helps to know
> [[Habitat Fragmentation]] (more pieces means more border) · [[Species Richness]] (edges can raise it misleadingly)

## Start from zero
Walk across a pasture toward a line of trees. In the middle, you see only grass and sky. As you get within a few dozen metres of the trees, things change: shade on the grass, a hawk watching from a branch, a raccoon trail coming out of the woods.

That border strip, where one habitat meets another, is an **edge**. An **edge effect** is any change that happens because you are near that border.

For a ground-nesting grassland bird, the edge is where the dangers from the other habitat leak in.

## Why it exists
Near an edge:
- **Predators reach in.** Animals that live in woods (raccoons, snakes, hawks perched in trees) hunt into the nearby grass.
- **Nest parasites find nests.** Brown-headed Cowbirds lay their eggs in other birds' nests, and they often watch from trees to find them.
- **Physical conditions change:** light, wind and plant structure.

Many grassland songbirds respond by avoiding edges, nesting farther from trees, or raising fewer young near them. So the **usable** area of a patch is smaller than its mapped area. This is the link from [[Habitat Fragmentation]] to bird numbers: small, irregular patches are a bigger share edge, leaving less [[Grassland Core Habitat]].

Not every species loses at an edge. Some, often generalists that use both habitats, are **more** common there. That can push total richness **up** at edges while grassland specialists decline, one reason [[Species Richness]] is an imperfect measure of grassland quality.

> [!warning] Verify
> The direction and distance of edge avoidance differ by species and region. Before stating a specific distance (for example "birds avoid trees within X m"), find it in a published source.

## A tiny example
Two points, same property:

| Point | Near trees? | Species recorded | Grassland specialists | Woodland or generalist |
|---|---|---|---|---|
| Middle of field | No | 5 | 4 | 1 |
| Beside tree line | Yes | 7 | 2 | 5 |

The edge point has **higher** richness but **fewer** grassland birds. Richness alone would rank it as "better".

## In my project
Edge effects are a reason to expect richness to vary **within** a property, not just between properties. Two points at the same site may differ because one is beside a tree line. My model handles that variation with a [[Random Intercept]] for PtNum: each point gets its own baseline richness, so point-to-point differences are not mistaken for site differences ([[Why a random intercept for point]]). But a random intercept only **absorbs** the variation; it does not **explain** it. To test edges, I need a per-point variable such as distance to woody edge or [[Spatial Covariance]], which Dr. Roberts suggested ([[Proposal Feedback from Dr Roberts]]). The final proposal (Oct 12) added these, and the Oct 13 models fit them ([[Hypotheses]], [[Analysis Plan]]). H2 predicted all-species richness higher at tree-grass edges and with more tree cover, and focal grassland richness lower there. The results ([[Preliminary Results]]):
- **All species:** about 7% more species per SD toward edges (spatial covariance rate ratio 0.93 at 65.61 ha), as predicted. But tree cover within 50 m had **no** clear effect (1.00), not the predicted rise.
- **Focal species:** about 45% fewer per SD more tree cover within 50 m (rate ratio 0.55), as predicted.

So edges add species in general while grassland specialists stay away from trees, the same pattern as the tiny example above.

Edges also suggest why richness can be "mixed": points near woods may pick up woodland or shrub species (for example Northern Cardinal or Indigo Bunting) that inflate richness without signalling good grassland. And because neighbouring points can share the same edge, edges are one reason nearby points may have similar richness ([[Spatial Autocorrelation]]).

## Common confusions
- **"Edge = the fence line only."** It is a zone, often tens of metres or more wide.
- **"Higher richness at edges means edges are good."** Good for some species, worse for grassland specialists.
- **"The random intercept tests edges."** It soaks up point differences; it does not say why.

## Connections
- **Builds on:** [[Habitat Fragmentation]], [[Woody Plant Encroachment]]
- **Leads to:** [[Grassland Core Habitat]], [[Spatial Autocorrelation]]
- **Part of:** [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]
- **Go deeper:** [[Brennan and Kuvlesky 2005]]

> [!question]- Check yourself
> Why might richness be higher at an edge point even if it is worse habitat for grassland specialists?
> ?
> Edges mix two habitats, so species from both are detected. Richness counts all species equally, so it can rise while specialists decline.
