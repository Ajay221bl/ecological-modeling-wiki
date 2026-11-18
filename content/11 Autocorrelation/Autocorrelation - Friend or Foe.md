---
type: atomic
tags:
  - autocorrelation-gams
  - spatial
  - statistical-philosophy
  - flashcards
aliases:
  - "Autocorrelation friend or foe"
  - "friend or foe"
status: seedling
---

# Autocorrelation - Friend or Foe
**In one line:** "Nearby things are alike" can be treated as a problem to correct in your statistics, or as a clue about how nature works; the attitude you pick changes what you look at.

> [!info] Before this, it helps to know
> [[Spatial Autocorrelation]] (what the thing is) · [[Correlation vs Causation]] · [[Null Model]] (a baseline your model should beat)

## Start from zero
Nearby things are alike. Neighbouring fields have similar birds. You can react to that in two ways.

**As a foe:** "My statistics assume every point is independent. Neighbours being alike breaks that. I must correct for it."

**As a friend:** "Why are neighbours alike? Maybe birds spread only short distances, or the soil changes slowly, or a predator hunts over a large area. The pattern of alikeness is telling me something."

Both are reasonable. They answer different questions.

## Why it exists
Since [[Spatial Autocorrelation]] is everywhere in ecology, the real question is what to do about it. McGill describes four attitudes ([[McGill 2013]], PDF pp. 2-3):
1. **Unimportant:** ignore it (what ecologists did for most of history).
2. **Foe:** it breaks the independence most statistics assume, so correct it.
3. **Friend:** the pattern is informative. The distance at which alikeness fades, its direction, and breaks in it hint at processes such as dispersal limits, patchy environments, or predators moving at larger scales.
4. **Ignorance measure:** use "a nearby site's value" as a baseline prediction your model should beat. McGill reports that predicting abundance as equal to the nearest observed site did as well as fancy niche models (Bahn and McGill 2007).

Foe and friend can use the same tool (GLS); the difference is whether you focus on the corrected p-value or on the estimated pattern of similarity (PDF p. 2). McGill's later comment adds a practical rule: if your focus is estimating slopes it is probably safe to ignore; if your focus is p-values it is not so safe (PDF p. 5).

Diniz-Filho et al. show why "foe" can be overdone. In their European bird richness data, adding environmental variables removed autocorrelation from the residuals, and switching from ordinary regression (OLS) to spatial GLS mostly shifted which variables looked important toward those acting at smaller scales, rather than revealing a hidden bias ([[Diniz-Filho et al. 2003]], pp. 53, 60-61). Their conclusion: always investigate it, but it does not necessarily create bias, and it can be a useful tool for studying processes at different scales (p. 53).

## A tiny example
The "ignorance measure" in numbers. Three points with known richness 8, 7, 4, and a new point right next to the 7.
- **Nearest-neighbour guess:** 7.
- **Site average guess:** (8 + 7 + 4) / 3 ≈ 6.3.
If the new point actually has 7, the lazy neighbour guess beat the site average. A habitat model should beat both before you trust it.

## In my project
- **Foe view:** if neighbouring points are similar and my model ignores it, property and habitat effects look more certain than they are. My main inference is about those effects and their uncertainty, which is the "p-value focus" McGill flags as not safe to ignore. The Oct 13 check found weak leftover similarity: Moran's I about 0.05 for both responses, "significant" (p around 1e-7) mostly because there are 376 points ([[Spatial Autocorrelation]], [[Preliminary Results]]).
- **Friend view:** Dr. Roberts' own work uses spatial structure as ecological signal: Berry et al. linked a remote-sensing [[Spatial Covariance]] metric to grassland bird community occupancy ([[Berry et al. 2026]]). Similar richness at nearby points could reflect shared [[Grassland Core Habitat]]. Spatial covariance is now a predictor in my models, so part of that "friendly" pattern is modelled directly, and it mattered: about 7% more species per SD toward edges (all species), 17% more focal species per SD toward cores ([[Analysis Plan]]).
- **Ignorance measure:** with coordinates, I could ask whether "richness equals the nearest point's richness" predicts as well as property does. Not done.

How the two views shape my next steps: for the Report, the foe is small and partly offset by underdispersion, so it is reported, not fixed ([[Why the Report keeps the Poisson model despite the diagnostics]]). For the Final Draft, a smooth of latitude and longitude in a [[Generalized Additive Model]] would absorb the leftover pattern (foe view), and its fitted map would show *where* richness is higher than the predictors expect (friend view).

## Common confusions
- **"Friend or foe is a fact."** It is a choice of focus, set by your question.
- **"Correcting always changes the answer."** Often it mostly changes the uncertainty.
- **"Friend means ignore it."** No: friend means study it on purpose.

## Connections
- **Builds on:** [[Spatial Autocorrelation]], [[Independence Assumption]], [[Null Model]]
- **Leads to:** [[Spatial Covariance]], [[Model Purpose - Exploration Inference Prediction]], [[Generalized Additive Model]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation and GAMs]]
- **Go deeper:** [[McGill 2013]] (the four attitudes), [[Diniz-Filho et al. 2003]]

> [!question]- Check yourself
> According to Diniz-Filho et al., when do you NOT need to "correct" a regression for spatial autocorrelation?
> ?
> When the model's residuals show no significant spatial autocorrelation. Then the predictors have accounted for the spatial pattern and the ordinary analysis is not biased by it, even if the raw variables are strongly autocorrelated.
