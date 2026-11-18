---
type: atomic
tags:
  - survey-design
  - study-design
  - flashcards/eco/survey
description: "A repeat-visit design means going back to the same survey points several times in one season; it reveals how often animals are missed, but it also means the visits are not independent."
aliases:
  - "repeat visits"
  - "repeated visits"
  - "survey rounds"
status: seedling
---

# Repeat-Visit Design

You count birds at a stake, come back a week later and do it again, then a third time. Visit 1: a Dickcissel sings. Visit 2: nothing. Visit 3: it sings again. It almost certainly did not leave and come back; on visit 2 it was there but silent, and you just watched detection fail. A **repeat-visit design** means visiting the same points several times within one season, and it does two jobs, one helpful and one that creates work. Each visit is an ordinary [[Point Count Survey]].

The helpful job: it reveals [[Imperfect Detection|imperfect detection]]. If a species is found on one visit but not another within the same season, and we can assume it stayed put (the [[Closure Assumption]]), the miss was a detection failure, and counting such misses lets a model estimate the [[Detection Probability]]. Hobbs and Hooten's lizard example rests on this: counts repeated seven times on each transect let them estimate the chance a present lizard is seen ([[Hobbs and Hooten 2015 Ch6]], p. 129). Take Dickcissel at three points, three visits each: P1 reads 1, 0, 1; P2 reads 0, 1, 0; P3 reads 0, 0, 0. At P1 and P2 the bird was surely present, yet it was missed on 3 of 6 visits, so detection per visit is about 50%. That makes P3's zeros less convincing: a present bird would be missed all three times 0.5 × 0.5 × 0.5 = 12.5% of the time, a [[Probability]] the model can use. The work it creates: the visits are not independent. Independent means knowing one result tells you nothing about another ([[Independence of Observations]]), and visits to one point fail that test, since a rich point tends to be rich every time. They are [[Repeated Measures]] grouped by point, and treating three visits as three independent samples inflates the apparent [[Sample Size|sample size]], the mistake called [[Pseudoreplication]] ([[Hurlbert 1984]]): the model thinks it has 1,130 separate pieces of information when many are partly copies, so its uncertainty comes out too small and its p-values too hopeful.

Three confusions: three visits are not three times the data, being worth less than three separate points; a miss within a short season is more often a detection failure than a departure, though closure needs checking; and repeats across years do not work the same way. In the grassland bird data `Survey` records the round (rows per round: 2,558, 2,649 and 2,535), 414 of 416 points have 3 visits and 2 have 4, and each point was surveyed in one season only, so site cannot be separated from year ([[Why site and year cannot be separated]]). The model ties each point's visits together with `(1|PtNum)`, a [[Random Intercept]] that gives each point its own baseline ([[Why a random intercept for point]]), as Dr. Roberts confirmed ([[Proposal Feedback from Dr Roberts]]). In the Oct 13 results visits to the same point were clearly more alike for focal [[Species Richness|richness]] (point variance 0.20) but not for all-species richness (0 once property, habitat and weather were in), so H3 was only half supported ([[Preliminary Results]]). The same visits give each species a [[Detection History|detection history]] per point, exactly the input an [[Occupancy Model]] needs.

## Connections
- **Builds on:** [[Point Count Survey]], [[Probability]], [[Independence of Observations]], [[Imperfect Detection]], [[Sample Size]], [[Species Richness]], [[Detection History]]
- **Leads to:** [[Closure Assumption]], [[Detection Probability]], [[Repeated Measures]], [[Pseudoreplication]], [[Random Intercept]], [[Occupancy Model]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]], [[MOC 14 - Mixed Models|MOC - Mixed Models]]
- **Go deeper:** [[Why a random intercept for point]], [[Why site and year cannot be separated]], [[Proposal Feedback from Dr Roberts]], [[Preliminary Results]], [[Hobbs and Hooten 2015 Ch6]], [[Hurlbert 1984]]

## Flashcards

Name the two different things that three visits per point give you.
??
(1) Information about detection: a species found on some visits but not others shows it can be missed, which occupancy models use. (2) Linked data: the visits share a point, so the model needs a random intercept for point to avoid pseudoreplication.
++++

Why are three visits to one point worth less than three separate points?::They share the point's habitat and residents, so they are partly copies of each other, not independent samples.
