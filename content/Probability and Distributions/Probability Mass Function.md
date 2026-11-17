---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "PMF"
  - "Mass function"
status: seedling
---

# Probability Mass Function

**In one line:** a probability mass function gives, for each value a discrete random variable can take, the probability that it takes exactly that value.

> [!info] Before this, it helps to know
> [[Discrete Random Variable]] (what it describes) · [[Probability]] (its output)

## The everyday picture
A bar chart of exact chances. Above each possible count stands a bar, and the bar's height is the probability of seeing exactly that count. Stack all the bars and they reach exactly 1.

## A tiny example
Y ~ Poisson(3): P(Y = 0) = 0.050, P(Y = 1) = 0.149, P(Y = 2) = 0.224, P(Y = 3) = 0.224, P(Y = 4) = 0.168, and so on.

## Start from zero
1. **Input: a possible value y. Output: P(Y = y).**
2. **Every height is between 0 and 1.**
3. **All heights add to 1.**
4. **P(a range) = sum of the bars in the range.**
5. **In R these are the `d` functions for discrete distributions:** `dpois`, `dbinom`, `dnbinom`.
6. **Why it matters for fitting:** plug your observed count into the PMF and you get the probability of seeing it under given parameters. That number, viewed as a function of the parameters, is the likelihood.

## See it
![[PMF vs PDF.png|700]]
*What to look at:* left, bars whose heights are probabilities. Right, a curve whose areas are probabilities.

## In R
```r
round(dpois(0:5, 3), 3)
sum(dpois(2:4, 3))             # P(2 <= Y <= 4)
dbinom(3, 4, 0.6)              # P(exactly 3 of 4 eggs hatch) = 0.3456
```

## In the course
[[Hobbs and Hooten 2015 Ch3]] writes PMFs with square brackets, [y | λ] ([[Bracket Notation]]).

## Common confusions
- **"A PMF is a PDF for counts."** Their outputs differ in kind: a PMF returns a probability, a PDF returns a density.

## Explain it back
- What does dpois(2, 3) return, in words?

*Pass test:* you can read and sum PMF values.

## Connections
- **Builds on:** [[Discrete Random Variable]]
- **Leads to:** [[Probability Density Function]], [[Cumulative Distribution Function]], [[Likelihood]]
- **Part of:** [[MOC - Probability and Distributions]], molecular note [[PMF vs PDF]]

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
