---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Converged"
  - "Non-convergence"
  - "Convergence of an algorithm"
status: seedling
---

# Convergence

**In one line:** convergence means an iterative algorithm has settled on a stable answer and further steps would no longer change it.

> [!info] Before this, it helps to know
> [[Numerical Optimization]] (the commonest setting) · [[For Loop]] (iteration)

## The everyday picture
A ball rolling in a bowl. At first it swings widely. Eventually it sits still at the bottom. If the "bowl" is nearly flat, or tilted off the table, the ball never settles.

## Start from zero
1. **Iterative methods improve an answer step by step.**
2. **They stop when the change per step is below a tolerance.** That is convergence.
3. **Or they stop at a maximum number of steps without settling.** That is failure to converge.
4. **In optimisation:** converged means a (possibly local) optimum was found.
5. **In MCMC the word has a related meaning:** the chains have reached, and are sampling from, the posterior distribution.
6. **Why non-convergence matters:** estimates from an unconverged fit are simply where the algorithm happened to stop. Don't interpret them.
7. **Usual causes:** too little data for the model's complexity, predictors on wildly different scales, parameters at a boundary (a variance of zero), collinearity, bad starting values.
8. **Usual fixes:** rescale predictors, simplify the model, change optimiser, increase iterations, supply starting values.

## In R
```r
set.seed(4); x <- rnorm(30); y <- rbinom(30, 1, plogis(x))
m <- glm(y ~ x, family = binomial); c(converged = m$converged, iterations = m$iter)
y2 <- as.numeric(x > 0); m2 <- suppressWarnings(glm(y2 ~ x, family = binomial)); c(converged = m2$converged, iterations = m2$iter, slope = coef(m2)[2])   # perfectly separated data: no finite answer
```

## In the course
Discussed with mixed-model warnings ([[Harrison et al. 2018]]) and with MCMC diagnostics ([[Hobbs and Hooten 2015 Ch7]]).

## Common confusions
- **"No warning means the model is right."** Convergence says the algorithm finished. It says nothing about whether the model suits the data.

## Explain it back
- List four causes of non-convergence.

*Pass test:* you can check whether a fit converged and name first remedies.

## Connections
- **Builds on:** [[Numerical Optimization]]
- **Leads to:** [[Convergence Warnings]], [[Complete Separation]], [[R-hat]], [[Singular Fit]]
- **Part of:** [[MOC - Likelihood and Estimation]]

## Flashcards

What does convergence mean for a fitting algorithm?
??
The iterations have stabilised so that further steps no longer change the estimates beyond a tolerance.
++++

What should you do with estimates from a model that failed to converge?
??
Not interpret them. Diagnose and refit.
++++
