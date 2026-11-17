---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A profile likelihood confidence interval contains all values of a parameter whose profile log-likelihood lies within a fixed distance of the maximum."
aliases:
  - "Profile confidence interval"
  - "Profile interval"
  - "Likelihood-based interval"
status: seedling
---

# Profile Likelihood Confidence Interval

Mark the part of a hill that lies within two metres of the summit's height. On a lopsided hill that region stretches further down the gentle side than the steep one, so it inherits the hill's true shape. A **profile likelihood confidence interval** contains all values of a parameter whose profile log-likelihood lies within a fixed distance of the maximum ([[Likelihood Profile]]). Compute the profile, find its maximum, draw a horizontal line 1.92 units below it, and take the range of parameter values whose profile is above the line. The figure shows the cut reaching further on the shallow side.

The number 1.92 is qchisq(0.95, 1)/2. The values inside are exactly those a [[Likelihood Ratio Test]] would not reject at the 5% level, since rejection happens when twice the log-likelihood drop exceeds 3.84 ([[Chi-square Distribution]]). In the code below, for 1 success in 20 trials, the interval found by cutting the log-likelihood curve 1.92 below its peak runs from about 0.003 to 0.20, and `confint()` on the matching glm gives the same.

It is asymmetric when the likelihood is, and it respects boundaries, so it is more accurate than the [[Wald Confidence Interval]] in small samples and for variance parameters ([[Confidence Interval]]). It is slower, because it needs many refits; `confint()` does it for glm and lmer models ([[Hobbs and Hooten 2015 Ch4]], [[Course Website]], [[Percentile Bootstrap Interval]]). It does not need a normal approximation; it relies on the chi-square approximation for the likelihood ratio, which is more robust.

![[Profile likelihood interval.png|700]]
*What to look at:* the cut 1.92 below the peak reaches further on the shallow side.

```r
qchisq(0.95, 1) / 2
p <- seq(0.001, 0.4, 0.0005); ll <- dbinom(1, 20, p, log = TRUE)
round(range(p[ll > max(ll) - 1.92]), 3)                             # profile interval for 1 success in 20
m <- glm(cbind(1, 19) ~ 1, family = binomial); round(plogis(suppressMessages(confint(m))), 3)
```

## Connections
- **Builds on:** [[Likelihood Profile]], [[Likelihood Ratio Test]]
- **Leads to:** [[Wald Confidence Interval]], [[Confidence Interval]], [[Percentile Bootstrap Interval]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]], molecular note [[Wald, Profile and Bootstrap Intervals]]

## Flashcards

How is a 95% profile likelihood interval defined?
??
All parameter values whose profile log-likelihood is within 1.92 of the maximum.
![[Profile likelihood interval.png]]
++++

Why are profile intervals preferred to Wald intervals in small samples?
??
They follow the actual shape of the likelihood, so they can be asymmetric and respect parameter boundaries.
++++
