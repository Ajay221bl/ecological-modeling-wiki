---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "cov()"
  - "Covariation"
status: seedling
---

# Covariance

**In one line:** covariance measures whether two variables tend to be above their averages at the same time (positive), in opposite directions (negative), or with no pattern (near zero).

> [!info] Before this, it helps to know
> [[Mean]] · [[Variance]] (covariance is variance for two variables)

## The everyday picture
Two friends' moods over a week. On days one is cheerful, is the other cheerful too? If they tend to be up together and down together, their moods *co-vary* positively. If one is up whenever the other is down, negatively. If there's no link, near zero.

*Where the picture stops working:* moods have no units. Real variables do, and covariance's size depends on them, which is why we usually convert it into a correlation.

## Words you'll need
- **Deviation:** a value minus its mean.
- **Covariance:** the average of (x deviation × y deviation), dividing by n − 1 for a sample.
- **Units of covariance:** x's units times y's units (cm × grams), awkward to read.
- **Correlation:** covariance rescaled to sit between −1 and +1 ([[Correlation]]).

## A tiny example
Three sites: rain x = 1, 2, 3 and grass y = 2, 4, 7. Means 2 and 4.33.

| x − 2 | y − 4.33 | product |
|---|---|---|
| −1 | −2.33 | +2.33 |
| 0 | −0.33 | 0 |
| +1 | +2.67 | +2.67 |
| | | sum = **5** |

Covariance = 5 / (3 − 1) = **2.5**. Positive: wetter sites have more grass. Measure rain in mm instead of cm and every x deviation is 10 times bigger, so the covariance becomes **25**, though nothing about the sites changed.

## Start from zero
1. **Take each observation's deviation from the mean, for both variables.**
2. **Multiply the two deviations.** *Why:* both above (+ × +) or both below (− × −) gives a positive product, meaning "moving together"; one above and one below gives a negative product.
3. **Average the products** (dividing by n − 1 for a sample). That's the covariance.
4. **The variance is the covariance of a variable with itself.** *Why:* multiplying a deviation by itself is squaring it ([[Variance]]).
5. **Covariance depends on units,** so its size is hard to judge. Dividing by both standard deviations gives the [[Correlation]], which doesn't.

## See it
![[Correlation panels.png|700]]
*What to look at:* positive covariance shows as a cloud tilted up, negative as tilted down.

## Why it is this way
Multiplying deviations is the simplest arithmetic that rewards "together" and penalises "opposite". Covariance is also the raw ingredient of correlation, regression slopes and the variance-covariance matrices in mixed models and autocorrelation models.

## In R
```r
x <- c(1, 2, 3); y <- c(2, 4, 7)
cov(x, y)          # 2.5
cov(x * 10, y)     # 25: same sites, different units
cov(x, x); var(x)  # identical: variance is covariance with itself
```

## In the course
Covariance underlies correlation structures in the autocorrelation unit ([[Correlation Structures]]) and the variance components of mixed models ([[Variance Components]]).

## Common confusions
- **"A big covariance means a strong relationship."** It might just mean big units. Use correlation to judge strength.
- **Covariance vs correlation.** Same sign, different scale: correlation is unit-free and lies between −1 and +1.

## Explain it back
- Use two friends' moods to explain positive and negative covariance.
- Why does multiplying deviations capture "moving together"?
- Why did changing cm to mm change the covariance?

*Pass test:* you can compute a covariance for three points by hand and say why its size alone is hard to read.

## Connections
- **Builds on:** [[Mean]], [[Variance]]
- **Leads to:** [[Correlation]], [[Correlation Structures]], [[Variance Components]]
- **Part of:** [[MOC - Basics from Zero]]
- **Go deeper:** [[Collinearity]]

## Flashcards

What does covariance measure?
??
Whether two variables tend to be above or below their means together (positive), in opposite directions (negative), or neither (near zero).
![[Correlation panels.png]]
++++

Why is covariance hard to interpret on its own?
??
Its size depends on the units of both variables (cm × g), so it can be large just because the units are small; correlation fixes this.
++++
