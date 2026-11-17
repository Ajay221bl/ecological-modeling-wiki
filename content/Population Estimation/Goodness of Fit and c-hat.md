---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
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

**In one line:** in mark-recapture analysis, goodness of fit tests whether the most general model fits the data, and c-hat (ĉ) measures overdispersion, used to inflate standard errors and switch from AIC to QAIC.

> [!info] Before this, it helps to know
> [[Overdispersion]] · [[Model Validation]] · [[AIC]]

## Start from zero
1. **Test the most general model** (for example φ(t)p(t)); if it fits, simpler models nested within it can be compared.
2. **ĉ ≈ observed deviance / its expected value** under the model. ĉ = 1 means no overdispersion.
3. **Methods:** RELEASE tests (TEST 2 and TEST 3) for CJS, parametric bootstrap, median ĉ in MARK; MacKenzie-Bailey test for occupancy.
4. **If 1 < ĉ < about 3:** multiply variances by ĉ (SE by √ĉ) and use QAICc.
5. **ĉ much above 3** suggests structural problems (transients, trap response) rather than overdispersion.
6. **Same logic as quasi-Poisson** dispersion in GLMs.

## In R
```r
chat <- 1.8; se <- 0.05; c(se_adjusted = se * sqrt(chat))
```

## In the course
General Program MARK practice behind [[Powell and Gale 2015]] Ch4 and Ch10 (not named in the course sources). [[Quasi-Poisson]] for the GLM version.

## Common confusions
- **"A big ĉ is fixed by using QAIC."** QAIC handles mild overdispersion; a very large ĉ signals a wrong model.

## Explain it back
- Which model do you test for goodness of fit?

*Pass test:* you can estimate and use ĉ.

## Connections
- **Builds on:** [[Overdispersion]], [[Model Validation]], [[AIC]]
- **Leads to:** [[QAIC]], [[Program MARK]], [[Cormack-Jolly-Seber Model]]
- **Part of:** [[MOC - Population Estimation]]

## Flashcards

What is c-hat in mark-recapture?
??
An overdispersion factor; variances are multiplied by ĉ and QAIC replaces AIC.
++++

Which model gets the goodness-of-fit test?
??
The most general model in the set.
++++
