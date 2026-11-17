---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "The cross-correlation function gives the correlation between two time series when one is shifted by each lag, showing whether changes in one lead or follow changes in the other."
aliases:
  - "CCF"
  - "ccf()"
  - "Cross-correlation function"
  - "Lagged correlation"
status: seedling
---

# Cross-correlation

The **cross-correlation function** gives the correlation between two time series when one is shifted by each lag, showing whether changes in one lead or follow changes in the other ([[Autocorrelation Function]], [[Lag]]). In R `ccf(x, y)` estimates cor(x[t + k], y[t]) at lag k, so a peak at a negative k means x leads y, with x earlier going with y later. The lab uses it on ice-on and ice-off dates of two neighbouring lakes, and on ice dates against temperature.

In the code below y copies x two steps later plus noise, and the cross-correlation peaks at 0.89 at lag −2, with all other lags small.

Autocorrelation within each series inflates cross-correlations, so two random walks can show large spurious ones; prewhitening, removing each series' own autocorrelation first, helps ([[Time Series]], [[Course Website]]). A high cross-correlation does not prove one series drives the other: shared trends and autocorrelation produce them without causation ([[Correlation vs Causation]]).

```r
set.seed(8); x <- rnorm(100); y <- c(rep(0, 2), x[1:98]) + rnorm(100, 0, 0.5)        # y follows x by 2 steps
cc <- ccf(x, y, plot = FALSE, lag.max = 4); setNames(round(cc$acf[, 1, 1], 2), cc$lag[, 1, 1])
```

## Connections
- **Builds on:** [[Autocorrelation Function]], [[Lag]]
- **Leads to:** [[Correlation vs Causation]], [[Time Series]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

What does the cross-correlation function show?
??
The correlation between two series at each relative lag, revealing whether one leads the other.
++++

In R's ccf(x, y), what does a peak at a negative lag mean?
??
x leads y.
++++
