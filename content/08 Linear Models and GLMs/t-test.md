---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A t-test judges whether an estimate differs from a reference value, usually zero, by dividing the difference by the estimate's standard error and comparing the result with the Student t distribution."
aliases:
  - "t-statistic"
  - "t value"
  - "Student's t-test"
  - "t test"
status: seedling
---

# t-test

Think of signal over noise. The estimate is the signal and its standard error is the noise level; a t of 3 says the signal stands three noise-units above zero, which noise alone rarely manages. A **t-test** judges whether an estimate differs from a reference value, usually zero ("no effect", the [[Null Hypothesis]]), by computing t = (estimate − hypothesised value) / standard error ([[Standard Error]]). If the null is true, t follows a [[Student t Distribution]] with the residual degrees of freedom, and the [[P-value]] is the probability of a t at least this far from zero under the null.

For the bird plots, the slope is −0.17 with standard error 0.019, so t = −0.17 / 0.019 = −8.9; with 3 residual df the two-sided p-value is 0.003. The code below reads those numbers from `summary(lm())` and recomputes them by hand. As a rule of thumb, |t| above about 2 gives p below 0.05 when df is not small; an estimate of 1.2 with SE 0.5 has t = 2.4. Every row of `summary(lm())` is a t-test of that coefficient against zero. The classic two-sample t-test is the same thing, a linear model with one two-level factor, and the last line of the code shows the two give identical p-values.

So a t-test does not only compare two groups; it tests any single estimate against a value. Its limits: it tests one coefficient given all the others, and it inherits every assumption behind the standard error. Testing several coefficients at once needs an [[F-test]]; in GLMs the equivalent with a normal yardstick is the [[Wald Test]]; and turning the same ratio around gives a [[Confidence Interval]] ([[Zuur et al. 2009 Appendix A]], [[Course Website]]).

```r
d <- data.frame(tree = c(0, 10, 20, 30, 40), rich = c(12, 11, 9, 8, 5))
s <- summary(lm(rich ~ tree, d))$coefficients; round(s, 4)
tval <- s[2, 1] / s[2, 2]; c(t = tval, p = 2 * pt(-abs(tval), df = 3))
set.seed(12); g <- rep(c("a", "b"), each = 10); y <- rnorm(20, rep(c(5, 6), each = 10))
c(t.test(y ~ g, var.equal = TRUE)$p.value, summary(lm(y ~ g))$coefficients[2, 4])      # identical
```

## Connections
- **Builds on:** [[Standard Error]], [[Student t Distribution]]
- **Leads to:** [[P-value]], [[Wald Test]], [[F-test]], [[Confidence Interval]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

How is a t-statistic computed?
??
(estimate − hypothesised value) / standard error.
++++

What does each row of summary(lm()) test?
??
Whether that coefficient differs from zero, given the other terms in the model.
++++
