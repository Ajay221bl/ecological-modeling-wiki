---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "A probability distribution is the complete description of a random variable: which values it can take and how probability is spread across them."
aliases:
  - "Distribution"
  - "Statistical distribution"
status: seedling
---

# Probability Distribution

Spread a pile of sand weighing exactly one kilogram along a number line. Where the sand is heaped, values are common; where it is thin, they are rare. The shape of the pile is the **probability distribution**: the complete description of a [[Random Variable]], saying which values it can take (its *support*) and how the total probability of 1 is shared among them. For discrete variables it is a bar for each value ([[Probability Mass Function]]); for continuous ones a smooth curve ([[Probability Density Function]]). A [[Histogram]] of data is a noisy picture of the distribution that produced them, not the distribution itself.

Named distributions, such as the normal, Poisson, binomial, gamma and beta, are families of shapes controlled by a few [[Distribution Parameters]]. The figure shows several, each living on a different set of values with a characteristic shape. In the code below, the Poisson with mean 3 is written out as a table of probabilities that add to 1, and the area under a normal curve is integrated to 1. R handles each distribution with four functions: d for the height, p for the cumulative probability, q for quantiles and r for random draws ([[Distribution Functions in R]]).

Models are built on distributions because the distribution is a model's stochastic part: it says how real data scatter around the predicted value, and it lets you compute how probable your data are. Choosing one is choosing what kinds of data are possible: only whole numbers? only positive values? bounded between 0 and 1? ([[Choosing a Distribution for Your Response]]). "Distribution" does not mean the normal curve; the normal is one of many. The course covers distributions on 8 September and in its "data-generating distributions" lab ([[Course Website]], [[Hobbs and Hooten 2015 Ch3]]).

![[Distribution gallery.png|700]]
*What to look at:* each distribution lives on a different set of values and has a characteristic shape.

```r
x <- 0:12; round(dpois(x, 3), 3)                # a discrete distribution as a table of probabilities
sum(dpois(0:1000, 3))                           # total probability 1
integrate(dnorm, -Inf, Inf, mean = 10, sd = 2)$value   # a continuous one: total area 1
```

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
