---
type: atomic
tags:
  - writing
  - flashcards/eco/writing
aliases:
  - "Methods section"
  - "Statistical methods section"
  - "Describing the analysis"
  - "Methods writing"
status: seedling
---

# Writing Methods Sections

**In one line:** a methods section explains what data you collected and exactly how you analysed them, in enough detail that someone could repeat the analysis and judge whether it suits the question.

> [!info] Before this, it helps to know
> [[Reproducibility]] · [[Study Design]]

## Start from zero
1. **Order:** study area and design, data collection, response and predictors, data exploration, model, model checking, model selection or inference, software.
2. **State the model in words and as an equation:** response distribution, link, predictors, random effects, correlation structure.
3. **Justify choices** from the question and data exploration (Zuur et al. 2010: report every exploration step, justify outlier removal and transformations).
4. **Say how you checked the model:** residual plots, dispersion, autocorrelation, convergence diagnostics.
5. **Name software and versions:** R, lme4, mgcv, brms, Stan, with citations.
6. **For Bayesian models:** priors, chains, iterations, warmup, R-hat and ESS thresholds.
7. **For model selection:** the candidate set and why, criterion (AICc, LOO), and how ties were handled.

## In the course
Writing results, Nov 24 ([[Course Website]]). [[Zuur et al. 2010]]. [[Harrison et al. 2018]]. [[Final Project]].

## Common confusions
- **"Methods just list the R functions."** They explain the model and why it fits the question; functions are a detail.

## Explain it back
- What must the methods say about a Bayesian model?

*Pass test:* you can write a reproducible statistical methods paragraph.

## Connections
- **Builds on:** [[Reproducibility]], [[Study Design]]
- **Leads to:** [[Writing Results Sections]], [[What to Report for a Model]]
- **Part of:** [[MOC - Scientific Writing]], molecular note [[How to write up a modeling analysis]]

## Flashcards

Name four things a statistical methods section must state.
??
Model structure (distribution, link, predictors, random effects), how it was checked, how models were selected or inference made, software and versions.
++++
