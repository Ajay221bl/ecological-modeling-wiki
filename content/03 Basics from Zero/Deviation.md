---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "A deviation is how far one value sits above or below the mean: the value minus the mean."
aliases:
  - "Deviations"
  - "Deviation from the mean"
status: seedling
---

# Deviation

Your class's average height is 160 cm and you are 172 cm. The single most useful thing to say about you, compared with the class, is "12 cm taller than average". That number is a **deviation**: how far one value sits from the [[Mean]] (the ordinary average), worked out as the value minus the mean. Above the mean it is positive, below it is negative, and a value exactly at the mean has a deviation of zero.

Take five pond visits that recorded 2, 3, 3, 5 and 7 bird species. They add to 20, so the mean is 20 / 5 = 4. Subtract 4 from each value and the deviations are −2, −1, −1, +1 and +3. Now add them: −2 − 1 − 1 + 1 + 3 = 0. That is no accident. The mean is the balance point of the data, the one value where the distances on the low side exactly cancel the distances on the high side, so the deviations from a mean always add to zero, for any data at all. In [[Greek Letters and Notation|symbols]], the deviation of value i is xᵢ − x̄, where x̄ ("x-bar") is the mean, and Σ(xᵢ − x̄) = 0 ([[Summation Notation]]).

That zero is why deviations matter. Because they cancel, you cannot measure the spread of the data by averaging deviations, so statistics squares them first and adds up the squares, the [[Sum of Squares]], which leads to the [[Variance]] and the [[Standard Deviation]]. The same idea, "observed minus what we expected", comes back when a fitted model replaces the mean: the gap between a data point and the model's prediction is a [[Residual]], and fitting by [[Least Squares]] makes those deviations as small as possible. A common confusion: a deviation is not an error or a mistake. A tall student is not "wrong"; the deviation just says where they sit.

```r
x <- c(2, 3, 3, 5, 7)
x - mean(x)        # the deviations: -2 -1 -1 1 3
sum(x - mean(x))   # 0, always, because the mean is the balance point
```

## Connections
- **Builds on:** [[Mean]], [[Summation Notation]], [[Greek Letters and Notation]]
- **Leads to:** [[Sum of Squares]], [[Variance]], [[Standard Deviation]], [[Residual]], [[Least Squares]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]

## Flashcards

What is a deviation?::How far one value sits from the mean: the value minus the mean.

Why can't you measure spread by averaging the deviations?
??
Deviations from the mean always add to zero, because the mean is the balance point of the data, so their average is always zero.
++++
