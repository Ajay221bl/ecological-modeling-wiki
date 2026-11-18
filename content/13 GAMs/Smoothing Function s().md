---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "`s()` is the mgcv function that declares a smooth term in a GAM formula, with arguments for the basis type, its size, and how it interacts with factors."
aliases:
  - "s()"
  - "s(x)"
  - "mgcv s()"
  - "Smooth term specification"
status: seedling
---

# Smoothing Function s()

`s()` is the mgcv function that declares a [[Smoother|smooth term]] in a GAM formula, with arguments for the basis type, its size, and how it interacts with factors ([[Generalized Additive Model]], [[Model Formula Syntax|Formula Syntax in R]]). `s(x)` is a default thin plate smooth with k = 10; `s(x, k = 20)` a larger basis; `s(x, bs = "cr")` a cubic [[Spline|regression spline]], with `"cc"` for cyclic, `"re"` [[Random Effect|random effect]], `"fs"` factor smooth, `"gp"` [[Normal Distribution|Gaussian]] process and `"ps"` [[Penalized Regression Spline|P-spline]] ([[Cubic Regression Spline]], [[Cyclic Spline]], [[Random-effect Smooth]], [[Factor-smooth Interaction]], [[Gaussian Process Smooths]]).

`s(x, by = f)` gives a separate smooth for each level of f ([[by= Smooths]]); `s(x, z)` a 2-D [[Isotropy|isotropic]] smooth, with `te(x, z)` when units differ ([[Tensor Product Smooth]]); and `s(x, m = 1)` penalises the first derivative. Parametric terms such as factors and linear terms go outside `s()` as usual. In the code below group a follows a sine curve and group b a [[Equation of a Line|straight line]], and `s(x, by = f)` gives them edfs of 5.71 and 1.00.

It is used throughout the GAM lab ([[Course Website]], [[Noam Ross GAM Course]]). k is not the number of wiggles; it is the basis size, an upper limit on flexibility ([[Basis Dimension and gam.check()]]).

```r
library(mgcv); set.seed(13); d <- data.frame(x = runif(200), f = factor(sample(c("a", "b"), 200, TRUE))); d$y <- ifelse(d$f == "a", sin(2 * pi * d$x), d$x) + rnorm(200, 0, 0.3)
m <- gam(y ~ f + s(x, by = f, k = 8), data = d, method = "REML"); round(summary(m)$s.table[, "edf"], 2)
```

## Connections
- **Builds on:** [[Generalized Additive Model]], [[Model Formula Syntax|Formula Syntax in R]], [[Smoother]], [[Random Effect]], [[Penalized Regression Spline]], [[Isotropy]], [[Equation of a Line]], [[Spline]], [[Normal Distribution]]
- **Leads to:** [[by= Smooths]], [[Factor-smooth Interaction]], [[Tensor Product Smooth]], [[Cyclic Spline]], [[Random-effect Smooth]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What does s(x) give by default in mgcv?
??
A thin plate regression spline with basis dimension k = 10.
++++
