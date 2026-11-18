---
type: atomic
tags:
  - statistical-foundations
  - modeling
  - flashcards
aliases:
  - "predictor"
  - "predictors"
  - "covariate"
  - "covariates"
  - "explanatory variable"
  - "independent variable"
  - "x"
status: seedling
---

# Predictor Variable

**In one line:** a predictor is something you use to explain or predict the response; in R it goes on the right of the `~`.

> [!info] Before this, it helps to know
> [[Response Variable]] (what predictors explain) · [[Variable and Observation]] · [[Equation of a Line]] (how a predictor's effect becomes a slope)

## Start from zero
You want to guess how many species a birder will record tomorrow. What would you want to know first? Probably:

- **Where** she is (some sites are richer, and a spot next to a tree line may hold different birds from open grass).
- **How windy** it is (wind hides birdsong).
- **How cloudy or rainy** it is.

Each of these is a **predictor**: a piece of information that helps predict the outcome. Other names: covariate, explanatory variable, independent variable, x.

In the simplest case, a predictor works like the slope in an [[Equation of a Line]]: "for each one-step increase in wind, expected species change by this much".

## Why it exists
A model expresses an idea like "the response depends on these things". Hobbs and Hooten use x for "predictor variables, also called covariates" ([[Hobbs and Hooten 2015 Ch1]], p. 5; [[Hobbs and Hooten 2015 Ch2]], p. 22). Each predictor gets its own coefficient (a number saying how strongly it matters) inside the [[Linear Predictor]].

It helps to label what job each predictor does:
- **Variables of interest:** the ones your [[Hypothesis]] is about.
- **Nuisance or control variables:** included so they don't distort the variables of interest (for example, [[Detection Covariates]]). Without them, a site surveyed on windier days would look poorer for a reason that has nothing to do with habitat.
- **Grouping variables:** often entered as random effects instead of fixed coefficients ([[Grouping Variable]]).

Predictors come in two kinds:
- **Numeric:** one slope for the whole range (wind code 0, 1, 2, 3).
- **Categorical:** named groups, one coefficient per group beyond a reference (see [[Categorical Predictor and Reference Level]]).

Good practice from the readings: explore predictors before modeling. Look for outliers and unbalanced sampling, check for [[Collinearity]] (correlated predictors inflate standard errors and can even flip coefficient signs), and plot the response against each predictor ([[Zuur et al. 2010]], p. 5, 8-10). Guthery and Bingham add a sense check: each coefficient's sign should make biological sense "holding other x values constant"; if it does not, "there is something wrong with the model, the data, or your understanding of nature" ([[Guthery and Bingham 2007]], p. 688).

## A tiny example
Suppose a model says: expected species = 7 - 0.5 x Wind.

| Wind code | Working | Expected species |
|---|---|---|
| 0 (calm) | 7 - 0.5 x 0 | 7.0 |
| 1 | 7 - 0.5 x 1 | 6.5 |
| 2 | 7 - 0.5 x 2 | 6.0 |
| 3 | 7 - 0.5 x 3 | 5.5 |

One number (-0.5) describes the whole wind effect, because each step is assumed to matter equally. (My real model works on the log scale, so the steps are multiplicative; see [[Interpreting Poisson Coefficients]].)

## In my project
Predictors in the final proposal (Oct 12), now in the code and fit on Oct 13; the full model set is in [[Analysis Plan]], the results in [[Preliminary Results]].

| Predictor | Type | Role |
|---|---|---|
| Property (`Site`: BK, CR, DC, HB, HO) | factor | variable of interest (H1) |
| [[Spatial Covariance]] (one of three window sizes: `SpCov3_z`, `SpCov9_z` or `SpCov27_z`) | numeric, standardized | variable of interest (H2) |
| Tree cover (`Tree50_z`, from WD50 + FO50, % within 50 m) | numeric, standardized | variable of interest (H2) |
| Scrub cover (`Scrub50_z`, from SC50, % within 50 m) | numeric, standardized | variable of interest (H2) |
| `Wind` (codes 0-3) | numeric (one slope) | detection control |
| `Sky` (codes 0-5) | numeric (one slope) | detection control |
| `PtNum` (one per point) | random intercept | grouping, handles repeat visits (H3) |

Things to keep in mind:
- **Habitat predictors come from a second file.** The bird CSV has none; the data release's habitat file has them, one row per point ([[Dataset]]). They are standardized so their effects can be compared, since the 0.81 ha spatial covariance runs from -934 to 185 while cover runs from 0 to 100% ([[Standardizing Predictors]]).
- **Correlated predictors go in separate models.** The three spatial covariance scales are correlated, so each has its own model ([[Collinearity]]).
- **Wind and Sky are codes treated as numbers.** The model fits one slope each, assuming every step (calm to light, light to moderate) has the same effect on log richness. They could be [[Factors]] instead, but Wind = 3 occurs at only 8 point-visits and Sky = 5 at just 1 ([[Why include wind and sky]]).
- **Property is confounded with year,** so its coefficient mixes the two ([[Confounding]]).

History: the Sep 10 scripts used only Site, Wind and Sky. Since Oct 13 the scripts read the habitat file, build and standardize these predictors, and fit all of them ([[R Scripts Walkthrough]]). One example of a fitted predictor: each one-step rise in the Wind code multiplied expected all-species richness by 0.89, about 11% fewer species detected ([[Interpreting Poisson Coefficients]]).

## Common confusions
- **"Independent variable" means independent of other predictors.** No. Predictors can be correlated with each other (that is collinearity).
- **"A predictor's effect is its cause."** A model shows association; causal claims need design ([[Correlation vs Causation]]).
- **"Numbers stored as numbers must be numeric predictors."** Codes like Wind 0-3 are a choice: one slope or separate groups.

## Connections
- **Builds on:** [[Response Variable]], [[Statistical Model]], [[Equation of a Line]]
- **Leads to:** [[Categorical Predictor and Reference Level]], [[Linear Predictor]], [[Interaction Term]], [[Collinearity]], [[Fixed Effect]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Statistical Foundations]]
- **Go deeper:** [[Zuur et al. 2010]] (exploring predictors), [[Guthery and Bingham 2007]] (sense-checking signs), [[Hobbs and Hooten 2015 Ch2]]

> [!question]- Check yourself
> What assumption am I making by entering Wind (0-3) as a number rather than a factor?
> ?
> That every one-step increase in the wind code (0 to 1, 1 to 2, 2 to 3) has the same effect on log richness, fitted as one slope. As a factor, each level would get its own coefficient, at the cost of more parameters and very sparse data for Wind = 3.
