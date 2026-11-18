---
type: atomic
tags:
  - r-reproducibility
  - r-functions
  - glm
  - flashcards/eco/r
description: "glm() is the R function that fits a generalized linear model: you give it a formula, a family describing what kind of numbers the response is, and a table, and it finds the best-fitting coefficients."
aliases:
  - "glm function"
status: seedling
---

# glm()

A straight-line model predicts one column from others, like [[Species Richness|richness]] = intercept + slope × wind ([[Equation of a Line]]); the intercept and slope are [[Regression Coefficient|coefficients]], numbers the computer picks so the line fits the data as well as possible ([[Maximum Likelihood Estimation]]). Plain regression, `lm()` in R ([[Linear Model]]), quietly assumes the data scatter around the line in a bell-curve way with the same spread everywhere. Species counts break that: they are whole numbers, never negative, and spread out more when the average is higher. **`glm()`** is the R function that fits a [[Generalized Linear Model]], the version that handles such data. You give it a formula ([[Model Formula Syntax]]: `y ~ x`, read "y is modelled as x"), a *family*, which [[Probability Distribution]] describes the scatter ([[Error Distribution (Family)]]), and a table, and it finds the coefficients. Each family comes with a default [[Link Function]], a [[Transformation|transformation]] between the straight-line part and the average; for counts, `family = "poisson"` uses the [[Log Link]], so the model predicts the log of the average count, and undoing the log always gives a positive number.

Build one by hand. Suppose a [[Poisson Regression|Poisson GLM]] says log(average richness) = 1.8 + 0.1 × Wind. At Wind 0, log(average) = 1.8, so average = e^1.8 ≈ 6.0 species; at Wind 2, log(average) = 2.0, so average = e^2.0 ≈ 7.4. Each step of Wind multiplies the average by e^0.1 ≈ 1.105, about 10.5% more (invented numbers to show the arithmetic). Dr. Roberts' example script, `PineRidgeFireLegacies_Analysis.R`, fits several such models at once:

```r
# norun: needs the Pine Ridge data
mods <-
  list(Global = "BirdRichness ~ Severity * ShrubCoverMean",
       Additive = "BirdRichness ~ Severity + ShrubCoverMean",
       Severity = "BirdRichness ~ Severity",
       Shrub = "BirdRichness ~ ShrubCoverMean",
       Null = "BirdRichness ~ 1")
fits <-
  lapply(mods, glm, family = "poisson", data = datClean)
```

Each list item is a named formula written as text. `+` adds a [[Predictor Variable|predictor]], `*` adds two predictors and their [[Interaction Term]], and `~ 1` means intercept only, the [[Null Model]]. [[lapply()]] applies `glm` to each formula and returns a list of fitted models, handing `family` and `data` to every call. This works for him because his data have one row per point, so rows are independent. The grassland bird data have about three rows per point (one per visit), rows from one point are alike, and treating them as independent is [[Pseudoreplication]] ([[Independence of Observations]]). `glm()` cannot add a [[Random Effect|random effect]] and does not understand `(1|PtNum)`, so the project uses [[glmer()]], which does everything `glm()` does plus random effects ([[How LM, GLM and GLMM are one family]]). A plain GLM is still a useful comparison: `glm(Richness ~ Site + Wind + Sky, family = "poisson", data = datClean)` would likely give standard errors for Site that are too small, because it counts each repeat visit as new information. Three confusions: GLM here means *generalized*, not "general", linear model; with a log link the coefficients are on the log scale, so exponentiate them to get multipliers ([[Interpreting Poisson Coefficients]]); and `family = "poisson"` does not log-transform the data, which stay counts, only the average is linked through the log.

```r
wind <- c(0, 2)
exp(1.8 + 0.1 * wind)   # about 6.05 and 7.39
exp(0.1)                # multiplier per step, about 1.105
```

## Connections
- **Builds on:** [[Equation of a Line]], [[Regression Coefficient]], [[Linear Model]], [[Generalized Linear Model]], [[Probability Distribution]], [[Link Function]], [[Log Link]]
- **Leads to:** [[glmer()]], [[Interpreting Poisson Coefficients]], [[Null Model]], [[Interaction Term]], [[MuMIn model.sel()]], [[Species Richness]], [[Transformation]], [[Poisson Regression]], [[Random Effect]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]], [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]
- **Go deeper:** [[How LM, GLM and GLMM are one family]], [[Model Formula Syntax]], [[lapply()]], [[Guthery and Bingham 2007]]

## Flashcards

Why is `glm()` fine for Dr. Roberts' Pine Ridge data but not for the grassland bird data?
??
His data have one row per point, so rows are independent. The grassland bird data have about three visits per point, and `glm()` cannot add a random intercept to account for that non-independence, so it would pseudoreplicate.
++++

Does `family = "poisson"` log-transform the response data?::No. The data stay as counts; only the model's average is linked to the predictors through the log.
