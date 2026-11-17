---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The Hessian matrix holds the curvatures of the log-likelihood surface at its peak, and inverting it gives the variances and covariances of the parameter estimates."
aliases:
  - "Hessian"
  - "Observed information"
  - "Fisher information"
  - "Curvature of the log-likelihood"
status: seedling
---

# Hessian Matrix

On a needle-like summit, one step sideways drops you a long way, so you know exactly where the top is; on a broad plateau you can wander without losing height, so the top's location is vague. The **Hessian matrix** measures that sharpness in every direction: it holds the curvatures of the log-likelihood surface at its peak. At the [[Maximum Likelihood Estimation|maximum likelihood estimate]] the slope of the log-likelihood is zero, and the second [[Derivative]] measures how quickly it falls away. Strong curvature means a lot of information and a small standard error. For one parameter, SE = 1 / √(curvature of the negative log-likelihood). For several, the second derivatives form a matrix, the Hessian, and its inverse is the [[Variance-Covariance Matrix]] of the estimates. Statisticians call this curvature "information" (Fisher information).

In the code below, `optim()` with `hessian = TRUE` fits a Poisson mean to 60 counts. One over the square root of the Hessian gives a standard error that matches the theoretical √(λ̂/n), and `glm()` reports its own standard error from the same inverse information, on the log scale ([[Standard Error]], [[Variance of an Estimate]]).

You meet it in warnings. "Hessian is not positive definite" means the surface is flat or saddle-shaped in some direction, so some parameter cannot be estimated and no valid standard errors exist; glmmTMB's convergence warnings refer to it ([[Convergence Warnings]], [[Hobbs and Hooten 2015 Ch4]]). The point to remember is that in likelihood fitting, standard errors do not come directly from the data's scatter but from the curvature of the log-likelihood. They are what [[Wald Confidence Interval|Wald intervals]] use.

```r
set.seed(5); y <- rpois(60, 5)
nll <- function(l) -sum(dpois(y, l, log = TRUE)); fit <- optim(4, nll, method = "BFGS", hessian = TRUE)
c(hessian = fit$hessian, se = sqrt(1 / fit$hessian), se_theory = sqrt(mean(y) / 60))
m <- glm(y ~ 1, family = poisson); sqrt(diag(vcov(m)))            # SE on the log scale from glm's own inverse information
```

## Connections
- **Builds on:** [[Maximum Likelihood Estimation]], [[Derivative]]
- **Leads to:** [[Standard Error]], [[Wald Confidence Interval]], [[Convergence Warnings]], [[Variance of an Estimate]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

How are standard errors obtained from a likelihood fit?
??
As square roots of the diagonal of the inverse Hessian of the negative log-likelihood at the MLE.
++++

What does "Hessian not positive definite" indicate?
??
The likelihood surface is flat or ill-shaped in some direction, so a parameter is not identifiable from the data.
++++
