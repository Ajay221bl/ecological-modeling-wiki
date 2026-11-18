---
type: atomic
tags:
  - survey-design
  - study-design
  - flashcards
aliases:
  - "repeat visits"
  - "repeated visits"
  - "survey rounds"
status: seedling
---

# Repeat-Visit Design
**In one line:** Going back to the same points several times in one season; this reveals how often birds are missed, but it also means the visits are not independent.

> [!info] Before this, it helps to know
> [[Point Count Survey]] (what one visit is) · [[Detection Probability]] (what repeats can reveal)

## Start from zero
You stand in a field for a few minutes and write down what you see and hear. A week later you come back to the same stake and do it again. Then a third time.

Visit 1: a Dickcissel sings. Visit 2: nothing. Visit 3: it sings again. It almost certainly did not leave and come back. On visit 2 it was there but silent. You just watched detection fail.

That is what repeat visits give you. They also bring a catch: three visits to one spot share that spot's habitat and resident birds, so they are more alike than three visits to three random spots.

## Why it exists
Repeat visits do two jobs, one helpful and one that creates work.

**Helpful: they reveal imperfect detection.** If a species is found on one visit but not another within the same season, and we can assume it stayed put (the "closure" assumption, covered in the occupancy guest lecture), the miss was a detection failure. Counting such misses is what lets a model estimate [[Detection Probability]]. Hobbs and Hooten's lizard example rests on this: counts repeated seven times on each transect let them estimate the chance a lizard present is seen ([[Hobbs and Hooten 2015 Ch6]], p. 129).

**Creates work: the visits are not independent.** "Independent" means knowing one result tells you nothing about another. Visits to the same point fail that test: a rich point tends to be rich every time. Treating three visits as three independent samples inflates the apparent sample size. That mistake is [[Pseudoreplication]] ([[Hurlbert 1984]]). The visits are [[Repeated Measures]] grouped by point.

What goes wrong if you ignore the grouping? The model thinks it has 1,130 separate pieces of information when many are partly copies. Its uncertainty for Site comes out too small and p-values too hopeful.

## A tiny example
Dickcissel at three points, three visits each (1 = detected, 0 = not):

| Point | Visit 1 | Visit 2 | Visit 3 |
|---|---|---|---|
| P1 | 1 | 0 | 1 |
| P2 | 0 | 1 | 0 |
| P3 | 0 | 0 | 0 |

At P1 and P2 the bird was surely present (seen at least once), yet it was missed on 3 of 6 visits. So on any single visit, detection was only about 50%. That makes P3's "0, 0, 0" less convincing: a bird present at P3 would be missed all three times about 0.5 × 0.5 × 0.5 = 12.5% of the time.

## In my project
- `Survey` records the round (1, 2 or 3). Rows per round: 2,558, 2,649 and 2,535.
- 414 of 416 points have 3 visits and 2 have 4 (a point-visit is one PtNum × Date × Survey combination).
- Each point was surveyed in **one season only**: no point appears in both 2022 and 2023. So repeats are within-season, and site cannot be separated from year ([[Why site and year cannot be separated]]).

How the design is used now: `(1|PtNum)` gives each point its own baseline, so its visits are tied together ([[Random Intercept]], [[Why a random intercept for point]]). Dr. Roberts confirmed this choice in his proposal feedback ([[Proposal Feedback from Dr Roberts]]). In the Oct 13 results, visits to the same point were clearly more alike for focal richness (point variance 0.20) but not for all-species richness (0, once property, habitat and weather were in), so H3 is only half supported ([[Preliminary Results]]).

How it could be used later: the same visits give each species a detection history per point (like the table above), which is exactly the input an [[Occupancy Model]] needs.

## Common confusions
- **"Three visits = three times the data."** Partly; they are linked, so they are worth less than three separate points.
- **"A miss means the bird left."** Within a short season, a miss is more often a detection failure. That assumption (closure) needs checking.
- **"Repeats across years work the same way."** No point here was revisited across years.

## Connections
- **Builds on:** [[Point Count Survey]], [[Independence Assumption]], [[Probability]]
- **Leads to:** [[Pseudoreplication]], [[Random Intercept]], [[Occupancy Model]], [[Detection Probability]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]], [[MOC 14 - Mixed Models|MOC - Mixed Models]]
- **Go deeper:** [[Hobbs and Hooten 2015 Ch6]], [[Hurlbert 1984]]

> [!question]- Check yourself
> Name the two different things that three visits per point give me.
> ?
> (1) Information about detection: a species found on some visits but not others shows it can be missed, which occupancy models use. (2) Linked data: the visits share a point, so the model needs a random intercept for point to avoid pseudoreplication.
