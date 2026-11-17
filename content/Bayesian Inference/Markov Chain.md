---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Markov chains"
  - "Markov property"
  - "Markov process"
  - "Memoryless process"
status: seedling
---

# Markov Chain

**In one line:** a Markov chain is a sequence of random states in which the next state depends only on the current state and not on how you got there.

> [!info] Before this, it helps to know
> [[Conditional Probability]] (the next state given the current one) · [[Random Variable]] (each state)

## The everyday picture
A board game played with dice. Where you land next depends on the square you are on now and the roll. The route you took to reach this square is irrelevant.

## Start from zero
1. **A sequence:** x₁, x₂, x₃, ...
2. **Markov property:** P(next | whole history) = P(next | current).
3. **Transition rule:** the probabilities of moving from each state to each other state.
4. **Under mild conditions the chain settles into a stationary distribution:** in the long run the fraction of time in each state stops changing and no longer depends on the start.
5. **MCMC designs the transition rule** so that the stationary distribution is the posterior.
6. **Consecutive states are correlated.** A chain of 1,000 steps holds less information than 1,000 independent draws.
7. **Elsewhere in ecology:** weather states, stage-structured populations, animal movement between habitats.

## In R
```r
P <- matrix(c(0.9, 0.1, 0.5, 0.5), 2, byrow = TRUE, dimnames = list(c("dry", "wet"), c("dry", "wet")))     # tomorrow's weather given today's
set.seed(15); s <- 1; visits <- integer(10000); for (i in 1:10000) { s <- sample(1:2, 1, prob = P[s, ]); visits[i] <- s }
table(visits) / 10000; c(5, 1) / 6                                       # long-run share of time matches the stationary distribution
```

## In the course
[[Hobbs and Hooten 2015 Ch7]].

## Common confusions
- **"Markov means independent."** Each state depends on the one before. It is independent of the earlier past only given the present.

## Explain it back
- State the Markov property.

*Pass test:* you can explain what a stationary distribution is.

## Connections
- **Builds on:** [[Conditional Probability]]
- **Leads to:** [[MCMC]], [[Chain Autocorrelation]], [[Metropolis Algorithm]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

What is the Markov property?
??
The next state depends only on the current state, not on earlier history.
++++

What is a stationary distribution?
??
The long-run distribution of states that a Markov chain settles into, regardless of where it started.
++++
