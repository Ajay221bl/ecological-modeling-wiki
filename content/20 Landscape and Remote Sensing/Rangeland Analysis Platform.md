---
type: atomic
tags:
  - landscape-remote-sensing
  - flashcards/eco/landscape
description: "The Rangeland Analysis Platform (RAP) is a free online set of yearly maps, made from Landsat satellite images, that estimate the percent cover of grasses, forbs, shrubs and trees in every 30 m square across U.S. rangelands."
aliases:
  - "RAP"
  - "RAP v3"
  - "RAP v3.0"
  - "rangelands.app"
status: seedling
---

# Rangeland Analysis Platform

*Rangeland* is land whose natural cover is mostly grasses, forbs or shrubs, usually managed by grazing and fire rather than ploughing: [[Grassland|prairies]], sagebrush steppe, desert scrub ([[Rangeland Health]]). Everyone who manages it wants to know the same thing: how much grass, how many shrubs, how many trees, and is it changing? Walking every hectare is impossible, so a team built a machine-learning model that learned, from many thousands of field plots where people had measured cover by hand, how the satellite colours of a 30 m square relate to its cover, and then ran it on Landsat images for every year back to the mid-1980s. The result is the **Rangeland Analysis Platform (RAP)**, viewable at rangelands.app: yearly maps of the [[Percent Cover]] of each of several [[Plant Functional Groups]] in every 30 m [[Pixels and Spatial Resolution|pixel]], a product of [[Remote Sensing]].

Why is that better than an ordinary land-cover map, which labels each pixel "grassland" or "forest" once every few years? Such a map throws away two things that matter. One is [[Mixture Distribution|mixture]]: most pixels are part grass, part shrub, part tree, and RAP gives a percent for each group. The other is change through time: one map per year lets you watch trees spread into a prairie decade by decade ([[Woody Encroachment]]). Imagine RAP values for one pixel at a field edge. In 2000 it is 70% perennial forbs and grasses (PFG) and 5% trees (TRE); in 2010, 55% and 20%; in 2022, 35% and 45%. Read top to bottom, this pixel is changing from grassland to woodland. RAP cannot say why (no fire? no grazing?), but it shows where and how fast, which is what managers need to find cores worth defending ([[Defend the Core]]).

Three confusions. RAP does not measure cover, it predicts it from colours, and each value has error, which RAP reports as uncertainty. Rangeland does not mean cattle land: grazing is common but not required. And a 2022 map does not fit 2023 sites exactly; woody cover changes slowly, so the mismatch is probably minor, but it exists. The grassland bird data release says [[Spatial Covariance]] was calculated "between functional groups using the Rangeland Analysis Platform (Allred et al. 2021; Jones et al. 2018) dataset, version 3.0, in Google Earth Engine" ([[Roberts et al. 2025]]): the inputs are RAP v3.0 PFG and TRE cover at 30 m, combined inside a [[Moving Window Analysis|moving window]] of 3×3, 9×9 and 27×27 pixels (0.81, 7.29 and 65.61 ha), giving the columns 30m_PFG_TRE_3W_22, _9W_22 and _27W_22, all from 2022 imagery even for CR and HB (surveyed in 2023), with flooded pixels removed first ([[Flood Masking]]). RAP was built for western rangelands, so its accuracy in humid, patchy Arkansas grassland is a fair question, and Berry's thesis reportedly found spatial covariance only weakly related to field measures ([[Field vs Remote Vegetation Measures]]). The six RAP v3 groups and the 1984 start year come from general knowledge of RAP; check against its [[Help Files in R|documentation]] before citing.

## Connections
- **Builds on:** [[Rangeland Health]], [[Remote Sensing]], [[Plant Functional Groups]], [[Percent Cover]], [[Pixels and Spatial Resolution]], [[Grassland]], [[Mixture Distribution]], [[Help Files in R]]
- **Leads to:** [[Woody Encroachment]], [[Defend the Core]], [[Spatial Covariance]], [[Moving Window Analysis]], [[Flood Masking]]
- **Part of:** [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
- **Go deeper:** [[Field vs Remote Vegetation Measures]], [[Roberts et al. 2025]], [[Berry et al. 2026]]

## Flashcards

Which two RAP layers feed the spatial covariance metric, and at what pixel size?
??
Perennial forb and grass cover (PFG) and tree cover (TRE), both at 30 m × 30 m pixels from RAP version 3.0.
++++

Does RAP measure cover?::No. It predicts cover from satellite colours with a model trained on field plots, so every value has error.
