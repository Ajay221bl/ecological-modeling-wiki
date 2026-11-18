---
type: atomic
tags: [landscape-remote-sensing, flashcards]
aliases: ["remotely sensed", "satellite imagery", "satellite data", "Landsat", "Sentinel-2", "Google Earth Engine", "GEE"]
status: seedling
---

# Remote Sensing
**In one line:** Learning about the ground without touching it, usually by measuring the light that bounces off it into a camera on a satellite or plane.

> [!info] Before this, it helps to know
> [[Landscape Ecology]] (why we want to see whole landscapes) · [[Variable and Observation]] (a measurement is an observation of a variable)

## Start from zero
You already do remote sensing. Looking across a field, you can tell green grass from brown soil from a dark pond, without walking over. Your eyes measure reflected light, and your brain turns colours into "grass", "soil", "water".

A satellite does the same thing, with two upgrades:
1. It sees **more colours**, including near-infrared light our eyes cannot see.
2. It sees **everywhere, again and again**, the same way each time.

The trick plants give us: healthy leaves absorb red light (chlorophyll uses it for photosynthesis) but strongly reflect near-infrared. Bare soil reflects both moderately. Water absorbs near-infrared and looks dark. So the *ratio* of colours tells green vegetation, soil and water apart. Comparing red and near-infrared is the idea behind common "greenness" indices such as NDVI.

## Why it exists
Field work is precise but slow. One person can measure vegetation at maybe a dozen points a day. A study site might have hundreds of points, and a question like "where are the grassland cores in Arkansas?" covers millions of hectares.

Remote sensing solves three problems:
- **Coverage:** it measures every piece of ground, not a sample.
- **Consistency:** the same sensor measures the same way everywhere, unlike two field crews who estimate cover differently ([[Observer Effects]]).
- **History:** Landsat satellites have imaged the Earth since 1972, so we can look back at what a site was like decades ago.

The price: a satellite sees the **top** of the canopy from far away. It cannot see a nest, a grass seedling under a tree, or how tall the grass is. And raw colours must be turned into ecological variables, such as "percent tree cover", by a model trained on field plots. That model has errors.

## A tiny example
Pretend a sensor gives brightness from 0 to 100 in two colours:

| Pixel | Red | Near-infrared | Likely cover |
|---|---|---|---|
| A | 5 | 50 | dense green vegetation |
| B | 25 | 30 | bare soil or dry grass |
| C | 4 | 2 | water |

Pixel A reflects ten times more near-infrared than red: lots of leaves. Pixel C is dark in both: water. Real classifiers use many colours and many training examples, but this is the core logic.

## In my project
Two remote sensing products feed the habitat data ([[Roberts et al. 2025]]):

- **[[Rangeland Analysis Platform]] (RAP) v3.0** turns Landsat images into yearly maps of [[Percent Cover]] for [[Plant Functional Groups]], including perennial forbs and grasses (PFG) and trees (TRE), at 30 m pixels. [[Spatial Covariance]] between PFG and TRE was computed from these maps.
- **Dynamic World** (Brown et al. 2022) is a land-cover map from the Sentinel-2 satellites, updated about every 5 days. It was used to build the [[Flood Masking|flood mask]] that removed flooded pixels.

Both were processed in **Google Earth Engine** (Gorelick et al. 2017), a free cloud service that stores decades of satellite images and lets you run calculations on them without downloading anything.

Ajay's habitat file therefore mixes two kinds of measurement: remote (the spatial covariance columns such as 30m_PFG_TRE_3W_22) and field (Robel pole, tree distances, cover within 50 m). Thesis Chapter I in Berry's 2024 thesis (University of Arkansas) compared them; see [[Field vs Remote Vegetation Measures]].

## Common confusions
- **"Satellites take photos of grass."** They record brightness in several colour bands. "Grass" is an interpretation produced by a model.
- **"Remote data are exact."** Every derived map has prediction error, which is often larger in places unlike the training data.
- **"Remote sensing replaces field work."** Field plots are what the models are trained and checked on. The two work together.

## Connections
- **Builds on:** [[Landscape Ecology]], [[Variable and Observation]]
- **Leads to:** [[Pixels and Spatial Resolution]], [[Percent Cover]], [[Rangeland Analysis Platform]], [[Flood Masking]], [[Field vs Remote Vegetation Measures]]
- **Part of:** [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
- **Go deeper:** [[Roberts et al. 2025]] (data release methods)

> [!question]- Check yourself
> Why does comparing red and near-infrared light help find vegetation?
> ?
> Green leaves absorb red light for photosynthesis but reflect near-infrared strongly, while soil and water do not show that contrast. A pixel bright in near-infrared and dark in red is very likely leafy vegetation.
