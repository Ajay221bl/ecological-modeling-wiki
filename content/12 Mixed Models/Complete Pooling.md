---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Complete pooling model"
  - "Pooled model"
  - "Ignoring groups"
status: seedling
---

# Complete Pooling

**In one line:** complete pooling fits one model to all observations as if there were no groups, assuming every group is identical.

> [!info] Before this, it helps to know
> [[Hierarchical Data]] · [[lm()]]

## Start from zero
1. **One intercept and slope for everyone:** `lm(y ~ x)`.
2. **Assumes between-group variance is zero.**
3. **Problems:** ignores real group differences, treats correlated observations as independent (SEs too small), and can give misleading slopes if groups differ systematically.
4. **It is the right model only if groups truly don't differ.**
5. **In the lab:** the first `lm()` on `sleepstudy` before any grouping.

## In R
```r
library(lme4); round(coef(summary(lm(Reaction ~ Days, data = sleepstudy)))["Days", 1:2], 2)
```

## In the course
Linear mixed models lab path: complete pooling, then no pooling, then partial pooling ([[Course Website]]).

## Common confusions
- **"Complete pooling is the conservative choice."** It is often anti-conservative because it overcounts information.

## Explain it back
- What does complete pooling assume about groups?

*Pass test:* you can explain its failure mode.

## Connections
- **Builds on:** [[Hierarchical Data]], [[lm()]]
- **Leads to:** [[No Pooling]], [[Partial Pooling]], [[Pseudoreplication]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]], molecular note [[Complete, No and Partial Pooling]]

## Flashcards

What does complete pooling assume?
??
That all groups are identical, so one model fits everyone.
++++
