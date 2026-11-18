---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "Covariance measures whether two variables tend to be above their averages at the same time (positive), in opposite directions (negative), or with no pattern (near zero)."
aliases:
  - "cov()"
  - "Covariation"
status: seedling
---

# Covariance

Think of two friends' moods over a week. If they tend to be cheerful on the same days and glum on the same days, their moods *co-vary* positively; if one is up whenever the other is down, negatively; if there is [[Identity Link|no link]], about zero. **Covariance** puts a number on that for any two variables measured on the same observations: it says whether they tend to be above their averages at the same time (positive), in opposite directions (negative), or with no pattern (near zero). It is built from *[[Deviation|deviations]]*, each value minus its [[Mean]].

The recipe is: for each observation, multiply its x deviation by its y deviation, then average the products, dividing by n − 1 for a sample. Multiplying is the trick: both above average (+ × +) or both below (− × −) gives a positive product, meaning "moving together", while one above and one below gives a negative product. Three sites have rain x = 1, 2, 3 and grass y = 2, 4, 7, with means 2 and 4.33. The products are (−1)(−2.33) = 2.33, (0)(−0.33) = 0 and (1)(2.67) = 2.67, which add to 5, so the covariance is 5 / (3 − 1) = 2.5. It is positive: wetter sites have more grass. Notice too that a variable's covariance with itself is its [[Variance]], because multiplying a deviation by itself is squaring it.

The weakness of covariance is its units: here "rain units times grass units". Measure rain in millimetres instead of centimetres and every x deviation is 10 times bigger, so the covariance becomes 25, although nothing about the sites changed. A big covariance might just mean big units, so its size cannot tell you how strong a relationship is. Dividing by both standard deviations removes the units and gives the [[Correlation]], which always lies between −1 and +1 and has the same sign. Covariance still matters in its own right, because it is the raw ingredient of correlation, of regression slopes, and of the variance-covariance [[Matrix|matrices]] that describe how observations are linked in [[Mixed Effects Model|mixed models]] and autocorrelation models ([[Correlation Structure|Correlation Structures]], [[Variance Components]]).

![[Correlation panels.png|700]]
*What to look at:* positive covariance shows as a cloud tilted up, negative as tilted down.

```r
x <- c(1, 2, 3); y <- c(2, 4, 7)
cov(x, y)          # 2.5
cov(x * 10, y)     # 25: same sites, different units
cov(x, x); var(x)  # identical: variance is covariance with itself
```

## Connections
- **Builds on:** [[Mean]], [[Variance]], [[Deviation]], [[Matrix]]
- **Leads to:** [[Correlation]], [[Correlation Structure|Correlation Structures]], [[Variance Components]], [[Identity Link]], [[Mixed Effects Model]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]
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
