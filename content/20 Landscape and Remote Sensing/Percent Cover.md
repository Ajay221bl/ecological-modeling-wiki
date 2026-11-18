---
type: atomic
tags: [landscape-remote-sensing, flashcards]
aliases: ["cover", "vegetation cover", "% cover", "fractional cover", "canopy cover", "cover estimates"]
status: seedling
---

# Percent Cover
**In one line:** The share of the ground, seen from directly above, that is covered by a given kind of thing (grass, trees, water, corn), written as a percentage.

> [!info] Before this, it helps to know
> [[Plant Functional Groups]] (the kinds of plants we measure cover of) · [[Pixels and Spatial Resolution]] (cover is often estimated per pixel)

## Start from zero
Hold a sheet of paper flat and drop a handful of confetti on it. Look straight down. Maybe a quarter of the paper is hidden. The confetti "covers 25%".

Now stand over a meadow and look straight down. Some ground is hidden by grass leaves, some by wildflowers, some by a shrub, some is bare soil. **Percent cover** is the answer to "what fraction of the ground does each thing hide?"

It is the most common way ecologists describe vegetation, because it is quick to estimate and easy to compare: 70% grass cover means the same thing in Arkansas as in Montana.

## Why it exists
Counting plants does not work for grass: where does one clump end? Weighing plants means cutting them down. Cover avoids both problems. It also tracks what matters to many animals: how much shelter there is, how open the ground is, how much shade a tree throws.

Cover can be measured in several ways:
- **By eye** in a plot ("about 40% grass"). Fast, but people differ ([[Observer Effects]]).
- **By points:** drop a pin at 100 spots and record what it touches first; 38 grass hits means about 38% grass.
- **From satellites:** a model reads each pixel's colours and predicts cover, as the [[Rangeland Analysis Platform]] does.

One subtlety: plants grow in **layers**. A tree canopy can sit above grass. If you count each layer separately, tree cover 40% plus grass cover 80% adds to 120%. If you only count what is seen first from above, the total stays at 100%. Always check which convention a dataset uses.

## A tiny example
A 50 m radius circle is divided into 10 equal slices. Looking down, you note the main cover in each:

| Cover | Slices | Percent |
|---|---|---|
| Native grass | 5 | 50% |
| Scrub | 2 | 20% |
| Woodland | 2 | 20% |
| Water | 1 | 10% |

Total 100%, because each slice got one label. A combined "tree" value would be woodland only here, 20%.

## In my project
Percent cover appears twice, at two scales ([[Field vs Remote Vegetation Measures]]):

**Field cover within 50 m of each point** (habitat file FieldVeg50m_RemoteVeg_JUNMASK_forDataRelease.csv): CG50 cool grass, CO50 corn, FO50 forest, GM50 grass mix, IA50 inactive agriculture, LA50 lawn, NG50 native/warm-season grass, OF50 old field, RI50 rice, SC50 scrub, SO50 soybean, WA50 water, WD50 woodland. These are land-cover classes, so they behave like the slice example. The wrangling script (Oct 13) builds tree cover `Tree50 = WD50 + FO50` and scrub cover `Scrub50 = SC50`, and the models use them as standardized predictors ([[Analysis Plan]]).

**What each property looks like** (mean % within 50 m of the points, top five classes, from the habitat file):

| Property | Top classes (mean % within 50 m) |
|---|---|
| BK Bald Knob NWR | soybean 23, rice 19, grass mix 17, cool grass 15, woodland 8 |
| CR Camp Robinson SUA | woodland 40, scrub 17, old field 15, native grass 14, forest 10 |
| DC Dark Corner (Cache River NWR) | woodland 22, forest 21, grass mix 13, native grass 13, old field 9 |
| HB Holla Bend NWR | forest 50, soybean 12, corn 10, native grass 10, grass mix 6 |
| HO Howell (Cache River NWR) | woodland 30, grass mix 18, scrub 13, cool grass 11, soybean 10 |

Two things stand out. CR is the most wooded property (woodland 40 plus forest 10). BK is the least wooded, but about 42% of the ground near its points is soybean or rice, so "open" at BK often means cropland, not grassland. This table is the reason not to read BK's near-zero [[Spatial Covariance]] as proof of grassland core ([[Why negative spatial covariance marks a tree-grass boundary]], [[Study Sites]]).

The other field measures in that file (Robel pole height, stem density, tree diameter) were mostly not collected at roadside points, so they are missing at 112 to 224 of the 416 points and are not used in the models ([[Field vs Remote Vegetation Measures]]).

**Remote cover from RAP v3.0**: per-pixel percent cover of perennial forbs and grasses (PFG) and trees (TRE) at 30 m. [[Spatial Covariance]] is computed from how these two cover maps vary together inside a window ([[Moving Window Analysis]]). Because cover is in percent, covariance comes out in "percent squared", which is why values like -934.5 appear in the 3x3 column.

> [!warning] Verify
> Whether the 50 m field cover classes were forced to sum to 100% at each point, and whether RAP's group covers can sum past 100% (layered canopy), are not stated in the metadata. Check before adding or comparing columns.

## Common confusions
- **"Cover = amount of plant."** A tall dense prairie and a short mowed lawn can both be 100% grass cover. Height and density need other measures, such as the [[Visual Obstruction (Robel Pole)]].
- **"Cover values always add to 100."** Only when each spot gets one label.
- **"Field and satellite cover should match."** They differ in area (50 m circle versus 30 m pixels), method (eye versus model) and category definitions.

## Connections
- **Builds on:** [[Plant Functional Groups]], [[Pixels and Spatial Resolution]], [[Variable and Observation]]
- **Leads to:** [[Spatial Covariance]], [[Rangeland Analysis Platform]], [[Field vs Remote Vegetation Measures]], [[Predictor Variable]], [[Land-Use Change and Agriculture]]
- **Part of:** [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
- **Go deeper:** [[Roberts et al. 2025]] (column definitions)

> [!question]- Check yourself
> Tree cover is 40% and grass cover is 80% at the same spot. Is the data wrong?
> ?
> Not necessarily. If layers are counted separately, grass can grow under the tree canopy, so the two can add to more than 100%. It is only wrong if the dataset counts one cover per spot.
