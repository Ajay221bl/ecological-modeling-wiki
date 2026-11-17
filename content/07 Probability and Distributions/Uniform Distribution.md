---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "dunif()"
  - "Flat distribution"
  - "Rectangular distribution"
status: seedling
---

# Uniform Distribution

**In one line:** the uniform distribution spreads probability evenly over an interval, so every value between its lower and upper limit is equally likely.

> [!info] Before this, it helps to know
> [[Probability Density Function]] (a flat one) · [[Support of a Distribution]] (the interval)

## The everyday picture
A spinner on a board game. The pointer is as likely to stop at one angle as at any other. No region is favoured.

## Start from zero
1. **Two parameters:** lower limit a and upper limit b.
2. **Density is constant: 1/(b − a)** inside, zero outside.
3. **Mean = (a + b)/2. Variance = (b − a)²/12.**
4. **Probability of a sub-interval = its length ÷ (b − a).**
5. **Used to generate randomness.** `runif()` is the raw material for other random draws and for random locations.
6. **Used as a "vague" prior.** *Caution:* its hard edges forbid values outside the limits completely, and it is not flat once you transform the parameter. Flat on a probability is not flat on the log-odds.

## In R
```r
dunif(3, 0, 10); punif(3, 0, 10)                 # density 0.1, P(below 3) = 0.3
set.seed(5); u <- runif(1e5, 0, 10); c(mean(u), var(u), 100 / 12)
p <- runif(1e5); hist(qlogis(p), breaks = 60)    # a flat prior on p is a peaked (logistic) prior on logit(p)
```

## In the course
[[Hobbs and Hooten 2015 Ch3]]. Their Chapter 5 discusses why uniform priors aren't automatically uninformative.

## Common confusions
- **"Uniform means uninformative."** It carries information: the limits, and a specific shape on any other scale.

## Explain it back
- What is the density of Uniform(2, 6)?

*Pass test:* you can compute uniform probabilities from lengths.

## Connections
- **Builds on:** [[Probability Density Function]]
- **Leads to:** [[Vague Prior]], [[Random Numbers and set.seed()]], [[Beta Distribution]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What is the density of a Uniform(a, b) distribution?
??
1/(b − a) between a and b, zero elsewhere.
++++

Why is a uniform prior not automatically uninformative?
??
It imposes hard limits and is not flat after a nonlinear transformation of the parameter.
++++
