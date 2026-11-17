---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - stan
aliases: []
status: seedling
---

# Writing a Stan Model Step by Step

> [!summary] In plain words
> writing a Stan model means declaring data, declaring parameters with constraints, writing priors and likelihood, adding generated quantities, then simulating fake data to check the code recovers known values before fitting real data.

## The question
How do I go from a model on paper to a working Stan program?

## Built from
- [[Stan Program Blocks]], [[Data Types in Stan]], [[Constrained Parameters]].
- [[Sampling Statements and target +=]], [[Generated Quantities]].
- [[Running Stan from R]], [[R-hat]], [[Divergent Transitions]].

## See it
mermaid:
flowchart TD
  A["Model on paper"] --> B["data block"] --> C["parameters block (with bounds)"] --> D["model block: priors + likelihood"]
  D --> E["generated quantities: y_rep, log_lik"] --> F["Fit simulated data: recover truth?"]
  F -->|"yes"| G["Fit real data"] --> H["Diagnostics: R-hat, ESS, divergences"] --> I["PPC and interpretation"]
  F -->|"no"| D
*What to look at:* the fake-data loop catches bugs before they become conclusions.

## The reasoning, step by step
1. **Write the model in maths** first: y_i ~ normal(a + b x_i, σ), priors on a, b, σ.
2. **Data block:** every number you will supply, with types and sizes.
3. **Parameters block:** every unknown, with bounds.
4. **Model block:** priors, then the likelihood, vectorised.
5. **Generated quantities:** y_rep and log_lik.
6. **Simulate fake data** with known parameters and fit; the posterior should cover the truth.
7. **Fit the real data,** then check diagnostics: R-hat ≤ 1.01, ESS in the hundreds, no divergences.
8. **Posterior predictive check,** then interpret.

## So in practice
Keep the model in a `.stan` file under version control, and keep the fake-data simulation script next to it.

## What would go wrong otherwise
Fitting real data first, getting plausible-looking numbers, and never discovering that a typo made the slope prior dominate.

## Explain it back
- Why fit simulated data first?

*Pass test:* you can write, test and fit a Stan model.

## Connections
- **Related:** [[Bayesian Mixed Model Workflow in R]], [[Stan vs brms vs JAGS]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 17 - Stan|MOC - Stan]]

## Flashcards

Why fit a Stan model to simulated data first?
??
To check the code recovers known parameter values before trusting results on real data.
++++
