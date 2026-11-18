---
type: atomic
tags:
  - model-selection-diagnostics
  - flashcards/eco/selection
description: "Residual diagnostics are the health check you run on a fitted model, mostly by looking at its mistakes (residuals), before trusting its numbers."
aliases:
  - "model diagnostics"
  - "diagnostics"
status: seedling
---

# Residual Diagnostics

After a car repair, a mechanic does not just hand back the keys: they take the car for a test drive and listen for odd noises, because a repair can look fine on paper and still rattle. A fitted model is the repaired car, and **residual diagnostics** are the test drive: you look at the model's mistakes, its [[Residual|residuals]] (observed value minus the model's [[Fitted Value]]), to see whether its built-in assumptions hold, for example "the spread is what a [[Poisson Distribution|Poisson distribution]] expects" or "visits are independent once we account for the point" ([[Linear Model Assumptions]]). It matters because [[AIC]] ranks models but cannot tell you whether any of them is any good: AIC "tells us nothing about whether the basic distributional and structural assumptions of the model have been violated" ([[Harrison et al. 2018]], p. 15). The best of five broken models is still broken, and when assumptions fail, the usual damage is to the uncertainty: [[Standard Error|standard errors]] and [[Confidence Interval|confidence intervals]] become too narrow or too wide.

Look at residuals from 6 visits sorted by the model's guess: guesses 3, 4, 5, 8, 9 and 10 have residuals −0.5, +0.4, −0.2, +3, −3.5 and +4. The misses grow as the guess grows, a funnel. For a [[Linear Model|linear model]] that is a warning; for a Poisson count model some growth is expected (variance = mean), which is why [[Pearson Residuals|Pearson]] or [[DHARMa Simulated Residuals|simulated residuals]] rescale first, and healthy rescaled residuals form a flat, even band around zero. Harrison et al.'s checklist for [[Mixed Effects Model|mixed models]] (pp. 15-16): plot [[Residuals vs Fitted Plot|residuals against fitted values]] and against every [[Predictor Variable|predictor]], looking for patterns; plot residuals within groups of the [[Random Effect|random effect]]; draw a [[QQ Plot]] of the random-effect estimates (it lines your values up against what a perfect distribution would give, and a [[Equation of a Line|straight line]] means they match); and compute the dispersion statistic ([[check_overdispersion()]]), which "should be made a matter of routine", remembering that underdispersion is possible too (p. 16). Check the [[Global Model]], the biggest one: if it fits, the simpler models AIC prefers are on solid ground ([[Anderson and Burnham 2002]], p. 915; [[Johnson and Omland 2004]], p. 102).

Since Oct 13 the project's analysis script checks the top model for each response (`topRich`, `topFocal`). Dispersion ratios were 0.66 (all species) and 0.60 (focal), [[Underdispersion]]; the DHARMa dispersion test gave p = 0 and its uniformity (KS) test was also significant, mostly for the same reason, with [[plot() Diagnostics for lm|residual plots]] saved as PNGs; and [[Moran's I]] on residuals combined by point, using the habitat file's coordinates, was about 0.05 for both responses, weak but significant [[Spatial Autocorrelation]]. Residuals against Site, Wind and Sky (`plotResiduals(simRich, form = datClean$Site)`) and a QQ plot of point intercepts (`qqnorm(ranef(topFocal)$PtNum[, 1])`) are suggested additions, not yet run; the QQ plot is pointless for all species, where the point variance is 0. Here the top-ranked model, M3, is also the most complex in the set (K = 11), so checking the winner and checking the global model are the same thing. The two problems push the intervals in opposite directions, underdispersion making them too wide and spatial autocorrelation too narrow, so the Oct 13 decision was to keep the Poisson [[GLMM]] for the Report, report both, and fix them in the Final Draft ([[Why the Report keeps the Poisson model despite the diagnostics]], [[Preliminary Results]]). Three confusions: ranking and checking are separate jobs, so the top AIC model is not automatically a checked model; you look for clear patterns, not a perfect plot; and in general you check the global model first, not only the winner. (The Sep 10 script checked `fits$Global` and plotted the [[Generalized Additive Model|Additive model]]'s residuals; those models are gone.)

## Connections
- **Builds on:** [[Residual]], [[Fitted Value]], [[Linear Model Assumptions]], [[AIC]], [[Poisson Distribution]], [[Linear Model]], [[Residuals vs Fitted Plot]], [[Predictor Variable]], [[Equation of a Line]], [[plot() Diagnostics for lm]]
- **Leads to:** [[Pearson Residuals]], [[DHARMa Simulated Residuals]], [[QQ Plot]], [[check_overdispersion()]], [[Global Model]], [[Underdispersion]], [[Moran's I]], [[Spatial Autocorrelation]], [[Negative Binomial Distribution]], [[Mixed Effects Model]], [[Random Effect]], [[GLMM]], [[Generalized Additive Model]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection and Diagnostics]]
- **Go deeper:** [[Why the Report keeps the Poisson model despite the diagnostics]], [[Why check overdispersion before trusting Poisson]], [[Preliminary Results]], [[Harrison et al. 2018]], [[Zuur et al. 2010]], [[Shipley et al. 2022]]

## Flashcards

The readings say to check fit on the global (most complex) model. The project script checks the top-ranked model. Why is that fine here?
??
In these results the top-ranked model, M3, is also the most complex one in the set, so the two rules point at the same model. In general, goodness of fit is assessed on the global model: if even it fits adequately, the simpler models AIC prefers rest on a sound basis (Anderson and Burnham 2002, p. 915).
++++

Why can AIC not replace residual diagnostics?::AIC only ranks the models offered; it says nothing about whether their distributional and structural assumptions hold.
