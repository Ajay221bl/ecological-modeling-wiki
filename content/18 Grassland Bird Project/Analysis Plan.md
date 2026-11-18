---
type: project
tags:
  - project
  - grassland-bird-richness
  - methods
aliases:
  - "Methods plan"
  - "Model plan"
status: seedling
---

# Analysis Plan

> [!summary] In plain words
> Join the bird counts to the habitat file, keep only the 376 points that have every habitat value, and count species per visit (all species, and separately the six focal grassland species). Then fit six competing count models: weather only, property, habitat at three window sizes, and property plus habitat. Every model gives each point its own baseline. Rank them with AIC, check that the best ones behave, and report what the data can and cannot say.

This note **owns the model set**: other notes summarize it in a sentence and link here. It follows the final proposal of **Oct 12, 2026** ([[Decision Log]]). Scope: the **Project Report (due Oct 13)**, meaning revised Methods plus preliminary results; no Bayesian or occupancy model yet ([[Milestones and Deadlines]]).

> [!success] Status: implemented and run (Oct 13, 2026)
> Both scripts now fit this plan. ajay ran them in RStudio on Oct 13, and every AIC and estimate matched Claude's earlier test run in a cloud copy of R. The numbers are in [[Preliminary Results]]. Details of how the code does it:
> - Every model is fit with `glmer(..., family = "poisson", control = glmerControl(optimizer = "bobyqa"))`. An optimizer is the search routine that finds the best-fitting numbers; "bobyqa" is a sturdier one, and switching to it removed a convergence warning ([[Singular Fits and Convergence Warnings]]).
> - M3 is built automatically: the script finds the M2 model with the lowest AIC for that response and adds Property to its habitat terms.
> - Models are ranked with `model.sel(fits, rank = "AIC")`, so the table uses plain AIC, not AICc.
> - 95% confidence intervals are Wald intervals: estimate ± 1.96 standard errors, then exponentiated into rate ratios ([[Standard Error]]).
>
> Code-level details: [[R Scripts Walkthrough]]. What is left before submission: [[Next Steps]].

## 1. Data
Two files from the USGS data release ([[Roberts et al. 2025]]); columns are described in [[Dataset]].
- **Bird CSV:** 7,742 detection records, 89 species, 416 points, 1,250 visits.
- **Habitat file** (`FieldVeg50m_RemoteVeg_JUNMASK_forDataRelease.csv`): one row per point, matching all 416 `PtNum`.
- **Complete-case set:** spatial covariance is missing at 39 flood-masked points ([[Flood Masking]]). Every model is fitted to the same **376 points and 1,130 visits** (BK 94, CR 35, DC 93, HB 62, HO 92 points), because AIC can only compare models fitted to identical rows. The dropped points are the wettest ones, so the 376 are not a random subset ([[Complete-Case Analysis]]).

## 2. Responses
The unit is one point-visit (PtNum x Date x Survey) ([[Why the point-visit is the sampling unit]]).
- **Main: species richness.** The number of species detected *on the ground* in the visit: a species counts if at least one individual was in any distance band, so species also seen flying over are kept. The wrangling script computes `GroundCount = coalesce(Dist_50, 0) + coalesce(Dist_100, 0) + coalesce(Dist_400, 0)` and keeps rows with `GroundCount > 0`, replacing the old `FlyOver == 0` rule ([[Why exclude fly-overs]]). A visit with only fly-overs is kept with richness 0, not dropped (done Oct 13). Species codes are trimmed first ([[str_trim()]]).
- **Secondary: focal grassland richness.** How many of the six focal species (DICK, NOBO, EAME, STFL, EAKI, LOSH) were detected; 0 to 3 per visit ([[Focal Species]]).

In the code these are the columns `Richness` and `FocalRichness`.

## 3. Predictors
| Predictor | Type | Description |
|---|---|---|
| Property (`Site`) | fixed effect, 5 levels | BK, CR, DC, HB, HO ([[Why Site is fixed not random]]) |
| Spatial covariance | numeric, standardized | one window per model: 0.81, 7.29 or 65.61 ha (RAP 2022) ([[Spatial Covariance]]) |
| Tree cover | numeric, standardized | WD50 + FO50: % woodland + forest within 50 m ([[Percent Cover]]) |
| Scrub cover | numeric, standardized | SC50: % scrub within 50 m |
| Wind, Sky | numeric | detection conditions ([[Why include wind and sky]]) |
| Point (`PtNum`) | random intercept | one baseline per point ([[Why a random intercept for point]]; [[Bolker et al. 2009]]) |

- **Standardized** means centered (minus the mean) and divided by the standard deviation, so effects are on a comparable scale ([[Standardizing Predictors]]). In the code: SpCov3_z, SpCov9_z, SpCov27_z, Tree50_z and Scrub50_z, computed over the 1,130 visit rows. Wind and Sky are not standardized.
- **One spatial covariance scale per model.** The three scales are correlated (Spearman 0.47 to 0.76: 3x3 vs 9x9 0.63, 9x9 vs 27x27 0.76, 3x3 vs 27x27 0.47), so putting them in one model would cause [[Collinearity]].
- **Field vegetation is not used:** ROBEL_AVG, DENS_101 and DBH_AVG are missing at 112 to 224 of 416 points, mostly roadside points ([[Field vs Remote Vegetation Measures]], [[Alternatives Considered]]).

## 4. The model
A Poisson [[GLMM]] for visit j at point i:
- Richness_ij ~ Poisson(λ_ij): the count is drawn from a Poisson pattern with expected value λ ([[Poisson Distribution]]).
- log(λ_ij) = b0 + b·x_ij + u_i: the log of the expected count is a baseline plus predictor effects plus the point's own shift ([[Log Link]]).
- u_i ~ Normal(0, σ²_point): point shifts scatter around 0 with a spread that is estimated ([[Random Intercept]]).

Reading a coefficient: 0.10 means about 10% more species per one-unit increase, because exp(0.10) ≈ 1.105 ([[Interpreting Poisson Coefficients]]). With standardized predictors, "one unit" means one standard deviation.

## 5. Candidate models
All include `Wind + Sky + (1|PtNum)`. How each maps onto H1, H2 and H3: [[Hypotheses]].

| Model | Adds | Hypothesis |
|---|---|---|
| M0 Null | nothing | weather and point only ([[Null Model]]) |
| M1 Property | Property | H1 |
| M2a | spatial covariance 0.81 ha + Tree + Scrub | H2 |
| M2b | spatial covariance 7.29 ha + Tree + Scrub | H2 |
| M2c | spatial covariance 65.61 ha + Tree + Scrub | H2 |
| M3 | Property + best habitat model | H1 and H2 together |

The same set is fitted to focal richness. Tools: [[glmer()]] (lme4) and [[MuMIn model.sel()]]. "Best habitat model" is chosen separately for each response: in the Oct 13 run it was the 65.61 ha window for all species and the 0.81 ha window for focal species ([[Preliminary Results]]).

## 6. Check the models
- **Dispersion:** `performance::check_overdispersion()` plus [[DHARMa Simulated Residuals]] (`simulateResiduals(n = 250)`, `testDispersion()`), as planned ([[check_overdispersion()]], [[Why check overdispersion before trusting Poisson]]).
- **Spatial autocorrelation:** residuals are averaged by point with `recalculateResiduals(group = PtNum)`, then tested with `testSpatialAutocorrelation(x = longitude, y = latitude)`, which computes Moran's I ([[Spatial Autocorrelation]], [[Residual Diagnostics]]).
- **Warnings:** bobyqa removed the convergence warning; the all-species top model gives a singular-fit message ([[Singular Fits and Convergence Warnings]]).
- **Outcome (Oct 13):** both top models are *underdispersed* (less spread than Poisson expects, [[Underdispersion]]) and show weak but significant spatial autocorrelation. A negative binomial would not help, because it only adds spread. Poisson is kept for the Report with both problems reported; fixing them is a Final Draft job ([[Preliminary Results]], [[Next Steps]], [[Decision Log]]).

## 7. Compare models
Rank by AIC; models within 2 units count as similarly supported ([[AIC]], [[Delta AIC and Akaike Weights]], [[Anderson and Burnham 2002]]). `model.sel()` uses AICc by default; the script sets `rank = "AIC"` to match the proposal (with 1,130 visits the two are almost identical). Both tables (all-species and focal) are saved to the Results folder.

## 8. Preliminary results for the Report
Done Oct 13: model selection tables for both responses, rate ratios with 95% confidence intervals for the top model ([[Confidence Interval]]), the point variance, and the diagnostics, plus two figures ([[ggplot2 and ggsave()]]). All numbers live in [[Preliminary Results]].

## 9. Limitations to state in Methods
The Report has no Discussion section, so these sit in a Limitations paragraph at the end of Methods ([[Decision Log]]).
- Property is fully confounded with year, dates and largely crew, so year cannot be added as a separate predictor ([[Why site and year cannot be separated]]).
- Spatial covariance comes from 2022 imagery and is applied to the 2023 surveys (CR, HB), assuming tree cover changed little in one year.
- The 376 complete-case points exclude the most flooded ones ([[Complete-Case Analysis]]).
- Observed richness underestimates true richness ([[Why observed richness is not true richness]]).
- The Poisson models are underdispersed and their residuals are weakly spatially autocorrelated (added Oct 13, see [[Preliminary Results]]).

## History
The Sep 10 proposal's set (Global `Site * Wind`, Additive, Site, Weather, Null; superseded Oct 12) had no habitat predictors. The scripts ran it until Oct 12; it was removed from the code on Oct 13 ([[R Scripts Walkthrough]]).

Open choices: [[Open Questions]].

**Part of:** [[MOC 23 - Grassland Bird Richness Project|MOC - Grassland Bird Richness Project]]
