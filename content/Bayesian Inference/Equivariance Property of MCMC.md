---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Equivariance"
  - "Equivariance of MCMC"
  - "Invariance of posterior draws under transformation"
status: seedling
---

# Equivariance Property of MCMC

**In one line:** the equivariance property says that applying any function to posterior draws of parameters gives valid posterior draws of that function's result.

> [!info] Before this, it helps to know
> [[Posterior Draws]] (what is transformed) · [[Derived Quantities]] (what it justifies) · [[Functions in Maths]] (what is applied)

## The everyday picture
Converting a bag of temperature readings from Celsius to Fahrenheit one by one. You end up with a faithful bag of Fahrenheit readings without having to remeasure anything.

## Start from zero
1. **You have draws of θ** from its posterior.
2. **You want the posterior of g(θ).**
3. **Compute g for each draw.** Done.
4. **No new derivation or refitting is needed.**
5. **Works for functions of several parameters,** as long as each evaluation uses values from the same draw.
6. **Contrast with maximum likelihood:** the MLE of g(θ) is g(MLE), but its standard error needs the delta method or a bootstrap.
7. **Caution:** the mean of g(θ) isn't g(mean of θ) for nonlinear g. Transform draws first, summarise second.

## In R
```r
set.seed(8); logit_p <- rnorm(4000, 1, 0.8); p <- plogis(logit_p)         # draws on the logit scale become draws on the probability scale
c(mean_then_transform = plogis(mean(logit_p)), transform_then_mean = mean(p)); quantile(p, c(.025, .975))
```

## In the course
Named in [[Hobbs and Hooten 2015 Ch8]] as the basis for inference on derived quantities.

## Common confusions
- **"Transform the summary."** Transform the draws. Quantiles survive monotonic transformation. Means don't.

## Explain it back
- What does equivariance let you do with MCMC output?

*Pass test:* you can explain why per-draw computation is valid.

## Connections
- **Builds on:** [[Posterior Draws]]
- **Leads to:** [[Derived Quantities]], [[Jensen's Inequality]], [[Delta Method]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

What is the equivariance property of MCMC?
??
Any function applied to posterior draws yields draws from the posterior of that function.
++++
