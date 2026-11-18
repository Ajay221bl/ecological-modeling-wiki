---
type: atomic
tags:
  - grassland-bird-ecology
  - landscape-ecology
  - flashcards
aliases:
  - "area-sensitive"
  - "area-sensitive species"
  - "area sensitive"
  - "patch size sensitivity"
status: seedling
---

# Area Sensitivity
**In one line:** Some species turn up only in **large** patches of habitat, even when a small patch looks just as good up close and is bigger than one territory.

> [!info] Before this, it helps to know
> [[Habitat Fragmentation]] (big habitat broken into pieces) · [[Edge Effects]] (borders change conditions) · [[Patch, Matrix and Corridor]] (the words for pieces of a landscape)

## Start from zero
Picture two hayfields with the same grass. One is 100 hectares. The other is 2 hectares, a square about 140 m on a side, surrounded by woods. A grassland sparrow's territory might need only about 1 hectare. By simple arithmetic, the small field has room for two pairs.

Yet surveys often find the sparrow in the big field and **never** in the small one. That species is **area-sensitive**: the chance of finding it, or its density, rises with the size of the patch, beyond what territory size alone would explain.

A classic grassland example is Henslow's Sparrow, which is usually found only in large, open grasslands. Grasshopper Sparrow and Upland Sandpiper are often described the same way.

## Why it exists
Why would a bird reject a patch that is "big enough"? Several reasons, often working together:

1. **Edges eat the middle.** Near the border, predators and nest parasites from the woods reach in ([[Edge Effects]]). In a small patch, almost everything is near a border.
2. **Birds attract birds.** Many songbirds settle near others of their kind. A lone patch with no singing neighbours looks empty, so newcomers pass it by.
3. **Trees are a warning.** Many grassland birds treat a visible tree line as a sign of danger and stay well back from it ([[Why grassland birds avoid trees]]).

The result: what matters is not the mapped size of a patch but its **core**, the part far enough from edges ([[Grassland Core Habitat]]).

> [!warning] Verify
> How strongly a given species is area-sensitive varies by region and study. Do not quote a minimum patch size for any species without a source.

## A tiny example
Square grassland patches, and suppose birds avoid the outer 50 m next to woods:

| Side of patch | Total area | Core (side minus 100 m) | Core area | Share that is core |
|---|---|---|---|---|
| 100 m | 1 ha | 0 m | 0 ha | 0% |
| 200 m | 4 ha | 100 m | 1 ha | 25% |
| 400 m | 16 ha | 300 m | 9 ha | 56% |
| 800 m | 64 ha | 700 m | 49 ha | 77% |

(1 ha = 10,000 m², so a 100 m x 100 m square is 1 ha.) Quadrupling the area from 4 to 16 ha multiplies the core by **nine**, from 1 to 9 ha. Small patches lose out much more than their size suggests. That is area sensitivity from edges alone.

## In my project
All five sites are patchy remnant grasslands set in a forested or agricultural **matrix** ([[Patch, Matrix and Corridor]], [[Study Sites]]). So by the usual rule, this is a hard place for area-sensitive birds. Henslow's Sparrow is not among the six [[Focal Species]].

[[Spatial Covariance]] gets at area sensitivity from a different angle. Instead of measuring a whole patch, it asks, within a square window around each point, whether grass and trees are mixed or separated. The study used three window sizes, set by the [[Pixels and Spatial Resolution|30 m pixels]] of the [[Rangeland Analysis Platform]]:

| Window | Side | Area |
|---|---|---|
| 3x3 pixels | 90 m | 90 x 90 = 8,100 m² = 0.81 ha |
| 9x9 pixels | 270 m | 7.29 ha |
| 27x27 pixels | 810 m | 65.61 ha |

The data release abstract says the smallest scale (0.81 ha) best explained grassland bird occupancy ([[Roberts et al. 2025]]). That result fits the paper's title, "Finding the (small) cores". In a fragmented landscape, even small cores seem to matter to these birds ([[Why the window size is a choice of scale]], [[Defend the Core]]).

## Common confusions
- **"Area-sensitive = big territory."** A species can have a small territory and still avoid small patches.
- **"Bigger patch = more birds, end of story."** Shape matters too: a long thin patch of 16 ha has far less core than a 16 ha square.
- **"The best window size is the area a bird needs."** It is the scale at which the habitat measure best predicts occupancy, which is related but not the same.

## Connections
- **Builds on:** [[Habitat Fragmentation]], [[Edge Effects]], [[Spatial Scale (Grain and Extent)]]
- **Leads to:** [[Grassland Core Habitat]], [[Defend the Core]], [[Why the window size is a choice of scale]]
- **Part of:** [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]
- **Go deeper:** [[Berry et al. 2026]], [[Roberts et al. 2025]]

> [!question]- Check yourself
> If birds avoid the outer 50 m of a patch, why does a 4 ha square hold only 1 ha of usable habitat?
> ?
> A 4 ha square is 200 m on a side. Removing 50 m from each side leaves a 100 m square in the middle, which is 1 ha. Three quarters of the patch is edge.
