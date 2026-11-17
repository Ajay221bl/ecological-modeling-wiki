---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "z distribution"
  - "Standard normal"
  - "z"
  - "N(0, 1)"
status: seedling
---

# Standard Normal Distribution

**In one line:** the standard normal distribution is the normal distribution with mean 0 and standard deviation 1, the reference scale on which values are counted in standard deviations.

> [!info] Before this, it helps to know
> [[Normal Distribution]] (the family) · [[Standardizing]] (how to get onto this scale)

## The everyday picture
A universal measuring tape marked in "standard deviations from average". Any normal variable, whether millimetres of wing or grams of mass, can be laid against it.

## Start from zero
1. **Take any normal variable.**
2. **Subtract its mean and divide by its SD:** z = (y − μ)/σ.
3. **z follows Normal(0, 1).**
4. **One table serves all normals.** 95% of z lies between −1.96 and +1.96.
5. **Why it is used in tests:** an estimate divided by its standard error is roughly standard normal when the true value is zero. So "z = 2.5" says the estimate is 2.5 standard errors from zero, which would be unusual by chance.
6. **Why it is used in priors:** with standardised predictors, a Normal(0, 1) prior on a slope is a sensible weak default.

## In R
```r
qnorm(0.975); pnorm(1.96) - pnorm(-1.96)
(64 - 60) / 2                                # a 64 mm wing is z = 2
1 - pnorm(2)                                 # 2.3% of birds are longer
2 * (1 - pnorm(2.5))                         # two-sided tail beyond |z| = 2.5: 0.012
```

## Common confusions
- **"z-scores make data normal."** Standardising rescales. It doesn't reshape.

## Explain it back
- What does z = −1.5 mean?

*Pass test:* you can convert a value to z and find its tail probability.

## Connections
- **Builds on:** [[Normal Distribution]], [[Standardizing]]
- **Leads to:** [[z-test]], [[Wald Test]], [[Student t Distribution]], [[Weakly Informative Prior]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What is the standard normal distribution?
??
A normal distribution with mean 0 and SD 1.
++++

How do you convert a normal value to a z-score?
??
z = (y − μ) / σ.
++++
