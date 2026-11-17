---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Posterior prediction"
  - "Posterior predictive"
  - "Predictive distribution"
  - "y_rep"
  - "posterior_predict()"
status: seedling
---

# Posterior Predictive Distribution

**In one line:** the posterior predictive distribution is the distribution of new, not yet seen data implied by the model, averaging over all the uncertainty in the parameters.

> [!info] Before this, it helps to know
> [[Posterior Distribution]] (parameter uncertainty) · [[Data Model]] (sampling variation) · [[Prediction Interval]] (its frequentist cousin)

## The everyday picture
A forecast that admits two kinds of doubt. "We aren't sure of the average rainfall for this month (parameter uncertainty), and any given month varies around the average anyway (sampling variation)." The forecast range has to include both.

## Start from zero
1. **Two sources of uncertainty about a new observation:** which parameter values are true, and random variation given those values.
2. **Recipe (composition sampling):** for each posterior draw of the parameters, simulate one new observation from the data model.
3. **The collection of simulated observations** is a sample from the posterior predictive distribution.
4. **It is wider than the posterior of the mean.**
5. **Use 1, prediction:** quantiles give a prediction interval for new data.
6. **Use 2, model checking:** simulate replicate datasets (y_rep) and compare with the real data.
7. **In brms:** `posterior_predict()` gives new observations. `posterior_epred()` gives the expected value only (no observation noise). `posterior_linpred()` gives the linear predictor.

## See it
![[Posterior predictive.png|700]]
*What to look at:* the narrow band (uncertainty in the mean) inside the wide band (where new observations will fall).

## In R
```r
set.seed(9); lambda <- rgamma(4000, 22, 6)                                # posterior draws of a Poisson rate
y_new <- rpois(4000, lambda)                                              # one new count per draw
rbind(mean_rate = quantile(lambda, c(.025, .975)), new_count = quantile(y_new, c(.025, .975)))
```

## In the course
[[Hobbs and Hooten 2015 Ch8]]. `posterior_predict()` and `pp_check()` in the labs ([[Course Website]]).

## Common confusions
- **"The credible interval for the mean tells me where new data will fall."** New data scatter far more widely than the mean is uncertain.

## Explain it back
- What two uncertainties does it combine?
- Which brms function leaves out observation noise?

*Pass test:* you can simulate from a posterior predictive distribution.

## Connections
- **Builds on:** [[Posterior Distribution]], [[Data Model]]
- **Leads to:** [[Posterior Predictive Check]], [[Composition Sampling]], [[Prediction Interval]], [[Out-of-sample Prediction]]
- **Part of:** [[MOC - Bayesian Inference]], molecular note [[Prediction vs Confidence Interval]]

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
