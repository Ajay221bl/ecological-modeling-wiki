---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
aliases:
  - "Jacobian"
  - "Change of variables"
  - "Log absolute Jacobian determinant"
status: seedling
---

# Jacobian Adjustment

**In one line:** a Jacobian adjustment is the extra term you add to the log density when you put a prior on a nonlinear transformation of a parameter, so that the implied prior on the original parameter is what you intended.

> [!info] Before this, it helps to know
> [[Constrained Parameters]] · [[Transformed Parameters]] · [[Probability Density]]

## The everyday picture
Stretching a rubber map. If you squeeze one region and stretch another, a uniform layer of paint becomes thicker in the squeezed part. The Jacobian corrects for the stretching.

## Start from zero
1. **Densities change under transformation:** if θ = exp(φ), a flat prior on θ is not flat on φ.
2. **Stan adds Jacobians automatically** for declared constraints (`<lower=0>`).
3. **You must add one yourself** if you write `log_sigma ~ normal(...)` where log_sigma is a transformed parameter and sigma is the declared parameter.
4. **Rule of thumb:** put priors on declared parameters; if you put one on a nonlinear transform, add `target += log|dθ/dφ|`.
5. **Stan warns** ("left-hand side of sampling statement may contain a non-linear transform") to remind you.

## In the course
General Stan prerequisite (not named in the course sources).

## Common confusions
- **"The Jacobian warning can always be ignored."** It can be ignored only for linear transforms or if you deliberately accept the implied prior.

## Explain it back
- When does Stan add the Jacobian for you?

*Pass test:* you can recognise when a Jacobian adjustment is needed.

## Connections
- **Builds on:** [[Constrained Parameters]], [[Transformed Parameters]]
- **Leads to:** [[Sampling Statements and target +=]]
- **Part of:** [[MOC - Stan]]

## Flashcards

When do you need a manual Jacobian adjustment in Stan?
??
When a prior is placed on a nonlinear transformation of a declared parameter.
++++
