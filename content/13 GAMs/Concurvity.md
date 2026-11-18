---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "Concurvity is the GAM version of collinearity: one smooth term can be closely approximated by a combination of the other smooths, so their separate effects are poorly identified."
aliases:
  - "concurvity()"
  - "Non-linear collinearity"
status: seedling
---

# Concurvity

**Concurvity** is the GAM version of collinearity: one [[Smoother|smooth term]] can be closely approximated by a combination of the other smooths, so their separate effects are poorly identified ([[Collinearity]], [[Generalized Additive Model]]). `concurvity(m, full = TRUE)` reports, for each smooth, how much of it the others can explain, from 0 (none) to 1 (total), in three versions: worst, observed and estimate, with "worst" the most pessimistic. Values above about 0.8 deserve attention.

Common causes are a spatial smooth with spatially structured [[Predictor Variable|covariates]] and a time smooth with trending covariates ([[Spatial Smooths]]). The consequences are unstable smooths, wide intervals and effects shifting between terms; remedies are to drop or combine terms and rethink which smooth carries which hypothesis. In the code below x2 is x1 plus a little noise, and the worst-case concurvity is 0.98 for both smooths.

[[Zuur et al. 2009 Ch3]] discuss dealing with collinearity in GAMs. Low VIFs don't mean no concurvity, since a [[Variance Inflation Factor]] checks only linear relations.

```r
library(mgcv); set.seed(23); x1 <- runif(300); x2 <- x1 + rnorm(300, 0, 0.05); y <- sin(2 * pi * x1) + rnorm(300, 0, 0.3)
round(concurvity(gam(y ~ s(x1) + s(x2), method = "REML"), full = TRUE)["worst", ], 2)
```

## Connections
- **Builds on:** [[Collinearity]], [[Generalized Additive Model]], [[Smoother]], [[Predictor Variable]]
- **Leads to:** [[Spatial Smooths]], [[Variance Inflation Factor]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What is concurvity?
??
The non-linear analogue of collinearity: a smooth can be approximated by the other smooths in the model.
++++
