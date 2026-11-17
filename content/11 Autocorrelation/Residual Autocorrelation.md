---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "Residual autocorrelation is autocorrelation left over in a model's residuals after the predictors have done their work, and it is the kind that breaks the independence assumption."
aliases:
  - "Autocorrelated residuals"
  - "Autocorrelated errors"
  - "Correlated errors"
  - "Spatial autocorrelation in residuals"
status: seedling
---

# Residual Autocorrelation

**Residual autocorrelation** is autocorrelation left in a model's [[Residual|Residuals]] after the predictors have done their work, and it is the kind that breaks the [[Independence of Observations|Independence]] assumption ([[Autocorrelation]]). The response being autocorrelated is fine if the predictors explain the pattern; Diniz-Filho et al. found exactly that for bird richness, where adding environmental predictors removed detectable residual autocorrelation. Residual autocorrelation means the model has not captured some spatial or temporal structure.

The consequences are standard errors, p-values and intervals that are too small, and coefficients that may also be off if the structure is confounded with a predictor. Detect it with the ACF of residuals in time, a variogram or Moran's I correlogram of residuals in space, a [[Bubble Plot of Residuals]] or DHARMa's tests ([[Model Validation]]). Look first for a missing covariate, a wrong functional form or a missing grouping factor ([[Why residual autocorrelation can mean a missing covariate]]). In the code below a straight line fitted to a wavy relationship leaves residuals with lag-1 autocorrelation of 0.80; adding the missing sine term brings it to −0.01.

Only then, if needed, add a correlation structure with [[Generalized Least Squares]], a random effect, a smooth of coordinates or time, or a spatial random field ([[Diniz-Filho et al. 2003]], [[Zuur et al. 2009 Ch6]], [[Zuur et al. 2009 Ch7]]). Raw data being autocorrelated does not mean you must use a spatial model: check the residuals of the non-spatial model first.

```r
set.seed(15); x <- seq(0, 10, length = 100); y <- 2 + sin(x) + 0.2 * x + rnorm(100, 0, 0.3)
round(c(straight_line_lag1 = acf(resid(lm(y ~ x)), plot = FALSE)$acf[2], with_sine_lag1 = acf(resid(lm(y ~ x + sin(x))), plot = FALSE)$acf[2]), 2)
```

## Connections
- **Builds on:** [[Residual|Residuals]], [[Autocorrelation]], [[Independence of Observations|Independence]]
- **Leads to:** [[Generalized Least Squares]], [[Why residual autocorrelation can mean a missing covariate]], [[Model Validation]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]], molecular note [[How to detect and handle autocorrelation]]

## Flashcards

Why does autocorrelation in the response not by itself require a spatial model?
??
If the predictors explain the spatial pattern, the residuals will be independent.
++++

What does residual autocorrelation do to standard errors?
??
Makes them too small (with positive autocorrelation).
++++
