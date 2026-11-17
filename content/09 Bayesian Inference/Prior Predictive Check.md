---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A prior predictive check simulates data from the priors alone, before using any real data, to see whether your priors imply believable observations."
aliases:
  - "Prior predictive simulation"
  - "Prior predictive distribution"
  - "Prior predictive checking"
status: seedling
---

# Prior Predictive Check

Taste the sauce before it goes on the dish: if it is inedible, no amount of good pasta will rescue it. A **prior predictive check** tastes the priors: it simulates data from the priors alone, before using any real data, to see whether they imply believable observations ([[Prior Distribution]], [[Simulating Data|Simulation]]). Draw parameter values from the priors, simulate a dataset from the model with those values, repeat many times and look at the results. Are counts in a plausible range? Are probabilities all stuck at 0 or 1? If the simulations are absurd, tighten the priors. In a model of bird counts with a log link and an intercept prior of Normal(0, 10), one draw of the intercept at +20 implies e²⁰ = 485 million birds per plot.

It is needed because priors act through the link function and combine across parameters, so priors that each look harmless can jointly imply nonsense. The aim is that simulated data cover what could plausibly be seen, plus a margin; they need not look like your data. In the code below, Normal(0, 10) priors on a Poisson intercept and slope make the median largest count among 50 plots about 900,000, with one simulation in ten above 10¹⁴; with Normal(0, 1.5) and Normal(0, 0.5) priors the largest count is usually 4 and below about 20 in nine runs out of ten ([[Weakly Informative Prior]]). In brms use `brm(..., sample_prior = "only")` then `pp_check()`.

The brms labs use `sample_prior`, and [[Hobbs and Hooten 2015 Ch5]] discusses choosing priors by what they imply ([[Course Website]]). It does not use the data to pick the prior: no real data are involved, only general knowledge. Its after-data counterpart is the [[Posterior Predictive Check]], and a [[Prior Sensitivity Analysis]] asks the related question of how much the priors change the conclusions.

```r
set.seed(11); x <- rnorm(50); sim <- function(sd_int, sd_slope) replicate(1000, max(rpois(50, exp(rnorm(1, 0, sd_int) + rnorm(1, 0, sd_slope) * x))))
quantile(sim(10, 10), c(0.5, 0.9), na.rm = TRUE)                     # vague priors: the median largest count is near a million, and one run in ten exceeds a hundred trillion
quantile(sim(1.5, 0.5), c(0.5, 0.9))                                 # weakly informative: the largest count is usually below about 20
```

## Connections
- **Builds on:** [[Prior Distribution]], [[Simulating Data|Simulation]]
- **Leads to:** [[Posterior Predictive Check]], [[Weakly Informative Prior]], [[Prior Sensitivity Analysis]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[How to choose a prior]]

## Flashcards

What is a prior predictive check?
??
Simulating data from the model using only the priors, to check that the priors imply plausible data.
++++
