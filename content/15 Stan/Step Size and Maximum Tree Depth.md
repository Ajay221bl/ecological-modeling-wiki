---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
description: "The step size controls how far each leapfrog step moves in Hamiltonian Monte Carlo, and maximum tree depth caps how many steps NUTS may take per iteration; the step size is tuned during warmup, the tree depth is a fixed limit you set (default 10), and hitting it is reported as a tree-depth warning."
aliases:
  - "max_treedepth"
  - "Tree depth warning"
  - "Step size"
  - "stepsize"
status: seedling
---

# Step Size and Maximum Tree Depth

The **step size** controls how far each leapfrog step moves in Hamiltonian Monte Carlo, and the **maximum tree depth** caps how many steps NUTS may take per iteration ([[Hamiltonian Monte Carlo]], [[adapt_delta and Sampler Settings]]). The step size is tuned during warmup to hit a target [[Acceptance Rate|acceptance rate]], adapt_delta, default 0.8. Smaller steps follow curved posteriors more accurately but need more steps. Tree depth d allows up to 2^d leapfrog steps, and the default maximum of 10 allows 1,024; hitting it is reported as a tree-depth warning.

Tree-depth warnings are about efficiency, not validity: the sampler stopped early, but the draws are still correct. Divergences are about validity: the step size was too big for the posterior's curvature ([[Divergent Transitions]]). Fix tree-depth warnings by reparameterising or [[Scaling Predictors|rescaling]] [[Predictor Variable|predictors]], and raise `max_treedepth` only if needed ([[Non-centered Parameterization]], [[Standardizing|Standardization]]).

These settings come up in the Stan labs ([[Course Website]], [[Running Stan from R]]). Tree-depth warnings don't mean the results are wrong; they mean sampling was inefficient, and divergences are the validity warning.

## Connections
- **Builds on:** [[Hamiltonian Monte Carlo]], [[adapt_delta and Sampler Settings]], [[Acceptance Rate]], [[Scaling Predictors]], [[Predictor Variable]]
- **Leads to:** [[Divergent Transitions]], [[Non-centered Parameterization]]
- **Part of:** [[MOC 17 - Stan|MOC - Stan]]

## Flashcards

Is a max tree depth warning a validity or efficiency problem?
??
Efficiency.
++++

How many leapfrog steps does tree depth 10 allow?
??
Up to 2¹⁰ = 1024.
++++
