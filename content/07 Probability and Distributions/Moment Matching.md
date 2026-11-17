---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "Moment matching finds the parameters of a distribution that give it a mean and variance you have chosen."
aliases:
  - "Method of moments"
  - "Matching moments"
status: seedling
---

# Moment Matching

You know your chest size and height, but the tailor's patterns are specified in other numbers; you need a conversion table. **Moment matching** is that conversion for distributions: it finds the parameters of a distribution that give it a mean and variance you have chosen. Write the family's mean and variance as formulas in its parameters ([[Moments of a Distribution]]), set them equal to the mean and variance you want, and solve the two equations for the two parameters ([[Distribution Parameters]]).

An example. You believe a survival probability is about 0.7, give or take 0.1. Which [[Beta Distribution]] says that? For a beta, ν = μ(1 − μ)/σ² − 1 = 0.7 × 0.3 / 0.01 − 1 = 20, then a = μν = 14 and b = (1 − μ)ν = 6. Beta(14, 6) has mean 0.7 and standard deviation 0.1, which the code below confirms by simulation. For a [[Gamma Distribution]], shape = μ²/σ² and rate = μ/σ², so a gamma with mean 50 and standard deviation 20 has shape 6.25 and rate 0.125. For a [[Lognormal Distribution]], sdlog² = log(1 + σ²/μ²) and meanlog = log(μ) − sdlog²/2.

Bayesian modeling needs this constantly. Your deterministic model predicts a mean and you have a variance, but `dgamma()` wants a shape and a rate, and moment matching links the two. It also turns a published "mean ± SD" into an [[Informative Prior]]. Hobbs and Hooten name it as a technique and use it throughout their Bayesian chapters, as do the Stan labs ([[Hobbs and Hooten 2015 Ch3]]). Not every mean and variance is possible: for a beta the variance must be below μ(1 − μ). Used this way, moment matching is just a reparameterisation; as a method of estimating parameters from data it is cruder than maximum likelihood.

```r
mu <- 0.7; s <- 0.1; nu <- mu * (1 - mu) / s^2 - 1; a <- mu * nu; b <- (1 - mu) * nu; c(a, b)
set.seed(12); x <- rbeta(1e5, a, b); c(mean(x), sd(x))
mu <- 50; s <- 20; c(shape = mu^2 / s^2, rate = mu / s^2)       # gamma with mean 50, SD 20
y <- rgamma(1e5, mu^2 / s^2, mu / s^2); c(mean(y), sd(y))
```

## Connections
- **Builds on:** [[Moments of a Distribution]], [[Distribution Parameters]]
- **Leads to:** [[Gamma Distribution]], [[Beta Distribution]], [[Informative Prior]], [[Lognormal Distribution]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What is moment matching?
??
Solving for a distribution's parameters so that its mean and variance equal chosen values.
++++

Gamma parameters for mean μ and variance σ²?
??
shape = μ²/σ², rate = μ/σ².
++++

Beta parameters for mean μ and variance σ²?
??
ν = μ(1 − μ)/σ² − 1, a = μν, b = (1 − μ)ν.
++++
