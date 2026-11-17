---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`expand.grid()` builds a table with one row for every combination of the values you give it."
aliases:
  - "Prediction grid"
  - "crossing()"
status: seedling
---

# expand.grid()

A restaurant menu with 3 starters and 4 mains offers 3 × 4 = 12 possible two-course meals, and listing them all is tedious by hand. **`expand.grid()`** writes that list: given named vectors, it returns a [[Data Frame]] with one row for every combination of their values. In the code below, four tree-cover values crossed with two burn states give 4 × 2 = 8 rows. The values themselves are usually made with [[seq()]].

Its main use in this course is making *new data* for predictions. To draw a fitted curve you need the model's prediction at a neat, evenly spaced sequence of x values, for each group, with other predictors held at chosen values. Raw data do not provide that: their x values are uneven and tangled across groups, so lines drawn through them zigzag. A grid gives clean lines. In the example, a Poisson GLM of birds on tree cover and burning is fitted, and `predict(m, newdata = nd, type = "response")` gives the expected count at every grid row ([[predict()]], [[Predicting New Data]]), ready for plotting with confidence ribbons ([[Plotting Model Predictions with Ribbons]]).

The grid's column names must match the model's predictor names exactly, or `predict()` will not find them. Keep the grid within the range of the observed data, because predictions beyond it are extrapolation. A second use is listing every combination of treatments or model terms in a design.

```r
nd <- expand.grid(tree = seq(0, 60, by = 20), burn = c("no", "yes"))
nd; nrow(nd)                               # 4 x 2 = 8 rows
set.seed(1)
d <- data.frame(tree = runif(40, 0, 60), burn = rep(c("no", "yes"), 20))
d$birds <- rpois(40, exp(2.2 - 0.02 * d$tree + 0.3 * (d$burn == "yes")))
m <- glm(birds ~ tree + burn, family = poisson, data = d)
nd$fit <- predict(m, newdata = nd, type = "response"); head(nd, 3)
```

## Connections
- **Builds on:** [[Data Frame]], [[seq()]]
- **Leads to:** [[predict()]], [[Predicting New Data]], [[Plotting Model Predictions with Ribbons]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What does expand.grid() return?
??
A data frame with one row for every combination of the supplied values.
++++

What is it mainly used for in modeling?
??
Building a new-data grid on which to compute model predictions for plotting.
++++
