---
type: atomic
tags:
  - writing
  - flashcards/eco/writing
description: "Figures for model results show the fitted relationship or effect sizes with uncertainty on the response scale, usually over the raw data, with captions that stand on their own."
aliases:
  - "Effect plots"
  - "Prediction plots"
  - "Figure captions"
  - "Figures in papers"
  - "Coefficient plots"
status: seedling
---

# Figures for Model Results

**Figures for model results** show the fitted relationship or effect sizes with uncertainty on the [[Response Scale|response scale]], usually over the raw data, with captions that stand on their own ([[ggplot2 Grammar of Graphics]], [[Confidence Interval]]). A [[Plotting Model Predictions with Ribbons|prediction plot]] shows the predicted response across a [[Predictor Variable|predictor]], with a ribbon for uncertainty and the data points underneath ([[Confidence Envelopes]], [[Prediction from a GAM]]). A [[Coefficient Plot|coefficient plot]] shows estimates and intervals for several predictors on one axis, and standardised predictors make them comparable ([[Standardizing|Standardization]]).

Use the response scale, not the [[Link Scale|link scale]], unless you explain it ([[Predictions on Link vs Response Scale]]). Captions say what is plotted, which model, what the ribbon means, and n. Give one message per figure, and let the text tell the reader what to see ([[Writing Results Sections]]). Use colour-blind safe palettes and readable axis labels with units.

This belongs to the reproducible coding and figures unit ([[Course Website]]), and [[Zuur et al. 2010]] show exploration figures. A table of coefficients is not enough: readers grasp a curve with a ribbon far faster than a table of [[Logit Link|logit]] coefficients.

## Connections
- **Builds on:** [[ggplot2 Grammar of Graphics]], [[Confidence Interval]], [[Response Scale]], [[Plotting Model Predictions with Ribbons]], [[Predictor Variable]], [[Coefficient Plot]], [[Link Scale]], [[Logit Link]]
- **Leads to:** [[Writing Results Sections]]
- **Part of:** [[MOC 18 - Scientific Writing|MOC - Scientific Writing]]

## Flashcards

What makes a good model-results figure?
??
Predictions with uncertainty on the response scale, over the data, with a self-contained caption.
++++
