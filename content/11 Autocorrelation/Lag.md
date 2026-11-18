---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "A lag is the separation, in time steps or distance, between two observations whose values are being compared."
aliases:
  - "Time lag"
  - "Lag k"
  - "Spatial lag"
status: seedling
---

# Lag

A **lag** is the [[Complete Separation|separation]], in time steps or distance, between two observations whose values are being compared ([[Time Series]]). At lag 1 each value is paired with the one just before it; at lag k, with the one k steps before; the lag 0 correlation is always 1. In the code below the series 5, 7, 6, 9, 8 gives the lag-1 pairs (7, 5), (6, 7), (9, 6) and (8, 9).

In cross-correlation lags can be negative, pairing x at time t with y at time t − k or t + k ([[Cross-correlation]]). In space, the "lag" is a distance class ([[Distance Classes]]). Lagged [[Predictor Variable|predictors]], such as last year's rainfall, are a separate idea: using a past value of a covariate as a predictor.

Reading the lag axis of `acf()` and `ccf()` plots is part of the autocorrelation lab ([[Autocorrelation Function]], [[Course Website]]). In `acf()` lag is measured in observation steps, or units of the series' frequency, not calendar units.

```r
x <- c(5, 7, 6, 9, 8); cbind(x_t = x[-1], x_t_minus_1 = x[-5])        # lag-1 pairs
```

## Connections
- **Builds on:** [[Time Series]], [[Complete Separation]], [[Predictor Variable]]
- **Leads to:** [[Autocorrelation Function]], [[Cross-correlation]], [[Distance Classes]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

What is a lag?
??
The separation in time steps or distance between two observations being compared.
++++
