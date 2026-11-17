---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "DIC is an early Bayesian analogue of AIC that adds the posterior mean deviance to an effective number of parameters, DIC = D̄ + pD."
aliases:
  - "Deviance Information Criterion"
  - "Deviance information criterion (DIC)"
status: seedling
---

# DIC

**DIC**, the Deviance Information Criterion, is an early Bayesian analogue of [[AIC]]. Compute the [[Deviance]] D(θ) = −2 log p(y | θ) at each posterior draw; D̄ is its posterior mean, and pD = D̄ − D(θ̄), the gap between the average deviance and the deviance at the posterior mean, is the [[Effective Number of Parameters]]. Then DIC = D̄ + pD = D(θ̄) + 2pD, and smaller is better.

In the code below a one-parameter Poisson model gives D̄ = 162.4, pD = 0.97, close to 1 as it should be, and DIC = 163.3. JAGS and R2jags report DIC automatically, and it was popular in ecology papers of the 2000s ([[JAGS and BUGS]]).

Its problems are that pD can be negative, it depends on the parameterisation, it assumes a roughly normal posterior, and it handles hierarchical and mixture models poorly. [[WAIC]] and [[Leave-one-out Cross-validation|LOO]] have replaced it in current practice, and [[Hobbs and Hooten 2015 Ch9]] reviews its problems. DIC was the standard Bayesian criterion; it no longer is.

```r
set.seed(4); y <- rpois(40, 3); lam <- rgamma(4000, 0.01 + sum(y), 0.01 + 40)
D <- sapply(lam, function(l) -2 * sum(dpois(y, l, log = TRUE))); Dbar <- mean(D); Dhat <- -2 * sum(dpois(y, mean(lam), log = TRUE))
c(Dbar = Dbar, pD = Dbar - Dhat, DIC = Dbar + (Dbar - Dhat))           # one parameter: pD close to 1
```

## Connections
- **Builds on:** [[Deviance]], [[Effective Number of Parameters]], [[AIC]]
- **Leads to:** [[WAIC]], [[Leave-one-out Cross-validation]], [[JAGS and BUGS]]
- **Part of:** [[MOC 11 - Bayesian Model Selection|MOC - Bayesian Model Selection]]

## Flashcards

What is DIC?
??
D̄ + pD: posterior mean deviance plus the effective number of parameters (pD = D̄ − D(θ̄)).
++++

Why has DIC fallen out of favour?
??
pD can be negative and parameterisation-dependent, and DIC performs poorly for hierarchical and non-normal posteriors.
++++
