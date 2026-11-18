---
type: atomic
tags: [landscape-remote-sensing, flashcards]
aliases: ["pixel", "pixels", "spatial resolution", "raster", "raster map", "mixed pixel", "30 m pixel"]
status: seedling
---

# Pixels and Spatial Resolution
**In one line:** A satellite map is a grid of little squares called **pixels**, each holding one value; **spatial resolution** is how big each square is on the ground.

> [!info] Before this, it helps to know
> [[Remote Sensing]] (where the map comes from) · [[Spatial Scale (Grain and Extent)]] (resolution is the map's grain)

## Start from zero
Zoom far into a phone photo and it turns into coloured squares. Each square shows one colour, even if the real scene had a leaf edge running through it. Those squares are pixels.

A satellite map works the same way, except each pixel stands for a square of land. A map stored as a grid of pixels is called a **raster**. Every pixel holds a single number, such as "tree cover = 35%".

**Spatial resolution** is the ground size of one pixel:
- Landsat (used by RAP): 30 m x 30 m = 900 m², a bit bigger than a baseball infield.
- Sentinel-2 (used by Dynamic World): 10 m x 10 m = 100 m², roughly the floor area of a small house.

Smaller pixels mean finer resolution: more detail.

## Why it exists
A sensor cannot record infinite detail. Each detector element sees a patch of ground and records the average light from it. That patch is the pixel. So resolution is a hard limit: **anything smaller than a pixel is blended into it.**

This creates **mixed pixels**. A 30 m pixel on a forest edge may be half tree canopy and half grass. The map does not say "tree" or "grass"; a cover model reads the blended light and estimates something like "tree cover 50%, grass cover 45%". Most pixels in a patchy landscape are mixed to some degree, which is why [[Percent Cover]] (a number from 0 to 100) is often more honest than a single label.

Resolution also sets cost. Halve the pixel side and you get four times as many pixels to store and process.

## A tiny example
Take a 90 m x 90 m square of ground: grass on the left two-thirds, a woodlot on the right third (30 m wide).

- At **90 m resolution** it is one pixel: tree cover about 33%. You cannot tell where the trees are.
- At **30 m resolution** it is a 3x3 block of 9 pixels: the left 6 read near 0% trees, the right 3 read near 100%. Now the boundary is visible.
- At **10 m resolution** it is 81 pixels: you might see individual gaps in the woodlot.

Same ground, different resolution, different picture. Note that the 30 m version is exactly the 3x3 window used in the project (0.81 ha).

## In my project
- RAP v3.0 cover maps are 30 m. One pixel is 900 m², or 0.09 ha (1 ha = 10,000 m²). The spatial covariance windows are 3x3, 9x9 and 27x27 of these pixels, so 9, 81 and 729 pixels, covering 0.81, 7.29 and 65.61 ha ([[Moving Window Analysis]]).
- Dynamic World is 10 m, so the flood mask was built from finer pixels than the covariance it was applied to ([[Flood Masking]]).
- The habitat file column names start with "30m_", for example 30m_PFG_TRE_3W_22: 30 m pixels, perennial forb and grass (PFG) versus trees (TRE), 3x3 window, 2022 imagery.
- Points are 400 m apart ([[Systematic Grid Sampling]]), so each bird point sits in a different pixel and the 3x3 and 9x9 windows of neighbouring points do not overlap (90 m and 270 m are both less than 400 m). The 27x27 windows (810 m across) do overlap their neighbours, which is worth remembering for [[Spatial Autocorrelation]].

> [!warning] Verify
> How the 10 m Dynamic World mask was matched to 30 m RAP pixels, and how each point's value was pulled from the raster (the pixel containing the point is the usual choice), are not stated in the metadata.

## Common confusions
- **"Resolution means how sharp the image looks on screen."** On a map it means ground size per pixel. A 30 m image can be zoomed until it looks blocky; it never gains detail.
- **"A pixel labelled 'grass' is all grass."** It is the best summary of a mixed square.
- **"A point measurement and a pixel value describe the same thing."** A bird point is a spot; its pixel is a 30 m square around it, and its window is far larger.

## Connections
- **Builds on:** [[Remote Sensing]], [[Spatial Scale (Grain and Extent)]]
- **Leads to:** [[Percent Cover]], [[Moving Window Analysis]], [[Flood Masking]]
- **Part of:** [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
- **Go deeper:** [[Roberts et al. 2025]] (column definitions)

> [!question]- Check yourself
> A 30 m pixel straddles a forest edge. What does a cover map record there?
> ?
> A single blended value for the whole square, such as roughly 50% tree cover. The map cannot show where inside the pixel the trees are; that detail is below its resolution.
