---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
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

**In one line:** the effective sample size is the number of independent observations that would carry the same information as your correlated ones.

> [!info] Before this, it helps to know
> [[Chain Autocorrelation]] (why MCMC draws are worth less) · [[Standard Error]] (what depends on it) · [[Independence of Observations|Independence]] (the benchmark)

## The everyday picture
Polling 1,000 people who all live in ten households that think alike. You have 1,000 answers and something nearer to ten independent opinions.

## Start from zero
1. **Independent draws:** the error of a mean shrinks as sd/√N.
2. **Correlated draws:** it shrinks as sd/√ESS, with ESS < N.
3. **ESS ≈ N / (1 + 2 × sum of autocorrelations at all lags).**
4. **Strong positive autocorrelation:** ESS far below N. 10,000 draws might be worth 300.
5. **In MCMC output:** brms reports `Bulk_ESS` (for means and medians) and `Tail_ESS` (for interval ends).
6. **Rules of thumb:** at least 400 in total for stable summaries (100 per chain). Aim for 1,000 or more for reported intervals.
7. **Monte Carlo standard error = posterior sd / √ESS.**
8. **Low ESS:** run longer or fix the mixing.
9. **The same idea applies to field data.** For the mean of an AR(1) series with lag-1 correlation ρ, n_eff ≈ n(1 − ρ)/(1 + ρ): 100 observations with ρ = 0.5 carry the information of about 33, and the naive standard error is too small by a factor of about √3.
10. **Spatially autocorrelated sites** also overlap in information, so tests should use fewer degrees of freedom (Diniz-Filho et al. 2003). Treating them as independent overstates the evidence ([[Pseudoreplication]]).

## In R
```r
set.seed(28); x <- as.numeric(arima.sim(list(ar = 0.9), 10000)); ess <- unname(coda::effectiveSize(x)); c(N = 10000, ESS = round(ess))
(1 - 0.9) / (1 + 0.9) * 10000                                             # theory for an AR(1) chain: N(1 - rho)/(1 + rho)
sd(x) / sqrt(ess)                                                         # Monte Carlo standard error of the mean
posterior::ess_bulk(matrix(rnorm(4000), ncol = 4))
neff <- function(n, rho) n * (1 - rho) / (1 + rho); round(sapply(c(0, 0.3, 0.5, 0.8), function(r) neff(100, r)), 1)   # field data: 100, 53.8, 33.3, 11.1
```

## In the course
`Bulk_ESS` and `Tail_ESS` in brms summaries ([[Course Website]]). The data version underlies the autocorrelation unit ([[Diniz-Filho et al. 2003]], [[Zuur et al. 2009 Ch6]]).

## Common confusions
- **"4,000 draws means a sample size of 4,000."** Only if they are independent.
- **"ESS is the number of data points."** In MCMC it counts posterior draws. It has nothing to do with n in the data.

## Explain it back
- 10,000 draws with lag-1 autocorrelation 0.9: roughly what ESS?

*Pass test:* you can read ESS from output and judge whether it is enough.

## Connections
- **Builds on:** [[Chain Autocorrelation]], [[Standard Error]], [[Independence of Observations|Independence]]
- **Leads to:** [[MCMC Convergence]], [[R-hat]], [[Thinning]], [[Pseudoreplication]], [[Spatial Autocorrelation]]
- **Part of:** [[MOC - Bayesian Inference]], molecular note [[How to check an MCMC fit]]

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
