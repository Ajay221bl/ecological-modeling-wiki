---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "geom_errorbar()"
  - "geom_pointrange()"
  - "Whiskers"
status: seedling
---

# Error Bars

**In one line:** error bars are lines extending from a plotted estimate to show its uncertainty or the spread of the data.

> [!info] Before this, it helps to know
> [[Standard Error]], [[Standard Deviation]] and [[Confidence Interval]] (three different things a bar might show) · [[Geoms]] (how to draw them)

## The everyday picture
A dart score written as "about here, give or take this much". The dot is the best guess and the bar is the "give or take". The catch is that "give or take" can mean several different things.

## A tiny example
Richness on 5 plots: 4, 9, 5, 8, 5. Mean 6.2, SD 2.17.
- ± SD: 4.0 to 8.4. Shows how much plots vary.
- ± SE: SE = 2.17 / √5 = 0.97, so 5.2 to 7.2. Shows precision of the mean.
- 95% CI: 6.2 ± 2.78 × 0.97, so 3.5 to 8.9 (t with 4 df).
Three honest bars, very different lengths.

## Start from zero
1. **Decide what the bar means.**
2. **SD describes the data.** It doesn't shrink with more samples.
3. **SE describes the estimate.** It shrinks with √n.
4. **A 95% CI is roughly ± 2 SE,** wider for small n.
5. **Say which in the caption. Always.** *Why:* an unlabelled bar is uninterpretable, and SE bars make differences look more convincing than CIs do.
6. **Draw with `geom_errorbar(aes(ymin, ymax))` or `geom_pointrange()`.**

## See it
![[Error bar types.png|700]]
*What to look at:* the same data with SD, SE and 95% CI bars: the message changes with the choice.

## In R
```r
x <- c(4, 9, 5, 8, 5); n <- length(x); m <- mean(x); s <- sd(x); se <- s / sqrt(n)
rbind(SD = c(m - s, m + s), SE = c(m - se, m + se), CI95 = m + qt(c(0.025, 0.975), n - 1) * se)
```

## Common confusions
- **"Non-overlapping bars mean a significant difference."** It depends on the bar type. SE bars can overlap slightly and still differ. 95% CIs can overlap and still differ.
- **"Error bars are always ± SE."** There is no convention. State it.

## Explain it back
- Which bar would you use to show how variable plots are? How precisely the mean is known?

*Pass test:* you can compute and label all three kinds of bar.

## Connections
- **Builds on:** [[Standard Error]], [[Standard Deviation]], [[Confidence Interval]]
- **Leads to:** [[Coefficient Plot]], [[Geoms]]
- **Part of:** [[MOC - Reproducible Coding and Figures]], molecular note [[Standard Deviation vs Standard Error]]

## Flashcards

What three things might an error bar show?
??
Standard deviation (spread of data), standard error (precision of the estimate) or a confidence interval.
![[Error bar types.png]]
++++

Why must a caption say what the error bars are?
??
SD, SE and CI bars have very different lengths and meanings.
++++
