---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "A random variable is a quantity whose value is a number determined by chance, described by the probabilities of the values it can take."
aliases:
  - "Random variables"
  - "Stochastic variable"
status: seedling
---

# Random Variable

Picture an unopened envelope containing a number. Before you open it you cannot say what the number is, but you may know a lot about it: "a whole number from 0 to 10, most likely about 6". The envelope is a **random variable**, a quantity whose value is a number determined by chance, described by the probabilities of the values it can take ([[Variable]], [[Probability]]). The number inside, once opened, is an observation. Convention writes the variable with a capital letter (Y) and an observed value in lower case (y). Y = the number of eggs that hatch from a clutch of 4 is a random variable before the season; in June you count 3, the realised value y = 3.

A random variable comes with a [[Probability Distribution]], the rule giving the probability of each value or range of values. It is a [[Discrete Random Variable]] if its values can be listed, like counts, or a [[Continuous Random Variable]] if they fill a continuum, like mass. In the code below, `rbinom(1, 4, 0.6)` produces one realisation of the hatching count, and a thousand realisations tabulated show the shape of its distribution. Its long-run average is its [[Expected Value]].

Statistics needs the idea because your data are single realisations: to say anything about uncertainty you must treat them as draws from random variables and ask what else could have been drawn. [[Bayesian Inference|Bayesian statistics]] goes one step further and treats unknown [[Unobserved Quantities as Random Variables|parameters as random variables]] too; that is its defining move, giving everything unobserved a distribution. Two confusions: "random" does not mean anything could happen, since a random variable is tightly described by its distribution; and the data are not the random variable but realisations of it ([[Hobbs and Hooten 2015 Ch3]], [[Powell and Gale 2015 Ch2]]).

```r
set.seed(7)
rbinom(1, 4, 0.6)            # one realisation of Y
table(rbinom(1000, 4, 0.6))  # many realisations show its distribution
```

## Connections
- **Builds on:** [[Variable]], [[Probability]]
- **Leads to:** [[Probability Distribution]], [[Discrete Random Variable]], [[Continuous Random Variable]], [[Expected Value]], [[Bayesian Inference]], [[Unobserved Quantities as Random Variables]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What is a random variable?
??
A numerical quantity whose value is determined by chance and described by a probability distribution.
++++

What is the difference between Y and y?
??
Y is the random variable. y is a particular observed value of it.
++++
