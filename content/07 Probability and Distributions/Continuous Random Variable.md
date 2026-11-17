---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "A continuous random variable can take any value within a range, with no gaps between possible values."
aliases:
  - "Continuous distribution"
status: seedling
---

# Continuous Random Variable

On a ramp, unlike stairs, you can stand anywhere, and there are so many possible positions that the chance of standing on any single exact point is zero; only stretches of the ramp have a probability. A **continuous random variable** can take any value within a range, with no gaps: between any two possible values there is another ([[Random Variable]]). In ecology, mass, length, temperature, time, biomass and proportion of cover are continuous ([[Continuous Data]]).

Because infinitely many values share a total probability of 1, the probability of any single exact value is zero. Probabilities belong to intervals instead, such as P(10 < Y < 12), and they are areas under a curve, the [[Probability Density Function]], so finding them is integration ([[Integral]]). In the code below, for a [[Normal Distribution]] with mean 11 and standard deviation 2, P(10 < Y < 12) is about 0.38, while the probability of exactly 11 is 0.

Zero probability does not mean impossible here: every exact value has probability zero, yet one of them occurs every time you measure. Measured data are always rounded, to the nearest gram or millimetre, but treating them as continuous is still the right model. The contrast is the [[Discrete Random Variable]], whose separate values each carry their own probability ([[PMF vs PDF]]).

```r
pnorm(12, 11, 2) - pnorm(10, 11, 2)      # P(10 < Y < 12) for a Normal(11, 2): an area
pnorm(11, 11, 2) - pnorm(11, 11, 2)      # P(Y exactly 11) = 0
```

## Connections
- **Builds on:** [[Random Variable]]
- **Leads to:** [[Probability Density Function]], [[Normal Distribution]], [[Integral]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]], molecular note [[PMF vs PDF]]

## Flashcards

What is a continuous random variable?
??
One that can take any value in an interval. Probabilities attach to ranges, not single points.
++++

What is the probability that a continuous variable equals one exact value?
??
Zero.
++++
