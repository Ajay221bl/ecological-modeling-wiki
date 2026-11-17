---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Distribution"
  - "Statistical distribution"
status: seedling
---

# Probability Distribution

**In one line:** a probability distribution is the complete description of a random variable: which values it can take and how probability is spread across them.

> [!info] Before this, it helps to know
> [[Random Variable]] (what it describes) · [[Histogram]] (its picture in data)

## The everyday picture
A pile of sand weighing exactly one kilogram, spread along a number line. Where the sand is heaped, values are common. Where it is thin, they are rare. The shape of the pile is the distribution.

## Start from zero
1. **List the possible values** (the support).
2. **Say how the total probability of 1 is shared among them.**
3. **For discrete variables this is a bar for each value.** For continuous variables a smooth curve.
4. **Named distributions are families of shapes** controlled by a few parameters: normal, Poisson, binomial, gamma, beta.
5. **Why models are built on them:** the distribution is the model's stochastic part. It says how real data scatter around the predicted value, and it lets you compute how probable your data are.
6. **Choosing one is choosing what kinds of data are possible:** only whole numbers? Only positive? Bounded between 0 and 1?
7. **R handles each with four functions:** d (height), p (cumulative), q (quantile), r (random draws).

## See it
![[Distribution gallery.png|700]]
*What to look at:* each distribution lives on a different set of values and has a characteristic shape.

## In R
```r
x <- 0:12; round(dpois(x, 3), 3)                # a discrete distribution as a table of probabilities
sum(dpois(0:1000, 3))                           # total probability 1
integrate(dnorm, -Inf, Inf, mean = 10, sd = 2)$value   # a continuous one: total area 1
```

## In the course
Sep 8 lecture and the "Data-generating distributions" lab ([[Course Website]]). Catalogue of distributions: [[Hobbs and Hooten 2015 Ch3]].

## Common confusions
- **"Distribution means the normal curve."** The normal is one of many.
- **"The histogram of my data is the distribution."** It is a noisy picture of it.

## Explain it back
- What two things does a distribution specify?

*Pass test:* you can say what a distribution is and why a model needs one.

## Connections
- **Builds on:** [[Random Variable]]
- **Leads to:** [[Probability Mass Function]], [[Probability Density Function]], [[Distribution Parameters]], [[Choosing a Distribution for Your Response]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What is a probability distribution?
??
The specification of a random variable's possible values and how probability is allocated among them.
![[Distribution gallery.png]]
++++

What role does a distribution play in a statistical model?
??
It is the stochastic component describing how data vary around the predicted value.
++++
