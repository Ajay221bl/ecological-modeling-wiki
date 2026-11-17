---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Posterior mean"
  - "Posterior median"
  - "Posterior standard deviation"
  - "Posterior Summary (mean, median, SD)"
  - "Point estimate (Bayesian)"
  - "Est.Error"
status: seedling
---

# Posterior Summary

**In one line:** a posterior summary condenses a posterior distribution into a few numbers, usually a central value, a spread and an interval.

> [!info] Before this, it helps to know
> [[Posterior Draws]] (what is summarised) · [[Mean]], [[Median]] and [[Standard Deviation]] (the tools)

## The everyday picture
A weather forecast's headline. Behind it is a whole distribution of possible temperatures. The headline gives the most representative number and a range.

## Start from zero
1. **Posterior mean:** the average of the draws. The commonest point estimate.
2. **Posterior median:** the middle draw. Better for skewed posteriors, and it transforms cleanly (the median of exp(θ) is exp of the median of θ).
3. **Posterior mode (MAP):** the peak. Harder to estimate from draws.
4. **Posterior standard deviation:** the spread of the draws. The Bayesian counterpart of a standard error. brms calls it `Est.Error`.
5. **Credible interval:** usually the 2.5% and 97.5% quantiles.
6. **For symmetric posteriors** mean, median and mode coincide.
7. **For skewed posteriors** (variance parameters, back-transformed quantities) they differ. Report the median and say so.
8. **Look at the whole distribution** before trusting a summary. Two peaks or a pile-up at a boundary can't be seen in a mean.

## In R
```r
set.seed(2); sigma_draws <- rlnorm(4000, log(0.8), 0.6)                  # a right-skewed posterior, as for a group-level sd
d <- density(sigma_draws); round(c(mean = mean(sigma_draws), median = median(sigma_draws), mode = d$x[which.max(d$y)], sd = sd(sigma_draws), quantile(sigma_draws, c(.025, .975))), 2)
```

## In the course
The `Estimate`, `Est.Error`, `l-95% CI` and `u-95% CI` columns of a brms summary ([[Course Website]]). [[Hobbs and Hooten 2015 Ch8]].

## Common confusions
- **"Est.Error is a standard error in the frequentist sense."** It is the posterior standard deviation.

## Explain it back
- When do posterior mean and median differ noticeably?

*Pass test:* you can read a brms summary table.

## Connections
- **Builds on:** [[Posterior Draws]], [[Mean]], [[Median]]
- **Leads to:** [[Credible Interval]], [[Maximum a Posteriori Estimate]], [[Marginal Posterior Distribution]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

What does "Est.Error" mean in a brms summary?
??
The posterior standard deviation of the parameter.
++++

Which posterior summary is preferable for a skewed posterior?
??
The median (with a quantile-based interval).
++++
