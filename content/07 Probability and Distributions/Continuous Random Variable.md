---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Continuous distribution"
status: seedling
---

# Continuous Random Variable

**In one line:** a continuous random variable can take any value within a range, with no gaps between possible values.

> [!info] Before this, it helps to know
> [[Random Variable]] (the general idea) · [[Continuous Data]] (the data it produces)

## The everyday picture
A ramp instead of stairs. You can stand anywhere along it. There are so many possible positions that the chance of standing on any single exact point is zero. Only stretches of the ramp have a probability.

## Start from zero
1. **Its values fill an interval.** Between any two there is another.
2. **The probability of any single exact value is zero.** *Why:* infinitely many values share a total probability of 1.
3. **So probabilities belong to intervals.** P(10 < Y < 12).
4. **Described by a probability density function.** Probability is area under its curve.
5. **In ecology:** mass, length, temperature, time, biomass, proportions of cover.
6. **Measured data are always rounded,** but treating them as continuous is the right model.

## In R
```r
pnorm(12, 11, 2) - pnorm(10, 11, 2)      # P(10 < Y < 12) for a Normal(11, 2): an area
pnorm(11, 11, 2) - pnorm(11, 11, 2)      # P(Y exactly 11) = 0
```

## Common confusions
- **"Zero probability means impossible."** Each exact value has probability zero, yet one of them occurs.

## Explain it back
- Why is P(Y = 11 exactly) zero?

*Pass test:* you can explain why continuous variables need densities.

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
