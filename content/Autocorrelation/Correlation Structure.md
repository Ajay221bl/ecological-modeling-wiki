---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "Correlation structures"
  - "correlation argument"
  - "corStruct"
  - "nlme correlation structures"
  - "Residual correlation structure"
status: seedling
---

# Correlation Structure

**In one line:** a correlation structure is a small formula, with one or two parameters, that says how strongly two residuals are correlated given how far apart they are in time or space.

> [!info] Before this, it helps to know
> [[Variance-Covariance Matrix|Covariance Matrix]] (what it fills in) · [[Generalized Least Squares]] (where it is used)

## Start from zero
1. **With n observations there are n(n − 1)/2 pairwise correlations.** Far too many to estimate freely.
2. **A structure reduces them to a few parameters.**
3. **Temporal (nlme):** `corCompSymm` (all pairs equally correlated), `corAR1` (decays as φ^lag), `corCAR1` (continuous time), `corARMA(p, q)`.
4. **Spatial:** `corExp`, `corGaus`, `corSpher`, `corLin`, `corRatio`, each optionally with a nugget.
5. **Syntax:** `correlation = corAR1(form = ~ year | site)`: within each site, ordered by year.
6. **Works in `gls()`, `lme()`, and `gamm()`.** glmmTMB offers `ar1()`, `exp()` and others for GLMMs.
7. **Choose among structures with AIC** and check with a variogram or ACF of normalised residuals.

## In R
```r
library(nlme); round(corMatrix(Initialize(corAR1(0.6), data = data.frame(t = 1:5))), 2)       # correlations decay as 0.6^lag
```

## In the course
[[Zuur et al. 2009 Ch6]] and [[Zuur et al. 2009 Ch7]] work through each structure. [[Diniz-Filho et al. 2003]].

## Common confusions
- **"The correlation structure is fitted to the raw data."** It describes the residuals.

## Explain it back
- Why can't all pairwise correlations be estimated freely?

*Pass test:* you can write correlation = ... for time and space.

## Connections
- **Builds on:** [[Variance-Covariance Matrix|Covariance Matrix]], [[Generalized Least Squares]]
- **Leads to:** [[AR(1) Error Structure]], [[ARMA Error Structure]], [[Compound Symmetry]], [[Spatial Correlation Functions]]
- **Part of:** [[MOC - Autocorrelation]]

## Flashcards

What does a correlation structure do in a GLS?
??
Specifies residual correlation as a function of separation using a few parameters.
++++

In nlme, what does correlation = corAR1(form = ~ year | site) mean?
??
AR(1) correlation among residuals ordered by year, separately within each site.
++++
