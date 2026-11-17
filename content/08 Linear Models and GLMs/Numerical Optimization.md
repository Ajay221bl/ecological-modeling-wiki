---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
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

**In one line:** numerical optimization is the computer's trial-and-improve search for the parameter values that minimise (or maximise) a function when no formula gives the answer directly.

> [!info] Before this, it helps to know
> [[Negative Log-likelihood]] (the function to minimise) · [[Derivative]] (slope tells which way is downhill) · [[Maximum Likelihood Estimation]] (the purpose)

## The everyday picture
Finding the lowest point of a valley in thick fog. You can't see the valley, but you can feel which way the ground slopes under your feet. Step downhill, feel again, step again. Stop when every direction is uphill.

## Start from zero
1. **Start at initial guesses** for the parameters.
2. **Evaluate the function there.**
3. **Work out a downhill direction,** from the slope or by trying nearby points.
4. **Take a step. Repeat.**
5. **Stop when improvements fall below a tolerance.** This is called convergence.
6. **What can go wrong, 1:** local minima. The fog-walker ends in a side hollow, not the true valley floor. Try several starting points.
7. **What can go wrong, 2:** flat regions. The data say little about a parameter, the walker wanders and the software warns of non-convergence.
8. **What can go wrong, 3:** badly scaled parameters. Rescaling predictors makes the valley rounder and easier.
9. **Every `glm`, `lmer` and `glmmTMB` fit runs such a search.** Their convergence warnings are the optimiser reporting trouble.

## See it
![[Optimization path.png|700]]
*What to look at:* the steps descending the contours of a negative log-likelihood surface to its minimum.

## In R
```r
set.seed(3); y <- rnorm(40, mean = 10, sd = 3)
nll <- function(par) -sum(dnorm(y, par[1], exp(par[2]), log = TRUE))     # sd on the log scale so it stays positive
fit <- optim(c(0, 0), nll); c(mean = fit$par[1], sd = exp(fit$par[2]), converged = fit$convergence == 0, evaluations = fit$counts[1])
c(mean(y), sd(y) * sqrt(39 / 40))                                        # the known answers
```

## In the course
The likelihood lab finds MLEs with `optim()` ([[Course Website]]). [[Hobbs and Hooten 2015 Ch4]], [[Zuur et al. 2009 Ch8]].

## Common confusions
- **"The optimiser's answer is the answer."** It is where the search stopped. Check convergence and, for hard models, other starting values.

## Explain it back
- Name three ways an optimiser can fail.

*Pass test:* you can fit a two-parameter model with `optim()` and check convergence.

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
