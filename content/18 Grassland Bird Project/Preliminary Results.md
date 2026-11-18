---
type: project
tags:
  - project
  - grassland-bird-richness
  - results
aliases:
  - "Report results"
  - "Oct 13 results"
status: seedling
---

# Preliminary Results

> [!summary] In plain words
> For both responses, the best model by far was the one with **both property and habitat** (M3). So which property a point is on matters, and the habitat around the point matters too, and neither one replaces the other (H1 and H2 both get support). All species do better near tree-grass edges; the six focal grassland species do worse with more trees and better in grassland cores. Visits to the same point were more alike for focal species but not for all species (H3 only half supported). The Poisson model fits a little "too well" (underdispersion) and the leftovers show weak spatial patterns, so treat the numbers as preliminary.

This note **owns the Oct 13 numbers**. Other notes quote one or two of them and link here. These are the **preliminary results for the Project Report**, from ajay's RStudio run of the final scripts on **Oct 13, 2026**. Claude had tested the same scripts in a cloud copy of R first, and every AIC and estimate matched ajay's run exactly. How the models were built: [[Analysis Plan]]. Code: [[R Scripts Walkthrough]].

## 1. The data that went into the models
- **1,130 visits at 376 points** (the complete-case set, see [[Dataset]]): BK 94 points (282 visits), CR 35 (105), DC 93 (280), HB 62 (186), HO 92 (277).
- **All-species richness** ranged from 0 to 14 species per visit, mean 5.96, standard deviation 2.25 ([[Mean|Average (Mean)]], [[Spread and Variability]]). A 0 is possible because a visit with only fly-overs is kept as 0 rather than dropped: HO55 on Jun 20, 2022 is one such visit ([[Decision Log]]).
- **Mean richness by property:** BK 4.73, HO 5.56, DC 6.54, HB 6.64, CR 7.58.
- **Focal richness** (the six [[Focal Species]]) ranged from 0 to 3, mean 0.55. No focal species was seen at 59% of visits.
- **Focal mean by property:** BK 0.99, HO 0.58, CR 0.25, HB 0.25.
- **Variance/mean ratios** of richness within each property: 0.56 to 0.93 on these 376 points (0.56 to 0.94 on all 416 points, see [[EDA Findings]]).

## 2. Which model wins (AIC table)
[[AIC]] scores each model on fit minus a penalty for extra parameters; lower is better. ΔAIC is how far each model is behind the best one ([[Akaike Weight|Delta AIC and Akaike Weights]]). K is the number of estimated parameters. Ranked with `model.sel(fits, rank = "AIC")` ([[MuMIn model.sel()]]).

| Model | K | All AIC | ΔAIC | Focal AIC | ΔAIC |
|---|---|---|---|---|---|
| M3 Property + Habitat | 11 | 4814.8 | 0.0 | 1919.0 | 0.0 |
| M1 Property | 8 | 4856.9 | 42.1 | 2010.8 | 91.9 |
| M2a Habitat 0.81 ha | 7 | 4904.5 | 89.7 | 1941.5 | 22.5 |
| M2b Habitat 7.29 ha | 7 | 4899.3 | 84.5 | 1947.6 | 28.6 |
| M2c Habitat 65.61 ha | 7 | 4877.3 | 62.5 | 1946.8 | 27.8 |
| M0 Null | 4 | 4954.8 | 140.0 | 2090.0 | 171.0 |

- **M3 has an Akaike weight of 1.00 for both responses.** The weight is the share of support among the models compared, so M3 takes essentially all of it. Every other model is more than 22 AIC units behind (2 units is the usual "about equal" line).
- **Best habitat scale:** 65.61 ha for all species (so M3 uses SpCov27), and 0.81 ha for focal species (SpCov3). M3 picked these automatically from the lowest-AIC M2 model.
- **All species:** M1 Property is 2nd, ahead of every habitat-only model.
- **Focal species:** all three habitat-only models are ahead of M1 Property.

## 3. How big the effects are (rate ratios)
A Poisson model's coefficients are on the log scale. Exponentiating one gives a **rate ratio**: the number the expected count is multiplied by. 1.40 means 40% more species; 0.55 means 45% fewer; 1.00 means no change ([[Interpreting Poisson Coefficients]]). The brackets are 95% [[Confidence Interval|confidence intervals]], computed as estimate ± 1.96 standard errors (a "Wald" interval, [[Standard Error]]). If the interval does not include 1, the effect is clearly different from zero.

Property effects compare each property with BK, the reference level ([[Reference Level|Categorical Predictor and Reference Level]]). Habitat effects are per 1 standard deviation of the predictor ([[Standardizing|Standardizing Predictors]]).

| Predictor (top model, M3) | All species | Focal species |
|---|---|---|
| CR | 1.40 (1.27 to 1.54) | 0.51 (0.32 to 0.83) |
| DC | 1.22 (1.13 to 1.32) | 0.55 (0.41 to 0.73) |
| HB | 1.33 (1.22 to 1.44) | 0.43 (0.29 to 0.62) |
| HO | 1.08 (1.00 to 1.17) | 0.76 (0.58 to 0.98) |
| Spatial covariance | 0.93 (0.91 to 0.95), 65.61 ha | 1.17 (1.02 to 1.33), 0.81 ha |
| Tree cover 50 m | 1.00 (0.98 to 1.03) | 0.55 (0.48 to 0.63) |
| Scrub cover 50 m | 1.04 (1.01 to 1.06) | 0.96 (0.87 to 1.07) |
| Wind | 0.89 (0.85 to 0.92) | 0.95 (0.84 to 1.08) |
| Sky | 0.99 (0.96 to 1.03) | 0.99 (0.87 to 1.14) |

**All species, in words:**
- About 7% more species for each 1 SD *more negative* [[Spatial Covariance|spatial covariance]] at 65.61 ha, that is, toward tree-grass edges ([[Edge Effects]]).
- About 4% more species per SD of scrub cover.
- No clear tree-cover effect (1.00).
- About 11% fewer species per one-step rise in the wind code ([[Why include wind and sky]]).
- CR, HB and DC have clearly more species than BK even after habitat; HO is only just above.

**Focal species, in words:**
- About 45% fewer focal species per SD of tree cover.
- About 17% more per SD of spatial covariance at 0.81 ha, that is, toward [[Grassland Core Habitat|grassland cores]].
- After habitat, all four properties have fewer focal species than BK (0.43 to 0.76).

## 4. Point-to-point variation (H3)
The [[Random Intercept|random intercept]] gives each point its own baseline. Its [[Variance Components|variance]] says how much points differ beyond what the predictors explain.
- **All species: 0.** This is a "singular fit": lme4 prints `boundary (singular) fit`, which is a message, not an error ([[Convergence Warnings|Singular Fits and Convergence Warnings]]). Once property, habitat and weather were in, visits to the same point were no more alike than visits to different points.
- **Focal species: 0.20 (SD 0.45).** Points do differ in focal richness beyond the predictors.
- The random intercept stays in every model as designed ([[Why a random intercept for point]]).

## 5. Checks on the models (diagnostics)
- **Underdispersion.** Dispersion ratios were 0.66 (all) and 0.60 (focal): the counts are *less* spread out than Poisson expects ([[Underdispersion]]). The DHARMa dispersion test gave p = 0, and its uniformity (KS) test was also significant, mostly for the same reason ([[DHARMa Simulated Residuals]]). Underdispersion makes Poisson confidence intervals wider than needed, so in that respect the results are conservative.
- **Spatial autocorrelation.** Residuals averaged by point were weakly similar for nearby points: Moran's I 0.0456 (p = 1.8e-7) for all species and 0.0477 (p = 5.1e-8) for focal, against an expected −0.0027 if there were no pattern ([[Spatial Autocorrelation]]). Moran's I is a correlation between each point's residual and its neighbours' residuals: 0 means no pattern, and these values are small. The tiny [[P-value|p-values]] come mostly from having 376 points. This problem can make confidence intervals too narrow.
- The two problems push the intervals in opposite directions and partly offset each other. Decision (Oct 13): keep the Poisson GLMM for the Report, report both problems, and fix them in the Final Draft ([[Decision Log]], [[Next Steps]]).

## 6. What each hypothesis gets ([[Hypotheses]])
- **H1, property identity: supported.** Adding property to habitat (M3 vs the best M2) cuts AIC by 62.5 (all) and 22.5 (focal), and M1 beats every habitat-only model for all species. But property is tangled with year, dates and crew, so a "property effect" may partly be a year effect ([[Why site and year cannot be separated]], [[Confounding]]).
- **H2, local habitat: supported.** Adding habitat to property (M3 vs M1) cuts AIC by 42 (all) and 92 (focal). The signs match H2's two opposite predictions: all species up toward edges, focal species up toward cores and down with trees ([[Why all-species and focal-species richness can disagree]]). One miss: the all-species tree-cover effect was predicted positive but is about 1.00.
- **H3, repeated visits: half supported.** Clear point variation for focal richness (0.20), none for all-species richness (0).

## 7. Outputs on disk
In the R project's Results folder: ModelSelection_Richness.csv, ModelSelection_FocalRichness.csv, TopModel_Coefficients.csv, TopModel_PointVariance.csv. In Figures: DHARMa_Residuals_Richness.png, DHARMa_Residuals_FocalRichness.png, RichnessBySite_Boxplot.png, TopModel_RateRatios_Dotplot.png, Richness_vs_SpatialCovariance.png (raw counts against the 7.29 ha window with a smooth line).

> [!warning] Verify
> These are preliminary Report results. Numbers may shift slightly in the Final Draft once underdispersion and spatial autocorrelation are handled ([[Next Steps]]).

**Part of:** [[MOC 23 - Grassland Bird Richness Project|MOC - Grassland Bird Richness Project]]
