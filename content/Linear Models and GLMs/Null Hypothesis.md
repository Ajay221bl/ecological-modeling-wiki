---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "H0"
  - "H₀"
  - "Null"
status: seedling
---

# Null Hypothesis

**In one line:** the null hypothesis is the specific claim a test sets up to be challenged by the data, usually that an effect or difference is exactly zero.

> [!info] Before this, it helps to know
> [[Hypothesis]] (the general idea) · [[Parameter]] (what the claim is about)

## The everyday picture
The presumption of innocence in a courtroom. The court starts from "the accused did nothing" and asks whether the evidence is strong enough to abandon that position. Failing to convict doesn't prove innocence.

## A tiny example
"Tree cover has no relationship with bird richness: the slope β₁ = 0."

## Start from zero
1. **State a precise value for a parameter.** Typically zero: no slope, no difference.
2. **Assume it is true.**
3. **Work out what data would look like** under that assumption.
4. **Compare with the data you have.**
5. **If your data would be very unusual under H₀, reject it.** Otherwise, "fail to reject".
6. **Why "fail to reject" and not "accept":** absence of evidence against H₀ may only mean the study was small.
7. **Criticism from this course's readings:** in ecology the null of exactly zero effect is nearly always false before any data are seen (a "silly null"), so rejecting it teaches little. Anderson and Burnham argue for comparing several meaningful hypotheses instead.

## In R
```r
set.seed(1); x <- runif(40, 0, 60); y <- 12 - 0.05 * x + rnorm(40, 0, 2)
summary(lm(y ~ x))$coefficients[2, ]         # the last column tests H0: slope = 0
```

## In the course
[[Anderson and Burnham 2002]] and [[Johnson and Omland 2004]] criticise sole reliance on null hypotheses. [[Zuur et al. 2009 Appendix A]] uses them conventionally.

## Common confusions
- **"Not rejecting H₀ shows there is no effect."** It shows the data are compatible with no effect, and usually with many non-zero effects too.
- **"H₀ is the hypothesis I believe."** Usually it is a straw man.

## Explain it back
- Why do we say "fail to reject" instead of "accept"?

*Pass test:* you can state the null hypothesis behind a coefficient's p-value.

## Connections
- **Builds on:** [[Hypothesis]], [[Parameter]]
- **Leads to:** [[Alternative Hypothesis]], [[P-value]], [[Null Hypothesis Significance Testing]], [[Multiple Working Hypotheses]]
- **Part of:** [[MOC - Likelihood and Estimation]]

## Flashcards

What is a null hypothesis?
??
The specific claim a test evaluates, usually that a parameter (effect, difference) equals zero.
++++

Why can't a null hypothesis be "accepted"?
??
A non-significant result may reflect low power, so it does not show the effect is zero.
++++
