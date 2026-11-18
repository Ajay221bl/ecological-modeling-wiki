---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "Variance measures how spread out values are: it's the average of the squared distances of the values from their mean."
aliases:
  - "Sample variance"
  - "sigma squared"
  - "var()"
status: seedling
---

# Variance

Two bus routes both arrive "on average at 9:00". Route A is always within a minute of 9:00; route B turns up at 8:40 one day and 9:25 the next. Same average, very different wait at the stop, because an average hides how much the values wobble. **Variance** is one number for that wobble, which statisticians call *spread*: roughly, the average squared distance of the values from their [[Mean]] (the ordinary average: add the values up and divide by how many there are). It is written s² when it is worked out from a [[Sample]] (the handful of values we actually measured) and σ², "sigma squared", for the whole [[Population]] (every value we could ever measure). Route A gets a small variance, route B a big one.

Here is the recipe, with the reason for each step. Five visits to a pond recorded 2, 3, 3, 5 and 7 bird species, so the mean is 20 / 5 = 4. First find each value's [[Deviation]], how far it sits above or below the mean: −2, −1, −1, +1 and +3. You cannot just average these, because they always add to exactly zero; the mean is the balance point, so the minuses cancel the pluses. So square each deviation: 4, 1, 1, 1 and 9. A square is never negative, so nothing cancels, and squaring makes a big miss count much more than a small one (a miss of 3 counts 9, a miss of 1 counts 1). Add the squares, a step written with the Σ sign of [[Summation Notation]], to get 16, the [[Sum of Squares]]. Finally divide, but for a sample divide by n − 1 = 4 rather than n = 5: s² = 16 / 4 = 4. Why n − 1? The deviations were measured from the sample mean, which was calculated from these same five numbers and so sits closer to them than the true population mean does. The squared deviations come out a little too small, and dividing by one less makes up for it on average; the n − 1 is the number of [[Degrees of Freedom]], and it makes s² an [[Unbiased Estimator]] of σ² (right on average over many samples). R's `var()` always divides by n − 1. A pond that recorded 4, 4, 4, 4, 4 has variance 0: no spread at all.

The units come out squared, here 4 "species squared", which nobody can picture, so spread is usually reported as the [[Square Root]] of the variance, the [[Standard Deviation]]: √4 = 2 species. That clears up the most common confusion: a variance of 4 does not mean values sit 4 away from the mean; the typical distance is 2. Why squares, rather than dropping the minus signs? Both stop the cancelling, but squares have two special properties. The mean is exactly the value that makes the sum of squared deviations as small as possible, which ties variance to the mean and to [[Least Squares]] fitting; and the variances of independent things simply add, which is how every [[Standard Error]] in the course is built. That is why variance turns up everywhere in modeling: the leftover scatter around a fitted line in a [[Linear Model]], [[Overdispersion]] when counts vary more than their mean, and the [[Variance Components]] of a [[Mixed Effects Model|mixed model]]. Hobbs and Hooten call it the second central moment of a distribution and use mean and variance together to choose a distribution's parameters ([[Moments of a Distribution]], [[Hobbs and Hooten 2015 Ch3]]).

![[Deviations and variance.png|700]]
*What to look at:* each orange line is a deviation. Square them, add them up and divide by n − 1 to get the variance.

```r
x <- c(2, 3, 3, 5, 7)
var(x)                                  # 4 (R divides by n - 1)
sum((x - mean(x))^2) / (length(x) - 1)  # same by hand: 16 / 4
sum(x - mean(x))                        # 0: why we can't skip the squaring
sd(x)                                   # 2 = sqrt(var(x))
```

## Connections
- **Builds on:** [[Mean]], [[Sample]], [[Population]], [[Deviation]], [[Summation Notation]], [[Sum of Squares]], [[Degrees of Freedom]], [[Square Root]]
- **Leads to:** [[Unbiased Estimator]], [[Standard Deviation]], [[Least Squares]], [[Standard Error]], [[Linear Model]], [[Overdispersion]], [[Variance Components]], [[Moments of a Distribution]], [[Mixed Effects Model]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]
- **Go deeper:** [[Standard Deviation vs Standard Error]], [[Hobbs and Hooten 2015 Ch3]]

## Flashcards

Why does variance square the deviations instead of averaging them directly?
??
Raw deviations always sum to zero (the mean is the balance point); squaring makes them all positive and weights large deviations more.
![[Deviations and variance.png]]
++++

Why divide by n − 1 for a sample variance?
??
Deviations are measured from the sample mean, which was fitted to the same data and sits closer to them than the true mean does, so dividing by n would underestimate the true variance.
++++

A sample has variance 9. What is the typical distance of a value from the mean?
??
About 3, the standard deviation (√9), not 9.
++++
