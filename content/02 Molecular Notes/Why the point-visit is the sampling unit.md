---
type: molecular
tags:
  - molecular
  - survey-design
  - statistical-foundations
  - flashcards/eco/why
aliases:
  - "Point-visit"
  - "point-visits"
  - "sampling unit for richness"
status: seedling
---

# Why the point-visit is the sampling unit
> [!summary] In plain words
> Richness only makes sense for a defined chunk of effort: one observer, at one point, on one morning. That chunk is the point-visit, so one point-visit is one observation of richness. Point-visits are themselves grouped (several per point, many points per property), which is why the model needs a random intercept and why the property comparison has far fewer true replicates than 1,250.

## The question
The CSV has 7,742 rows, 1,250 point-visits, 416 points and 5 sites. Which of these is "one observation" for my model, and why?

## Built from
- [[Variable and Observation]]: what "one observation" means.
- [[Sampling Unit]]: the thing on which one value of the response is measured.
- [[Response Variable]]: richness, which only exists once you define what it is counted over.
- [[group_by()|group_by and summarize]]: the R step that turns rows into point-visits.
- [[Repeated Measures]]: the point-visits are themselves grouped by point.
- [[Pseudoreplication]]: what happens when the wrong level is treated as independent.

## The reasoning, step by step
1. **Start with what a row is.** One raw row is one species at one point-visit (a detection record). Point BK1001's first visit has 6 rows: INBU, COYE, RWBL, BARS, BLJA, YBCH.
2. **A row is not a richness measurement.** Counting rows counts detections, not species, and a single row says nothing about how many species were there.
3. **Richness needs a fixed amount of effort.** "How many species?" only makes sense if you say "in what time and place". One observer at one point, on one date, in one survey round, for a fixed count period: that bundle is the point-visit, identified by PtNum x Date x Survey. BK1001's three visits give three richness values: 6, 7 and 6.
4. **The other measurements line up here too.** Wind and Sky are recorded once per point-visit, so the response and the detection covariates live at the same level.
5. **But point-visits are grouped.** The 1,250 point-visits come from 416 points (414 with 3 visits, 2 with 4). Visits to one point are expected to be alike, so the model includes a random intercept for point ([[Why a random intercept for point]]). (Whether they really were alike is H3; the answer differed between all-species and focal richness, see [[Preliminary Results]].)
6. **And points are grouped into sites.** For H1, which compares properties, there are really only 5 independent "replicates" of property. This is why Hurlbert's warning matters ([[Hurlbert 1984]]): for comparing properties, the effective sample size is much smaller than 1,250 (see [[Why site identity is a weak test of a habitat hypothesis]] and [[Population and Sample|Sample vs Population]]).
7. **So the ladder is:** detection row → point-visit (one richness value, plus its Wind and Sky) → point (random intercept, and the habitat measured there) → site (fixed effect of interest).

## So in my project
`GrasslandBirdRichness_Wrangling.R` builds the point-visit table in two steps (the code ran in ajay's RStudio on Oct 13; R is not installed in Claude's environment):
```r
visitDat <-
  rawDat %>%
  group_by(PtNum, Site, Date, Survey) %>%
  summarize(Wind = first(Wind), Sky = first(Sky), .groups = "drop")

richnessSum <-
  groundDat %>%
  group_by(PtNum, Date, Survey) %>%
  summarize(Richness = n_distinct(SpeciesCode),
            FocalRichness = n_distinct(SpeciesCode[SpeciesCode %in% focalSpecies]),
            .groups = "drop")
```
In words: first list every point-visit that happened, with its weather (one pile per point, date and survey round). Then, from the ground detections, count the distinct species codes in each pile, for all species and for the six focal species. The script's own comment says it: "Point-visit is our sampling unit!"

The two are then joined so that every visit is kept: a visit where every bird was a fly-over gets richness 0 rather than vanishing, because it was still a surveyed chunk of effort. `n_distinct()` counts unique text values, which is why the script trims the stray spaces in " FISP" and "EUST " first ([[str_trim()]]). Checks: 1,250 point-visits at 416 points before the habitat join, and 1,130 at 376 points in the final table the models use ([[Complete-Case Analysis]]). Full walk-through: [[R Scripts Walkthrough]].

## What would go wrong otherwise
- Modelling detection rows would answer a different question (how many detections) and badly violate independence.
- Averaging visits to one value per point would throw away the weather information that varies between visits and hide detection noise.
- Treating point-visits as independent (no random intercept) would overstate the evidence, which is classic [[Pseudoreplication]].

## Connections
- **Related:** [[Point Count Survey]], [[Repeat-Visit Design]], [[Independence of Observations|Independence Assumption]], [[Data Table Rows and Columns]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 02 - Modeling Foundations|MOC - Statistical Foundations]]

## Flashcards

Why is the point-visit the unit of observation for richness?::Richness needs a defined chunk of effort: one observer, at one point, on one morning.

Why does the property comparison have far fewer true replicates than 1,250 point-visits?::Visits are grouped within points and points within only 5 properties, so they are not independent replicates of a property.
