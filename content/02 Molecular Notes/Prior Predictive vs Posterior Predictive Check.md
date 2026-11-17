---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - bayes
aliases: []
status: seedling
---

# Prior Predictive vs Posterior Predictive Check

> [!summary] In plain words
> a prior predictive check simulates data from the priors alone to test whether your assumptions are sensible before fitting, and a posterior predictive check simulates from the fitted model to test whether it reproduces the data you observed.

## The question
Both simulate fake data from the model. What is each one for?

## Built from
- [[Prior Predictive Check]]: before the data.
- [[Posterior Predictive Check]]: after the data.
- [[Posterior Predictive Distribution]]: where replicates come from.
- [[Bayesian P-value]]: a numerical summary of the second.

## The reasoning, step by step
1. **Prior predictive.** Parameters drawn from the prior. Question: could these priors generate believable data? Compared against: general knowledge of the system.
2. **Posterior predictive.** Parameters drawn from the posterior. Question: does the fitted model generate data like mine? Compared against: the observed data.
3. **What each catches.** Prior: priors that imply impossible values. Posterior: wrong distribution, missing structure, overdispersion, excess zeros.
4. **Order in a workflow:** prior check, fit, sampler diagnostics, posterior check.

| | Prior predictive | Posterior predictive |
|---|---|---|
| Parameters from | Prior | Posterior |
| Uses observed data | No | Yes |
| Tests | Priors | Model fit |
| brms | `sample_prior = "only"` | `pp_check(fit)` |

## So in practice
Do both. The first takes a minute and prevents many sampling problems.

## What would go wrong otherwise
Skipping the prior check: discovering after hours of sampling that the priors allowed 10¹⁵ birds per plot. Skipping the posterior check: reporting a model that can't reproduce its own data.

## Explain it back
- What is each check compared against?

*Pass test:* you can place both checks in a workflow.

## Connections
- **Related:** [[How to choose a prior]], [[How to check an MCMC fit]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What does a prior predictive check test, compared with a posterior predictive check?
??
Prior: whether the priors imply plausible data. Posterior: whether the fitted model reproduces the observed data.
++++
