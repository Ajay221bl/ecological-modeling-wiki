---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "Durbin-Watson statistic"
  - "DW test"
  - "dwtest()"
status: seedling
---

# Durbin-Watson Test

**In one line:** the Durbin-Watson test checks regression residuals for lag-1 autocorrelation, with a statistic near 2 meaning none.

> [!info] Before this, it helps to know
> [[Residual|Residuals]] · [[Temporal Autocorrelation]]

## Start from zero
1. **DW = Σ (eₜ − eₜ₋₁)² / Σ eₜ².**
2. **DW ≈ 2(1 − r₁),** where r₁ is the lag-1 autocorrelation of residuals.
3. **Near 2:** no lag-1 autocorrelation. Well below 2: positive. Above 2: negative.
4. **R:** `lmtest::dwtest(model)` or `car::durbinWatsonTest(model)`.
5. **Only checks lag 1** and needs residuals in time order. The ACF shows more.

## In R
```r
set.seed(9); t <- 1:80; y <- 2 + 0.1 * t + as.numeric(arima.sim(list(ar = 0.6), 80)); e <- resid(lm(y ~ t))
dw <- sum(diff(e)^2) / sum(e^2); round(c(DW = dw, approx = 2 * (1 - acf(e, plot = FALSE)$acf[2])), 2)
```

## In the course
DHARMa's `testTemporalAutocorrelation()` uses a Durbin-Watson test on simulated residuals.

## Common confusions
- **"DW near 2 means the residuals are independent."** It means no lag-1 correlation. Longer-lag or seasonal dependence can remain.

## Explain it back
- What DW value suggests positive autocorrelation?

*Pass test:* you can compute and interpret DW.

## Connections
- **Builds on:** [[Residual|Residuals]], [[Temporal Autocorrelation]]
- **Leads to:** [[Autocorrelation Function]], [[Residual Tests in DHARMa]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

What Durbin-Watson value indicates no lag-1 autocorrelation?
??
About 2.
++++
