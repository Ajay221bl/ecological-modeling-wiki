---
type: atomic
tags:
  - grassland-bird-ecology
  - landscape-ecology
  - flashcards
aliases:
  - "rangeland"
  - "rangelands"
  - "rangeland condition"
  - "range condition"
status: seedling
---

# Rangeland Health
**In one line:** Rangeland is unploughed land where wild or domestic animals graze (prairie, shrubland, savanna, steppe); rangeland health is how well a piece of it keeps its soil, water and plant community working.

> [!info] Before this, it helps to know
> [[Grassland]] (the most familiar kind of rangeland) · [[Plant Functional Groups]] (the plant categories health is judged by)

## Start from zero
Picture a cattle ranch in Oklahoma, or a herder's sheep on the Mongolian steppe. Nobody ploughs or plants. The animals eat whatever grows on its own. That is **rangeland**. It covers a large share of Earth's land, much of it too dry, rocky or steep to farm.

Now picture a doctor's checkup. The doctor does not measure "health" directly. They check signs: temperature, blood pressure, weight. Rangeland health works the same way. A trained person walks the land and checks signs such as:
- How much ground is **bare**, and is soil washing or blowing away?
- Are the deep-rooted **perennial** grasses still there, or have short-lived weeds replaced them?
- Is there **litter** (dead plant material) protecting the soil?
- Are **invasive** plants or **trees and shrubs** moving in?

## Why it exists
Ranchers, agencies and conservationists all need to know whether land is slipping before it is too late. Rangelands can cross thresholds into a different, stable state, such as eroded bare ground or juniper woodland, and then not recover even when grazing stops ([[Ecological Resilience and Alternative States]]). Catching decline early is cheaper than repairing it.

Health is always judged against **what that site can be**. A desert naturally has more bare ground than a tallgrass prairie. So "40% bare ground" may be healthy in one place and alarming in another.

Walking every hectare is impossible. **Satellites** make it possible to check huge areas every year ([[Remote Sensing]]). The [[Rangeland Analysis Platform]] (RAP) maps the [[Percent Cover]] of plant groups, such as perennial forbs and grasses, annuals, shrubs, trees and bare ground, in 30 m pixels across large parts of the US, Arkansas included ([[Pixels and Spatial Resolution]]).

People also judge condition by eye. [[Batpurev et al. 2021]] showed photos of Mongolian rangeland to herders, scientists and officials, who largely agreed on which sites were in good condition and which had "collapsed", and used smooth curves to show how those judgments change with vegetation cover.

## A tiny example
Two made-up pastures, three signs, with "healthy" thresholds for this kind of site:

| Sign | Healthy if | Pasture A | Pasture B |
|---|---|---|---|
| Bare ground | below 20% | 10% (ok) | 40% (not ok) |
| Perennial grass cover | above 50% | 70% (ok) | 30% (not ok) |
| Tree cover | below 10% | 2% (ok) | 25% (not ok) |

A passes all three. B fails all three and is at risk of tipping into a new state. Real assessments use many more signs, and the thresholds depend on the site.

## In my project
My Arkansas sites are not classic rangeland. They are wetter, mostly wildlife refuges rather than grazed ranches, and set among forest and farmland. But two rangeland ideas run straight through the project:
- **The data come from a rangeland tool.** The spatial covariance columns in my habitat file (`30m_PFG_TRE_3W_22` and its 9x9 and 27x27 versions) use RAP v3.0 cover for **PFG** (perennial forbs and grasses) and **TRE** (trees) ([[Spatial Covariance]], [[Moving Window Analysis]]).
- **Trees as a health threat.** Tree cover invading grass is a central rangeland health concern, and it is the threat this study tracks ([[Woody Plant Encroachment]]).

A fair question is how well RAP, built mainly for western rangelands, measures cover in small Arkansas grasslands ([[Field vs Remote Vegetation Measures]]).

> [!warning] Verify
> - Berry's 2024 thesis (Chapter I) reportedly found spatial covariance only weakly related to the field vegetation measures; see [[Field vs Remote Vegetation Measures]] and check before citing.
> - RAP details (its exact cover classes, years covered and map extent) and the US field protocol "Interpreting Indicators of Rangeland Health" (often described as using 17 indicators) are from memory. Check against the RAP site and the protocol.

## Common confusions
- **"Rangeland = desert."** Tallgrass prairie and savanna are rangeland too.
- **"One number says how healthy it is."** Health is judged from many signs, against what the site can support.
- **"Remote and field measures should agree perfectly."** They measure different things at different scales.

## Connections
- **Builds on:** [[Grassland]], [[Plant Functional Groups]], [[Percent Cover]]
- **Leads to:** [[Rangeland Analysis Platform]], [[Spatial Covariance]], [[Ecological Resilience and Alternative States]]
- **Part of:** [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]], [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
- **Go deeper:** [[Batpurev et al. 2021]] (how people judge rangeland condition and collapse)

> [!question]- Check yourself
> Why can't you say "30% bare ground is unhealthy" for all rangelands?
> ?
> Health is judged against what that particular site can support. A dry desert site may be healthy with lots of bare ground, while a tallgrass prairie with 30% bare ground has lost much of its plant cover.
