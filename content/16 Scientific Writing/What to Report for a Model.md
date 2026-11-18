---
type: atomic
tags:
  - writing
  - flashcards/eco/writing
description: "What to report for a model is the checklist of details (data exploration, model structure, validation, estimates with uncertainty, selection and software) that lets a reader judge and repeat your analysis."
aliases:
  - "What to Report in a Paper (Zuur)"
  - "Model reporting checklist"
  - "Reporting a regression model"
  - "Reporting checklist"
status: seedling
---

# What to Report for a Model

**What to report for a model** is the checklist of details that lets a reader judge and repeat your analysis ([[Writing Methods Sections]], [[Writing Results Sections]], [[Model Validation]]). Report the [[Data Exploration|data exploration]]: [[Outlier|outliers]], [[Collinearity|collinearity]] (VIF), zeros and relationships, with every step and any removed outlier justified (Zuur et al. 2010) ([[Data Exploration Protocol]]). Report the model: distribution, link, [[Predictor Variable|predictors]] and whether they were [[Standardizing|standardised]], interactions, [[Random Effect|random effects]] and their [[How Many Levels for a Random Effect|number of levels]], and any correlation or [[Variance Structures|variance structures]]. Report the validation: residual checks, dispersion, autocorrelation and influential points.

Report the estimates: coefficients with SEs or intervals, [[Variance Components|variance components]], and R², marginal and conditional for [[Mixed Effects Model|mixed models]] ([[Marginal vs Conditional R-squared|Marginal and Conditional R-squared]]). Report the selection: the candidate set, criterion values and weights; [[Harrison et al. 2018]] suggest reporting the [[Global Model|global model]] and summed weights alongside model-averaged effects ([[Model Averaging]]). Bayesian extras are the priors, [[adapt_delta and Sampler Settings|sampler settings]], R-hat, ESS and posterior predictive checks ([[Posterior Predictive Check]]). Finally, say where the code and data can be found ([[Reproducibility]]).

The checklist draws on [[Zuur et al. 2010]], [[Harrison et al. 2018]], the case studies in [[Zuur et al. 2009]] and the November 24 session ([[Course Website]]). Reviewers don't only want the final model; they need enough to judge how you got there.

## Connections
- **Builds on:** [[Writing Methods Sections]], [[Writing Results Sections]], [[Model Validation]], [[Data Exploration]], [[Outlier]], [[Collinearity]], [[Predictor Variable]], [[Standardizing]], [[Random Effect]], [[How Many Levels for a Random Effect]], [[Variance Structures]], [[Variance Components]], [[Mixed Effects Model]], [[Global Model]], [[adapt_delta and Sampler Settings]]
- **Leads to:** [[Data Exploration Protocol]], [[Model Ranking Tables]]
- **Part of:** [[MOC 18 - Scientific Writing|MOC - Scientific Writing]], molecular note [[How to write up a modeling analysis]]

## Flashcards

Per Zuur et al. 2010, what must be said about outliers?
??
Every exploration step is reported and any removed outlier is justified and mentioned.
++++

For a mixed model, which R² values should be reported?
??
Marginal and conditional R².
++++
