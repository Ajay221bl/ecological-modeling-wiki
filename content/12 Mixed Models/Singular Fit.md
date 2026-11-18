---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "A fit is singular when some random-effect variance is estimated as zero or some correlation as exactly ±1, meaning the data can't support the random structure as specified."
aliases:
  - "isSingular()"
  - "Boundary (singular) fit"
  - "Singular model"
  - "Variance estimated as zero"
status: seedling
---

# Singular Fit

A fit is **singular** when some random-effect variance is estimated as zero, or some correlation as exactly ±1, meaning the data can't support the random structure as written ([[Variance Components]], [[Correlated Random Intercepts and Slopes]]). lme4 says "boundary (singular) fit: see help('isSingular')". Causes are too few groups, too little replication within groups, genuinely tiny group variation, or an overly complex random structure.

The fixed-effect estimates are still valid, but the model is effectively simpler than written; [[Harrison et al. 2018]] note a zero variance is not a problem in itself, but the model is then equivalent to a GLM. In the code below four groups with no real group variation give a group SD of exactly 0 and the singular-fit message.

[[Oberpriller et al. 2022]] recommend starting with the [[Random Effect|random effect]] and switching the grouping to a [[Fixed Effect|fixed effect]] only if the fit is singular ([[How Many Levels for a Random Effect]]). It comes up in both [[Mixed Effects Model|mixed models]] labs ([[Course Website]]). A singular fit does not mean the results are wrong; it means the random structure is too rich for the data.

```r
library(lme4); set.seed(2); d <- data.frame(g = factor(rep(1:4, each = 10)), x = rnorm(40)); d$y <- 1 + 0.5 * d$x + rnorm(40)       # no real group variation, 4 groups
m <- lmer(y ~ x + (1 | g), data = d); c(singular = isSingular(m), sd_g = round(attr(VarCorr(m)$g, "stddev")[[1]], 3))
```

## Connections
- **Builds on:** [[Variance Components]], [[Correlated Random Intercepts and Slopes]], [[Random Effect]], [[Fixed Effect]], [[Mixed Effects Model]]
- **Leads to:** [[How Many Levels for a Random Effect]], [[Convergence Warnings]], [[Priors on Standard Deviations]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What is a singular fit?
??
A mixed model fit where a variance is estimated as zero or a correlation as ±1.
++++

What do Oberpriller et al. recommend after a singular fit with few levels?
??
Switch the grouping variable to a fixed effect.
++++
