---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "Additive mixed model"
  - "GAMM and Additive Mixed Models"
  - "gamm()"
  - "gamm4()"
  - "Generalized additive mixed model"
status: seedling
---

# GAMM

**In one line:** a GAMM is a GAM with random effects or residual correlation structures, combining smooth terms with the grouping and dependence tools of mixed models.

> [!info] Before this, it helps to know
> [[Generalized Additive Model]] · [[Mixed Effects Model]] · [[Correlation Structure]]

## Start from zero
1. **Three routes:**
   - `mgcv::gam()` with `bs = "re"` smooths (simplest, any family).
   - `mgcv::gamm()` uses nlme, so it accepts `correlation =` (AR1, spatial) structures.
   - `gamm4::gamm4()` uses lme4 for crossed effects and large groupings.
2. **gamm() returns two objects:** `$gam` for smooths and `$lme` for the random part.
3. **For non-Gaussian families gamm() uses PQL;** gam() with Laplace/REML is often preferable.
4. **Zuur et al. (2009 Ch13 and case studies)** use additive mixed models for time series and nested data.

## In R
```r
library(mgcv); set.seed(26); d <- data.frame(year = rep(1:30, 5), site = factor(rep(1:5, each = 30))); d$y <- sin(d$year / 5) + rnorm(5, 0, 0.5)[d$site] + rnorm(150, 0, 0.3)
m <- gamm(y ~ s(year), random = list(site = ~ 1), correlation = corAR1(form = ~ year | site), data = d); sds <- as.numeric(VarCorr(m$lme)[, "StdDev"]); round(c(edf_year = summary(m$gam)$edf, sd_site = sds[length(sds) - 1], sd_resid = sds[length(sds)], phi = coef(m$lme$modelStruct$corStruct, unconstrained = FALSE)[[1]]), 2)
```

## In the course
[[Zuur et al. 2009 Ch13]]. GAM lectures ([[Course Website]]).

## Common confusions
- **"gamm() and gam() give identical results."** They use different fitting engines and can differ, especially for non-Gaussian data.

## Explain it back
- Why use gamm() over gam()?

*Pass test:* you can choose a GAMM route.

## Connections
- **Builds on:** [[Generalized Additive Model]], [[Mixed Effects Model]], [[Correlation Structure]]
- **Leads to:** [[Random-effect Smooth]], [[Hierarchical GAM]], [[Penalized Quasi-likelihood]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What can mgcv's gamm() do that gam() cannot?
??
Include nlme residual correlation structures such as corAR1.
++++
