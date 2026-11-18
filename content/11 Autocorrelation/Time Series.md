---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "A time series is a sequence of measurements of the same thing taken in time order, usually at regular intervals."
aliases:
  - "Time-series data"
  - "ts object"
  - "Time series data"
status: seedling
---

# Time Series

A **time series** is a sequence of measurements of the same thing taken in time order, usually at regular intervals: annual counts of a bird population, daily water temperature, ice-on dates by year. Order matters, so shuffling the rows destroys information. Typical features are trend, seasonality, [[Temporal Autocorrelation]] and occasional breaks.

R's `ts()` object stores values with a start and a frequency, as in the code below, which makes a 12-year series starting in 2010; many ecological series are kept instead as [[Data Frame|data frames]] with a date column. Regression on a time series must handle [[Residual Autocorrelation|autocorrelated residuals]], with AR errors or GLS, or the standard errors will be too small ([[AR(1) Error Structure]]). Short series, under about 25 points, give little power to estimate a [[Correlation Structure|correlation structure]].

The lake ice-cover series in the autocorrelation lab are the course's example ([[Course Website]], [[Zuur et al. 2009 Ch6]]), checked with the [[Autocorrelation Function]] and assumed to have [[Stationarity]] after trends are removed. Time cannot just be another [[Predictor Variable|predictor]] with the rest ordinary regression, unless the residuals are independent.

```r
set.seed(5); s <- ts(round(50 + cumsum(rnorm(12, 0, 3))), start = 2010); s
```

## Connections
- **Builds on:** [[Temporal Autocorrelation]], [[Data Frame]], [[Residual Autocorrelation]], [[Correlation Structure]], [[Predictor Variable]]
- **Leads to:** [[Autocorrelation Function]], [[AR(1) Error Structure]], [[Stationarity]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

What is a time series?
??
Measurements of the same thing in time order, usually at regular intervals.
++++
