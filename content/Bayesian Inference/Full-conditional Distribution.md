---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Full conditional"
  - "Full conditional distribution"
  - "Full conditionals"
status: seedling
---

# Full-conditional Distribution

**In one line:** the full-conditional distribution of a parameter is its distribution given the data and the current values of every other unknown in the model.

> [!info] Before this, it helps to know
> [[Conditional Probability]] (the idea) · [[Joint Posterior Distribution]] (what it is a slice of) · [[Directed Acyclic Graph]] (how to find it)

## The everyday picture
A sudoku cell. Given everything else on the board, what can this one cell be? You solve the puzzle one cell at a time, each time treating the rest as known.

## Start from zero
1. **The joint posterior of many parameters is hard to sample at once.**
2. **Take one parameter. Hold all the others fixed.**
3. **Its distribution given everything else is its full conditional.**
4. **To find it:** collect every term of the joint distribution that contains the parameter and drop the rest (constants).
5. **On a DAG:** the terms involving a node, its parents and its children.
6. **Often it is a simple, recognisable distribution** thanks to conjugacy.
7. **MCMC cycles through parameters,** updating each from its full conditional. That is Gibbs sampling.

## In R
```r
set.seed(10); y <- rnorm(30, 5, 2); mu <- 0; tau <- 1                # sample a mean and a precision by alternating full conditionals
out <- matrix(NA, 2000, 2)
for (i in 1:2000) {
  mu <- rnorm(1, (tau * sum(y)) / (tau * 30 + 0.001), sqrt(1 / (tau * 30 + 0.001)))        # [mu | tau, y], prior Normal(0, precision 0.001)
  tau <- rgamma(1, 0.01 + 15, 0.01 + sum((y - mu)^2) / 2)                                   # [tau | mu, y], prior Gamma(0.01, 0.01)
  out[i, ] <- c(mu, 1 / sqrt(tau)) }
round(colMeans(out[-(1:200), ]), 2); round(c(mean(y), sd(y)), 2)
```

## In the course
[[Hobbs and Hooten 2015 Ch7]] derives full conditionals as the basis of MCMC.

## Common confusions
- **"The full conditional is the marginal posterior."** It conditions on the other parameters. The marginal averages over them.

## Explain it back
- How do you find a full conditional from the joint distribution?

*Pass test:* you can say what is held fixed in a full conditional.

## Connections
- **Builds on:** [[Conditional Probability]], [[Joint Posterior Distribution]]
- **Leads to:** [[Gibbs Sampling]], [[MCMC]], [[Conjugate Prior]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

What is a full-conditional distribution?
??
The distribution of one unknown given the data and all other unknowns in the model.
++++

Which MCMC algorithm samples each parameter from its full conditional?
??
Gibbs sampling.
++++
