---
type: atomic
tags: [landscape-remote-sensing, flashcards]
aliases: ["functional group", "functional groups", "plant functional types", "PFG", "TRE", "forb", "forbs", "perennial forbs and grasses"]
status: seedling
---

# Plant Functional Groups
**In one line:** Sorting plants by *how they grow and what they do* (grass, wildflower, shrub, tree; living one year or many) instead of by species name.

> [!info] Before this, it helps to know
> [[Species and Scientific Names]] (the usual way to sort living things) · [[Grassland]] (where grasses and forbs dominate)

## Start from zero
Walk through a meadow with a friend who knows no plant names. They can still sort what they see:
- **Grasses**: thin leaves with parallel veins, hollow jointed stems.
- **Forbs**: soft-stemmed, broad-leaved plants that are not grasses. Most "wildflowers" (coneflowers, goldenrods, clovers) are forbs.
- **Shrubs**: woody, several stems, usually below about head height to a few metres.
- **Trees**: woody, usually one main trunk, tall.

They can also sort by lifespan:
- **Annuals** grow from seed, flower and die within one year.
- **Perennials** live for many years, often regrowing each spring from roots.

These bins are **functional groups**. Plants in the same group tend to behave alike: in how tall they grow, how they respond to fire, how much shade they cast, how they look from a satellite.

## Why it exists
A prairie can hold over a hundred plant species. Many studies, and all satellites, cannot tell them apart. But most ecological questions do not need species names:
- Will this site carry a fire? Depends on how much grass fuel there is.
- Is the grassland turning into woods? Depends on how much tree and shrub cover there is ([[Woody Plant Encroachment]]).
- Can a ground-nesting bird hide here? Depends on grass and forb structure.

Functional groups trade detail for usefulness. They capture what matters for **processes** such as [[Disturbance]] and [[Ecological Succession]], and they can be mapped from space.

One more split you will meet: **cool-season** grasses grow mainly in spring and autumn (many are non-native pasture grasses like tall fescue), while **warm-season** grasses grow in summer heat (the native tallgrass prairie grasses such as big bluestem and switchgrass). Grassland bird managers often favour warm-season natives.

## A tiny example
Eight plants in a 1 m² plot:

| Plant | Group |
|---|---|
| Big bluestem | perennial grass |
| Switchgrass | perennial grass |
| Purple coneflower | perennial forb |
| Ragweed | annual forb |
| Crabgrass | annual grass |
| Blackberry | shrub |
| Sweetgum seedling | tree |
| Goldenrod | perennial forb |

RAP-style groups would put 4 of these (bluestem, switchgrass, coneflower, goldenrod) into "perennial forbs and grasses", 2 into "annual forbs and grasses", 1 into shrub and 1 into tree. Eight species become four groups.

## In my project
The [[Rangeland Analysis Platform]] v3.0 maps [[Percent Cover]] for six groups: annual forbs and grasses (AFG), perennial forbs and grasses (PFG), shrubs (SHR), trees (TRE), litter (LTR) and bare ground (BGR). Litter is dead plant material lying on the ground.

[[Spatial Covariance]] in [[Berry et al. 2026]] uses two of them: **PFG** (the long-lived grassland plants that make a meadow a meadow) and **TRE**. That is why the habitat columns are named 30m_PFG_TRE_3W_22 and so on. A strongly negative value means PFG and TRE are spatially separated inside the window, which marks a tree-grass boundary ([[Why negative spatial covariance marks a tree-grass boundary]]).

The field data use a different, land-cover style grouping within 50 m: cool grass (CG50), native/warm-season grass (NG50), grass mix (GM50), scrub (SC50), woodland (WD50), forest (FO50), plus crops, water and lawn ([[Field vs Remote Vegetation Measures]]).

## Common confusions
- **"Forb means weed."** A forb is any non-grass herb. Many are native wildflowers that pollinators and grassland birds depend on.
- **"Grass-like plants are grasses."** Sedges and rushes look grassy but belong to different plant families. Whether a dataset counts them as "grass" depends on its definitions, so check.
- **"Shrub versus tree is a fixed line."** It is a convention about height and stem form. A young tree can look like a shrub.

## Connections
- **Builds on:** [[Species and Scientific Names]], [[Grassland]], [[Ecological Community]]
- **Leads to:** [[Percent Cover]], [[Rangeland Analysis Platform]], [[Spatial Covariance]], [[Woody Plant Encroachment]]
- **Part of:** [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
- **Go deeper:** [[Roberts et al. 2025]] (which groups were used)

> [!question]- Check yourself
> What do the letters PFG and TRE in the column 30m_PFG_TRE_9W_22 stand for, and why those two?
> ?
> Perennial forbs and grasses, and trees. They are the two groups whose meeting line is a grassland-forest boundary, which is what the spatial covariance metric is designed to find.
