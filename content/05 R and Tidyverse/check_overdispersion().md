---
type: atomic
tags:
  - r-reproducibility
  - r-functions
  - diagnostics
  - flashcards/eco/r
description: "check_overdispersion(), from the performance package, asks a fitted Poisson model whether the data are more spread out than a Poisson allows, and answers with a dispersion ratio: about 1 is fine, well above 1 means overdispersion."
aliases:
  - "check_overdispersion"
  - "dispersion ratio"
status: seedling
---

# check_overdispersion()

The [[Poisson Distribution]], the standard model for counts, has one strict rule: the [[Variance]] (how spread out values are around their average) equals the mean. If the average is 6 species, the variance should be about 6, with no separate knob for spread. Real counts often break the rule upward, because birds clump, some points are much better than others and some causes were never measured. Variance bigger than the model allows is [[Overdispersion]]; smaller is [[Underdispersion]]. **`check_overdispersion()`**, from the [[performance Package Checks|performance package]], asks a fitted Poisson model whether its data are more spread out than a Poisson allows, and answers with a *dispersion ratio*: about 1 is fine, well above 1 means overdispersion. It matters because an overdispersed model is overconfident: its [[Standard Error|standard errors]] come out too small, [[Confidence Interval|confidence intervals]] too narrow and [[P-value|p-values]] too small. [[Harrison et al. 2018]] note that overdispersion suggests a poor fit and that standard errors will likely be biased unless it is accounted for (PDF p. 16), so the check comes before trusting the results.

How it works: for each row take the gap between the observed count and the model's prediction, scaled by how big a gap Poisson expects (a [[Pearson Residuals|Pearson residual]]); square these, add them up, and divide by the residual [[Degrees of Freedom]] (rows minus estimated parameters). If the model is right the answer is near 1. The function also gives a p-value for "is the ratio really 1?", and for [[Mixed Effects Model|mixed models]] the test is approximate. The idea in miniature, with a predicted average of 6 everywhere: counts 5, 6, 7, 6 have variance 0.67, ratio 0.11, underdispersed (very even); counts 3, 6, 9, 6 have variance 6, ratio 1.0, Poisson-like; counts 0, 2, 10, 12 have variance 34.7, ratio 5.8, overdispersed (sample variance, dividing by n − 1; the real function works on model residuals, but the logic is the same). The project runs `check_overdispersion(topRich)` and `check_overdispersion(topFocal)` on the top-ranked models from [[MuMIn model.sel()]], M3 for both, so it checks the model it actually reports.

It found ratios of 0.66 (all species) and 0.60 (focal): underdispersion, counts more even than Poisson expects, as the raw within-site variance/mean ratios (0.56 to 0.93) had hinted. Below 1, Poisson makes standard errors slightly too large, so the intervals are conservative; the DHARMa test agreed ([[DHARMa Simulated Residuals]], [[Preliminary Results]]). The script's rule was to refit as a [[Negative Binomial Distribution|negative binomial]] (`glmer.nb()` or glmmTMB) if the ratio were well above 1; that did not happen, so the Oct 13 decision was to keep the Poisson [[GLMM]] for the Report, report the underdispersion, and try a distribution allowing less spread in the Final Draft ([[Next Steps]]). A single-species model such as [[Dickcissel]] (raw variance/mean about 12) would almost certainly need a negative binomial instead. Three confusions: raw variance/mean is only a first clue, since what matters is the spread left after the [[Predictor Variable|predictors]] and point effects; below 1 is usually not a crisis, only a bit too cautious; and "well above 1" is a judgment, so a ratio of 1.2 is a mild excess, not an automatic switch of families.

```r
x <- c(0, 2, 10, 12)
var(x) / mean(x)   # about 5.8: overdispersed relative to Poisson
```

## Connections
- **Builds on:** [[Poisson Distribution]], [[Variance]], [[Overdispersion]], [[Underdispersion]], [[Pearson Residuals]], [[Degrees of Freedom]], [[Predictor Variable]]
- **Leads to:** [[Negative Binomial Distribution]], [[DHARMa Simulated Residuals]], [[Residual Diagnostics]], [[Why check overdispersion before trusting Poisson]], [[performance Package Checks]], [[Mixed Effects Model]], [[GLMM]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]], [[MOC 10 - Model Selection|MOC - Model Selection and Diagnostics]]
- **Go deeper:** [[Mean-Variance Relationship]], [[Spread and Variability]], [[Preliminary Results]], [[Harrison et al. 2018]], [[Zuur et al. 2010]]

## Flashcards

If `check_overdispersion()` returns a ratio of 3 for a Poisson model, what goes wrong if you ignore it, and what is the fix?
??
Standard errors are too small, so effects look more certain than they are. The fix would be to refit with a negative binomial model (`glmer.nb()` or glmmTMB). The project's real ratios were 0.66 and 0.60, the opposite problem, which is milder.
++++

What does a dispersion ratio below 1 do to a Poisson model's standard errors?::It makes them slightly too large, so intervals are conservative (wider than needed).
