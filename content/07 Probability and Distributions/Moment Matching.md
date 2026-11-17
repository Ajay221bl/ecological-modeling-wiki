---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Method of moments"
  - "Matching moments"
status: seedling
---

# Moment Matching

**In one line:** moment matching finds the parameters of a distribution that give it a mean and variance you have chosen.

> [!info] Before this, it helps to know
> [[Moments of a Distribution]] (what is matched) · [[Distribution Parameters]] (what is solved for) · [[Gamma Distribution]] and [[Beta Distribution]] (the usual targets)

## The everyday picture
Ordering a suit by your measurements. You know your chest and height. The tailor's patterns are specified in other numbers. Moment matching is the conversion table from your measurements to the pattern settings.

## A tiny example
You believe a survival probability is about 0.7 give or take 0.1. Which beta distribution says that?
- ν = μ(1 − μ)/σ² − 1 = 0.7 × 0.3 / 0.01 − 1 = 20.
- a = μν = 14, b = (1 − μ)ν = 6.
- Beta(14, 6) has mean 0.7 and SD 0.1.

## Start from zero
1. **Write the family's mean and variance as formulas in its parameters.**
2. **Set them equal to the mean and variance you want.**
3. **Solve the two equations for the two parameters.**
4. **Gamma:** shape = μ²/σ², rate = μ/σ².
5. **Beta:** ν = μ(1 − μ)/σ² − 1, then a = μν and b = (1 − μ)ν.
6. **Lognormal:** sdlog² = log(1 + σ²/μ²), meanlog = log(μ) − sdlog²/2.
7. **Why it is needed constantly in Bayesian modeling:** your deterministic model predicts a mean, and you have a variance. But `dgamma` wants shape and rate. Moment matching links the two, and also turns published "mean ± SD" into informative priors.

## In R
```r
mu <- 0.7; s <- 0.1; nu <- mu * (1 - mu) / s^2 - 1; a <- mu * nu; b <- (1 - mu) * nu; c(a, b)
set.seed(12); x <- rbeta(1e5, a, b); c(mean(x), sd(x))
mu <- 50; s <- 20; c(shape = mu^2 / s^2, rate = mu / s^2)       # gamma with mean 50, SD 20
y <- rgamma(1e5, mu^2 / s^2, mu / s^2); c(mean(y), sd(y))
```

## In the course
A named technique in [[Hobbs and Hooten 2015 Ch3]], used throughout the Bayesian chapters and the Stan labs.

## Common confusions
- **"Any mean and variance are possible."** For a beta the variance must be below μ(1 − μ).
- **"It is the same as maximum likelihood."** As an estimation method it is cruder. Here it is just a reparameterisation.

## Explain it back
- Find the gamma shape and rate for mean 10 and SD 5.

*Pass test:* you can convert a mean and SD to gamma or beta parameters.

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
