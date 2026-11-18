---
type: atomic
tags: [landscape-remote-sensing, flashcards]
aliases: ["flood mask", "masking", "mask", "Dynamic World", "JUNMASK"]
status: seedling
---

# Flood Masking
**In one line:** Blanking out the map pixels that were usually under water, so that later calculations only use land that the method can actually read.

> [!info] Before this, it helps to know
> [[Pixels and Spatial Resolution]] (a map is a grid of pixels) · [[Remote Sensing]] (how land cover is read from satellites)

## Start from zero
When you paint a window frame, you put masking tape over the glass. Paint goes everywhere else, and the glass stays clean. In map work, a **mask** is the same idea: a layer that says "skip these pixels". Masked pixels become NA (no value) and are left out of every calculation that follows.

Now picture an Arkansas refuge in June. Low fields still hold standing water from spring floods, or are deliberately flooded to feed ducks. From a satellite, a flooded grassland does not look like grassland. It looks like water, or like a green-brown smear of "flooded vegetation".

## Why it exists
The spatial covariance method reads cover maps of grass (PFG) and trees (TRE) from the [[Rangeland Analysis Platform]]. Those maps were built for dry rangeland. Standing water breaks the link between colours and plant cover: a flooded meadow can be predicted as low grass, so it looks like something else, and its contrast with nearby trees would describe a flood, not a tree-grass pattern.

The data release states the worry plainly: sites "were often partially flooded into early summer", with "the potential for standing water to interfere with regime shift signals" ([[Roberts et al. 2025]]). A regime shift signal is the boundary between the grassland and woodland states that [[Spatial Covariance]] is meant to detect ([[Regime Shifts and Spatial Early Warning Signals]]).

Without a mask, a seasonally flooded field next to a woodlot could produce a strong negative value and be read as a tree-grass boundary. The mask removes that false alarm, at the cost of losing data in wet places.

## A tiny example
Five pixels, with the land-cover class seen in each of five June images:

| Pixel | Image 1 | 2 | 3 | 4 | 5 | Mode | Keep? |
|---|---|---|---|---|---|---|---|
| A | grass | grass | water | grass | grass | grass | yes |
| B | water | water | flooded veg | water | grass | water | **no** |
| C | flooded veg | flooded veg | grass | flooded veg | grass | flooded veg | **no** |
| D | trees | trees | trees | trees | trees | trees | yes |
| E | grass | flooded veg | grass | water | grass | grass | yes |

The **mode** is the most frequent class. Pixel A was wet once but is mostly grass, so it stays. Pixels B and C were usually wet, so they are masked. Using the mode instead of one image stops a single rainy day (or cloud) from deciding.

## In my project
How the mask was built (metadata, [[Roberts et al. 2025]]):
1. Source: **Dynamic World** (Brown et al. 2022), a land-cover dataset made from Sentinel-2 satellite images and updated about every 5 days.
2. For every pixel, take the mode land-cover class across the June 2022 and June 2023 Dynamic World images, in Google Earth Engine.
3. Exclude pixels whose mode is **water** or **flooded vegetation**.

The habitat file's name carries the mask: FieldVeg50m_RemoteVeg_**JUNMASK**_forDataRelease.csv. In it, the spatial covariance columns (30m_PFG_TRE_3W_22, _9W_22, _27W_22) are NA at **39 of 416 points** "as a result of masking".

The masked points by property: BK 2, CR 12, DC 0, HB 21, HO 4. So they cluster at Holla Bend and Camp Robinson, not at Bald Knob.

Consequence for Ajay's models: any model using spatial covariance drops those points, and because AIC comparisons need identical data, every model (proposal Oct 12, scripts Oct 13) is fit to the same complete-case set of 376 points and 1,130 visits (BK 94, CR 35, DC 93, HB 62, HO 92 points) ([[Complete-Case Analysis]], [[Analysis Plan]]). Dropped points are not random: they are the wettest places, so the habitat models describe the drier part of each site, and HB and CR lose a quarter or more of their points. That is worth one sentence in the Report.

## Common confusions
- **"NA means the value was zero."** NA means "no value": the pixel was excluded. Treating it as 0 would wrongly place a wet point in "grassland core" territory.
- **"The mask removes all water."** Only pixels that were *usually* water or flooded vegetation in June. Briefly wet pixels stay.
- **"Masking is cheating."** It is a stated, rule-based exclusion done before analysis, not after looking at results.

## Connections
- **Builds on:** [[Pixels and Spatial Resolution]], [[Remote Sensing]], [[Rangeland Analysis Platform]]
- **Leads to:** [[Spatial Covariance]], [[Moving Window Analysis]], [[Mississippi Alluvial Valley]]
- **Part of:** [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
- **Go deeper:** [[Roberts et al. 2025]] (mask method)

> [!question]- Check yourself
> Why use the most frequent June class rather than a single June image to decide which pixels to mask?
> ?
> One image can catch a passing flood, a rain day or a cloud. The mode across many images captures what the pixel usually is, so only pixels that were typically water or flooded vegetation get masked.
