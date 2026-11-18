---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "A by= smooth fits a separate curve of x for each level of a factor, each with its own smoothing parameter."
aliases:
  - "by ="
  - "by argument"
  - "Factor-by smooths"
  - "Interaction Between Smooth and Factor"
  - "s(x, by = f)"
status: seedling
---

# by= Smooths

A **by= smooth** fits a separate curve of x for each level of a factor, each with its own [[Smoothing Parameter|smoothing parameter]] ([[Smoothing Function s()]], [[Interaction Term]]). It is written `y ~ f + s(x, by = f)`; the factor main effect is needed because each by-smooth is centred. Each level gets its own λ, so the curves can differ in wiggliness. This is model I in [[Pedersen et al. 2019]], or GI if a [[Global Smoother|global smooth]] is added ([[Hierarchical GAM]], [[Shared Wiggliness]]).

With a numeric `by`, the smooth is multiplied by that variable, a varying-coefficient model. Compare levels by differencing predictions with the lpmatrix or with [[gratia]]'s `difference_smooths()` ([[Prediction from a GAM]]). With many levels and little data each, use a [[Factor-smooth Interaction]] (`bs = "fs"`) instead. In the code below the north curve is a sine wave and the others are straight lines: the by-smooths get edfs of 6.3 for north and 1.0 for east and south.

[[Zuur et al. 2009 Ch3]] cover the interaction between a continuous and a nominal variable. `s(x, by = f)` does not include the group means; add f as a parametric term.

```r
library(mgcv); set.seed(20); d <- data.frame(x = runif(300), f = factor(rep(c("north", "south", "east"), 100))); d$y <- c(north = 1, south = 0, east = -1)[as.character(d$f)] + ifelse(d$f == "north", sin(2 * pi * d$x), 0.5 * d$x) + rnorm(300, 0, 0.3)
round(summary(gam(y ~ f + s(x, by = f), data = d, method = "REML"))$s.table[, "edf"], 2)
```

## Connections
- **Builds on:** [[Smoothing Function s()]], [[Interaction Term]], [[Smoothing Parameter]], [[Global Smoother]], [[gratia]]
- **Leads to:** [[Factor-smooth Interaction]], [[Group-level Smoothers]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]], molecular note [[by= Smooths vs Factor Smooths]]

## Flashcards

What does s(x, by = f) fit?
??
A separate smooth of x for each level of f, each with its own smoothing parameter.
++++

Why add f as a parametric term with s(x, by = f)?
??
By-smooths are centred, so the group means must be modelled separately.
++++
