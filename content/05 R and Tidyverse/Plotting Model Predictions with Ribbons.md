---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Plotting Model Predictions"
  - "Prediction plot"
  - "Effect plot"
status: seedling
---

# Plotting Model Predictions with Ribbons

**In one line:** a prediction plot shows what the fitted model expects across a predictor's range as a line, with a shaded ribbon for uncertainty, over the raw data.

> [!info] Before this, it helps to know
> [[Predicting New Data]] (getting fitted values) · [[expand.grid()]] (the grid of x values) · [[Confidence Interval]] (what the ribbon shows) · [[Geoms]] (line and ribbon)

## The everyday picture
A weather forecast chart: a line for the expected temperature, a shaded band for how far off it might be, and dots for what was actually measured. One glance shows the model, its doubt and the evidence.

## Start from zero
1. **Fit the model.**
2. **Build new data:** an even sequence of the focal predictor, other predictors fixed at typical values.
3. **Predict on the link scale with standard errors.** *Why the link scale:* intervals are symmetric there, and back-transforming afterwards keeps them inside legal bounds such as 0 to 1.
4. **Compute fit ± 1.96 × SE, then back-transform** with the inverse link.
5. **Plot:** raw points, `geom_ribbon()` for the band, `geom_line()` for the fit.
6. **Say in the caption what the band is** (95% confidence interval for the mean) and what the other predictors were held at.

## See it
![[Prediction ribbon.png|700]]
*What to look at:* the band is narrowest where data are dense and widens at the edges.

## In R
```r
library(ggplot2)
set.seed(4)
d <- data.frame(tree = runif(60, 0, 60)); d$birds <- rpois(60, exp(2.3 - 0.025 * d$tree))
m <- glm(birds ~ tree, family = poisson, data = d)
nd <- data.frame(tree = seq(min(d$tree), max(d$tree), length.out = 100))
pr <- predict(m, newdata = nd, type = "link", se.fit = TRUE)
nd$fit <- exp(pr$fit); nd$lo <- exp(pr$fit - 1.96 * pr$se.fit); nd$hi <- exp(pr$fit + 1.96 * pr$se.fit)
p <- ggplot(nd, aes(tree, fit)) +
  geom_ribbon(aes(ymin = lo, ymax = hi), alpha = 0.25) + geom_line() +
  geom_point(data = d, aes(tree, birds), alpha = 0.6) +
  labs(x = "Tree cover (%)", y = "Bird species")
range(nd$lo); range(nd$hi)       # all positive: the band respects the lower bound of counts
```

## In the course
Every lab ends with a figure of this kind. Homework 2 needs the band for a logistic curve ([[Course Website]]).

## Common confusions
- **"Compute fit ± 2 SE on the response scale."** That can give negative counts or probabilities above 1.
- **"The band shows where new observations will fall."** It shows uncertainty in the mean. New observations scatter more ([[Prediction Interval]]).

## Explain it back
- Why build the interval on the link scale?
- What does the ribbon not show?

*Pass test:* you can produce a fitted line with a 95% band from a GLM.

## Connections
- **Builds on:** [[Predicting New Data]], [[expand.grid()]], [[Confidence Interval]]
- **Leads to:** [[Predictions on Link vs Response Scale]], [[Prediction Interval]], [[Saving Figures]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]]

## Flashcards

What are the steps to plot GLM predictions with a confidence band?
??
Make new data, predict on the link scale with SEs, compute fit ± 1.96 SE, back-transform, then draw ribbon, line and raw points.
![[Prediction ribbon.png]]
++++

Why compute the interval on the link scale?
??
It is symmetric there, and back-transforming keeps it within the response's valid range.
++++
