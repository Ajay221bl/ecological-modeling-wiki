---
type: molecular
tags:
  - molecular
  - bayesian
  - detection
  - future-work
aliases:
  - "Bayesian and occupancy extensions"
status: seedling
---

# How the project could grow into Bayesian and occupancy models
> [!summary] In plain words
> My current model already has layers (visits inside points). A Bayesian version keeps the same model but describes every unknown number with a probability distribution, so I could say things like "there is a 95% chance the tree-cover effect lies in this range". An occupancy model adds a missing layer: whether a species is really there versus whether it was detected, which my three visits per point make possible. Neither is due for the Report; both are later steps.

## The question
The final proposal (Oct 12) plans a Bayesian version of the best model later ([[Hobbs and Hooten 2015 Ch1]]) and, if time allows, a Dickcissel occupancy model. The Oct 13 Final Draft options list keeps both, alongside two fixes for the Report's diagnostics. How do these grow out of the current Poisson GLMM, and what would each add?

## Built from
- [[Probability]]: the language both extensions are written in.
- [[Frequentist vs Bayesian]]: the difference in what parameters and intervals mean.
- [[Prior]] and [[Posterior]]: the inputs and outputs of a Bayesian analysis.
- [[Hierarchical Model]]: the layered structure my random intercept already has.
- [[MCMC]]: the computer method used to fit Bayesian models.
- [[Occupancy Model]]: separates true presence from detection.
- [[Repeat-Visit Design]]: the feature of my data that makes occupancy possible.

## The reasoning, step by step
1. **My model already has layers.** Visits sit inside points, and point baselines come from a shared distribution whose spread is estimated. That is a hierarchical model.
2. **Bayesian = same model, different bookkeeping.** A Bayesian model writes every unknown (the property or habitat effects, the spread σ²) as a probability distribution. You start with a [[Prior]] (what is plausible before the data) and update it with the data to get a [[Posterior]] (what is plausible after).
3. **Models are linked parts.** Hobbs and Hooten frame models as an observation model, a process model and parameter models ([[Hobbs and Hooten 2015 Ch1]], p. 10, eq. 1.1.5). My current model has a process part (property or habitat, weather, point) and a Poisson data part, with no separate detection layer.
4. **What Bayesian buys.** A [[Posterior]] for each parameter lets me say "the probability that richness rises with tree cover is ...", using [[Credible Interval|credible intervals]] instead of confidence intervals. The cost: it needs MCMC and convergence checks ([[MCMC Convergence Diagnostics]]).
5. **The missing layer is detection.** An occupancy model says each species at each point is either present or not (the true state), and if present it is detected on each visit with some probability. Hobbs and Hooten's lizard example shows the same idea of modelling detection explicitly ([[Hobbs and Hooten 2015 Ch6]], p. 129).
6. **A tiny example of why repeats help.** Suppose a species is truly present and has a 50% chance of being detected per visit. On one visit you miss it half the time. Across 3 visits, the chance of missing it every time is 0.5 × 0.5 × 0.5 = 0.125, so you catch it at least once 87.5% of the time. The pattern of hits and misses across visits (say detected, missed, detected) is what lets the model estimate that 50%.
7. **My data have that design.** Points have 3 visits each within a season, when presence should not change.
8. **It links back to the original study.** That study used Bayesian multi-species occupancy models on this system ([[Berry et al. 2026]]), so an occupancy model for one species (Dickcissel) would connect my project to it.

## So in my project
- **Not for the Report (due Oct 13).** The brief is explicit: no Bayesian model and no occupancy model yet; mention them only as planned next steps.
- **The Final Draft options list (Oct 13)**, from the report-plan thread ([[Next Steps]]):
  1. A GAM with a spatial smooth, `s(longitude, latitude)`, to absorb the weak spatial autocorrelation ([[Generalized Additive Model]]).
  2. A distribution that allows less spread than Poisson: Conway-Maxwell-Poisson or generalized Poisson in glmmTMB, or a binomial "k of 6" for focal richness ([[Underdispersion]]).
  3. A Bayesian version of the best model (Hobbs and Hooten 2015), with brms or Stan, tying in with the Nov 19 Stan mixed-models lab.
  4. A single-species occupancy model for Dickcissel (`unmarked::occu`), after the Nov 3-5 lecture.
  5. Stretch: a hierarchical GAM letting the habitat effect vary by property ([[Hierarchical GAM]]).
  6. Stretch: a multi-species occupancy model as in Berry et al. 2026, probably too much for this semester ([[Multi-species Occupancy Model]]).
  Recommendation: option 1 with option 2 as the main upgrade, then option 3. Options 1 and 2 fix the Report's two diagnostic problems ([[Why the Report keeps the Poisson model despite the diagnostics]]); options 3 to 6 are the growth this note is about.
- Timing from the syllabus: Bayesian mixed models (Oct 13, lab Oct 15), occupancy guest lecture and lab (Nov 3 and 5), Stan labs for simple and mixed models (Nov 17 and 19). The Final Draft is due Nov 19, so an occupancy model is a stretch goal.
- The Bayesian version would keep the formula of the best model, which on Oct 13 was M3 (Property + Habitat) for both responses ([[Preliminary Results]]), so results can be compared directly with the [[glmer()]] fit. A prior on the point variance would also give a more honest answer than the all-species singular fit at exactly 0 ([[Prior]]).
- An occupancy model could also use the habitat file's spatial covariance as a predictor of where Dickcissels occur, which is close to what [[Berry et al. 2026]] did for six species.

## What would go wrong otherwise
- Jumping to occupancy or Bayesian methods before the course covers them would risk code errors and a late Report (late work loses 50%).
- Never adding a detection layer leaves the "observed vs true richness" problem unaddressed ([[Why observed richness is not true richness]]).
- A Bayesian model with poorly chosen priors or unchecked convergence can be worse than the frequentist fit.

## Connections
- **Related:** [[Bayes' Theorem]], [[Dickcissel]], [[Next Steps]], [[Alternatives Considered]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]
