---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "s()"
  - "s(x)"
  - "mgcv s()"
  - "Smooth term specification"
status: seedling
---

# Smoothing Function s()

**In one line:** `s()` is the mgcv function that declares a smooth term in a GAM formula, with arguments for the basis type, its size, and how it interacts with factors.

> [!info] Before this, it helps to know
> [[Generalized Additive Model]] · [[Model Formula Syntax|Formula Syntax in R]]

## Start from zero
1. **`s(x)`:** default thin plate smooth with k = 10.
2. **`s(x, k = 20)`:** larger basis.
3. **`s(x, bs = "cr")`:** cubic regression spline. `"cc"` cyclic, `"re"` random effect, `"fs"` factor smooth, `"gp"` Gaussian process, `"ps"` P-spline.
4. **`s(x, by = f)`:** a separate smooth for each level of f.
5. **`s(x, z)`:** a 2-D isotropic smooth. Use `te(x, z)` when units differ.
6. **`s(x, m = 1)`:** penalise first derivative.
7. **Parametric terms** (factors, linear terms) go outside s() as usual.

## In R
```r
library(mgcv); set.seed(13); d <- data.frame(x = runif(200), f = factor(sample(c("a", "b"), 200, TRUE))); d$y <- ifelse(d$f == "a", sin(2 * pi * d$x), d$x) + rnorm(200, 0, 0.3)
m <- gam(y ~ f + s(x, by = f, k = 8), data = d, method = "REML"); round(summary(m)$s.table[, "edf"], 2)
```

## In the course
GAM lab ([[Course Website]]). [[Noam Ross GAM Course]].

## Common confusions
- **"k is the number of wiggles."** k is the basis size, an upper limit on flexibility.

## Explain it back
- Which s() argument fits a smooth per factor level?

*Pass test:* you can write common smooth terms.

## Connections
- **Builds on:** [[Generalized Additive Model]], [[Model Formula Syntax|Formula Syntax in R]]
- **Leads to:** [[by= Smooths]], [[Factor-smooth Interaction]], [[Tensor Product Smooth]], [[Cyclic Spline]], [[Random-effect Smooth]]
- **Part of:** [[MOC - GAMs]]

## Flashcards

What does s(x) give by default in mgcv?
??
A thin plate regression spline with basis dimension k = 10.
++++
