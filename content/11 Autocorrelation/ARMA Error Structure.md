---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "An ARMA(p, q) error structure combines autoregressive terms (dependence on the previous p residuals) with moving-average terms (dependence on the previous q random shocks), allowing more flexible temporal correlation than AR(1)."
aliases:
  - "ARMA"
  - "corARMA()"
  - "ARMA(p, q)"
  - "Moving average errors"
  - "MA(q)"
  - "AR(p)"
status: seedling
---

# ARMA Error Structure

An **ARMA(p, q) error structure** combines autoregressive terms, dependence on the previous p residuals, with moving-average terms, dependence on the previous q random shocks, allowing more flexible temporal correlation than the [[AR(1) Error Structure]], which is ARMA(1, 0). AR(p) is εₜ = φ₁εₜ₋₁ + ... + φₚεₜ₋ₚ + ηₜ; MA(q) is εₜ = ηₜ + θ₁ηₜ₋₁ + ... + θ_qηₜ₋q, so a shock affects only the next q steps.

In nlme use `corARMA(form = ~ year, p = 2, q = 0)` ([[Correlation Structure]]). Choose p and q with [[AIC]], trying small values from 0 to 3, with the ACF and [[Partial Autocorrelation Function]] as hints. In the code below a series generated as AR(2) gives AIC 214.1 with AR(1), 208.6 with AR(2) and 210.2 with ARMA(1, 1), so AR(2) is preferred.

More parameters bring more convergence trouble, especially in short series, and Zuur et al. caution that higher orders are rarely needed ([[Zuur et al. 2009 Ch6]]). Higher p and q are not always better: they overfit and often fail to converge.

```r
library(nlme); set.seed(3); d <- data.frame(year = 1:80); d$y <- as.numeric(arima.sim(list(ar = c(0.5, 0.3)), 80))
sapply(list(ar1 = corAR1(form = ~ year), ar2 = corARMA(form = ~ year, p = 2), arma11 = corARMA(form = ~ year, p = 1, q = 1)), function(cs) round(AIC(gls(y ~ 1, correlation = cs, data = d)), 1))
```

## Connections
- **Builds on:** [[AR(1) Error Structure]], [[Partial Autocorrelation Function]]
- **Leads to:** [[Correlation Structure]], [[AIC]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]], molecular note [[ACF vs PACF]]

## Flashcards

What is an ARMA(p, q) error structure?
??
Residuals depending on their p previous values (AR) and on the q previous random shocks (MA).
++++
