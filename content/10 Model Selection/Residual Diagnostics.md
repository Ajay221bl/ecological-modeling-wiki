---
type: atomic
tags:
  - model-selection-diagnostics
  - flashcards
aliases:
  - "model diagnostics"
  - "model checking"
  - "diagnostics"
  - "goodness of fit"
status: seedling
---

# Residual Diagnostics
**In one line:** The health check you run on a fitted model, mostly by looking at its mistakes (residuals), before trusting its numbers.

> [!info] Before this, it helps to know
> [[Residuals]] (what you inspect) · [[Spread and Variability]] (much of the check is about spread) · [[Assumptions of Linear Models]] (what is being checked)

## Start from zero
After a car repair, a mechanic doesn't just hand back the keys. They take it for a test drive and listen for odd noises. The repair might look fine on paper and still rattle.

A fitted model is the repaired car. **Residual diagnostics** are the test drive. You look at the model's mistakes ([[Residuals]]) to see whether the model's built-in assumptions hold. Every model assumes things, for example "the spread of the data is what a Poisson distribution expects" or "visits are independent once we account for the point".

## Why it exists
[[AIC]] ranks models, but it can't tell you whether any of them is any good. [[Harrison et al. 2018]] are blunt: AIC "tells us nothing about whether the basic distributional and structural assumptions of the model have been violated" (p. 15). The best of five broken models is still broken.

If assumptions fail, the most common damage is to the uncertainty: [[Standard Error|standard errors]] and [[Confidence Interval|confidence intervals]] become too narrow or too wide, so you become over- or under-confident.

Checklist for mixed models (Harrison et al., pp. 15-16):
- Residuals against fitted values, and against every predictor: look for patterns.
- Residuals within groups of the random effect.
- A QQ plot of the random-effect estimates. (A **QQ plot** lines up your values against what a perfect distribution would give; a straight line means "matches".)
- The **dispersion** statistic (is the spread bigger or smaller than the model assumes?), which "should be made a matter of routine"; underdispersion is possible too (p. 16).

Where to check: on the **global** (biggest) model. If it fits, the simpler models AIC prefers are on solid ground ([[Anderson and Burnham 2002]], p. 915; [[Johnson and Omland 2004]], p. 102).

## A tiny example
Residuals from 6 visits, sorted by the model's guess:

| Guess | 3 | 4 | 5 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|
| Residual | -0.5 | +0.4 | -0.2 | +3 | -3.5 | +4 |

The misses grow as the guess grows: a funnel. For a linear model that's a warning. For a Poisson count model, some growth is expected (variance = mean), which is why Pearson or simulated residuals are used to rescale first. Healthy rescaled residuals: a flat, even band around zero.

## In my project
What `GrasslandBirdRichness_Analysis.R` checks since Oct 13, on the top model for each response (`topRich`, `topFocal`):

| Check | In script? | Result (Oct 13) |
|---|---|---|
| Dispersion: `check_overdispersion(topRich)` ([[check_overdispersion()]]) | yes | ratios 0.66 (all) and 0.60 (focal): [[Underdispersion]] |
| DHARMa dispersion and uniformity tests, plus residual plots saved as PNGs ([[DHARMa Simulated Residuals]]) | yes | dispersion p = 0; KS test also significant, mostly the same cause |
| Moran's I on residuals combined by point, using longitude and latitude from the habitat file ([[Spatial Autocorrelation]]) | yes | about 0.05 for both responses: weak but significant |
| Residuals against Site, Wind, Sky, e.g. `plotResiduals(simRich, form = datClean$Site)` | suggested addition | not run |
| QQ plot of point intercepts, e.g. `qqnorm(ranef(topFocal)$PtNum[, 1])` | suggested addition | not run (pointless for all species, where the point variance is 0) |

Which model to check? Here the top-ranked model is M3, which is also the most complex model in the set (K = 11). So checking the winner and checking the "global" model are the same thing.

What it means: the two problems push the confidence intervals in opposite directions. Underdispersion makes them too wide; positive spatial autocorrelation makes them too narrow. Decision (Oct 13): keep the Poisson GLMM for the Report, report both, fix them in the Final Draft ([[Why the Report keeps the Poisson model despite the diagnostics]]). All numbers: [[Preliminary Results]].

History: the Sep 10 script checked `fits$Global` and plotted residuals of the Additive model; those models are gone. The Oct 12 plan expected "a dispersion ratio at or a bit below 1" from the raw ratios, and the fitted ratios came out at 0.60 to 0.66.

## Common confusions
- **"Top AIC model = checked model."** Ranking and checking are separate jobs.
- **"A perfect residual plot is required."** Look for clear patterns, not perfection.
- **Checking only the winner.** Check the global model first.

## Connections
- **Builds on:** [[Residuals]], [[Spread and Variability]], [[Overdispersion]], [[Assumptions of Linear Models]]
- **Leads to:** [[DHARMa Simulated Residuals]], [[Why check overdispersion before trusting Poisson]], [[Negative Binomial Distribution]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection and Diagnostics]]
- **Go deeper:** [[Harrison et al. 2018]] (pp. 15-16), [[Zuur et al. 2010]] (p. 12), [[Shipley et al. 2022]] (how a paper reports these checks, PDF p. 7)

> [!question]- Check yourself
> The readings say to check fit on the global (most complex) model. My script checks the top-ranked model. Why is that fine here?
> ?
> In my results the top-ranked model, M3, is also the most complex one in the set, so the two rules point at the same model. In general, goodness of fit is assessed on the global model: if even it fits adequately, the simpler models AIC prefers rest on a sound basis (Anderson and Burnham 2002, p. 915).
