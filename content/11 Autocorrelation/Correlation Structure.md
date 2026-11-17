---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "A correlation structure is a small formula, with one or two parameters, that says how strongly two residuals are correlated given how far apart they are in time or space."
aliases:
  - "Correlation structures"
  - "correlation argument"
  - "corStruct"
  - "nlme correlation structures"
  - "Residual correlation structure"
status: seedling
---

# Correlation Structure

With n observations there are n(n − 1)/2 pairwise correlations, far too many to estimate freely. A **correlation structure** reduces them to a small formula, with one or two parameters, saying how strongly two residuals are correlated given how far apart they are in time or space ([[Variance-Covariance Matrix|Covariance Matrix]], [[Generalized Least Squares]]). In nlme, the temporal structures are `corCompSymm`, all pairs equally correlated ([[Compound Symmetry]]); `corAR1`, decaying as φ^lag ([[AR(1) Error Structure]]); `corCAR1` for continuous time; and `corARMA(p, q)` ([[ARMA Error Structure]]). The spatial ones are `corExp`, `corGaus`, `corSpher`, `corLin` and `corRatio`, each optionally with a nugget ([[Spatial Correlation Functions]]).

The syntax `correlation = corAR1(form = ~ year | site)` means within each site, ordered by year. Structures work in `gls()`, `lme()` and `gamm()`, and glmmTMB offers `ar1()`, `exp()` and others for GLMMs. In the code below `corAR1(0.6)` for five time points gives correlations of 0.60, 0.36, 0.22 and 0.13 at lags 1 to 4.

Choose among structures with AIC and check with a variogram or ACF of the normalised residuals. [[Zuur et al. 2009 Ch6]] and [[Zuur et al. 2009 Ch7]] work through each structure ([[Diniz-Filho et al. 2003]]). The correlation structure describes the residuals, not the raw data.

```r
library(nlme); round(corMatrix(Initialize(corAR1(0.6), data = data.frame(t = 1:5))), 2)       # correlations decay as 0.6^lag
```

## Connections
- **Builds on:** [[Variance-Covariance Matrix|Covariance Matrix]], [[Generalized Least Squares]]
- **Leads to:** [[AR(1) Error Structure]], [[ARMA Error Structure]], [[Compound Symmetry]], [[Spatial Correlation Functions]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

What does a correlation structure do in a GLS?
??
Specifies residual correlation as a function of separation using a few parameters.
++++

In nlme, what does correlation = corAR1(form = ~ year | site) mean?
??
AR(1) correlation among residuals ordered by year, separately within each site.
++++
