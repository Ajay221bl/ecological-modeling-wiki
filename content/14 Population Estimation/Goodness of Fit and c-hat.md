---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "In mark-recapture analysis, goodness of fit tests whether the most general model fits the data, and c-hat (ĉ) measures overdispersion, used to inflate standard errors and switch from AIC to QAIC."
aliases:
  - "c-hat"
  - "ĉ"
  - "Variance inflation factor (MARK)"
  - "Median c-hat"
  - "RELEASE"
  - "Bootstrap goodness of fit"
  - "QAIC adjustment"
status: seedling
---

# Goodness of Fit and c-hat

In mark-recapture analysis, **goodness of fit** tests whether the most general model fits the data, and **c-hat** (ĉ) measures overdispersion, used to inflate standard errors and switch from AIC to QAIC ([[Overdispersion]], [[Model Validation]], [[AIC]]). Test the most general model, for example φ(t)p(t); if it fits, simpler models nested within it can be compared ([[Age and Time Structure in Survival Models]]). ĉ is roughly the observed deviance divided by its expected value under the model, and ĉ = 1 means no overdispersion.

Methods include the RELEASE tests (TEST 2 and TEST 3) for CJS, a parametric bootstrap and median ĉ in MARK, and the MacKenzie-Bailey test for occupancy ([[Program MARK]], [[Parametric Bootstrap]]). If 1 < ĉ < about 3, multiply variances by ĉ, so SEs by √ĉ, and use QAICc ([[QAIC]]); ĉ much above 3 suggests structural problems such as transients or trap response rather than overdispersion. In the code below ĉ = 1.8 turns an SE of 0.050 into 0.067.

It is the same logic as [[Quasi-Poisson]] dispersion in GLMs, and is general Program MARK practice behind [[Powell and Gale 2015]] Ch4 and Ch10, not named in the course sources. A big ĉ is not fixed by using QAIC: QAIC handles mild overdispersion, and a very large ĉ signals a wrong model.

```r
chat <- 1.8; se <- 0.05; c(se_adjusted = se * sqrt(chat))
```

## Connections
- **Builds on:** [[Overdispersion]], [[Model Validation]], [[AIC]]
- **Leads to:** [[QAIC]], [[Program MARK]], [[Cormack-Jolly-Seber Model]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What is c-hat in mark-recapture?
??
An overdispersion factor; variances are multiplied by ĉ and QAIC replaces AIC.
++++

Which model gets the goodness-of-fit test?
??
The most general model in the set.
++++
