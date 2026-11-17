---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "Splines"
  - "Regression spline"
  - "Piecewise polynomial"
status: seedling
---

# Spline

**In one line:** a spline is a curve made of polynomial pieces joined smoothly at points called knots, so it can bend in one place without changing shape everywhere else.

> [!info] Before this, it helps to know
> [[Polynomial|Polynomial Regression]] (one global polynomial) · [[Knots]]

## The everyday picture
A draughtsman's spline was a thin strip of wood held by weights. It bends smoothly through fixed points and takes the gentlest shape that passes them.

## Start from zero
1. **Split the x range at knots.** Fit a cubic in each piece.
2. **Join the pieces** so the curve and its first two derivatives match at each knot: no visible corners.
3. **Written as a sum of basis functions** times coefficients, so it can be fitted with regression.
4. **Unpenalised regression splines** need the number of knots chosen by hand.
5. **Penalised splines** use plenty of knots and a wiggliness penalty instead.
6. **Kinds in mgcv:** thin plate (`"tp"`), cubic regression (`"cr"`), cyclic (`"cc"`), P-splines (`"ps"`), B-splines (`"bs"`).

## In R
```r
library(splines); set.seed(4); x <- sort(runif(100, 0, 10)); y <- sin(x) + rnorm(100, 0, 0.3)
round(c(cubic_poly_R2 = summary(lm(y ~ poly(x, 3)))$r.squared, spline_R2 = summary(lm(y ~ bs(x, df = 6)))$r.squared), 2)
```

## In the course
[[Zuur et al. 2009 Ch3]] (regression splines, smoothing splines). [[Pedersen et al. 2019]].

## Common confusions
- **"Splines are high-order polynomials."** They are low-order polynomials stitched together.

## Explain it back
- What must match at a knot?

*Pass test:* you can explain how a spline bends locally.

## Connections
- **Builds on:** [[Polynomial|Polynomial Regression]], [[Knots]]
- **Leads to:** [[Basis Function]], [[Cubic Regression Spline]], [[Thin Plate Regression Spline]], [[Penalized Regression Spline]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]], molecular note [[Polynomial vs Spline]]

## Flashcards

What is a spline?
??
A curve of polynomial pieces joined smoothly at knots.
++++
