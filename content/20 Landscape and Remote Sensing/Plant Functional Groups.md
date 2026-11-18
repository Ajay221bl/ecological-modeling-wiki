---
type: atomic
tags:
  - landscape-remote-sensing
  - flashcards/eco/landscape
description: "Plant functional groups sort plants by how they grow and what they do (grass, forb, shrub, tree; annual or perennial) instead of by species name."
aliases:
  - "functional group"
  - "functional groups"
  - "plant functional types"
  - "PFG"
  - "TRE"
  - "forb"
  - "forbs"
  - "perennial forbs and grasses"
status: seedling
---

# Plant Functional Groups

Walk through a meadow with a friend who knows no plant names: they can still sort what they see. *Grasses* have thin leaves with parallel veins and hollow jointed stems. *Forbs* are soft-stemmed, broad-leaved plants that are not grasses; most "wildflowers", such as coneflowers, goldenrods and clovers, are forbs. *Shrubs* are woody with several stems, from knee height to a few metres; *trees* are woody, usually with one main trunk, and tall. Your friend can also sort by lifespan: *annuals* grow from seed, flower and die within one year, while *perennials* live for many years, often regrowing each spring from roots. These bins are **plant functional groups**: plants sorted by how they grow and what they do rather than by [[Species and Scientific Names|species name]]. Plants in the same group tend to behave alike in height, response to fire, shade and how they look from a satellite.

Why give up species names? A prairie can hold over a hundred plant species, and many studies, and all satellites, cannot tell them apart. But most ecological questions don't need names. Will this site carry a fire? That depends on how much grass fuel there is. Is the grassland turning into woods? That depends on tree and shrub cover ([[Woody Encroachment]]). Can a ground-nesting bird hide here? That depends on grass and forb structure. Functional groups trade detail for usefulness. They capture what matters for processes such as [[Disturbance]] and [[Ecological Succession]], and they can be mapped from space. Try eight plants in a 1 m² plot: big bluestem, switchgrass, purple coneflower, ragweed, crabgrass, blackberry, a sweetgum seedling and goldenrod. In the groups the [[Rangeland Analysis Platform]] uses, four (bluestem, switchgrass, coneflower, goldenrod) are perennial forbs and grasses, two (ragweed, crabgrass) are annual forbs and grasses, blackberry is a shrub and sweetgum a tree. Eight species become four groups. One more split you will meet: *cool-season* grasses grow mainly in spring and autumn (many are non-native pasture grasses like tall fescue), while *warm-season* grasses grow in summer heat (the native tallgrass prairie grasses). Grassland bird managers often favour warm-season natives.

Three confusions. A forb is not a weed: it is any non-grass herb, and many are native wildflowers that pollinators and birds depend on. Grass-like plants are not always grasses: sedges and rushes belong to other families, so check how a dataset counts them. And the shrub-tree line is a convention about height and stem form, since a young tree can look like a shrub. RAP v3.0 maps [[Percent Cover]] for six groups: annual forbs and grasses (AFG), perennial forbs and grasses (PFG), shrubs (SHR), trees (TRE), litter (LTR, dead plant material on the ground) and bare ground (BGR). The [[Spatial Covariance]] in [[Berry et al. 2026]] uses PFG, the long-lived plants that make a meadow a meadow, and TRE, which is why the habitat columns are named 30m_PFG_TRE_3W_22 and so on. A strongly negative value means the two are separated inside the window, marking a tree-grass boundary ([[Why negative spatial covariance marks a tree-grass boundary]]). The field data use a land-cover-style grouping within 50 m instead (cool grass, native grass, grass mix, scrub, woodland, forest, plus crops, water and lawn; [[Field vs Remote Vegetation Measures]]). A [[Grassland]] is defined by its dominant groups, and the groups together make up its plant [[Ecological Community]].

## Connections
- **Builds on:** [[Species and Scientific Names]], [[Grassland]], [[Ecological Community]]
- **Leads to:** [[Woody Encroachment]], [[Disturbance]], [[Ecological Succession]], [[Rangeland Analysis Platform]], [[Percent Cover]], [[Spatial Covariance]]
- **Part of:** [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
- **Go deeper:** [[Why negative spatial covariance marks a tree-grass boundary]], [[Field vs Remote Vegetation Measures]], [[Berry et al. 2026]], [[Roberts et al. 2025]]

## Flashcards

What is a forb?::A soft-stemmed, broad-leaved plant that is not a grass; most wildflowers are forbs.

What do PFG and TRE in the column 30m_PFG_TRE_9W_22 stand for, and why those two?
??
Perennial forbs and grasses, and trees. They are the two groups whose meeting line is a grassland-forest boundary, which is what the spatial covariance metric is designed to find.
++++
