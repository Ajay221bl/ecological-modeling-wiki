---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A Bayesian logistic regression is a logistic regression whose intercept and slopes get prior distributions, so fitting gives a posterior distribution of plausible values for each rather than one best estimate."
aliases:
  - "Bayesian binomial GLM"
  - "Bayesian logistic model"
  - "brm family = bernoulli"
  - "Bayesian GLM"
status: seedling
---

# Bayesian Logistic Regression

A logistic regression says the [[Log Odds|log odds]] of a yes is a [[Equation of a Line|straight line]] in the [[Predictor Variable|predictors]], [[Logit Link|logit]](p) = β₀ + β₁x, and the data are 0s and 1s from a Bernoulli distribution with that p ([[Logistic Regression]], [[Bernoulli Distribution]]). A **Bayesian logistic regression** is the same model with one addition: each β gets a prior distribution, a statement of which values are plausible before seeing the data, and MCMC then gives the posterior, thousands of plausible (β₀, β₁) pairs consistent with both ([[Prior Distribution|Prior]], [[Posterior Distribution]], [[MCMC]]). In brms it is `brm(y ~ x, family = bernoulli(), data = d, prior = ...)`.

The prior needs care because β lives on the log odds scale, where numbers are not intuitive. A slope of 5 on a [[Standardizing|standardised predictor]] means the odds multiply by e⁵ ≈ 150 for one [[Standard Deviation|standard deviation]], which is almost never realistic. A prior of normal(0, 1) to normal(0, 2.5) on standardised predictors keeps slopes in a believable range while letting the data move them; a "flat" normal(0, 100) actually piles prior belief onto probabilities of exactly 0 and 1, which you can see with a [[Prior Predictive Check]] ([[Weakly Informative Prior]], [[Centering, Scaling and Standardizing]]). This is also why scaling the predictors first matters in Homework 3.

Homework 3 fits the same 6 [[Candidate Model Set|candidate models]] to Grey Currawong and Silvereye presence, checks that every model [[Convergence|converged]] (R-hat close to 1, enough effective samples, mixed [[Trace Plot|trace plots]]), and ranks them with LOO or WAIC ([[R-hat]], [[Effective Sample Size]], [[AIC, WAIC and LOO]]). A big benefit over the frequentist fit: when one predictor perfectly separates 0s from 1s, [[Maximum Likelihood Estimation|maximum likelihood]] runs off to infinity, but the prior keeps the Bayesian estimate finite ([[Complete Separation]]).

```r
# norun (brms needs to compile a Stan model, which takes a minute)
library(brms)
d$area_s <- as.numeric(scale(d$area))
m <- brm(present ~ area_s, family = bernoulli(), data = d,
         prior = c(prior(normal(0, 1.5), class = "Intercept"), prior(normal(0, 1), class = "b")),
         chains = 4, iter = 2000, seed = 1)
summary(m)          # check Rhat = 1.00 and Bulk_ESS, Tail_ESS in the hundreds or more
```

## Connections
- **Builds on:** [[Logistic Regression]], [[Prior Distribution|Prior]], [[MCMC]], [[Log Odds]], [[Equation of a Line]], [[Predictor Variable]], [[Logit Link]], [[Standardizing]], [[Standard Deviation]], [[Convergence]], [[Trace Plot]], [[Maximum Likelihood Estimation]]
- **Leads to:** [[Weakly Informative Prior]], [[AIC, WAIC and LOO]], [[Complete Separation]], [[Candidate Model Set]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[Homework 3 - Woodland Birds and Landscape Scale]], [[Bayesian Linear Regression in R]]

## Flashcards

What does a Bayesian logistic regression add to an ordinary one?
??
Prior distributions on the coefficients, giving a posterior distribution for each instead of a single estimate.
++++

Why is normal(0, 100) a bad "uninformative" prior for a logistic slope?
??
On the log odds scale it implies probabilities piled up near exactly 0 and 1.
++++

What family do you use in brms for 0/1 presence data?
??
bernoulli() (or binomial() with trials(1)).
++++
