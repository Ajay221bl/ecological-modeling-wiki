---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "corCompSymm()"
  - "Exchangeable correlation"
  - "Compound symmetric"
status: seedling
---

# Compound Symmetry

**In one line:** compound symmetry assumes every pair of observations within a group is equally correlated, however far apart in time they are.

> [!info] Before this, it helps to know
> [[Correlation Structure]] · [[Random Intercept]] (which implies it)

## Start from zero
1. **One parameter:** the common correlation ρ.
2. **Ignores time order.** Day 1 and day 2 are as correlated as day 1 and day 100.
3. **A random intercept model implies compound symmetry** within groups: correlation = σ²_group / (σ²_group + σ²).
4. **nlme:** `corCompSymm(form = ~ 1 | site)`.
5. **Often too simple for time series** but reasonable for subsamples with no order (several quadrats in a plot).

## In R
```r
library(nlme); round(corMatrix(Initialize(corCompSymm(0.4), data = data.frame(t = 1:4))), 2)
```

## In the course
[[Zuur et al. 2009 Ch6]].

## Common confusions
- **"Compound symmetry and AR(1) are the same."** AR(1) decays with lag; compound symmetry doesn't.

## Explain it back
- Which random-effects model implies compound symmetry?

*Pass test:* you can link compound symmetry to a random intercept.

## Connections
- **Builds on:** [[Correlation Structure]], [[Random Intercept]]
- **Leads to:** [[AR(1) Error Structure]], [[Intraclass Correlation]]
- **Part of:** [[MOC - Autocorrelation]]

## Flashcards

What does compound symmetry assume?
??
All pairs of observations within a group share one correlation, regardless of time separation.
++++

What correlation structure does a random intercept imply?
??
Compound symmetry within groups.
++++
