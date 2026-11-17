---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The support of a distribution is the set of values it can produce, meaning the values with non-zero probability or density."
aliases:
  - "Support"
  - "Range of possible values"
  - "Domain of a distribution"
status: seedling
---

# Support of a Distribution

A book can sit only on its own shelf. A normal distribution's shelf is the whole number line; a Poisson's holds only 0, 1, 2 and so on; a beta's runs from 0 to 1. The **support** of a distribution is the set of values it can produce, the values with non-zero probability or density; a value not on the shelf can never be drawn. It is the distribution's version of the [[Sample Space]] ([[Probability Distribution]]).

The common families sort neatly by support. Any real number: normal and Student t. Positive real numbers: lognormal, gamma and exponential. Between 0 and 1: beta. Exactly 0 or 1: Bernoulli. Whole numbers from 0 to n: binomial. Whole numbers from 0 upward: Poisson and negative binomial. The figure's x-axes show these supports, and the code below draws from three families: the normal produces negatives, the Poisson only whole numbers from 0, and the beta only values strictly between 0 and 1. Asking for the Poisson probability of 2.5, or the beta density at 1.2, returns zero, because those values are outside the support.

Matching the support to the data is the first rule for choosing a distribution ([[Choosing a Distribution for Your Response]], [[Hobbs and Hooten 2015 Ch3]]). A mismatch makes the model predict impossible values, such as negative counts or a survival of 1.2, and usually gets the variance wrong too; a [[Link Function]] keeps predicted means inside the support. A normal is often fine in practice when the mean is far from zero, but it still assigns some probability to impossible values. The same rule applies to priors: a standard deviation must be positive, so its prior needs positive support ([[Prior Distribution]]).

![[Distribution gallery.png|700]]
*What to look at:* the x-axis of each panel is that distribution's support.

```r
set.seed(9)
range(rnorm(1e4, 2, 3))            # includes negatives
range(rpois(1e4, 2))               # whole numbers from 0
range(rbeta(1e4, 2, 5))            # strictly between 0 and 1
dpois(2.5, 2); dbeta(1.2, 2, 5)    # zero (with a warning for the Poisson): outside the support
```

## Connections
- **Builds on:** [[Sample Space]], [[Probability Distribution]]
- **Leads to:** [[Choosing a Distribution for Your Response]], [[Link Function]], [[Prior Distribution]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What is the support of a distribution?
??
The set of values that have non-zero probability or density.
![[Distribution gallery.png]]
++++

Why must the support match the response?
??
Otherwise the model allows impossible values and misdescribes the data.
++++

What is the support of the beta distribution?
??
The interval from 0 to 1.
++++
