---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "A discrete random variable can take only separate, listable values, such as the whole numbers 0, 1, 2 and so on."
aliases:
  - "Discrete distribution"
status: seedling
---

# Discrete Random Variable

On a staircase you can stand on step 2 or step 3, never on step 2.4, and each step has its own definite probability. A **discrete random variable** can take only separate, listable values, such as the whole numbers 0, 1, 2 and so on, even if the list never ends ([[Random Variable]]). Each value has a probability of its own, and those probabilities add to 1. The rule giving them is a [[Probability Mass Function]], and the probability of a range is found by adding the probabilities of the values in it.

In ecology, discrete variables are counts of animals, presence or absence, the number of successes out of n trials, and categories ([[Discrete Data]]). The code below lists the probability of each possible number of eggs hatching out of 4, when each hatches with probability 0.6, and checks that they add to 1. Named discrete distributions include the [[Poisson Distribution]] for counts and the [[Binomial Distribution]] for successes out of n.

"Discrete" usually means whole numbers, but the real point is separate values with gaps between them, so categories are discrete too. The contrast is the [[Continuous Random Variable]], whose values have no gaps, and whose probabilities live in areas rather than in single values ([[PMF vs PDF]]).

```r
dbinom(0:4, 4, 0.6)                 # a probability for each possible value
sum(dbinom(0:4, 4, 0.6))            # they add to 1
```

## Connections
- **Builds on:** [[Random Variable]]
- **Leads to:** [[Probability Mass Function]], [[Poisson Distribution]], [[Binomial Distribution]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]], molecular note [[PMF vs PDF]]

## Flashcards

What is a discrete random variable?
??
One whose possible values are separate and countable, each with its own probability.
++++
