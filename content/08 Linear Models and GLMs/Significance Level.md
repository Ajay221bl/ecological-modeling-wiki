---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Alpha"
  - "α"
  - "Alpha level"
  - "0.05 threshold"
status: seedling
---

# Significance Level

**In one line:** the significance level is the cut-off, chosen before the analysis, below which a p-value leads you to reject the null hypothesis.

> [!info] Before this, it helps to know
> [[P-value]] (what is compared with it) · [[Type I Error]] (whose rate it sets)

## The everyday picture
The sensitivity setting on a smoke alarm. Set it very sensitive and it catches every fire but goes off for burnt toast. Set it dull and toast is ignored, along with some real fires. Alpha is how often you'll tolerate a toast alarm.

## Start from zero
1. **Choose α before looking at results.** By convention 0.05.
2. **Reject H₀ when p < α.**
3. **α is the false-alarm rate:** if H₀ is true, you'll wrongly reject it α of the time.
4. **Lower α:** fewer false alarms, more missed effects.
5. **0.05 is a habit, not a law.** It traces to a suggestion by R. A. Fisher. p = 0.049 and p = 0.051 are the same evidence.
6. **A 100(1 − α)% confidence interval matches a test at level α.**

## In R
```r
set.seed(5); p <- replicate(10000, t.test(rnorm(15))$p.value)       # the null is true every time
c(alpha_05 = mean(p < 0.05), alpha_01 = mean(p < 0.01))
```

## Common confusions
- **"α is the probability my significant result is wrong."** It is the false-positive rate when the null is true, not the share of significant results that are false.

## Explain it back
- What does choosing α = 0.01 trade off?

*Pass test:* you can explain α as a long-run false-alarm rate.

## Connections
- **Builds on:** [[P-value]]
- **Leads to:** [[Type I Error]], [[Statistical Significance]], [[Statistical Power]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

What is the significance level α?
??
The pre-chosen threshold for rejecting the null, equal to the probability of a false positive when the null is true.
++++
