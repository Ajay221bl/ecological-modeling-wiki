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

**What to report for a model** is the checklist of details that lets a reader judge and repeat your analysis ([[Writing Methods Sections]], [[Writing Results Sections]], [[Model Validation]]). Report the data exploration: outliers, collinearity (VIF), zeros and relationships, with every step and any removed outlier justified (Zuur et al. 2010) ([[Data Exploration Protocol]]). Report the model: distribution, link, predictors and whether they were standardised, interactions, random effects and their number of levels, and any correlation or variance structures. Report the validation: residual checks, dispersion, autocorrelation and influential points.

Report the estimates: coefficients with SEs or intervals, variance components, and R², marginal and conditional for mixed models ([[Marginal and Conditional R-squared]]). Report the selection: the candidate set, criterion values and weights; [[Harrison et al. 2018]] suggest reporting the global model and summed weights alongside model-averaged effects ([[Model Averaging]]). Bayesian extras are the priors, sampler settings, R-hat, ESS and posterior predictive checks ([[Posterior Predictive Check]]). Finally, say where the code and data can be found ([[Reproducibility]]).

The checklist draws on [[Zuur et al. 2010]], [[Harrison et al. 2018]], the case studies in [[Zuur et al. 2009]] and the November 24 session ([[Course Website]]). Reviewers don't only want the final model; they need enough to judge how you got there.

## Connections
- **Builds on:** [[Writing Methods Sections]], [[Writing Results Sections]], [[Model Validation]]
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
