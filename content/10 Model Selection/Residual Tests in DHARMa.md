---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "DHARMa's residual tests turn the main diagnostic questions (correct distribution, correct dispersion, outliers, zero inflation, autocorrelation) into formal tests on simulated residuals."
aliases:
  - "testUniformity()"
  - "testDispersion()"
  - "testOutliers()"
  - "testZeroInflation()"
  - "DHARMa tests"
  - "KS test in DHARMa"
status: seedling
---

# Residual Tests in DHARMa

**DHARMa's residual tests** turn the main diagnostic questions into formal tests on simulated residuals ([[DHARMa Simulated Residuals]], [[Model Validation]]). `testUniformity()` is a Kolmogorov-Smirnov test of whether residuals are uniform, and failure means a wrong distribution overall. `testDispersion()` compares the spread of observed and simulated data, with a ratio above 1 meaning [[Overdispersion]] and below 1 [[Underdispersion|underdispersion]]. `testOutliers()` asks whether too many observations fall outside the entire simulated range ([[Outlier]]). `testZeroInflation()` asks whether there are more zeros than the model simulates ([[Zero Inflation]]). `testQuantiles()` checks whether the 25%, 50% and 75% residual quantiles stay flat across [[Fitted Value|fitted values]].

`testSpatialAutocorrelation()` and `testTemporalAutocorrelation()` apply [[Moran's I]] and the [[Durbin-Watson Test|Durbin-Watson test]] to residuals, after aggregating [[Repeated Measures|repeated measures]] ([[Spatial Autocorrelation]]). `plot(simulateResiduals(m))` shows the first three tests on its Q-Q panel. The code below, not run in the wiki build because DHARMa is not installed there, simulates residuals and runs the main tests, including a spatial test with coordinates.

With large n everything is significant, so read the effect sizes, such as the [[check_overdispersion()|dispersion ratio]] or observed against expected zeros, and the plots. They are used in the GLM and [[Mixed Effects Model|mixed model]] labs ([[Course Website]]). Don't run every test and fix every flag: use the tests for the assumptions you care about, and judge size, not just p.

```r
# norun (the DHARMa package is not installed in the wiki's build environment)
library(DHARMa); res <- simulateResiduals(fit, n = 500)
testUniformity(res); testDispersion(res); testOutliers(res); testZeroInflation(res)
testSpatialAutocorrelation(res, x = d$lon, y = d$lat)
```

## Connections
- **Builds on:** [[DHARMa Simulated Residuals]], [[Model Validation]], [[Underdispersion]], [[Fitted Value]], [[check_overdispersion()]]
- **Leads to:** [[Overdispersion]], [[Zero Inflation]], [[Spatial Autocorrelation]], [[Outlier]], [[Moran's I]], [[Durbin-Watson Test]], [[Repeated Measures]], [[Mixed Effects Model]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

Which DHARMa function tests for overdispersion?
??
testDispersion().
++++

What does testUniformity() test?
??
Whether simulated residuals are uniformly distributed (Kolmogorov-Smirnov test).
++++
