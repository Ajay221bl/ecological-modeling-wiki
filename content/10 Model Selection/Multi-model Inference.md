---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "Multi-model inference bases conclusions on the whole candidate set, weighting each model by its support, rather than on a single best model."
aliases:
  - "Multimodel inference"
  - "MMI"
  - "Inference from multiple models"
status: seedling
---

# Multi-model Inference

Asking several experts and weighting their answers by their track records means mostly following one when they are clearly the best, and blending answers when several are about equally reliable. **Multi-model inference** bases conclusions on the whole candidate set, weighting each model by its support, rather than on a single best model ([[Akaike Weight]]). Picking one model ignores the chance that another is best; multi-model inference keeps that uncertainty ([[Model Selection Uncertainty]]).

Its tools are [[Model Averaging]] of predictions or coefficients, summed weights per variable ([[Relative Variable Importance]]), a [[Confidence Set of Models]] and [[Evidence Ratio|evidence ratios]]. When one model dominates, with w above 0.9, single-model and multi-model results nearly coincide; when several share the weight, multi-model results are more honest and usually more cautious.

Burnham and Anderson promote it as the natural use of Akaike weights ([[Anderson and Burnham 2002]], [[Johnson and Omland 2004]], [[Hobbs and Hooten 2015 Ch9]]); the Bayesian counterpart is [[Bayesian Model Averaging]]. Multi-model inference does not mean fitting many models; it means drawing conclusions from many models jointly.

## Connections
- **Builds on:** [[Akaike Weight]], [[Model Selection Uncertainty]], [[Evidence Ratio]]
- **Leads to:** [[Model Averaging]], [[Relative Variable Importance]], [[Confidence Set of Models]], [[Bayesian Model Averaging]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What is multi-model inference?
??
Drawing conclusions from all candidate models, weighted by their support, rather than from one selected model.
++++
