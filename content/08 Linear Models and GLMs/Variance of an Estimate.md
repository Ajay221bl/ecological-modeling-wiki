---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The variance of an estimate measures how much that estimate would vary from one repetition of the study to the next, and its square root is the standard error."
aliases:
  - "Sampling variance"
  - "var(θ̂)"
  - "Estimator variance"
status: seedling
---

# Variance of an Estimate

Clamp a rifle in a vice and fire: the spread of the bullet holes shows how steady the rifle is. Each shot is one study's estimate. The **variance of an estimate** measures how much that estimate would vary from one repetition of the study to the next: it is the [[Variance]] of the estimate's [[Sampling Distribution]], and its [[Square Root|square root]] is the [[Standard Error]]. For a mean it is σ²/n; for a binomial proportion p(1 − p)/n; for [[Maximum Likelihood Estimation|maximum likelihood]] estimates in general, it comes from the inverse of the [[Hessian Matrix]].

With p = 0.3 and n = 50, the variance of the estimated proportion is 0.3 × 0.7 / 50 = 0.0042, so the standard error is 0.065; the code below confirms both by simulating 100,000 studies. It falls as n rises: quadrupling n halves the standard error. Variances of independent estimates add, var(A − B) = var(A) + var(B), which is how you get the standard error of a difference; two estimates with SEs 0.05 and 0.07 have a difference with SE √(0.05² + 0.07²) = 0.086. For functions of estimates, such as a product of survival rates or a ratio, use the [[Delta Method]] or simulate.

An estimate without its variance cannot be compared, combined or tested, which is why [[Powell and Gale 2015 Ch3]] and Chapter 4 derive variances for both estimates and [[Derived Quantities|derived quantities]] ([[Precision]]). Do not confuse the variance of an estimate with the variance of the data: the first shrinks with n, the second does not.

```r
p <- 0.3; n <- 50; c(var = p * (1 - p) / n, se = sqrt(p * (1 - p) / n))
set.seed(10); phat <- rbinom(1e5, n, p) / n; c(var(phat), sd(phat))
se_a <- 0.05; se_b <- 0.07; sqrt(se_a^2 + se_b^2)        # SE of a difference between two independent estimates
```

## Connections
- **Builds on:** [[Sampling Distribution]], [[Variance]], [[Square Root]], [[Maximum Likelihood Estimation]]
- **Leads to:** [[Standard Error]], [[Hessian Matrix]], [[Delta Method]], [[Precision]], [[Derived Quantities]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

What is the sampling variance of a binomial proportion?
??
p(1 − p)/n.
++++

How do you get the SE of the difference of two independent estimates?
??
√(SE₁² + SE₂²).
++++
