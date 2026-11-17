---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "A QQ plot checks whether data follow a chosen distribution by plotting the data's sorted values against the values that distribution would be expected to give."
aliases:
  - "Quantile-quantile plot"
  - "Q-Q Plot"
  - "Normal QQ plot"
  - "qqnorm()"
status: seedling
---

# QQ Plot

Line up two football teams by height and pair them off, shortest with shortest, tallest with tallest. If the teams have the same spread of heights, every pair matches and the pairs fall on a straight line. A **QQ plot**, or quantile-quantile plot, checks whether data follow a chosen distribution the same way. Sort your n values, work out the n values a perfect sample from the distribution would have (its quantiles, [[Quantile]]), and plot one against the other. Usually the comparison is a [[Normal Distribution]] and the values plotted are a model's [[Residual|residuals]].

A straight line means the shapes agree. The departures have recognisable signatures, shown in the figure: points bending away upward at the upper end mean right skew; an S shape means tails heavier or lighter than the normal's; one or two points off the end are outliers. In the code below, normal data hug the line while exponential data bend upward. QQ plots beat histograms for this job because there are no bins to choose and the eye judges straightness well. They are one of the standard diagnostic plots for linear models ([[plot() Diagnostics for lm]]), and DHARMa's main diagnostic is a QQ plot of simulated residuals, extending the idea to GLMs and mixed models ([[DHARMa Simulated Residuals]]).

Small samples never lie exactly on the line, so a little wobble is not evidence against [[Normality]]. The last line of the code draws four QQ plots of genuinely normal samples of 20, a useful calibration for what "fine" looks like at your sample size. And for checking a model, plot the residuals, not the raw response, because the assumption is about the residuals.

![[QQ plot shapes.png|700]]
*What to look at:* normal data hug the line, skewed data bend away at the upper end, heavy tails make an S.

```r
set.seed(7)
norm <- rnorm(100); skew <- rexp(100)
qqnorm(norm); qqline(norm)       # straight
qqnorm(skew); qqline(skew)       # bends upward: right skew
m <- lm(mpg ~ wt, mtcars); qqnorm(resid(m)); qqline(resid(m))   # the usual use: residuals
op <- par(mfrow = c(2, 2)); for (i in 1:4) { z <- rnorm(20); qqnorm(z, main = ""); qqline(z) }; par(op)   # what n = 20 normal samples look like
```

## Connections
- **Builds on:** [[Quantile]], [[Normal Distribution]]
- **Leads to:** [[Normality]], [[plot() Diagnostics for lm]], [[DHARMa Simulated Residuals]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What does a QQ plot compare?
??
The sorted data against the quantiles expected from a reference distribution, usually the normal.
![[QQ plot shapes.png]]
++++

What does a straight line on a QQ plot mean?
??
The data's distribution has the same shape as the reference.
++++

What does an upward curve at the right end indicate?
??
Right skew: large values are larger than the normal would produce.
++++
