---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "Complete pooling fits one model to all observations as if there were no groups, assuming every group is identical."
aliases:
  - "Complete pooling model"
  - "Pooled model"
  - "Ignoring groups"
status: seedling
---

# Complete Pooling

**Complete pooling** fits one model to all observations as if there were no groups, assuming every group is identical ([[Hierarchical Data]], [[lm()]]). It uses one intercept and slope for everyone, `lm(y ~ x)`, and so assumes the between-group variance is zero. It is the right model only if groups truly don't differ.

Its problems are that it ignores real group differences, treats correlated observations as independent so standard errors are too small, and can give misleading slopes if groups differ systematically. In the code below a plain `lm()` on `sleepstudy` gives a slope of 10.47 with SE 1.24; the mixed model's SE for the same slope is 1.55.

The lab follows a path from complete pooling to [[No Pooling]] to [[Partial Pooling]] ([[Course Website]]). Complete pooling is not the conservative choice; it is often anti-conservative because it overcounts information.

```r
library(lme4); round(coef(summary(lm(Reaction ~ Days, data = sleepstudy)))["Days", 1:2], 2)
```

## Connections
- **Builds on:** [[Hierarchical Data]], [[lm()]]
- **Leads to:** [[No Pooling]], [[Partial Pooling]], [[Pseudoreplication]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]], molecular note [[Complete, No and Partial Pooling]]

## Flashcards

What does complete pooling assume?
??
That all groups are identical, so one model fits everyone.
++++
