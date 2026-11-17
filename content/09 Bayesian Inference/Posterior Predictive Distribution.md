---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "The posterior predictive distribution is the distribution of new, not yet seen data implied by the model, averaging over all the uncertainty in the parameters."
aliases:
  - "Posterior prediction"
  - "Posterior predictive"
  - "Predictive distribution"
  - "y_rep"
  - "posterior_predict()"
status: seedling
---

# Posterior Predictive Distribution

An honest forecast admits two kinds of doubt: "we aren't sure of the average rainfall for this month, and any given month varies around the average anyway". The **posterior predictive distribution** is the distribution of new, not yet seen data implied by the model, combining both: uncertainty about which parameter values are true ([[Posterior Distribution]]) and random variation given those values ([[Data Model]]). To sample it, for each posterior draw of the parameters simulate one new observation from the data model ([[Composition Sampling]]); the collection of simulated observations is a sample from the posterior predictive distribution.

It is wider than the posterior of the mean, as the figure shows: a narrow band for uncertainty in the mean inside a wide band where new observations will fall. In the code below, a Poisson rate with posterior Gamma(22, 6) has a 95% interval of 2.3 to 5.3, while a new count ranges from 0 to 8. Its quantiles give an interval for new data, the Bayesian [[Prediction Interval]] ([[Out-of-sample Prediction]]), and replicate datasets from it are used for model checking ([[Posterior Predictive Check]]).

In brms `posterior_predict()` gives new observations, `posterior_epred()` the expected value only without observation noise, and `posterior_linpred()` the linear predictor; the labs use `posterior_predict()` and `pp_check()` ([[Course Website]], [[Hobbs and Hooten 2015 Ch8]]). The credible interval for the mean does not tell you where new data will fall: new data scatter far more widely than the mean is uncertain.

![[Posterior predictive.png|700]]
*What to look at:* the narrow band (uncertainty in the mean) inside the wide band (where new observations will fall).

```r
set.seed(9); lambda <- rgamma(4000, 22, 6)                                # posterior draws of a Poisson rate
y_new <- rpois(4000, lambda)                                              # one new count per draw
rbind(mean_rate = quantile(lambda, c(.025, .975)), new_count = quantile(y_new, c(.025, .975)))
```

## Connections
- **Builds on:** [[Posterior Distribution]], [[Data Model]]
- **Leads to:** [[Posterior Predictive Check]], [[Composition Sampling]], [[Prediction Interval]], [[Out-of-sample Prediction]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[Prediction vs Confidence Interval]]

## Flashcards

What is the posterior predictive distribution?
??
The distribution of new data given the observed data, integrating over posterior uncertainty in the parameters.
![[Posterior predictive.png]]
++++

How do you sample from the posterior predictive distribution?
??
For each posterior draw of the parameters, simulate a new observation from the data model.
++++
