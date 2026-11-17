---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
aliases:
  - "max_treedepth"
  - "Tree depth warning"
  - "Step size"
  - "stepsize"
status: seedling
---

# Step Size and Maximum Tree Depth

**In one line:** the step size controls how far each leapfrog step moves in Hamiltonian Monte Carlo, and maximum tree depth caps how many steps NUTS may take per iteration; the step size is tuned during warmup, the tree depth is a fixed limit you set (default 10), and hitting it is reported as a tree-depth warning.

> [!info] Before this, it helps to know
> [[Hamiltonian Monte Carlo]] · [[adapt_delta and Sampler Settings]]

## Start from zero
1. **Step size** is adapted during warmup to hit a target acceptance rate (adapt_delta, default 0.8).
2. **Smaller steps** follow curved posteriors more accurately but need more steps.
3. **Tree depth** d allows up to 2^d leapfrog steps; the default maximum is 10 (1024 steps).
4. **Tree-depth warnings are about efficiency,** not validity: the sampler stopped early but the draws are still correct.
5. **Divergences are about validity:** the step size was too big for the posterior's curvature.
6. **Fix tree-depth warnings** by reparameterising or rescaling predictors; raise `max_treedepth` only if needed.

## In the course
Stan labs ([[Course Website]]).

## Common confusions
- **"Tree-depth warnings mean the results are wrong."** They mean sampling was inefficient; divergences are the validity warning.

## Explain it back
- How many leapfrog steps does max_treedepth = 10 allow?

*Pass test:* you can interpret step-size and tree-depth warnings.

## Connections
- **Builds on:** [[Hamiltonian Monte Carlo]], [[adapt_delta and Sampler Settings]]
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
