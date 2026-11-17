---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "P-values are widely criticised because they are easily misread, depend heavily on sample size, say nothing about effect size, and encourage yes/no thinking about effects that come in degrees."
aliases:
  - "Problems with p-values"
  - "p-value criticism"
  - "Limits of significance testing"
status: seedling
---

# Criticisms of p-values

A smoke alarm that only says "smoke" or "no smoke" can't tell burnt toast from a house fire, and a very sensitive one goes off for both. **p-values** are criticised for similar reasons ([[P-value|p-value]], [[Null Hypothesis Significance Testing]]). A p-value is not P(null is true) but P(data this extreme | null true), and it is easily misread. The null is often known to be false already, since no effect of tree cover at all is implausible, so with enough data p becomes tiny for any effect, however small; and small samples hide real effects, so a large p doesn't show there is no effect. In the code below the same tiny slope of 0.02 gives p = 0.80 with 20 observations, 0.97 with 200 and 0.0004 with 20,000.

The 0.05 cut-off is arbitrary, yet results either side of it are treated as different in kind ([[Statistical Significance]]). Many tests inflate false positives unless corrected. A p-value ignores [[Effect Size]] and its biological meaning, and it tests one hypothesis against "nothing" rather than comparing plausible alternatives ([[Model Selection]]).

The fixes are to report effect sizes with intervals, compare competing models, consider prior plausibility and treat p as one continuous piece of evidence; the 2016 American Statistical Association statement makes these points, and so do [[Johnson and Omland 2004]], [[Anderson and Burnham 2002]] and [[Guthery and Bingham 2007]]. p = 0.06 does not mean no effect: it is weak evidence against the null, about as weak as p = 0.04.

```r
set.seed(2); sapply(c(20, 200, 20000), function(n) { x <- rnorm(n); y <- 0.02 * x + rnorm(n); round(summary(lm(y ~ x))$coefficients[2, 4], 4) })      # the same tiny effect, three p-values
```

## Connections
- **Builds on:** [[P-value|p-value]], [[Null Hypothesis Significance Testing]]
- **Leads to:** [[Effect Size]], [[Statistical Significance]], [[Model Selection]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]], molecular note [[What a p-value does and does not tell you]], [[Statistical vs Biological Significance]]

## Flashcards

Why can a biologically trivial effect have a very small p-value?
??
With a large sample, even tiny departures from the null become statistically detectable.
++++

Does a large p-value show that there is no effect?
??
No. It may reflect a small sample or high variability.
++++
