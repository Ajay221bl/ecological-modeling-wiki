---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "A probability mass function gives, for each value a discrete random variable can take, the probability that it takes exactly that value."
aliases:
  - "PMF"
  - "Mass function"
status: seedling
---

# Probability Mass Function

Above each possible count stands a bar, and the bar's height is the probability of seeing exactly that count; stack all the bars and they reach exactly 1. A **probability mass function** (PMF) gives, for each value a [[Discrete Random Variable]] can take, the probability that it takes exactly that value: input y, output P(Y = y). Every height lies between 0 and 1, all heights add to 1, and the probability of a range is the sum of the bars in it ([[Probability]]).

For a Poisson with mean 3, P(Y = 0) = 0.050, P(Y = 1) = 0.149, P(Y = 2) = 0.224, P(Y = 3) = 0.224, P(Y = 4) = 0.168, and so on. P(2 ≤ Y ≤ 4) is the sum of three bars, about 0.62. For a binomial, the probability that exactly 3 of 4 eggs hatch, each with probability 0.6, is 0.3456. In R the PMFs are the `d` functions for discrete distributions, `dpois()`, `dbinom()` and `dnbinom()`, as the code below shows. Hobbs and Hooten write a PMF with square brackets, [y | λ] ([[Bracket Notation]]).

The PMF matters for fitting because plugging your observed count into it gives the probability of seeing that count under given parameter values; viewed as a function of the parameters, that number is the [[Likelihood]]. The left panel of the figure shows a PMF as bars whose heights are probabilities; the right shows its continuous cousin, the [[Probability Density Function]], whose heights are not probabilities. Running totals of the bars give the [[Cumulative Distribution Function]] ([[PMF vs PDF]]).

![[PMF vs PDF.png|700]]
*What to look at:* left, bars whose heights are probabilities. Right, a curve whose areas are probabilities.

```r
round(dpois(0:5, 3), 3)
sum(dpois(2:4, 3))             # P(2 <= Y <= 4)
dbinom(3, 4, 0.6)              # P(exactly 3 of 4 eggs hatch) = 0.3456
```

## Connections
- **Builds on:** [[Discrete Random Variable]]
- **Leads to:** [[Probability Density Function]], [[Cumulative Distribution Function]], [[Likelihood]]
- **See also:** [[Hobbs and Hooten 2015 Ch3]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]], molecular note [[PMF vs PDF]]

## Flashcards

What does a probability mass function return?
??
The probability that a discrete random variable equals a specific value.
![[PMF vs PDF.png]]
++++

How do you get the probability of a range from a PMF?
??
Add the probabilities of the values in the range.
++++
