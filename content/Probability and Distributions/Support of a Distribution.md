---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Support"
  - "Range of possible values"
  - "Domain of a distribution"
status: seedling
---

# Support of a Distribution

**In one line:** the support of a distribution is the set of values it can produce, meaning the values with non-zero probability or density.

> [!info] Before this, it helps to know
> [[Sample Space]] (the same idea for outcomes) · [[Probability Distribution]] (what has a support)

## The everyday picture
The shelf a book can sit on. A normal distribution's shelf is the whole number line. A Poisson's shelf holds only 0, 1, 2, …. A beta's shelf runs from 0 to 1. A value that isn't on the shelf can never be drawn.

## Start from zero
1. **Ask what values your response can possibly take.**
2. **Any real number:** normal, Student t.
3. **Positive real numbers:** lognormal, gamma, exponential.
4. **Between 0 and 1:** beta.
5. **0 or 1:** Bernoulli. **0 to n, whole:** binomial. **0 upward, whole:** Poisson, negative binomial.
6. **Match the support to the data.** *Why:* a mismatch makes the model predict impossible values (negative counts, survival of 1.2) and usually gets the variance wrong too.
7. **The same rule applies to priors.** A standard deviation must be positive, so its prior needs positive support.

## See it
![[Distribution gallery.png|700]]
*What to look at:* the x-axis of each panel is that distribution's support.

## In R
```r
set.seed(9)
range(rnorm(1e4, 2, 3))            # includes negatives
range(rpois(1e4, 2))               # whole numbers from 0
range(rbeta(1e4, 2, 5))            # strictly between 0 and 1
dpois(2.5, 2); dbeta(1.2, 2, 5)    # zero (with a warning for the Poisson): outside the support
```

## In the course
Matching support to data is the first rule for picking a distribution in [[Hobbs and Hooten 2015 Ch3]].

## Common confusions
- **"A normal is fine if the mean is far from zero."** Often true in practice, but the model still assigns some probability to impossible values.

## Explain it back
- What is the support of a gamma? Of a binomial?

*Pass test:* you can name a distribution with the right support for a given response.

## Connections
- **Builds on:** [[Sample Space]], [[Probability Distribution]]
- **Leads to:** [[Choosing a Distribution for Your Response]], [[Link Function]], [[Prior Distribution]]
- **Part of:** [[MOC - Probability and Distributions]]

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
