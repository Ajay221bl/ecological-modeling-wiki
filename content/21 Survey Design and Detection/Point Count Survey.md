---
type: atomic
tags:
  - survey-design
  - field-methods
  - flashcards
aliases:
  - "point count"
  - "point counts"
  - "point-count survey"
status: seedling
---

# Point Count Survey
**In one line:** You stand on one marked spot for a few minutes and write down every bird species you see or hear, and roughly how far away each one is.

> [!info] Before this, it helps to know
> [[Variable and Observation]] (each line you write down is an observation) · [[Sample vs Population]] (a few spots stand in for the whole property)

## Start from zero
Picture a grassy field at sunrise. You walk to a stake in the ground (the "point"), wait quietly, and for a fixed number of minutes you listen and look. A meadowlark sings to your left. Two crows fly past. Something rustles in the grass but you never see it. You write down each species you identified and how far away it was.

That is a point count. You repeat it at many stakes across a property, so you end up with a list of birds for each spot. The spots are fixed, so you (or someone else) can come back to the exact same place later.

The key word is **detected**. Your list holds birds you noticed. Some birds were there but silent, hidden in grass, or too far away. The list is never "every bird present".

## Why it exists
Nobody can count every bird on a 1,000-acre property. So we **sample**: we look at small, well-defined pieces and use them to learn about the whole (see [[Sample vs Population]]).

Fixed points make the samples fair and repeatable. Every point gets the same method and the same amount of time. That way, if one point has more species, it is not just because someone looked longer there.

The limit: a point count tells you about **birds you could detect from that spot under those conditions**. As Hobbs and Hooten put it, when we count animals, some are overlooked ([[Hobbs and Hooten 2015 Ch1]], p. 8). Powell and Gale make the same point about sampling: your conclusions apply to the population your method can actually reach (their example is floating turtle traps that miss small turtles; [[Powell and Gale 2015 Ch2]], pp. 13-14). Forgetting this is the root of [[Imperfect Detection]]: you would read "fewer birds noticed" as "fewer birds".

## A tiny example
One visit to one point might produce this sheet:

| Species code | 0-50 m | 50-100 m | 100-400 m | Flying over |
|---|---|---|---|---|
| DICK | 2 | 1 | 0 | 0 |
| NOBO | 0 | 0 | 1 | 0 |
| AMCR | 0 | 0 | 0 | 2 |

Three species were written down. But the crows were only flying over, so for a "who lives here" question we might count just 2 species ([[Fly-over Detections]]). And the silent thing in the grass is not on the sheet at all.

## In my project
My data file (`SSP_AllBirdData_NewPointNums_NAOMIT.csv`) is a point-count dataset from Dr. Roberts' published research ([[Roberts et al. 2025]], [[Berry et al. 2026]]):
- 7,742 rows; **one row = one species detected at one point-visit**.
- 416 points across 5 properties (BK, CR, DC, HB, HO); the property code is the letters at the start of `PtNum` (e.g. "BK1001").
- Each point was visited in up to 3 survey rounds (`Survey` 1-3) in one breeding season; 414 points have 3 visits and 2 have 4 ([[Repeat-Visit Design]]).
- 39 survey dates: June 6 to July 12, 2022, and May 16 to June 9, 2023. Counts started between 5:20 and 10:50 (`StartTime`).
- Per visit: observer (`Obs`), `Wind` (0-3) and `Sky` (0-5). Per species: individuals in three [[Distance Bands]] and a `FlyOver` count.

From each visit I compute one number, the [[Species Richness]] of detected species. That makes the point-visit my [[Sampling Unit]] ([[Why the point-visit is the sampling unit]]).

Not in the bird file: how many minutes each count lasted, and the map coordinates of the points. The data release fills most of that gap.

From the data release metadata ([[Roberts et al. 2025]]): points sit on a 400 m grid anchored at a random spot, plus roadside points around each property ([[Systematic Grid Sampling]], [[Roadside Surveys]]). Counts ran from 30 minutes before sunrise to 5 hours after, only on days with wind under 19.3 km/h and no rain, with wind and sky coded the way the North American [[Breeding Bird Survey]] does. Observers used range finders to judge distance. The metadata says focal species were recorded within 100 m "for three minutes"; whether all species used the same duration is still an open question ([[Open Questions]]). The point coordinates (latitude and longitude) are in the release's habitat file.

## Common confusions
- **"The list is what lives there."** No: it is what was detected. Treat it as a minimum.
- **"A point is a property."** No: a property (site) holds many points. BK1001 is one point at site BK.
- **"One row is one bird."** No: one row is one species at one visit; the distance columns hold how many individuals.

## Connections
- **Builds on:** [[Sample vs Population]], [[Variable and Observation]], [[Sampling Unit]]
- **Leads to:** [[Distance Bands]], [[Detection Probability]], [[Repeat-Visit Design]], [[Fly-over Detections]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]
- **Go deeper:** [[Powell and Gale 2015 Ch2]] (what a sample can and cannot tell you), [[Hobbs and Hooten 2015 Ch1]]

> [!question]- Check yourself
> A point count at CR records 9 species. Why can't I say "9 species were present at that point"?
> ?
> A point count records species detected, not species present. Some species may have been silent, hidden, far away or missed, so 9 is a minimum (observed richness), not the true number.
