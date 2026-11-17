---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Gibbs variable selection"
  - "Kuo and Mallick"
  - "Inclusion indicators"
  - "Inclusion probability"
status: seedling
---

# Indicator Variable Selection

**In one line:** indicator variable selection multiplies each coefficient by a 0/1 switch that the sampler estimates, so the posterior mean of a switch is the probability that its predictor belongs in the model.

> [!info] Before this, it helps to know
> [[Bernoulli Distribution]] (the switches) · [[Latent Variable]] (what the switches are) · [[Bayesian Model Averaging]] (what it achieves)

## Start from zero
1. **Linear predictor: η = β₀ + z₁β₁x₁ + z₂β₂x₂ + ...**
2. **zⱼ ~ Bernoulli(0.5)** (or another prior inclusion probability).
3. **The sampler switches predictors in and out.**
4. **Posterior mean of zⱼ = posterior inclusion probability.**
5. **Each combination of switches is a model,** so the chain explores the model space and averages over it.
6. **Easy in JAGS** (discrete switches). Stan needs a continuous approximation such as a spike-and-slab prior or a horseshoe.
7. **Sensitive to the prior on β when switched on:** too wide and the predictor is rarely included.

## In R
```r
# norun (JAGS model fragment, shown for structure)
# for (j in 1:J) { z[j] ~ dbern(0.5); b[j] ~ dnorm(0, 1) }
# for (i in 1:n) { mu[i] <- b0 + inprod(z[] * b[], X[i, ]) ; y[i] ~ dnorm(mu[i], tau) }
```

## In the course
[[Hobbs and Hooten 2015 Ch9]].

## Common confusions
- **"Inclusion probability is like a p-value."** It is a posterior probability that the term belongs, under the stated priors.

## Explain it back
- What does the posterior mean of an indicator estimate?

*Pass test:* you can write the indicator model.

## Connections
- **Builds on:** [[Bernoulli Distribution]], [[Latent Variable]]
- **Leads to:** [[Spike-and-slab Prior]], [[Reversible-jump MCMC]], [[Bayesian Model Averaging]]
- **Part of:** [[MOC - Bayesian Model Selection]]

## Flashcards

In indicator variable selection, what is the posterior mean of an indicator?
??
The posterior probability that the corresponding predictor is included.
++++
