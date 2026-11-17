---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "Knots are the x values where the pieces of a spline join, and their number and placement limit where and how much the curve can bend."
aliases:
  - "Knot"
  - "Knot locations"
status: seedling
---

# Knots

**Knots** are the x values where the pieces of a [[Spline]] join, and their number and placement limit where and how much the curve can bend. More knots give more potential flexibility. mgcv's cubic regression splines put knots at quantiles of x by default, so there are more knots where there is more data ([[Cubic Regression Spline]]).

Thin plate splines don't use knots in the usual sense: they start from every data point and keep the best low-rank approximation ([[Thin Plate Regression Spline]]). With [[Penalized Regression Spline|penalised splines]] the exact number of knots matters less, so choose enough (k) and let the penalty decide ([[Basis Dimension and gam.check()]]). Custom knots, `knots = list(x = c(...))`, are mainly used for cyclic splines to set where the cycle starts and ends ([[Cyclic Spline]]).

Knots are covered in [[Zuur et al. 2009 Ch3]]. More knots do not always mean a wigglier fit: in a penalised spline the penalty can keep it smooth ([[Wiggliness Penalty]]).

## Connections
- **Builds on:** [[Spline]]
- **Leads to:** [[Basis Function]], [[Cubic Regression Spline]], [[Cyclic Spline]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What are knots in a spline?
??
The x values where the polynomial pieces join.
++++
