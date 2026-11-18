---
type: atomic
tags:
  - survey-design
  - field-methods
  - vegetation
  - flashcards
aliases:
  - "DBH"
  - "diameter at breast height"
  - "tree density"
  - "DENS_101"
  - "DBH_AVG"
status: seedling
---

# Tree Density and DBH
**In one line:** Two field measures of woody plants around a point: how close the trees are (a stand-in for how many there are) and how thick their trunks are (a stand-in for how big and old they are).

> [!info] Before this, it helps to know
> [[Woody Plant Encroachment]] (why trees in grassland matter) · [[Average (Mean)]] (both are averages)

## Start from zero
Stand in a field and look for the nearest tree. If it is 5 m away, you are among trees. If the nearest one is 80 m away, you are in the open. **Distance to the nearest trees** is an easy way to judge how crowded with trees a place is, without counting every tree on a hectare.

Now walk to that tree and wrap a tape around its trunk at chest height. A thin sapling might be 4 cm across. An old oak might be over a metre. This is **DBH, diameter at breast height**. In the US "breast height" is 1.37 m (4.5 feet) above the ground. Measuring at a fixed height makes trees comparable, because trunks flare at the base.

## Why it exists
"How much tree is here?" has two parts.
- **How many trees.** Ten saplings and one oak are very different.
- **How big they are.** Size tells you how long trees have been there, and how hard they are to remove.

That second part matters for management. Small saplings with thin bark are killed by a grass fire. Large trees with thick bark usually survive it. So a point with many small-DBH trees is in **early** encroachment, still fixable with [[Prescribed Fire]]. A point with large-DBH trees has crossed into woodland, and getting it back needs saws and money ([[Why trees take over grasslands without fire]], [[Ecological Resilience and Alternative States]]).

Foresters often turn tree distances into density with a rule like "trees per hectare is about 10,000 divided by the mean distance squared". This is a rough approximation from the point-centred quarter method, which assumes trees are scattered randomly.

## A tiny example
Distances from a point to the nearest tree in each of four directions, with the 100 m search limit:

| Direction | Distance found |
|---|---|
| NE | 10 m |
| SE | 20 m |
| SW | none within 100 m |
| NW | 14 m |

Two ways to average:
- **Cap the missing one at 101 m:** (10 + 20 + 101 + 14) / 4 = 36.25 m.
- **Leave it out:** (10 + 20 + 14) / 3 = 14.7 m.

The capped average says "fairly open on one side". The second sounds like dense woods. Neither is wrong; they answer slightly different questions. If no tree is found in any direction, the "leave it out" version has nothing to average and becomes NA, while the capped version is simply 101.

## In my project
The habitat file has three tree columns ([[Roberts et al. 2025]]):
- `DENS_101`: average distance from point centre to trees, with trees beyond 100 m **set to 101 m**. Present at **304 of 416 points**; median **15.6 m** ([[Spread and Variability]] covers why a median is useful when values are capped).
- `DENS_NO101`: the same, but trees beyond 100 m are **excluded**.
- `DBH_AVG`: average tree diameter at breast height, from **3.81 to 207 cm**, present at **192 points**.

Larger `DENS_101` means **fewer** trees nearby. That direction is easy to flip by accident when reading a coefficient.

> [!warning] Verify
> The metadata does not say how many trees were measured per point or whether the point-centred quarter method was used. The minimum DBH of 3.81 cm is exactly 1.5 inches, which hints at a size cut-off measured in inches. Confirm both with Dr. Roberts before turning distances into trees per hectare.

My models (proposal Oct 12, fit Oct 13) use field **cover** instead (Tree50 = woodland + forest cover within 50 m, from `WD50 + FO50`), plus [[Spatial Covariance]]. Tree distance and DBH have more missing values, mostly at roadside points ([[Field vs Remote Vegetation Measures]]).

## Common confusions
- **"DENS means density, so bigger is more trees."** Here it is a distance, so bigger means fewer trees.
- **"101 m is a real measurement."** It is a placeholder for "more than 100 m". It is a floor, not a value.
- **"DBH is the tree's height."** It is trunk thickness. Thickness tracks age and size, not height exactly.
- **"Missing DBH means no trees."** It may mean not measured. Check before treating NA as zero.

## Connections
- **Builds on:** [[Woody Plant Encroachment]], [[Average (Mean)]], [[Spread and Variability]]
- **Leads to:** [[Field vs Remote Vegetation Measures]], [[Prescribed Fire]], [[Defend the Core]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]
- **Go deeper:** [[Roberts et al. 2025]] (the habitat file's data dictionary)

> [!question]- Check yourself
> Point A has DENS_101 = 90 and point B has DENS_101 = 8. Which point has more trees nearby, and why might DBH also matter?
> ?
> Point B: its trees are on average only 8 m away. DBH tells you whether those trees are small saplings that fire can still kill or large established trees that would need cutting.
