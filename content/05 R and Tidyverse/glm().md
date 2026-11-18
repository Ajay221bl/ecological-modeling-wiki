---
type: atomic
tags:
  - r-reproducibility
  - r-functions
  - glm
  - flashcards
aliases:
  - "glm function"
status: seedling
---

# glm()
**In one line:** `glm()` is the R function that fits a [[Generalized Linear Model]]: you tell it what you are predicting from what (a formula), what kind of numbers the response is (the family), and which table to use, and it finds the best-fitting coefficients.

> [!info] Before this, it helps to know
> [[Functions and Arguments]] (how `glm(..., family = ...)` reads) · [[Equation of a Line]] (intercept and slope) · [[Generalized Linear Model]] (the idea `glm()` fits)

## Start from zero
A **model** here is an equation that predicts one column from others ([[Statistical Model]]). The simplest is a straight line: richness = intercept + slope x wind ([[Equation of a Line]]). The intercept and slope are **coefficients**, numbers the computer picks so the line fits the data as well as possible ([[Maximum Likelihood Estimation]]).

Plain straight-line regression (`lm()` in R, the [[Linear Model]]) quietly assumes the data scatter around the line in a bell-curve way, with the same spread everywhere. Species counts break that: they are whole numbers, never negative, and spread out more when the average is higher ([[Assumptions of Linear Models]]).

`glm()` fixes this with two extra settings:
- a **family**: which [[Probability Distribution]] describes the scatter ([[Error Distribution (Family)]]). For counts, `"poisson"`;
- a **link**: a transformation between the straight-line part and the average ([[Link Function]]). For Poisson the default is the [[Log Link]], so the model predicts the [[Logarithms and Exponents|log]] of the average count with a straight-line formula. Undoing the log always gives a positive number, so predicted counts can never go negative.

## Why it exists
Without `glm()`, you would either force counts into a linear model (and get impossible negative predictions and wrong uncertainty), or write your own fitting code. `glm()` is the standard, tested tool for this whole family of models.

## A tiny example
Suppose a Poisson GLM says log(average richness) = 1.8 + 0.1 x Wind.
- Wind = 0: log(average) = 1.8, so average = e^1.8 ≈ 6.0 species.
- Wind = 2: log(average) = 2.0, so average = e^2.0 ≈ 7.4 species.

Each step of Wind *multiplies* the average by e^0.1 ≈ 1.105 (about 10.5% more). (These numbers are invented to show the arithmetic, not results.)

## In my project
I do **not** use `glm()` for my final models, but Dr. Roberts' example does, so it is the starting point. In `PineRidgeFireLegacies_Analysis.R`:

```r
mods <-
  list(Global = "BirdRichness ~ Severity * ShrubCoverMean",
       Additive = "BirdRichness ~ Severity + ShrubCoverMean",
       Severity = "BirdRichness ~ Severity",
       Shrub = "BirdRichness ~ ShrubCoverMean",
       Null = "BirdRichness ~ 1")
fits <-
  lapply(mods, glm, family = "poisson", data = datClean)
```

Reading it for a first-time R user:
- `list(Global = "...", ...)`: a named list. Each item has a name (left of `=`) and a formula written as text (in quotes). Commas separate items.
- In a formula, `~` means "is modelled as" (left side: [[Response Variable]]; right side: [[Predictor Variable|predictors]]). `+` adds a predictor. `*` adds two predictors *and* their [[Interaction Term]]. `~ 1` means "intercept only", the [[Null Model]].
- `lapply(mods, glm, ...)`: "apply `glm` to each formula in the list" and return a list of fitted models. The extra inputs after the comma (`family`, `data`) are handed to every call.
- `family = "poisson"` picks the [[Poisson Distribution]]; `data = datClean` names the table.

Why it works for him and not for me: his data have **one row per point** (richness summarized over visits), so each row is independent. My data have **about three rows per point** (one per visit). Rows from the same point are not independent, and treating them as independent is [[Pseudoreplication]] (see [[Independence Assumption]]). `glm()` cannot add a random effect; it does not understand a term like `(1|PtNum)`. So I switched to [[glmer()]], which does everything `glm()` does and adds random effects (see [[How LM, GLM and GLMM are one family]]).

A plain GLM is still useful as a comparison: if I fit `glm(Richness ~ Site + Wind + Sky, family = "poisson", data = datClean)`, its standard errors for Site would likely be too small, because it counts each repeat visit as new information. That is the problem the random intercept fixes.

## Common confusions
- **"GLM means general linear model."** Different thing. Here the G is *generalized*: other families and links.
- **"Coefficients are in species."** With a log link they are on the log scale; exponentiate to get multipliers ([[Interpreting Poisson Coefficients]]).
- **"`family = poisson` log-transforms my data."** No. The data stay as counts; the *average* is linked through the log.

## Connections
- **Builds on:** [[Generalized Linear Model]], [[Poisson Distribution]], [[Log Link]], [[Functions and Arguments]]
- **Leads to:** [[glmer()]], [[GLMM]], [[MuMIn model.sel()]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]], [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]
- **Go deeper:** [[Guthery and Bingham 2007]] (careful reading of regression output)

> [!question]- Check yourself
> Why is `glm()` fine for Dr. Roberts' Pine Ridge data but not for mine?
> ?
> His data have one row per point, so rows are independent. Mine have about three visits per point, and `glm()` cannot add a random intercept to account for that non-independence, so it would pseudoreplicate.
