---
type: atomic
tags:
  - survey-design
  - data-cleaning
  - flashcards/eco/survey
description: "Fly-over detections are birds recorded only passing through the sky above a survey point, not perched, singing or feeding in the habitat around it."
aliases:
  - "fly-overs"
  - "FlyOver"
  - "flyover"
status: seedling
---

# Fly-over Detections

You stand in a field counting birds. A Turkey Vulture drifts high overhead and a flock of Chimney Swifts zips across. Did they use this field? Probably not; they happen to be in the air above it. Observers mark such birds as **fly-overs**, separate from birds on the ground or in the vegetation, so that the analyst can decide later whether to count them. A [[Point Count Survey]] is meant to say which birds are using the habitat at a spot, and fly-overs mostly reflect luck (what passed by during those minutes), open sky and nearby features like a pond or road, not the grassland below. Mixed in, they would make [[Species Richness]], the number of species recorded, partly measure "what flew past", adding noise and perhaps bias to a habitat question ([[Hypotheses]]).

The tricky part is that one row can hold both kinds. Take one visit's sheet. A [[Eastern Meadowlark|meadowlark]] has 2 birds in the ground [[Distance Bands]] and 0 fly-overs: keep it. A vulture has 0 on the ground and 1 fly-over: drop it. A [[Dickcissel]] has 1 on the ground and 1 fly-over: keep it, because one bird was using the habitat. Richness for the visit is 2. So the right rule filters on the ground total, not on the fly-over column. In the grassland bird data 207 of 7,742 rows (2.7%) have `FlyOver` > 0; 117 are fly-over only, mostly aerial species (Chimney Swift 51 rows, Turkey Vulture 19, Barn Swallow 12, American Crow 11, Mississippi Kite 5); and 90 have both ground and fly-over counts. `FlyOver` has 5 missing values, and only one visit had nothing but fly-overs (HO55 on 20 June 2022, three crows), which the script keeps with richness 0 because richness is joined onto a full list of visits. The Oct 13 wrangling code, below, adds up the three bands (treating a missing value as 0 with `coalesce()`) and keeps the row if the ground total is above 0, never using `FlyOver` at all.

Three confusions. "Drop any row with a fly-over" is too strong, since a row can have both. Fly-overs are not errors but real detections of a different behaviour, and excluding them is a choice that matches the habitat question. And NA does not mean zero: it means "not recorded", so decide on purpose how to treat it ([[Missing Values]]). History: the Sep 10 script used `filter(is.na(FlyOver) | FlyOver == 0)`, which dropped the 90 mixed rows and two whole visits (1,248 instead of 1,250); the final proposal chose the ground rule and the script was fixed on Oct 13 ([[Why exclude fly-overs]], [[Decision Log]]). Studying aerial birds' [[Habitat Selection|habitat use]] from fly-overs was considered and rejected as too rare and limited to a few species ([[Alternatives Considered]]). The rule lives in the wrangling script, not the analysis script ([[Wrangling vs Analysis Scripts]]).

```r
groundDat <- rawDat %>%
  mutate(GroundCount = coalesce(Dist_50, 0) + coalesce(Dist_100, 0) + coalesce(Dist_400, 0)) %>%
  filter(GroundCount > 0)    # norun: needs the project data. Keeps rows with any bird on the ground
```

## Connections
- **Builds on:** [[Point Count Survey]], [[Species Richness]], [[Distance Bands]], [[Missing Values]], [[Eastern Meadowlark]], [[Habitat Selection]]
- **Leads to:** [[Why exclude fly-overs]], [[Wrangling vs Analysis Scripts]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]
- **Go deeper:** [[Hypotheses]], [[Decision Log]], [[Alternatives Considered]], [[Dickcissel]]

## Flashcards

A row shows Dickcissel with Dist_100 = 1 and FlyOver = 1. What did the old filter do with it, and what does the Oct 13 script do?
??
The old `filter(is.na(FlyOver) | FlyOver == 0)` dropped it, so Dickcissel could vanish from that visit's richness. The Oct 13 script keeps it, because it filters on the ground total (Dist_50 + Dist_100 + Dist_400 > 0), and a bird was on the ground.
++++

Why are fly-overs excluded from a habitat richness analysis?::They mostly reflect what happened to pass overhead, not the habitat birds are using at the point.
