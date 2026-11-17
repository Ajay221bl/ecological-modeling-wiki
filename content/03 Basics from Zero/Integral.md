---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "An integral adds up a continuous curve, giving the area between the curve and the horizontal axis."
aliases:
  - "Area under a curve"
  - "Integration"
  - "∫"
status: seedling
---

# Integral

Rain falls into a gauge at a rate that changes minute by minute. The water collected is that rate added up over the whole storm. An **integral** is such a running total of something that changes smoothly: it adds up a continuous curve, giving the area between the curve and the horizontal axis. It is written ∫ f(x) dx, where ∫ is a stretched S for "sum", f(x) is the curve, dx stands for a very thin slice of the x-axis, and the *limits* say where the adding starts and stops. A plain sum, written with Σ ([[Summation Notation]]), adds a list of separate items; a curve has no separate items, so you cut the area into thin strips, each roughly height × width, and add those. As the strips get thinner, the total settles on the exact area, and that limiting total is the integral.

Try the area under y = 2x from x = 0 to x = 3. It is a triangle with base 3 and height 6, so the area is ½ × 3 × 6 = 9. With strips of width 1 measured at their midpoints (0.5, 1.5, 2.5), the heights are 1, 3 and 5, and their total is again 9. Integration is the reverse of differentiation: the integral of 2x is x², whose [[Derivative]] is 2x again. Many integrals have no formula, so computers do them numerically, or by simulation: draw many random values and average them ([[Monte Carlo Integration]]).

Statistics needs integrals constantly, because probability for a continuous variable is an area. A [[Probability Density Function]] is a curve whose total area is 1, and the probability of landing between two values is the area between them: the area under the standard normal curve between −1.96 and 1.96 is 0.95. Any single exact value, such as a mass of exactly 20.000 g, has probability zero, because a line has no width; only ranges have probability. That clears up a common confusion: the height of a density curve is not a probability (heights can exceed 1), the area is. The denominator of Bayes' theorem, the [[Marginal Likelihood]], is also an integral, and it is usually impossible to do exactly, which is the whole reason MCMC exists ([[Hobbs and Hooten 2015 Ch3]], [[Hobbs and Hooten 2015 Ch7]]).

![[Integral as area.png|700]]
*What to look at:* the strips approximate the shaded area, and thinner strips fit better.

```r
integrate(function(x) 2 * x, 0, 3)$value        # 9
integrate(dnorm, -1.96, 1.96)$value             # 0.95: area = probability
pnorm(1.96) - pnorm(-1.96)                      # the same, via the CDF
# Monte Carlo version: the share of random draws that land in the range
set.seed(1); mean(abs(rnorm(1e5)) < 1.96)       # about 0.95
```
Area under the normal curve between −1.96 and 1.96 is 0.95.

## Connections
- **Builds on:** [[Summation Notation]], [[Derivative]]
- **Leads to:** [[Probability Density Function]], [[Marginal Likelihood]], [[Monte Carlo Integration]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]

## Flashcards

What is an integral?
??
The area under a curve, found by adding up infinitely thin strips.
![[Integral as area.png]]
++++

For a continuous variable, what gives probability: height or area of the density?
??
Area. The probability of a range is the integral of the density over it.
++++

Why does Bayesian inference need MCMC?
??
The integral in the denominator of Bayes' theorem usually can't be computed exactly.
++++
