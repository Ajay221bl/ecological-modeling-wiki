---
type: project
tags:
  - project
  - grassland-bird-richness
  - decisions
aliases:
  - "Decisions"
status: seedling
---

# Decision Log

> [!summary] In plain words
> This is a diary of every choice made in the project: what was decided, when, why, and where the choice is written down. It exists so that when someone (including future me) asks "why did you do it that way?", the answer is already here. Old rows are never deleted, only marked "superseded".

Every project decision, why it was made, and where it is recorded. Add new rows at the bottom; never delete old ones (mark them "superseded" instead). Related: [[Alternatives Considered]] for options that were rejected.

**A few words used in the table:**
- **Point-visit:** one survey of one point on one date and visit round; the basic unit of my data ([[Sampling Unit]]).
- **Poisson GLMM:** a model for counts that also handles groups of related rows ([[Poisson Distribution]], [[GLMM]]).
- **Overdispersed:** counts more spread out than the Poisson model assumes ([[Overdispersion]]).
- **Random intercept for point:** each point gets its own baseline richness ([[Random Intercept]]).
- **Fixed effect:** an effect estimated directly, one number per level, such as one per site ([[Fixed Effect]]).
- **AIC:** a score for comparing models; lower is better ([[AIC]]).

| Date | Decision | Why | Source |
|---|---|---|---|
| date unknown (before Sep 10) | Use Dr. Roberts' grassland bird point-count data | Shareable, real data from his own research ([[Roberts et al. 2025]], [[Berry et al. 2026]]) | Brief |
| date unknown (before Sep 10) | Question = species richness per point-visit by property, not a single-species, observer, year or fly-over question (superseded Oct 12: question reframed as property vs local habitat, see below) | Strongest scientific story; richness behaves as a well-dispersed count, meaning its spread matches what a Poisson model expects ([[Why richness instead of single-species counts]]) | Brief; [[Alternatives Considered]] |
| Sep 10, 2026 | Response = unique species per point-visit, excluding fly-overs (refined Oct 12: ground-detection rule, see below) | Point-visit is the unit of effort; fly-overs (birds passing overhead) may not use the habitat ([[Why the point-visit is the sampling unit]], [[Why exclude fly-overs]]) | Proposal |
| Sep 10, 2026 | Start with a Poisson GLMM; switch to negative binomial if overdispersed | Counts; variance/mean near 1 ([[Why Poisson instead of linear regression for richness]], [[Why check overdispersion before trusting Poisson]]) | Proposal |
| Sep 10, 2026 | Include Wind and Sky as predictors | Weather affects detectability, how easy birds are to see or hear ([[Why include wind and sky]]) | Proposal |
| Sep 10, 2026 | Random effect for point location (still holds; now hypothesis H3 rather than H2, see below) | Repeat visits are not independent: the same spot gives similar counts ([[Why a random intercept for point]]; [[Hurlbert 1984]]; [[Bolker et al. 2009]]) | Proposal |
| Sep 10, 2026 | Compare models with AIC | Several competing hypotheses, each written as a model ([[Why compare models with AIC rather than only p-values]]) | Proposal |
| Sep 10, 2026 | Bayesian version later; Dickcissel occupancy model as stretch goal | Not yet taught; keep main analysis feasible ([[How the project could grow into Bayesian and occupancy models]]) | Proposal |
| date unknown | Site as a fixed effect | Only 5 levels; the site effects themselves are the target ([[Why Site is fixed not random]]) | Brief |
| date unknown | Use lme4 `glmer()` with a named list of formulas, `lapply()`, and `MuMIn::model.sel()`; copy PineRidgeFireLegacies structure (still holds; the list will hold M0-M3 instead of the Sep 10 five) | Course convention and Dr. Roberts' style ([[Why a reproducible project structure matters]]) | Brief; R scripts |
| Sep 15, 2026 (comment date in docx; feedback received before Oct 12) | Confirmed: random intercept for point (PtNum) | Dr. Roberts: "Good! Specifically, I would set 'point' as a random intercept." | [[Proposal Feedback from Dr Roberts]] |
| Sep 15, 2026 (comment date in docx; feedback received before Oct 12) | Plan to add habitat covariates; until then Site stands in, and the Report says habitat covariates are a planned addition (superseded Oct 12: habitat covariates adopted from the data release habitat file, see below) | Site identity is a weak test of a habitat hypothesis ([[Why site identity is a weak test of a habitat hypothesis]]) | [[Proposal Feedback from Dr Roberts]]; Brief |
| Oct 12, 2026 | Trim species and observer codes with `str_trim()` before counting (pending fix in script) | " FISP" and "EUST " double-count species (91 raw codes, 89 real) ([[str_trim()]]) | Oct 12 re-check (superseded by the Oct 13 row: done in code) |
| Oct 12, 2026 | Create Results and Figures folders (pending fix) | `write_csv()` and `ggsave()` fail without them, because R cannot save a file into a folder that does not exist | Oct 12 re-check (superseded by the Oct 13 row: done in code) |
| Oct 12, 2026 | Correct README claim of no missing values (pending fix) | Dist_50 has 1 NA, FlyOver has 5 | Oct 12 re-check (superseded by the Oct 13 row: README corrected) |
| Oct 12, 2026 | Proposed: keep rows where `Dist_50 + Dist_100 + Dist_400 > 0` instead of `FlyOver == 0` (not yet adopted) (superseded later on Oct 12: adopted in the final proposal; script change pending, see below) | Current filter drops 90 rows where the species was also on the ground | Oct 12 re-check |
| Oct 12, 2026 | State in Report Methods that Site is fully confounded with year | BK, DC, HO 2022 only; CR, HB 2023 only ([[Why site and year cannot be separated]]) | Oct 12 re-check |
| Oct 12, 2026 | Keep Poisson for now | Re-checked variance/mean 0.55-1.08 ([[EDA Findings]]) | Oct 12 re-check (superseded by the Oct 13 row: keep Poisson for the Report despite underdispersion) |
| Oct 12, 2026 | Scope work to the Project Report only: no Discussion, no Bayesian or occupancy model | Syllabus specs for the Report ([[Milestones and Deadlines]]) | Brief |
| Oct 12, 2026 | Do not name sites in writing until Dr. Roberts confirms the code mapping (superseded the same day: names confirmed by the metadata, next row) | Mapping of 5 codes to named properties unconfirmed ([[Study Sites]]) | Brief |
| Oct 12, 2026 | **Supersedes the row above:** site names may be used. BK Bald Knob NWR, CR Camp Robinson SUA, DC Dark Corner and HO Howell tracts of Cache River NWR, HB Holla Bend NWR | Defined in the USGS data release metadata ([[Roberts et al. 2025]]); CR is Camp Robinson, not Cache River ([[Study Sites]]) | Data release metadata |
| Oct 12, 2026 (final proposal) | Reframe the question: is richness better explained by **property identity (H1)** or by **local habitat (H2)**? Repeated visits become **H3** (old H2) | Answers Dr. Roberts' comment 1; site identity alone cannot test a habitat mechanism ([[Hypotheses]], [[Why site identity is a weak test of a habitat hypothesis]]) | Final proposal |
| Oct 12, 2026 (final proposal) | Adopt habitat covariates from the data release habitat file `FieldVeg50m_RemoteVeg_JUNMASK_forDataRelease.csv`, joined by PtNum | One row per point, matches all 416 points; available at all five properties ([[Dataset]], [[Roberts et al. 2025]]) | Final proposal |
| Oct 12, 2026 (final proposal) | Spatial covariance at all three windows (0.81, 7.29, 65.61 ha), **one scale per model** (M2a, M2b, M2c) | The scales are correlated (Spearman 0.47 to 0.76), so together they would be collinear ([[Collinearity]], [[Why the window size is a choice of scale]]) | Final proposal |
| Oct 12, 2026 (final proposal) | Tree cover = WD50 + FO50 (% woodland + forest within 50 m); scrub cover = SC50 | Measures available at every point and property ([[Percent Cover]]) | Final proposal |
| Oct 12, 2026 (final proposal) | Do not use field vegetation metrics (ROBEL_AVG, DENS_101, DBH_AVG) | Missing at 112 to 224 of 416 points, mostly roadside ([[Alternatives Considered]]) | Final proposal |
| Oct 12, 2026 (final proposal) | Fit every model to the same complete-case set: 376 points, 1,130 visits | AIC needs identical rows; 39 points lack spatial covariance (flood mask) ([[Complete-Case Analysis]]) | Final proposal |
| Oct 12, 2026 (final proposal) | Standardize the habitat predictors (center, divide by SD) | Puts spatial covariance (range -934 to 185) and cover (0-100%) on comparable scales ([[Standardizing Predictors]]) | Final proposal |
| Oct 12, 2026 (final proposal) | Candidate set M0 Null, M1 Property, M2a-c Habitat, M3 Property + best habitat, all with Wind + Sky + (1\|PtNum); replaces the Sep 10 set (Global, Additive, Site, Weather, Null) | Each model stands for H1, H2 or both ([[Analysis Plan]]) | Final proposal |
| Oct 12, 2026 (final proposal) | Focal grassland richness (6 focal species, 0-3 per visit) as a secondary response, fitted with the same model set | H2 predicts opposite habitat patterns for all species vs focal species ([[Why all-species and focal-species richness can disagree]]) | Final proposal |
| Oct 12, 2026 (final proposal) | Adopt the ground-detection filter `filter(coalesce(Dist_50, 0) + Dist_100 + Dist_400 > 0)` in place of `FlyOver == 0` (**R script change still pending**) | Keeps the 90 rows where a species was on the ground as well as overhead ([[Why exclude fly-overs]]) | Final proposal (superseded by the Oct 13 row: implemented) |
| Oct 12, 2026 (final proposal) | Wind and Sky stay numeric | Same coding as the scripts: one slope each. Categorical coding stays possible as a check, but Wind = 3 and Sky = 5 are rare ([[Why include wind and sky]]) | Final proposal |
| Oct 12, 2026 (final proposal) | Treat the property-year confounding as a stated limitation; do not add Year | Year is fully determined by property ([[Why site and year cannot be separated]]) | Final proposal |
| Oct 12, 2026 (final proposal) | Check overdispersion with `check_overdispersion()` and DHARMa; refit as negative binomial in glmmTMB if needed; plot residuals against point coordinates | Variance/mean 0.55-1.08 suggests Poisson is fine, but check the fitted model; points 400 m apart may be spatially autocorrelated ([[Residual Diagnostics]], [[Spatial Autocorrelation]]) | Final proposal (superseded by the Oct 13 row: Poisson kept for the Report; Moran's I used for the spatial check) |
| Oct 12, 2026 | Final proposal saved as `Project_Proposal_Revised.docx` (in ClaudeProject_Setup) and as an [online doc](https://claude.ai/code/artifact/16d27d59-f0c0-444c-bdf1-f8b1f8821221); `Project_Proposal_with_CPR_Feedback.docx` left untouched | Keep the graded original and the revision separate ([[Milestones and Deadlines]]) | Revised-proposal thread |
| Oct 12, 2026 (wiki lint) | Do not describe BK as grassland core because its spatial covariance is near 0; call it open and treeless, much of it cropland | Near-zero covariance only means no tree-grass boundary nearby; BK points average about 23% soybean and 19% rice within 50 m ([[Percent Cover]], [[Spatial Covariance]]) | Habitat file |
| Oct 13, 2026 | Oct 12 pending code fixes done: `str_trim()` on SpeciesCode and Obs; `dir.create()` for the Results and Figures folders; README missing-values note corrected | The fixes listed on Oct 12 are now in the scripts and README ([[R Scripts Walkthrough]], [[README Data Dictionary]]) | Final scripts; README (Oct 13) |
| Oct 13, 2026 | Ground-detection filter implemented: `GroundCount = coalesce(Dist_50,0) + coalesce(Dist_100,0) + coalesce(Dist_400,0)`, keep `GroundCount > 0`. A visit with only fly-overs is **kept with richness 0**, not dropped (HO55 on Jun 20, 2022) | Richness is joined onto a list of every visit, so no visit vanishes; a visit where nothing used the ground really had 0 ground species ([[Why exclude fly-overs]]) | Wrangling script |
| Oct 13, 2026 | Fit every model with `glmerControl(optimizer = "bobyqa")` | The default optimizer gave a convergence warning; bobyqa removed it ([[Singular Fits and Convergence Warnings]]) | Analysis script |
| Oct 13, 2026 | M3 = Property + the habitat terms of the lowest-AIC M2 model, chosen automatically **per response** (65.61 ha for all species, 0.81 ha for focal) | The best scale can differ between responses, and choosing it in code avoids a hand-picked model ([[Preliminary Results]]) | Analysis script |
| Oct 13, 2026 | Rank models with `model.sel(fits, rank = "AIC")` (AIC, not the default AICc) | Matches the proposal; with 1,130 visits AIC and AICc are almost identical ([[MuMIn model.sel()]]) | Analysis script |
| Oct 13, 2026 | **Keep the Poisson GLMM for the Report** despite underdispersion (dispersion 0.66 all, 0.60 focal) and weak spatial autocorrelation (Moran's I about 0.05); report both, and fix them in the Final Draft | Underdispersion makes CIs too wide, autocorrelation can make them too narrow, so they partly offset; the Report only needs preliminary results ([[Underdispersion]], [[Spatial Autocorrelation]], [[Preliminary Results]], [[Next Steps]]) | Report-plan thread |
| Oct 13, 2026 | No separate functions script for the Report; `fitCandidates()` and `coefTable()` live in the analysis script | The syllabus lists scripts with "e.g.", so it is not required; a functions file could come in the Final Draft ([[Functions and Arguments]], [[Alternatives Considered]]) | Report-plan thread |
| Oct 13, 2026 | Always open the project via `GrasslandBirdRichness.Rproj` (File > Open Project), then Session > Restart R, then Source | Opening RStudio another way made `here()` look in the wrong folder ("... does not exist") ([[RProject]], [[here()]]) | ajay's RStudio run |
| Oct 13, 2026 | Report Figure 2 plots raw counts against spatial covariance in the 7.29 ha window, with a loess smoother | Shows the raw data for both responses, before any model. The 7.29 ha window is not the best model scale for either response (65.61 ha all, 0.81 ha focal), so the caption names the window ([[ggplot2 and ggsave()]], [[Preliminary Results]]) | Analysis script; Report draft |
| Oct 13, 2026 | Fold Limitations into Methods; no Discussion section in the Report | The Report allows only Introduction, Hypotheses, Methods, Results and Citations ([[Milestones and Deadlines]]) | Syllabus; Report draft |
| Oct 13, 2026 | Save the Report .docx in ClaudeProject_Setup, outside the R project folder | Keeps it out of the zipped code folder ([[Why a reproducible project structure matters]]) | Report draft |

## Still to decide
- Which Final Draft model fixes underdispersion and spatial autocorrelation (options and recommendation in [[Next Steps]]).
- Settled on Oct 13 (rows above): fly-over-only visits are kept as richness 0; M3 uses the best habitat scale per response.
- Settled on Oct 12: Wind and Sky numeric; Year handled as a limitation only.
See [[Open Questions]] and [[Next Steps]].

**Part of:** [[MOC 23 - Grassland Bird Richness Project|MOC - Grassland Bird Richness Project]]
