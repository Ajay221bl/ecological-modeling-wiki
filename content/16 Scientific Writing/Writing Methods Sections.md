---
type: atomic
tags:
  - writing
  - flashcards/eco/writing
description: "A methods section explains what data you collected and exactly how you analysed them, in enough detail that someone could repeat the analysis and judge whether it suits the question."
aliases:
  - "Methods section"
  - "Statistical methods section"
  - "Describing the analysis"
  - "Methods writing"
status: seedling
---

# Writing Methods Sections

A **methods section** explains what data you collected and exactly how you analysed them, in enough detail that someone could repeat the analysis and judge whether it suits the question ([[Reproducibility]], [[Study Design]]). A useful order is study area and design, data collection, response and [[Predictor Variable|predictors]], [[Data Exploration|data exploration]], the model, model checking, [[Model Selection|model selection]] or inference, and software. State the model in words and as an equation: response distribution, link, predictors, [[Random Effect|random effects]] and [[Correlation Structure|correlation structure]] ([[Generalized Linear Model]], [[Mixed Effects Model]]).

Justify choices from the question and the data exploration; Zuur et al. (2010) say to report every exploration step and justify any [[Outlier|outlier]] removal or [[Transformation|transformation]] ([[Data Exploration Protocol]]). Say how you checked the model, with [[plot() Diagnostics for lm|residual plots]], dispersion, autocorrelation and [[MCMC Convergence|convergence diagnostics]] ([[Model Validation]]). Name software and versions, such as R, lme4, mgcv, brms and Stan, with citations. For Bayesian models give the priors, chains, iterations, warmup, and R-hat and ESS thresholds; for model selection give the candidate set and why, the criterion ([[AICc]], LOO) and how ties were handled ([[Candidate Model Set]]).

This is from the November 24 writing-results session ([[Course Website]], [[Zuur et al. 2010]], [[Harrison et al. 2018]], [[Final Project]], [[What to Report for a Model]]). Methods do not just list the R functions; they explain the model and why it fits the question, and the functions are a detail.

## Connections
- **Builds on:** [[Reproducibility]], [[Study Design]], [[Predictor Variable]], [[Data Exploration]], [[Model Selection]], [[Random Effect]], [[Correlation Structure]], [[Outlier]], [[Transformation]], [[plot() Diagnostics for lm]], [[MCMC Convergence]], [[AICc]]
- **Leads to:** [[Writing Results Sections]], [[What to Report for a Model]]
- **Part of:** [[MOC 18 - Scientific Writing|MOC - Scientific Writing]], molecular note [[How to write up a modeling analysis]]

## Flashcards

Name four things a statistical methods section must state.
??
Model structure (distribution, link, predictors, random effects), how it was checked, how models were selected or inference made, software and versions.
++++
