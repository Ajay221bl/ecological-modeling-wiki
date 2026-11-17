---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "Log odds are the natural logarithm of the odds, which stretches probabilities from their 0-to-1 box onto the whole number line."
aliases:
  - "Log-odds scale"
status: seedling
---

# Log Odds

Picture a dimmer knob with no end stops. Probability is like a slider that hits a wall at 0 and at 1, but **log odds** are a knob you can turn forever either way: far left is "almost never", zero is "50:50", far right is "almost always". Formally, log odds are the natural logarithm ([[Natural Logarithm]]) of the [[Odds]], log(p / (1 − p)), also called the *logit* of p. Each step removes one fence: probability runs from 0 to 1, odds remove the top bound (0 to infinity), and the log removes the bottom bound, because the log of a number between 0 and 1 is negative without limit. So log odds run from minus infinity to plus infinity.

Some values. p = 0.5 gives odds 1 and log odds log(1) = 0. p = 0.75 gives odds 3 and log odds 1.10. p = 0.25 gives odds 1/3 and log odds −1.10, the same size with the opposite sign, so the scale is *symmetric*: success and failure are treated alike. p = 0.99 gives 4.60. To go back you use the *inverse logit*, p = e^x / (1 + e^x) = 1 / (1 + e^(−x)), the [[Logistic Function]]: from 1.10, e^1.10 / (1 + e^1.10) = 3 / 4 = 0.75. The knob is not evenly spaced in probability terms, though. One unit of log odds moves the probability a lot near 0.5 and hardly at all near the ends. Near p = 0.5 a change of 1 shifts the probability by at most about 0.25, a handy guide called the "divide by 4" rule.

Why use this strange scale? A linear model adds things up, and a sum can be any number, but a probability cannot. On the log odds scale, whatever a + bx produces converts back to a legal probability, so "adding effects" is safe for yes-or-no data. That is why the logit is the default link for binomial models ([[Logit Link]], [[Logistic Regression]]) and why `summary()` of a binomial `glm()` reports coefficients in log odds ([[Zuur et al. 2009 Ch10]]). Two confusions follow. A coefficient of 0.5 does not mean the probability rises by 0.5; it means the log odds rise by 0.5, and the change in probability depends on where you start. And negative log odds are not impossible; they simply mean the event is less likely than not. In R, `qlogis()` is the logit and `plogis()` its inverse.

![[Probability odds log-odds.png|700]]
*What to look at:* the S-curve in the right panel. Equal steps in log odds give big probability changes in the middle and tiny ones at the ends.

```r
p <- c(0.25, 0.5, 0.75, 0.99)
qlogis(p)            # -1.10 0.00 1.10 4.60  (logit)
log(p / (1 - p))     # the same by hand
plogis(1.10)         # 0.75 (inverse logit)
plogis(c(-10, 0, 10))   # never leaves 0 to 1
```
`qlogis()` is the logit and `plogis()` is its inverse.

## Connections
- **Builds on:** [[Odds]], [[Natural Logarithm]]
- **Leads to:** [[Logit Link]], [[Logistic Function]], [[Logistic Regression]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]], molecular note [[Probability, Odds and Log Odds]]

## Flashcards

What are log odds?
??
The natural log of p / (1 − p), also called the logit.
![[Probability odds log-odds.png]]
++++

What probability corresponds to log odds of 0?
??
0.5, because the odds are 1.
++++

Why do logistic models work on the log odds scale?
??
Log odds run from minus to plus infinity, so a straight line can never give an impossible probability.
++++
