---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
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

**In one line:** Geweke, Heidelberger-Welch and Raftery-Lewis are older single-chain checks that ask whether a chain looks stationary and whether it is long enough.

> [!info] Before this, it helps to know
> [[MCMC Convergence]] (what they assess) · [[R-hat]] (the multi-chain standard)

## Start from zero
1. **Geweke:** compares the mean of the first 10% of a chain with the mean of the last 50%. If the chain is stationary, the difference (a z-score) should be small, within about ±2.
2. **Heidelberger-Welch:** tests whether the chain is stationary, dropping early portions until it passes, then checks whether the mean is estimated precisely enough.
3. **Raftery-Lewis:** estimates how many iterations (and how much burn-in) are needed to estimate a chosen quantile to a chosen accuracy.
4. **All work on single chains,** so they can't detect chains stuck in different places.
5. **Available in `coda`:** `geweke.diag()`, `heidel.diag()`, `raftery.diag()`.
6. **Today** R-hat, effective sample size and trace plots from multiple chains do this work. You will meet these names in older papers and in JAGS workflows.

## In R
```r
library(coda); set.seed(26); stationary <- mcmc(rnorm(2000)); drifting <- mcmc(rnorm(2000) + seq(0, 3, length.out = 2000))
c(stationary = unname(geweke.diag(stationary)$z), drifting = unname(geweke.diag(drifting)$z))
heidel.diag(drifting)[, "stest"]                                          # 0 = failed the stationarity test
```

## In the course
Listed in [[Hobbs and Hooten 2015 Ch7]] among convergence checks.

## Common confusions
- **"Passing Geweke proves convergence."** A chain stuck in one mode can look perfectly stationary.

## Explain it back
- What does the Geweke diagnostic compare?

*Pass test:* you can say what each of the three checks.

## Connections
- **Builds on:** [[MCMC Convergence]], [[R-hat]]
- **Leads to:** [[Trace Plot]], [[Effective Sample Size]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

What does the Geweke diagnostic compare?
??
The mean of an early segment of a chain with the mean of a late segment, as a z-score.
++++
