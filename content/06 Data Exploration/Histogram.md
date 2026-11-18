---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "A histogram cuts a variable's range into equal intervals called bins and draws a bar for how many observations fall in each."
aliases:
  - "geom_histogram()"
  - "hist()"
  - "Frequency distribution"
status: seedling
---

# Histogram

Sort coins into a row of jars by decade, 1970s, 1980s, 1990s, and the height of the coins in each jar shows at a glance which decades are common. A **histogram** cuts a numeric variable's range into equal intervals called *bins*, counts how many observations fall into each, and draws a bar of that height ([[Continuous Data]], [[Count Data]]). Unlike a bar chart, which has one bar per category, a histogram's bars touch, because the bins cover a continuous range.

Read the shape: symmetric or skewed, one peak or two, gaps, a spike at zero. The shape suggests which [[Probability Distribution]] to consider for the response. But bin width changes the picture, so try several. The figure and code below show the same body masses, a [[Mixture Distribution|mixture]] of two groups, with wide, moderate and narrow bins: wide bins hide the two peaks, narrow bins turn noise into false detail, and only the middle one shows the structure clearly. The two peaks are two *modes* ([[Mode]]).

Histograms are protocol step 3, the check of shape and [[Normality]] ([[Zuur et al. 2010]]). One common mistake: a skewed histogram of the raw response does not by itself break a [[Linear Model|linear model]]. The normality assumption is about the residuals, and a response can look skewed simply because its [[Predictor Variable|predictors]] are skewed. A smoothed version of the histogram is the [[Density Plot]].

![[Histogram bin widths.png|700]]
*What to look at:* the same data with wide, moderate and narrow bins. Only the middle one shows the two peaks clearly.

```r
set.seed(5)
mass <- c(rnorm(60, 18, 1.5), rnorm(40, 24, 1.5))     # two groups mixed
h <- hist(mass, breaks = 15, main = "", xlab = "Body mass (g)")
h$counts
hist(mass, breaks = 4); hist(mass, breaks = 40)        # too coarse, too fine
library(ggplot2); p <- ggplot(data.frame(mass), aes(mass)) + geom_histogram(binwidth = 1)
```

## Connections
- **Builds on:** [[Continuous Data]], [[Predictor Variable]]
- **Leads to:** [[Density Plot]], [[Normality]], [[Probability Distribution]], [[Mode]], [[Mixture Distribution]], [[Linear Model]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What does a histogram show?
??
How many observations fall in each of a series of equal-width intervals of a numeric variable.
![[Histogram bin widths.png]]
++++

Why does bin width matter?
??
Too wide hides structure. Too narrow shows noise as if it were pattern.
++++
