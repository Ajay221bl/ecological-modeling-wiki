---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - stan
aliases: []
status: seedling
---

# Stan vs brms vs JAGS

> [!summary] In plain words
> Stan is the language and HMC engine, brms is an R formula interface that writes Stan code for regression-type models, and JAGS is an older engine using Gibbs-type samplers with BUGS code that can handle discrete parameters.

## The question
Should I write Stan code, use brms, or use JAGS?

## Built from
- [[Stan]], [[brms]], [[JAGS and BUGS]].
- [[Hamiltonian Monte Carlo]], [[Gibbs Sampling]].

## The reasoning, step by step
1. **brms:** fastest route for GLMMs, GAMs, zero-inflated and many families, with lme4-style formulas.
2. **Stan code:** any model you can write as a log density with continuous parameters: custom likelihoods, occupancy, state-space, mechanistic models.
3. **JAGS:** writes models as directed graphs; samples discrete latent states (like occupancy z) directly; slower mixing for correlated posteriors and no HMC diagnostics such as divergences.
4. **Hobbs and Hooten (2015)** teach with JAGS-style hierarchical models; the course labs move to Stan.

| | brms | Stan code | JAGS |
|---|---|---|---|
| Write | R formula | Stan program | BUGS code |
| Sampler | NUTS (Stan) | NUTS | Gibbs / slice |
| Discrete latent states | Via families only | Must marginalise | Sampled directly |
| Diagnostics | R-hat, ESS, divergences | Same | R-hat, ESS |
| Speed to first model | Fastest | Slower | Medium |
| Flexibility | High for regressions | Highest | High |

## So in practice
Use brms for standard models; read its Stan code with `make_stancode()`; write Stan yourself when the model goes beyond formulas.

## What would go wrong otherwise
Writing a random-intercept GLMM by hand in Stan for a homework that brms fits in one line, then spending the week debugging indices.

## Explain it back
- Why does Stan need discrete latent states marginalised?

*Pass test:* you can choose the right tool for a Bayesian model.

## Connections
- **Related:** [[lme4 vs brms]], [[Writing a Stan Model Step by Step]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Stan]], [[MOC - Bayesian Model Selection]]

## Flashcards

Main advantage of JAGS over Stan?
??
It samples discrete latent variables directly.
++++

Main advantage of brms?
??
Stan models from one R formula.
++++
