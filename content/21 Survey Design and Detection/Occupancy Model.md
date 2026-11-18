---
type: atomic
tags:
  - survey-design
  - detection
  - hierarchical-models
  - flashcards
aliases:
  - "occupancy"
  - "occupancy models"
  - "site occupancy model"
status: seedling
---

# Occupancy Model
**In one line:** A model that uses repeat visits to estimate two separate chances: that a species really lives at a spot, and that you notice it when it does.

*Introductory note: occupancy modelling is taught in the guest lecture and lab on Nov 3 and 5. Expand this note after that.*

> [!info] Before this, it helps to know
> [[Probability]] (chances between 0 and 1) · [[Repeat-Visit Design]] (the data it needs) · [[Detection Probability]]

## Start from zero
You stand in a field for a few minutes and write down what you see and hear. No Dickcissel. Does that mean there is no Dickcissel here? Two stories fit:
1. It is not here.
2. It is here and kept quiet.

One visit cannot tell these apart. But if you visit three times and at other, similar points the bird often shows up on only some visits, you learn how often a present bird gets missed. Then you can work out how believable an "all zeros" point is.

An occupancy model does this bookkeeping. "Occupied" just means "the species is really present at this spot this season".

## Why it exists
It splits the problem into two linked layers, the same structure Hobbs and Hooten use for hierarchical models: a "what is true" (process) model and a "how we saw it" (observation) model ([[Hobbs and Hooten 2015 Ch1]], pp. 5-10; [[Hobbs and Hooten 2015 Ch6]], p. 110):

1. **Truth layer:** is the species present at point i? Yes with probability ψ (psi, "occupancy").
2. **Seeing layer:** if present, is it detected on visit j? Yes with probability p. If absent, it can never be detected (in the basic model).

Covariates can go on either layer: habitat on ψ, weather or observer on p ([[Detection Covariates]]).

What goes wrong with a plain "seen / not seen" model? It estimates ψ × p mixed together. Anything that lowers detection would look like it lowers presence.

## A tiny example
Say the model estimates p = 0.5 per visit and 3 visits per point.
- Chance a present bird is missed all 3 times: 0.5 × 0.5 × 0.5 = 0.125.
- So of 100 occupied points, about 12 or 13 would show "0, 0, 0" by bad luck.

If 40 of 100 points show at least one detection, those 40 make up the other 87.5% of occupied points, so the total occupied is about 40 / 0.875 ≈ 46. True occupancy ≈ 0.46, not the naive 0.40. (Real software does this more carefully, but this is the logic.)

## In my project
Not part of the Project Report. A single-species occupancy model for [[Dickcissel]] is one of the Final Draft options, after the Nov 3-5 occupancy lecture ([[How the project could grow into Bayesian and occupancy models]]).
- **Data I already have:** for each species, a detection history per point across `Survey` 1-3 ([[Repeat-Visit Design]]).
- **Example:** [[Dickcissel]] (331 rows) was detected at 164 of 416 points; at 105 of those it was missed on at least one visit. A Dickcissel occupancy model would ask what fraction of points are really occupied, and how Wind or observer change p.
- **Published precedent:** Berry et al. used Bayesian multi-species occupancy models for six declining grassland species with these same surveys ([[Berry et al. 2026]]).
- **Missing piece:** habitat covariates for the truth layer, which Dr. Roberts suggested requesting ([[Proposal Feedback from Dr Roberts]]).

Notation clash: in Hobbs and Hooten's preview example ψ is a detection probability (Ch1, p. 14), while occupancy papers use ψ for occupancy.

## Common confusions
- **"Occupancy = abundance."** No: occupancy is yes/no presence, not how many ([[Occupancy vs Abundance vs Richness]]).
- **"Zeros mean absent."** Only after accounting for p.
- **"Any repeats work."** Repeats must be close enough in time that presence does not change (closure).

## Connections
- **Builds on:** [[Detection Probability]], [[Imperfect Detection]], [[Repeat-Visit Design]], [[Hierarchical Model]]
- **Leads to:** [[Occupancy vs Abundance vs Richness]], [[How the project could grow into Bayesian and occupancy models]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]
- **Go deeper:** [[Hobbs and Hooten 2015 Ch1]], [[Hobbs and Hooten 2015 Ch6]], [[Berry et al. 2026]]

> [!question]- Check yourself
> Why does an occupancy model need repeat visits?
> ?
> With one visit, a non-detection cannot be split into "absent" versus "present but missed". Repeat visits show how often a present species is missed, which lets the model estimate p and then ψ.
