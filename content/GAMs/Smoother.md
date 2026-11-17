---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "Smooth"
  - "Smooth function"
  - "Smooth term"
  - "Scatterplot smoother"
  - "Smoothers"
status: seedling
---

# Smoother

**In one line:** a smoother is a flexible curve, estimated from the data, that shows how the response changes with a predictor without assuming a straight line or a chosen formula.

> [!info] Before this, it helps to know
> [[Functions in Maths]] · [[Scatterplot]]

## Start from zero
1. **The idea:** let the data draw the shape, but keep it smooth.
2. **Kinds:** moving averages, LOESS (local regression), regression splines, penalised splines.
3. **In a GAM each smooth term f(x) is a smoother** fitted alongside the others.
4. **`geom_smooth()`** in ggplot2 draws a LOESS (small data) or a GAM smoother (large data) for exploration.
5. **Smoothers are centred in a GAM:** each f averages to zero over the data, and the intercept carries the mean.

## In R
```r
set.seed(2); x <- sort(runif(100, 0, 10)); y <- sin(x) + rnorm(100, 0, 0.3); lo <- loess(y ~ x)
round(head(cbind(x, smoothed = predict(lo)), 4), 2)
```

## In the course
[[Zuur et al. 2009 Ch3]]. GAM lectures ([[Course Website]]).

## Common confusions
- **"A smoother is just a polynomial."** Smoothers bend locally; polynomials bend globally.

## Explain it back
- Why are GAM smooths centred?

*Pass test:* you can name three kinds of smoother.

## Connections
- **Builds on:** [[Functions in Maths]], [[Scatterplot]]
- **Leads to:** [[LOESS Smoother|LOESS]], [[Spline]], [[Generalized Additive Model]]
- **Part of:** [[MOC - GAMs]]

## Flashcards

What is a smoother?
??
A flexible curve estimated from data that follows the trend without assuming a fixed formula.
++++
