---
type: atomic
tags:
  - survey-design
  - field-methods
  - vegetation
  - flashcards
aliases:
  - "Robel pole"
  - "visual obstruction"
  - "visual obstruction reading"
  - "ROBEL_AVG"
status: seedling
---

# Visual Obstruction (Robel Pole)
**In one line:** A quick field measure of how tall and thick the vegetation is, made by reading how much of a striped pole is hidden by plants when viewed from a fixed distance.

> [!info] Before this, it helps to know
> [[Grassland]] (the vegetation being measured) · [[Variable and Observation]] (each reading is one observation)

## Start from zero
Push a broom handle into a lawn and step back a few paces. You can see the whole handle. Now push it into an unmown meadow in June. The bottom part disappears behind leaves and seed heads. The thicker and taller the grass, the more of the handle vanishes.

That is the whole idea. A **Robel pole** is a pole painted in alternating bands (often every 5 or 10 cm). The observer stands a fixed distance away, crouches to a fixed eye height, and notes the **lowest band they can still partly see**. A high reading means dense, tall cover. A low reading means short or sparse cover. Readings from several directions around the pole are averaged.

The method is named after Robert Robel, who described it in 1970 for grasslands in Kansas. The usual set-up is a 4 m viewing distance and a 1 m eye height.

> [!warning] Verify
> The 1970 origin, the 4 m distance and the 1 m eye height are the standard textbook description. Check what protocol Berry's 2024 thesis (University of Arkansas) actually used before describing it in the Report.

## Why it exists
Grassland birds care about the **structure** of grass, not only whether there is grass.
- A ground nest needs enough cover to be hidden from a passing crow or snake.
- Too much dense thatch, and some species cannot walk or forage through it.
- Different species prefer different heights. Dickcissels like fairly tall, dense cover; some sparrows prefer short, sparse grass with bare ground ([[Habitat Selection]]).

Measuring "height times density" directly would mean clipping and weighing plants, which is slow and destructive. The Robel pole gives a usable number in a minute, with no equipment beyond a pole and a tape. It has been shown to track the amount of plant material (biomass) reasonably well in grasslands, which is why rangeland managers use it too ([[Rangeland Health]]).

## A tiny example
Four readings around one point, using a pole marked every 10 cm:

| Direction | Lowest visible band |
|---|---|
| North | 3 (30 cm) |
| East | 2 (20 cm) |
| South | 4 (40 cm) |
| West | 3 (30 cm) |

Average = (3 + 2 + 4 + 3) / 4 = 3, so the cover hides the pole to about 30 cm ([[Average (Mean)]]). A freshly mowed field might average 0 or 1. Note that the number depends on the band width, so the units must be known before comparing studies.

## In my project
The habitat file (`FieldVeg50m_RemoteVeg_JUNMASK_forDataRelease.csv`) has `ROBEL_AVG`, the average Robel pole visual obstruction at each point.
- Values run from **0.1 to 1.74**.
- It is present at only **224 of 416 points**. Field vegetation was mostly not collected at roadside points ([[Roadside Surveys]]).

> [!warning] Verify
> The metadata does not state the units of `ROBEL_AVG`. If they are decimetres, 0.1 to 1.74 means about 1 to 17 cm of hidden pole, which is short cover. If they are metres, it means 10 cm to 1.74 m, a huge range. Ask Dr. Roberts before interpreting any coefficient.

Robel is not in my covariate set (proposal Oct 12 and Oct 13 scripts: spatial covariance, tree cover, scrub cover), because nearly half the points (192 of 416) lack it. Dropping every point with a missing value would shrink the data a lot and drop roadside points more than interior ones ([[Field vs Remote Vegetation Measures]]).

## Common confusions
- **"Robel measures height."** It measures how much the vegetation *hides*, which mixes height and density. A few tall stalks hide little.
- **"Higher Robel is always better for grassland birds."** Species differ; very dense cover can be worse for some.
- **"A Robel reading describes the whole site."** It describes a few square metres around the pole at one date; grass grows through the season.
- **"NA means zero cover."** NA means not measured. Zero cover would be a reading of 0.

## Connections
- **Builds on:** [[Grassland]], [[Average (Mean)]], [[Variable and Observation]]
- **Leads to:** [[Field vs Remote Vegetation Measures]], [[Habitat Selection]], [[Tree Density and DBH]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]
- **Go deeper:** [[Roberts et al. 2025]] (the habitat file's data dictionary)

> [!question]- Check yourself
> A patch of tall but sparse stalks and a patch of short, very dense grass could give the same Robel reading. Why?
> ?
> The pole records how much of it is hidden from a fixed viewpoint. Hiding depends on both height and density, so tall-sparse and short-dense vegetation can block the same amount of pole.
