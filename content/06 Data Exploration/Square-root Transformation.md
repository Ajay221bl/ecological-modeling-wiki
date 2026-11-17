---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "sqrt(y)"
  - "Square root transform"
status: seedling
---

# Square-root Transformation

**In one line:** a square-root transformation replaces each value with its square root, a milder squeeze than the log that can be applied to zeros.

> [!info] Before this, it helps to know
> [[Square Root]] (the function) · [[Transformation]] (the general idea) · [[Poisson Distribution]] (whose variance it roughly stabilises)

## The everyday picture
A dimmer switch instead of an off switch. The log squeezes large values hard. The square root turns them down gently: 100 becomes 10, 4 becomes 2, 0 stays 0.

## Start from zero
1. **Take √ of each value.** Zero is allowed, negatives are not.
2. **Large values shrink more than small ones,** so right skew is reduced.
3. **For Poisson counts the variance equals the mean.** After a square root, the variance is roughly constant at about ¼ whatever the mean (for means that aren't tiny). *That is why it was the classical fix for counts.*
4. **Interpretation is awkward.** A slope is in square-root units, with no tidy multiplier.
5. **Today a Poisson or negative binomial GLM is preferred,** because it models counts as counts.

## In R
```r
set.seed(15)
sapply(c(2, 5, 20, 80), function(m) { y <- rpois(1e5, m); c(mean = m, var_raw = var(y), var_sqrt = var(sqrt(y))) })
```
Raw variance tracks the mean. After the square root it stays near 0.25 once the mean is above a few.

## In the course
One of the transformations in Zuur's exploration chapter ([[Zuur et al. 2009 Ch2]]).

## Common confusions
- **"It normalises counts."** It evens their variance. Small counts stay discrete and skewed.

## Explain it back
- Why did the square root become the standard transformation for counts?

*Pass test:* you can say what it does to Poisson variance.

## Connections
- **Builds on:** [[Square Root]], [[Transformation]]
- **Leads to:** [[Poisson Distribution]], [[Poisson Regression]], [[Mean-Variance Relationship]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

Why was the square root the classic transformation for counts?
??
It makes the variance of Poisson data roughly constant (about 0.25) regardless of the mean.
++++

How does it differ from the log?
??
It is milder and defined at zero.
++++
