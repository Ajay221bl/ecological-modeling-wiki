---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "A smoother is a flexible curve, estimated from the data, that shows how the response changes with a predictor without assuming a straight line or a chosen formula."
aliases:
  - "Smooth"
  - "Smooth function"
  - "Smooth term"
  - "Scatterplot smoother"
  - "Smoothers"
status: seedling
---

# Smoother

A **smoother** is a flexible curve, estimated from the data, that shows how the response changes with a [[Predictor Variable|predictor]] without assuming a [[Equation of a Line|straight line]] or a chosen formula ([[Functions in Maths]], [[Scatterplot]]). The idea is to let the data draw the shape but keep it smooth. Kinds include moving averages, LOESS (local regression), regression splines and penalised splines ([[Spline]], [[Penalized Regression Spline]]).

In a [[Generalized Additive Model]] each smooth term f(x) is a smoother fitted alongside the others. Smoothers in a GAM are centred: each f averages to zero over the data, and the intercept carries the mean. For exploration, ggplot2's `geom_smooth()` draws a LOESS for small data and a GAM smoother for large data. In the code below a LOESS with the default span of 0.75 is fitted to noisy sin(x) over 0 to 10; the span is too wide for a wave this fast, so near x = 0.1 the smoothed values are about 0.80 while the true sin(x) is under 0.25. How local a smoother is, its span or its smoothing parameter, decides how closely it can follow the shape ([[Smoothing Parameter]]).

Smoothers are covered in [[Zuur et al. 2009 Ch3]] and the GAM lectures ([[Course Website]]). A smoother is not just a polynomial: smoothers bend locally, polynomials globally ([[Polynomial|Polynomial Regression]]).

```r
set.seed(2); x <- sort(runif(100, 0, 10)); y <- sin(x) + rnorm(100, 0, 0.3); lo <- loess(y ~ x)
round(head(cbind(x, smoothed = predict(lo)), 4), 2)
```

## Connections
- **Builds on:** [[Functions in Maths]], [[Scatterplot]], [[Predictor Variable]], [[Equation of a Line]]
- **Leads to:** [[LOESS Smoother|LOESS]], [[Spline]], [[Generalized Additive Model]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What is a smoother?
??
A flexible curve estimated from data that follows the trend without assuming a fixed formula.
++++
