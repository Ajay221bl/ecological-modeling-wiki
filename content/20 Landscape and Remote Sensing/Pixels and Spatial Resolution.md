---
type: atomic
tags:
  - landscape-remote-sensing
  - flashcards/eco/landscape
description: "A satellite map is a grid of little squares called pixels, each holding one value; spatial resolution is how big each square is on the ground."
aliases:
  - "pixel"
  - "pixels"
  - "spatial resolution"
  - "raster"
  - "raster map"
  - "mixed pixel"
  - "30 m pixel"
status: seedling
---

# Pixels and Spatial Resolution

Zoom far into a phone photo and it turns into coloured squares, each showing one colour even where the real scene had a leaf edge running through it. Those squares are *pixels*. A satellite map works the same way, except each pixel stands for a square of land and holds a single number, such as "tree cover = 35%"; a map stored as a grid of pixels is called a *raster*. **Spatial resolution** is the ground size of one pixel: Landsat, used by the [[Rangeland Analysis Platform]], has 30 m × 30 m pixels (900 m², a bit bigger than a baseball infield), and Sentinel-2, used by Dynamic World, has 10 m × 10 m pixels (100 m², the floor of a small house). Smaller pixels mean finer [[Grain|resolution]] and more detail. Resolution is a map's *grain*, the finest detail it can record ([[Spatial Scale]]), and it comes from how [[Remote Sensing]] works: each detector element sees a patch of ground and records the average light from it, so anything smaller than a pixel is blended in.

That blending creates *mixed pixels*: a 30 m pixel on a forest edge may be half canopy, half grass, and a cover model reads the blend as something like "tree cover 50%, grass 45%". That is why [[Percent Cover]], a number from 0 to 100, is often more honest than a single label. See the effect on a 90 m × 90 m square of ground, grass on the left two-thirds and a 30 m-wide woodlot on the right. At 90 m resolution it is one pixel, tree cover about 33%, and you cannot tell where the trees are. At 30 m it is a 3 × 3 block: the left 6 pixels read near 0% trees and the right 3 near 100%, so the boundary appears. At 10 m it is 81 pixels and you might see gaps in the woodlot. Same ground, different picture. Resolution also sets cost: halve the pixel side and there are four times as many pixels to store and process.

Three confusions. Resolution is not how sharp the image looks on screen: a 30 m image zoomed in just looks blocky and never gains detail. A pixel labelled "grass" is not all grass, only the best summary of a mixed square. And a point and a pixel do not describe the same thing: a bird point is a spot, its pixel a 30 m square around it, and its window far larger. In the grassland bird project RAP v3.0 cover is 30 m (0.09 ha per pixel), and the [[Spatial Covariance]] windows are 3×3, 9×9 and 27×27 pixels, that is 9, 81 and 729 pixels covering 0.81, 7.29 and 65.61 ha ([[Moving Window Analysis]]); the habitat file's column names start with "30m_" for this reason. Dynamic World is 10 m, so the [[Flood Masking|flood mask]] was built from finer pixels than the covariance it was applied to (how they were matched is not stated). Survey points are 400 m apart ([[Systematic Grid Sampling]]), so the 3×3 and 9×9 windows of neighbouring points do not overlap (90 m and 270 m are both under 400 m), but the 27×27 windows (810 m) do, worth remembering for [[Spatial Autocorrelation]].

## Connections
- **Builds on:** [[Remote Sensing]], [[Spatial Scale]], [[Grain]]
- **Leads to:** [[Percent Cover]], [[Rangeland Analysis Platform]], [[Spatial Covariance]], [[Moving Window Analysis]], [[Flood Masking]], [[Systematic Grid Sampling]], [[Spatial Autocorrelation]]
- **Part of:** [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
- **Go deeper:** [[Roberts et al. 2025]]

## Flashcards

A 30 m pixel straddles a forest edge. What does a cover map record there?
??
A single blended value for the whole square, such as roughly 50% tree cover. The map cannot show where inside the pixel the trees are; that detail is below its resolution.
++++

What is spatial resolution?::The ground size of one pixel, such as 30 m × 30 m for Landsat.
