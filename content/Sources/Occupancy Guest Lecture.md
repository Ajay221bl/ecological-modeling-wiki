---
type: source
tags:
  - source
  - reading
aliases:
  - "Occupancy lecture"
  - "OccLecture"
  - "Occupancy Modeling guest lecture"
  - "Nov 3 occupancy lecture"
status: seedling
---
<!-- gen_sources -->

# Occupancy Guest Lecture

> [!summary] In plain words
> The Nov 3 guest lecture slides on occupancy modeling: what occupancy is, imperfect detection, ψ and p, detection histories and their likelihood, covariates, survey methods, the four assumptions, a spotted owl example, software, dynamic (multi-season) models and multi-species models.

**Citation:** Guest lecture slides, "Occupancy Modeling", Ecological Modeling (BIOL 580V), November 3, 2026. File: OccLecture (1).pptx in Raw Materials (44 slides).
**Syllabus week:** Tue Nov 3 guest lecture (lab Thu Nov 5).

> [!warning] Verify
> The slides' R example slide is a picture only, so the spotted owl code is not in the file; the wiki's R blocks fit the same model in base R. Values on the multi-species slide were read by eye from its plots and are approximate. The slide panel titled "Conditional" plots P(co-occurrence).

## What it's about
Builds occupancy from the problem of imperfect detection (a camera that sees a squirrel on occasions 1 and 3 but not 2; a Where's Waldo page where Waldo is found in 2 of 8 squares but is in 3). Defines ψ and p, works through detection histories for 30 sites and 4 surveys up to the likelihood, lists site and survey covariates, surveys nine field methods, states four assumptions, shows a spotted owl single-season example with an R demonstration, lists five software tools, then covers dynamic models (ψ₁, γ, ε, p) and two-or-more species models with marginal and conditional occupancy (chilla fox, culpeo fox, puma, humans).

## Key ideas I use
- What occupancy is for → [[Occupancy]], [[Species Distribution Model]], [[Metapopulation]]
- Imperfect detection and naive counts → [[Imperfect Detection]], [[Naive Occupancy]]
- Histories and likelihood → [[Detection History]], [[Occupancy Likelihood]]
- Covariates → [[Site Covariates]], [[Observation Covariates]]
- Survey types → [[Live Trapping]], [[Coverboard]], [[Track Survey]], [[Acoustic Survey]], [[Autonomous Recording Unit]], [[Breeding Amphibian Survey]], [[Camera Trap]], [[Hair Snare]], [[Environmental DNA]]
- Assumptions → [[Closure Assumption]], [[Site Independence Assumption]], [[Unexplained Heterogeneity in Occupancy]], [[Unexplained Heterogeneity in Detection]], [[Assumptions of Occupancy Models]]
- Single-season example → [[Single-season Occupancy]]
- Software → [[unmarked Package]], [[ubms Package]], [[spOccupancy Package]], [[Program PRESENCE]], [[Program MARK]], [[Choosing Occupancy Software]]
- Dynamic models → [[Multi-season Occupancy]], [[Colonization Probability]], [[Local Extinction Probability]]
- Multi-species models → [[Multi-species Occupancy]], [[Marginal Occupancy]], [[Conditional Occupancy]], [[Co-occurrence Probability]], [[Species Interaction]]

## Notes that rely on it (35)
[[Acoustic Survey]], [[Autonomous Recording Unit]], [[Breeding Amphibian Survey]], [[Camera Trap]], [[Change Log]], [[Closure Assumption]], [[Co-occurrence Probability]], [[Colonization Probability]], [[Conditional Occupancy]], [[Course Schedule]], [[Coverboard]], [[Detection History]], [[Environmental DNA]], [[Hair Snare]], [[Live Trapping]], [[Local Extinction Probability]], [[Marginal Occupancy]], [[Metapopulation]], [[Multi-season Occupancy]], [[Multi-species Occupancy]], [[Naive Occupancy]], [[Observation Covariates]], [[Occupancy]], [[Occupancy Likelihood]], [[Program PRESENCE]], [[Single-season Occupancy]], [[Site Covariates]], [[Site Independence Assumption]], [[Species Interaction]], [[spOccupancy Package]], [[Track Survey]], [[ubms Package]], [[Unexplained Heterogeneity in Detection]], [[Unexplained Heterogeneity in Occupancy]], [[unmarked Package]]

## Connections
- **Part of:** [[MOC 21 - Course Readings|MOC - Course Readings]]
- **Next:** [[Happe et al. 2020]]
