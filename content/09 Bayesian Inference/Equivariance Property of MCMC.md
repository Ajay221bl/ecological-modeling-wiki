---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "The equivariance property says that applying any function to posterior draws of parameters gives valid posterior draws of that function's result."
aliases:
  - "Equivariance"
  - "Equivariance of MCMC"
  - "Invariance of posterior draws under transformation"
status: seedling
---

# Equivariance Property of MCMC

Convert a bag of temperature readings from Celsius to Fahrenheit one by one and you have a faithful bag of Fahrenheit readings without remeasuring anything. The **equivariance property** says the same of posterior draws: applying any function g to draws of θ gives valid draws from the posterior of g(θ) ([[Posterior Draws]], [[Functions in Maths]]). No new derivation or refitting is needed, and it works for functions of several parameters as long as each evaluation uses values from the same draw. It is the basis of [[Derived Quantities]].

[[Maximum Likelihood Estimation|Maximum likelihood]] is less convenient: the MLE of g(θ) is g(MLE), but its [[Standard Error|standard error]] needs the [[Delta Method]] or a [[Bootstrap|bootstrap]]. In the code below, draws on the [[Link Scale|logit scale]] become draws of a probability with a 95% interval of 0.36 to 0.93.

The order matters, because the mean of g(θ) isn't g(mean of θ) for nonlinear g ([[Jensen's Inequality]]). In the code, transforming the mean [[Logit Link|logit]] gives 0.73 while the mean of the transformed draws is 0.71. Transform the draws first and summarise second; quantiles survive a monotonic [[Transformation|transformation]], means don't. [[Hobbs and Hooten 2015 Ch8]] names it as the basis for inference on derived quantities.

```r
set.seed(8); logit_p <- rnorm(4000, 1, 0.8); p <- plogis(logit_p)         # draws on the logit scale become draws on the probability scale
c(mean_then_transform = plogis(mean(logit_p)), transform_then_mean = mean(p)); quantile(p, c(.025, .975))
```

## Connections
- **Builds on:** [[Posterior Draws]], [[Maximum Likelihood Estimation]], [[Standard Error]], [[Bootstrap]], [[Link Scale]], [[Logit Link]], [[Transformation]]
- **Leads to:** [[Derived Quantities]], [[Jensen's Inequality]], [[Delta Method]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is the equivariance property of MCMC?
??
Any function applied to posterior draws yields draws from the posterior of that function.
++++
