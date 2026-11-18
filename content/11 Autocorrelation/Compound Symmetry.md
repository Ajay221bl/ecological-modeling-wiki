---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "Compound symmetry assumes every pair of observations within a group is equally correlated, however far apart in time they are."
aliases:
  - "corCompSymm()"
  - "Exchangeable correlation"
  - "Compound symmetric"
status: seedling
---

# Compound Symmetry

**Compound symmetry** assumes every pair of observations within a group is equally correlated, however far apart in time they are ([[Correlation Structure]]). It has one parameter, the common correlation ρ, and ignores time order, so day 1 and day 2 are as correlated as day 1 and day 100. In the code below `corCompSymm(0.4)` for four observations gives 0.4 for every pair.

A [[Random Intercept]] model implies compound symmetry within groups, with correlation σ²_group / (σ²_group + σ²), the [[Intraclass Correlation]]. In nlme it is `corCompSymm(form = ~ 1 | site)`.

It is often too simple for [[Time Series|time series]] but reasonable for subsamples with no order, such as several quadrats in a plot ([[Zuur et al. 2009 Ch6]]). Compound symmetry and the [[AR(1) Error Structure]] are not the same: AR(1) decays with lag, and compound symmetry doesn't.

```r
library(nlme); round(corMatrix(Initialize(corCompSymm(0.4), data = data.frame(t = 1:4))), 2)
```

## Connections
- **Builds on:** [[Correlation Structure]], [[Random Intercept]], [[Time Series]]
- **Leads to:** [[AR(1) Error Structure]], [[Intraclass Correlation]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

What does compound symmetry assume?
??
All pairs of observations within a group share one correlation, regardless of time separation.
++++

What correlation structure does a random intercept imply?
??
Compound symmetry within groups.
++++
