---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Sampling variance"
  - "var(θ̂)"
  - "Estimator variance"
status: seedling
---

# Variance of an Estimate

**In one line:** the variance of an estimate measures how much that estimate would vary from one repetition of the study to the next, and its square root is the standard error.

> [!info] Before this, it helps to know
> [[Sampling Distribution]] (whose variance it is) · [[Variance]] (the measure) · [[Standard Error]] (its square root)

## The everyday picture
The spread of bullet holes from a rifle clamped in a vice. Each shot is one study's estimate. A tight cluster means a low-variance estimator.

## Start from zero
1. **var(θ̂) is the variance of the sampling distribution of θ̂.**
2. **SE = √var(θ̂).**
3. **For a mean:** σ²/n. **For a binomial proportion:** p(1 − p)/n.
4. **For ML estimates in general:** from the inverse of the Hessian.
5. **It falls as n rises.** Quadrupling n halves the standard error.
6. **Variances of independent estimates add.** var(A − B) = var(A) + var(B). That is how you get the SE of a difference.
7. **For functions of estimates** (a product of survival rates, a ratio) use the delta method or simulate.
8. **Why it matters:** an estimate without its variance can't be compared, combined or tested.

## In R
```r
p <- 0.3; n <- 50; c(var = p * (1 - p) / n, se = sqrt(p * (1 - p) / n))
set.seed(10); phat <- rbinom(1e5, n, p) / n; c(var(phat), sd(phat))
se_a <- 0.05; se_b <- 0.07; sqrt(se_a^2 + se_b^2)        # SE of a difference between two independent estimates
```

## In the course
[[Powell and Gale 2015 Ch3]] and Ch4 derive variances of ML estimates and of derived quantities.

## Common confusions
- **"Variance of the estimate = variance of the data."** The first shrinks with n, the second doesn't.

## Explain it back
- What is the SE of a difference between two independent estimates with SEs 0.3 and 0.4?

*Pass test:* you can compute the variance and SE of a proportion and of a difference.

## Connections
- **Builds on:** [[Sampling Distribution]], [[Variance]]
- **Leads to:** [[Standard Error]], [[Hessian Matrix]], [[Delta Method]], [[Precision]]
- **Part of:** [[MOC - Likelihood and Estimation]]

## Flashcards

What is the sampling variance of a binomial proportion?
??
p(1 − p)/n.
++++

How do you get the SE of the difference of two independent estimates?
??
√(SE₁² + SE₂²).
++++
