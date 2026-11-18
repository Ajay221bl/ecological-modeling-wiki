---
type: project
tags:
  - project
  - grassland-bird-richness
  - feedback
aliases:
  - "Dr Roberts feedback"
  - "CPR feedback"
  - "Proposal feedback"
status: seedling
---

# Proposal Feedback from Dr Roberts

> [!summary] In plain words
> Dr. Roberts left two comments on my proposal. First: use real habitat measurements (like tree cover), because "sites differ" alone cannot show that habitat is the reason. Second: he agreed with giving each survey point its own baseline in the model (a random intercept for point). Both are addressed in the final proposal of Oct 12 and in the code run on Oct 13: habitat models now compete with a property model, and the random intercept is in every model.

**Document:** `Project_Proposal_with_CPR_Feedback.docx` (proposal about 820 words, submitted Sep 10, 2026).
**Format:** two Word comments by Caleb Roberts, both dated Sep 15, 2026 in the file.

## Comment 1: habitat data
**Attached to:** "...since poor weather can make birds harder to detect regardless of habitat quality." (Methods paragraph about Wind and Sky)

**His words:** "True, but I suggest you leverage some of the habitat data too. Would be useful for your stated hypothesis: if the site is more predictive than the habitat, then your hypothesis is supported."

**What it means:**
- "True" accepts the weather reasoning ([[Why include wind and sky]]).
- He suggests adding measured habitat variables, for example tree cover, shrub cover, or the [[Spatial Covariance]] metric from his paper (a satellite-based measure of whether grass and trees are separated by a boundary near each point) ([[Berry et al. 2026]]), as predictors. A **predictor** is a variable used to explain the response ([[Predictor Variable]]); a **covariate** is another word for a measured predictor.
- His logic sets Site and habitat up as competing explanations to compare (e.g. with [[AIC]] in the [[Candidate Model Set]]), which is a sharper test than Site alone ([[Why site identity is a weak test of a habitat hypothesis]]).

**Why this matters, from scratch:** sites differ in many ways at once (habitat, year, crew, season). If I only know *which site* a count came from, a site difference could come from any of them. A measured habitat variable names one specific cause, so the model can test it directly ([[Correlation vs Causation]], [[Confounding]]).

**Status: addressed in the final proposal (Oct 12).** How:
- The habitat data were in the USGS data release all along: the habitat file has one row per point ([[Dataset]], [[Roberts et al. 2025]]). The bird CSV alone has no habitat variables, which is why they seemed missing.
- Habitat predictors: spatial covariance at three window sizes (one per model), tree cover (WD50 + FO50) and scrub cover (SC50), all standardized ([[Analysis Plan]]).
- His logic became the hypotheses: **H1** property identity (M1) versus **H2** local habitat (M2a-c), with M3 combining both, ranked by AIC ([[Hypotheses]]). His sentence "if the site is more predictive than the habitat, then your hypothesis is supported" now reads as: M1 beating the habitat models supports H1.
- **Implemented Oct 13:** the analysis script fits the habitat models (M2a-c) and M3 for both responses ([[R Scripts Walkthrough]]). Result: property plus habitat beat either alone, so the answer to his question is "both matter" ([[Preliminary Results]]).

## Comment 2: random effect for point
**Attached to:** "I will add a random effect for point location"

**His words:** "Good! Specifically, I would set “point” as a random intercept."

**What it means:** use `(1|PtNum)` in every model. In words: "let each point (PtNum) have its own baseline richness." An **intercept** is the starting level of a model's prediction; "random" means each point's level is treated as drawn from one shared pattern rather than estimated as a separate free number ([[Random Intercept]], [[Random Effect]]). This matches the plan and the scripts ([[Why a random intercept for point]], [[glmer()]]).

**Status: done.** It was in all five Sep 10 formulas, and since Oct 13 `GrasslandBirdRichness_Analysis.R` has it in every model (M0-M3), as the final proposal states for hypothesis **H3** (repeated visits; numbered H2 in the Sep 10 proposal). Its estimated variance is 0.20 for focal species and 0 for all species ([[Preliminary Results]]).

## What he did not comment on
No comments on the introduction, the hypotheses wording, the choice of Poisson, AIC, or the Bayesian and occupancy plans. Silence is not approval, but nothing there was flagged.

## How the feedback went into the Report (drafted Oct 13)
The Report's Introduction, Hypotheses and Methods were built from the final proposal, which carries both comments:
1. Methods: name the random intercept for point and cite [[Hurlbert 1984]] and [[Bolker et al. 2009]] (H3).
2. Methods and Results: the property-versus-habitat model comparison, not "habitat as a planned addition".
3. Limitations (a paragraph inside Methods, since the Report has no Discussion): property is confounded with year, dates and crew, which strengthens his point that property alone is a weak test ([[Why site and year cannot be separated]]).

## Follow-up email
No longer needed for habitat data or site names (both answered by the data release). Remaining questions, if any, are in [[Open Questions]]; subject must start "Class: Ecological Modeling".

Logged in [[Decision Log]].

**Part of:** [[MOC 23 - Grassland Bird Richness Project|MOC - Grassland Bird Richness Project]]
