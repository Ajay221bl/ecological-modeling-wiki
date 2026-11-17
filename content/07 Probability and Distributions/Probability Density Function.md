---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "A probability density function is a curve for a continuous random variable, drawn so that the area under it between two values is the probability of landing between them."
aliases:
  - "PDF"
  - "Density function"
  - "Density curve"
status: seedling
---

# Probability Density Function

Imagine a hill of sand with total weight 1. The weight of sand between the 10 cm and 12 cm marks is the probability of a value between 10 and 12. The height of the hill at one point is not a weight; it tells you how thickly the sand is piled there. A **probability density function** (PDF) is that curve for a [[Continuous Random Variable]], drawn so that the area under it between two values is the probability of landing between them. Its heights are never negative, the total area is 1, and P(a < Y < b) is the area between a and b, an [[Integral]].

For a normal distribution with mean 11 and standard deviation 2, the height at 11 is 0.199, while the area between 10 and 12 is 0.383, the probability of a value in that range; the code below finds that area by integrating and again from the cumulative distribution function. A height can exceed 1: a normal with standard deviation 0.1 has a peak height of 3.99, which is fine, because a very narrow curve must be tall for its area to be 1. In R the PDFs are the `d` functions for continuous distributions, such as `dnorm()`, `dgamma()` and `dbeta()`.

The height is called the [[Probability Density]], and it is what enters a [[Likelihood]]: the density at each observed value measures how well given parameters explain it, and higher density at the data means a better fit. Two confusions follow. `dnorm(x)` is not the probability of x; the probability of any exact value is zero. And density is not capped at 1; only areas are. The figure contrasts a PDF, where the shaded area is the probability, with a [[Probability Mass Function]], where heights are probabilities. A smoothed histogram of data, a [[Density Plot]], estimates a PDF ([[Cumulative Distribution Function]], [[PMF vs PDF]]).

![[PMF vs PDF.png|700]]
*What to look at:* the shaded area, not the curve's height, is the probability.

```r
dnorm(11, 11, 2)                                   # height at the mean: 0.199
integrate(dnorm, 10, 12, mean = 11, sd = 2)$value  # area = probability: 0.383
pnorm(12, 11, 2) - pnorm(10, 11, 2)                # the same, from the CDF
dnorm(0, 0, 0.1)                                   # density of 3.99: fine, it is not a probability
```

## Connections
- **Builds on:** [[Continuous Random Variable]], [[Integral]]
- **Leads to:** [[Probability Density]], [[Cumulative Distribution Function]], [[Likelihood]], [[Density Plot]]
- **See also:** [[Hobbs and Hooten 2015 Ch3]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]], molecular note [[PMF vs PDF]]

## Flashcards

What does the area under a PDF between a and b represent?
??
The probability that the variable falls between a and b.
![[PMF vs PDF.png]]
++++

Can a probability density exceed 1?
??
Yes. Density is height. Only the total area must equal 1.
++++
