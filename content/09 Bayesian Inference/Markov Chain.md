---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A Markov chain is a sequence of random states in which the next state depends only on the current state and not on how you got there."
aliases:
  - "Markov chains"
  - "Markov property"
  - "Markov process"
  - "Memoryless process"
status: seedling
---

# Markov Chain

In a board game played with dice, where you land next depends on the square you are on and the roll; the route you took to reach this square is irrelevant. A **Markov chain** is a sequence of random states x₁, x₂, x₃, ... in which the next state depends only on the current state, not on how you got there ([[Random Variable]]). That is the Markov property: P(next | whole history) = P(next | current) ([[Conditional Probability]]). A transition rule gives the probabilities of moving from each state to each other state.

Under mild conditions the chain settles into a stationary distribution: in the long run the fraction of time spent in each state stops changing and no longer depends on the start. [[MCMC]] designs the transition rule so that the stationary distribution is the posterior ([[Metropolis Algorithm]]). In the code below, dry days are followed by dry 90% of the time and wet days by dry 50%; over 10,000 simulated days the chain spends 83% of its time dry and 17% wet, matching the stationary distribution of 5/6 and 1/6.

Consecutive states are correlated, so a chain of 1,000 steps holds less information than 1,000 independent draws ([[Chain Autocorrelation]]). Elsewhere in ecology Markov chains describe weather states, stage-structured populations and animal movement between habitats ([[Hobbs and Hooten 2015 Ch7]]). "Markov" does not mean independent: each state depends on the one before, and is independent of the earlier past only given the present.

```r
P <- matrix(c(0.9, 0.1, 0.5, 0.5), 2, byrow = TRUE, dimnames = list(c("dry", "wet"), c("dry", "wet")))     # tomorrow's weather given today's
set.seed(15); s <- 1; visits <- integer(10000); for (i in 1:10000) { s <- sample(1:2, 1, prob = P[s, ]); visits[i] <- s }
table(visits) / 10000; c(5, 1) / 6                                       # long-run share of time matches the stationary distribution
```

## Connections
- **Builds on:** [[Conditional Probability]]
- **Leads to:** [[MCMC]], [[Chain Autocorrelation]], [[Metropolis Algorithm]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is the Markov property?
??
The next state depends only on the current state, not on earlier history.
++++

What is a stationary distribution?
??
The long-run distribution of states that a Markov chain settles into, regardless of where it started.
++++
