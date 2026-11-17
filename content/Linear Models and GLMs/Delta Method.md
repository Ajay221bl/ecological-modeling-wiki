---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Propagation of error"
  - "Variance of a function of estimates"
status: seedling
---

# Delta Method

**In one line:** the delta method approximates the standard error of a quantity calculated from estimates by using how steeply that quantity changes as the estimates change.

> [!info] Before this, it helps to know
> [[Variance of an Estimate]] (the input) · [[Derivative]] (the steepness) · [[Standard Error]] (the output)

## The everyday picture
A shaky hand on a lever. If the lever magnifies movement five-fold, a 1 mm tremor at the handle becomes a 5 mm wobble at the tip. The delta method multiplies the estimate's wobble by the steepness of the transformation.

## A tiny example
Log-scale estimate b = 0.5 with SE 0.1. Wanted: SE of exp(b).
- Derivative of exp(b) is exp(b) = 1.65.
- SE ≈ 1.65 × 0.1 = 0.165.

## Start from zero
1. **You have θ̂ with standard error SE(θ̂).**
2. **You want g(θ̂)** and its SE: a back-transformed mean, a product of survival rates, a ratio.
3. **Near θ̂, treat g as a straight line** with slope g′(θ̂).
4. **SE(g(θ̂)) ≈ |g′(θ̂)| × SE(θ̂).**
5. **With several estimates** it becomes a matrix formula using their variance-covariance matrix.
6. **It is an approximation,** good when the SE is small compared with the curvature of g.
7. **Alternatives:** transform the interval's endpoints (for one parameter), simulate from the estimates' multivariate normal, bootstrap, or go Bayesian, where derived quantities come free from the posterior draws.

## In R
```r
b <- 0.5; se <- 0.1; exp(b) * se                                   # delta method: 0.165
set.seed(12); sd(exp(rnorm(1e5, b, se)))                           # simulation agrees
s1 <- 0.8; s2 <- 0.6; se1 <- 0.05; se2 <- 0.08                     # product of two independent survival rates
c(delta = sqrt((s2 * se1)^2 + (s1 * se2)^2), sim = sd(rnorm(1e5, s1, se1) * rnorm(1e5, s2, se2)))
```

## In the course
[[Powell and Gale 2015 Ch4]] presents it for variances of derived demographic parameters. [[Hobbs and Hooten 2015 Ch8]] shows the Bayesian alternative.

## Common confusions
- **"Apply the function to the SE."** exp(SE) is not the SE of exp(estimate).

## Explain it back
- Find the approximate SE of exp(b) when b = 1 and SE = 0.2.

*Pass test:* you can apply the one-parameter delta method.

## Connections
- **Builds on:** [[Variance of an Estimate]], [[Derivative]]
- **Leads to:** [[Back-transformation]], [[Derived Quantities]], [[Bootstrap]]
- **Part of:** [[MOC - Likelihood and Estimation]]

## Flashcards

What does the delta method provide?
??
An approximate standard error for a function of estimated parameters.
++++

One-parameter delta method formula?
??
SE(g(θ̂)) ≈ |g′(θ̂)| × SE(θ̂).
++++
