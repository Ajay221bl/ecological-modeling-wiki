---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Multimodel inference"
  - "MMI"
  - "Inference from multiple models"
status: seedling
---

# Multi-model Inference

**In one line:** multi-model inference bases conclusions on the whole candidate set, weighting each model by its support, rather than on a single best model.

> [!info] Before this, it helps to know
> [[Akaike Weight]] (how models are weighted) · [[Model Selection Uncertainty]] (why it is needed)

## The everyday picture
Asking several experts and weighting their answers by their track records. When one expert is clearly the best you mostly follow them. When several are about equally reliable, you blend their answers.

## Start from zero
1. **Picking one model ignores the chance that another is best.**
2. **Multi-model inference keeps that uncertainty.**
3. **Tools:** model averaging of predictions or coefficients, summed weights per variable, confidence sets, evidence ratios.
4. **When one model dominates (w > 0.9),** single-model and multi-model results nearly coincide.
5. **When several share weight,** multi-model results are more honest and usually more cautious.
6. **Promoted by Burnham and Anderson** as the natural use of Akaike weights.

## In the course
[[Anderson and Burnham 2002]], [[Johnson and Omland 2004]], [[Hobbs and Hooten 2015 Ch9]].

## Common confusions
- **"Multi-model inference means fitting many models."** It means drawing conclusions from many models jointly.

## Explain it back
- When does multi-model inference make little difference?

*Pass test:* you can list its tools.

## Connections
- **Builds on:** [[Akaike Weight]], [[Model Selection Uncertainty]]
- **Leads to:** [[Model Averaging]], [[Relative Variable Importance]], [[Confidence Set of Models]], [[Bayesian Model Averaging]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What is multi-model inference?
??
Drawing conclusions from all candidate models, weighted by their support, rather than from one selected model.
++++
