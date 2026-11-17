---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "`predict()` is the R function that takes a fitted model and returns its predictions, for the original data or for new predictor values you supply."
aliases:
  - "predict"
  - "predict.lm"
  - "newdata"
status: seedling
---

# predict()

**`predict()`** is the R function that takes a fitted model and returns its predictions, either for the original data or for new predictor values you supply ([[lm()]]). `predict(m)` returns fitted values for the original data; `predict(m, newdata = nd)` predicts for the rows of the data frame `nd` ([[Data Frame]]). `nd` must contain every predictor in the model, with the same names and, for factors, the same levels. The standard recipe for a plot is to build a grid of the focal predictor with [[expand.grid()]], hold the other predictors at typical values, predict, and draw a line with a ribbon ([[Plotting Model Predictions with Ribbons]]).

For `lm`, uncertainty comes from `interval = "confidence"` for the mean response or `interval = "prediction"` for a new observation, or from `se.fit = TRUE`. In the code below, fuel economy is predicted at five weights with horsepower held at its mean, each with a confidence interval. For `glm`, `predict()` returns the link scale by default, and `type = "response"` gives the data scale. Intervals are made by predicting on the link scale with `se.fit = TRUE`, adding ±1.96 standard errors, then back-transforming; the last lines of the code do this for the probability that a 3,000 lb car has a manual gearbox ([[Predictions on Link vs Response Scale]]). For mixed models, `re.form = NA` gives population-level predictions with the random effects set to zero.

The common slip is to assume `predict()` on a GLM gives probabilities or counts; by default it gives the link scale. Its output for new data is the main way to present a fitted model ([[Predicting New Data]], [[augment()]], [[Course Website]]).

```r
m <- lm(mpg ~ wt + hp, data = mtcars)
nd <- expand.grid(wt = seq(1.5, 5.5, by = 1), hp = mean(mtcars$hp))
cbind(nd, round(predict(m, nd, interval = "confidence"), 1))
g <- glm(am ~ wt, family = binomial, data = mtcars); p <- predict(g, data.frame(wt = 3), se.fit = TRUE)
round(plogis(p$fit + c(-1.96, 0, 1.96) * p$se.fit), 3)        # lower, estimate, upper as probabilities
```

## Connections
- **Builds on:** [[lm()]], [[expand.grid()]]
- **Leads to:** [[Predicting New Data]], [[Plotting Model Predictions with Ribbons]], [[Predictions on Link vs Response Scale]], [[augment()]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What does the newdata argument of predict() need?
??
A data frame with every predictor in the model, using the same names and factor levels.
++++

What scale does predict() return for a glm by default?
??
The link scale. Use type = "response" for the response scale.
++++
