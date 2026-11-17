---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "The Durbin-Watson test checks regression residuals for lag-1 autocorrelation, with a statistic near 2 meaning none."
aliases:
  - "Durbin-Watson statistic"
  - "DW test"
  - "dwtest()"
status: seedling
---

# Durbin-Watson Test

The **Durbin-Watson test** checks regression [[Residual|Residuals]] for lag-1 autocorrelation ([[Temporal Autocorrelation]]). Its statistic is DW = Σ (eₜ − eₜ₋₁)² / Σ eₜ², approximately 2(1 − r₁), where r₁ is the lag-1 autocorrelation of the residuals. Near 2 means no lag-1 autocorrelation, well below 2 positive, and above 2 negative. In the code below a trend with AR(0.6) errors gives DW = 1.02, matching 2(1 − r₁) = 1.03.

In R use `lmtest::dwtest(model)` or `car::durbinWatsonTest(model)`. DHARMa's `testTemporalAutocorrelation()` uses a Durbin-Watson test on simulated residuals ([[Residual Tests in DHARMa]]).

It checks only lag 1 and needs residuals in time order; the [[Autocorrelation Function]] shows more. So DW near 2 means no lag-1 correlation, not independent residuals: longer-lag or seasonal dependence can remain.

```r
set.seed(9); t <- 1:80; y <- 2 + 0.1 * t + as.numeric(arima.sim(list(ar = 0.6), 80)); e <- resid(lm(y ~ t))
dw <- sum(diff(e)^2) / sum(e^2); round(c(DW = dw, approx = 2 * (1 - acf(e, plot = FALSE)$acf[2])), 2)
```

## Connections
- **Builds on:** [[Residual|Residuals]], [[Temporal Autocorrelation]]
- **Leads to:** [[Autocorrelation Function]], [[Residual Tests in DHARMa]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

What Durbin-Watson value indicates no lag-1 autocorrelation?
??
About 2.
++++
