---
type: atomic
tags: [landscape-remote-sensing, flashcards]
aliases: ["habitat patch", "habitat patches", "patches", "landscape matrix", "corridors", "wildlife corridor", "patch-matrix-corridor model"]
status: seedling
---

# Patch, Matrix and Corridor
**In one line:** Three words for the pieces of a landscape: **patches** are the islands of one kind of cover, the **matrix** is the "sea" that surrounds them, and **corridors** are strips that connect them.

> [!info] Before this, it helps to know
> [[Landscape Ecology]] (why the arrangement of land matters) · [[Habitat]] (what a species needs)

## Start from zero
Picture a farm map. There is a big spread of soybean fields. Inside it sits a small meadow, a woodlot, and a farm pond. A line of trees runs along a creek from the woodlot to a forest on the far side.

- The meadow, the woodlot and the pond are **patches**: fairly uniform areas that differ from what is around them.
- The soybean fields are the **matrix**: the most widespread, most connected cover type, the background everything else sits in.
- The line of creek trees is a **corridor**: a strip that links patches and lets some animals, seeds or water move between them.

This simple picture is often called the patch-matrix-corridor model. Ecologists use it because it turns a messy map into three questions: how big and how far apart are the patches, how hostile is the matrix, and what do corridors connect?

## Why it exists
A species does not experience "the landscape". It experiences *its* habitat as patches and everything else as matrix. That matters because:
- **Patch size:** small patches hold fewer individuals and lose more of their area to edge ([[Edge Effects]], [[Area Sensitivity]]).
- **Isolation:** a patch far from others is hard to recolonise if its birds disappear one year.
- **Matrix quality:** a meadow surrounded by pasture is less isolated, for a grassland bird, than one surrounded by forest. The matrix can be a gentle sea or a hostile one.
- **Corridors cut both ways:** a hedgerow can help a woodland bird move, yet for a grassland bird the same hedgerow is a line of trees splitting its meadow, and a perch for predators.

That last point is important: **whether something is a patch, matrix or corridor depends on which species is asking.** A forest block is habitat (a patch) for a woodpecker and hostile matrix for a [[Dickcissel]].

## A tiny example
A 10 x 10 grid of land cells:

| Cover | Cells | Role for a grassland bird |
|---|---|---|
| Forest | 60 | matrix (hostile) |
| Grassland in 3 blobs | 30 | habitat patches |
| Crop field | 8 | matrix (less hostile) |
| Tree line linking two blobs | 2 | corridor for woodland birds, barrier for grassland birds |

Forest covers 60 of 100 cells, so it is the matrix. Now flip the species to a woodland warbler: the forest becomes its habitat, and the grass blobs become gaps in its world. Same map, different reading.

## In my project
The data release describes every site as "patchy remnant grasslands interspersed within a forested or agricultural matrix" ([[Roberts et al. 2025]]). So in this study:
- Grassland pieces are the **patches** the six [[Focal Species]] need.
- Forest (and in places row crops) is the **matrix** they live surrounded by.
- Wooded strips along ditches and fence lines act as barriers inside patches, creating the tree-grass boundaries that [[Spatial Covariance]] detects as negative values.

[[Berry et al. 2026]] asked whether birds sit in the "cores" of those patches, away from the forest matrix ([[Grassland Core Habitat]]). The field data also record what cover lies within 50 m of each point, such as woodland (WD50), forest (FO50) and scrub (SC50), which is a close-up look at how much matrix intrudes on a point ([[Percent Cover]]).

## Common confusions
- **"The matrix is empty space."** It is real land with real effects: it can feed predators, shade edges, or supply tree seeds that invade the patches ([[Woody Plant Encroachment]]).
- **"Corridors are always good."** They help species that use them and can harm species they cut through.
- **"Patch means grassland."** A patch is whatever cover you are focusing on. Choose the species first, then label the map.

## Connections
- **Builds on:** [[Landscape Ecology]], [[Habitat]]
- **Leads to:** [[Habitat Fragmentation]], [[Edge Effects]], [[Grassland Core Habitat]], [[Spatial Covariance]]
- **Part of:** [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
- **Go deeper:** [[Roberts et al. 2025]] (site descriptions)

> [!question]- Check yourself
> Is a strip of trees along a creek a corridor or a barrier?
> ?
> It depends on the species. For a woodland bird it can be a corridor linking forest patches; for a grassland bird it is a line of trees cutting through its habitat and a perch for predators.
