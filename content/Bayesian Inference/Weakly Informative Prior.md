---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Weakly informative priors"
  - "Regularizing prior"
  - "Regularising prior"
  - "Default prior"
status: seedling
---

# Weakly Informative Prior

**In one line:** a weakly informative prior rules out absurd parameter values while staying wide enough that any realistic value remains plausible.

> [!info] Before this, it helps to know
> [[Prior Distribution]] (the idea) · [[Vague Prior]] and [[Informative Prior]] (the two extremes) · [[Standardizing|Standardization]] (which makes default scales sensible)

## The everyday picture
Guard rails on a mountain road. They don't steer the car. On the road itself you never touch them. They are there for the moment something goes badly wrong.

## A tiny example
A logistic regression with a standardised predictor. A slope of 5 would mean a one-sd change multiplies the odds by 148, which almost never happens in ecology. A Normal(0, 1.5) prior says slopes are probably between −3 and +3 and makes 10 very unlikely, without preferring any sign.

## Start from zero
1. **Think about the scale.** What is the largest effect that could conceivably be real?
2. **Choose a prior wide enough to cover it comfortably** and not vastly wider.
3. **Common defaults (standardised predictors):** Normal(0, 1) to Normal(0, 2.5) for slopes on log or logit scales. Half-normal, half-t or exponential priors for standard deviations.
4. **Benefit 1: regularisation.** Estimates are pulled gently toward zero, which matters when data are sparse.
5. **Benefit 2: it fixes separation** in logistic models, where maximum likelihood fails.
6. **Benefit 3: samplers behave better.**
7. **With reasonable data the posterior barely differs** from that under a vague prior.
8. **Check with a prior predictive simulation:** do the priors imply data in a believable range?

## See it
![[Prior types.png|700]]
*What to look at:* the middle curve. Wide, but with almost no weight on wild values.

## In R
```r
qnorm(c(0.025, 0.975), 0, 1.5); exp(qnorm(c(0.025, 0.975), 0, 1.5))      # slope range, and the odds ratios it implies
set.seed(8); p15 <- plogis(rnorm(10000, 0, 1.5)); p10 <- plogis(rnorm(10000, 0, 10))
c(weakly_informative = mean(p15 < 0.01 | p15 > 0.99), vague = mean(p10 < 0.01 | p10 > 0.99))     # share of prior mass on extreme probabilities
```

## In the course
The brms labs set priors of this kind ([[Course Website]]). [[Hobbs and Hooten 2015 Ch5]].

## Common confusions
- **"Weakly informative means I am biasing the result."** It excludes only values no ecologist would believe.

## Explain it back
- How would you pick the scale of a weakly informative prior for a slope?

*Pass test:* you can propose weakly informative priors for a slope and a standard deviation.

## Connections
- **Builds on:** [[Prior Distribution]], [[Vague Prior]]
- **Leads to:** [[Complete Separation]], [[Regularization]], [[Prior Predictive Check]], [[Half-Normal Prior]], [[Half-Cauchy Prior]]
- **Part of:** [[MOC - Bayesian Inference]], molecular note [[How to choose a prior]]

## Flashcards

What is a weakly informative prior?
??
A prior that excludes implausible values but is otherwise wide, giving mild regularisation.
![[Prior types.png]]
++++

Name two practical benefits of weakly informative priors.
??
They stabilise estimates with sparse data (including separation) and improve sampler behaviour.
++++
