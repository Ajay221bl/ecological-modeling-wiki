---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "by ="
  - "by argument"
  - "Factor-by smooths"
  - "Interaction Between Smooth and Factor"
  - "s(x, by = f)"
status: seedling
---

# by= Smooths

**In one line:** a by= smooth fits a separate curve of x for each level of a factor, each with its own smoothing parameter.

> [!info] Before this, it helps to know
> [[Smoothing Function s()]] · [[Interaction Term]]

## Start from zero
1. **`y ~ f + s(x, by = f)`.** The factor main effect is needed because each by-smooth is centred.
2. **Each level gets its own λ:** curves can differ in wiggliness.
3. **This is model I in Pedersen et al.** (or GI if a global smooth is added).
4. **With a numeric `by`,** the smooth is multiplied by that variable (varying-coefficient model).
5. **Comparing levels:** compute differences of predictions with the lpmatrix, or gratia's `difference_smooths()`.
6. **Many levels with little data each:** use a factor smooth (`bs = "fs"`) instead.

## In R
```r
library(mgcv); set.seed(20); d <- data.frame(x = runif(300), f = factor(rep(c("north", "south", "east"), 100))); d$y <- c(north = 1, south = 0, east = -1)[as.character(d$f)] + ifelse(d$f == "north", sin(2 * pi * d$x), 0.5 * d$x) + rnorm(300, 0, 0.3)
round(summary(gam(y ~ f + s(x, by = f), data = d, method = "REML"))$s.table[, "edf"], 2)
```

## In the course
[[Zuur et al. 2009 Ch3]] (interaction between a continuous and nominal variable). [[Pedersen et al. 2019]].

## Common confusions
- **"s(x, by = f) includes the group means."** It doesn't; add f as a parametric term.

## Explain it back
- Why must f be added as a main effect?

*Pass test:* you can fit and interpret by-smooths.

## Connections
- **Builds on:** [[Smoothing Function s()]], [[Interaction Term]]
- **Leads to:** [[Factor-smooth Interaction]], [[Group-level Smoothers]]
- **Part of:** [[MOC - GAMs]], molecular note [[by= Smooths vs Factor Smooths]]

## Flashcards

What does s(x, by = f) fit?
??
A separate smooth of x for each level of f, each with its own smoothing parameter.
++++

Why add f as a parametric term with s(x, by = f)?
??
By-smooths are centred, so the group means must be modelled separately.
++++
