---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Predicting with scaled covariates means converting new predictor values to the model's standardised scale using the original mean and standard deviation before predicting, and labelling the plot in original units."
aliases:
  - "Predicting with standardised predictors"
  - "Unscaling predictions"
  - "Back-scaling"
status: seedling
---

# Predicting with Scaled Covariates

A thermostat calibrated in Celsius needs your Fahrenheit number converted before you dial it in, using the standard conversion, not one you make up on the day. **Predicting with scaled covariates** means the same for a model fitted on standardised predictors: convert new predictor values to the model's scale using the *original* mean and standard deviation, predict, and label the plot in original units ([[Standardizing]], [[Predicting New Data]]). The steps are: before fitting, save the mean and SD of each predictor you scale; fit on the scaled predictor; make a grid in real units, such as tree cover 0 to 60%; convert the grid with (value − saved mean) / saved SD; predict with the converted column ([[predict()]]); and plot against the real-unit column ([[Plotting Model Predictions with Ribbons]]).

The trap is calling `scale()` on the new grid. That standardises the grid by its own mean and SD, so the converted values are wrong, and the predictions are wrong with no error message. In the code below, a Poisson model is fitted on standardised tree cover. Converting the grid 0, 30, 60 with the saved numbers reproduces the true expected counts; calling `scale()` on the grid gives different, wrong predictions.

Putting `scale()` inside the model formula works in `lm()`, where `predict()` handles it, but it is fragile across packages, so explicit columns are safer ([[Scaling Predictors]]). This step recurs in the GLMM and Bayesian labs ([[Course Website]]). "Standardise the new data the same way" means using the same numbers, not calling `scale()` again.

```r
set.seed(10); d <- data.frame(tree = runif(100, 0, 60)); d$rich <- rpois(100, exp(2.4 - 0.02 * d$tree))
mu <- mean(d$tree); s <- sd(d$tree); d$tree_z <- (d$tree - mu) / s
m <- glm(rich ~ tree_z, family = poisson, d)
nd <- data.frame(tree = c(0, 30, 60)); nd$tree_z <- (nd$tree - mu) / s          # the right way
nd$wrong_z <- as.numeric(scale(nd$tree))                                         # the trap
cbind(nd, right = predict(m, nd, type = "response"), wrong = predict(m, data.frame(tree_z = nd$wrong_z), type = "response"))
exp(2.4 - 0.02 * c(0, 30, 60))                                                   # truth
```

## Connections
- **Builds on:** [[Standardizing]], [[Predicting New Data]]
- **Leads to:** [[Plotting Model Predictions with Ribbons]], [[Scaling Predictors]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

How should new predictor values be standardised for prediction?
??
With the mean and SD of the original fitting data, not of the new values.
++++
