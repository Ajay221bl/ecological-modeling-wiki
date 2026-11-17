---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Hessian"
  - "Observed information"
  - "Fisher information"
  - "Curvature of the log-likelihood"
status: seedling
---

# Hessian Matrix

**In one line:** the Hessian matrix holds the curvatures of the log-likelihood surface at its peak, and inverting it gives the variances and covariances of the parameter estimates.

> [!info] Before this, it helps to know
> [[Maximum Likelihood Estimation]] (the peak) · [[Derivative]] (curvature is a second derivative) · [[Variance-Covariance Matrix]] (what it yields)

## The everyday picture
The sharpness of a mountain summit. On a needle-like peak, one step sideways drops you a long way, so you know exactly where the top is. On a broad plateau you can wander without losing height, so the top's location is vague. The Hessian measures that sharpness in every direction.

## Start from zero
1. **At the MLE the slope of the log-likelihood is zero.**
2. **The second derivative measures how quickly it falls away.**
3. **Strong curvature = a lot of information = small standard error.**
4. **For one parameter:** SE = 1 / √(curvature of the negative log-likelihood).
5. **For several parameters,** the second derivatives form a matrix, the Hessian. Its inverse is the variance-covariance matrix of the estimates.
6. **"Information"** is the statisticians' name for this curvature (Fisher information).
7. **Why you meet it in warnings:** "Hessian is not positive definite" means the surface is flat or saddle-shaped in some direction, so some parameter can't be estimated. No valid standard errors exist.

## In R
```r
set.seed(5); y <- rpois(60, 5)
nll <- function(l) -sum(dpois(y, l, log = TRUE)); fit <- optim(4, nll, method = "BFGS", hessian = TRUE)
c(hessian = fit$hessian, se = sqrt(1 / fit$hessian), se_theory = sqrt(mean(y) / 60))
m <- glm(y ~ 1, family = poisson); sqrt(diag(vcov(m)))            # SE on the log scale from glm's own inverse information
```

## In the course
[[Hobbs and Hooten 2015 Ch4]] links curvature to precision. glmmTMB's convergence warnings refer to the Hessian.

## Common confusions
- **"Standard errors come from the data's scatter directly."** In likelihood fitting they come from the curvature of the log-likelihood.

## Explain it back
- What does a flat log-likelihood imply about the standard error?

*Pass test:* you can get a standard error from `optim(..., hessian = TRUE)`.

## Connections
- **Builds on:** [[Maximum Likelihood Estimation]], [[Derivative]]
- **Leads to:** [[Standard Error]], [[Wald Confidence Interval]], [[Convergence Warnings]], [[Variance of an Estimate]]
- **Part of:** [[MOC - Likelihood and Estimation]]

## Flashcards

How are standard errors obtained from a likelihood fit?
??
As square roots of the diagonal of the inverse Hessian of the negative log-likelihood at the MLE.
++++

What does "Hessian not positive definite" indicate?
??
The likelihood surface is flat or ill-shaped in some direction, so a parameter is not identifiable from the data.
++++
