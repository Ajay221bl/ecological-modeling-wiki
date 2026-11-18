---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "The autocorrelation function gives the correlation between a series and itself shifted by each lag, and its plot is the standard first check for temporal autocorrelation."
aliases:
  - "ACF"
  - "acf()"
  - "ACF plot"
  - "Autocorrelation Function (ACF)"
  - "Auto-correlation function"
status: seedling
---

# Autocorrelation Function

Slide a transparent copy of a wiggly line one step to the right and ask how well it lines up with the original, then two steps, then three. The **autocorrelation function** (ACF) plots how good the match is at each slide: the correlation between a series and itself shifted by each [[Lag]] ([[Correlation]], [[Time Series]]). `acf(x)` draws correlation against lag; lag 0 is always 1, and dashed blue lines at about ±1.96/√n mark bars larger than expected for an independent series.

Use it on residuals, in time order, with no gaps; gaps need care, and the lab converts dates to [[Dates in R|day of year]]. Slow decay suggests AR-type dependence or an unmodelled trend ([[AR(1) Error Structure]]), and a spike at lag 12 in monthly data suggests seasonality. In the figure, bars fall roughly as 0.7 to the power of the lag. In the code below an AR(1) series with φ = 0.7 has estimated autocorrelations of 0.66, 0.39, 0.20, 0.07 and 0.01 at lags 1 to 5, against theoretical values of 0.70, 0.49, 0.34, 0.24 and 0.17, and the band for n = 200 is ±0.14.

With n = 100 about 1 bar in 20 crosses the band by chance, so don't chase single small crossings. It is the standard first check for [[Temporal Autocorrelation|temporal autocorrelation]], read in the lab for its lag axis, significance band and correlation axis ([[Course Website]], [[Zuur et al. 2009 Ch6]]); its partners are the [[Partial Autocorrelation Function]] and [[Cross-correlation]]. Use the ACF on model residuals, not raw data, to check a model.

![[ACF plot.png|700]]
*What to look at:* bars fall roughly as 0.7 to the power of the lag and cross into the band after a few lags.

```r
set.seed(6); e <- as.numeric(arima.sim(list(ar = 0.7), n = 200)); a <- acf(e, lag.max = 5, plot = FALSE)
round(rbind(acf = a$acf[1:6], theory = 0.7^(0:5)), 2); round(1.96 / sqrt(200), 2)       # the band
```

## Connections
- **Builds on:** [[Lag]], [[Correlation]], [[Time Series]], [[Dates in R]], [[Temporal Autocorrelation]]
- **Leads to:** [[Partial Autocorrelation Function]], [[Cross-correlation]], [[AR(1) Error Structure]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]], molecular note [[ACF vs PACF]]

## Flashcards

What does an ACF plot show?
??
The correlation of a series with itself at each lag, with dashed bounds for what an independent series would show.
![[ACF plot.png]]
++++

What are the approximate bounds on an ACF plot?
??
±1.96/√n.
++++
