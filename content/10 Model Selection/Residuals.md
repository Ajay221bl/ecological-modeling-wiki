---
type: atomic
tags:
  - model-selection-diagnostics
  - flashcards
aliases:
  - "residual"
  - "Pearson residuals"
  - "deviance residuals"
status: seedling
---

# Residuals
**In one line:** What the model got wrong at each visit: the real count minus the model's guess.

> [!info] Before this, it helps to know
> [[Statistical Model]] (what makes the guess) · [[Average (Mean)]] (the guess is an expected average) · [[Spread and Variability]] (residuals measure leftover spread)

## Start from zero
You guess your friend's height at 170 cm. They are 174 cm. You were off by +4. That leftover, "real minus guess", is a **residual**.

A model makes a guess (called the **fitted value**) for every observation. For a bird visit, the guess is the average number of species the model expects there, given the site, wind and sky. The residual is what was actually counted minus that guess.

- Positive residual: the model guessed too low.
- Negative residual: the model guessed too high.
- Zero: spot on.

## Why it exists
A model claims: "the data are this pattern plus random noise." If that's true, the residuals should look like pure random noise: no trends, no shapes, centred on zero.

If a pattern is left in the residuals, the model missed something. Example: if residuals are mostly positive on windy days, the model underestimates windy days and probably needs a wind term.

So residuals are how we check a model's assumptions after fitting ([[Residual Diagnostics]]). [[Zuur et al. 2010]] stress that equal spread "should be done using the residuals of the model" (p. 6), and that normality and equal spread are judged on residuals, not raw data (p. 12).

## A tiny example
Three visits to one point. The model expects about 6 species each time.

| Visit | Counted | Model's guess | Residual (counted - guess) |
|---|---|---|---|
| 1 | 5 | 6.0 | -1.0 |
| 2 | 7 | 6.0 | +1.0 |
| 3 | 6 | 6.0 | 0.0 |

Residuals average to 0 and go both ways. That's what a healthy model looks like.

**A twist for counts.** For counts, bigger averages naturally bounce more ([[Mean-Variance Relationship]]). In a [[Poisson Distribution]], the variance (spread) equals the mean. So a miss of 2 is a big miss when you expected 2, but a small miss when you expected 12. Raw residuals don't know this. Two scaled versions fix it:
- **Pearson residual:** (counted - guess) / √guess. Example: (8 - 6) / √6 ≈ 0.82.
- **Deviance residual:** each observation's signed share of the model's total misfit.

[[Harrison et al. 2018]] recommend Pearson (or normalised) residuals for GLMMs because "they account for the mean-variance relationship of generalized models" (p. 15).

In a mixed model, the guess normally includes each point's own [[Random Intercept]], so residuals are visit-level misses around that point's expected value.

## In my project
History: the Sep 10 script plotted raw residuals against fitted values for the Additive model (`plot(fitted(fits$Additive), resid(fits$Additive), ...)`). For count data that plot shows diagonal stripes, one per observed count, which makes patterns hard to judge.

Since Oct 13 the analysis script uses [[DHARMa Simulated Residuals]] instead, on the top model for each response:

```r
simRich <- simulateResiduals(fittedModel = topRich, n = 250)
```

and saves `plot(simRich)` as `DHARMa_Residuals_Richness.png`. DHARMa's residuals are rescaled to sit evenly between 0 and 1 if the model is right, so the stripes problem goes away.

What the residuals showed (Oct 13): they were bunched toward the middle (the counts are tamer than a Poisson expects, [[Underdispersion]]), and residuals averaged by point were weakly similar for nearby points ([[Spatial Autocorrelation]]). See [[Residual Diagnostics]] for the full checklist and [[Preliminary Results]] for the numbers.

## Common confusions
- **Residual vs error.** The "error" is the true random part, which we never see. A residual is our estimate of it.
- **Checking raw counts for normality instead of residuals.** Assumptions are about the leftovers.
- **Worrying about stripes.** Stripes are expected for count data.

## Connections
- **Builds on:** [[Statistical Model]], [[Mean-Variance Relationship]], [[Poisson Distribution]], [[Assumptions of Linear Models]]
- **Leads to:** [[Residual Diagnostics]], [[DHARMa Simulated Residuals]], [[Overdispersion]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection and Diagnostics]]
- **Go deeper:** [[Harrison et al. 2018]] (p. 15), [[Zuur et al. 2010]] (pp. 6, 12)

> [!question]- Check yourself
> Why do raw residuals from a Poisson model fan out at larger fitted values even when the model is correct?
> ?
> Because a Poisson variance equals its mean, so visits with higher expected richness naturally vary more. Pearson residuals divide by √fitted to remove that built-in pattern.
