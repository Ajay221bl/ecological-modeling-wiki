---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "No-pooling model"
  - "Separate models per group"
  - "lmList()"
  - "Two-stage analysis"
  - "Unpooled estimates"
status: seedling
---

# No Pooling

**In one line:** no pooling estimates each group separately, either with a separate model per group or a fixed effect for every group, so groups share no information.

> [!info] Before this, it helps to know
> [[Hierarchical Data]] · [[Fixed Effect]]

## Start from zero
1. **Separate fits:** `lme4::lmList(y ~ x | group)` fits one lm per group.
2. **Equivalent fixed-effects model:** `lm(y ~ x * group)`.
3. **Each group's estimate uses only its own data,** so small groups get noisy, extreme estimates.
4. **Can't predict for new groups** and says nothing about the population of groups directly.
5. **Two-stage analysis** (fit per group, then analyse the estimates) was the old workaround; mixed models do both stages at once and weight groups properly.
6. **Useful diagnostic:** compare lmList estimates with mixed-model estimates to see shrinkage.

## In R
```r
library(lme4); L <- lmList(Reaction ~ Days | Subject, data = sleepstudy); round(head(coef(L), 3), 1); round(sd(coef(L)$Days), 2)
```

## In the course
`lmList()` on `sleepstudy` in the linear mixed models lab ([[Course Website]]).

## Common confusions
- **"No pooling is the most faithful to the data."** It is faithful to noise in small groups.

## Explain it back
- What does lmList() fit?

*Pass test:* you can compare no-pooling and mixed-model estimates.

## Connections
- **Builds on:** [[Hierarchical Data]], [[Fixed Effect]]
- **Leads to:** [[Complete Pooling]], [[Partial Pooling]], [[Shrinkage]]
- **Part of:** [[MOC - Mixed Models]], molecular note [[Complete, No and Partial Pooling]]

## Flashcards

What does no pooling mean?
??
Estimating each group separately, sharing no information among groups.
++++

What lme4 function fits a separate linear model per group?
??
lmList().
++++
