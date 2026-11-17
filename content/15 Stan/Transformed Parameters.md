---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
aliases:
  - "transformed parameters block"
  - "Derived parameters in Stan"
status: seedling
---

# Transformed Parameters

**In one line:** the transformed parameters block defines quantities computed from parameters, such as a linear predictor or rescaled random effects, that are used in the model and saved with every draw.

> [!info] Before this, it helps to know
> [[Stan Program Blocks]]

## A tiny example
Non-centred random effects:
```
transformed parameters {
  vector[J] u = sigma_g * z;
}
```

## Start from zero
1. **Recomputed at every step of the sampler,** so they can enter the likelihood.
2. **Saved in the output,** so you get their posterior too.
3. **Constraints declared here are checked,** not enforced; a violation rejects the proposal.
4. **If you only need the value for output,** put it in generated quantities (cheaper).
5. **Putting a prior on a transformed parameter** needs a [[Jacobian Adjustment]] unless the transform is linear and you understand the consequence.

## In the course
Stan lab: mixed models ([[Course Website]]).

## Common confusions
- **"Transformed parameters are sampled."** They are computed from sampled parameters.

## Explain it back
- When would you use generated quantities instead?

*Pass test:* you can place a derived quantity in the right block.

## Connections
- **Builds on:** [[Stan Program Blocks]]
- **Leads to:** [[Non-centered Parameterization]], [[Generated Quantities]], [[Jacobian Adjustment]]
- **Part of:** [[MOC 17 - Stan|MOC - Stan]]

## Flashcards

What goes in the transformed parameters block?
??
Functions of parameters used in the model and saved with each draw.
++++
