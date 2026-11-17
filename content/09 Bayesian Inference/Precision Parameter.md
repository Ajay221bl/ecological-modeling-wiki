---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "Precision is one divided by the variance, so a high precision means a narrow distribution."
aliases:
  - "τ"
  - "tau"
  - "Inverse variance"
status: seedling
---

# Precision Parameter

Variance measures how blurred a photograph is; **precision** states the same information as sharpness. It is one divided by the variance, τ = 1/σ², so σ = 1/√τ and high precision means a narrow distribution ([[Variance]], [[Standard Deviation]], [[Normal Distribution]]). It exists because the algebra of normal models is tidier in precision, and a gamma distribution is a [[Conjugate Prior]] for it.

BUGS and JAGS write normals with precision, as `dnorm(mu, tau)`, so a "vague" `dnorm(0, 0.001)` means variance 1,000 and standard deviation about 32 ([[JAGS and BUGS]]). Stan, brms and R use the standard deviation: `normal(mu, sigma)` and `dnorm(x, mean, sd)`. The code below converts both ways: τ = 0.001 is sd 31.6, and sd 2.5 is τ = 0.16. Mixing them up is a classic error, since `dnorm(0, 0.001)` read as an sd of 0.001 is an extremely tight prior.

[[Hobbs and Hooten 2015 Ch5]] and later chapters write JAGS code with precisions. The word has other uses: the φ of beta regression is also called a precision, and in the everyday sense precision means low sampling variability ([[Bias and Precision]]).

```r
tau <- 0.001; c(variance = 1 / tau, sd = 1 / sqrt(tau))
sigma <- 2.5; 1 / sigma^2
```

## Connections
- **Builds on:** [[Variance]], [[Standard Deviation]]
- **Leads to:** [[JAGS and BUGS]], [[Bias and Precision]], [[Conjugate Prior]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

How is precision related to variance?
??
Precision τ = 1/σ².
++++

Which software parameterises the normal by precision?
??
BUGS and JAGS. (Stan, brms and R use the standard deviation.)
++++
