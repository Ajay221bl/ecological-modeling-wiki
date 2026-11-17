---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
description: "A Jacobian adjustment is the extra term you add to the log density when you put a prior on a nonlinear transformation of a parameter, so that the implied prior on the original parameter is what you intended."
aliases:
  - "Jacobian"
  - "Change of variables"
  - "Log absolute Jacobian determinant"
status: seedling
---

# Jacobian Adjustment

Stretching a rubber map makes a uniform layer of paint thicker where the map is squeezed; the Jacobian corrects for the stretching. A **Jacobian adjustment** is the extra term you add to the log density when you put a prior on a nonlinear transformation of a parameter, so that the implied prior on the original parameter is what you intended ([[Constrained Parameters]], [[Transformed Parameters]], [[Probability Density]]). Densities change under transformation: if θ = exp(φ), a flat prior on θ is not flat on φ.

Stan adds Jacobians automatically for declared constraints such as `<lower=0>`. You must add one yourself if you write `log_sigma ~ normal(...)` where log_sigma is a transformed parameter and sigma is the declared parameter. The rule of thumb is to put priors on declared parameters, and if you put one on a nonlinear transform, add `target += log|dθ/dφ|` ([[Sampling Statements and target +=]], [[Derivative]]). Stan warns "left-hand side of sampling statement may contain a non-linear transform" to remind you.

It is a general Stan prerequisite, not named in the course sources ([[Stan]]). The Jacobian warning can't always be ignored: only for linear transforms, or if you deliberately accept the implied prior.

## Connections
- **Builds on:** [[Constrained Parameters]], [[Transformed Parameters]]
- **Leads to:** [[Sampling Statements and target +=]]
- **Part of:** [[MOC 17 - Stan|MOC - Stan]]

## Flashcards

When do you need a manual Jacobian adjustment in Stan?
??
When a prior is placed on a nonlinear transformation of a declared parameter.
++++
