---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "Time-series data"
  - "ts object"
  - "Time series data"
status: seedling
---

# Time Series

**In one line:** a time series is a sequence of measurements of the same thing taken in time order, usually at regular intervals.

> [!info] Before this, it helps to know
> [[Temporal Autocorrelation]] (its typical feature)

## Start from zero
1. **Examples:** annual counts of a bird population, daily water temperature, ice-on dates by year.
2. **Order matters.** Shuffling the rows destroys information.
3. **Typical features:** trend, seasonality, autocorrelation, occasional breaks.
4. **R's `ts()` object** stores values with a start and frequency. Many ecological series are kept as data frames with a date column instead.
5. **Regression on time series** must handle autocorrelated residuals (AR errors, GLS) or standard errors will be too small.
6. **Short series** (under about 25 points) give little power to estimate correlation structure.

## In R
```r
set.seed(5); s <- ts(round(50 + cumsum(rnorm(12, 0, 3))), start = 2010); s
```

## In the course
Lake ice-cover series in the autocorrelation lab ([[Course Website]]). [[Zuur et al. 2009 Ch6]].

## Common confusions
- **"Time can just be another predictor and the rest is ordinary regression."** Only if the residuals are independent.

## Explain it back
- What does shuffling a time series destroy?

*Pass test:* you can name the features of a time series.

## Connections
- **Builds on:** [[Temporal Autocorrelation]]
- **Leads to:** [[Autocorrelation Function]], [[AR(1) Error Structure]], [[Stationarity]]
- **Part of:** [[MOC - Autocorrelation]]

## Flashcards

What is a time series?
??
Measurements of the same thing in time order, usually at regular intervals.
++++
