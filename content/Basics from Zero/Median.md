---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Middle value"
  - "50th percentile"
status: seedling
---

# Median

**In one line:** the median is the middle value once the data are sorted, so half the observations lie below it and half above.

> [!info] Before this, it helps to know
> [[Mean]] (the balance point) · [[Observation]] (one measured value)

## The everyday picture
Line up a class by height and pick the person standing in the middle. That person's height is the median. If one basketball player joins the end of the line, the middle person barely changes.

*Where the picture stops working:* with an even number of people there is no single middle person, so you average the two in the middle.

## Words you'll need
- **Sorted:** arranged from smallest to largest.
- **Skewed:** lopsided, with a long tail to one side.
- **Robust:** not thrown off by a few extreme values.

## A tiny example
Home ranges of 5 foxes (km²): 2, 3, 3, 5, 37.
- Sorted already. The middle (third) value is **3**.
- The mean is 50 / 5 = **10**, larger than four of the five foxes.
- Replace 37 with 370: the median stays 3, the mean jumps to 76.6.

## Start from zero
1. **Sort the values.**
2. **Find the middle position.** With n values it is position (n + 1) / 2. Here (5 + 1) / 2 = 3.
3. **With even n, average the two middle values.** For 2, 3, 5, 9 the median is (3 + 5) / 2 = 4.
4. **The median uses order, not size.** *Why:* it only asks "which value is in the middle", so how far away the extremes are makes no difference.
5. **Compare it with the mean.** If the mean is well above the median, the data are skewed to the right.

## See it
![[Mean vs median skew.png|700]]
*What to look at:* the long right tail drags the mean away while the median stays with the bulk of the data.

## Why it is this way
The mean is a balance point, so one far-away value has a long lever and moves it a lot. Ecological data are often skewed (a few huge home ranges, a few plots with hundreds of animals), and then the mean describes nobody. The median answers "what is typical?" in a way extremes can't distort.

## In R
```r
range_km <- c(2, 3, 3, 5, 37)
median(range_km)   # 3
mean(range_km)     # 10
median(c(2, 3, 5, 9))   # 4: average of the two middle values
summary(range_km)  # min, quartiles, median, mean, max together
```
`summary()` shows the median and mean side by side, a quick skewness check.

## In the course
Boxplots draw the median as their centre line ([[Boxplot]]). Bayesian summaries often report the posterior median ([[Posterior Summary]]).

## Common confusions
- **"Median and mean are the same thing."** Only for symmetric data.
- **"The median ignores data."** It uses every value's rank, just not its distance.

## Explain it back
- Why does one giant value move the mean but not the median?
- What does it tell you when the mean is far above the median?

*Pass test:* you can find a median by hand and say when to prefer it to the mean.

## Connections
- **Builds on:** [[Mean]]
- **Leads to:** [[Quantile]], [[Boxplot]], [[Outlier]]
- **Part of:** [[MOC - Basics from Zero]], molecular note [[Mean, Median and Mode]]

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
