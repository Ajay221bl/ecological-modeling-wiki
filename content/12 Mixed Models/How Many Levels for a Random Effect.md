---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "A random-effect variance is estimated from the number of groups, so with very few groups it is imprecise, and the usual rule of thumb asks for at least about five levels."
aliases:
  - "Number of levels"
  - "Few levels random effect"
  - "Five levels rule"
  - "Fixed or random with few levels"
  - "Random Effect with Few Levels"
  - "Few levels for a random effect"
  - "Number of levels of a random effect"
  - "Grouping factor with few groups"
  - "Random effect with one member per level"
status: seedling
---

# How Many Levels for a Random Effect

A random-effect variance is estimated from the number of groups, not the number of rows, so a variance from 3 groups is as uncertain as a variance from 3 numbers ([[Random Effect]], [[Variance Components]], [[Sample Size]]). The usual rule of thumb asks for at least about five levels; [[Harrison et al. 2018]] say at least five for a [[Random Intercept|random intercept]] to estimate the variance robustly, and with fewer the variance may collapse to zero ([[Singular Fit]]). In the code below the spread of an SD estimated from J groups (true SD 1) is 0.49 for J = 3, 0.37 for J = 5, 0.23 for J = 10 and 0.12 for J = 30: precision improves only slowly.

[[Oberpriller et al. 2022]] simulated 2 to 8 levels. For random-intercept data, treating the grouping as fixed or random did not change [[Type I Error|Type I error]] or power for the population-level slope; with varying slopes, a [[Random Slope|random slope]] and intercept model avoided overconfidence. They recommend starting with a [[Mixed Effects Model|mixed model]] regardless of the number of levels and switching to fixed only after a singular fit. If the variance itself is the target, as with [[Intraclass Correlation|repeatability]], you need many more groups, and Bayesian models with [[Weakly Informative Prior|weakly informative priors]] handle few levels more gracefully ([[Priors on Standard Deviations]]).

These are readings for the mixed models week. Fewer than five levels does not forbid a random effect; the rule is about the precision of the variance.

```r
set.seed(11); sds <- sapply(c(3, 5, 10, 30), function(J) sd(replicate(200, sd(rnorm(J, 0, 1)))))
setNames(round(sds, 2), paste0("J=", c(3, 5, 10, 30)))         # spread of an SD estimate shrinks slowly as groups increase
```

## Connections
- **Builds on:** [[Random Effect]], [[Variance Components]], [[Sample Size]], [[Random Intercept]], [[Type I Error]], [[Random Slope]], [[Mixed Effects Model]], [[Intraclass Correlation]], [[Weakly Informative Prior]]
- **Leads to:** [[Singular Fit]], [[Why use a random effect instead of a fixed effect]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What is the common rule of thumb for the number of random-effect levels?
??
At least about five.
++++

What did Oberpriller et al. (2022) recommend for few levels?
??
Start with a mixed model and switch to a fixed effect only if the fit is singular.
++++
