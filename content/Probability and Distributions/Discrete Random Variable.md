---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Discrete distribution"
status: seedling
---

# Discrete Random Variable

**In one line:** a discrete random variable can take only separate, listable values, such as the whole numbers 0, 1, 2 and so on.

> [!info] Before this, it helps to know
> [[Random Variable]] (the general idea) · [[Discrete Data]] (the data it produces)

## The everyday picture
Steps on a staircase. You can stand on step 2 or step 3, never on step 2.4. Each step has its own definite probability.

## Start from zero
1. **Its possible values can be listed,** even if the list never ends.
2. **Each value has a probability of its own.**
3. **Those probabilities add to 1.**
4. **Described by a probability mass function.**
5. **Probabilities of ranges come from adding.**
6. **In ecology:** counts, presence or absence, number of successes out of n trials, categories.

## In R
```r
dbinom(0:4, 4, 0.6)                 # a probability for each possible value
sum(dbinom(0:4, 4, 0.6))            # they add to 1
```

## Common confusions
- **"Discrete means whole numbers only."** Usually, but the point is separate values. Categories are discrete too.

## Explain it back
- Give three discrete random variables from field ecology.

*Pass test:* you can tell whether a response is discrete.

## Connections
- **Builds on:** [[Random Variable]]
- **Leads to:** [[Probability Mass Function]], [[Poisson Distribution]], [[Binomial Distribution]]
- **Part of:** [[MOC - Probability and Distributions]], molecular note [[PMF vs PDF]]

## Flashcards

What is a discrete random variable?
??
One whose possible values are separate and countable, each with its own probability.
++++
