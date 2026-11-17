---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "dpois()"
  - "Poisson"
status: seedling
---

# Poisson Distribution

**In one line:** the Poisson distribution gives the probability of each possible count of events in a fixed amount of time or space when events occur independently at a constant average rate.

> [!info] Before this, it helps to know
> [[Count Data]] (what it describes) · [[Probability Mass Function]] (its form) · [[Exponent]] and [[Factorial]] (in its formula)

## The everyday picture
Raindrops on paving stones in a light shower. Each stone gets some whole number of drops. Most get around the average, a few get none, a few get many. The drops don't coordinate, and that independence produces the Poisson pattern.

## A tiny example
Birds per point count with mean λ = 3.
- P(0) = e⁻³ = 0.050. P(3) = 0.224. P(10 or more) = 0.001.

## Start from zero
1. **One parameter: λ,** the mean count.
2. **Support:** 0, 1, 2, … with no upper limit.
3. **PMF: P(Y = y) = λ^y e^(−λ) / y!**
4. **Mean = λ and variance = λ.** *This is its defining property and its weakness.* The spread is dictated by the mean.
5. **Shape:** right-skewed for small λ, nearly symmetric and bell-like for large λ.
6. **Where it comes from:** many opportunities for an event, each with a tiny independent probability. It is the limit of a binomial with large n and small p.
7. **Sums stay Poisson.** Counts from two independent plots with means 2 and 3 total a Poisson with mean 5.
8. **In models:** the default for counts in a GLM with a log link. Real ecological counts usually vary more than λ, which is overdispersion.

## See it
![[Poisson distribution.png|700]]
*What to look at:* at λ = 1 the bars lean against zero. At λ = 10 they form a bell.

## In R
```r
dpois(0:3, 3); 1 - ppois(9, 3)
set.seed(13); y <- rpois(1e5, 3); c(mean(y), var(y))            # both about 3
c(dbinom(2, 1000, 0.003), dpois(2, 3))                          # binomial with large n, small p is nearly Poisson
```

## In the course
The distributions lab and Poisson regression ([[Course Website]]; [[Zuur et al. 2009 Ch8]]; [[Hobbs and Hooten 2015 Ch3]]).

## Common confusions
- **"Counts are Poisson."** Counts are counts. Poisson is one model for them, often too tight.
- **"λ must be a whole number."** The mean can be any positive number. The data are whole.

## Explain it back
- What is special about the Poisson's mean and variance?

*Pass test:* you can compute Poisson probabilities and explain when it applies.

## Connections
- **Builds on:** [[Count Data]], [[Factorial]]
- **Leads to:** [[Poisson Regression]], [[Overdispersion]], [[Negative Binomial Distribution]], [[Exponential Distribution]]
- **Part of:** [[MOC - Probability and Distributions]], molecular note [[Binomial vs Poisson]], [[Poisson vs Negative Binomial]]

## Flashcards

What does the Poisson distribution describe?
??
Counts of independent events occurring at a constant average rate in a fixed interval of time or space.
![[Poisson distribution.png]]
++++

How are the Poisson's mean and variance related?
??
They are equal: both are λ.
++++

Poisson PMF?
??
P(Y = y) = λ^y e^(−λ) / y!
++++
