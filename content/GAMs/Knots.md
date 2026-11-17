---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "Knot"
  - "Knot locations"
status: seedling
---

# Knots

**In one line:** knots are the x values where the pieces of a spline join, and their number and placement limit where and how much the curve can bend.

> [!info] Before this, it helps to know
> [[Spline]]

## Start from zero
1. **More knots, more potential flexibility.**
2. **mgcv's cubic regression splines put knots at quantiles of x** by default, so more knots where there is more data.
3. **Thin plate splines don't use knots in the usual sense;** they start from every data point and keep the best low-rank approximation.
4. **With penalised splines the exact knot number matters less:** choose enough (k) and let the penalty decide.
5. **Custom knots:** `knots = list(x = c(...))`, used for cyclic splines to set where the cycle starts and ends.

## In the course
[[Zuur et al. 2009 Ch3]].

## Common confusions
- **"More knots always means a wigglier fit."** In a penalised spline the penalty can keep it smooth.

## Explain it back
- Where does mgcv place knots for bs = "cr"?

*Pass test:* you can say what knots do.

## Connections
- **Builds on:** [[Spline]]
- **Leads to:** [[Basis Function]], [[Cubic Regression Spline]], [[Cyclic Spline]]
- **Part of:** [[MOC - GAMs]]

## Flashcards

What are knots in a spline?
??
The x values where the polynomial pieces join.
++++
