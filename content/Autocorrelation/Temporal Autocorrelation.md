---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "Serial autocorrelation"
  - "Time-series autocorrelation"
  - "Temporal correlation"
  - "Temporal dependence"
status: seedling
---

# Temporal Autocorrelation

**In one line:** temporal autocorrelation means that a measurement at one time is correlated with measurements at nearby times, usually because conditions and populations carry over from one time step to the next.

> [!info] Before this, it helps to know
> [[Autocorrelation]] (the general idea) · [[Lag]] (how far apart in time) · [[Time Series]] (where it lives)

## The everyday picture
A population's size this year is last year's size plus births minus deaths. It can't jump anywhere, so consecutive years look alike.

## Start from zero
1. **Direction matters:** time flows one way, so dependence is on the past.
2. **Measured with the autocorrelation function (ACF)** at each lag.
3. **Common causes:** inertia in populations, slowly changing climate, repeated measurements of the same unit.
4. **Modelled with AR(1) or ARMA error structures** (`corAR1`, `corARMA` in nlme), random effects for the measured unit, or smooths of time.
5. **Repeated measures** on the same animal or plot are a special case: observations of the same unit are correlated, and nearer times are often more so.
6. **Trends create apparent autocorrelation.** A series with a trend looks autocorrelated until the trend is modelled.

## See it
![[ACF plot.png|700]]
*What to look at:* bars decline steadily with lag, staying above the dashed band for several lags.

## In R
```r
set.seed(3); yr <- 1:60; ice <- 100 - 0.3 * yr + as.numeric(arima.sim(list(ar = 0.5), 60)) * 5          # ice-cover-like series with a trend
round(c(raw_lag1 = acf(ice, plot = FALSE)$acf[2], resid_lag1 = acf(resid(lm(ice ~ yr)), plot = FALSE)$acf[2]), 2)
```

## In the course
Autocorrelation lab, temporal part: ice-on and ice-off dates for Lakes Mendota and Monona, with `acf()` and `ccf()` ([[Course Website]]). [[Zuur et al. 2009 Ch6]].

## Common confusions
- **"A trending series is just autocorrelated."** Fit the trend first, then look at the residuals.

## Explain it back
- Why does a trend inflate the raw ACF?

*Pass test:* you can detect temporal autocorrelation with acf().

## Connections
- **Builds on:** [[Autocorrelation]], [[Lag]], [[Time Series]]
- **Leads to:** [[Autocorrelation Function]], [[AR(1) Error Structure]], [[Repeated Measures]]
- **Part of:** [[MOC - Autocorrelation]], molecular note [[Temporal vs Spatial Autocorrelation]]

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
