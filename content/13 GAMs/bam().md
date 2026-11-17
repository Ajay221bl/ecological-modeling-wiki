---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "bam"
  - "Big additive models"
  - "bam() for Big Data"
  - "discrete = TRUE"
status: seedling
---

# bam()

**In one line:** `bam()` fits GAMs to large datasets much faster than `gam()`, using methods designed for big data.

> [!info] Before this, it helps to know
> [[Generalized Additive Model]]

## Start from zero
1. **Same formula syntax as gam().**
2. **`method = "fREML"`** (fast REML) by default.
3. **`discrete = TRUE`** discretises covariates for large speed-ups.
4. **`nthreads =`** uses several cores.
5. **Accepts AR(1) residuals** via `rho =` and `AR.start =`.
6. **Useful above roughly tens of thousands of rows** or with many random-effect levels.

## In R
```r
library(mgcv); set.seed(27); n <- 20000; d <- data.frame(x = runif(n)); d$y <- sin(2 * pi * d$x) + rnorm(n, 0, 0.5)
t1 <- system.time(m1 <- bam(y ~ s(x), data = d, discrete = TRUE))[["elapsed"]]; round(c(edf = summary(m1)$edf, seconds_under_5 = t1 < 5), 2)
```

## In the course
Not in the in-scope labs. Included for large ecological datasets (atlas, telemetry).

## Common confusions
- **"bam is a different model."** It fits the same model faster.

## Explain it back
- What does discrete = TRUE do?

*Pass test:* you can switch a big model to bam.

## Connections
- **Builds on:** [[Generalized Additive Model]]
- **Leads to:** [[AR(1) Error Structure]], [[Parallel Computing in R]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What is bam() for?
??
Fitting GAMs to large datasets quickly, with the same formula syntax as gam().
++++
