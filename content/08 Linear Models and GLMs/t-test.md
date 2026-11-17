---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "t-statistic"
  - "t value"
  - "Student's t-test"
  - "t test"
status: seedling
---

# t-test

**In one line:** a t-test judges whether an estimate differs from a reference value, usually zero, by dividing the difference by the estimate's standard error and comparing the result with the Student t distribution.

> [!info] Before this, it helps to know
> [[Standard Error]] (the denominator) · [[Student t Distribution]] (the yardstick) · [[Null Hypothesis]] (the reference value)

## The everyday picture
Signal over noise. The estimate is the signal. Its standard error is the noise level. A t of 3 says the signal stands three noise-units above zero, which noise alone rarely manages.

## A tiny example
Slope −0.17 with standard error 0.019: t = −0.17/0.019 = −8.9. With 3 residual df, the two-sided p-value is 0.003.

## Start from zero
1. **t = (estimate − hypothesised value) / standard error.**
2. **Usually the hypothesised value is 0:** "no effect".
3. **If the null is true, t follows a t distribution** with the residual degrees of freedom.
4. **The p-value** is the probability of a t at least this far from zero under the null.
5. **Rule of thumb:** |t| above about 2 gives p below 0.05 when df is not small.
6. **Every row of `summary(lm())` is a t-test** of that coefficient against zero.
7. **The classic two-sample t-test is the same thing:** a linear model with one two-level factor.
8. **Limits:** it tests one coefficient given all the others, and it inherits every assumption behind the standard error.

## In R
```r
d <- data.frame(tree = c(0, 10, 20, 30, 40), rich = c(12, 11, 9, 8, 5))
s <- summary(lm(rich ~ tree, d))$coefficients; round(s, 4)
tval <- s[2, 1] / s[2, 2]; c(t = tval, p = 2 * pt(-abs(tval), df = 3))
set.seed(12); g <- rep(c("a", "b"), each = 10); y <- rnorm(20, rep(c(5, 6), each = 10))
c(t.test(y ~ g, var.equal = TRUE)$p.value, summary(lm(y ~ g))$coefficients[2, 4])      # identical
```

## In the course
The `t value` column of the regression labs ([[Course Website]]; [[Zuur et al. 2009 Appendix A]]).

## Common confusions
- **"A t-test compares two groups only."** It tests any single estimate against a value.

## Explain it back
- Compute t for an estimate of 1.2 with SE 0.5.

*Pass test:* you can reproduce a t and p from an estimate and its SE.

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
