---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "Double penalty selection adds a second penalty to each smooth's otherwise unpenalised part, so that whole terms can be shrunk to zero and effectively dropped during fitting."
aliases:
  - "select = TRUE"
  - "Double penalty"
  - "Shrinkage smooths"
  - "bs = \"ts\""
  - "bs = \"cs\""
status: seedling
---

# Double Penalty Selection

The usual penalty leaves the null space, a [[Equation of a Line|straight line]], unpenalised, so a smooth can't vanish completely ([[Wiggliness Penalty]]). **Double penalty selection** adds a second penalty to that null space, so whole terms can be shrunk to zero and effectively dropped during fitting ([[Regularization]]). It is `gam(..., select = TRUE)`; the [[Shrinkage|shrinkage]] bases `"ts"` and `"cs"` do something similar term by term ([[Cubic Regression Spline]]).

A term with an edf near 0 has been effectively removed ([[Effective Degrees of Freedom]]). It is a form of automatic model selection and still needs careful interpretation. In the code below x1 has a real sine effect and x2 is pure noise: with `select = TRUE`, s(x1) keeps an edf of 6.9 and s(x2) drops to 0.000.

It is not in the in-scope labs; it is included because it is mgcv's built-in term selection ([[Generalized Additive Model]]). An edf of 1 does not mean removed: with `select = TRUE`, an edf near 0 means removed and an edf of 1 means linear.

```r
library(mgcv); set.seed(24); d <- data.frame(x1 = runif(200), x2 = runif(200)); d$y <- sin(2 * pi * d$x1) + rnorm(200, 0, 0.3)       # x2 is pure noise
round(summary(gam(y ~ s(x1) + s(x2), data = d, method = "REML", select = TRUE))$edf, 3)
```

## Connections
- **Builds on:** [[Wiggliness Penalty]], [[Regularization]], [[Equation of a Line]], [[Shrinkage]]
- **Leads to:** [[Model Selection]], [[Effective Degrees of Freedom]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What does select = TRUE do in mgcv?
??
Adds a penalty on each smooth's null space so whole terms can shrink to zero.
++++
