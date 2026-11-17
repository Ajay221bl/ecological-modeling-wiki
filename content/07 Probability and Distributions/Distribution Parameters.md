---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "Distribution parameters are the few numbers that pick out one specific member of a distribution family by setting where it sits, how wide it is and what shape it has."
aliases:
  - "Location parameter"
  - "Scale parameter"
  - "Shape parameter"
  - "Rate parameter"
status: seedling
---

# Distribution Parameters

A mixing desk has dials: one slides the sound left and right, another stretches it, and on some instruments a third changes its whole character. **Distribution parameters** are the few numbers that pick out one specific member of a distribution family by setting where it sits, how wide it is and what shape it has ([[Parameter]], [[Probability Distribution]]). *Location* parameters shift a distribution along the axis without changing its shape, like the normal's mean. *Scale* parameters stretch or squeeze it, like the normal's standard deviation: doubling the scale doubles the spread. A *rate* is 1/scale, so a high rate means a tight distribution; the gamma and exponential are usually written with rates. *Shape* parameters change the form itself, like the gamma's shape, the beta's a and b, or the t distribution's degrees of freedom.

Count distributions use natural parameters: the Poisson has its mean λ, and the binomial has n and p. The figure shows shifting, stretching and reshaping as three different operations, and the code checks them: a normal shifted by 5 has the same height at the shifted point; a gamma with rate 0.5 is identical to one with scale 2; and doubling a gamma's rate halves its spread.

Knowing the type of each parameter tells you how it relates to the mean and variance, and so what a regression on that parameter means ([[Moments of a Distribution]], [[Moment Matching]]). It also protects against a classic error: check each function's parameterisation. `dgamma(x, shape, rate)` differs from `dgamma(x, shape, scale = )`; `dnorm()` takes the standard deviation, not the variance; and JAGS writes the normal with a precision, 1/variance ([[Precision Parameter]]). Only a few distributions have their mean and standard deviation as parameters; others add parameters such as a [[Dispersion Parameter]].

![[Location scale shape.png|700]]
*What to look at:* shifting, stretching and reshaping are three different operations.

```r
x <- 3
c(dnorm(x, 0, 1), dnorm(x + 5, 5, 1))                    # location shift: same height
c(dgamma(x, shape = 2, rate = 0.5), dgamma(x, shape = 2, scale = 2))   # rate 0.5 is scale 2
set.seed(13); c(sd(rgamma(1e5, 2, rate = 1)), sd(rgamma(1e5, 2, rate = 2)))   # doubling the rate halves the spread
```

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
