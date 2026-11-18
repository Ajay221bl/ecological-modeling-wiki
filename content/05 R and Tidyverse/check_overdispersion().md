---
type: atomic
tags:
  - r-reproducibility
  - r-functions
  - diagnostics
  - flashcards
aliases:
  - "check_overdispersion"
  - "performance package"
  - "dispersion ratio"
status: seedling
---

# check_overdispersion()
**In one line:** `check_overdispersion()`, from the **performance** package, asks a fitted Poisson model "are the data more spread out than a Poisson allows?" and answers with a dispersion ratio: about 1 is fine, well above 1 means [[Overdispersion]].

> [!info] Before this, it helps to know
> [[Spread and Variability]] (what "spread" and variance mean) · [[Poisson Distribution]] (the assumption being checked) · [[Residuals]] (what is left over after the model)

## Start from zero
**Variance** is a number for how spread out values are around their average ([[Spread and Variability]], [[Variance]]). Counts 6, 6, 6 have variance 0; counts 2, 6, 10 have a big variance.

The [[Poisson Distribution]] is the standard model for counts. It has one strict rule: **the variance equals the mean.** If the average is 6 species, the variance should be about 6. There is no separate knob for spread.

Real counts often break the rule upward: birds clump, some points are much better than others, and some causes were never measured. Variance bigger than the mean is **overdispersion**. Smaller than the mean is [[Underdispersion]].

## Why it exists
If the data are more spread out than the model assumes, the model is overconfident. Its [[Standard Error|standard errors]] come out too small, [[Confidence Interval|confidence intervals]] too narrow, and [[P-value|p-values]] too small: it sounds more certain than the data allow. [[Harrison et al. 2018]] note that overdispersion suggests a poor fit and that standard errors will likely be biased unless it is accounted for (PDF p. 16). So the check comes *before* trusting the Poisson results.

How it works, roughly: for each row, take the gap between the observed count and the model's prediction, scaled by how big a gap Poisson expects (a Pearson residual). Square these, add them up, and divide by the number of rows minus the number of estimated parameters (the residual degrees of freedom). If the model is right, the answer is near 1. The function also gives a p-value for "is the ratio really 1?". For mixed models this test is approximate.

## A tiny example
Predicted average 6 everywhere, so Poisson expects a variance of about 6.

| Observed counts | Their variance | Ratio (variance / mean) | Verdict |
|---|---|---|---|
| 5, 6, 7, 6 | 0.67 | 0.11 | underdispersed (very even) |
| 3, 6, 9, 6 | 6 | 1.0 | Poisson-like |
| 0, 2, 10, 12 | 34.7 | 5.8 | overdispersed |

(Variance here uses the sample formula, dividing by n - 1. The real function works on model residuals, not raw counts, but the logic is the same.)

## In my project
In `GrasslandBirdRichness_Analysis.R` (it ran in ajay's RStudio on Oct 13; R is not installed in Claude's environment, so rerun any change there):

```r
check_overdispersion(topRich)
check_overdispersion(topFocal)
```

Word by word: `topRich` and `topFocal` are the top-ranked models for all-species and focal richness, pulled out after the AIC table ([[MuMIn model.sel()]]). The script checks the model it actually reports, which was M3 (property plus habitat) for both.

What it found: dispersion ratios of **0.66** (all species) and **0.60** (focal). That is [[Underdispersion]]: the counts are *more even* than Poisson expects. The raw within-site variance/mean ratios had already hinted at this (0.56 to 0.93 on the 376-point data). Below 1 means Poisson makes standard errors slightly *too large*, so the confidence intervals are conservative (wider than needed). The DHARMa dispersion test agreed ([[DHARMa Simulated Residuals]]). Full numbers: [[Preliminary Results]].

Decision rule written in the script's comment: if the ratio is well above 1, refit as negative binomial (`glmer.nb()` or glmmTMB) ([[Negative Binomial Distribution]]). That did not happen. The Oct 13 decision is to keep the Poisson GLMM for the Report, report the underdispersion, and try a distribution that allows *less* spread than Poisson in the Final Draft ([[Next Steps]]). For a single-species model such as [[Dickcissel]] (variance/mean about 12), a negative binomial would almost certainly be needed instead.

## Common confusions
- **"Check the raw counts instead."** Raw variance/mean is a first clue only. What matters is the spread left *after* the predictors and point effects.
- **"Below 1 is also a crisis."** Usually not: it makes results a bit too cautious, not too bold.
- **"Ratio 1.2 means switch families."** "Well above 1" is a judgment; small excesses are common and mild.

## Connections
- **Builds on:** [[Spread and Variability]], [[Mean-Variance Relationship]], [[Overdispersion]], [[Residuals]]
- **Leads to:** [[Why check overdispersion before trusting Poisson]], [[Negative Binomial Distribution]], [[Residual Diagnostics]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]], [[MOC 10 - Model Selection|MOC - Model Selection and Diagnostics]]
- **Go deeper:** [[Harrison et al. 2018]] (overdispersion in GLMMs), [[Zuur et al. 2010]]

> [!question]- Check yourself
> If `check_overdispersion()` returns a ratio of 3 for a Poisson model, what goes wrong if I ignore it, and what is my fix?
> ?
> Standard errors are too small, so effects look more certain than they are. The fix would be to refit with a negative binomial model (`glmer.nb()` or glmmTMB). My real ratios were 0.66 and 0.60, the opposite problem, which is milder.
