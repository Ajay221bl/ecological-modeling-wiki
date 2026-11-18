---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "A GAMM is a GAM with random effects or residual correlation structures, combining smooth terms with the grouping and dependence tools of mixed models."
aliases:
  - "Additive mixed model"
  - "GAMM and Additive Mixed Models"
  - "gamm()"
  - "gamm4()"
  - "Generalized additive mixed model"
status: seedling
---

# GAMM

A **GAMM** is a GAM with [[Random Effect|random effects]] or residual correlation structures, combining smooth terms with the grouping and dependence tools of mixed models ([[Generalized Additive Model]], [[Mixed Effects Model]], [[Correlation Structure]]). There are three routes: `mgcv::gam()` with `bs = "re"` smooths, the simplest and good for any family ([[Random-effect Smooth]]); `mgcv::gamm()`, which uses nlme and so accepts `correlation =` structures such as AR(1) or spatial ones ([[nlme lme()]]); and `gamm4::gamm4()`, which uses lme4 for crossed effects and large groupings.

`gamm()` returns two objects, `$gam` for the smooths and `$lme` for the random part. For non-Gaussian families it uses [[Penalized Quasi-likelihood]], so `gam()` with Laplace and [[REML]] is often preferable. In the code below five sites over 30 years share a smooth trend: `gamm()` gives the year smooth an edf of 6.85, a site SD of 0.60, a residual SD of 0.29 and an AR(1) correlation of 0.05, near zero because the simulated residuals were independent ([[AR(1) Error Structure]]).

[[Zuur et al. 2009 Ch13]] and its case studies use additive mixed models for [[Time Series|time series]] and [[Hierarchical Data|nested data]] ([[Course Website]]). `gamm()` and `gam()` do not give identical results: they use different fitting engines and can differ, especially for non-Gaussian data.

```r
library(mgcv); set.seed(26); d <- data.frame(year = rep(1:30, 5), site = factor(rep(1:5, each = 30))); d$y <- sin(d$year / 5) + rnorm(5, 0, 0.5)[d$site] + rnorm(150, 0, 0.3)
m <- gamm(y ~ s(year), random = list(site = ~ 1), correlation = corAR1(form = ~ year | site), data = d); sds <- as.numeric(VarCorr(m$lme)[, "StdDev"]); round(c(edf_year = summary(m$gam)$edf, sd_site = sds[length(sds) - 1], sd_resid = sds[length(sds)], phi = coef(m$lme$modelStruct$corStruct, unconstrained = FALSE)[[1]]), 2)
```

## Connections
- **Builds on:** [[Generalized Additive Model]], [[Mixed Effects Model]], [[Correlation Structure]], [[Random Effect]], [[REML]], [[Time Series]], [[Hierarchical Data]]
- **Leads to:** [[Random-effect Smooth]], [[Hierarchical GAM]], [[Penalized Quasi-likelihood]]
- **See also:** [[AR(1) Error Structure]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What can mgcv's gamm() do that gam() cannot?
??
Include nlme residual correlation structures such as corAR1.
++++
