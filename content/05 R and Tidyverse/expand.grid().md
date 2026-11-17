---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Prediction grid"
  - "crossing()"
status: seedling
---

# expand.grid()

**In one line:** `expand.grid()` builds a table with one row for every combination of the values you give it.

> [!info] Before this, it helps to know
> [[Data Frame]] (what it returns) · [[seq()]] (to make the values)

## The everyday picture
A restaurant menu with 3 starters and 4 mains. Listing every possible two-course meal gives 3 × 4 = 12 lines. `expand.grid()` writes that list.

## Start from zero
1. **Give it named vectors.**
2. **It returns every combination,** one per row.
3. **Main use: new data for predictions.** *Why:* to draw a fitted curve you need the model's prediction at a neat sequence of x values, for each group, with other predictors held at chosen values.
4. **Column names must match the model's predictors exactly.**
5. **Second use: all combinations of model terms or treatments.**

## In R
```r
nd <- expand.grid(tree = seq(0, 60, by = 20), burn = c("no", "yes"))
nd; nrow(nd)                               # 4 x 2 = 8 rows
set.seed(1)
d <- data.frame(tree = runif(40, 0, 60), burn = rep(c("no", "yes"), 20))
d$birds <- rpois(40, exp(2.2 - 0.02 * d$tree + 0.3 * (d$burn == "yes")))
m <- glm(birds ~ tree + burn, family = poisson, data = d)
nd$fit <- predict(m, newdata = nd, type = "response"); head(nd, 3)
```

## In the course
The labs build prediction grids this way before plotting ([[Predicting New Data]]; [[Course Website]]).

## Common confusions
- **"Use the original data for prediction lines."** Raw x values are uneven and tangled across groups. A grid gives clean lines.

## Explain it back
- How many rows from 50 x-values, 2 treatments and 3 sites?

*Pass test:* you can build a prediction grid and attach predictions.

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
