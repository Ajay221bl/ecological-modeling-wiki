---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - lm-glm
aliases:
  - "Likelihood is not probability"
  - "Probability and likelihood"
status: seedling
---

# Probability vs Likelihood

> [!summary] In plain words
> probability fixes the parameters and asks how likely different data are, while likelihood fixes the observed data and asks how well different parameter values explain them; it is the same formula read in the other direction, and likelihoods do not sum to 1 over parameter values.

## The everyday picture
A lock and keys. Probability: hold the key (parameter) fixed and ask which locks (data) it opens. Likelihood: hold the lock you found (data) fixed and try every key to see which fits best.

## The question
The likelihood uses dbinom too. Isn't it just a probability?

## Built from
- [[Probability Mass Function]] and [[Probability Density Function]].
- [[Likelihood Function]] and [[Likelihood]].
- [[Maximum Likelihood Estimation]].

## The reasoning, step by step
1. **Same expression:** f(y | θ). For 7 hatched of 10 eggs, choose(10, 7) p⁷(1 − p)³.
2. **Probability:** fix p = 0.5 and vary y; the values over y = 0 to 10 sum to 1.
3. **Likelihood:** fix y = 7 and vary p; the curve need not have area 1 (here it is 1/11).
4. **Only ratios of likelihoods mean anything,** which is why we compare them (likelihood ratio, AIC).
5. **Bayes turns likelihood into probability for θ** by multiplying by a prior and normalising.
L(p = 0.7) = 0.267 and L(p = 0.5) = 0.117, so p = 0.7 explains the data 2.3 times better. The area under L(p) from 0 to 1 is 0.091, not 1.

## So in practice
Say "the likelihood of p given the data", never "the probability that p = 0.7".

## In R
```r
L <- function(p) dbinom(7, 10, p)
round(c(L07 = L(0.7), L05 = L(0.5), ratio = L(0.7) / L(0.5), area = integrate(L, 0, 1)$value, sum_over_y = sum(dbinom(0:10, 10, 0.5))), 3)
```

## What would go wrong otherwise
Reading L(0.7) = 0.27 as "a 27 percent chance that p is 0.7".

## Explain it back
- What is held fixed in a likelihood?

*Pass test:* you can explain why a likelihood curve need not integrate to 1.

## Connections
- **Related:** [[PMF vs PDF]], [[Frequentist vs Bayesian Inference]], [[Least Squares vs Maximum Likelihood]], [[Why the posterior is proportional to likelihood times prior]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Likelihood and Estimation]], [[MOC - Probability and Distributions]]

## Flashcards

Probability vs likelihood: what is fixed?
??
Probability fixes parameters and varies data; likelihood fixes data and varies parameters.
++++

Does a likelihood integrate to 1 over the parameter?
??
No; only ratios of likelihoods are meaningful.
++++
