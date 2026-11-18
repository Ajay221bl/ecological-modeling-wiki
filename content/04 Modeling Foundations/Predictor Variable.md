---
type: atomic
tags:
  - statistical-foundations
  - modeling
  - flashcards/eco/modeling
description: "A predictor is something you use to explain or predict the response; in R it goes on the right of the ~."
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

You want to guess how many species a birder will record tomorrow. What would you want to know first? Probably where they will be (some sites are richer, and a spot by a tree line holds different birds from open grass), how windy it will be (wind hides birdsong) and how cloudy or rainy. Each of these is a **predictor variable**: a piece of information used to explain or predict the [[Response Variable]] (the outcome you are trying to understand). Other names for it are covariate, explanatory variable, independent variable and x; Hobbs and Hooten use x for "predictor variables, also called covariates" ([[Hobbs and Hooten 2015 Ch1]], p. 5). In an R model formula the predictors go on the right of the `~`: `Richness ~ Site + Wind + Sky`. In the simplest case a predictor works like the slope in an [[Equation of a Line]]: for each one-step increase in wind, expected species change by this much.

Build one. Suppose a model says expected species = 7 − 0.5 × Wind. Wind 0 (calm) gives 7 − 0 = 7.0; Wind 1 gives 6.5; Wind 2 gives 6.0; Wind 3 gives 5.5. One [[Regression Coefficient|coefficient]], −0.5, describes the whole wind effect, because each step is assumed to matter equally; that is a *numeric* predictor. A *categorical* predictor, such as Site, instead gets one coefficient for each group beyond a baseline ([[Categorical Variable]], [[Reference Level]]). Each predictor's coefficient sits inside the [[Linear Predictor]], the sum that the model builds. It also helps to label the job each predictor does: *variables of interest* are the ones your [[Hypothesis]] is about; *nuisance* or control variables are included so they do not distort those, such as [[Detection Covariates]] (without Wind, a site surveyed on windier days would look poorer for a reason unrelated to habitat); and *grouping variables* are often entered as [[Random Effect|random effects]] ([[Grouping Variable]]). Good practice is to explore predictors before modelling: look for [[Outlier|outliers]] and unbalanced sampling, check for [[Collinearity]] (correlated predictors inflate standard errors and can flip coefficient signs) and plot the response against each predictor ([[Zuur et al. 2010]], pp. 5, 8-10). Guthery and Bingham add a sense check: each coefficient's sign should make biological sense "holding other x values constant", or "there is something wrong with the model, the data, or your understanding of nature" ([[Guthery and Bingham 2007]], p. 688).

Three confusions. "Independent" does not mean independent of other predictors: predictors can be correlated, which is collinearity. A predictor's effect is an association, not necessarily its cause ([[Correlation vs Causation]]). And numbers stored as numbers need not be numeric predictors: codes like Wind 0-3 are a choice between one slope and separate groups ([[Factors in R]]). In the project's final proposal (Oct 12, fitted Oct 13), the predictors are: Site (BK, CR, DC, HB, HO), a factor and variable of interest for H1; [[Spatial Covariance]] at one of three window sizes (`SpCov3_z`, `SpCov9_z` or `SpCov27_z`), tree cover (`Tree50_z`, from WD50 + FO50, % within 50 m) and scrub cover (`Scrub50_z`, from SC50), all [[Standardizing|standardized]] variables of interest for H2; Wind (codes 0-3) and Sky (codes 0-5), each one slope, as detection controls; and PtNum as a [[Random Intercept|random intercept]] for [[Repeat-Visit Design|repeat visits]] (H3) ([[Analysis Plan]], [[Preliminary Results]]). The habitat predictors come from a second file, one row per point ([[Dataset]]), and are standardized because the 0.81 ha spatial covariance runs from −934 to 185 while cover runs from 0 to 100%. The three spatial covariance scales are correlated, so each gets its own model. Wind and Sky stay numeric because Wind = 3 occurs at only 8 point-visits and Sky = 5 at just 1 ([[Why include wind and sky]]), and Site is confounded with year, so its coefficient mixes the two ([[Confounding]]). One fitted example: each one-step rise in Wind multiplied expected all-species [[Species Richness|richness]] by 0.89, about 11% fewer species detected ([[Interpreting Poisson Coefficients]]).

## Connections
- **Builds on:** [[Response Variable]], [[Equation of a Line]], [[Categorical Variable]]
- **Leads to:** [[Reference Level]], [[Linear Predictor]], [[Detection Covariates]], [[Grouping Variable]], [[Collinearity]], [[Standardizing]], [[Interpreting Poisson Coefficients]], [[Fixed Effect]], [[Regression Coefficient]], [[Random Effect]], [[Outlier]], [[Random Intercept]], [[Repeat-Visit Design]], [[Species Richness]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Statistical Foundations]]
- **Go deeper:** [[Analysis Plan]], [[Why include wind and sky]], [[Zuur et al. 2010]], [[Guthery and Bingham 2007]], [[Hobbs and Hooten 2015 Ch1]]

## Flashcards

What assumption are you making by entering Wind (0-3) as a number rather than a factor?
??
That every one-step increase in the wind code (0 to 1, 1 to 2, 2 to 3) has the same effect on log richness, fitted as one slope. As a factor, each level would get its own coefficient, at the cost of more parameters and very sparse data for Wind = 3.
++++

Name the three jobs a predictor can do in a model.::Variable of interest (tests your hypothesis), nuisance or control variable (removes a distortion), or grouping variable (marks which rows belong together).
