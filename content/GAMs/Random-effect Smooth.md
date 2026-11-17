---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "bs = \"re\""
  - "s(site, bs = \"re\")"
  - "Random effects in mgcv"
  - "Random-effect Smooth (bs = \"re\")"
status: seedling
---

# Random-effect Smooth

**In one line:** a random-effect smooth uses mgcv's penalty machinery to fit ordinary random intercepts or slopes inside a GAM.

> [!info] Before this, it helps to know
> [[Random Effect]] · [[Smoothing Function s()]]

## Start from zero
1. **`s(site, bs = "re")`:** random intercept by site (site must be a factor).
2. **`s(x, site, bs = "re")`:** random slope of x by site (no correlation with the intercept).
3. **The ridge penalty on these coefficients is equivalent to a normal random effect;** REML estimates the variance.
4. **`gam.vcomp(m)`** reports the implied SDs.
5. **Slower than lme4 for many levels** but fully integrated with smooths.
6. **Drop it in predictions:** `exclude = "s(site)"`.

## In R
```r
library(mgcv); data(sleepstudy, package = "lme4"); m <- gam(Reaction ~ Days + s(Subject, bs = "re"), data = sleepstudy, method = "REML"); invisible(capture.output(vc <- gam.vcomp(m)))
round(c(gam_sd_subject = vc[1, 1], lmer_sd_subject = attr(lme4::VarCorr(lme4::lmer(Reaction ~ Days + (1 | Subject), sleepstudy))$Subject, "stddev")[[1]]), 2)
```

## In the course
[[Pedersen et al. 2019]] (model GI uses `s(fac, bs = "re")`).

## Common confusions
- **"GAMs can't have random effects."** bs = "re" adds them directly.

## Explain it back
- Which function reports variance components of a gam?

*Pass test:* you can add random effects to a GAM.

## Connections
- **Builds on:** [[Random Effect]], [[Smoothing Function s()]]
- **Leads to:** [[GAMM]], [[REML for Smoothness Selection]]
- **Part of:** [[MOC - GAMs]]

## Flashcards

How do you add a random intercept by site in mgcv?
??
s(site, bs = "re") with site as a factor.
++++
