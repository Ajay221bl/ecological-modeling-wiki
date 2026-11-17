---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "isSingular()"
  - "Boundary (singular) fit"
  - "Singular model"
  - "Variance estimated as zero"
status: seedling
---

# Singular Fit

**In one line:** a fit is singular when some random-effect variance is estimated as zero or some correlation as exactly ±1, meaning the data can't support the random structure as specified.

> [!info] Before this, it helps to know
> [[Variance Components]] · [[Correlated Random Intercepts and Slopes]]

## Start from zero
1. **lme4 message:** "boundary (singular) fit: see help('isSingular')".
2. **Causes:** too few groups, too little within-group replication, genuinely tiny group variation, or an overly complex random structure.
3. **The fixed-effect estimates are still valid,** but the model is effectively simpler than written.
4. **Options:** drop the zero variance term, remove correlations (`||`), drop random slopes, or go Bayesian with weakly informative priors that keep variances off zero.
5. **Oberpriller et al. (2022):** start with the random effect; switch the grouping to a fixed effect if the fit is singular.
6. **Harrison et al.:** a zero variance is not a problem in itself, but the model is then equivalent to a GLM.

## In R
```r
library(lme4); set.seed(2); d <- data.frame(g = factor(rep(1:4, each = 10)), x = rnorm(40)); d$y <- 1 + 0.5 * d$x + rnorm(40)       # no real group variation, 4 groups
m <- lmer(y ~ x + (1 | g), data = d); c(singular = isSingular(m), sd_g = round(attr(VarCorr(m)$g, "stddev")[[1]], 3))
```

## In the course
Linear and generalized linear mixed models labs ([[Course Website]]). [[Oberpriller et al. 2022]]. [[Harrison et al. 2018]].

## Common confusions
- **"A singular fit means the results are wrong."** It means the random structure is too rich for the data.

## Explain it back
- What two numbers in VarCorr signal singularity?

*Pass test:* you can diagnose and respond to a singular fit.

## Connections
- **Builds on:** [[Variance Components]], [[Correlated Random Intercepts and Slopes]]
- **Leads to:** [[How Many Levels for a Random Effect]], [[Convergence Warnings]], [[Priors on Standard Deviations]]
- **Part of:** [[MOC - Mixed Models]]

## Flashcards

What is a singular fit?
??
A mixed model fit where a variance is estimated as zero or a correlation as ±1.
++++

What do Oberpriller et al. recommend after a singular fit with few levels?
??
Switch the grouping variable to a fixed effect.
++++
