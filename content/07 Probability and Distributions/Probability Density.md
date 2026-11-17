---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "Probability density is the height of a density curve at a point: probability per unit of the variable's scale near that point."
aliases:
  - "Density"
  - "Density value"
status: seedling
---

# Probability Density

"200 people per square kilometre" is not a number of people; multiply it by an area and you get people. Likewise "0.2 per gram" is not a probability; multiply it by a small width in grams and you get one. **Probability density** is the height of a density curve at a point: probability per unit of the variable's scale near that point ([[Probability Density Function]], [[Rate of Change]]). For a very narrow interval, density = probability ÷ width, so probability ≈ density × width.

A normal with mean 11 and standard deviation 2 has density 0.199 at 11, so P(10.95 < Y < 11.05) ≈ 0.199 × 0.1 = 0.0199, which matches the exact probability in the code below. Density has units of "per unit of y", so changing grams to kilograms multiplies every density by 1,000, as the last line shows. What carries meaning is *relative* density: a value with twice the density is twice as probable per unit width. With standard deviation 2, a value of 11 is about 7.4 times as dense as a value of 15.

Relative density is all that inference needs, because likelihoods and posterior densities are compared as ratios, and the arbitrary units cancel ([[Likelihood]], [[Posterior Distribution]]). So a posterior density of 3 at θ = 0.5 does not mean "300% probability"; it means probability is piled thickly there. Areas under the curve, found by [[Integral|integration]], are the probabilities.

```r
dnorm(11, 11, 2) * 0.1; pnorm(11.05, 11, 2) - pnorm(10.95, 11, 2)     # density x width matches the true probability
dnorm(11, 11, 2) / dnorm(15, 11, 2)                                   # 11 is 7.4 times as dense as 15
dnorm(0.011, 0.011, 0.002)                                            # same variable in kg: density 1000 times larger
```

## Connections
- **Builds on:** [[Probability Density Function]]
- **Leads to:** [[Likelihood]], [[Posterior Distribution]], [[Integral]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What is probability density?
??
Probability per unit of the variable near a point: the height of the PDF.
++++

How do you get an approximate probability from a density?
??
Multiply the density by a small interval width.
++++
