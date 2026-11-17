---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "An AR(1) error structure assumes each residual is partly a copy of the previous one, so the correlation between residuals k steps apart is φᵏ."
aliases:
  - "AR1"
  - "AR(1)"
  - "corAR1()"
  - "Autoregressive errors"
  - "First-order autoregressive"
  - "corCAR1()"
  - "Continuous-time AR(1)"
status: seedling
---

# AR(1) Error Structure

An echo that fades by the same fraction each step: if 60% carries over to the next year, 36% carries to the year after. An **AR(1) error structure** assumes each residual is partly a copy of the previous one, εₜ = φ εₜ₋₁ + ηₜ, with ηₜ independent noise and −1 < φ < 1, so the correlation between residuals k steps apart is φᵏ ([[Temporal Autocorrelation]], [[Lag]], [[Correlation Structure]]). It has one parameter, so it is cheap to estimate even in short series.

`corAR1(form = ~ year)` needs integer, evenly spaced time steps, though gaps are allowed if the time variable records them; `corCAR1(form = ~ time)` is the continuous-time version for irregular measurements, with correlation φ^(time difference). Its diagnostic signature is an ACF that decays geometrically, like the orange 0.7^lag curve in the figure, and a [[Partial Autocorrelation Function]] with one spike at lag 1. In the code below a regression with AR(0.6) errors fitted by `gls()` estimates φ = 0.58 and has AIC 160.6, against 177.5 without the structure.

Zuur Ch6 finds AR(1) often enough for short ecological series, with [[ARMA Error Structure|ARMA]] structures rarely improving much ([[Zuur et al. 2009 Ch6]], [[Generalized Least Squares]], [[Course Website]]). corAR1 does not work with any time variable: it assumes integer steps, so use corCAR1 for irregular times.

![[ACF plot.png|700]]
*What to look at:* the orange curve 0.7^lag.

```r
library(nlme); set.seed(2); d <- data.frame(year = 1:50); d$x <- rnorm(50); d$y <- 2 + 0.5 * d$x + as.numeric(arima.sim(list(ar = 0.6), 50))
m <- gls(y ~ x, correlation = corAR1(form = ~ year), data = d); round(c(phi = coef(m$modelStruct$corStruct, unconstrained = FALSE), AIC_ar1 = AIC(m), AIC_none = AIC(gls(y ~ x, data = d))), 2)
```

## Connections
- **Builds on:** [[Temporal Autocorrelation]], [[Correlation Structure]], [[Lag]]
- **Leads to:** [[ARMA Error Structure]], [[Partial Autocorrelation Function]], [[Generalized Least Squares]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

What correlation does AR(1) imply at lag k?
??
φᵏ.
![[ACF plot.png]]
++++

When should you use corCAR1 rather than corAR1?
??
When observations are at irregular, continuous times.
++++
