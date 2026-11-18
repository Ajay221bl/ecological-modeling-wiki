---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Unmarked is an R package that fits hierarchical models of animal occurrence and abundance from unmarked-animal survey data, including occupancy, N-mixture and distance-sampling models, by maximum likelihood."
aliases:
  - "unmarked"
  - "unmarkedFrameOccu"
status: seedling
---

# unmarked Package

**unmarked** is an [[Packages in R|R package]] that fits [[Hierarchical Model|hierarchical models]] of animal occurrence and abundance from unmarked-animal survey data, including occupancy, N-mixture and distance-sampling models, by [[Maximum Likelihood Estimation]] ([[Single-season Occupancy]], [[Model Formula Syntax|Formula Syntax in R]]). You build the data object first, `unmarkedFrameOccu(y = , siteCovs = , obsCovs = )`, then fit with a double formula, `occu(~ detection ~ occupancy, data)`, where detection comes first ([[Site Covariates]], [[Observation Covariates]]). Other fitters are `colext()` for dynamic occupancy ([[Multi-season Occupancy]]), `pcount()` for N-mixture counts ([[N-mixture Model]]), `distsamp()` for distance sampling ([[Distance Sampling]]) and `multinomPois()` for removal and double-observer data ([[Removal Sampling]], [[Double-observer Methods]]).

Estimates are on the [[Logit Link|logit]] or log scale, so use `backTransform()` or `predict()` for probabilities; [[Model Validation|goodness of fit]] uses `parboot()` with a fit statistic, and the [[modavg()|AICcmodavg]] package adds MacKenzie-Bailey tests ([[Goodness of Fit and c-hat]]). unmarked is not installed in this wiki's R, so the code below is shown but not run; the base-R `optim()` code in [[Single-season Occupancy]] fits the same likelihood. It shows a model with wind on detection and forest on occupancy, and predicted occupancy at forest cover 0.2 and 0.8.

It is one of five tools on the guest lecture's software slide, beside MARK ([[Program MARK|RMark]]), PRESENCE (RPresence), ubms for [[Random Effect|random effects]] and spOccupancy; `occuMulti()` fits multi-species models ([[Multi-species Occupancy Model|Multi-species Occupancy]], [[ubms Package]], [[spOccupancy Package]], [[Program PRESENCE]], [[Occupancy Guest Lecture]], [[Course Website]]). [[Happe et al. 2020]] fitted their fisher models in unmarked. `occu(~ forest ~ wind)` puts forest on detection, not occupancy: the first formula is always detection.

```r
# norun (unmarked is not installed here)
library(unmarked)
umf <- unmarkedFrameOccu(y = y, siteCovs = data.frame(forest = forest), obsCovs = list(wind = wind))
m1 <- occu(~ wind ~ forest, data = umf)
summary(m1); backTransform(m1, type = "det")   # only valid if p has no covariates
predict(m1, type = "state", newdata = data.frame(forest = c(0.2, 0.8)))
```

## Connections
- **Builds on:** [[Single-season Occupancy]], [[Maximum Likelihood Estimation]], [[Packages in R]], [[Hierarchical Model]], [[Logit Link]], [[Model Validation]], [[modavg()]], [[Program MARK]], [[Random Effect]]
- **Leads to:** [[N-mixture Model]], [[Distance Sampling]], [[Multi-season Occupancy]], [[ubms Package]], [[spOccupancy Package]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Occupancy Workflow in R]], [[Choosing Occupancy Software]]

## Flashcards

In unmarked's occu(~ a ~ b), what do a and b model?
??
a: detection; b: occupancy.
++++

Which unmarked function fits N-mixture models?
??
pcount().
++++
