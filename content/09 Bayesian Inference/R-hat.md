---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "R-hat compares the variation between chains with the variation within chains, and is close to 1 when all the chains are sampling the same distribution."
aliases:
  - "Rhat"
  - "Gelman-Rubin statistic"
  - "Potential scale reduction factor"
  - "PSRF"
  - "Gelman-Rubin diagnostic"
  - "R̂"
status: seedling
---

# R-hat

Four thermometers in one room each flicker a little. If the differences between thermometers are no bigger than each one's own flicker, they agree; if one reads steadily higher, something is wrong. **R-hat**, also called the Gelman-Rubin statistic or potential scale reduction factor, compares the variation between MCMC chains with the variation within them ([[MCMC Chains]], [[Variance]]). W is how much each chain moves around its own mean, B how much the chain means differ, and R-hat ≈ √(pooled variance estimate / W), where the pooled estimate mixes W and B. It is the same between-versus-within logic as [[ANOVA]].

If the chains have [[Convergence|converged]], between-chain differences are just what within-chain noise would produce and R-hat is 1; above 1, the chains disagree or are still drifting ([[MCMC Convergence]]). Below 1.01 is the modern standard and below 1.1 the older rule. Modern versions, rank-normalised and using split chains, also catch chains that differ in spread and trends within a chain. In the code below, four chains with the same mean give R-hat 1.000 and four where one is shifted by 1 give 1.20; the `posterior` package's modern R-hat gives 1.00 for well-mixed chains.

It is reported for every parameter in brms and Stan summaries, in the `Rhat` column, and one bad R-hat is enough to distrust the fit; it needs at least two chains ([[Course Website]], [[Hobbs and Hooten 2015 Ch7]]). Check it alongside a [[Trace Plot]] and the [[Effective Sample Size]]. R-hat near 1 does not mean the model fits the data, only that the chains agree with each other. And 1.05 is not fine by current standards: investigate anything above 1.01.

```r
set.seed(25); library(coda); mk <- function(means) mcmc.list(lapply(means, function(m) mcmc(rnorm(1000, m))))
c(agree = gelman.diag(mk(c(0, 0, 0, 0)))$psrf[1], disagree = gelman.diag(mk(c(0, 0, 0, 1)))$psrf[1])
library(posterior); rhat(matrix(rnorm(4000), ncol = 4))
```

## Connections
- **Builds on:** [[MCMC Chains]], [[Variance]], [[Convergence]]
- **Leads to:** [[MCMC Convergence]], [[Trace Plot]], [[Effective Sample Size]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[How to check an MCMC fit]]

## Flashcards

What does R-hat measure?
??
The ratio of pooled (between plus within chain) variance to within-chain variance. Near 1 when chains agree.
++++

What R-hat value is considered acceptable?
??
Below 1.01 (older guidance: below 1.1).
++++
