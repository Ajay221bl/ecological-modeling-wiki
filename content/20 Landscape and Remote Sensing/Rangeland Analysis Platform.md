---
type: atomic
tags: [landscape-remote-sensing, flashcards]
aliases: ["RAP", "RAP v3", "RAP v3.0", "rangelands.app"]
status: seedling
---

# Rangeland Analysis Platform
**In one line:** A free online set of yearly maps, made from Landsat satellite images, that estimate the [[Percent Cover]] of grasses, forbs, shrubs and trees in every 30 m square across U.S. rangelands.

> [!info] Before this, it helps to know
> [[Remote Sensing]] (seeing the ground from a satellite) · [[Plant Functional Groups]] (the groups RAP maps) · [[Pixels and Spatial Resolution]] (30 m squares)

## Start from zero
**Rangeland** is land where the natural plant cover is mostly grasses, forbs or shrubs, and that is usually managed by grazing and fire rather than ploughing: prairies, sagebrush steppe, desert scrub. Ranchers, wildlife agencies and researchers all want to know the same thing about it: "How much grass, how many shrubs, how many trees, and is it changing?"

Walking every hectare is impossible. So a team built a machine-learning model that learned, from many thousands of field plots where people had measured cover by hand, how the satellite colours of a 30 m square relate to its cover. They then ran that model on Landsat images for every year back to the mid-1980s. The result is the **Rangeland Analysis Platform (RAP)**, viewable at rangelands.app.

## Why it exists
Before RAP, a manager might have a land-cover map labelling each pixel "grassland" or "forest" once every few years. That throws away two things that matter:
- **Mixture:** most pixels are part grass, part shrub, part tree. RAP gives a percent for each group ([[Plant Functional Groups]]).
- **Change through time:** one map per year since 1984 lets you watch trees spread into a prairie decade by decade ([[Woody Plant Encroachment]]).

That makes RAP a natural tool for spotting where grasslands are holding and where they are slipping, which is the idea behind [[Defend the Core]].

## A tiny example
Imagine RAP values for one 30 m pixel at a field edge in three years:

| Year | PFG (perennial forbs and grasses) | TRE (trees) |
|---|---|---|
| 2000 | 70% | 5% |
| 2010 | 55% | 20% |
| 2022 | 35% | 45% |

Read top to bottom, this pixel is changing from grassland to woodland. RAP cannot say *why* (no fire? no grazing?), but it shows *where* and *how fast*.

## In my project
The data release ([[Roberts et al. 2025]]) says spatial covariance was calculated "between functional groups using the Rangeland Analysis Platform (Allred et al. 2021; Jones et al. 2018) dataset, version 3.0, in Google Earth Engine". Specifically:
- Inputs: RAP v3.0 PFG cover and TRE cover, 30 m pixels.
- Method: covariance between the two inside a [[Moving Window Analysis|moving window]] of 3x3, 9x9 and 27x27 pixels (0.81, 7.29 and 65.61 ha).
- Output: the habitat-file columns 30m_PFG_TRE_3W_22, _9W_22 and _27W_22, all from **2022** imagery, even for CR and HB, which were surveyed in 2023.
- Flooded pixels were removed first ([[Flood Masking]]), leaving NA at 39 points.

So every spatial covariance value in Ajay's data is RAP cover, rearranged by a moving window into a boundary signal ([[Spatial Covariance]]).

> [!warning] Verify
> - The six RAP v3 groups (AFG, PFG, SHR, TRE, litter, bare ground), the start year (1984) and the field-plot training come from my general knowledge of RAP, not from the metadata.
> - RAP was built for western U.S. rangelands. Its accuracy in humid, patchy Arkansas grasslands is a fair question; Berry's 2024 thesis reportedly found spatial covariance only *weakly* related to field vegetation measures, which could partly reflect this ([[Field vs Remote Vegetation Measures]]).
> - The metadata also lists a source layer called "Spatial covariance of tree and perennial herbaceous cover", credited to Brady Allred (2021). It may be a ready-made RAP product; confirm how it relates to the values in the habitat file.

## Common confusions
- **"RAP measures cover."** It *predicts* cover from colours. Each value has error, which RAP reports as uncertainty.
- **"Rangeland means cattle land."** It means land whose natural cover is herbaceous or shrubby. Grazing is common but not required ([[Rangeland Health]]).
- **"The 2022 map fits the 2023 sites exactly."** It is one year off for CR and HB. Woody cover changes slowly, so this is probably minor, but it is a mismatch.

## Connections
- **Builds on:** [[Remote Sensing]], [[Plant Functional Groups]], [[Percent Cover]], [[Pixels and Spatial Resolution]]
- **Leads to:** [[Moving Window Analysis]], [[Spatial Covariance]], [[Flood Masking]], [[Defend the Core]]
- **Part of:** [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
- **Go deeper:** [[Roberts et al. 2025]], [[Berry et al. 2026]]

> [!question]- Check yourself
> Which two RAP layers feed the spatial covariance metric, and at what pixel size?
> ?
> Perennial forb and grass cover (PFG) and tree cover (TRE), both at 30 m x 30 m pixels from RAP version 3.0.
