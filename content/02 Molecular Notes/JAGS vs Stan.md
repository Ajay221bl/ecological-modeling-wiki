---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - bayes
aliases:
  - "Stan vs JAGS"
  - "Gibbs vs HMC software"
status: seedling
---

# JAGS vs Stan

> [!summary] In plain words
> JAGS samples with Gibbs-type updates and handles discrete latent variables directly, while Stan uses Hamiltonian Monte Carlo, which is far more efficient for continuous hierarchical models but needs discrete unknowns to be summed out.

## The question
Why do some ecologists use JAGS and others Stan, and does it change the results?

## Built from
- [[JAGS and BUGS]]: Gibbs sampling, declarative language, precision parameterisation.
- [[Stan]]: HMC and NUTS, imperative language, standard deviations.
- [[Gibbs Sampling]] and [[Hamiltonian Monte Carlo]]: the engines.
- [[Latent Variable]]: where they differ most.

## The reasoning, step by step
1. **Same goal:** posterior draws for a model you specify.
2. **Algorithm.** JAGS: one parameter at a time. Stan: all parameters together along a trajectory.
3. **Efficiency.** Stan's draws are much less autocorrelated. Thousands of iterations do the work of JAGS's tens of thousands.
4. **Discrete parameters.** JAGS: fine (z[i] ~ dbern(psi)). Stan: must be marginalised out by hand.
5. **Language.** JAGS: order-free statements, `dnorm(mu, tau)`. Stan: typed blocks run in order, `normal(mu, sigma)`.
6. **Diagnostics.** Stan reports divergences and other warnings that reveal problem posteriors. JAGS is quieter, for better and worse.
7. **Results.** For the same model and priors, the posteriors agree.

| | JAGS | Stan |
|---|---|---|
| Sampler | Gibbs and relatives | HMC / NUTS |
| Normal written as | dnorm(mean, precision) | normal(mean, sd) |
| Discrete latent states | Direct | Marginalise |
| Typical iterations | 10,000s | 1,000s |
| R front ends | rjags, R2jags, jagsUI | rstan, cmdstanr, brms |

## So in practice
Regression-type and mixed models: brms or Stan. Occupancy and capture-recapture models written with explicit latent states: JAGS or NIMBLE is often simpler.

## What would go wrong otherwise
Copying a JAGS prior `dnorm(0, 0.001)` into Stan as `normal(0, 0.001)` turns a vague prior into an extremely tight one.

## Explain it back
- What goes wrong when a JAGS normal prior is pasted into Stan unchanged?

*Pass test:* you can name three differences and one consequence.

## Connections
- **Related:** [[How MCMC turns a formula into a posterior]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Bayesian Inference]], [[MOC - Stan]]

## Flashcards

Main algorithmic difference between JAGS and Stan?
??
JAGS uses Gibbs-type sampling. Stan uses Hamiltonian Monte Carlo (NUTS).
++++

How do JAGS and Stan differ in specifying a normal distribution?
??
JAGS uses precision. Stan uses standard deviation.
++++
