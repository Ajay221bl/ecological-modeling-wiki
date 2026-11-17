---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
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

**In one line:** DHARMa's residual tests turn the main diagnostic questions (correct distribution, correct dispersion, outliers, zero inflation, autocorrelation) into formal tests on simulated residuals.

> [!info] Before this, it helps to know
> [[DHARMa Simulated Residuals]] (what is tested) · [[Model Validation]] (the purpose)

## Start from zero
1. **`testUniformity()`:** Kolmogorov-Smirnov test of whether residuals are uniform. Failure: wrong distribution overall.
2. **`testDispersion()`:** compares the spread of observed and simulated data. Ratio > 1 means overdispersion, < 1 underdispersion.
3. **`testOutliers()`:** too many observations outside the entire simulated range?
4. **`testZeroInflation()`:** more zeros than the model simulates?
5. **`testQuantiles()`:** do the 25%, 50% and 75% quantiles of residuals stay flat across fitted values?
6. **`testSpatialAutocorrelation()`, `testTemporalAutocorrelation()`:** Moran's I and Durbin-Watson on residuals (aggregate repeated measures first).
7. **`plot(simulateResiduals(m))`** shows the first three on the Q-Q panel.
8. **With large n everything is significant.** Read the effect sizes (dispersion ratio, observed vs expected zeros) and the plots.

## In R
```r
# norun (the DHARMa package is not installed in the wiki's build environment)
library(DHARMa); res <- simulateResiduals(fit, n = 500)
testUniformity(res); testDispersion(res); testOutliers(res); testZeroInflation(res)
testSpatialAutocorrelation(res, x = d$lon, y = d$lat)
```

## In the course
GLM and mixed model labs ([[Course Website]]).

## Common confusions
- **"Run every test and fix every flag."** Use the tests for the assumptions you care about, and judge size, not just p.

## Explain it back
- What does a dispersion ratio of 3 mean?

*Pass test:* you can choose and interpret DHARMa tests.

## Connections
- **Builds on:** [[DHARMa Simulated Residuals]], [[Model Validation]]
- **Leads to:** [[Overdispersion]], [[Zero Inflation]], [[Spatial Autocorrelation]], [[Outlier]]
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
