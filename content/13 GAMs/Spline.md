---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "A spline is a curve made of polynomial pieces joined smoothly at points called knots, so it can bend in one place without changing shape everywhere else."
aliases:
  - "Splines"
  - "Regression spline"
  - "Piecewise polynomial"
status: seedling
---

# Spline

A draughtsman's spline was a thin strip of wood held by weights; it bends smoothly through fixed points and takes the gentlest shape that passes them. A **spline** is a curve made of polynomial pieces joined smoothly at points called [[Knots]], so it can bend in one place without changing shape everywhere else ([[Polynomial|Polynomial Regression]] fits one global polynomial instead). Split the x range at knots, fit a cubic in each piece, and join the pieces so the curve and its first two derivatives match at each knot, leaving no visible corners.

It is written as a sum of [[Basis Function|basis functions]] times coefficients, so it can be fitted with regression. Unpenalised regression splines need the number of knots chosen by hand; [[Penalized Regression Spline|penalised splines]] use plenty of knots and a wiggliness penalty instead. mgcv offers thin plate (`"tp"`), cubic regression (`"cr"`), cyclic (`"cc"`), P-splines (`"ps"`) and B-splines (`"bs"`) ([[Thin Plate Regression Spline]], [[Cubic Regression Spline]], [[Cyclic Spline]]). In the code below a sine wave over 0 to 10 is fitted with one global cubic, R² = 0.23, and with a B-spline of 6 df, R² = 0.84.

Splines are covered in [[Zuur et al. 2009 Ch3]] (regression and smoothing splines) and [[Pedersen et al. 2019]]. Splines are not high-order polynomials; they are low-order polynomials stitched together.

```r
library(splines); set.seed(4); x <- sort(runif(100, 0, 10)); y <- sin(x) + rnorm(100, 0, 0.3)
round(c(cubic_poly_R2 = summary(lm(y ~ poly(x, 3)))$r.squared, spline_R2 = summary(lm(y ~ bs(x, df = 6)))$r.squared), 2)
```

## Connections
- **Builds on:** [[Polynomial|Polynomial Regression]], [[Knots]]
- **Leads to:** [[Basis Function]], [[Cubic Regression Spline]], [[Thin Plate Regression Spline]], [[Penalized Regression Spline]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]], molecular note [[Polynomial vs Spline]]

## Flashcards

What is a spline?
??
A curve of polynomial pieces joined smoothly at knots.
++++
