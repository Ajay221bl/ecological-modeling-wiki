---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "Temporal autocorrelation means that a measurement at one time is correlated with measurements at nearby times, usually because conditions and populations carry over from one time step to the next."
aliases:
  - "Serial autocorrelation"
  - "Time-series autocorrelation"
  - "Temporal correlation"
  - "Temporal dependence"
status: seedling
---

# Temporal Autocorrelation

A population's size this year is last year's size plus births minus deaths, so it can't jump anywhere and consecutive years look alike. **Temporal autocorrelation** means a measurement at one time is correlated with measurements at nearby times, usually because conditions and populations carry over from one time step to the next ([[Autocorrelation]], [[Time Series]]). Time flows one way, so dependence is on the past. Common causes are inertia in populations, slowly changing climate and repeated measurements of the same unit; [[Repeated Measures]] on the same animal or plot are a special case, with nearer times often more correlated.

It is measured with the [[Autocorrelation Function]] at each [[Lag]], whose bars, as in the figure, decline steadily with lag. It is modelled with AR(1) or [[ARMA Error Structure|ARMA]] error structures (`corAR1`, `corARMA` in nlme; [[AR(1) Error Structure]]), [[Random Effect|random effects]] for the measured unit, or smooths of time.

A trend creates apparent autocorrelation, so fit the trend first and then look at the residuals. In the code below an ice-cover-like series with a downward trend has a lag-1 autocorrelation of 0.68; after removing the trend the residuals still have 0.50, the real carry-over the series was built with. The lab's temporal part uses ice-on and ice-off dates for Lakes Mendota and Monona with `acf()` and `ccf()` ([[Course Website]], [[Zuur et al. 2009 Ch6]]). Its spatial counterpart is [[Spatial Autocorrelation]].

![[ACF plot.png|700]]
*What to look at:* bars decline steadily with lag, staying above the dashed band for several lags.

```r
set.seed(3); yr <- 1:60; ice <- 100 - 0.3 * yr + as.numeric(arima.sim(list(ar = 0.5), 60)) * 5          # ice-cover-like series with a trend
round(c(raw_lag1 = acf(ice, plot = FALSE)$acf[2], resid_lag1 = acf(resid(lm(ice ~ yr)), plot = FALSE)$acf[2]), 2)
```

## Connections
- **Builds on:** [[Autocorrelation]], [[Lag]], [[Time Series]], [[ARMA Error Structure]]
- **Leads to:** [[Autocorrelation Function]], [[AR(1) Error Structure]], [[Repeated Measures]], [[Random Effect]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]], molecular note [[Temporal vs Spatial Autocorrelation]]

## Flashcards

What is temporal autocorrelation?
??
Correlation between measurements of a variable at nearby times.
![[ACF plot.png]]
++++

Why should you remove a trend before reading an ACF?
??
A trend makes values at nearby times similar, so the raw ACF looks strongly autocorrelated even if the residuals are not.
++++
