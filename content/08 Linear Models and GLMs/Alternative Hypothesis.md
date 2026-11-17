---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The alternative hypothesis is the claim that holds if the null hypothesis is false, usually that the effect is not zero."
aliases:
  - "H1"
  - "Hₐ"
  - "Research hypothesis"
  - "Two-sided alternative"
  - "One-sided alternative"
status: seedling
---

# Alternative Hypothesis

The prosecution's case is everything the defence is not, and it is often vague: "the accused did something", without saying exactly what. The **alternative hypothesis**, H₁ or Hₐ, is the claim that holds if the [[Null Hypothesis]] is false, usually that the effect is not zero. A *two-sided* alternative says the parameter differs from the null value in either direction, β ≠ 0, and is the default. A *one-sided* alternative names a direction, β < 0, and is legitimate only if the direction was fixed before seeing the data. In the code below, the one-sided p-value is half the two-sided one, which is why choosing the side after looking is cheating.

The alternative is usually composite: it covers a whole range of values without naming one. The test never evaluates it directly. A small p-value counts against H₀; it does not measure support for any particular alternative ([[P-value]]). That is a weakness, because rejecting "no effect" does not tell you the effect is big enough to matter, which is why estimation and model comparison are preferred ([[Anderson and Burnham 2002]], [[Multiple Working Hypotheses]]).

In a power calculation, though, a specific alternative must be named, such as "a slope of −0.1", because power depends on how big the real effect is ([[Statistical Power]]). The common mistake is to think rejecting H₀ proves your hypothesis. It supports only "not zero", which many explanations share.

```r
set.seed(2); y <- rnorm(15, 0.5, 1)
c(two_sided = t.test(y)$p.value, one_sided = t.test(y, alternative = "greater")$p.value)     # the one-sided p is half
```

## Connections
- **Builds on:** [[Null Hypothesis]]
- **Leads to:** [[Statistical Power]], [[P-value]], [[Multiple Working Hypotheses]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

What is the alternative hypothesis in a two-sided test of a slope?
??
That the slope is not equal to zero.
++++
