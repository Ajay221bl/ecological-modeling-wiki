---
type: atomic
tags:
  - survey-design
  - data
  - flashcards
aliases:
  - "Dist_50"
  - "Dist_100"
  - "Dist_400"
  - "distance band"
status: seedling
---

# Distance Bands
**In one line:** Rings drawn around the observer (0-50 m, 50-100 m, 100-400 m); each bird is tallied in the ring it was in.

> [!info] Before this, it helps to know
> [[Point Count Survey]] (where the rings come from) · [[Detection Probability]] (the chance of noticing a bird)

## Start from zero
You stand in a field for a few minutes and write down what you see and hear. A bird singing 20 m away is almost impossible to miss. A bird singing 300 m away, with wind in the grass, is easy to miss.

So it helps to note **how far away** each bird was. Instead of guessing exact distances, observers use a few rings, like a dartboard centred on their feet. Each bird goes in one ring: inside 50 m, 50 to 100 m, or 100 to 400 m. These rings are distance bands.

## Why it exists
Detection drops with distance. Knowing the ring lets an analyst:
1. **Use only near birds** (for example within 100 m), where detection is more even from point to point.
2. **Model how detection fades with distance.** This is called distance sampling. Powell and Gale note that program Distance selects a model for how detection probability declines with distance from a transect or point ([[Powell and Gale 2015 Ch4]], p. 58), and they list distance estimates of detected animals among the field data that likelihood methods use ([[Powell and Gale 2015 Ch3]], p. 22).

Without bands, two points could differ in counts just because one is more open (you can see farther) or quieter, not because it has more birds.

## A tiny example
Ring areas grow fast. Area of a circle is π × radius².
- Circle to 50 m: about 7,900 m².
- Circle to 100 m: about 31,400 m², so the 50-100 m ring alone is about 23,600 m².
- Circle to 400 m: about 503,000 m², so the 100-400 m ring is about 471,000 m².

The outer ring has about 15 times the area of the whole inner 100 m circle. If birds were spread evenly and all detected, the outer ring should hold far more birds than the inner two combined.

## In my project
Columns, as described in the README ([[README Data Dictionary]]): `Dist_50` = individuals within 50 m, `Dist_100` = 50-100 m, `Dist_400` = 100-400 m. Totals across the whole file:

| Band | Individuals | Share |
|---|---|---|
| 0-50 m | 5,311 | 43% |
| 50-100 m | 4,968 | 40% |
| 100-400 m | 2,062 | 17% |

The biggest ring holds the fewest birds. Some of that may be real (habitat changes away from points), but it is what you expect when far birds are often missed ([[Detection Probability]]).

How the bands enter my analysis now:
- [[Species Richness]] counts a species if it appears in **any** band, so a far detection counts the same as a near one.
- The bands are also how the script tells ground birds from fly-overs. Since Oct 13 the wrangling script keeps a row when `coalesce(Dist_50,0) + coalesce(Dist_100,0) + coalesce(Dist_400,0) > 0`, so the 90 rows with both ground and fly-over counts are kept (the old `FlyOver == 0` filter dropped them; see [[Fly-over Detections]]).

Data oddities: `Dist_50` has 1 missing value. `coalesce(Dist_50, 0)` treats it as 0 so the sum still works. The README once said "no missing values"; that line was corrected on Oct 13 ([[README Data Dictionary]]). Also, 2 rows have zero in every band and in `FlyOver` (CR31 on 5/18/2023, EAWP; DC101 on 6/23/2022, AMCR). The ground filter drops them. Ask Dr. Roberts what those rows mean ([[Open Questions]]).

A possible robustness check later: recompute richness using only detections within 100 m and see whether the Site pattern holds.

## Common confusions
- **"Fewer birds far away means fewer birds live far away."** Usually it mostly means fewer far birds were noticed.
- **"The bands are the count."** They are the count split by distance; the total for a species is the sum of the three.
- **"Dist_100 means 0-100 m."** No: it is the 50-100 m ring only.

## Connections
- **Builds on:** [[Point Count Survey]], [[Count Data]], [[Variable and Observation]]
- **Leads to:** [[Detection Probability]], [[Imperfect Detection]], [[Fly-over Detections]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]
- **Go deeper:** [[Powell and Gale 2015 Ch4]] (distance sampling), [[Powell and Gale 2015 Ch3]]

> [!question]- Check yourself
> Why is "fewest birds recorded in the 100-400 m band" suspicious, given that band's area?
> ?
> The 100-400 m ring covers about 15 times the area of the inner 100 m circle, so with even spacing and perfect detection it should hold the most birds. Few records there suggest many distant birds are missed.
