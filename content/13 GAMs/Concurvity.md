---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "concurvity()"
  - "Non-linear collinearity"
status: seedling
---

# Concurvity

**In one line:** concurvity is the GAM version of collinearity: one smooth term can be closely approximated by a combination of the other smooths, so their separate effects are poorly identified.

> [!info] Before this, it helps to know
> [[Collinearity]] · [[Generalized Additive Model]]

## Start from zero
1. **`concurvity(m, full = TRUE)`** reports, for each smooth, how much of it can be explained by the others: values from 0 (none) to 1 (total).
2. **Three versions:** worst, observed, estimate. "Worst" is the most pessimistic.
3. **Values above about 0.8** deserve attention.
4. **Common causes:** spatial smooth plus spatially structured covariates; time smooth plus trending covariates.
5. **Consequences:** unstable smooths, wide intervals, effects shifting between terms.
6. **Remedies:** drop or combine terms, rethink which smooth carries which hypothesis.
7. **Zuur Ch3 discusses dealing with collinearity in GAMs.**

## In R
```r
library(mgcv); set.seed(23); x1 <- runif(300); x2 <- x1 + rnorm(300, 0, 0.05); y <- sin(2 * pi * x1) + rnorm(300, 0, 0.3)
round(concurvity(gam(y ~ s(x1) + s(x2), method = "REML"), full = TRUE)["worst", ], 2)
```

## In the course
[[Zuur et al. 2009 Ch3]] (GAM example dealing with collinearity).

## Common confusions
- **"Low VIFs mean no concurvity."** VIF checks linear relations only.

## Explain it back
- What does a concurvity of 0.95 mean?

*Pass test:* you can check and respond to concurvity.

## Connections
- **Builds on:** [[Collinearity]], [[Generalized Additive Model]]
- **Leads to:** [[Spatial Smooths]], [[Variance Inflation Factor]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What is concurvity?
??
The non-linear analogue of collinearity: a smooth can be approximated by the other smooths in the model.
++++
