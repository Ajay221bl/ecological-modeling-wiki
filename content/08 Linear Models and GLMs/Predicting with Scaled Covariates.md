---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Predicting with standardised predictors"
  - "Unscaling predictions"
  - "Back-scaling"
status: seedling
---

# Predicting with Scaled Covariates

**In one line:** predicting with scaled covariates means converting new predictor values to the model's standardised scale using the original mean and standard deviation before predicting, and labelling the plot in original units.

> [!info] Before this, it helps to know
> [[Standardizing]] (what was done before fitting) · [[Predicting New Data]] (the task) · [[predict()]] (the tool)

## The everyday picture
A thermostat calibrated in Celsius. If you think in Fahrenheit, you must convert your number before dialling it in, using the standard conversion, not one you make up on the day.

## Start from zero
1. **Before fitting, save the mean and SD** of each predictor you scale.
2. **Fit on the scaled predictor.**
3. **Make a grid in real units** (tree cover 0 to 60%).
4. **Convert the grid:** (value − saved mean) / saved SD.
5. **Predict using the converted column.**
6. **Plot against the real-unit column.**
7. **The trap:** calling `scale()` on the new grid standardises it by the grid's own mean and SD, giving wrong predictions without any error message.
8. **Why not just use `scale()` inside the formula:** it works in `lm` and `predict` handles it, but it is fragile across packages. Explicit columns are safer.

## In R
```r
set.seed(10); d <- data.frame(tree = runif(100, 0, 60)); d$rich <- rpois(100, exp(2.4 - 0.02 * d$tree))
mu <- mean(d$tree); s <- sd(d$tree); d$tree_z <- (d$tree - mu) / s
m <- glm(rich ~ tree_z, family = poisson, d)
nd <- data.frame(tree = c(0, 30, 60)); nd$tree_z <- (nd$tree - mu) / s          # the right way
nd$wrong_z <- as.numeric(scale(nd$tree))                                         # the trap
cbind(nd, right = predict(m, nd, type = "response"), wrong = predict(m, data.frame(tree_z = nd$wrong_z), type = "response"))
exp(2.4 - 0.02 * c(0, 30, 60))                                                   # truth
```

## In the course
A recurring step in the GLMM and Bayesian labs ([[Course Website]]).

## Common confusions
- **"Standardise the new data the same way" means calling `scale()` again.** It means using the same numbers.

## Explain it back
- Why does `scale(newdata$x)` give wrong predictions?

*Pass test:* you can predict from a model with standardised predictors and plot in original units.

## Connections
- **Builds on:** [[Standardizing]], [[Predicting New Data]]
- **Leads to:** [[Plotting Model Predictions with Ribbons]], [[Scaling Predictors]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

How should new predictor values be standardised for prediction?
??
With the mean and SD of the original fitting data, not of the new values.
++++
