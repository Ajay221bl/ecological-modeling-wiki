---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "A hair snare is a device that pulls a few hairs from an animal that brushes past or enters it, so DNA from the hair can confirm the species and even identify the individual."
aliases:
  - "Hair snag"
  - "Hair-snaring device"
  - "Hair trap"
  - "Noninvasive genetic sampling"
status: seedling
---

# Hair Snare

A cat that squeezes through a narrow gap leaves fur on the edges, and that fur proves which cat it was. A **hair snare** is a device that pulls a few hairs from an animal that brushes past or enters it, such as barbed wire, sticky pads or wire brushes inside a baited box, so DNA from the hair can confirm the species and even identify the individual ([[Occupancy]], [[Imperfect Detection]]). It is a form of noninvasive genetic sampling, alongside collecting scat; the guest lecture describes this as "growing quickly" and "often done in alignment with camera traps".

Species identification from DNA makes detections more certain than a blurry photo, and genotyping adds what occupancy alone cannot: which individuals were there, their sex and their relatedness. The cost is laboratory time, and samples can fail to amplify, which is one more way to miss a present species. When a camera and a snare sit at the same station, their records can be merged so that either one counts as a detection on that visit, as the code below does ([[Detection History]]).

[[Happe et al. 2020]] placed a baited "cubby" box with 6 gun brushes at each camera station. The camera did most of the work, but in 3 of 68 detections DNA alone identified a fisher when the camera failed; genotypes from 17 microsatellite markers identified 21 individual fishers, including first- and second-generation offspring of the translocated founders ([[Camera Trap]], [[Reintroduction]], [[Fisher Occupancy Case Study]], [[Occupancy Guest Lecture]]). A hair snare detection is not proof of residence: one passing animal can leave hair at several sites ([[Site Independence Assumption]]).

```r
cam <- matrix(c(1, 0, 0,  0, 0, 1,  0, 0, 0), 3, byrow = TRUE)   # 3 sites x 3 visits, camera
dna <- matrix(c(0, 0, 0,  0, 1, 0,  0, 0, 0), 3, byrow = TRUE)   # hair-snare DNA at the same stations
pmax(cam, dna)                                                  # detected by either device
```

## Connections
- **Builds on:** [[Occupancy]], [[Imperfect Detection]]
- **Leads to:** [[Camera Trap]], [[Environmental DNA]], [[Reintroduction]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Choosing a Survey Method for Occupancy]], [[Fisher Occupancy Case Study]]

## Flashcards

What two things can hair-snare DNA tell you that a photo often cannot?
??
A certain species ID and the identity (and sex, relatedness) of individuals.
++++

How are camera and hair-snare records combined for occupancy?
??
A visit counts as a detection if either device detected the species.
++++
