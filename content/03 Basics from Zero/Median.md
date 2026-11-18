---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "The median is the middle value once the data are sorted, so half the observations lie below it and half above."
aliases:
  - "Middle value"
  - "50th percentile"
status: seedling
---

# Median

Line up a class by height and pick the person standing in the middle. That person's height is the **median**: the middle value once the data are *sorted* (arranged from smallest to largest), so that half the observations lie below it and half above. If a basketball player [[Joins|joins]] the end of the line, the middle person barely changes. With an even number of people there is no single middle person, so you average the two in the middle. In general, with n sorted values the median sits at position (n + 1) / 2.

Here is why it matters. Five foxes have [[Home Range|home ranges]] of 2, 3, 3, 5 and 37 km². The middle (third) value is 3, so the median is 3 km². The [[Mean]] is 50 / 5 = 10 km², bigger than four of the five foxes, so it describes almost nobody. Now replace 37 with 370: the median stays at 3 while the mean jumps to 76.6. The median only asks "which value is in the middle?", so how far away the extremes are makes no difference. The mean is a balance point, and a far-away value sits on a long lever that tips it a lot. A summary that extreme values cannot throw off is called *robust*. For an even count, such as 2, 3, 5 and 9, the median is (3 + 5) / 2 = 4.

Ecological data are often *skewed*, lopsided with a long tail to one side: a few enormous home ranges, a few plots with hundreds of animals. Then the median answers "what is typical?" far better than the mean. Comparing the two is also a quick diagnostic: if the mean is well above the median, the data have a long right tail. The two agree only for roughly symmetric data. The median is not "ignoring" data either; it uses every value's rank, just not its distance. It is the 0.5 [[Quantile]], the centre line of a [[Boxplot]], and a common way to summarise a Bayesian posterior ([[Posterior Summary]]). Because it resists them, it is also a useful companion when you suspect an [[Outlier]].

![[Mean vs median skew.png|700]]
*What to look at:* the long right tail drags the mean away while the median stays with the bulk of the data.

```r
range_km <- c(2, 3, 3, 5, 37)
median(range_km)   # 3
mean(range_km)     # 10
median(c(2, 3, 5, 9))   # 4: average of the two middle values
summary(range_km)  # min, quartiles, median, mean, max together
```
`summary()` shows the median and mean side by side, a quick skewness check.

## Connections
- **Builds on:** [[Mean]]
- **Leads to:** [[Quantile]], [[Boxplot]], [[Outlier]], [[Joins]], [[Home Range]]
- **See also:** [[Observation]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]], molecular note [[Mean, Median and Mode]]

## Flashcards

What is the median?
??
The middle value of the sorted data, with half the observations below and half above.
![[Mean vs median skew.png]]
++++

Why is the median robust to outliers?
??
It depends only on the order of values, not on how far away the extremes are.
++++

What does mean much greater than median suggest?
??
The data are skewed to the right, with a long tail of large values.
++++
