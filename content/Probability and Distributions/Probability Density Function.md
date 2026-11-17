---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "PDF"
  - "Density function"
  - "Density curve"
status: seedling
---

# Probability Density Function

**In one line:** a probability density function is a curve for a continuous random variable, drawn so that the area under it between two values is the probability of landing between them.

> [!info] Before this, it helps to know
> [[Continuous Random Variable]] (what it describes) · [[Integral]] (area under a curve)

## The everyday picture
A hill of sand with total weight 1. The weight of sand between the 10 cm and 12 cm marks is the probability of a value between 10 and 12. The height of the hill at one point isn't a weight. It tells you how thickly the sand is piled there.

## Start from zero
1. **Input: a value y. Output: the density at y,** a height.
2. **Heights are never negative.**
3. **Total area under the curve is 1.**
4. **P(a < Y < b) = area between a and b.**
5. **A height can exceed 1.** *Why:* a very narrow distribution must be tall for its area to be 1.
6. **In R these are the `d` functions for continuous distributions:** `dnorm`, `dgamma`, `dbeta`.
7. **Why it matters for fitting:** the density at each observed value is what enters the likelihood. Higher density at the data means parameters that explain the data better.

## See it
![[PMF vs PDF.png|700]]
*What to look at:* the shaded area, not the curve's height, is the probability.

## In R
```r
dnorm(11, 11, 2)                                   # height at the mean: 0.199
integrate(dnorm, 10, 12, mean = 11, sd = 2)$value  # area = probability: 0.383
pnorm(12, 11, 2) - pnorm(10, 11, 2)                # the same, from the CDF
dnorm(0, 0, 0.1)                                   # density of 3.99: fine, it is not a probability
```

## In the course
[[Hobbs and Hooten 2015 Ch3]]. The first lab plots `dnorm` curves ([[Course Website]]).

## Common confusions
- **"dnorm(x) is the probability of x."** It is a density. The probability of an exact value is zero.
- **"Density can't exceed 1."** It can. Only areas are capped at 1.

## Explain it back
- Why can a density be larger than 1?

*Pass test:* you can get a probability from a density by taking an area.

## Connections
- **Builds on:** [[Continuous Random Variable]], [[Integral]]
- **Leads to:** [[Probability Density]], [[Cumulative Distribution Function]], [[Likelihood]], [[Density Plot]]
- **Part of:** [[MOC - Probability and Distributions]], molecular note [[PMF vs PDF]]

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
