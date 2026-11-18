---
type: project
tags:
  - project
  - grassland-bird-richness
  - decisions
aliases:
  - "Rejected options"
  - "Alternatives"
status: seedling
---

# Alternatives Considered

> [!summary] In plain words
> Before settling on "is richness explained better by property or by local habitat?", I weighed other questions (wind and Dickcissels, observers, fly-overs, year-to-year change), other ways of modelling (no adjustment for repeat visits, straight-line regression, Bayesian or occupancy models), and other habitat measures (field vegetation, all three spatial scales at once). Each was set aside for a reason written here, so I do not re-argue old choices and have backups ready if the main model misbehaves.

Options weighed while choosing the project, and why each was not chosen. Chosen decisions are in [[Decision Log]]; the chosen model set is in [[Analysis Plan]].

## Other research questions
| Option | Why not chosen | Status |
|---|---|---|
| Wind → Dickcissel counts (detectability) | Workable, but Dickcissel counts are strongly overdispersed (variance/mean about 12, far more spread than Poisson allows), so it needs a [[Negative Binomial Distribution]]; and it is a survey-methods question, not a habitat question | Kept as a backup idea |
| Observer effects (11 raw observer codes) | Valid, but a weak scientific story ([[Observer Effects]]) | Rejected |
| Fly-overs as habitat use (binomial GLM, a model for yes/no outcomes) | Too rare (207 rows, 2.7%) and limited to a few aerial species ([[Fly-over Detections]]) | Rejected |
| 2022 vs 2023 comparison | Two years cannot say much about trends; and year is completely confounded with property ([[Why site and year cannot be separated]]) | Rejected |
| Detection distance by property | Harder to set up as a single model ([[Distance Bands]]) | Rejected |
| Property differences only (the Sep 10 question) | Shows *that* properties differ, not *why*; Dr. Roberts suggested testing habitat directly ([[Why site identity is a weak test of a habitat hypothesis]]) | Superseded Oct 12 by property vs habitat (H1 vs H2) |

## Other habitat measures (Oct 12)
| Option | Why not chosen | Status |
|---|---|---|
| Field vegetation metrics: Robel visual obstruction (ROBEL_AVG), distance to trees (DENS_101), tree diameter (DBH_AVG) | Missing at 112 to 224 of the 416 points, mostly roadside points. Using them would shrink the data a lot and drop roadside points unevenly across properties, and AIC needs every model on the same rows ([[Visual Obstruction (Robel Pole)]], [[Tree Density|Tree Density and DBH]], [[Roadside Surveys]], [[Complete-Case Analysis]]) | Rejected |
| All three spatial covariance scales in one model | The scales are correlated (Spearman 0.47 to 0.76), which makes their separate effects unstable ([[Collinearity]]) | Rejected: one scale per model (M2a, M2b, M2c) |
| A single, pre-chosen spatial scale only | Which window matters is itself unknown; comparing the three lets the data choose ([[Why the window size is a choice of scale]]) | Rejected |

## Other model structures
Glossary: a **GLM** is a model for counts or yes/no data with no adjustment for groups ([[Generalized Linear Model]]); a **GLMM** adds that adjustment ([[GLMM]]); **pseudoreplication** is treating repeat measurements of the same thing as independent ([[Pseudoreplication]]).

| Option | Why not chosen | Status |
|---|---|---|
| Plain GLM (no random effect) | Repeat visits to a point are not independent, so a GLM would pseudoreplicate (H3) ([[Why a random intercept for point]]) | Rejected |
| Occupancy model as the main method | Not taught until the Nov 3-5 guest lecture ([[Occupancy Model]]) | Stretch goal for the Final Draft |
| Bayesian hierarchical model as the main method | Steeper learning curve; Bayesian mixed models come later in the course ([[Frequentist vs Bayesian Inference|Frequentist vs Bayesian]]) | Planned later extension |
| Linear regression on richness | Richness is a count; Normal errors and constant variance do not fit ([[Why Poisson instead of linear regression for richness]]) | Rejected |
| Property as a random effect | Only 5 levels, and the property effects are the target ([[Why Site is fixed not random]]) | Rejected |
| Negative binomial from the start | Variance/mean ratios near 1 do not call for it ([[Why check overdispersion before trusting Poisson]]) | Not needed (Oct 13): the fitted models are underdispersed, and a negative binomial can only add spread, not remove it ([[Preliminary Results]]). Distributions that allow less spread are Final Draft options ([[Next Steps]]) |
| Rank models by AICc (the `model.sel()` default) | The proposal says AIC; with 1,130 visits AIC and AICc are almost identical | Rejected: `rank = "AIC"` (Oct 13, [[Decision Log]]) |
| A separate functions script for the Report | The syllabus lists scripts with "e.g.", so it is not required; the two helper functions sit in the analysis script ([[Wrangling vs Analysis Scripts]]) | Deferred: possible in the Final Draft |
| Adding Year as a predictor | Year is completely determined by property, so the model cannot estimate both ([[Confounding]]) | Rejected: stated as a limitation |

Why "Normal errors and constant variance do not fit" counts, in one example: a straight-line model with bell-curve (Normal) scatter could predict -1 species at a poor point, which is impossible, and it assumes the scatter is the same size whether the average is 2 or 12, while real counts scatter more when their average is bigger ([[Normal Distribution]], [[Linear Model Assumptions|Assumptions of Linear Models]]).

## Why these alternatives still matter
1. They are material for the Final Draft's Discussion: "future work could model detection explicitly" links to the occupancy and Dickcissel ideas ([[How the project could grow into Bayesian and occupancy models]]).
2. If the main model fails (dispersion or convergence problems), the fallbacks are already reasoned through. On Oct 13 the problem turned out to be underdispersion, not overdispersion ([[Underdispersion]]).
3. Writing down why something was rejected stops me from re-arguing the same choice later.

**Part of:** [[MOC 23 - Grassland Bird Richness Project|MOC - Grassland Bird Richness Project]]
