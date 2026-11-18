---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "Brms's conditional_effects() draws a fitted model's predicted response against one predictor with a credible band, holding the others at their means, and its re_formula argument decides whether random effects are included."
aliases:
  - "conditional_effects"
  - "brms conditional_effects"
  - "marginal_effects() (brms)"
  - "re_formula"
  - "Effects plot in brms"
status: seedling
---

# conditional_effects()

Once a brms model has fitted, you usually want the picture: how does the response change with this predictor? **`conditional_effects(fit)`** makes that picture for you. For each predictor it builds a grid of values, holds the other numeric predictors at their means and factors at their reference level, computes the predicted response for every posterior draw, and plots the median with a 95% credible band ([[Marginal Effects Plot]], [[Credible Interval]]). `effects = "flipper_s:sex"` shows an interaction as one line per level, and `plot(ce, points = TRUE)` adds the raw data.

The argument that matters for hierarchical models is `re_formula`. By default it is `NA`, which ignores the random effects and shows the population-level line for an "average" group. Setting `re_formula = NULL` includes the random effects, so the band also carries the group-to-group variation, which is wider and honest about predicting a new group ([[Conditional vs Marginal Predictions]], [[Random Intercept]]). To show one line per group, add the grouping factor to `conditions` or use `effects = "x:group"` with `re_formula = NULL`. Homework 6 asks for exactly this: marginal effects plots "that include any hierarchical levels".

The default draws the expected value (`method = "posterior_epred"`), the band for the mean; `method = "posterior_predict"` gives the wider band where individual new observations would fall ([[Posterior Predictive Distribution]], [[Prediction vs Confidence Interval]]). It returns ggplot objects, so you can restyle them or combine several with cowplot ([[Multi-panel Figures]]).

```r
# norun (needs a fitted brms model)
library(brms)
ce <- conditional_effects(fit, effects = "flipper_s")                       # population-level line
ce_g <- conditional_effects(fit, effects = "flipper_s:species", re_formula = NULL)  # one line per species, random effects in
plot(ce_g, points = TRUE)[[1]] + ggplot2::theme_bw()
```

## Connections
- **Builds on:** [[brms]], [[Marginal Effects Plot]], [[Credible Interval]]
- **Leads to:** [[Conditional vs Marginal Predictions]], [[Posterior Predictive Distribution]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[Homework 6 - Penguin Body Mass in brms]]

## Flashcards

What does conditional_effects() hold the other predictors at?
??
Numeric predictors at their means and factors at their reference level.
++++

What does re_formula = NA do?
??
Ignores random effects and shows the population-level prediction.
++++

What does re_formula = NULL do?
??
Includes all random effects, so the band also carries group-to-group variation.
++++

Which method gives a band for new individual observations?
??
method = "posterior_predict".
++++
