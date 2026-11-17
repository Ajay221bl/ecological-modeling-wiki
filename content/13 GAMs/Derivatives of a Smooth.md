---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "Derivatives"
  - "Rate of change of a smooth"
  - "derivatives() in gratia"
  - "First derivative of a smooth"
status: seedling
---

# Derivatives of a Smooth

**In one line:** the derivative of a smooth shows how fast the response is changing at each predictor value, and its confidence band reveals where the change is clearly positive or negative.

> [!info] Before this, it helps to know
> [[Derivative]] · [[Smoother]] · [[Prediction from a GAM]]

## Start from zero
1. **Compute by finite differences:** predict at x and x + h, divide the difference by h.
2. **Uncertainty:** use the lpmatrix and the coefficient covariance, or `gratia::derivatives()`.
3. **Periods where the band excludes zero** are periods of significant change (for example, years of real decline in a trend).
4. **Simultaneous intervals** are wider than pointwise ones and appropriate when scanning the whole curve.
5. **Classic use:** time series of abundance, to find when a decline started.

## In R
```r
library(mgcv); set.seed(17); d <- data.frame(t = 1:60); d$y <- 10 + 3 * sin(d$t / 10) + rnorm(60, 0, 0.5); m <- gam(y ~ s(t), data = d, method = "REML")
h <- 0.01; X0 <- predict(m, data.frame(t = 1:60), type = "lpmatrix"); X1 <- predict(m, data.frame(t = 1:60 + h), type = "lpmatrix"); D <- (X1 - X0) / h
der <- D %*% coef(m); se <- sqrt(rowSums((D %*% vcov(m)) * D)); range(which(der + 2 * se < 0))      # time steps where the trend is clearly falling
```

## In the course
Derivatives with gratia in the HGAM lab ([[Course Website]]).

## Common confusions
- **"A smooth that goes down is declining significantly."** Check the derivative's interval.

## Explain it back
- How do you find where a smooth trend is significantly decreasing?

*Pass test:* you can compute derivatives with uncertainty.

## Connections
- **Builds on:** [[Derivative]], [[Smoother]], [[Prediction from a GAM]]
- **Leads to:** [[gratia]], [[Partial Effect Plots]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What do the derivatives of a smooth show?
??
The rate of change at each predictor value; where the interval excludes zero, change is significant.
++++
