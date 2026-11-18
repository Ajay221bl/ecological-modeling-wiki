---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "A random effect with few levels (fewer than about 5 groups) gives a poor estimate of the between-group variance, often exactly zero, so you may need to treat the grouping as a fixed effect or use a Bayesian prior."
aliases:
  - "Few levels for a random effect"
  - "Number of levels of a random effect"
  - "Five levels rule"
  - "Grouping factor with few groups"
  - "Random effect with one member per level"
status: seedling
---

# Random Effect with Few Levels

To guess how much heights vary between classrooms, you need several classrooms. With two you have one difference, which could be large or small by luck, and you cannot say much about the spread of classrooms in general. A random effect estimates exactly that spread, the between-group variance σ², from the group means ([[Random Effect]], [[Variance Components]]). With **few levels**, fewer than about 5 groups as Harrison et al. (2018) advise, there is too little information: the estimate is very uncertain and often comes out as exactly zero, a [[Singular Fit]]. In the simulation below, with a true between-group SD of 0.5 and 5 observations per group, 4 groups give an estimate of exactly zero about a third of the time and a 90% range from 0 to 1, while 20 groups almost never hit zero and stay between 0.2 and 0.7.

Homework 4 has this problem twice over. Region has only 4 levels, and region 2 contains a single site, so site and region are the same thing there and the model cannot tell site variation from region variation in it ([[Nested Random Effects]]). Your options: keep region as a random effect and accept a weak variance estimate, which still pools sites sensibly; make region a fixed effect, which estimates 3 contrasts and assumes nothing about regions beyond these 4; or drop region and let the site random effect (10 levels) carry the spatial grouping. Say which you chose and why, and check whether conclusions change ([[Fixed vs Random Effects]], [[Why use a random effect instead of a fixed effect]]).

A Bayesian fit eases the problem: a weakly informative prior on σ, such as a half-normal or exponential, keeps the estimate away from exactly zero and gives an honest, wide posterior instead of a false certainty ([[Weakly Informative Prior]], [[Bayesian Mixed Model Workflow in R]]). It cannot create information that 4 regions do not contain, so the posterior for σ_region will still be wide, and that width belongs in your results.

```r
library(lme4); set.seed(8)
sim <- function(J) { g <- factor(rep(1:J, each = 5)); y <- 0.5 * rnorm(J)[g] + rnorm(5 * J)   # true between-group SD = 0.5
  as.data.frame(VarCorr(lmer(y ~ 1 + (1 | g))))$sdcor[1] }
sd4 <- suppressMessages(replicate(200, sim(4))); sd20 <- suppressMessages(replicate(200, sim(20)))
round(rbind(`4 groups` = c(quantile(sd4, c(.05, .5, .95)), zero = mean(sd4 < 1e-4)),
            `20 groups` = c(quantile(sd20, c(.05, .5, .95)), zero = mean(sd20 < 1e-4))), 2)
```

## Connections
- **Builds on:** [[Random Effect]], [[Variance Components]]
- **Leads to:** [[Singular Fit]], [[Fixed vs Random Effects]], [[Weakly Informative Prior]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]], molecular note [[Homework 4 - Thistle Seedlings and Enemy Release]]

## Flashcards

About how many levels does a random effect need for a usable variance estimate?
??
At least about 5 (Harrison et al. 2018).
++++

What often happens to the variance estimate with 3 or 4 groups?
??
It is very uncertain and can be exactly zero, a singular fit.
++++

What are the options when a grouping factor has only 4 levels?
??
Keep it random and accept a weak estimate, make it fixed, drop it if a lower level carries the grouping, or fit it Bayesian with a prior on σ.
++++
