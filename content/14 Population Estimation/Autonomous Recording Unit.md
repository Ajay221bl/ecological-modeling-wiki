---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "An autonomous recording unit is a weatherproof recorder left in the field to record sound on a schedule for weeks, whose recordings are later searched, often by machine learning, for a species' calls."
aliases:
  - "ARU"
  - "ARUs"
  - "Automated recording unit"
  - "Passive acoustic monitoring"
status: seedling
---

# Autonomous Recording Unit

Instead of sending a person to listen at dawn on twenty mornings, you can leave a recorder strapped to a tree that listens every dawn by itself. An **autonomous recording unit** (ARU) is a weatherproof recorder left in the field to record sound on a schedule for weeks, whose recordings are later searched for a species' calls ([[Acoustic Survey]], [[Occupancy]]). The guest lecture's two selling points are that ARUs "can record sound for a long time without maintenance" and that "machine learning" can identify species in the recordings, so thousands of hours can be processed.

For occupancy, you choose how to cut the recording into visits, for example each day or each week becomes one occasion, and a call anywhere in that occasion is a 1 ([[Detection History]]). Short occasions give low p but many visits; long occasions give high p but few visits, and both must stay within the closed season ([[Closure Assumption]], [[Cumulative Detection Probability]]). Machine-learning classifiers make mistakes, so a confidence threshold is chosen and a sample of detections is checked by ear; unchecked false positives bias ψ upward, because the standard model assumes a detection is always real.

It is one of the survey types in the [[Occupancy Guest Lecture]] ([[Choosing a Survey Method for Occupancy]]). An ARU records only what is within earshot: its "site" is the area it can hear, which shrinks in wind, rain or dense forest, so those conditions belong in p ([[Observation Covariates]]).

```r
set.seed(12); calls <- matrix(rbinom(4 * 21, 1, 0.08), 4, 21)          # 4 ARUs x 21 days of call detections
weekly <- sapply(split(1:21, rep(1:3, each = 7)), function(d) apply(calls[, d], 1, max))
dimnames(weekly) <- list(paste0("ARU", 1:4), paste0("week", 1:3)); weekly   # 3 weekly occasions
```

## Connections
- **Builds on:** [[Acoustic Survey]], [[Detection History]]
- **Leads to:** [[Cumulative Detection Probability]], [[Closure Assumption]], [[Camera Trap]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Choosing a Survey Method for Occupancy]]

## Flashcards

What are the two advantages of ARUs named in the guest lecture?
??
They record for long periods without maintenance, and machine learning can identify species in the recordings.
++++

How do you turn continuous ARU recordings into occupancy visits?
??
Cut the recording into occasions (days or weeks); a call anywhere in an occasion is a detection.
++++
