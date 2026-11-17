---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Numerical optimization is the computer's trial-and-improve search for the parameter values that minimise (or maximise) a function when no formula gives the answer directly."
aliases:
  - "Optimisation"
  - "Optimization"
  - "Optimizer"
  - "optim()"
  - "Numerical maximisation"
  - "Hill climbing"
status: seedling
---

# Numerical Optimization

To find the lowest point of a valley in thick fog, you feel which way the ground slopes under your feet, step downhill, feel again, and stop when every direction is uphill. **Numerical optimization** is the computer's version: a trial-and-improve search for the parameter values that minimise or maximise a function when no formula gives the answer directly. Start at initial guesses, evaluate the function, work out a downhill direction from the slope or by trying nearby points ([[Derivative]]), take a step, and repeat. Stop when improvements fall below a tolerance, which is called [[Convergence]]. In likelihood fitting the function is the [[Negative Log-likelihood]], and the goal is the [[Maximum Likelihood Estimation|maximum likelihood estimate]].

The figure shows the steps descending the contours of a negative log-likelihood surface. In the code below, `optim()` fits a normal mean and standard deviation to 40 values, with the SD on the log scale so it stays positive. It converges after a few dozen evaluations to the known answers, the sample mean and the SD with divisor n.

Three things can go wrong. Local minima: the search ends in a side hollow, not the true valley floor, so try several starting points. Flat regions: when the data say little about a parameter the search wanders and the software warns of non-convergence. And badly scaled parameters: rescaling predictors makes the valley rounder and easier to descend. Every `glm`, `lmer` and `glmmTMB` fit runs such a search ([[Iteratively Reweighted Least Squares]]), and their [[Convergence Warnings]] are the optimiser reporting trouble ([[Hobbs and Hooten 2015 Ch4]], [[Zuur et al. 2009 Ch8]], [[Course Website]]). The optimiser's answer is where the search stopped, not necessarily the answer: check convergence and, for hard models, other starting values. The curvature at the minimum gives standard errors ([[Hessian Matrix]]).

![[Optimization path.png|700]]
*What to look at:* the steps descending the contours of a negative log-likelihood surface to its minimum.

```r
set.seed(3); y <- rnorm(40, mean = 10, sd = 3)
nll <- function(par) -sum(dnorm(y, par[1], exp(par[2]), log = TRUE))     # sd on the log scale so it stays positive
fit <- optim(c(0, 0), nll); c(mean = fit$par[1], sd = exp(fit$par[2]), converged = fit$convergence == 0, evaluations = fit$counts[1])
c(mean(y), sd(y) * sqrt(39 / 40))                                        # the known answers
```

## Connections
- **Builds on:** [[Negative Log-likelihood]], [[Derivative]]
- **Leads to:** [[Convergence]], [[Iteratively Reweighted Least Squares]], [[Hessian Matrix]], [[Convergence Warnings]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

What is numerical optimization?
??
An iterative computer search for parameter values that minimise or maximise an objective function.
![[Optimization path.png]]
++++

What is a local optimum?
??
A point better than its neighbours but not the best overall, where a search can wrongly stop.
++++
