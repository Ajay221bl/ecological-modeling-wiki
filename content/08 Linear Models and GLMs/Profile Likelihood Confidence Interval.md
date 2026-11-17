---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Profile confidence interval"
  - "Profile interval"
  - "Likelihood-based interval"
status: seedling
---

# Profile Likelihood Confidence Interval

**In one line:** a profile likelihood confidence interval contains all values of a parameter whose profile log-likelihood lies within a fixed distance of the maximum.

> [!info] Before this, it helps to know
> [[Likelihood Profile]] (the curve it cuts) · [[Likelihood Ratio Test]] (the logic) · [[Chi-square Distribution]] (sets the cut)

## The everyday picture
Marking the part of a hill that lies within two metres of the summit's height. On a lopsided hill, that region stretches further down the gentle side than the steep one. The interval inherits the hill's true shape.

## Start from zero
1. **Compute the profile log-likelihood** for the parameter.
2. **Find its maximum.**
3. **Draw a horizontal line 1.92 units below the maximum.** 1.92 = qchisq(0.95, 1)/2.
4. **The interval is the range of parameter values whose profile is above that line.**
5. **Logic:** these are exactly the values a likelihood ratio test would not reject at the 5% level.
6. **Asymmetric when the likelihood is.** It respects boundaries.
7. **More accurate than Wald** in small samples and for variance parameters.
8. **Slower:** it needs many refits. `confint()` does it for glm and lmer models.

## See it
![[Profile likelihood interval.png|700]]
*What to look at:* the cut 1.92 below the peak reaches further on the shallow side.

## In R
```r
qchisq(0.95, 1) / 2
p <- seq(0.001, 0.4, 0.0005); ll <- dbinom(1, 20, p, log = TRUE)
round(range(p[ll > max(ll) - 1.92]), 3)                             # profile interval for 1 success in 20
m <- glm(cbind(1, 19) ~ 1, family = binomial); round(plogis(suppressMessages(confint(m))), 3)
```

## In the course
[[Hobbs and Hooten 2015 Ch4]]. Compared with Wald and bootstrap intervals in the mixed-model labs ([[Course Website]]).

## Common confusions
- **"It needs a normal approximation."** It doesn't. It relies on the chi-square approximation for the likelihood ratio, which is more robust.

## Explain it back
- Where does the 1.92 come from?

*Pass test:* you can explain how a profile interval is cut from the profile.

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
