---
type: atomic
tags:
  - grassland-bird-ecology
  - species
  - flashcards/eco/grassland
description: "The Dickcissel is a sparrow-sized migratory songbird (Spiza americana, code DICK) that nests in tall grass and old fields of central North America and gathers in clumps, which makes its counts overdispersed."
aliases:
  - "DICK"
  - "Spiza americana"
  - "Dickcissels"
status: seedling
---

# Dickcissel

Stand in a hayfield in June and you may see a yellow-chested bird with a black bib on top of a tall weed, singing a dry, buzzy "dick-dick-ciss-ciss-ciss". That is a male **Dickcissel** (*Spiza americana*), named after its song and recorded under the [[Four-Letter Species Codes|four-letter code]] DICK. It is a *migrant*: it flies north to breed in summer and south for the winter (mostly northern South America). It nests low in thick grass and weeds, liking taller, denser grass than some other grassland birds, and it is one of the six [[Focal Species]] of the grassland bird project, the [[Habitat Specialist|grassland specialists]] whose decline the project is about ([[Grassland Bird Decline]]).

Two things make it a useful teaching bird. First, it is easy to detect: males sing loudly and often from exposed perches, so a [[Point Count Survey]] usually catches them when present. Second, it *clusters*: several males may sing in one field while a similar field nearby has none. That makes counts very uneven, and you can measure how uneven. Take Dickcissels counted at five points: 0, 0, 0, 1 and 9. The [[Mean]] is 10 / 5 = 2. The [[Variance]], the average squared distance from the mean, is (4 + 4 + 4 + 1 + 49) / 4 = 62 / 4 = 15.5. For counts of something scattered at random, the variance is about equal to the mean; here it is almost 8 times the mean. Variance much bigger than the mean is called [[Overdispersion]], and a model that assumes they are equal, the [[Poisson Distribution]], then underestimates the noise and looks more certain than it should. Clumped counts need a model that allows extra spread, such as the [[Negative Binomial Distribution]].

In the project's data Dickcissel is the most often recorded focal species: re-counted Oct 12 (codes trimmed, ground detections only), it was on 331 of 1,250 point-visits at 164 points, 1,049 birds in all; by site BK 158 visits, HO 65, DC 54, HB 53 and CR just 1. That BK figure is why BK has the highest focal richness, but it does not mean BK is intact grassland: Dickcissels use open grass and farm mosaics, and much of BK is cropland ([[Percent Cover]]). The single CR record fits the other end, since CR is the most wooded property. Dickcissel counts had a variance-to-mean ratio of about 12, which is part of why the project models [[Species Richness]] (ratios 0.55 to 1.08) instead of single-species counts ([[Why richness instead of single-species counts]]). Three confusions: many rows do not mean many birds (rows count point-visits with a Dickcissel); a zero at a point does not prove absence, because the bird may be present and silent ([[Imperfect Detection]]); and clumpy counts are not bad data, just real biology that needs the right model. A single-species [[Occupancy Model]] for Dickcissel is a natural stretch goal ([[How the project could grow into Bayesian and occupancy models]]). Details of range and mating system should be checked against a species account such as Birds of the World before citing.

## Connections
- **Builds on:** [[Four-Letter Species Codes]], [[Focal Species]], [[Grassland Bird Decline]], [[Point Count Survey]], [[Mean]], [[Variance]], [[Habitat Specialist]]
- **Leads to:** [[Overdispersion]], [[Poisson Distribution]], [[Negative Binomial Distribution]], [[Species Richness]], [[Imperfect Detection]], [[Occupancy Model]]
- **Part of:** [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]
- **Go deeper:** [[Why richness instead of single-species counts]], [[How the project could grow into Bayesian and occupancy models]], [[Percent Cover]], [[Alternatives Considered]], [[Berry et al. 2026]], [[Roberts et al. 2025]]

## Flashcards

Why would a Poisson model for Dickcissel counts give standard errors that are too small?
??
Poisson assumes the variance equals the mean, but Dickcissel counts have variance about 12 times the mean. The model underestimates the noise, so it looks more certain than it should.
++++

Counts 0, 0, 0, 1, 9: what are the mean and variance, and what does their ratio say?
??
Mean 2, variance 15.5. A ratio near 8 means strong clumping (overdispersion).
++++
