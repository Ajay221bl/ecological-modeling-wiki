---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Prior predictive simulation"
  - "Prior predictive distribution"
  - "Prior predictive checking"
status: seedling
---

# Prior Predictive Check

**In one line:** a prior predictive check simulates data from the priors alone, before using any real data, to see whether your priors imply believable observations.

> [!info] Before this, it helps to know
> [[Prior Distribution]] (what is being tested) · [[Simulating Data|Simulation]] (the method) · [[Posterior Predictive Check]] (the after-data counterpart)

## The everyday picture
Taste the sauce before it goes on the dish. You check the ingredients on their own first. If the sauce is inedible, no amount of good pasta will rescue it.

## A tiny example
Model of bird counts with log link, intercept prior Normal(0, 10). One draw of the intercept at +20 implies exp(20) = 485 million birds per plot. The prior permits nonsense.

## Start from zero
1. **Draw parameter values from the priors.**
2. **Simulate a dataset from the model with those values.**
3. **Repeat many times.**
4. **Look at the simulated data.** Are counts in a plausible range? Are probabilities all stuck at 0 or 1?
5. **If the simulations are absurd, tighten the priors.**
6. **Aim:** simulated data cover what could plausibly be seen, plus a margin. They need not look like your data.
7. **Why needed:** priors act through the link function and combine across parameters. Priors that each look harmless can jointly imply nonsense.
8. **In brms:** `brm(..., sample_prior = "only")`, then `pp_check()`.

## In R
```r
set.seed(11); x <- rnorm(50); sim <- function(sd_int, sd_slope) replicate(1000, max(rpois(50, exp(rnorm(1, 0, sd_int) + rnorm(1, 0, sd_slope) * x))))
quantile(sim(10, 10), c(0.5, 0.9), na.rm = TRUE)                     # vague priors: the median largest count is near a million, and one run in ten exceeds a hundred trillion
quantile(sim(1.5, 0.5), c(0.5, 0.9))                                 # weakly informative: the largest count is usually below about 20
```

## In the course
[[Hobbs and Hooten 2015 Ch5]] discusses choosing priors by what they imply. brms labs use `sample_prior` ([[Course Website]]).

## Common confusions
- **"This uses the data to pick the prior."** No real data are involved. It tests the prior against general knowledge.

## Explain it back
- Describe the steps of a prior predictive check.

*Pass test:* you can simulate from priors for a Poisson regression and judge the result.

## Connections
- **Builds on:** [[Prior Distribution]], [[Simulating Data|Simulation]]
- **Leads to:** [[Posterior Predictive Check]], [[Weakly Informative Prior]], [[Prior Sensitivity Analysis]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[How to choose a prior]]

## Flashcards

What is a prior predictive check?
??
Simulating data from the model using only the priors, to check that the priors imply plausible data.
++++
