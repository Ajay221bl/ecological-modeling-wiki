---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "IQR"
  - "Midspread"
status: seedling
---

# Interquartile Range

**In one line:** the interquartile range is the width of the middle half of the data, from the 25% quantile to the 75% quantile.

> [!info] Before this, it helps to know
> [[Quantile]] (values cutting off chosen fractions) · [[Range]] (the full stretch of the data)

## The everyday picture
Commute times. The quickest and slowest days ever are freak events. What you plan around is the usual band: "most days it takes 25 to 35 minutes". The interquartile range is that usual band.

*Where the picture stops working:* "most days" here means exactly the middle 50%, which may feel narrower than everyday speech suggests.

## Words you'll need
- **Q1, Q3:** the first and third quartiles (0.25 and 0.75 quantiles).
- **IQR:** Q3 − Q1.
- **Fence:** a cut-off 1.5 × IQR beyond a quartile, used to flag unusual points.

## A tiny example
Mouse masses: 14, 15, 16, 18, 19, 21, 22, 25, 30 g.
- Q1 = 16, Q3 = 22.
- IQR = 22 − 16 = **6** g.
- Upper fence = 22 + 1.5 × 6 = **31**. Lower fence = 16 − 9 = **7**. No mouse is outside.
- Change 30 to 60: the IQR is still 6, the range jumps from 16 to 46.

## Start from zero
1. **Find Q1 and Q3.**
2. **Subtract.** IQR = Q3 − Q1.
3. **It ignores the outer quarters.** *Why:* extremes live there, so removing them gives a spread that odd values can't inflate.
4. **Use it to flag unusual points.** Anything more than 1.5 × IQR outside the quartiles is drawn as a separate dot on a boxplot.
5. **A flag is a question, not a verdict.** A flagged point may be perfectly real ([[Outlier]]).

## See it
![[Quantiles and IQR.png|700]]
*What to look at:* the box spans Q1 to Q3, so its length is the IQR.

## Why it is this way
The range is too fragile and the standard deviation assumes a roughly symmetric shape. The IQR is the robust middle ground: it tells you how spread the typical observations are, whatever the tails are doing. The 1.5 rule comes from the normal distribution, where it flags about 7 points in 1,000.

## In R
```r
mass <- c(14, 15, 16, 18, 19, 21, 22, 25, 30)
IQR(mass)                                   # 6
q <- quantile(mass, c(0.25, 0.75))
c(q[1] - 1.5 * IQR(mass), q[2] + 1.5 * IQR(mass))   # fences 7 and 31
mass2 <- replace(mass, 9, 60)
c(IQR(mass2), sd(mass), sd(mass2))          # IQR unchanged, SD nearly triples
```
The IQR is unmoved by the extreme mouse. The standard deviation is not.

## In the course
Zuur and colleagues use boxplots, built on the IQR, as a first outlier check ([[Zuur et al. 2010]]).

## Common confusions
- **"Points beyond the fences are errors."** They are just far from the middle. Skewed data produce many of them honestly.
- **"IQR is two numbers."** It is one number, a width. Q1 and Q3 are the two numbers.

## Explain it back
- Why doesn't one extreme value change the IQR?
- What is the 1.5 × IQR rule for?

*Pass test:* you can compute an IQR and its fences by hand.

## Connections
- **Builds on:** [[Quantile]], [[Range]]
- **Leads to:** [[Boxplot]], [[Outlier]], [[Standard Deviation]]
- **Part of:** [[MOC - Basics from Zero]]

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
