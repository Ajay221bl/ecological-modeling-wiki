---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
description: "The transformed parameters block defines quantities computed from parameters, such as a linear predictor or rescaled random effects, that are used in the model and saved with every draw."
aliases:
  - "transformed parameters block"
  - "Derived parameters in Stan"
status: seedling
---

# Transformed Parameters

The **transformed parameters** block defines quantities computed from parameters, such as a [[Linear Predictor|linear predictor]] or rescaled [[Random Effect|random effects]], that are used in the model and saved with every draw ([[Stan Program Blocks]]). For example, non-centred random effects are written `transformed parameters { vector[J] u = sigma_g * z; }` ([[Non-centered Parameterization]]). They are recomputed at every step of the sampler, so they can enter the likelihood, and they are saved in the output, so you get their posterior too.

Constraints declared here are checked, not enforced, so a violation rejects the proposal ([[Constrained Parameters]]). If you only need a value for output, put it in [[Generated Quantities]], which is cheaper. Putting a prior on a transformed parameter needs a [[Jacobian Adjustment]] unless the transform is linear and you understand the consequence.

This block appears in the Stan lab on [[Mixed Effects Model|mixed models]] ([[Course Website]], [[Random Intercepts in Stan]]). Transformed parameters are not sampled; they are computed from sampled parameters.

## Connections
- **Builds on:** [[Stan Program Blocks]], [[Linear Predictor]], [[Random Effect]], [[Mixed Effects Model]]
- **Leads to:** [[Non-centered Parameterization]], [[Generated Quantities]], [[Jacobian Adjustment]]
- **Part of:** [[MOC 17 - Stan|MOC - Stan]]

## Flashcards

What goes in the transformed parameters block?
??
Functions of parameters used in the model and saved with each draw.
++++
