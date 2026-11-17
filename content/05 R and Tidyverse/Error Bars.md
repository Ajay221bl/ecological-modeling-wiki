---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "Error bars are lines extending from a plotted estimate to show its uncertainty or the spread of the data."
aliases:
  - "geom_errorbar()"
  - "geom_pointrange()"
  - "Whiskers"
status: seedling
---

# Error Bars

A dart score written as "about here, give or take this much" has a dot for the best guess and a bar for the "give or take". **Error bars** are those lines, extending from a plotted estimate to show its uncertainty or the spread of the data, and the catch is that "give or take" can mean several different things. Take richness on 5 plots: 4, 9, 5, 8 and 5, with mean 6.2 and SD 2.17. Plus or minus one SD gives 4.0 to 8.4, showing how much plots vary. Plus or minus one SE, 2.17/√5 = 0.97, gives 5.2 to 7.2, showing the precision of the mean. A 95% confidence interval, 6.2 ± 2.78 × 0.97 using t with 4 df, gives 3.5 to 8.9. Three honest bars, very different lengths, as the code below and the figure show.

The [[Standard Deviation]] describes the data and does not shrink with more samples. The [[Standard Error]] describes the estimate and shrinks with √n. A 95% [[Confidence Interval]] is roughly ± 2 SE, wider for small n. So decide what the bar means and say which in the caption, always: an unlabelled bar is uninterpretable, and SE bars make differences look more convincing than CIs do. Draw them with `geom_errorbar(aes(ymin, ymax))` or `geom_pointrange()` ([[Geoms]]).

Two confusions. Non-overlapping bars do not reliably mean a significant difference; it depends on the bar type, since SE bars can overlap slightly and the means still differ, and 95% CIs can overlap and still differ. And error bars are not always ± SE; there is no convention, so state it. A row of estimates with interval bars is a [[Coefficient Plot]].

![[Error bar types.png|700]]
*What to look at:* the same data with SD, SE and 95% CI bars: the message changes with the choice.

```r
x <- c(4, 9, 5, 8, 5); n <- length(x); m <- mean(x); s <- sd(x); se <- s / sqrt(n)
rbind(SD = c(m - s, m + s), SE = c(m - se, m + se), CI95 = m + qt(c(0.025, 0.975), n - 1) * se)
```

## Connections
- **Builds on:** [[Standard Error]], [[Standard Deviation]], [[Confidence Interval]]
- **Leads to:** [[Coefficient Plot]], [[Geoms]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]], molecular note [[Standard Deviation vs Standard Error]]

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
