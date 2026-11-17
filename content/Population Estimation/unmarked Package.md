---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "unmarked"
  - "unmarkedFrameOccu"
status: seedling
---

# unmarked Package

**In one line:** unmarked is an R package that fits hierarchical models of animal occurrence and abundance from unmarked-animal survey data, including occupancy, N-mixture and distance-sampling models, by maximum likelihood.

> [!info] Before this, it helps to know
> [[Single-season Occupancy]] · [[Maximum Likelihood Estimation]] · [[Model Formula Syntax|Formula Syntax in R]]

## Start from zero
1. **Data object first:** `unmarkedFrameOccu(y = , siteCovs = , obsCovs = )`.
2. **Double formula:** `occu(~ detection ~ occupancy, data)`. Detection comes first.
3. **Other fitters:**
   - `colext()` for dynamic occupancy.
   - `pcount()` for N-mixture counts.
   - `distsamp()` for distance sampling.
   - `multinomPois()` for removal and double-observer data.
4. **Estimates are on the logit (or log) scale;** use `backTransform()` or `predict()` for probabilities.
5. **Goodness of fit:** `parboot()` with a fit statistic; the AICcmodavg package adds MacKenzie-Bailey tests.
6. **Not installed in this wiki's R,** so the code below is shown but not run; the base-R `optim()` code in [[Single-season Occupancy]] fits the same likelihood.

## In R
```r
# norun (unmarked is not installed here)
library(unmarked)
umf <- unmarkedFrameOccu(y = y, siteCovs = data.frame(forest = forest), obsCovs = list(wind = wind))
m1 <- occu(~ wind ~ forest, data = umf)
summary(m1); backTransform(m1, type = "det")   # only valid if p has no covariates
predict(m1, type = "state", newdata = data.frame(forest = c(0.2, 0.8)))
```

## In the course
Occupancy guest lecture ([[Course Website]]).

## Common confusions
- **"occu(~ forest ~ wind)" puts forest on occupancy.** The first formula is detection.

## Explain it back
- What order are the two formulas in occu()?

*Pass test:* you can set up and fit an occupancy model in unmarked.

## Connections
- **Builds on:** [[Single-season Occupancy]], [[Maximum Likelihood Estimation]]
- **Leads to:** [[N-mixture Model]], [[Distance Sampling]], [[Multi-season Occupancy]]
- **Part of:** [[MOC - Population Estimation]], molecular note [[Occupancy Workflow in R]]

## Flashcards

In unmarked's occu(~ a ~ b), what do a and b model?
??
a: detection; b: occupancy.
++++

Which unmarked function fits N-mixture models?
??
pcount().
++++
