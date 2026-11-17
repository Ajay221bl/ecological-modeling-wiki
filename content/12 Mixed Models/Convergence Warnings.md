---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "A convergence warning means the optimiser stopped without clear evidence that it found the maximum of the likelihood, which may or may not mean the estimates are wrong."
aliases:
  - "Convergence warnings and optimizers"
  - "Failed to converge"
  - "max|grad|"
  - "allFit()"
  - "glmerControl()"
  - "bobyqa"
  - "Nelder-Mead"
  - "check_convergence()"
status: seedling
---

# Convergence Warnings

A **convergence warning** means the optimiser stopped without clear evidence that it found the maximum of the likelihood, which may or may not mean the estimates are wrong ([[Numerical Optimization|Optimization]], [[lmer() and glmer()]]). A typical lme4 message is "Model failed to converge with max|grad| = 0.0042 (tol = 0.002)". They are more common with large data, where the gradient test is strict, and with complex random effects.

First fixes are to centre and scale continuous predictors, check for complete separation, and simplify the random structure. Then change or extend the optimiser with `glmerControl(optimizer = "bobyqa", optCtrl = list(maxfun = 2e5))`; `allFit(m)` refits with every available optimiser, and if they all agree the warning was a false alarm. `performance::check_convergence(m)` gives a second opinion on the gradient ([[performance Package Checks]]). In the code below a predictor on a scale of thousands does not converge, while the same model with `scale(x)` does.

The GLMM lab works through a non-converging model step by step, scaling length and using sum-to-zero contrasts ([[Course Website]]). Don't ignore convergence warnings, but don't assume they make the results useless either: check them with `allFit` or rescaling.

```r
library(lme4); set.seed(10); d <- data.frame(g = factor(rep(1:15, each = 20)), x = rnorm(300, 5000, 1000)); d$y <- rbinom(300, 1, plogis(-5 + 0.001 * d$x + rnorm(15)[d$g]))
m1 <- suppressWarnings(glmer(y ~ x + (1 | g), family = binomial, data = d)); m2 <- glmer(y ~ scale(x) + (1 | g), family = binomial, data = d)
c(raw_x_converged = performance::check_convergence(m1)[1], scaled_x_converged = performance::check_convergence(m2)[1])
```

## Connections
- **Builds on:** [[Numerical Optimization|Optimization]], [[lmer() and glmer()]]
- **Leads to:** [[Singular Fit]], [[Standardizing|Standardizing Predictors]], [[Complete Separation]], [[performance Package Checks]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What does allFit() do?
??
Refits a model with every available optimiser to see whether they agree.
++++

Name two first fixes for a glmer convergence warning.
??
Centre and scale predictors; simplify the random structure (or change optimiser).
++++
