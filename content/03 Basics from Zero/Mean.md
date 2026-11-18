---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "The mean is the \"fair share\" value: add all the values up and share the total out equally, one share per value."
aliases:
  - "Average"
  - "Sample mean"
  - "x-bar"
  - "Average (Mean)"
  - "averages"
  - "arithmetic mean"
status: seedling
---

# Mean

Five friends go fishing and catch 2, 3, 3, 5 and 7 fish. Back at the car they pool everything into one bucket, 20 fish, and share it out equally: 4 each. That fair share is the **mean**, or average: add all the values and divide by how many there are. For a sample it is written x̄ ("x-bar"), and the formula $\bar{x} = \frac{1}{n}\sum_{i=1}^{n} x_i$ says exactly what you did by hand: add every value (Σ means "add them all up", [[Summation Notation]]) and divide by n, the number of values. The true mean of a whole population is written μ ("mew"); the sample mean x̄ is your estimate of it, known exactly, while μ is never seen directly ([[Parameter vs Estimate]]). A mean need not be a value anyone had: 2.4 eggs per nest is fine although no nest holds 2.4 eggs.

A second picture turns out to be even more useful. Put the five catches as weights on a see-saw at positions 2, 3, 3, 5 and 7, and it balances at exactly one point: 4. The mean is the *balance point* of the data. Check it with the *[[Deviation|deviations]]*, each value minus the mean: −2, −1, −1, +1 and +3, which add to exactly 0. They always do, for any data, because adding all the deviations is the same as adding all the values (20) and subtracting n copies of the mean (5 × 4 = 20). That is why the [[Variance]] must square the deviations before adding them, or they would always cancel. Now a sixth friend arrives with 40 fish: total 60, shared six ways, 10 each. One big catch dragged the mean from 4 to 10, although five of the six friends caught 7 or fewer. The median, the [[Median|middle value]] once sorted, barely moves (from 3 to 4), which is why the median is reported for strongly skewed data and why an [[Outlier]] is checked for first in [[Data Exploration Protocol|data exploration]].

Why share equally instead of just picking the middle value? Because the mean is the single number that keeps the total right: 5 friends × 4 fish = 20 fish, the real catch. That makes it natural for anything that adds up, such as total biomass or total births. It is also the value that makes the sum of squared distances to the data as small as possible, which is why [[Least Squares]] and nearly every model in this course are built around means. In a model, "the mean" usually means the mean for given conditions: a regression predicts the mean of y for a given x, written μᵢ or E(y | x), "the [[Expected Value|expected value]] of y given x". The predictable part of every model is a statement about that mean, and individual observations scatter around it ([[Deterministic and Stochastic Components]]). Powell and Gale use the sample mean as their first example of a [[Statistical Model|statistical model]] ([[Powell and Gale 2015 Ch1]]), and Hobbs and Hooten call the mean of a distribution its first moment ([[Moments of a Distribution|Moments]]). In R, one missing value makes `mean()` return NA unless you add `na.rm = TRUE`.

![[Mean as balance point.png|700]]
*What to look at:* if the number line were a see-saw, it would balance at 4.

```r
x <- c(2, 3, 3, 5, 7)
mean(x)                  # 4
sum(x) / length(x)       # same thing by hand
sum(x - mean(x))         # 0: the deviations balance
mean(c(x, 40))           # 10: one outlier pulls it hard
median(c(x, 40))         # 4: the middle value barely moves
mean(c(x, NA))           # NA: one missing value spoils it
mean(c(x, NA), na.rm = TRUE)   # 4: tell R to drop missing values
```

## Connections
- **Builds on:** [[Summation Notation]], [[Parameter vs Estimate]], [[Deviation]], [[Median]]
- **Leads to:** [[Variance]], [[Moments of a Distribution|Moments]], [[Linear Regression]], [[Deterministic and Stochastic Components]], [[Expected Value]], [[Statistical Model]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]
- **Go deeper:** [[Hobbs and Hooten 2015 Ch3]] (§3.4.3, moments)

## Flashcards

Why do deviations from the mean always add to zero?
??
The mean is the balance point: distances below it exactly cancel distances above it.
![[Mean as balance point.png]]
++++

In a regression, what does the deterministic part predict?
??
The mean (expected value) of y for a given x, not each individual observation.
++++

Why is the mean so sensitive to outliers?
??
Every value goes into the total that gets shared out, so one extreme value drags the fair share toward it.
++++
