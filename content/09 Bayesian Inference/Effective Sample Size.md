---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "The effective sample size is the number of independent observations that would carry the same information as your correlated ones."
aliases:
  - "ESS"
  - "n_eff"
  - "Bulk ESS"
  - "Tail ESS"
  - "Effective number of draws"
  - "Effective number of independent observations"
  - "Effective Sample Size under Autocorrelation"
  - "Effective sample size (autocorrelation)"
  - "n_eff (spatial)"
status: seedling
---

# Effective Sample Size

Poll 1,000 people who all live in ten like-minded households, and you have 1,000 answers but something nearer to ten independent opinions. The **effective sample size** (ESS) is the number of independent observations that would carry the same information as your correlated ones ([[Independence of Observations|Independence]], [[Chain Autocorrelation]]). With independent draws the error of a mean shrinks as sd/√N ([[Standard Error]]); with correlated draws it shrinks as sd/√ESS, with ESS below N. Roughly, ESS ≈ N / (1 + 2 × the sum of autocorrelations at all lags), so with strong [[Positive Autocorrelation|positive autocorrelation]] 10,000 draws might be worth 300.

In MCMC output, brms reports `Bulk_ESS` for means and medians and `Tail_ESS` for the ends of intervals. Rules of thumb are at least 400 in total, 100 per chain, for stable summaries, and 1,000 or more for reported intervals; the [[Monte Carlo Simulation|Monte Carlo]] standard error is the posterior sd divided by √ESS, and a low ESS means run longer or fix the mixing ([[MCMC Convergence]], [[R-hat]]). In the code below, a chain of 10,000 draws with lag-1 autocorrelation 0.9 has an ESS of about 510, close to the theoretical N(1 − ρ)/(1 + ρ) = 526, and a Monte Carlo standard error of 0.10. [[Thinning]] cannot raise it.

The same idea applies to field data. For the mean of a series with lag-1 correlation ρ, n_eff ≈ n(1 − ρ)/(1 + ρ), so the code's last line shows 100 observations are worth 100, 54, 33 and 11 independent ones for ρ = 0, 0.3, 0.5 and 0.8, and with ρ = 0.5 the naive standard error is too small by about √3. Spatially autocorrelated sites overlap in information too, so tests should use fewer [[Degrees of Freedom|degrees of freedom]], and treating them as independent overstates the evidence ([[Spatial Autocorrelation]], [[Pseudoreplication]], [[Diniz-Filho et al. 2003]], [[Zuur et al. 2009 Ch6]], [[Course Website]]). Two confusions. 4,000 draws are a [[Sample Size|sample size]] of 4,000 only if they are independent. And in MCMC the ESS counts [[Posterior Draws|posterior draws]]; it has nothing to do with the number of data points.

```r
set.seed(28); x <- as.numeric(arima.sim(list(ar = 0.9), 10000)); ess <- unname(coda::effectiveSize(x)); c(N = 10000, ESS = round(ess))
(1 - 0.9) / (1 + 0.9) * 10000                                             # theory for an AR(1) chain: N(1 - rho)/(1 + rho)
sd(x) / sqrt(ess)                                                         # Monte Carlo standard error of the mean
posterior::ess_bulk(matrix(rnorm(4000), ncol = 4))
neff <- function(n, rho) n * (1 - rho) / (1 + rho); round(sapply(c(0, 0.3, 0.5, 0.8), function(r) neff(100, r)), 1)   # field data: 100, 53.8, 33.3, 11.1
```

## Connections
- **Builds on:** [[Chain Autocorrelation]], [[Standard Error]], [[Independence of Observations|Independence]], [[Monte Carlo Simulation]], [[Degrees of Freedom]], [[Sample Size]], [[Posterior Draws]]
- **Leads to:** [[MCMC Convergence]], [[R-hat]], [[Thinning]], [[Pseudoreplication]], [[Spatial Autocorrelation]], [[Positive Autocorrelation]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[How to check an MCMC fit]]

## Flashcards

What is effective sample size?
??
The number of independent draws (or observations) equivalent in information to the correlated ones actually obtained.
++++

What is the Monte Carlo standard error of a posterior mean?
??
Posterior sd divided by √ESS.
++++

What is the effective sample size for the mean of an AR(1) series?
??
n(1 − ρ)/(1 + ρ).
++++
