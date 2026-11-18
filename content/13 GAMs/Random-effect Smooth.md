---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "A random-effect smooth uses mgcv's penalty machinery to fit ordinary random intercepts or slopes inside a GAM."
aliases:
  - "bs = \"re\""
  - "s(site, bs = \"re\")"
  - "Random effects in mgcv"
  - "Random-effect Smooth (bs = \"re\")"
status: seedling
---

# Random-effect Smooth

A **random-effect smooth** uses mgcv's penalty machinery to fit ordinary [[Random Intercept|random intercepts]] or slopes inside a GAM ([[Random Effect]], [[Smoothing Function s()]]). `s(site, bs = "re")` is a random intercept by site, which must be a factor; `s(x, site, bs = "re")` is a [[Random Slope|random slope]] of x by site, uncorrelated with the intercept. The ridge penalty on these coefficients is equivalent to a normal random effect, and [[REML]] estimates the variance ([[REML for Smoothness Selection]]).

`gam.vcomp(m)` reports the implied SDs. It is slower than lme4 for many levels but fully integrated with smooths, and it can be dropped in predictions with `exclude = "s(site)"` ([[Prediction from a GAM]]). In the code below `gam()` with `s(Subject, bs = "re")` on `sleepstudy` gives a subject SD of 37.12, exactly what `lmer()` gives ([[lmer()|lmer() and glmer()]]).

Pedersen's model GI uses `s(fac, bs = "re")` ([[Pedersen et al. 2019]], [[GAMM]]). [[Generalized Additive Model|GAMs]] can have random effects: `bs = "re"` adds them directly.

```r
library(mgcv); data(sleepstudy, package = "lme4"); m <- gam(Reaction ~ Days + s(Subject, bs = "re"), data = sleepstudy, method = "REML"); invisible(capture.output(vc <- gam.vcomp(m)))
round(c(gam_sd_subject = vc[1, 1], lmer_sd_subject = attr(lme4::VarCorr(lme4::lmer(Reaction ~ Days + (1 | Subject), sleepstudy))$Subject, "stddev")[[1]]), 2)
```

## Connections
- **Builds on:** [[Random Effect]], [[Smoothing Function s()]], [[Random Intercept]], [[Random Slope]], [[REML]], [[Generalized Additive Model]]
- **Leads to:** [[GAMM]], [[REML for Smoothness Selection]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

How do you add a random intercept by site in mgcv?
??
s(site, bs = "re") with site as a factor.
++++
