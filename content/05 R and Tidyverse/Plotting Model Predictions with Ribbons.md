---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A prediction plot shows what the fitted model expects across a predictor's range as a line, with a shaded ribbon for uncertainty, over the raw data."
aliases:
  - "Plotting Model Predictions"
  - "Prediction plot"
  - "Effect plot"
status: seedling
---

# Plotting Model Predictions with Ribbons

A weather forecast chart shows a line for the expected temperature, a shaded band for how far off it might be, and dots for what was actually measured: one glance shows the model, its [[Uncertainty|doubt]] and the evidence. A **prediction plot** does this for a fitted model: a line for what the model expects across a [[Predictor Variable|predictor]]'s range, a shaded ribbon for uncertainty, and the raw data underneath. The recipe: fit the model; build new data with an even sequence of the focal predictor and other predictors fixed at typical values ([[expand.grid()]], [[Predicting New Data]]); predict on the [[Link Scale|link scale]] with standard errors; compute fit ± 1.96 × SE and [[Back-transformation|back-transform]] with the [[Inverse Link Function|inverse link]]; and plot raw points, `geom_ribbon()` for the band and `geom_line()` for the fit ([[Geoms]]).

Predicting on the link scale matters because intervals are symmetric there, and back-transforming afterwards keeps them inside legal bounds such as 0 to 1 or above zero ([[Predictions on Link vs Response Scale]]). The code below does this for a Poisson model of bird counts against tree cover and confirms that the lower edge of the band stays positive. As the figure shows, the band is narrowest where data are dense and widens at the edges. Every lab ends with a figure of this kind, and Homework 2 needs the band for a logistic curve ([[Course Website]]).

Say in the caption what the band is, usually a 95% [[Confidence Interval]] for the mean, and what the other predictors were held at. Two mistakes are common. Computing fit ± 2 SE on the [[Response Scale|response scale]] can give negative counts or probabilities above 1. And the band does not show where new observations will fall; it shows uncertainty in the mean, while new observations scatter more ([[Prediction Interval]]). Save the finished figure from code ([[ggsave()|Saving Figures]]).

![[Prediction ribbon.png|700]]
*What to look at:* the band is narrowest where data are dense and widens at the edges.

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

## Connections
- **Builds on:** [[Predicting New Data]], [[expand.grid()]], [[Confidence Interval]], [[Uncertainty]], [[Predictor Variable]]
- **Leads to:** [[Predictions on Link vs Response Scale]], [[Prediction Interval]], [[ggsave()|Saving Figures]], [[Link Scale]], [[Back-transformation]], [[Inverse Link Function]], [[Response Scale]]
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
