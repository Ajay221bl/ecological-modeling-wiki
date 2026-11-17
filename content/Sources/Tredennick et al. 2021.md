---
type: source
tags:
  - source
  - reading
aliases:
  - "Tredennick 2021"
  - "Practical guide to selecting models"
status: seedling
---

# Tredennick et al. 2021

> [!summary] In plain words
> A best model is only best for some purpose. The paper sorts modeling goals into exploration, inference and prediction, explains which model selection tools suit each, and warns that mixing goals is the most common serious mistake.

**Citation:** Tredennick, A. T., G. Hooker, S. P. Ellner, and P. B. Adler. 2021. A practical guide to selecting models for exploration, inference, and prediction in ecology. *Ecology* 102(6): e03336. https://doi.org/10.1002/ecy.3336
**Syllabus week:** Tue Aug 18, "What is 'modeling?' and WHY model?"

> [!warning] Verify
> Not in my readings folder. These notes come from the open-access version on PubMed Central (PMC8187274), read on 2026-10-22. The page numbers aren't available, so I cite sections.

## What it's about
It uses one dataset (alpine butterfly *Parnassius smintheus* growth rates in 11 meadows from 1995 to 2015, with about 96 weather covariates) and analyses it three times, once for each goal. That shows how the "right" model and the right selection tool change with the goal.

## Key ideas I use
- Three goals: exploration, inference, prediction (Fig. 1, Venn diagram) → [[Exploration, Inference and Prediction]]
- Table 2: purpose, priority, role of a priori hypotheses, how much model selection, tools and pitfalls for each goal → [[Exploration, Inference and Prediction]]
- Inference concerns β̂, and prediction concerns ŷ → [[Exploration, Inference and Prediction]]
- Exploratory screening produces false positives, so correct for multiple comparisons and call results hypotheses → [[Data Dredging]]
- Likelihood ratio tests for a few nested a priori models (inference) → [[Likelihood Ratio Test]], [[Nested Models]]
- AIC approximates out-of-sample prediction, so be cautious using it for inference; arbitrary ΔAIC cutoffs are poorly justified → [[AIC]], [[Delta AIC]]
- Cross-validation and out-of-sample checks are required for prediction → [[Leave-one-out Cross-validation]]
- Regularization (ridge, LASSO) trades bias for variance → [[Parsimony]], [[Bias and Precision]]
- The worked example used a mixed model with meadow as a random intercept → [[Random Intercept]]

## Notes that rely on it
- [[Exploration, Inference and Prediction]], [[Parsimony]], [[Correlation]], [[Why model at all]]

## Connections
- **Part of:** [[MOC 21 - Course Readings|MOC - Course Readings]]
- **Previous:** [[Powell and Gale 2015 Ch2]] · **Next:** [[Zuur et al. 2010]]
