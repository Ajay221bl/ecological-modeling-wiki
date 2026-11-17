---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "Basis functions"
  - "Basis"
  - "Basis expansion"
  - "Model matrix of a smooth"
status: seedling
---

# Basis Function

**In one line:** basis functions are a set of simple fixed curves that, each multiplied by a coefficient and added together, can build a wide range of smooth shapes.

> [!info] Before this, it helps to know
> [[Spline]] · [[Linear Regression|Linear Model]] (coefficients times columns)

## The everyday picture
Lego bricks for curves. Each brick is a simple bump. Stretch some, shrink others, add them up, and you can build almost any smooth shape.

## Start from zero
1. **f(x) = Σⱼ βⱼ bⱼ(x).** The bⱼ are fixed; the βⱼ are estimated.
2. **Because f is linear in the β's,** fitting is ordinary (penalised) regression on columns bⱼ(x).
3. **k basis functions** set the maximum flexibility (`s(x, k = 10)`).
4. **Different bases** (thin plate, cubic, B-spline) give different bricks but similar fitted curves when well penalised.
5. **`model.matrix(m)`** shows the basis columns of a fitted gam.

## See it
![[Basis functions.png|700]]
*What to look at:* left, the bricks; right, the scaled bricks and their sum.

## In R
```r
library(mgcv); set.seed(5); d <- data.frame(x = runif(100)); d$y <- sin(2 * pi * d$x) + rnorm(100, 0, 0.3); m <- gam(y ~ s(x, k = 10), data = d, method = "REML")
dim(model.matrix(m)); round(coef(m)[1:4], 2)        # intercept plus 9 basis coefficients
```

## In the course
[[Pedersen et al. 2019]] (basis functions and penalty matrix figure). [[Noam Ross GAM Course]].

## Common confusions
- **"Each basis function means something biological."** Only their weighted sum does.

## Explain it back
- Why is a GAM still fitted by regression?

*Pass test:* you can describe a smooth as a sum of basis functions.

## Connections
- **Builds on:** [[Spline]], [[Linear Regression|Linear Model]]
- **Leads to:** [[Knots]], [[Basis Dimension and gam.check()]], [[Wiggliness Penalty]]
- **Part of:** [[MOC - GAMs]]

## Flashcards

How is a smooth function built from basis functions?
??
f(x) = Σ βⱼ bⱼ(x): fixed basis curves times estimated coefficients, summed.
![[Basis functions.png]]
++++
