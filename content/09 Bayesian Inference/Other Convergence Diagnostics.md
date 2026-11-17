---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "Geweke, Heidelberger-Welch and Raftery-Lewis are older single-chain checks that ask whether a chain looks stationary and whether it is long enough."
aliases:
  - "Geweke diagnostic"
  - "Heidelberger-Welch diagnostic"
  - "Raftery-Lewis diagnostic"
  - "Geweke"
  - "Heidelberger and Welch"
  - "Raftery and Lewis"
status: seedling
---

# Other Convergence Diagnostics

**Geweke, Heidelberger-Welch and Raftery-Lewis** are older single-chain checks that ask whether a chain looks stationary and whether it is long enough ([[MCMC Convergence]]). Geweke compares the mean of the first 10% of a chain with that of the last 50%; for a stationary chain the difference, a z-score, should be within about ±2. Heidelberger-Welch tests whether the chain is stationary, dropping early portions until it passes, then checks whether the mean is estimated precisely enough. Raftery-Lewis estimates how many iterations and how much burn-in are needed to estimate a chosen quantile to a chosen accuracy.

All are in `coda`, as `geweke.diag()`, `heidel.diag()` and `raftery.diag()`. In the code below a stationary chain gives a Geweke z of −0.03, a chain with a steady upward drift gives −16, and the drifting chain fails the Heidelberger-Welch stationarity test (0).

Because they work on single chains, they can't detect chains stuck in different places, and a chain stuck in one mode can look perfectly stationary, so passing Geweke does not prove convergence. Today [[R-hat]], [[Effective Sample Size]] and a [[Trace Plot]] from multiple chains do this work; you will meet these names in older papers and JAGS workflows, and in [[Hobbs and Hooten 2015 Ch7]].

```r
library(coda); set.seed(26); stationary <- mcmc(rnorm(2000)); drifting <- mcmc(rnorm(2000) + seq(0, 3, length.out = 2000))
c(stationary = unname(geweke.diag(stationary)$z), drifting = unname(geweke.diag(drifting)$z))
heidel.diag(drifting)[, "stest"]                                          # 0 = failed the stationarity test
```

## Connections
- **Builds on:** [[MCMC Convergence]], [[R-hat]]
- **Leads to:** [[Trace Plot]], [[Effective Sample Size]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What does the Geweke diagnostic compare?
??
The mean of an early segment of a chain with the mean of a late segment, as a z-score.
++++
