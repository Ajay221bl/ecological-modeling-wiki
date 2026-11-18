---
type: atomic
tags:
  - grassland-bird-ecology
  - species
  - flashcards
aliases:
  - "DICK"
  - "Spiza americana"
  - "Dickcissels"
status: seedling
---

# Dickcissel
**In one line:** A sparrow-sized songbird (*Spiza americana*, code DICK) that nests in tall grass and old fields of central North America in summer and spends the winter far to the south.

> [!info] Before this, it helps to know
> [[Grassland Bird Decline]] (why this species is a focus) · [[Average (Mean)]] and [[Spread and Variability]] (for the clumping point below)

## Start from zero
Imagine a hayfield in June. A yellow-chested bird with a black bib sits on top of a tall weed and sings a dry, buzzy "dick-dick-ciss-ciss-ciss". That is a male Dickcissel. It is named after its song.

Dickcissels are **migrants**: they fly north to breed in summer and south for winter. They nest low in thick grass and weeds. They like taller, denser grass than some other grassland birds.

They also **cluster**. Several males may sing in one field while a similar field nearby has none. In some places one male may pair with more than one female.

## Why it exists (why it matters here)
Two things make the Dickcissel useful in my project.

**Easy to detect.** Males sing loudly and often from exposed perches, so a [[Point Count Survey]] usually catches them when present.

**Clumpy counts.** Because they cluster, a point either has several or none. That makes their counts very uneven. Statisticians measure "unevenness" as [[Variance]] (how spread out the numbers are; see [[Spread and Variability]]). For counts of a randomly scattered thing, the variance is about equal to the [[Average (Mean)|average]]. When it is much bigger, that is [[Overdispersion]], and simple count models underestimate the noise.

> [!warning] Verify
> Details such as wintering range (mostly northern South America), polygyny, and year-to-year shifts in breeding range are well documented in field guides and species accounts, but check a source (for example Birds of the World) before citing them in the Report. (That Dickcissel is one of the six focal species is confirmed by the data release metadata, [[Roberts et al. 2025]].)

## A tiny example
Dickcissels counted at 5 points:

| Point | Count |
|---|---|
| 1 | 0 |
| 2 | 0 |
| 3 | 0 |
| 4 | 1 |
| 5 | 9 |

Average = 10 / 5 = 2. But the numbers swing from 0 to 9. To get the variance, take each count's distance from 2, square it (4, 4, 4, 1, 49), add them (62) and divide by one less than the number of points (62 / 4 = 15.5). A variance of 15.5 against an average of 2 is a ratio of almost 8. That is clumping.

## In my project
Dickcissel is the most frequently recorded of the six [[Focal Species]] in my file. Re-counted Oct 12 (codes trimmed, ground detections only), it was found on 331 of all 1,250 point-visits at 164 points, 1,049 birds in all. By site: BK 158 visits, HO 65, DC 54, HB 53, CR just 1.

That BK figure is why BK has the highest focal richness. It does not mean BK is intact grassland: Dickcissels use open grass and farm mosaics, and much of the ground near BK points is soybean and rice ([[Percent Cover]]). The single CR record fits the other end: CR is the most wooded property.

Two lessons:
1. **Single-species counts are overdispersed.** In the earlier EDA, Dickcissel counts had a variance/mean ratio of about 12, far from the value of 1 that a [[Poisson Distribution]] assumes. A Dickcissel count model would need a [[Negative Binomial Distribution]]. That is part of why I chose [[Species Richness]], whose variance/mean ratios are 0.55 to 1.08 on all 416 points, and 0.56 to 0.93 on the 376 points in the models ([[Why richness instead of single-species counts]]).
2. **It is the natural stretch-goal species.** A single-species [[Occupancy Model]] for Dickcissel is one of the Final Draft options, after the Nov 3-5 occupancy lecture ([[Next Steps]]). It would separate "present" from "detected" ([[How the project could grow into Bayesian and occupancy models]]). That belongs to the Final Draft, not the Report.

In Berry's study Dickcissel reportedly avoided tree-grass boundaries the most strongly of the six, though its model fit was poor; that result is still to be verified, and the comparison of all six is in [[Focal Species]] ([[Why grassland birds avoid trees]]).

## Common confusions
- **"Many rows = many birds."** Rows count point-visits with a Dickcissel, not individuals.
- **"Zero at a point = absent."** It could be present and silent ([[Imperfect Detection]]).
- **"Clumpy counts are bad data."** They are real biology; they just need the right model.

## Connections
- **Builds on:** [[Four-Letter Species Codes]], [[Grassland Bird Decline]]
- **Leads to:** [[Overdispersion]], [[Occupancy Model]], [[Alternatives Considered]]
- **Part of:** [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]
- **Go deeper:** [[Berry et al. 2026]], [[Roberts et al. 2025]]

> [!question]- Check yourself
> Why would a Poisson model for Dickcissel counts give standard errors that are too small?
> ?
> Poisson assumes the spread (variance) equals the average, but Dickcissel counts have variance about 12 times the average. The model underestimates the noise, so it looks more certain than it should.
