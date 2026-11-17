---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Problems with p-values"
  - "p-value criticism"
  - "Limits of significance testing"
status: seedling
---

# Criticisms of p-values

**In one line:** p-values are widely criticised because they are easily misread, depend heavily on sample size, say nothing about effect size, and encourage yes/no thinking about effects that come in degrees.

> [!info] Before this, it helps to know
> [[P-value|p-value]] (what is criticised) · [[Null Hypothesis Significance Testing]] (the framework) · [[Effect Size]] (what is often missing)

## The everyday picture
A smoke alarm that only says "smoke" or "no smoke". It can't tell burnt toast from a house fire, and a very sensitive one goes off for both. Useful, but no substitute for looking at what is burning.

## Start from zero
1. **It isn't P(null is true).** It is P(data this extreme | null true).
2. **The null is often known to be false already.** No effect of tree cover at all is implausible. With enough data p becomes tiny for any effect, however small.
3. **Small samples hide real effects:** a large p doesn't show there is no effect.
4. **0.05 is arbitrary,** yet results either side of it are treated as different in kind.
5. **Many tests inflate false positives** unless corrected.
6. **It ignores effect size and its biological meaning.**
7. **It tests one hypothesis against "nothing",** rather than comparing plausible alternatives.
8. **The fixes:** report effect sizes with intervals, compare competing models, consider prior plausibility, and treat p as one continuous piece of evidence. The 2016 American Statistical Association statement makes these points.

## In R
```r
set.seed(2); sapply(c(20, 200, 20000), function(n) { x <- rnorm(n); y <- 0.02 * x + rnorm(n); round(summary(lm(y ~ x))$coefficients[2, 4], 4) })      # the same tiny effect, three p-values
```

## In the course
[[Johnson and Omland 2004]], [[Anderson and Burnham 2002]], [[Guthery and Bingham 2007]].

## Common confusions
- **"p = 0.06 means no effect."** It means weak evidence against the null, about as weak as p = 0.04.

## Explain it back
- List four criticisms.

*Pass test:* you can explain why a tiny effect can have a tiny p-value.

## Connections
- **Builds on:** [[P-value|p-value]], [[Null Hypothesis Significance Testing]]
- **Leads to:** [[Effect Size]], [[Statistical Significance]], [[Model Selection]]
- **Part of:** [[MOC - Model Selection]], molecular note [[What a p-value does and does not tell you]], [[Statistical vs Biological Significance]]

## Flashcards

Why can a biologically trivial effect have a very small p-value?
??
With a large sample, even tiny departures from the null become statistically detectable.
++++

Does a large p-value show that there is no effect?
??
No. It may reflect a small sample or high variability.
++++
