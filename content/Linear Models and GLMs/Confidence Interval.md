---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "CI"
  - "95% confidence interval"
  - "confint()"
  - "Interval estimate"
status: seedling
---

# Confidence Interval

**In one line:** a confidence interval is a range of parameter values computed from the data by a procedure that captures the true value in a stated percentage of repeated studies.

> [!info] Before this, it helps to know
> [[Sampling Distribution]] (the basis) · [[Standard Error]] (sets the width) · [[Quantile Function]] (gives the multiplier)

## The everyday picture
Throwing a hoop at a fixed peg. The peg, the true value, doesn't move. Your hoop lands in a different place on every throw. A "95% thrower" is someone whose hoop ends up around the peg in 95 throws out of 100. On any one throw the peg is either inside the hoop or it isn't.

## A tiny example
Slope −0.17, standard error 0.019, 3 residual df.
- Multiplier qt(0.975, 3) = 3.18.
- Interval: −0.17 ± 3.18 × 0.019 = (−0.23, −0.11).

## Start from zero
1. **Start with an estimate and its standard error.**
2. **Estimate ± multiplier × SE.**
3. **Multiplier:** about 2 (1.96 for large samples, larger from the t distribution for small ones).
4. **Meaning of "95%":** if the study were repeated many times, 95% of the intervals so built would contain the true value.
5. **It describes the procedure,** not this particular interval.
6. **What you can say in practice:** values inside the interval are reasonably compatible with the data. Values far outside are not.
7. **Width shows precision.** Narrow intervals come from more data, less noise, or wider spread in x.
8. **Link to tests:** a 95% interval that excludes zero corresponds to p < 0.05.
9. **Why report it instead of a p-value:** it shows effect size and uncertainty together.

## See it
![[Confidence interval coverage.png|700]]
*What to look at:* 50 intervals from 50 repeated studies. Most cover the true value. A few, in orange, miss.

## In R
```r
d <- data.frame(tree = c(0, 10, 20, 30, 40), rich = c(12, 11, 9, 8, 5)); m <- lm(rich ~ tree, d)
confint(m); coef(m)[2] + c(-1, 1) * qt(0.975, 3) * summary(m)$coefficients[2, 2]
set.seed(11); covered <- replicate(5000, { y <- rnorm(20, 10, 3); ci <- t.test(y)$conf.int; ci[1] < 10 & ci[2] > 10 }); mean(covered)    # about 0.95
```

## In the course
Used from the regression lab onward ([[Course Website]]). [[Powell and Gale 2015 Ch4]], [[Zuur et al. 2009 Appendix A]].

## Common confusions
- **"There is a 95% probability the true value is in this interval."** That is the Bayesian credible interval's meaning. The confidence interval's 95% refers to the long-run success rate of the method.
- **"95% of the data lie in the interval."** It is about a parameter, not about observations.

## Explain it back
- What exactly does the 95% refer to?
- How does the interval relate to a test of zero?

*Pass test:* you can compute a confidence interval and state its correct interpretation.

## Connections
- **Builds on:** [[Sampling Distribution]], [[Standard Error]]
- **Leads to:** [[Wald Confidence Interval]], [[Profile Likelihood Confidence Interval]], [[Credible Interval]], [[Prediction Interval]]
- **Part of:** [[MOC - Likelihood and Estimation]], molecular note [[Confidence vs Credible Interval]]

## Flashcards

What does "95% confidence" mean?
??
95% of intervals constructed this way in repeated studies would contain the true parameter value.
![[Confidence interval coverage.png]]
++++

What is the usual formula for a confidence interval?
??
Estimate ± multiplier × standard error, with a multiplier near 2.
++++

What does it mean if a 95% CI for a slope excludes zero?
??
The slope differs from zero at the 5% significance level.
++++
