---
type: atomic
tags:
  - landscape-remote-sensing
  - flashcards/eco/landscape
description: "Flood masking is blanking out the map pixels that were usually under water, so that later calculations only use land the method can actually read."
aliases:
  - "flood mask"
  - "masking"
  - "mask"
  - "Dynamic World"
  - "JUNMASK"
status: seedling
---

# Flood Masking

When you paint a window frame you put masking tape over the glass: paint goes everywhere else and the glass stays clean. In map work a *mask* is the same idea, a layer that says "skip these [[Pixels and Spatial Resolution|pixels]]" (the small squares a satellite map is made of). Masked pixels become NA, R's code for "no value", and are left out of every later calculation ([[Missing Values]]). **Flood masking** blanks out the pixels that were usually under water. Picture an Arkansas refuge in June: low fields still hold spring floodwater or are flooded on purpose for ducks, and from a satellite a flooded grassland does not look like grassland at all ([[Remote Sensing]]).

Why mask? The [[Spatial Covariance]] method reads grass and tree cover maps from the [[Rangeland Analysis Platform]], which was built for dry [[Rangeland Health|rangeland]]. Standing water breaks the link between colours and plant cover, so a flooded meadow next to a woodlot could produce a strong negative value and be read as a tree-grass boundary, a [[Type I Error|false alarm]]. The data release states the worry: sites "were often partially flooded into early summer", with "the potential for standing water to interfere with [[Regime Shift|regime shift]] signals" ([[Roberts et al. 2025]]; [[Regime Shifts and Spatial Early Warning Signals]]). The rule uses the *mode*, the most frequent value, across many images. Take five pixels seen in five June images. Pixel A reads grass, grass, water, grass, grass: mode grass, keep it. Pixel B reads water, water, flooded vegetation, water, grass: mode water, mask it. Pixel C is flooded vegetation three times out of five: mask. Pixel D is trees every time: keep. Pixel E is grass three times: keep. Using the mode stops one rainy day or cloud from deciding. For the project the mask came from Dynamic World (Brown et al. 2022), a land-cover dataset made from Sentinel-2 images about every 5 days: for each pixel, take the mode class across the June 2022 and June 2023 images in Google Earth Engine, and exclude pixels whose mode is water or flooded vegetation.

Three confusions. NA does not mean zero: treating a masked value as 0 would wrongly put a wet point in "grassland core" territory. The mask does not remove all water, only pixels that were usually wet in June. And masking is not cheating: it is a stated, rule-based exclusion made before analysis. The habitat file's name carries the mask (FieldVeg50m_RemoteVeg_JUNMASK_forDataRelease.csv), and its spatial covariance columns are NA at 39 of 416 points: BK 2, CR 12, DC 0, HB 21, HO 4. Because AIC comparisons need identical data, every model is fit to the same [[Complete-Case Analysis|complete-case]] set of 376 points and 1,130 visits ([[Analysis Plan]]). The dropped points are not random: they are the wettest places, so the habitat models describe the drier part of each site, and HB and CR lose a quarter or more of their points, which is worth one sentence in the Report. Flooding is a defining feature of the [[Mississippi Alluvial Valley]].

## Connections
- **Builds on:** [[Pixels and Spatial Resolution]], [[Missing Values]], [[Remote Sensing]], [[Rangeland Analysis Platform]], [[Rangeland Health]], [[Type I Error]], [[Regime Shift]]
- **Leads to:** [[Spatial Covariance]], [[Complete-Case Analysis]], [[Moving Window Analysis]]
- **Part of:** [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
- **Go deeper:** [[Regime Shifts and Spatial Early Warning Signals]], [[Mississippi Alluvial Valley]], [[Analysis Plan]], [[Roberts et al. 2025]]

## Flashcards

Why use the most frequent June class rather than a single June image to decide which pixels to mask?
??
One image can catch a passing flood, a rain day or a cloud. The mode across many images captures what the pixel usually is, so only pixels that were typically water or flooded vegetation get masked.
++++

Why are the flood-masked points not a random loss of data?::They are the wettest places, so models using spatial covariance describe the drier part of each site.
