---
type: atomic
tags:
  - grassland-bird-ecology
  - survey-design
  - flashcards
aliases:
  - "breeding season"
  - "nesting season"
  - "breeding phenology"
status: seedling
---

# Breeding Season Timing
**In one line:** Birds sing, defend territories and nest during a fairly fixed window each year, so when you count them within that window changes what you can detect.

> [!info] Before this, it helps to know
> [[Point Count Survey]] (counting birds by sight and sound) · [[Detection Probability]] (the chance of noticing a bird that is there)

## Start from zero
Open a window at dawn in May and the air is full of song. Open it in late August and it is much quieter, even though many of the same birds are still around. What changed is the **breeding season**.

In spring, males claim a **territory**, a patch they defend against other males of their species. Singing is how they claim it and how they attract a mate. Then comes nest building, eggs, chicks, and young birds leaving the nest (**fledging**). Once nesting is done, singing drops off sharply.

Two kinds of birds follow this calendar differently:
- **Residents**, like the [[Northern Bobwhite]], live in the same area all year and start calling as the season warms.
- **Migrants**, like the [[Dickcissel]], [[Eastern Kingbird]] and [[Scissor-tailed Flycatcher]], arrive from the south in spring and leave in late summer or fall.

The timing of all this in a region is called its **phenology**, the calendar of seasonal events.

## Why it exists
**Surveys need birds that sing and stay put.** A point count works best when birds are on territory, singing, and staying in one place for the weeks of the survey. That is why the [[Breeding Bird Survey]] runs mostly in June, and why counts happen early in the morning, when singing peaks.

**Too early, and you count passers-by.** In early spring some birds are still migrating through. A bird heard on May 10 might be gone by May 20. Occupancy models assume a point's occupied or empty status does not change between visits ([[Occupancy Model]], [[Repeat-Visit Design]]). Migrants passing through break that assumption.

**Too late, and birds go quiet.** After young fledge, males sing less, so a present bird is easier to miss ([[Imperfect Detection]]).

**Management must fit the calendar too.** [[Mowing]] or [[Prescribed Fire]] in the middle of nesting can destroy ground nests. Timing treatments outside the main nesting window protects them.

## A tiny example
Suppose a meadowlark at a point sings during a count 60% of the time in early June, but only 30% in mid-July. With 3 visits, the chance of detecting it at least once is 1 minus the chance of missing it all 3 times:

| Season | Miss on one visit | Miss all 3 | Detected at least once |
|---|---|---|---|
| Early June | 0.4 | 0.4 x 0.4 x 0.4 = 0.064 | 94% |
| Mid-July | 0.7 | 0.7 x 0.7 x 0.7 = 0.343 | 66% |

Same bird, same place. Counting six weeks later loses about a third of the detections.

## In my project
The survey windows from the metadata were June 1 to July 30 in 2022 and May 15 to June 10 in 2023. In my data, the actual count dates were:

| Site | Year | Counted |
|---|---|---|
| BK, DC, HO | 2022 | June 6 to July 12 (BK June 24 to July 12) |
| CR | 2023 | May 16 to 22 |
| HB | 2023 | June 1 to 9 |

Counts ran from 30 minutes before sunrise to 5 hours after, on days with wind under 19.3 km/h and no rain.

The problem: date is tangled with site, just as year is ([[Why site and year cannot be separated]]). CR was counted earliest, in mid-May, and BK latest, into July. Any difference between CR and BK could be partly a seasonal difference in singing or in which migrants had arrived ([[Confounding]]). For example, 6 of the 9 Eastern Kingbird visits came from CR, and all 8 Loggerhead Shrike visits came from 2022 sites. With one window per site, I cannot tell season apart from site.

The sites were also often partly flooded into early summer, which is one reason the study built a [[Flood Masking|flood mask]] and dropped unreachable grid points.

## Common confusions
- **"A bird not heard in July was not there."** It may have finished nesting and gone quiet.
- **"Residents need no timing."** Bobwhite calling also rises and falls through the season.
- **"Warmer springs only shift dates."** Earlier springs can put birds out of step with insect peaks ([[Climate Change and Birds]]).

## Connections
- **Builds on:** [[Point Count Survey]], [[Detection Probability]], [[Imperfect Detection]]
- **Leads to:** [[Detection Covariates]], [[Mowing]], [[Climate Change and Birds]]
- **Part of:** [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]], [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]
- **Go deeper:** [[Roberts et al. 2025]], [[Berry et al. 2026]]

> [!question]- Check yourself
> CR was counted in mid-May and BK in late June to July. Why does that make site comparisons harder?
> ?
> Bird singing and which migrants are present change through the season. So a difference between CR and BK could come from the date of counting, not from the sites themselves, and with one window per site the two cannot be separated.
