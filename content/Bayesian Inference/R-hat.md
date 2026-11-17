---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
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

**In one line:** R-hat compares the variation between chains with the variation within chains, and is close to 1 when all the chains are sampling the same distribution.

> [!info] Before this, it helps to know
> [[MCMC Chains]] (several are needed) · [[Variance]] (what is compared) · [[ANOVA]] (the same between-versus-within logic)

## The everyday picture
Four thermometers in one room. Each flickers a little. If the differences between thermometers are no bigger than each one's own flicker, they agree. If one reads steadily higher than the others, something is wrong.

## Start from zero
1. **Within-chain variance W:** how much each chain moves around its own mean.
2. **Between-chain variance B:** how much the chain means differ.
3. **If the chains have converged,** between-chain differences are just what within-chain noise would produce.
4. **R-hat ≈ √(pooled variance estimate / W).** The pooled estimate mixes W and B.
5. **R-hat = 1:** chains agree. **Above 1:** chains disagree, or are still drifting.
6. **Thresholds:** below 1.01 is the modern standard. Below 1.1 was the older rule.
7. **Modern versions** (rank-normalised, split chains) also catch chains that differ in spread, and trends within a chain.
8. **Reported for every parameter** in brms and Stan summaries. One bad R-hat is enough to distrust the fit.
9. **It needs at least two chains.**

## In R
```r
set.seed(25); library(coda); mk <- function(means) mcmc.list(lapply(means, function(m) mcmc(rnorm(1000, m))))
c(agree = gelman.diag(mk(c(0, 0, 0, 0)))$psrf[1], disagree = gelman.diag(mk(c(0, 0, 0, 1)))$psrf[1])
library(posterior); rhat(matrix(rnorm(4000), ncol = 4))
```

## In the course
The `Rhat` column of every brms summary ([[Course Website]]). [[Hobbs and Hooten 2015 Ch7]] describes the Gelman-Rubin diagnostic.

## Common confusions
- **"R-hat near 1 means the model fits the data."** It says only that the chains agree with each other.
- **"R-hat of 1.05 is fine."** By current standards investigate anything above 1.01.

## Explain it back
- What two variances does R-hat compare?

*Pass test:* you can read R-hat from a summary and act on it.

## Connections
- **Builds on:** [[MCMC Chains]], [[Variance]]
- **Leads to:** [[MCMC Convergence]], [[Trace Plot]], [[Effective Sample Size]]
- **Part of:** [[MOC - Bayesian Inference]], molecular note [[How to check an MCMC fit]]

## Flashcards

What does R-hat measure?
??
The ratio of pooled (between plus within chain) variance to within-chain variance. Near 1 when chains agree.
++++

What R-hat value is considered acceptable?
??
Below 1.01 (older guidance: below 1.1).
++++
