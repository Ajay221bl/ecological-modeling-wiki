---
type: atomic
tags:
  - writing
  - flashcards/eco/writing
aliases:
  - "Effect plots"
  - "Prediction plots"
  - "Figure captions"
  - "Figures in papers"
  - "Coefficient plots"
status: seedling
---

# Figures for Model Results

**In one line:** figures for model results show the fitted relationship or effect sizes with uncertainty on the response scale, usually over the raw data, with captions that stand on their own.

> [!info] Before this, it helps to know
> [[ggplot2 Grammar of Graphics]] · [[Confidence Interval]] · [[Prediction from a GAM]]

## Start from zero
1. **Prediction plot:** predicted response across a predictor, with a ribbon for uncertainty, data points underneath.
2. **Coefficient plot:** estimates and intervals for several predictors on one axis (standardized predictors make them comparable).
3. **Response scale,** not the link scale, unless you explain it.
4. **Captions** say what is plotted, the model, what the ribbon means, and n.
5. **One message per figure;** the text tells the reader what to see.
6. **Colour-blind safe palettes** and readable axis labels with units.

## In the course
Reproducible coding and figures unit ([[Course Website]]). [[Zuur et al. 2010]] (exploration figures).

## Common confusions
- **"A table of coefficients is enough."** Readers grasp a curve with a ribbon far faster than a table of logit coefficients.

## Explain it back
- What should a model-results caption include?

*Pass test:* you can design a results figure and caption.

## Connections
- **Builds on:** [[ggplot2 Grammar of Graphics]], [[Confidence Interval]]
- **Leads to:** [[Writing Results Sections]]
- **Part of:** [[MOC 18 - Scientific Writing|MOC - Scientific Writing]]

## Flashcards

What makes a good model-results figure?
??
Predictions with uncertainty on the response scale, over the data, with a self-contained caption.
++++
