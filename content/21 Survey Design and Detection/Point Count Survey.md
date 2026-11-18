---
type: atomic
tags:
  - survey-design
  - field-methods
  - flashcards/eco/survey
description: "A point count survey means standing on one marked spot for a few minutes and writing down every bird species you see or hear, and roughly how far away each one is."
aliases:
  - "point count"
  - "point counts"
  - "point-count survey"
status: seedling
---

# Point Count Survey

Picture a grassy field at sunrise. You walk to a stake in the ground (the "point"), wait quietly, and for a fixed number of minutes you listen and look. A [[Eastern Meadowlark|meadowlark]] sings to your left, two crows fly past, something rustles in the grass but you never see it. You write down each species you identified and how far away it was. That is a **point count**. You repeat it at many stakes across a property, so you end up with a list of birds for each spot, and because the spots are fixed anyone can come back to exactly the same place later. Each line on the sheet is one [[Variable and Observation|observation]]. The key word is *detected*: your list holds the birds you noticed, and some were there but silent, hidden or too far away.

Why do it this way? Nobody can count every bird on a 1,000-acre property, so we take a [[Sample]], small well-defined pieces used to learn about the whole [[Population]] ([[Population and Sample]]). Each point-visit is then a [[Sampling Unit]], one unit of measurement. Fixed points make the samples fair and repeatable: every point gets the same method and time, so a point with more species is not just one where someone looked longer. The limit is that a count tells you about birds you could detect from that spot under those conditions. Hobbs and Hooten note that when we count animals some are overlooked ([[Hobbs and Hooten 2015 Ch1]], p. 8), and Powell and Gale that conclusions apply only to the population a method can reach (their floating turtle traps miss small turtles; [[Powell and Gale 2015 Ch2]], pp. 13-14). Forgetting this is [[Imperfect Detection]]: reading "fewer birds noticed" as "fewer birds". Here is one sheet: DICK, 2 birds within 50 m and 1 at 50 to 100 m; [[Northern Bobwhite|NOBO]], 1 at 100 to 400 m; AMCR, 2 flying over. Three species were written down, but the crows were only passing, so for a "who lives here" question we might count 2 ([[Fly-over Detections]]); the distances go in [[Distance Bands]], and the silent thing in the grass is not on the sheet at all.

Three confusions: the list is not what lives there but what was detected, a minimum; a point is not a property (BK1001 is one point at site BK); and one row is not one bird but one species at one visit. The grassland bird file (`SSP_AllBirdData_NewPointNums_NAOMIT.csv`) is a point-count dataset from Dr. Roberts' research ([[Roberts et al. 2025]], [[Berry et al. 2026]]): 7,742 rows, one species detected at one point-visit each; 416 points across 5 properties, the property being the letters at the start of `PtNum`; up to 3 survey rounds per point in one season (414 points have 3 visits, 2 have 4; [[Repeat-Visit Design]]); 39 dates from June 6 to July 12, 2022 and May 16 to June 9, 2023, starting between 5:20 and 10:50; and per visit the observer, `Wind` (0 to 3) and `Sky` (0 to 5). Points sit on a 400 m grid plus roadside points ([[Systematic Grid Sampling]], [[Roadside Surveys]]), counts ran from 30 minutes before sunrise to 5 hours after in light wind and no rain, with weather coded as in the [[Breeding Bird Survey]], and [[Focal Species|focal species]] were recorded within 100 m "for three minutes"; whether all species used the same duration is open ([[Open Questions]]). From each visit the project computes one number, the [[Species Richness]] of detected species ([[Why the point-visit is the sampling unit]]).

## Connections
- **Builds on:** [[Variable and Observation]], [[Sample]], [[Population]], [[Population and Sample]], [[Sampling Unit]], [[Eastern Meadowlark]], [[Northern Bobwhite]], [[Focal Species]]
- **Leads to:** [[Imperfect Detection]], [[Fly-over Detections]], [[Distance Bands]], [[Repeat-Visit Design]], [[Systematic Grid Sampling]], [[Roadside Surveys]], [[Breeding Bird Survey]], [[Species Richness]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]
- **Go deeper:** [[Why the point-visit is the sampling unit]], [[Open Questions]], [[Powell and Gale 2015 Ch2]], [[Hobbs and Hooten 2015 Ch1]], [[Roberts et al. 2025]], [[Berry et al. 2026]]

## Flashcards

A point count at CR records 9 species. Why can't you say "9 species were present at that point"?
??
A point count records species detected, not species present. Some species may have been silent, hidden, far away or missed, so 9 is a minimum (observed richness), not the true number.
++++

In the grassland bird file, what is one row?::One species detected at one point-visit (the distance columns hold how many individuals).
