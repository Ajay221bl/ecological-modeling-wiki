---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Random variables"
  - "Stochastic variable"
status: seedling
---

# Random Variable

**In one line:** a random variable is a quantity whose value is a number determined by chance, described by the probabilities of the values it can take.

> [!info] Before this, it helps to know
> [[Variable]] (a quantity that varies) · [[Probability]] (attached to its values)

## The everyday picture
An unopened envelope containing a number. Before you open it you can't say what the number is, but you may know a lot about what it could be: "a whole number from 0 to 10, most likely about 6". The envelope is the random variable. The number inside, once opened, is an observation.

## A tiny example
Y = number of eggs that hatch from a clutch of 4. Before the season Y is a random variable. In June you count 3. That 3 is a realised value, written y = 3.

## Start from zero
1. **Take a random process** and attach a number to each outcome.
2. **Capital letter for the variable (Y),** lower case for an observed value (y).
3. **It comes with a distribution:** the rule giving the probability of each value or range.
4. **Discrete or continuous,** depending on whether its values can be listed or fill a continuum.
5. **Why statistics needs the idea:** your data are single realisations. To say anything about uncertainty you must treat them as draws from random variables and ask what else could have been drawn.
6. **In Bayesian statistics, unknown parameters are also treated as random variables.** *That is the defining move:* anything unobserved gets a distribution.

## In R
```r
set.seed(7)
rbinom(1, 4, 0.6)            # one realisation of Y
table(rbinom(1000, 4, 0.6))  # many realisations show its distribution
```

## In the course
[[Hobbs and Hooten 2015 Ch3]] opens with random variables. [[Powell and Gale 2015 Ch2]] uses them for stochastic model components.

## Common confusions
- **"Random means anything could happen."** A random variable is tightly described by its distribution.
- **"The data are the random variable."** The data are realisations of it.

## Explain it back
- What is the difference between Y and y?

*Pass test:* you can identify the random variable and a realisation in a study.

## Connections
- **Builds on:** [[Variable]], [[Probability]]
- **Leads to:** [[Probability Distribution]], [[Discrete Random Variable]], [[Continuous Random Variable]], [[Expected Value]]
- **Part of:** [[MOC - Probability and Distributions]]

## Flashcards

What is a random variable?
??
A numerical quantity whose value is determined by chance and described by a probability distribution.
++++

What is the difference between Y and y?
??
Y is the random variable. y is a particular observed value of it.
++++
