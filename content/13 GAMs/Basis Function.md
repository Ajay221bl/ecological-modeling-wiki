---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "Basis functions are a set of simple fixed curves that, each multiplied by a coefficient and added together, can build a wide range of smooth shapes."
aliases:
  - "Basis functions"
  - "Basis"
  - "Basis expansion"
  - "Model matrix of a smooth"
status: seedling
---

# Basis Function

Think of Lego bricks for curves: each brick is a simple bump, and by stretching some, shrinking others and adding them up you can build almost any smooth shape. **Basis functions** are a set of simple, fixed curves that, each multiplied by a [[Regression Coefficient|coefficient]] and added together, build a wide range of smooth shapes ([[Spline]]). The smooth is [[Functions in Maths|f(x)]] = Σⱼ βⱼ bⱼ(x), where the bⱼ are fixed and the βⱼ are estimated. Because f is linear in the β's, fitting is ordinary, penalised regression on the columns bⱼ(x), just like coefficients times columns in a [[Linear Regression|Linear Model]].

The number of basis functions, k, sets the maximum flexibility, as in `s(x, k = 10)` ([[Basis Dimension and gam.check()]]). Different bases, such as thin plate, cubic or B-spline, give different bricks but similar fitted curves when well penalised. In the figure the left panel shows the bricks and the right the scaled bricks and their sum. In the code below `model.matrix(m)` for `s(x, k = 10)` has 100 rows and 10 columns, the intercept plus 9 basis columns (one is lost to [[Centering|centring]]), and the first basis coefficients are −2.22, −0.61 and −0.37.

[[Pedersen et al. 2019]] show a basis-function and penalty-matrix figure ([[Noam Ross GAM Course]], [[Wiggliness Penalty]]). Individual basis functions mean nothing biological; only their weighted sum does.

![[Basis functions.png|700]]
*What to look at:* left, the bricks; right, the scaled bricks and their sum.

```r
library(mgcv); set.seed(5); d <- data.frame(x = runif(100)); d$y <- sin(2 * pi * d$x) + rnorm(100, 0, 0.3); m <- gam(y ~ s(x, k = 10), data = d, method = "REML")
dim(model.matrix(m)); round(coef(m)[1:4], 2)        # intercept plus 9 basis coefficients
```

## Connections
- **Builds on:** [[Spline]], [[Linear Regression|Linear Model]], [[Regression Coefficient]], [[Functions in Maths]], [[Centering]]
- **Leads to:** [[Knots]], [[Basis Dimension and gam.check()]], [[Wiggliness Penalty]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

How is a smooth function built from basis functions?
??
f(x) = Σ βⱼ bⱼ(x): fixed basis curves times estimated coefficients, summed.
![[Basis functions.png]]
++++
