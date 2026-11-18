---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "`bam()` fits GAMs to large datasets much faster than `gam()`, using methods designed for big data."
aliases:
  - "bam"
  - "Big additive models"
  - "bam() for Big Data"
  - "discrete = TRUE"
status: seedling
---

# bam()

`bam()` fits GAMs to large datasets much faster than `gam()`, using methods designed for big data, with the same formula syntax ([[Generalized Additive Model]]). Its default is `method = "fREML"`, fast [[REML]] ([[REML for Smoothness Selection]]); `discrete = TRUE` discretises [[Predictor Variable|covariates]] for large speed-ups; `nthreads =` uses several cores ([[Parallel Computing in R]]); and it accepts AR(1) residuals through `rho =` and `AR.start =` ([[AR(1) Error Structure]]).

It is useful above roughly tens of thousands of rows or with many random-effect levels. In the code below 20,000 points are fitted with `discrete = TRUE` in under 5 seconds, with the smooth using 8.87 [[Effective Degrees of Freedom|effective degrees of freedom]].

It is not in the in-scope labs; it is included for large ecological datasets such as atlases and [[Radio-telemetry Data|telemetry]]. `bam` is not a different model; it fits the same model faster.

```r
library(mgcv); set.seed(27); n <- 20000; d <- data.frame(x = runif(n)); d$y <- sin(2 * pi * d$x) + rnorm(n, 0, 0.5)
t1 <- system.time(m1 <- bam(y ~ s(x), data = d, discrete = TRUE))[["elapsed"]]; round(c(edf = summary(m1)$edf, seconds_under_5 = t1 < 5), 2)
```

## Connections
- **Builds on:** [[Generalized Additive Model]], [[REML]], [[Predictor Variable]], [[Effective Degrees of Freedom]]
- **Leads to:** [[AR(1) Error Structure]], [[Parallel Computing in R]], [[Radio-telemetry Data]]
- **See also:** [[AR(1) Error Structure]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What is bam() for?
??
Fitting GAMs to large datasets quickly, with the same formula syntax as gam().
++++
