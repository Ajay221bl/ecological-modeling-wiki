---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "The intraclass correlation is the share of the total variance that lies between groups, which equals the correlation between two observations from the same group."
aliases:
  - "ICC"
  - "Intra-class correlation coefficient"
  - "Repeatability"
  - "Adjusted ICC"
status: seedling
---

# Intraclass Correlation

The **intraclass correlation** (ICC) is the share of the total variance that lies between groups, ICC = σ²_group / (σ²_group + σ²_residual), which equals the correlation between two observations from the same group ([[Variance Components]], [[Correlation]]). Near 0, groups barely differ and observations are almost independent; near 1, observations within a group are nearly identical and the group is the real unit of information. In behavioural ecology it is called repeatability: how consistent individuals are (Nakagawa and Schielzeth 2010).

`performance::icc(m)` computes it. In the code below an [[Null Model|intercept-only model]] of `sleepstudy` gives an ICC of 0.395 both by hand and from `performance`. For GLMMs the [[Residual Standard Error|residual variance]] has to be defined on the [[Link Scale|link scale]], π²/3 for the [[Logit Link|logit]], so ICCs are approximate.

It has a design implication: with a high ICC, adding more groups helps far more than adding observations per group ([[Random Intercept]], [[Harrison et al. 2018]]). A high ICC does not mean a strong [[Predictor Variable|predictor]]; it is about grouping, not predictors.

```r
library(lme4); m <- lmer(Reaction ~ 1 + (1 | Subject), data = sleepstudy); v <- as.data.frame(VarCorr(m))$vcov
round(c(ICC_by_hand = v[1] / sum(v), performance = performance::icc(m)$ICC_adjusted), 3)
```

## Connections
- **Builds on:** [[Variance Components]], [[Correlation]], [[Null Model]], [[Residual Standard Error]], [[Link Scale]], [[Logit Link]], [[Predictor Variable]]
- **Leads to:** [[Compound Symmetry]], [[Effective Sample Size|Effective Sample Size under Autocorrelation]], [[Pseudoreplication]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

How is the intraclass correlation computed?
??
σ²_group / (σ²_group + σ²_residual).
++++

What is repeatability in behavioural ecology?
??
The intraclass correlation of a trait measured repeatedly on the same individuals.
++++
