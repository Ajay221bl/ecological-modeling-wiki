---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Location parameter"
  - "Scale parameter"
  - "Shape parameter"
  - "Rate parameter"
status: seedling
---

# Distribution Parameters

**In one line:** distribution parameters are the few numbers that pick out one specific member of a distribution family by setting where it sits, how wide it is and what shape it has.

> [!info] Before this, it helps to know
> [[Parameter]] (the general idea) · [[Probability Distribution]] (the family)

## The everyday picture
The dials on a mixing desk. "Normal" is the kind of sound. One dial slides it left and right, another stretches it. "Gamma" has a dial that changes its whole shape from a steep slope to a hump.

## Start from zero
1. **Location parameters shift the distribution** along the axis without changing its shape. The normal's mean.
2. **Scale parameters stretch or squeeze it.** The normal's SD. Doubling the scale doubles the spread.
3. **Rate is 1/scale.** Some distributions (gamma, exponential) are usually written with a rate. A high rate means a tight distribution.
4. **Shape parameters change the form itself.** The gamma's shape, the beta's a and b, the t's degrees of freedom.
5. **Count distributions use natural parameters:** Poisson has its mean λ, binomial has n and p.
6. **Why know the type:** it tells you how the parameter relates to the mean and variance, and so what a regression on that parameter means.
7. **Check each function's parameterisation.** `dgamma(x, shape, rate)` versus `dgamma(x, shape, scale = )`. `dnorm` takes the SD, while JAGS takes precision (1/variance).

## See it
![[Location scale shape.png|700]]
*What to look at:* shifting, stretching and reshaping are three different operations.

## In R
```r
x <- 3
c(dnorm(x, 0, 1), dnorm(x + 5, 5, 1))                    # location shift: same height
c(dgamma(x, shape = 2, rate = 0.5), dgamma(x, shape = 2, scale = 2))   # rate 0.5 is scale 2
set.seed(13); c(sd(rgamma(1e5, 2, rate = 1)), sd(rgamma(1e5, 2, rate = 2)))   # doubling the rate halves the spread
```

## Common confusions
- **"Every distribution has a mean and SD as its parameters."** Only a few do.
- **"The second argument of `dnorm` is the variance."** It is the standard deviation.

## Explain it back
- What is the relation between rate and scale?

*Pass test:* you can classify a parameter as location, scale, rate or shape.

## Connections
- **Builds on:** [[Parameter]], [[Probability Distribution]]
- **Leads to:** [[Moments of a Distribution]], [[Moment Matching]], [[Dispersion Parameter]], [[Precision Parameter]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What does a location parameter do?
??
Shifts the distribution along the axis without changing its shape.
![[Location scale shape.png]]
++++

What is the relationship between rate and scale?
??
Rate = 1 / scale.
++++

What does a shape parameter do?
??
Changes the form of the distribution, such as its skew.
++++
