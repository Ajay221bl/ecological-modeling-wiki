---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The null hypothesis is the specific claim a test sets up to be challenged by the data, usually that an effect or difference is exactly zero."
aliases:
  - "H0"
  - "H₀"
  - "Null"
status: seedling
---

# Null Hypothesis

A courtroom starts from the presumption of innocence, "the accused did nothing", and asks whether the evidence is strong enough to abandon that position; failing to convict does not prove innocence. The **null hypothesis**, H₀, is the specific claim a test sets up to be challenged by the data, usually that an effect or difference is exactly zero ([[Hypothesis]], [[Parameter]]). An example: "tree cover has no relationship with bird richness: the slope β₁ = 0".

The logic runs: state a precise value for a parameter, assume it is true, work out what data would look like under that assumption, and compare with the data you have. If your data would be very unusual under H₀, reject it; otherwise "fail to reject". In the code below, the last column of the slope's row in `summary(lm())` is exactly that test of H₀: slope = 0 ([[P-value]]). The wording is "fail to reject" rather than "accept" because absence of evidence against H₀ may only mean the study was small.

The course readings criticise relying on it alone. In ecology, the null of exactly zero effect is nearly always false before any data are seen, a "silly null", so rejecting it teaches little; Anderson and Burnham argue for comparing several meaningful hypotheses instead ([[Anderson and Burnham 2002]], [[Johnson and Omland 2004]], [[Multiple Working Hypotheses]]). Zuur uses nulls conventionally ([[Zuur et al. 2009 Appendix A]]). Two confusions. Not rejecting H₀ does not show there is no effect; it shows the data are compatible with no effect, and usually with many non-zero effects too. And H₀ is not the hypothesis you believe; usually it is a straw man. The claim it is tested against is the [[Alternative Hypothesis]], and the full procedure is [[Null Hypothesis Significance Testing]].

```r
set.seed(1); x <- runif(40, 0, 60); y <- 12 - 0.05 * x + rnorm(40, 0, 2)
summary(lm(y ~ x))$coefficients[2, ]         # the last column tests H0: slope = 0
```

## Connections
- **Builds on:** [[Hypothesis]], [[Parameter]]
- **Leads to:** [[Alternative Hypothesis]], [[P-value]], [[Null Hypothesis Significance Testing]], [[Multiple Working Hypotheses]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

What is a null hypothesis?
??
The specific claim a test evaluates, usually that a parameter (effect, difference) equals zero.
++++

Why can't a null hypothesis be "accepted"?
??
A non-significant result may reflect low power, so it does not show the effect is zero.
++++
