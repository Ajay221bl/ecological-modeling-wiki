---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "geom_histogram()"
  - "hist()"
  - "Frequency distribution"
status: seedling
---

# Histogram

**In one line:** a histogram cuts a variable's range into equal intervals called bins and draws a bar for how many observations fall in each.

> [!info] Before this, it helps to know
> [[Continuous Data]] (what it displays) · [[Count Data]] (the bar heights)

## The everyday picture
Sorting coins into a row of jars by date: 1970s, 1980s, 1990s. The height of the coins in each jar shows at a glance which decades are common.

## Start from zero
1. **Divide the range into bins.**
2. **Count the observations in each.**
3. **Draw bars with those heights.**
4. **Read the shape.** Symmetric or skewed? One peak or two? Gaps? A spike at zero?
5. **Bin width changes the picture.** *Why to try several:* wide bins hide structure, narrow bins turn noise into false detail.
6. **The shape suggests a distribution** to consider for the response.

## See it
![[Histogram bin widths.png|700]]
*What to look at:* the same data with wide, moderate and narrow bins. Only the middle one shows the two peaks clearly.

## In R
```r
set.seed(5)
mass <- c(rnorm(60, 18, 1.5), rnorm(40, 24, 1.5))     # two groups mixed
h <- hist(mass, breaks = 15, main = "", xlab = "Body mass (g)")
h$counts
hist(mass, breaks = 4); hist(mass, breaks = 40)        # too coarse, too fine
library(ggplot2); p <- ggplot(data.frame(mass), aes(mass)) + geom_histogram(binwidth = 1)
```

## In the course
Protocol step 3. The lab plots histograms of richness ([[Course Website]]; [[Zuur et al. 2010]]).

## Common confusions
- **"A histogram is a bar chart."** A bar chart has one bar per category. A histogram bins a numeric variable and its bars touch.
- **"A non-normal histogram of Y breaks the linear model."** The assumption is about residuals. A response can look skewed simply because the predictors are.

## Explain it back
- Why try more than one bin width?
- What does a spike at zero suggest?

*Pass test:* you can read shape, skew and modes from a histogram.

## Connections
- **Builds on:** [[Continuous Data]]
- **Leads to:** [[Density Plot]], [[Normality]], [[Probability Distribution]], [[Mode]]
- **Part of:** [[MOC - Data Exploration]]

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
