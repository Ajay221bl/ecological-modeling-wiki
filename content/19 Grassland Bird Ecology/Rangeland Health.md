---
type: atomic
tags:
  - grassland-bird-ecology
  - landscape-ecology
  - flashcards/eco/grassland
description: "Rangeland is unploughed land where wild or domestic animals graze; rangeland health is how well a piece of it keeps its soil, water and plant community working, judged against what that site can be."
aliases:
  - "rangeland"
  - "rangelands"
  - "rangeland condition"
  - "range condition"
status: seedling
---

# Rangeland Health

Picture a cattle ranch in Oklahoma or a herder's sheep on the Mongolian steppe: nobody ploughs or plants, and the animals eat whatever grows on its own. That is *rangeland*, unploughed land grazed by wild or domestic animals: prairie, shrubland, savanna, steppe. It covers a large share of Earth's land, much of it too dry, rocky or steep to farm. A tallgrass prairie is rangeland too, the most familiar kind of [[Grassland]]. **Rangeland health** is how well a piece of rangeland keeps its soil, water and plant community working. Like a doctor's checkup, which reads health from signs such as temperature and blood pressure, a trained person walks the land and checks signs: how much ground is bare and whether soil is washing or blowing away; whether deep-rooted perennial grasses remain or short-lived weeds have replaced them; whether dead plant litter protects the soil; and whether invasive plants or trees and shrubs are moving in. Grouping plants this way, by how they live rather than by species, uses [[Plant Functional Groups]].

Health is always judged against what that site can be: a desert naturally has more bare ground than a tallgrass prairie, so 40% bare ground may be healthy in one place and alarming in another. Here is how a check works, with made-up thresholds for one kind of site: healthy if bare ground is below 20%, perennial grass cover above 50% and tree cover below 10%. Pasture A has 10%, 70% and 2%, passing all three; pasture B has 40%, 30% and 25%, failing all three and at risk of tipping into a new state. Why care early? Rangelands can cross thresholds into a different stable state, such as eroded bare ground or juniper woodland, and then not recover even when grazing stops ([[Ecological Resilience and Alternative States]]), so catching decline is cheaper than repairing it. Walking every hectare is impossible, so satellites now check huge areas every year ([[Remote Sensing]]): the [[Rangeland Analysis Platform]] (RAP) maps the [[Percent Cover]] of plant groups (perennial forbs and grasses, annuals, shrubs, trees, bare ground) in 30 m [[Pixels and Spatial Resolution|pixels]] across large parts of the US, Arkansas included. People judge condition by eye as well: [[Batpurev et al. 2021]] showed photos of Mongolian rangeland to herders, scientists and officials, who largely agreed on which sites had "collapsed", and used smooth curves to show how judgments change with vegetation cover.

Three confusions: rangeland is not just desert; no single number says how healthy land is, since health is read from many signs against what the site can support; and remote and field measures need not agree, since they measure different things at different scales ([[Field vs Remote Vegetation Measures]]). The grassland bird project's Arkansas sites are not classic rangeland (wetter, mostly refuges rather than ranches, set among forest and farmland), but two rangeland ideas run through it. The data come from a rangeland tool: the [[Spatial Covariance]] columns (`30m_PFG_TRE_3W_22` and its 9×9 and 27×27 versions) use RAP v3.0 cover for PFG (perennial forbs and grasses) and TRE (trees) ([[Moving Window Analysis]]). And tree cover invading grass, the central rangeland health worry, is the threat the study tracks ([[Woody Encroachment]]). A fair question is how well RAP, built mainly for western rangelands, measures small Arkansas grasslands. RAP's exact classes and extent, and the US field protocol "Interpreting Indicators of Rangeland Health", should be checked against their own [[Help Files in R|documentation]] before citing.

## Connections
- **Builds on:** [[Grassland]], [[Plant Functional Groups]], [[Percent Cover]], [[Help Files in R]]
- **Leads to:** [[Ecological Resilience and Alternative States]], [[Remote Sensing]], [[Rangeland Analysis Platform]], [[Pixels and Spatial Resolution]], [[Spatial Covariance]], [[Moving Window Analysis]], [[Woody Encroachment]]
- **Part of:** [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]], [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
- **Go deeper:** [[Field vs Remote Vegetation Measures]], [[Batpurev et al. 2021]]

## Flashcards

Why can't you say "30% bare ground is unhealthy" for all rangelands?
??
Health is judged against what that particular site can support. A dry desert site may be healthy with lots of bare ground, while a tallgrass prairie with 30% bare ground has lost much of its plant cover.
++++

Why does catching rangeland decline early matter so much?::Rangeland can cross a threshold into a new stable state (bare ground, woodland) that does not recover even when grazing stops.
