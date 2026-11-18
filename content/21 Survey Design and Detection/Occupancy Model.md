---
type: atomic
tags:
  - survey-design
  - detection
  - hierarchical-models
  - flashcards/eco/survey
description: "An occupancy model uses repeat visits to estimate two separate chances: that a species really lives at a site, and that you notice it on a visit when it does."
aliases:
  - "occupancy models"
  - "site occupancy model"
status: seedling
---

# Occupancy Model

You count birds at a point and record no Dickcissel. Two stories fit: it is not there, or it is there and kept quiet. One visit cannot tell these apart. But if you visit three times, and at other similar points the bird often shows up on only some visits, you learn how often a present bird gets missed, and then you can judge how believable an "all zeros" point is. An **occupancy model** does this bookkeeping. It estimates two separate [[Probability|probabilities]]: ψ ("psi"), the chance a site is occupied, meaning the species is really present there this season ([[Occupancy]]), and p, the [[Detection Probability]], the chance of noticing it on one visit if it is there. The data come from a [[Repeat-Visit Design]], giving each site a [[Detection History|detection history]] such as 1, 0, 1.

Why two layers? This is the same split Hobbs and Hooten use for hierarchical models: a [[Process Model|process model]] for what is true and an [[Data Model|observation model]] for how we saw it ([[Hobbs and Hooten 2015 Ch1]], pp. 5-10; [[Hobbs and Hooten 2015 Ch6]], p. 110; [[Hierarchical Model]]). In the truth layer, site i is occupied with probability ψ; in the seeing layer, an occupied site is detected on visit j with probability p, and an unoccupied site never is (in the basic model). A plain "seen or not seen" model estimates ψ × p mixed together, so anything that lowers detection would look as if it lowers presence ([[Imperfect Detection]]). Now the numbers. Say p = 0.5 per visit and 3 visits per site. A present bird is missed all three times with chance 0.5 × 0.5 × 0.5 = 0.125, so of 100 occupied sites about 12 or 13 would show 0, 0, 0 by bad luck. If 40 of 100 sites show at least one detection, those 40 are the other 87.5% of occupied sites, so about 40 / 0.875 ≈ 46 are occupied: true occupancy about 0.46, not the naive 0.40 ([[Naive vs Estimated Occupancy]]). Real software does this more carefully, but that is the logic. [[Predictor Variable|Covariates]] can go on either layer: habitat on ψ, weather or observer on p ([[Detection Covariates]]).

Three confusions. Occupancy is not abundance: it is yes-or-no presence, not how many ([[Occupancy vs Abundance vs Richness]]). Zeros do not mean absent until p is accounted for. And not any repeats work: the visits must be close enough in time that presence does not change, the [[Closure Assumption]]. A notation clash: in Hobbs and Hooten's preview example ψ is a detection probability (Ch1, p. 14), while occupancy papers use ψ for occupancy. In the grassland bird project, occupancy models are not part of the Project Report but a Final Draft option. The data already give each species a detection history per point across `Survey` 1 to 3; [[Dickcissel]] was detected at 164 of 416 points and at 105 of those was missed on at least one visit, so a Dickcissel model would ask what fraction of points are really occupied and how wind or observer change p ([[How the project could grow into Bayesian and occupancy models]]). Berry et al. used Bayesian multi-species versions with these same surveys ([[Multi-species Occupancy Model]], [[Berry et al. 2026]]). The full course treatment, from the Nov 3-5 guest lecture, is in [[Occupancy]] and [[Occupancy Workflow in R]].

## Connections
- **Builds on:** [[Probability]], [[Occupancy]], [[Detection Probability]], [[Repeat-Visit Design]], [[Hierarchical Model]], [[Detection History]], [[Process Model]], [[Data Model]], [[Predictor Variable]]
- **Leads to:** [[Imperfect Detection]], [[Naive vs Estimated Occupancy]], [[Detection Covariates]], [[Closure Assumption]], [[Multi-species Occupancy Model]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]], [[MOC 16 - Population Estimation|MOC - Population Estimation]]
- **Go deeper:** [[Occupancy vs Abundance vs Richness]], [[Occupancy Workflow in R]], [[How the project could grow into Bayesian and occupancy models]], [[Dickcissel]], [[Hobbs and Hooten 2015 Ch1]], [[Hobbs and Hooten 2015 Ch6]], [[Berry et al. 2026]]

## Flashcards

Why does an occupancy model need repeat visits?
??
With one visit, a non-detection cannot be split into "absent" versus "present but missed". Repeat visits show how often a present species is missed, which lets the model estimate p and then ψ.
++++

40 of 100 sites had a detection, with p = 0.5 and 3 visits. Roughly what is true occupancy?
??
A present bird is missed all 3 times with chance 0.125, so the 40 are 87.5% of occupied sites: about 40 / 0.875 ≈ 46%.
++++
