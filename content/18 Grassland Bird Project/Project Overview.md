---
type: project
tags:
  - project
  - grassland-bird-richness
aliases:
  - "Overview"
  - "My project"
status: seedling
---

# Project Overview

> [!summary] In plain words
> Birders stood at 416 spots in five Arkansas grassland properties and wrote down every bird species they saw or heard, visiting each spot about three times. I count how many different species were found on each visit and ask: is that number explained better by *which property* the spot is on, or by *the habitat right around the spot* (trees, scrub, and whether grass meets woods nearby)? The model also handles repeat visits to the same spot and the weather.

**Title:** Grassland Bird Species Richness Across Fragmented Arkansas Grasslands: A Mixed-Model Approach
**Author:** Ajaydeep Bedi
**Course:** Ecological Modeling (BIOL580V, section 003), Dr. Caleb P. Roberts, Fall 2026, University of Arkansas
**Current deliverable:** Project Report, due **Oct 13**: drafted, final steps left (see [[Milestones and Deadlines]])

> [!info] New here? Start with these
> If words like "model", "variable" or "average" feel shaky, [[MOC 01 - Basics from Zero|MOC - Basics from Zero]] builds them up from nothing. This page is the front door: it tells the whole story in plain words and points to the note that owns each piece.

## The picture to keep in your head
Imagine standing in a field at dawn for a few minutes, writing down every bird species you detect. That is one **point count** ([[Point Count Survey]]). The spot you stand on is a **point**. One trip to one point on one day is a **point-visit**. The number of different species on your list is the **species richness** for that visit ([[Species Richness]]). If you saw 3 Dickcissels, 1 Northern Bobwhite and 2 Field Sparrows, richness is 3 (three species), not 6 (six birds).

My data hold 1,250 of these point-visits from five properties: Bald Knob NWR (BK), Camp Robinson SUA (CR), the Dark Corner (DC) and Howell (HO) tracts of Cache River NWR, and Holla Bend NWR (HB) ([[Study Sites]]). A second file describes the habitat around every point ([[Dataset]]).

## The question in one sentence
Is the number of bird species detected per point-count visit better explained by the habitat around each survey point or by which of five Arkansas properties the point is on, after accounting for repeated visits to the same point and for weather? (Final proposal, Oct 12.)

In everyday words: if CR has more species per visit than BK, is that because of something about CR as a place (its history, its crew, its survey year), or because CR's points happen to sit in different habitat?

## Why it matters
Grassland birds have declined steeply across North America, largely through habitat loss and woody encroachment, meaning trees and shrubs spreading into open grassland ([[Rosenberg et al. 2019]]; [[Brennan and Kuvlesky 2005]]; [[Grassland Bird Decline]]; [[Woody Encroachment|Woody Plant Encroachment]]). The data come from a USGS (U.S. Geological Survey) project on grassland birds in fragmented habitat ([[Roberts et al. 2025]], [[Habitat Fragmentation]]). The published study used the satellite-based [[Spatial Covariance]] metric and Bayesian multi-species occupancy models for six declining species ([[Berry et al. 2026]]). My project asks a simpler, complementary question with the raw field counts.

## The plan in brief
- **Hypotheses:** H1 property identity, H2 local habitat, H3 repeated visits ([[Hypotheses]]).
- **Responses:** species detected on the ground per visit, plus a secondary count of the six focal grassland species.
- **Model:** a Poisson GLMM, a count model that also gives each point its own baseline ([[GLMM]], [[Why Poisson instead of linear regression for richness]], [[Why a random intercept for point]]).
- **Comparison:** six candidate models (weather only, property, habitat at three scales, property + habitat) ranked by [[AIC]] ([[Why compare models with AIC rather than only p-values]]).

Every detail (data rows, predictors, model set, checks, limitations) is in [[Analysis Plan]], which owns it.

## What the first results say (Oct 13)
The property-plus-habitat model won clearly for both responses, so property and habitat each explain part of richness (H1 and H2 both supported). All species rise toward tree-grass edges; the six focal grassland species fall with tree cover and rise toward cores. Visits to the same point are alike for focal species but not for all species (H3 half supported). The numbers, and two model problems to fix in the Final Draft, are in [[Preliminary Results]].

## Where things stand (Oct 13, 2026)
- Proposal submitted Sep 10; Dr. Roberts' feedback addressed in the final proposal, revised Oct 12 ([[Proposal Feedback from Dr Roberts]], [[Decision Log]]).
- R scripts rewritten to the final plan and run in RStudio on Oct 13 (done; until Oct 12 they still ran the Sep 10 models) ([[R Scripts Walkthrough]]).
- Report drafted (2,787 words). Left before submitting today: approve, final clean run, zip, email ([[Next Steps]]).
- Next deliverable: the Final Draft, due Nov 19.

## Biggest caveats to carry into the Report
1. **Property is confounded with year, dates and crew,** so a property effect cannot be pinned on any one of them ([[Why site and year cannot be separated]]). Habitat varies within properties, which is why the habitat comparison is informative ([[Why site identity is a weak test of a habitat hypothesis]]).
2. **Near-zero spatial covariance is not proof of grassland:** BK is open largely because much of it is cropland ([[EDA Findings]]).
3. **Observed richness is not true richness** ([[Why observed richness is not true richness]]).

## Project notes
[[Hypotheses]] · [[Dataset]] · [[Study Sites]] · [[Analysis Plan]] · [[EDA Findings]] · [[Preliminary Results]] · [[Decision Log]] · [[Alternatives Considered]] · [[Proposal Feedback from Dr Roberts]] · [[Milestones and Deadlines]] · [[Next Steps]] · [[R Scripts Walkthrough]]

A good reading order for a beginner: this page, then [[Dataset]], [[Study Sites]], [[Hypotheses]], [[Analysis Plan]], [[R Scripts Walkthrough]], [[Preliminary Results]].

**Part of:** [[MOC 23 - Grassland Bird Richness Project|MOC - Grassland Bird Richness Project]]
