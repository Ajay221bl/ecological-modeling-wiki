---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "predict"
  - "predict.lm"
  - "newdata"
status: seedling
---

# predict()

**In one line:** `predict()` is the R function that takes a fitted model and returns its predictions, for the original data or for new predictor values you supply.

> [!info] Before this, it helps to know
> [[lm()]] (the model object) · [[Data Frame]] (the `newdata` argument) · [[expand.grid()]] (to build prediction grids)

## Start from zero
1. **`predict(m)`** returns fitted values for the original data.
2. **`predict(m, newdata = nd)`** predicts for the rows of `nd`.
3. **`nd` must contain every predictor,** with the same names and, for factors, the same levels.
4. **Uncertainty for `lm`:** `interval = "confidence"` (for the mean) or `"prediction"` (for a new observation). Or `se.fit = TRUE`.
5. **For `glm`:** `type = "link"` (default) or `type = "response"`. Get intervals by predicting on the link scale with `se.fit = TRUE`, adding ± 1.96 SE, then back-transforming.
6. **For mixed models:** `re.form = NA` gives population-level predictions with random effects set to zero.
7. **Standard recipe for a plot:** build a grid of the focal predictor, hold the others at typical values, predict, plot line and ribbon.

## In R
```r
m <- lm(mpg ~ wt + hp, data = mtcars)
nd <- expand.grid(wt = seq(1.5, 5.5, by = 1), hp = mean(mtcars$hp))
cbind(nd, round(predict(m, nd, interval = "confidence"), 1))
g <- glm(am ~ wt, family = binomial, data = mtcars); p <- predict(g, data.frame(wt = 3), se.fit = TRUE)
round(plogis(p$fit + c(-1.96, 0, 1.96) * p$se.fit), 3)        # lower, estimate, upper as probabilities
```

## In the course
Used in every lab from linear regression onward ([[Course Website]]).

## Common confusions
- **"predict on a glm gives probabilities."** By default it returns the link scale.

## Explain it back
- What must `newdata` contain?

*Pass test:* you can predict over a grid with intervals.

## Connections
- **Builds on:** [[lm()]], [[expand.grid()]]
- **Leads to:** [[Predicting New Data]], [[Plotting Model Predictions with Ribbons]], [[Predictions on Link vs Response Scale]], [[augment()]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

What does the newdata argument of predict() need?
??
A data frame with every predictor in the model, using the same names and factor levels.
++++

What scale does predict() return for a glm by default?
??
The link scale. Use type = "response" for the response scale.
++++
