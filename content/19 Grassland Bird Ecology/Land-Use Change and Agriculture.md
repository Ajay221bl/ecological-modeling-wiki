---
type: atomic
tags:
  - grassland-bird-ecology
  - conservation
  - landscape-ecology
  - flashcards
aliases:
  - "land-use change"
  - "land use change"
  - "land use"
  - "agriculture"
  - "row-crop agriculture"
  - "row crops"
status: seedling
---

# Land-Use Change and Agriculture
**In one line:** Land-use change is people turning land from one use to another (prairie to cropland, pasture to houses, field to plantation); in North America it is the biggest single reason grasslands and their birds have shrunk.

> [!info] Before this, it helps to know
> [[Grassland]] (what was lost) · [[Habitat Fragmentation]] (what happens to what is left) · [[Patch, Matrix and Corridor]] (the patches and the "sea" around them)

## Start from zero
Fly over Iowa in summer and you see a checkerboard of corn and soybean fields to the horizon. Almost all of it was once tallgrass prairie.

Two words help here:
- **Land cover** is what is physically on the ground: grass, trees, water, bare soil, crops.
- **Land use** is what people do with it: cropland, pasture, hayfield, lawn, wildlife refuge, military training ground.

The same grass cover can be a pasture, a lawn or a refuge. To a grassland bird, those are very different places.

## Why it exists
It reaches birds in four ways.

1. **Outright loss.** Prairie ploughed into crops, or built over, is gone as nesting habitat. Most of the original tallgrass prairie has been converted.
2. **Fragmentation.** What remains is broken into small patches set in a "matrix" of crops, towns or forest ([[Habitat Fragmentation]], [[Patch, Matrix and Corridor]]). Small patches are mostly edge ([[Edge Effects]]), and some species avoid small patches altogether ([[Area Sensitivity]]).
3. **Intensification.** Even farmland that stays farmland has changed: hedgerows removed, fields farmed edge to edge, hay cut earlier and more often ([[Mowing]]), insecticides that cut the insect food chicks need, and native grass swapped for non-native pasture grasses such as tall fescue.
4. **Abandonment.** In the humid Southeast, farms that are abandoned do not stay open. They go through [[Ecological Succession]] to forest, so grassland is lost from the other side too.

Not all change is loss. Programs that pay farmers to plant grass on cropland, such as the US Conservation Reserve Program, have given some grassland birds, including the [[Dickcissel]], new places to nest.

> [!warning] Verify
> A commonly cited figure is that less than about 4% of the original North American tallgrass prairie remains. Check the number and its source before quoting it.

## A tiny example
A made-up 1,000 ha landscape. Assume birds avoid a 50 m band along every edge.

| | Grassland | Layout | Core area |
|---|---|---|---|
| Then | 600 ha | 1 square block, about 2,449 m on a side | (2,449 - 100)² ≈ 5,520,000 m² = **552 ha** |
| Now | 200 ha | 4 square blocks of 50 ha, each about 707 m on a side | 4 × (707 - 100)² ≈ 4 × 368,000 m² = **147 ha** |

Grass area fell by 67%. Core area fell by (552 - 147) / 552 ≈ **73%**. Breaking up what remains makes the loss worse than the area alone suggests ([[Grassland Core Habitat]]).

## In my project
The metadata ([[Roberts et al. 2025]]) describes every site as "patchy remnant grasslands interspersed within a forested or agricultural matrix." The study area spans two ecoregions, the [[Arkansas River Valley]] and the [[Mississippi Alluvial Valley]]. The Mississippi Alluvial Valley was once mostly bottomland hardwood forest and swamp and is now largely cleared for row crops such as soybean, rice, corn and cotton.

The habitat file records land use within 50 m of each point: `CO50` corn, `SO50` soybean, `RI50` rice, `IA50` inactive agriculture, `OF50` old field, `LA50` lawn.

The habitat file confirms how much farmland sits near the points ([[Percent Cover]] has the full table). Around BK points, soybean (23%) and rice (19%) are the two largest classes, about 42% together. HB has soybean 12% and corn 10%, and HO soybean 10%. CR has almost none in its top classes. Which site sits in which ecoregion is discussed in [[Ecoregions]], and per-site management in [[Study Sites]].

A puzzle worth noting: BK has the **lowest** all-species richness (mean 4.73 species per point-visit on the 376 model points) but the **most** Dickcissel point-visits (158) and Eastern Meadowlark point-visits (73), and the highest focal-species mean (0.99). Perhaps big open farm-and-grass landscapes have few of the edge generalists that pad out richness elsewhere ([[Grassland Specialists vs Generalists]], [[Why all-species and focal-species richness can disagree]]). Dickcissels and meadowlarks use such farm mosaics, so BK's high focal score does not make it intact grassland. BK is one site tied to one year, so this is an idea, not a result ([[Confounding]]).

## Common confusions
- **"Land cover = land use."** Grass cover can be a lawn, a hayfield or a prairie.
- **"Any grass helps grassland birds."** Mown lawns and dense fescue serve few specialists.
- **"Agriculture only destroys habitat."** Some farmland and set-aside grass is used heavily by birds like the Dickcissel.

## Connections
- **Builds on:** [[Grassland]], [[Habitat Fragmentation]], [[Patch, Matrix and Corridor]]
- **Leads to:** [[Grassland Bird Decline]], [[Grassland Restoration and Management]], [[Edge Effects]]
- **Part of:** [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]
- **Go deeper:** [[Brennan and Kuvlesky 2005]] (habitat loss and land-use change as main causes of decline), [[Rosenberg et al. 2019]] (habitat loss as a leading suspected driver of continent-wide losses)

> [!question]- Check yourself
> A landscape loses two-thirds of its grassland area. Why can its core grassland drop by even more than two-thirds?
> ?
> If the remaining grass is also broken into smaller patches, each patch has a lot of edge for its size. The edge bands eat up a bigger share of each small patch, so core area falls faster than total area.
