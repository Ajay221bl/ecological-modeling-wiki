---
type: atomic
tags:
  - writing
  - flashcards/eco/writing
aliases:
  - "What to Report in a Paper (Zuur)"
  - "Model reporting checklist"
  - "Reporting a regression model"
  - "Reporting checklist"
status: seedling
---

# What to Report for a Model

**In one line:** what to report for a model is the checklist of details (data exploration, model structure, validation, estimates with uncertainty, selection and software) that lets a reader judge and repeat your analysis.

> [!info] Before this, it helps to know
> [[Writing Methods Sections]] · [[Writing Results Sections]] · [[Model Validation]]

## Start from zero
1. **Data exploration:** outliers, collinearity (VIF), zeros, relationships; every step and any removed outlier justified (Zuur et al. 2010).
2. **Model:** distribution, link, predictors (standardized?), interactions, random effects and their levels, correlation or variance structures.
3. **Validation:** residual checks, dispersion, autocorrelation, influential points.
4. **Estimates:** coefficients with SE or intervals, variance components, R² (marginal and conditional for mixed models).
5. **Selection:** the candidate set, criterion values, weights; Harrison et al. (2018) suggest reporting the global model and summed weights alongside model-averaged effects.
6. **Bayesian extras:** priors, sampler settings, R-hat, ESS, posterior predictive checks.
7. **Code and data:** where to find them.

## In the course
[[Zuur et al. 2010]]. [[Harrison et al. 2018]]. [[Zuur et al. 2009]] (reporting in case studies). Writing results, Nov 24 ([[Course Website]]).

## Common confusions
- **"Reviewers only want the final model."** They need enough to judge how you got there.

## Explain it back
- What should be reported about removed outliers?

*Pass test:* you can check a draft against the reporting list.

## Connections
- **Builds on:** [[Writing Methods Sections]], [[Writing Results Sections]], [[Model Validation]]
- **Leads to:** [[Data Exploration Protocol]], [[Model Ranking Tables]]
- **Part of:** [[MOC - Scientific Writing]], molecular note [[How to write up a modeling analysis]]

## Flashcards

Per Zuur et al. 2010, what must be said about outliers?
??
Every exploration step is reported and any removed outlier is justified and mentioned.
++++

For a mixed model, which R² values should be reported?
??
Marginal and conditional R².
++++
