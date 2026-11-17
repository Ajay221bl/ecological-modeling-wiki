---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
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

**In one line:** a convergence warning means the optimiser stopped without clear evidence that it found the maximum of the likelihood, which may or may not mean the estimates are wrong.

> [!info] Before this, it helps to know
> [[Numerical Optimization|Optimization]] · [[lmer() and glmer()]]

## Start from zero
1. **Typical lme4 message:** "Model failed to converge with max|grad| = 0.0042 (tol = 0.002)".
2. **First fixes:** centre and scale continuous predictors, check for complete separation, simplify the random structure.
3. **Change or extend the optimiser:** `glmerControl(optimizer = "bobyqa", optCtrl = list(maxfun = 2e5))`.
4. **`allFit(m)`** refits with every available optimiser. If all agree, the warning was a false alarm.
5. **`performance::check_convergence(m)`** gives a second opinion on the gradient.
6. **Warnings are more common with large data** (the gradient test is strict) and with complex random effects.
7. **The GLMM lab** works through a non-converging model step by step (scaling length, sum-to-zero contrasts).

## In R
```r
library(lme4); set.seed(10); d <- data.frame(g = factor(rep(1:15, each = 20)), x = rnorm(300, 5000, 1000)); d$y <- rbinom(300, 1, plogis(-5 + 0.001 * d$x + rnorm(15)[d$g]))
m1 <- suppressWarnings(glmer(y ~ x + (1 | g), family = binomial, data = d)); m2 <- glmer(y ~ scale(x) + (1 | g), family = binomial, data = d)
c(raw_x_converged = performance::check_convergence(m1)[1], scaled_x_converged = performance::check_convergence(m2)[1])
```

## In the course
GLMM lab: model fails to converge, simplified step by step, `performance::check_convergence()` ([[Course Website]]).

## Common confusions
- **"Ignore convergence warnings."** Check them with allFit or rescaling.
- **"Any warning means the results are useless."** Often the estimates are fine; verify.

## Explain it back
- What is the first thing to try when glmer won't converge?

*Pass test:* you can work through a convergence warning.

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
