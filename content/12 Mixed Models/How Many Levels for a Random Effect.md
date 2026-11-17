---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Number of levels"
  - "Few levels random effect"
  - "Five levels rule"
  - "Fixed or random with few levels"
status: seedling
---

# How Many Levels for a Random Effect

**In one line:** a random-effect variance is estimated from the number of groups, so with very few groups it is imprecise, and the usual rule of thumb asks for at least about five levels.

> [!info] Before this, it helps to know
> [[Random Effect]] · [[Variance Components]] · [[Sample Size]]

## Start from zero
1. **A variance from 3 groups is like a variance from 3 numbers:** very uncertain.
2. **Harrison et al. (2018):** at least five levels for a random intercept to estimate the variance robustly. With fewer the variance may collapse to zero.
3. **Oberpriller et al. (2022),** simulating 2 to 8 levels: for random-intercept data, treating the grouping as fixed or random did not change Type I error or power for the population-level slope. With varying slopes, a random slope and intercept model avoided overconfidence. They recommend starting with a mixed model regardless of the number of levels and switching to fixed only after a singular fit.
4. **If the variance itself is the target** (repeatability), you need many more groups.
5. **Bayesian models with weakly informative priors** handle few levels more gracefully.

## In R
```r
set.seed(11); sds <- sapply(c(3, 5, 10, 30), function(J) sd(replicate(200, sd(rnorm(J, 0, 1)))))
setNames(round(sds, 2), paste0("J=", c(3, 5, 10, 30)))         # spread of an SD estimate shrinks slowly as groups increase
```

## In the course
[[Harrison et al. 2018]]. [[Oberpriller et al. 2022]] (reading for the mixed models week).

## Common confusions
- **"Below five levels a random effect is forbidden."** It is a rule of thumb about precision of the variance.

## Explain it back
- What did Oberpriller et al. find for random-intercept data with few levels?

*Pass test:* you can justify fixed or random for a small grouping factor.

## Connections
- **Builds on:** [[Random Effect]], [[Variance Components]], [[Sample Size]]
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
