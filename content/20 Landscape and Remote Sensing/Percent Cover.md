---
type: atomic
tags:
  - landscape-remote-sensing
  - flashcards/eco/landscape
description: "Percent cover is the share of the ground, seen from directly above, that is covered by a given kind of thing (grass, trees, water, corn), written as a percentage."
aliases:
  - "cover"
  - "vegetation cover"
  - "% cover"
  - "fractional cover"
  - "cover estimates"
status: seedling
---

# Percent Cover

Drop a handful of confetti on a sheet of paper and look straight down: maybe a quarter of the paper is hidden, so the confetti "covers 25%". Stand over a meadow and look straight down, and some ground is hidden by grass, some by wildflowers, some by a shrub, and some is bare soil. **Percent cover** is the answer to "what fraction of the ground does each thing hide?", usually by [[Plant Functional Groups]] (kinds of plant grouped by how they live, such as grasses or trees). It is the most common way ecologists describe vegetation because counting plants does not work for grass (where does one clump end?), weighing them means cutting them down, and cover is quick to estimate, easy to compare (70% grass means the same in Arkansas as in Montana) and tracks what animals care about: shelter, openness, shade.

Cover can be measured by eye in a plot ("about 40% grass"), which is fast but varies between people ([[Observer Effects]]); by points, dropping a pin at 100 spots and counting what it touches first (38 grass hits means about 38%); or from satellites, where a model reads each [[Pixels and Spatial Resolution|pixel's]] colours and predicts cover, as the [[Rangeland Analysis Platform]] does. Here is the arithmetic for one labelling method: divide a 50 m circle into 10 equal slices and note the main cover in each. Five slices are native grass (50%), two scrub (20%), two woodland (20%) and one water (10%). The total is 100% because each slice got one label. One subtlety: plants grow in layers, so a tree canopy can sit above grass. Counted layer by layer, tree cover 40% plus grass 80% adds to 120%; counting only what is seen first from above keeps the total at 100%. Always check which convention a dataset uses.

Three confusions. Cover is not amount of plant: a tall dense [[Grassland|prairie]] and a [[Mowing|mowed]] lawn can both be 100% grass, so height and density need other measures such as the [[Visual Obstruction (Robel Pole)]]. Cover values add to 100 only when each spot gets one label. And field and satellite cover need not match, since they differ in area, method and category definitions ([[Field vs Remote Vegetation Measures]]). In the grassland bird project cover appears at two scales. The habitat file records field cover classes within 50 m of each point (CG50 cool grass, CO50 corn, FO50 forest, GM50 grass mix, IA50 inactive agriculture, LA50 lawn, NG50 native grass, OF50 old field, RI50 rice, SC50 scrub, SO50 soybean, WA50 water, WD50 woodland), and the wrangling script builds `Tree50 = WD50 + FO50` and `Scrub50 = SC50` as [[Standardizing|standardized]] [[Predictor Variable|predictors]] ([[Analysis Plan]]); the table below shows what each property looks like. CR is the most wooded property, while about 42% of the ground near BK points is soybean or rice, so "open" at BK often means cropland, which is why BK's near-zero [[Spatial Covariance]] is not proof of grassland core ([[Study Sites]], [[Land-Use Change and Agriculture]]). The RAP v3.0 maps give per-pixel cover of perennial forbs and grasses (PFG) and trees (TRE) at 30 m, and because cover is in percent, covariance comes out in "percent squared", hence values like −934.5 ([[Moving Window Analysis]]). Whether the 50 m classes were forced to sum to 100% is not stated in the metadata; check before adding columns.

| Property | Top classes (mean % within 50 m of points) |
|---|---|
| BK Bald Knob NWR | soybean 23, rice 19, grass mix 17, cool grass 15, woodland 8 |
| CR Camp Robinson SUA | woodland 40, scrub 17, old field 15, native grass 14, forest 10 |
| DC Dark Corner (Cache River NWR) | woodland 22, forest 21, grass mix 13, native grass 13, old field 9 |
| HB Holla Bend NWR | forest 50, soybean 12, corn 10, native grass 10, grass mix 6 |
| HO Howell (Cache River NWR) | woodland 30, grass mix 18, scrub 13, cool grass 11, soybean 10 |

## Connections
- **Builds on:** [[Plant Functional Groups]], [[Pixels and Spatial Resolution]], [[Grassland]], [[Mowing]], [[Standardizing]]
- **Leads to:** [[Rangeland Analysis Platform]], [[Observer Effects]], [[Visual Obstruction (Robel Pole)]], [[Field vs Remote Vegetation Measures]], [[Predictor Variable]], [[Spatial Covariance]], [[Moving Window Analysis]]
- **Part of:** [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
- **Go deeper:** [[Land-Use Change and Agriculture]], [[Study Sites]], [[Analysis Plan]], [[Why negative spatial covariance marks a tree-grass boundary]], [[Roberts et al. 2025]]

## Flashcards

Tree cover is 40% and grass cover is 80% at the same spot. Is the data wrong?
??
Not necessarily. If layers are counted separately, grass can grow under the tree canopy, so the two can add to more than 100%. It is only wrong if the dataset counts one cover per spot.
++++

Can a mowed lawn and a tall prairie have the same percent cover?::Yes, both can be 100% grass cover; cover says nothing about height or density.
