---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
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

**In one line:** an AR(1) error structure assumes each residual is partly a copy of the previous one, so the correlation between residuals k steps apart is φᵏ.

> [!info] Before this, it helps to know
> [[Temporal Autocorrelation]] (what it models) · [[Correlation Structure]] (its family) · [[Lag]]

## The everyday picture
An echo that fades by the same fraction each step. If 60% carries over to the next year, 36% carries to the year after.

## Start from zero
1. **εₜ = φ εₜ₋₁ + ηₜ,** with ηₜ independent noise and −1 < φ < 1.
2. **Correlation at lag k = φᵏ.**
3. **One parameter,** so it is cheap to estimate even in short series.
4. **`corAR1(form = ~ year)`** needs integer, evenly spaced time steps. Gaps are allowed if the time variable records them.
5. **`corCAR1(form = ~ time)`** is the continuous-time version for irregularly spaced measurements: correlation = φ^(time difference).
6. **Diagnostic signature:** ACF decays geometrically. PACF has one spike at lag 1.
7. **Zuur Ch6 finds AR(1) often enough** for short ecological series, with ARMA rarely improving much.

## See it
![[ACF plot.png|700]]
*What to look at:* the orange curve 0.7^lag.

## In R
```r
library(nlme); set.seed(2); d <- data.frame(year = 1:50); d$x <- rnorm(50); d$y <- 2 + 0.5 * d$x + as.numeric(arima.sim(list(ar = 0.6), 50))
m <- gls(y ~ x, correlation = corAR1(form = ~ year), data = d); round(c(phi = coef(m$modelStruct$corStruct, unconstrained = FALSE), AIC_ar1 = AIC(m), AIC_none = AIC(gls(y ~ x, data = d))), 2)
```

## In the course
[[Zuur et al. 2009 Ch6]] (temporal correlation and linear regression). Autocorrelation lab ([[Course Website]]).

## Common confusions
- **"corAR1 works with any time variable."** It assumes integer steps. Use corCAR1 for irregular times.

## Explain it back
- What is the lag-3 correlation if φ = 0.5?

*Pass test:* you can fit and interpret an AR(1) GLS.

## Connections
- **Builds on:** [[Temporal Autocorrelation]], [[Correlation Structure]], [[Lag]]
- **Leads to:** [[ARMA Error Structure]], [[Partial Autocorrelation Function]], [[Generalized Least Squares]]
- **Part of:** [[MOC - Autocorrelation]]

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
