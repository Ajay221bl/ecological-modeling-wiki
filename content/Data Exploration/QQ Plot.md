---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Quantile-quantile plot"
  - "Q-Q Plot"
  - "Normal QQ plot"
  - "qqnorm()"
status: seedling
---

# QQ Plot

**In one line:** a QQ plot checks whether data follow a chosen distribution by plotting the data's sorted values against the values that distribution would be expected to give.

> [!info] Before this, it helps to know
> [[Quantile]] (what is being matched) · [[Normal Distribution]] (the usual comparison) · [[Residual]] (what is usually plotted)

## The everyday picture
Lining up two football teams by height and pairing them off: shortest with shortest, tallest with tallest. If the teams have the same spread of heights, each pair matches and the pairs fall on a straight line.

## Start from zero
1. **Sort your n values.**
2. **Work out the n values a perfect sample from the distribution would have** (its quantiles).
3. **Plot one against the other.**
4. **A straight line means the shapes agree.**
5. **Read the departures.** Both ends curling up: right skew. An S shape: tails heavier or lighter than expected. One or two points off the end: outliers.
6. **Why it beats a histogram for this job:** no bins, and the eye judges straightness well.
7. **Small samples wobble.** Simulate a few normal samples of your n to learn what "fine" looks like.

## See it
![[QQ plot shapes.png|700]]
*What to look at:* normal data hug the line, skewed data bend away at the upper end, heavy tails make an S.

## In R
```r
set.seed(7)
norm <- rnorm(100); skew <- rexp(100)
qqnorm(norm); qqline(norm)       # straight
qqnorm(skew); qqline(skew)       # bends upward: right skew
m <- lm(mpg ~ wt, mtcars); qqnorm(resid(m)); qqline(resid(m))   # the usual use: residuals
op <- par(mfrow = c(2, 2)); for (i in 1:4) { z <- rnorm(20); qqnorm(z, main = ""); qqline(z) }; par(op)   # what n = 20 normal samples look like
```

## In the course
Added in the data exploration lab. DHARMa's main diagnostic is a QQ plot of simulated residuals ([[DHARMa Simulated Residuals]]).

## Common confusions
- **"Any wobble means non-normal."** Small samples never lie exactly on the line.
- **"Plot the raw response."** For a model check, plot the residuals.

## Explain it back
- What pattern does right-skewed data make?
- Why plot residuals, not the response?

*Pass test:* you can read straight, curved and S-shaped QQ plots.

## Connections
- **Builds on:** [[Quantile]], [[Normal Distribution]]
- **Leads to:** [[Normality]], [[plot() Diagnostics for lm]], [[DHARMa Simulated Residuals]]
- **Part of:** [[MOC - Data Exploration]]

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
