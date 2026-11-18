---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The delta method approximates the standard error of a quantity calculated from estimates by using how steeply that quantity changes as the estimates change."
aliases:
  - "Propagation of error"
  - "Variance of a function of estimates"
status: seedling
---

# Delta Method

A shaky hand on a lever: if the lever magnifies movement five-fold, a 1 mm tremor at the handle becomes a 5 mm wobble at the tip. The **delta method** approximates the standard error of a quantity calculated from estimates by multiplying the estimate's wobble by how steeply the quantity changes ([[Variance of an Estimate]], [[Derivative]]). You have θ̂ with standard error SE(θ̂) and want g(θ̂), such as a back-transformed mean, a product of survival rates or a ratio. Near θ̂, treat g as a [[Equation of a Line|straight line]] with slope g′(θ̂), so SE(g(θ̂)) ≈ |g′(θ̂)| × SE(θ̂) ([[Standard Error]]). With several estimates it becomes a matrix formula using their [[Variance-Covariance Matrix|variance-covariance matrix]].

An example: a log-scale estimate b = 0.5 has SE 0.1, and you want the SE of exp(b). The derivative of exp(b) is exp(b) = 1.65, so the SE is about 1.65 × 0.1 = 0.165, and the code below confirms it by simulation. With b = 1 and SE 0.2 it would be e × 0.2 = 0.54. The code also finds the SE of the product of two independent survival rates, 0.8 and 0.6, by the delta method and by simulation, and the two agree.

It is an approximation, good when the SE is small relative to the curvature of g. Alternatives are to transform an interval's endpoints for one parameter ([[Back-transformation]]), to simulate from the estimates' [[Multivariate Distribution|multivariate]] normal, to use the [[Bootstrap]], or to go Bayesian, where [[Derived Quantities]] come free from the [[Posterior Draws|posterior draws]] ([[Powell and Gale 2015 Ch4]], [[Hobbs and Hooten 2015 Ch8]]). The common slip is applying the function to the SE: exp(SE) is not the SE of exp(estimate).

```r
b <- 0.5; se <- 0.1; exp(b) * se                                   # delta method: 0.165
set.seed(12); sd(exp(rnorm(1e5, b, se)))                           # simulation agrees
s1 <- 0.8; s2 <- 0.6; se1 <- 0.05; se2 <- 0.08                     # product of two independent survival rates
c(delta = sqrt((s2 * se1)^2 + (s1 * se2)^2), sim = sd(rnorm(1e5, s1, se1) * rnorm(1e5, s2, se2)))
```

## Connections
- **Builds on:** [[Variance of an Estimate]], [[Derivative]], [[Equation of a Line]], [[Variance-Covariance Matrix]], [[Multivariate Distribution]]
- **Leads to:** [[Back-transformation]], [[Derived Quantities]], [[Bootstrap]], [[Posterior Draws]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

What does the delta method provide?
??
An approximate standard error for a function of estimated parameters.
++++

One-parameter delta method formula?
??
SE(g(θ̂)) ≈ |g′(θ̂)| × SE(θ̂).
++++
