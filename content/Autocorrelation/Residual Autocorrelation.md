---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "Autocorrelated residuals"
  - "Autocorrelated errors"
  - "Correlated errors"
  - "Spatial autocorrelation in residuals"
status: seedling
---

# Residual Autocorrelation

**In one line:** residual autocorrelation is autocorrelation left over in a model's residuals after the predictors have done their work, and it is the kind that breaks the independence assumption.

> [!info] Before this, it helps to know
> [[Residual|Residuals]] · [[Autocorrelation]] · [[Independence of Observations|Independence]]

## Start from zero
1. **The response being autocorrelated is fine if the predictors explain the pattern.** Diniz-Filho et al. found exactly that for bird richness: adding environmental predictors removed detectable residual autocorrelation.
2. **Residual autocorrelation means the model has not captured some spatial or temporal structure.**
3. **Consequences:** standard errors too small, p-values too small, intervals too narrow. Coefficients may also be off if the structure is confounded with a predictor.
4. **Detect:** ACF of residuals (time), variogram or Moran's I correlogram of residuals (space), bubble plot, DHARMa's tests.
5. **Causes to consider first:** a missing covariate, a wrong functional form, a missing grouping factor.
6. **Then, if needed,** add a correlation structure (GLS), a random effect, a smooth of coordinates or time, or a spatial random field.

## In R
```r
set.seed(15); x <- seq(0, 10, length = 100); y <- 2 + sin(x) + 0.2 * x + rnorm(100, 0, 0.3)
round(c(straight_line_lag1 = acf(resid(lm(y ~ x)), plot = FALSE)$acf[2], with_sine_lag1 = acf(resid(lm(y ~ x + sin(x))), plot = FALSE)$acf[2]), 2)
```

## In the course
[[Diniz-Filho et al. 2003]]. [[Zuur et al. 2009 Ch6]] and [[Zuur et al. 2009 Ch7]].

## Common confusions
- **"If the raw data are autocorrelated I must use a spatial model."** Check the residuals of the non-spatial model first.

## Explain it back
- Why might residual autocorrelation disappear after adding a covariate?

*Pass test:* you can detect it and list causes.

## Connections
- **Builds on:** [[Residual|Residuals]], [[Autocorrelation]], [[Independence of Observations|Independence]]
- **Leads to:** [[Generalized Least Squares]], [[Why residual autocorrelation can mean a missing covariate]], [[Model Validation]]
- **Part of:** [[MOC - Autocorrelation]], molecular note [[How to detect and handle autocorrelation]]

## Flashcards

Why does autocorrelation in the response not by itself require a spatial model?
??
If the predictors explain the spatial pattern, the residuals will be independent.
++++

What does residual autocorrelation do to standard errors?
??
Makes them too small (with positive autocorrelation).
++++
