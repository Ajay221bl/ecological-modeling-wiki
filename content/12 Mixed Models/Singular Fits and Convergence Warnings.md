---
type: atomic
tags:
  - mixed-models
  - r
  - flashcards
aliases:
  - "singular fit"
  - "convergence warning"
  - "convergence warnings"
  - "boundary singular fit"
  - "failed to converge"
status: seedling
---

# Singular Fits and Convergence Warnings
**In one line:** messages from `glmer()` saying either "I am not sure I found the best answer" (convergence warning) or "I ended up at an edge, usually a spread of exactly zero" (singular fit).

> [!info] Before this, it helps to know
> [[Functions and Arguments]] (what `glmer()` and its `control =` argument are) · [[Variance Component]] (the spread that can hit zero) · [[Probability]] (likelihood is built on it)

## Start from zero
Fitting a model is a search. The computer tries many combinations of parameter values and keeps the one that makes your data most probable ([[Likelihood]], [[Maximum Likelihood Estimation]]).

Picture searching for the highest point of a hill in fog. On a sharp peak it is easy. On a wide, flat plateau you shuffle around and cannot be sure you are at the top. A **convergence warning** is the computer saying "it's flat here; I stopped, but I'm not sure this is the top".

A **singular fit** is different. Imagine the top of the hill is right at a cliff edge you are not allowed past. A spread (variance) cannot go below zero, so if the best answer "wants" a negative spread, the search stops at exactly zero. That is a "boundary" or **singular** fit.

## Why it exists
Both happen when the data hold little information about some parameter. R then warns you rather than stopping. Why you should care:
- [[Anderson and Burnham 2002]]: if the search did not converge, "the maximum of the log-likelihood is not found and the various information criteria will be incorrect" (p. 917). An AIC table built on a bad fit can mislead.
- [[Harrison et al. 2018]]: a model too complex for the data will at best "fail to converge", and at worst "will 'work', risking false inference" (p. 12). A multi-level factor times a number predictor can leave very little data per combination (p. 13). Centring or standardizing predictors "will often solve convergence problems" (p. 14).
- A singular fit usually means a variance collapsed to zero, making the model act like a plain GLM (Harrison et al., pp. 7 and 17). Not an error, but you should know.
- [[Zuur et al. 2010]] show the same danger with barely sampled interaction combinations (pp. 10-11).

A warning is not an error: the script keeps running and still prints results. That is exactly why it is easy to miss.

## A tiny example
To estimate a slope you need different x values. Suppose at one site:

| Visit | Wind | Richness |
|---|---|---|
| 1 | 0 | 8 |
| 2 | 0 | 7 |
| 3 | 1 | 7 |
| 4 | 0 | 9 |

Only one visit has wind above 0. Asking for "this site's own wind slope" rests on one row. Many slopes fit almost equally well: the flat plateau. That is where convergence warnings come from.

## In my project
**Convergence: fixed by switching optimizer.** Every model in `fitCandidates()` is fit with

```r
control = glmerControl(optimizer = "bobyqa")
```

(`GrasslandBirdRichness_Analysis.R`). "bobyqa" is a different hill-climbing method. In the cloud test before ajay's run, the default method gave a convergence warning; bobyqa removed it, and ajay's Oct 13 run in RStudio matched.

**Singular fit: the all-species top model.** M3 for all-species richness printed `boundary (singular) fit`. That is a **message, not an error**: the script kept running and every number is usable. It means the PtNum [[Variance Component]] was estimated at exactly **0**. For focal richness the same model gave **0.20** (SD 0.45), with no message. Numbers: [[Preliminary Results]].

What a zero means in plain words: once property, habitat and weather are in the model, visits to the same point are no more alike than visits to different points. The fixed effects already explain why some points are richer, so there is no leftover point-to-point spread for the random intercept to describe. The search wanted a spread below zero, hit the "cliff edge" at 0, and stopped. One likely contributor (my reasoning, not tested): the counts are underdispersed, so the Poisson already allows more visit-to-visit spread than there really is, leaving nothing extra for points to explain.

Why the random intercept stays anyway:
- **It reflects the design.** Points were visited repeatedly; the model says so whatever the estimate turns out to be ([[Why a random intercept for point]]).
- **It was planned before seeing results.** Dropping it because of the result would be a data-driven change ([[Data Dredging]]).
- **Every model keeps the same random part,** so the AIC comparison stays about property and habitat ([[Candidate Model Set]]).
- **No harm done.** With a variance of 0, the fixed-effect estimates are what a plain GLM would give, so nothing is distorted.
- **For focal richness it is clearly needed** (0.20), and that half of H3 is supported.

History: the Sep 10 Global model (`Site * Wind`) was the one at risk, because CR and HB had only 4 and 5 visits at Wind = 2 and none at 3. It is gone from the code.

## Common confusions
- **"Warnings can be ignored because results printed."** Results from an unconverged fit, and its AIC, may be wrong.
- **"Singular fit means I must drop the random effect."** Not necessarily; it can stay to reflect the design, but say what happened.
- **"Convergence and singularity are the same."** One is "unsure I reached the top"; the other is "the top is at an edge".

## Connections
- **Builds on:** [[Maximum Likelihood Estimation]], [[Interaction Term]], [[Variance Component]], [[Functions and Arguments]]
- **Leads to:** [[Overfitting]], [[AIC]], [[glmer()]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]
- **Go deeper:** [[Harrison et al. 2018]] (practical fixes), [[Anderson and Burnham 2002]] (why AIC needs a converged fit), [[Zuur et al. 2010]]

> [!question]- Check yourself
> My all-species top model prints `boundary (singular) fit` and its point variance is 0. Is the model broken, and should I drop the random intercept?
> ?
> Neither. It is a message, not an error: the search hit the edge where a variance cannot go lower. It means visits to the same point are no more alike than visits to different points once the predictors are in. The random intercept stays because it reflects the repeated-visit design, was planned in advance, keeps all models comparable, and changes nothing when its variance is 0. (A convergence warning would be different: then check other optimizers, as the switch to bobyqa did.)
