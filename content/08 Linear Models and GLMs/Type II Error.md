---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "False negative"
  - "Type 2 error"
  - "Missed effect"
  - "Beta error"
status: seedling
---

# Type II Error

**In one line:** a Type II error is failing to reject a null hypothesis that is actually false: missing an effect that is really there.

> [!info] Before this, it helps to know
> [[Null Hypothesis]] (which is false here) · [[Statistical Power]] (one minus its rate)

## The everyday picture
A smoke alarm that stays silent during a real fire. Or a court acquitting a guilty person for lack of evidence.

## Start from zero
1. **Reality:** there is an effect. **Decision:** "not significant".
2. **Its probability is called β.**
3. **β is large when** the effect is small, the data are noisy or the sample is small.
4. **It is traded against Type I error.** Demanding stronger evidence (smaller α) raises β.
5. **Why it matters in conservation:** a missed decline is often costlier than a false alarm. "No significant trend" from a weak study can excuse inaction.
6. **Avoid reading "no significant effect" as "no effect".** Look at the interval: does it include effects big enough to matter?

## In R
```r
set.seed(8); p <- replicate(5000, { x <- rnorm(15); y <- 0.4 * x + rnorm(15); summary(lm(y ~ x))$coefficients[2, 4] })
mean(p >= 0.05)         # a real slope of 0.4 is missed in about 70% of studies with n = 15
```

## In the course
[[Harrison et al. 2018]]. [[Johnson and Omland 2004]].

## Common confusions
- **"β here is a regression coefficient."** Same Greek letter, unrelated meaning.

## Explain it back
- What three things make a Type II error more likely?

*Pass test:* you can define it and explain its cost in applied ecology.

## Connections
- **Builds on:** [[Null Hypothesis]]
- **Leads to:** [[Type I Error]], [[Statistical Power]], [[Sample Size]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]], molecular note [[Type I and Type II Errors]]

## Flashcards

What is a Type II error?
??
Failing to reject a false null hypothesis (a false negative).
++++

What makes Type II errors more likely?
??
Small effects, high variability and small sample sizes.
++++
