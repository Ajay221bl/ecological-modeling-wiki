---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Gibbs sampler"
  - "Gibbs updates"
  - "Gibbs"
status: seedling
---

# Gibbs Sampling

**In one line:** Gibbs sampling updates one parameter at a time by drawing it directly from its full-conditional distribution, cycling through all parameters over and over.

> [!info] Before this, it helps to know
> [[Full-conditional Distribution]] (what is drawn from) · [[Conjugate Prior]] (what makes those draws easy) · [[MCMC]] (the family)

## The everyday picture
Tidying a house one room at a time. You can't clean it all at once. But given the present state of the other rooms, you can put this one in order. Go round and round, and the whole house gets there.

## Start from zero
1. **Start with values for all parameters.**
2. **Draw parameter 1 from [θ₁ | all others, data].**
3. **Draw parameter 2 from [θ₂ | all others (using the new θ₁), data].**
4. **Continue through all parameters.** That is one iteration.
5. **Repeat.** The sequence converges to the joint posterior.
6. **No proposals are rejected.** Each draw comes from the exact conditional.
7. **Needs recognisable full conditionals,** which conjugate priors provide.
8. **Weakness:** when parameters are strongly correlated, moving one at a time is slow.
9. **JAGS stands for "Just Another Gibbs Sampler".** BUGS: "Bayesian inference Using Gibbs Sampling". Both mix Gibbs with other methods where needed.

## In R
```r
set.seed(19); rho <- 0.9; x <- y <- 0; out <- matrix(NA, 5000, 2)        # Gibbs for a correlated bivariate normal
for (i in 1:5000) { x <- rnorm(1, rho * y, sqrt(1 - rho^2)); y <- rnorm(1, rho * x, sqrt(1 - rho^2)); out[i, ] <- c(x, y) }
round(c(cor = cor(out)[1, 2], sd_x = sd(out[, 1]), lag1_autocorrelation = acf(out[, 1], plot = FALSE)$acf[2]), 2)
```

## In the course
[[Hobbs and Hooten 2015 Ch7]].

## Common confusions
- **"Gibbs is a different idea from Metropolis-Hastings."** It is the special case with acceptance probability 1.

## Explain it back
- What does one Gibbs iteration consist of?

*Pass test:* you can describe the cycle and say when it is slow.

## Connections
- **Builds on:** [[Full-conditional Distribution]], [[Conjugate Prior]]
- **Leads to:** [[JAGS and BUGS]], [[Metropolis-Hastings Algorithm]], [[Hamiltonian Monte Carlo]], [[Chain Autocorrelation]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

How does Gibbs sampling work?
??
It cycles through the parameters, drawing each from its full-conditional distribution given the current values of the others.
++++

What do JAGS and BUGS stand for?
??
Just Another Gibbs Sampler. Bayesian inference Using Gibbs Sampling.
++++
