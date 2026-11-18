---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "Count data are whole numbers, 0, 1, 2 and up, that record how many things or events were seen."
aliases:
  - "Counts"
status: seedling
---

# Count Data

Picture counting the cars that pass your window in one minute. You can get 0, 3 or 12, but never 2.5 and never minus 1. On a quiet street most minutes give 0 or 1, with an occasional burst. **Count data** are exactly this: whole numbers that are zero or more (*non-negative integers*), recording how many things or events were seen. Counting is the most common measurement in ecology: individuals, species, eggs, nests and detections are all counts. Counts are a kind of [[Discrete Data]], because the values jump in steps instead of flowing smoothly.

Counts have a recognisable shape. Suppose you count nests on 8 plots and get 0, 0, 1, 0, 2, 1, 0, 6. The mean is 10 / 8 = 1.25 nests, half the plots have zero, and one plot has 6. The data are *skewed*: lopsided, with a pile at zero and a long tail to the right. They are skewed because of the wall at zero. Values cannot go below it, so when the average is small, everything squashes up against that wall and only the occasional large value stretches out to the right. The spread also grows with the average: a plot that averages 100 birds can easily vary by 10 either way, but a plot that averages 1 bird cannot. This link between average and spread is called the [[Mean-Variance Relationship]]. In the nest data the variance is 4.21, more than three times the mean, which already hints at [[Overdispersion]].

This is why the familiar bell-shaped [[Normal Distribution|normal distribution]] is the wrong tool for small counts. A bell curve centred on 1.25 nests would predict negative nests on some plots, which is impossible, and it assumes the same spread everywhere. Instead, counts get their own distributions: the [[Poisson Distribution]], where the variance is about equal to the mean, and the [[Negative Binomial Distribution]], where the variance is larger. These are used inside [[Poisson Regression]] and other [[Generalized Linear Model|GLMs]], which keep predictions positive and the uncertainty honest. A common shortcut, log-transforming the counts and then using an ordinary [[Linear Model|linear model]], breaks down because log(0) is undefined, and Zuur and colleagues argue for fitting a count model instead ([[Zuur et al. 2010]]). When there are more zeros than even these distributions expect, see [[Zero Inflation]].

![[Count data shape.png|700]]
*What to look at:* the pile at zero and the long right tail, compared with the symmetric bell.

```r
nests <- c(0, 0, 1, 0, 2, 1, 0, 6)
mean(nests); var(nests)      # 1.25 and 4.21: variance exceeds the mean
table(nests)                 # how many plots had each count
# a Poisson model keeps predictions positive
m <- glm(nests ~ 1, family = poisson)
exp(coef(m))                 # 1.25, the mean count
```
The variance being more than three times the mean hints at [[Overdispersion]].

## Connections
- **Builds on:** [[Discrete Data]]
- **Leads to:** [[Poisson Distribution]], [[Negative Binomial Distribution]], [[Poisson Regression]], [[Zero Inflation]], [[Normal Distribution]], [[Generalized Linear Model]], [[Linear Model]]
- **See also:** [[Detection Probability]], [[Variable]], [[Zuur et al. 2009 Ch9]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]], molecular note [[Why the response type decides the distribution]]

## Flashcards

What makes count data special?
??
They are whole numbers, never negative, usually skewed, and their variance grows with their mean.
![[Count data shape.png]]
++++

Why is a normal linear model a poor fit for small counts?
??
It can predict negative values and assumes constant variance.
++++

Which two distributions are the usual choices for counts?
??
Poisson (variance equals mean) and negative binomial (variance larger than mean).
++++
