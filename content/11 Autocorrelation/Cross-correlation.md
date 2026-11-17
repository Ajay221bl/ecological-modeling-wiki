---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "CCF"
  - "ccf()"
  - "Cross-correlation function"
  - "Lagged correlation"
status: seedling
---

# Cross-correlation

**In one line:** the cross-correlation function gives the correlation between two time series when one is shifted by each lag, showing whether changes in one lead or follow changes in the other.

> [!info] Before this, it helps to know
> [[Autocorrelation Function]] (the one-series version) · [[Lag]]

## Start from zero
1. **`ccf(x, y)`** in R. The value at lag k estimates cor(x[t + k], y[t]).
2. **So a peak at a negative k means x leads y** (x earlier goes with y later).
3. **Example in the lab:** ice-on and ice-off dates of two neighbouring lakes, or ice dates against temperature.
4. **Autocorrelation within each series inflates cross-correlations.** Two random walks can show large spurious cross-correlations. Prewhitening (removing each series' own autocorrelation first) helps.

## In R
```r
set.seed(8); x <- rnorm(100); y <- c(rep(0, 2), x[1:98]) + rnorm(100, 0, 0.5)        # y follows x by 2 steps
cc <- ccf(x, y, plot = FALSE, lag.max = 4); setNames(round(cc$acf[, 1, 1], 2), cc$lag[, 1, 1])
```

## In the course
`ccf()` in the autocorrelation lab ([[Course Website]]).

## Common confusions
- **"A high cross-correlation proves one series drives the other."** Shared trends and autocorrelation produce them without causation.

## Explain it back
- In ccf(x, y), what does a peak at lag −2 mean?

*Pass test:* you can read lead and lag from a CCF plot.

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
