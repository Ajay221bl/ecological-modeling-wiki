---
type: atomic
tags:
  - statistical-foundations
  - modeling
  - flashcards
aliases:
  - "standardize"
  - "standardized"
  - "standardizing"
  - "standardised"
  - "centering and scaling"
  - "z-score"
  - "z-scores"
status: seedling
---

# Standardizing Predictors
**In one line:** Rewriting a numeric predictor as "how many standard deviations above or below its average" a value is, so predictors measured in very different units end up on one common scale.

> [!info] Before this, it helps to know
> [[Average (Mean)]] (the centre we subtract) · [[Spread and Variability]] (the standard deviation we divide by) · [[Predictor Variable]] (what gets standardized)

## Start from zero
One friend scored 70 on a test out of 100; another scored 14 on a test out of 20. Who did better? You cannot tell until both are on the same scale.

Predictors have the same problem. Tree cover is a percentage, 0 to 100. Spatial covariance is a satellite-based number that can run into the hundreds below zero. A model will happily use both, but "one unit more" means something completely different for each.

**Standardizing** fixes this in two steps:
1. **Center:** subtract the predictor's average from every value. Now 0 means "average", negative means "below average", positive means "above".
2. **Scale:** divide by the predictor's standard deviation (the typical distance of values from their average). Now 1 means "one standard deviation above average".

The result is often called a **z-score**: mean 0, standard deviation 1, whatever the original units.

## Why it exists
- **Comparable effects.** After standardizing, each slope means "change in the response for a one-standard-deviation change in this predictor". That lets you ask which habitat variable matters more ([[Harrison et al. 2018]], pp. 14-15).
- **Easier fitting.** Mixed-model software searches for the best estimates step by step ([[Maximum Likelihood Estimation]]). Predictors on wildly different scales make that search lopsided and can cause convergence trouble; rescaling "will often solve convergence problems" (Harrison et al., p. 14). lme4 even prints a warning that some predictors "are on very different scales" ([[Singular Fits and Convergence Warnings]]).
- **A meaningful intercept.** After centering, the intercept is the expected response at an *average* point, not at an impossible point with every predictor equal to 0.

## A tiny example
Three points with tree cover 10, 30 and 50%.
- Average = 30. Distances from it: -20, 0, +20.
- Standard deviation = 20 (square the distances: 400, 0, 400; add: 800; divide by 3 - 1 = 2: 400; square root: 20).
- Standardized: -20/20 = **-1**, 0/20 = **0**, +20/20 = **+1**.

Three points with spatial covariance -300, -100 and +100.
- Average = -100. Distances: -200, 0, +200. Standard deviation = 200.
- Standardized: **-1, 0, +1**.

Different units, same new scale. A slope of 0.10 on either one now means "about 10% more species for one standard deviation more" ([[Interpreting Poisson Coefficients]]).

## In my project
The three habitat predictors are standardized: spatial covariance, tree cover (WD50 + FO50) and scrub cover (SC50). The need is obvious from the ranges: the 0.81 ha [[Spatial Covariance]] runs from -934 to 185, while tree cover runs from 0 to 100% ([[Percent Cover]]).

Since Oct 13 this is done in `GrasslandBirdRichness_Wrangling.R` (it was only a sketch in the Oct 12 plan):

```r
  mutate(across(c(SpCov3, SpCov9, SpCov27, Tree50, Scrub50),
                ~ as.numeric(scale(.x)),
                .names = "{.col}_z"),
```

In words: for each of the five columns, `scale()` subtracts the mean and divides by the standard deviation, and `.names = "{.col}_z"` saves the result as a new column with "_z" on the end (`SpCov3_z`, `SpCov9_z`, `SpCov27_z`, `Tree50_z`, `Scrub50_z`). The models use the "_z" versions. It happens *after* restricting to the complete-case rows, so the average and standard deviation describe the 1,130 visits actually modelled ([[Complete-Case Analysis]]).

Translating back to real units (my own calculation on those 1,130 rows, so roughly): one SD of tree cover is about 35 percentage points, one SD of scrub cover about 20 points, and one SD of the 65.61 ha spatial covariance about 240 units. So the focal-species tree effect (rate ratio 0.55 per SD) reads as "about 45% fewer focal species for roughly 35 more percentage points of tree cover within 50 m" ([[Interpreting Poisson Coefficients]], [[Preliminary Results]]).

Wind and Sky are left as raw codes; whether to standardize them too is an open choice ([[Open Questions]]).

## Common confusions
- **"Standardizing changes the fit."** No. Predictions, AIC and the evidence for each slope stay the same; only the units of the coefficients change.
- **"It makes the data normal."** No. The shape of the values stays the same; only the centre and spread change.
- **"Standardize the response too."** Not here. Richness must stay a count for a Poisson model ([[Count Data]]).
- **Forgetting to translate back.** In the Report, say what one standard deviation is in real units (for example, "one SD of tree cover is about N percentage points").

## Connections
- **Builds on:** [[Average (Mean)]], [[Spread and Variability]], [[Predictor Variable]]
- **Leads to:** [[Interpreting Poisson Coefficients]], [[Collinearity]], [[Singular Fits and Convergence Warnings]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Statistical Foundations]]
- **Go deeper:** [[Harrison et al. 2018]] ("Standardising and centring predictors", pp. 14-15)

> [!question]- Check yourself
> In my focal-species model, tree cover has a slope of about -0.60 and 0.81 ha spatial covariance about +0.16 (both standardized). What does that let me say that the raw slopes could not?
> ?
> Both slopes are now "per one standard deviation", so I can compare them directly: a typical-sized change in tree cover moves expected focal richness almost four times as much as a typical-sized change in spatial covariance. Raw slopes would be per percent and per covariance unit, which are not comparable.
