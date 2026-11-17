---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Environmental DNA is genetic material that animals shed into water or soil, which can be sampled and tested for species-specific markers to detect a species without ever seeing it."
aliases:
  - "eDNA"
  - "Environmental DNA sampling"
  - "eDNA survey"
status: seedling
---

# Environmental DNA

Every animal constantly sheds skin cells, mucus and waste, so a jar of pond water carries traces of whatever lives in the pond. **Environmental DNA** (eDNA) is genetic material that animals shed into water or soil, which can be sampled and tested for species-specific markers to detect a species without ever seeing it ([[Occupancy]], [[Imperfect Detection]]). The guest lecture's example is Great Lakes carp surveillance: invasive carp are rare at the invasion front and hard to catch, but water samples can reveal them early.

eDNA fits occupancy with an extra layer: a site may be occupied, a water sample from it may or may not contain the DNA, and a lab test of that sample may or may not detect it. Even the simple version, treating each sample as a visit, shows why replicates matter: with a per-sample detection probability of 0.3, one sample finds a present species only 30% of the time, but four samples find it 76% of the time and eight samples 94% ([[Cumulative Detection Probability]]). eDNA also suffers from false positives through contamination or DNA carried in from upstream, so field and lab blanks are part of the design.

It is one of the survey types in the [[Occupancy Guest Lecture]] ([[Choosing a Survey Method for Occupancy]], [[Hair Snare]]). A positive eDNA test means DNA was there, not necessarily a living animal at that spot: DNA drifts downstream and persists for days, so eDNA "presence" covers a fuzzier area and time than a sighting does.

```r
p <- 0.3; n <- 1:8
round(setNames(1 - (1 - p)^n, paste0(n, "_samples")), 2)   # chance at least one sample is positive
```

## Connections
- **Builds on:** [[Occupancy]], [[Imperfect Detection]]
- **Leads to:** [[Cumulative Detection Probability]], [[Hair Snare]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Choosing a Survey Method for Occupancy]]

## Flashcards

What is eDNA?
??
DNA shed by animals into water or soil, sampled and tested for species-specific markers.
++++

With per-sample p = 0.3, how many samples give at least 90% detection?
??
Seven (1 − 0.7⁷ = 0.92; six gives 0.88).
++++
