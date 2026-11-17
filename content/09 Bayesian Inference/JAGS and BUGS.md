---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "JAGS"
  - "BUGS"
  - "WinBUGS"
  - "OpenBUGS"
  - "rjags"
  - "R2jags"
  - "Just Another Gibbs Sampler"
status: seedling
---

# JAGS and BUGS

**In one line:** BUGS and JAGS are programs that fit Bayesian models written in a simple model language, using Gibbs sampling and related methods.

> [!info] Before this, it helps to know
> [[Gibbs Sampling]] (their main algorithm) · [[Directed Acyclic Graph]] (how models are thought of) · [[Precision Parameter]] (their normal parameterisation)

## The everyday picture
An earlier generation of the same tool. BUGS (1990s) was the first widely used "write the model, get the posterior" program. JAGS is its open-source, cross-platform successor. Stan is the newer design with a different engine.

## Start from zero
1. **You write the model as statements:** `y[i] ~ dpois(lambda[i])`, `log(lambda[i]) <- b0 + b1 * x[i]`, `b0 ~ dnorm(0, 0.001)`.
2. **`~` means "is distributed as". `<-` means "is computed as".**
3. **The program works out the full conditionals** and samples them.
4. **Normals use precision:** `dnorm(mean, tau)`.
5. **The language is declarative:** the order of lines doesn't matter.
6. **Strength:** discrete latent variables (occupancy states, alive/dead) are handled directly, which Stan can't do without marginalising.
7. **Weakness:** slower mixing for correlated or hierarchical parameters.
8. **From R:** `rjags`, `R2jags`, `jagsUI`. NIMBLE is a newer relative using the same language.
9. **Hobbs and Hooten's book and much of the ecological literature use JAGS.**

## In R
```r
# norun (needs JAGS; shown for the language)
model_string <- "model {
  for (i in 1:n) {
    y[i] ~ dpois(lambda[i])
    log(lambda[i]) <- b0 + b1 * x[i]
  }
  b0 ~ dnorm(0, 0.001)     # precision 0.001 = sd about 32
  b1 ~ dnorm(0, 0.001)
}"
# jm <- rjags::jags.model(textConnection(model_string), data = list(y = y, x = x, n = length(y)), n.chains = 3)
# post <- rjags::coda.samples(jm, c("b0", "b1"), n.iter = 5000)
```

## In the course
[[Hobbs and Hooten 2015 Ch7]] and Ch8 give JAGS code. Mentioned beside Stan in the lectures ([[Course Website]]).

## Common confusions
- **"dnorm(0, 0.001) is a tight prior."** In JAGS the second argument is precision, so this is very wide.

## Explain it back
- What do `~` and `<-` mean in the BUGS language?

*Pass test:* you can read a short JAGS model.

## Connections
- **Builds on:** [[Gibbs Sampling]], [[Precision Parameter]]
- **Leads to:** [[Stan]], [[Latent Variable]], [[Directed Acyclic Graph]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[JAGS vs Stan]]

## Flashcards

What are BUGS and JAGS?
??
Software for Bayesian modeling via Gibbs sampling, using a declarative model language.
++++

How does JAGS parameterise the normal distribution?
??
By mean and precision (1/variance).
++++
