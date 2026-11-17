---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "The interquartile range is the width of the middle half of the data, from the 25% quantile to the 75% quantile."
aliases:
  - "IQR"
  - "Midspread"
status: seedling
---

# Interquartile Range

Think about your commute. The quickest and slowest days ever were freak events; what you plan around is the usual band, "most days it takes 25 to 35 minutes". The **interquartile range** (IQR) is that usual band for any dataset: the width of the middle half of the data, from the first quartile Q1 (the 0.25 [[Quantile]]) to the third quartile Q3 (the 0.75 quantile). It is one number, IQR = Q3 − Q1. "Most" here means exactly the middle 50%, a little narrower than everyday speech suggests.

Take the mouse masses 14, 15, 16, 18, 19, 21, 22, 25 and 30 g. Q1 = 16 and Q3 = 22, so the IQR is 6 g. Now change the heaviest mouse from 30 to 60 g. The IQR is still 6, while the [[Range]] jumps from 16 to 46 and the [[Standard Deviation]] nearly triples. The IQR ignores the outer quarters of the data, which is where extreme values live, so odd values cannot inflate it. The range is too fragile and the standard deviation assumes a roughly symmetric shape, so the IQR is the robust middle ground: how spread out the typical observations are, whatever the tails are doing.

The IQR also gives a rule for flagging unusual points. Build a *fence* 1.5 × IQR beyond each quartile: here the upper fence is 22 + 1.5 × 6 = 31 and the lower one is 16 − 9 = 7, so no mouse falls outside. On a [[Boxplot]] the box spans Q1 to Q3 and any point beyond a fence is drawn as a separate dot. The 1.5 comes from the normal distribution, where it flags only about 7 points in 1,000. A flag is a question, not a verdict: skewed data honestly produce many points beyond the fences, and a flagged point may be perfectly real ([[Outlier]]). Zuur and colleagues use these boxplots as a first outlier check ([[Zuur et al. 2010]]).

![[Quantiles and IQR.png|700]]
*What to look at:* the box spans Q1 to Q3, so its length is the IQR.

```r
mass <- c(14, 15, 16, 18, 19, 21, 22, 25, 30)
IQR(mass)                                   # 6
q <- quantile(mass, c(0.25, 0.75))
c(q[1] - 1.5 * IQR(mass), q[2] + 1.5 * IQR(mass))   # fences 7 and 31
mass2 <- replace(mass, 9, 60)
c(IQR(mass2), sd(mass), sd(mass2))          # IQR unchanged, SD nearly triples
```
The IQR is unmoved by the extreme mouse. The standard deviation is not.

## Connections
- **Builds on:** [[Quantile]], [[Range]]
- **Leads to:** [[Boxplot]], [[Outlier]], [[Standard Deviation]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]

## Flashcards

What is the interquartile range?
??
Q3 minus Q1, the width of the middle 50% of the data.
![[Quantiles and IQR.png]]
++++

What is the 1.5 × IQR rule?
??
Points more than 1.5 IQRs below Q1 or above Q3 are flagged as unusual on a boxplot.
++++

Why is the IQR robust?
??
It ignores the top and bottom quarters, where extreme values sit.
++++
