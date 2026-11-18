---
type: atomic
tags:
  - survey-design
  - field-methods
  - vegetation
  - flashcards/eco/survey
description: "Visual obstruction, measured with a Robel pole, is a quick field measure of how tall and thick vegetation is: how much of a striped pole is hidden by plants when viewed from a fixed distance."
aliases:
  - "Robel pole"
  - "visual obstruction"
  - "visual obstruction reading"
  - "ROBEL_AVG"
status: seedling
---

# Visual Obstruction (Robel Pole)

Push a broom handle into a lawn and step back a few paces: you can see the whole handle. Push it into an unmown meadow in June and the bottom part disappears behind leaves and seed heads; the thicker and taller the grass, the more of the handle vanishes. That is **visual obstruction**, and a *Robel pole* measures it: a pole painted in alternating bands, often every 5 or 10 cm. The observer stands a fixed distance away, crouches to a fixed eye height and notes the lowest band still partly visible; a high reading means dense, tall cover, a low one short or sparse cover, and readings from several directions are averaged. The method is named after Robert Robel, who described it in 1970 for Kansas grasslands, usually with a 4 m viewing distance and 1 m eye height (check the protocol Berry's 2024 thesis actually used before describing it).

Why measure it? Grassland birds care about the structure of grass, not only whether there is [[Grassland]]. A ground nest needs enough cover to hide from a passing crow or snake; too much dense thatch and some species cannot walk or forage; and species differ, Dickcissels liking tall dense cover and some sparrows short sparse grass with bare ground ([[Habitat Selection]]). Measuring height times density directly would mean clipping and weighing plants, slow and destructive, while a Robel reading takes a minute and has been shown to track plant biomass reasonably well, which is why rangeland managers use it too ([[Rangeland Health]]). Here is one point, with a pole marked every 10 cm: the lowest visible band is 3 to the north, 2 to the east, 4 to the south and 3 to the west. The [[Mean]] is (3 + 2 + 4 + 3) / 4 = 3, so the cover hides the pole to about 30 cm; a freshly mowed field might average 0 or 1 ([[Mowing]]). The number depends on the band width, so units must be known before comparing studies. Each reading is one [[Variable and Observation|observation]] of a structure variable, unlike [[Percent Cover]], which says nothing about height.

Four confusions. Robel does not measure height alone: it measures how much vegetation hides, mixing height and density, so a few tall stalks hide little and tall-sparse and short-dense patches can read the same. Higher is not always better, since very dense cover suits some species and not others. One reading describes a few square metres on one date, not a whole site, and grass grows through the season. And NA means not measured, not zero cover ([[Missing Values]]). The grassland bird habitat file has `ROBEL_AVG`, from 0.1 to 1.74, present at only 224 of 416 points because field vegetation was mostly not collected at roadside points ([[Roadside Surveys]]). The metadata do not state its units: in decimetres that is about 1 to 17 cm of hidden pole, in metres 10 cm to 1.74 m, so ask Dr. Roberts before interpreting it. Robel is not in the project's [[Predictor Variable|covariate]] set, because dropping the 192 points that lack it would shrink the data a lot and drop roadside points more than interior ones ([[Field vs Remote Vegetation Measures]], [[Tree Density]]).

## Connections
- **Builds on:** [[Grassland]], [[Mean]], [[Variable and Observation]], [[Predictor Variable]]
- **Leads to:** [[Habitat Selection]], [[Rangeland Health]], [[Mowing]], [[Percent Cover]], [[Missing Values]], [[Roadside Surveys]], [[Field vs Remote Vegetation Measures]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]
- **Go deeper:** [[Tree Density]], [[Roberts et al. 2025]]

## Flashcards

A patch of tall but sparse stalks and a patch of short, very dense grass could give the same Robel reading. Why?
??
The pole records how much of it is hidden from a fixed viewpoint. Hiding depends on both height and density, so tall-sparse and short-dense vegetation can block the same amount of pole.
++++

Why must you know the units before comparing Robel readings between studies?::The reading depends on the band width and units of the pole (decimetres vs metres change its meaning entirely).
