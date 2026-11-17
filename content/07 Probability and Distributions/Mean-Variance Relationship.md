---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The mean-variance relationship of a distribution is the rule that says how its variance changes as its mean changes."
aliases:
  - "Variance function"
  - "Mean-variance relation"
status: seedling
---

# Mean-Variance Relationship

Guess the number of people in a small room and you are off by two or three; guess the crowd in a stadium and you are off by thousands. For most things you count or measure, bigger quantities come with bigger errors. The **mean-variance relationship** of a distribution is its precise version of that rule: how its [[Variance]] changes as its [[Mean]] changes. Each family has its own. Normal: the variance is constant, unrelated to the mean. Poisson: variance = mean. Negative binomial: variance = mean + mean²/k. Binomial: variance = np(1 − p), largest in the middle and shrinking near 0 and n. Gamma and lognormal: variance proportional to mean², so the standard deviation grows in step with the mean.

The figure shows three of these as a flat line, a diagonal and an upward-bending curve. The code below simulates each family at means of 1, 5, 20 and 80. The normal's variance stays at 4 throughout; the Poisson's tracks the mean; the negative binomial with k = 2 reaches about 3,300 at a mean of 80; and the gamma with shape 4 grows with the mean squared, from 0.25 to 1,600.

This is how you choose a distribution: plot the variance of your data against its mean, across groups or fitted values, and the pattern points to the family ([[Choosing a Distribution for Your Response]]). It is also why a [[Generalized Linear Model]] does not need equal variance: each family builds its rule in, so a Poisson GLM expects the fan shape that would count as [[Heteroscedasticity]] in a linear model ([[Zuur et al. 2009 Ch8]], [[Zuur et al. 2009 Ch9]]). So unequal variance is not always a problem; in a GLM it is expected, in the form the family dictates. Diagnostics then check the rule: [[Overdispersion]] means the data's variance grows faster than the family says, and the [[Dispersion Parameter]] is the knob that scales it.

![[Mean variance relationships.png|700]]
*What to look at:* one flat line, one diagonal, one curve bending upward. Three families, three rules.

```r
set.seed(20); mu <- c(1, 5, 20, 80)
rbind(mean = mu,
      normal = sapply(mu, function(m) var(rnorm(1e5, m, 2))),
      poisson = sapply(mu, function(m) var(rpois(1e5, m))),
      negbin = sapply(mu, function(m) var(rnbinom(1e5, mu = m, size = 2))),
      gamma = sapply(mu, function(m) var(rgamma(1e5, shape = 4, rate = 4 / m)))) |> round(1)
```

## Connections
- **Builds on:** [[Mean]], [[Variance]]
- **Leads to:** [[Overdispersion]], [[Dispersion Parameter]], [[Generalized Linear Model]], [[Heteroscedasticity]]
- **See also:** [[Probability Distribution]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What is the Poisson's mean-variance relationship?
??
Variance equals the mean.
![[Mean variance relationships.png]]
++++

What is the gamma's mean-variance relationship?
??
Variance is proportional to the mean squared.
++++

Why can a GLM handle variance that changes with the mean?
??
Each family includes its own variance function, so the expected heterogeneity is built in.
++++
