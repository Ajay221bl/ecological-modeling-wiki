---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A weakly informative prior rules out absurd parameter values while staying wide enough that any realistic value remains plausible."
aliases:
  - "Weakly informative priors"
  - "Regularizing prior"
  - "Regularising prior"
  - "Default prior"
status: seedling
---

# Weakly Informative Prior

Guard rails on a mountain road don't steer the car, and on the road you never touch them; they are there for the moment something goes badly wrong. A **weakly informative prior** rules out absurd parameter values while staying wide enough that any realistic value remains plausible ([[Prior Distribution]]). In a logistic regression with a standardised predictor, a slope of 5 would mean a one-sd change multiplies the odds by 148, which almost never happens in ecology ([[Standardizing|Standardization]]). A Normal(0, 1.5) prior says slopes are probably between −3 and +3 and makes 10 very unlikely, without preferring either sign.

To choose one, think about the largest effect that could conceivably be real and pick a prior that covers it comfortably and not vastly more. Common defaults for standardised predictors are Normal(0, 1) to Normal(0, 2.5) for slopes on log or logit scales, and a [[Half-Normal Prior]], half-t ([[Half-Cauchy Prior]]) or exponential prior for standard deviations. In the code below, Normal(0, 1.5) on a logit slope allows odds ratios from about 0.05 to 19 and puts 0.3% of its mass on probabilities within 1% of 0 or 1, against 65% for a vague Normal(0, 10).

The benefits are gentle pull toward zero when data are sparse ([[Regularization]]), a fix for [[Complete Separation]] in logistic models where maximum likelihood fails, and better-behaved samplers; with reasonable data the posterior barely differs from that under a [[Vague Prior]]. Check what the priors imply with a [[Prior Predictive Check]]. The brms labs set priors of this kind ([[Course Website]], [[Hobbs and Hooten 2015 Ch5]]). It does not bias the result in any meaningful sense, since it excludes only values no ecologist would believe.

![[Prior types.png|700]]
*What to look at:* the middle curve. Wide, but with almost no weight on wild values.

```r
qnorm(c(0.025, 0.975), 0, 1.5); exp(qnorm(c(0.025, 0.975), 0, 1.5))      # slope range, and the odds ratios it implies
set.seed(8); p15 <- plogis(rnorm(10000, 0, 1.5)); p10 <- plogis(rnorm(10000, 0, 10))
c(weakly_informative = mean(p15 < 0.01 | p15 > 0.99), vague = mean(p10 < 0.01 | p10 > 0.99))     # share of prior mass on extreme probabilities
```

## Connections
- **Builds on:** [[Prior Distribution]], [[Vague Prior]]
- **Leads to:** [[Complete Separation]], [[Regularization]], [[Prior Predictive Check]], [[Half-Normal Prior]], [[Half-Cauchy Prior]]
- **See also:** [[Informative Prior]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[How to choose a prior]]

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
