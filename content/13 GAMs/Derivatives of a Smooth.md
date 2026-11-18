---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "The derivative of a smooth shows how fast the response is changing at each predictor value, and its confidence band reveals where the change is clearly positive or negative."
aliases:
  - "Derivatives"
  - "Rate of change of a smooth"
  - "derivatives() in gratia"
  - "First derivative of a smooth"
status: seedling
---

# Derivatives of a Smooth

The **derivative of a smooth** shows how fast the response is changing at each [[Predictor Variable|predictor]] value, and its [[Confidence Envelopes|confidence band]] reveals where the change is clearly positive or negative ([[Derivative]], [[Smoother]]). Compute it by finite differences: predict at x and at x + h and divide the difference by h ([[Prediction from a GAM]]). For uncertainty use the lpmatrix with the [[Regression Coefficient|coefficient]] covariance, or `gratia::derivatives()` ([[gratia]]).

Periods where the band excludes zero are periods of significant change, such as years of real decline in a trend; that is the classic use for [[Time Series|time series]] of abundance, to find when a decline started. Simultaneous intervals are wider than pointwise ones and appropriate when scanning the whole curve. In the code below a smooth of a 60-step series that follows 10 + 3 sin(t/10) is clearly falling from step 18 to step 39, matching the true downswing between about 16 and 47.

Derivatives are computed with gratia in the [[Hierarchical GAM|HGAM]] lab ([[Course Website]]). A smooth that goes down is not necessarily declining significantly; check the derivative's interval.

```r
library(mgcv); set.seed(17); d <- data.frame(t = 1:60); d$y <- 10 + 3 * sin(d$t / 10) + rnorm(60, 0, 0.5); m <- gam(y ~ s(t), data = d, method = "REML")
h <- 0.01; X0 <- predict(m, data.frame(t = 1:60), type = "lpmatrix"); X1 <- predict(m, data.frame(t = 1:60 + h), type = "lpmatrix"); D <- (X1 - X0) / h
der <- D %*% coef(m); se <- sqrt(rowSums((D %*% vcov(m)) * D)); range(which(der + 2 * se < 0))      # time steps where the trend is clearly falling
```

## Connections
- **Builds on:** [[Derivative]], [[Smoother]], [[Prediction from a GAM]], [[Predictor Variable]], [[Confidence Envelopes]], [[Regression Coefficient]], [[Time Series]], [[Hierarchical GAM]]
- **Leads to:** [[gratia]], [[Partial Effect Plots]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What do the derivatives of a smooth show?
??
The rate of change at each predictor value; where the interval excludes zero, change is significant.
++++
