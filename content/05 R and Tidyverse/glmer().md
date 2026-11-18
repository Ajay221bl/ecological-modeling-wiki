---
type: atomic
tags:
  - r-reproducibility
  - r-functions
  - mixed-models
  - flashcards
aliases:
  - "glmer"
  - "lme4"
  - "glmer.nb()"
status: seedling
---

# glmer()
**In one line:** `glmer()`, from the **lme4** package, fits a [[GLMM]]: the same kind of model as [[glm()]], plus "random effects" that let each group (here, each survey point) have its own baseline, written as `(1|group)`.

> [!info] Before this, it helps to know
> [[glm()]] (the model without random effects) · [[Functions and Arguments]] (reading R calls) · [[Random Intercept]] (what `(1|PtNum)` means)

## Start from zero
Suppose you visit the same field three times and count species: 6, 7 and 6. A different field gives 3, 4 and 3. The visits to one field are alike because the field itself is rich or poor. Statisticians say the visits are **not independent**: knowing one tells you something about the others ([[Independence Assumption]]).

A plain [[glm()]] treats every visit as brand-new information. With about three visits per point, it thinks it has three times more independent information than it really has. That mistake is [[Pseudoreplication]].

`glmer()` fixes this by giving each point its own starting level, its **random intercept** ([[Random Intercept]]). The points' levels are assumed to come from one shared bell curve ([[Normal Distribution]]); the model estimates how wide that bell curve is, a [[Variance Component]]. A wide bell curve means points differ a lot.

## Why it exists
Grouped data are everywhere in ecology: visits within points, points within sites, years within animals. `glmer()` handles grouping for non-bell-curve responses such as counts, which `lmer()` (for bell-curve data) and `glm()` (no groups) cannot.

## A tiny example
Two points, three visits each:

| Point | Visits | Point's average | Difference from overall average (4.83) |
|---|---|---|---|
| A | 6, 7, 6 | 6.33 | +1.5 |
| B | 3, 4, 3 | 3.33 | -1.5 |

The random intercept is roughly that "difference from overall" for each point, pulled a little toward 0 because three visits is not much evidence ([[Partial Pooling]]). (Roughly: in a Poisson GLMM this happens on the log scale, but the idea is the same.)

## In my project
In `GrasslandBirdRichness_Analysis.R`, the candidate formulas are built as text inside the function `fitCandidates()` and fitted in one go (shown here for M1; the full function is in [[R Scripts Walkthrough]]):

```r
mods <-
  list(M0_Null     = paste(response, "~ Wind + Sky + (1|PtNum)"),
       M1_Property = paste(response, "~ Site + Wind + Sky + (1|PtNum)"),
       ...)

fits <-
  lapply(mods, function(f) glmer(as.formula(f), family = "poisson", data = datClean,
                               control = glmerControl(optimizer = "bobyqa")))
```

With `response = "Richness"`, `paste()` makes the M1 text `"Richness ~ Site + Wind + Sky + (1|PtNum)"`. Symbol by symbol:

| Code | What it means | Concept |
|---|---|---|
| `"..."` | the formula is stored as text for now | [[R Objects and Assignment]] |
| `Richness ~` | `~` = "is modelled as"; Richness is what we predict | [[Response Variable]], [[Species Richness]] |
| `Site` | one effect per property, compared with the first level (BK) | [[Fixed Effect]], [[Factors]], [[Categorical Predictor and Reference Level]] |
| `SpCov27_z + Tree50_z + Scrub50_z` | habitat predictors in the M2 and M3 models, each per 1 standard deviation | [[Standardizing Predictors]], [[Spatial Covariance]] |
| `Wind + Sky` | `+` adds predictors; weather that affects detectability, entered as numbers | [[Detection Covariates]], [[Why include wind and sky]] |
| `(1\|PtNum)` | `1` = intercept; `\|` = "for each level of"; so a separate intercept for each point (376 in the fitted data) | [[Random Intercept]], [[Why a random intercept for point]] |
| `family = "poisson"` | counts, variance equal to mean, log link | [[Poisson Distribution]], [[Log Link]] |
| `control = glmerControl(optimizer = "bobyqa")` | which search method finds the best estimates; bobyqa removed a convergence warning the default gave | [[Maximum Likelihood Estimation]], [[Singular Fits and Convergence Warnings]] |

The fitting line, word by word:
- `lapply(mods, ...)`: do something to each item of `mods`, return a list.
- `function(f) ...`: a tiny one-off function; `f` stands for "the current formula text".
- `as.formula(f)`: turn the text into a real formula object, which `glmer()` needs.

Six models are fitted per response: M0 Null, M1 Property, M2a/M2b/M2c Habitat at three spatial scales, and M3 = Site plus the best habitat model's terms, chosen automatically by lowest AIC ([[Candidate Model Set]], [[Analysis Plan]]). All use the same 1,130 visits at 376 points ([[Complete-Case Analysis]]), once for all-species richness and once for focal richness. `Site` stays fixed because it has only 5 levels and is the effect I want to estimate ([[Why Site is fixed not random]]). By default `glmer()` uses the Laplace approximation to the [[Likelihood]].

What it gave (ajay's RStudio run, Oct 13; R is not installed in Claude's environment, so rerun any change there):
- M3 ranked first for both responses ([[MuMIn model.sel()]]).
- The point random-intercept variance was **0 for all species**, so R printed `boundary (singular) fit`: a message, not an error. Once property, habitat and weather were in, visits to one point were no more alike than visits to different points. For focal species it was **0.20**. The random intercept stays in every model as designed. Details in [[Preliminary Results]].
- The dispersion ratio was below 1 ([[check_overdispersion()]]), so no switch to a negative binomial was needed.

(History: the Sep 10 script fitted five different models, Global `Site * Wind`, Additive, Site, Weather and Null, with no habitat. Replaced Oct 12 to 13.)

## Common confusions
- **"`|` means OR here."** Inside a filter, `|` is OR. Inside `( | )` in a model formula it means "grouped by".
- **"The random intercept is another predictor I interpret."** You usually report its variance (from `VarCorr()`), not the 376 individual values.
- **"A warning means the model failed."** Warnings and messages ask you to check; errors stop the code. `boundary (singular) fit` is a message.

## Connections
- **Builds on:** [[glm()]], [[Random Intercept]], [[GLMM]], [[Functions and Arguments]]
- **Leads to:** [[MuMIn model.sel()]], [[check_overdispersion()]], [[Residual Diagnostics]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]], [[MOC 14 - Mixed Models|MOC - Mixed Models]]
- **Go deeper:** [[Harrison et al. 2018]] (practical guide to mixed models in ecology), [[Bolker et al. 2009]]

> [!question]- Check yourself
> Which part of the glmer formula prevents pseudoreplication, and how?
> ?
> `(1|PtNum)`. It gives each point its own baseline richness, so the roughly three visits to one point are treated as related rather than as independent samples.
