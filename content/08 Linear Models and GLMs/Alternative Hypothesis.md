---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "H1"
  - "Hₐ"
  - "Research hypothesis"
  - "Two-sided alternative"
  - "One-sided alternative"
status: seedling
---

# Alternative Hypothesis

**In one line:** the alternative hypothesis is the claim that holds if the null hypothesis is false, usually that the effect is not zero.

> [!info] Before this, it helps to know
> [[Null Hypothesis]] (what it opposes)

## The everyday picture
The prosecution's case. It is everything the null is not. Often it is vague: "the accused did something", without saying exactly what.

## Start from zero
1. **Two-sided:** the parameter differs from the null value in either direction. β ≠ 0. The default.
2. **One-sided:** it differs in a stated direction. β < 0. Only legitimate if the direction was fixed before seeing data.
3. **It is usually composite:** it covers a whole range of values, without naming one.
4. **The test never evaluates it directly.** A small p-value counts against H₀. It doesn't measure support for any particular alternative.
5. **Why that is a weakness:** rejecting "no effect" doesn't tell you the effect is big enough to matter. That is why estimation and model comparison are preferred.
6. **In power calculations** a specific alternative must be named: "a slope of −0.1".

## In R
```r
set.seed(2); y <- rnorm(15, 0.5, 1)
c(two_sided = t.test(y)$p.value, one_sided = t.test(y, alternative = "greater")$p.value)     # the one-sided p is half
```

## In the course
[[Anderson and Burnham 2002]] contrast a single alternative with a set of competing models.

## Common confusions
- **"Rejecting H₀ proves my hypothesis."** It supports "not zero", which many explanations share.

## Explain it back
- When is a one-sided alternative justified?

*Pass test:* you can state the alternative behind a two-sided test.

## Connections
- **Builds on:** [[Null Hypothesis]]
- **Leads to:** [[Statistical Power]], [[P-value]], [[Multiple Working Hypotheses]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

What is the alternative hypothesis in a two-sided test of a slope?
??
That the slope is not equal to zero.
++++
