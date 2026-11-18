---
type: atomic
tags:
  - landscape-remote-sensing
  - flashcards/eco/landscape
description: "Remote sensing is learning about the ground without touching it, usually by measuring the light that bounces off it into a sensor on a satellite or plane."
aliases:
  - "remotely sensed"
  - "satellite imagery"
  - "satellite data"
  - "Landsat"
  - "Sentinel-2"
  - "Google Earth Engine"
status: seedling
---

# Remote Sensing

You already do remote sensing. Looking across a field you can tell green grass from brown soil from a dark pond without walking over: your eyes measure reflected light and your brain turns colours into "grass", "soil", "water". **Remote sensing** is that, done by a sensor on a satellite or plane, with two upgrades: it sees more colours, including near-infrared light our eyes cannot see, and it sees everywhere, again and again, the same way each time. Each measurement is an [[Variable and Observation|observation]] of brightness, and a model turns brightness into an ecological variable such as "percent tree cover".

Plants give us a trick. Healthy leaves absorb red light, because chlorophyll uses it for photosynthesis, but strongly reflect near-infrared; bare soil reflects both moderately; water absorbs near-infrared and looks dark. So the ratio of colours tells vegetation, soil and water apart. Pretend a sensor gives brightness from 0 to 100 in two colours. Pixel A reads red 5, near-infrared 50: ten times more near-infrared than red, lots of leaves. Pixel B reads 25 and 30: bare soil or dry grass. Pixel C reads 4 and 2: dark in both, water. Real classifiers use many colours and training examples, but that is the core logic, and comparing red with near-infrared is the idea behind "greenness" indices such as [[NDVI]]. Why use it? Field work is precise but slow: one person measures vegetation at maybe a dozen points a day, while a question like "where are the [[Grassland Core Habitat|grassland cores]] in Arkansas?" covers millions of hectares. Remote sensing gives coverage (every piece of ground, not a sample), consistency (one sensor measures the same way everywhere, unlike two crews; [[Observer Effects]]) and history (Landsat has imaged the Earth since 1972). The price: a satellite sees only the top of the canopy from far away, never a nest or the grass under a tree, and the model that converts colours to cover has errors. It is the natural tool of [[Landscape Ecology]], which needs whole landscapes at once.

Three confusions. Satellites do not "photograph grass": they record brightness in several colour bands, and "grass" is a model's interpretation. [[Reading Data from a URL|Remote data]] are not exact: every derived map has prediction error, often larger in places unlike the training data. And remote sensing does not replace field work: field plots are what the models are trained and checked on. Two products feed the grassland bird habitat data ([[Roberts et al. 2025]]). The [[Rangeland Analysis Platform]] v3.0 turns Landsat images into yearly [[Percent Cover]] maps of [[Plant Functional Groups]] at 30 m [[Pixels and Spatial Resolution|pixels]], from which [[Spatial Covariance]] was computed. Dynamic World (Brown et al. 2022), a Sentinel-2 land-cover map updated about every 5 days, was used for the [[Flood Masking|flood mask]]. Both were processed in Google Earth Engine, a free cloud service that stores decades of imagery and runs calculations without downloads. The habitat file therefore mixes remote measures (the spatial covariance columns) with field ones ([[Visual Obstruction (Robel Pole)|Robel pole]], tree distances, cover within 50 m), and Berry's 2024 thesis compared them ([[Field vs Remote Vegetation Measures]]).

## Connections
- **Builds on:** [[Variable and Observation]], [[Landscape Ecology]], [[NDVI]], [[Grassland Core Habitat]], [[Reading Data from a URL]]
- **Leads to:** [[Observer Effects]], [[Rangeland Analysis Platform]], [[Percent Cover]], [[Plant Functional Groups]], [[Pixels and Spatial Resolution]], [[Spatial Covariance]], [[Flood Masking]], [[Visual Obstruction (Robel Pole)]]
- **Part of:** [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
- **Go deeper:** [[Field vs Remote Vegetation Measures]], [[Roberts et al. 2025]]

## Flashcards

Why does comparing red and near-infrared light help find vegetation?
??
Green leaves absorb red light for photosynthesis but reflect near-infrared strongly, while soil and water do not show that contrast. A pixel bright in near-infrared and dark in red is very likely leafy vegetation.
++++

What can a satellite not see that a field crew can?::What lies under the top of the canopy, such as nests, grass height or seedlings under trees.
