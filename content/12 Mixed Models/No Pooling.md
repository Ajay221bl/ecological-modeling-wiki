---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "No pooling estimates each group separately, either with a separate model per group or a fixed effect for every group, so groups share no information."
aliases:
  - "No-pooling model"
  - "Separate models per group"
  - "lmList()"
  - "Two-stage analysis"
  - "Unpooled estimates"
status: seedling
---

# No Pooling

**No pooling** estimates each group separately, with a separate model per group or a fixed effect for every group, so groups share no information ([[Hierarchical Data]], [[Fixed Effect]]). `lme4::lmList(y ~ x | group)` fits one lm per group, and the equivalent fixed-effects model is `lm(y ~ x * group)`. Each group's estimate uses only its own data, so small groups get noisy, extreme estimates.

It can't predict for new groups and says nothing directly about the [[Group-level Model|population of groups]]. The old workaround, a two-stage analysis that fits each group and then analyses the estimates, is done in one step by a [[Mixed Effects Model|mixed model]], which also weights groups properly. In the code below `lmList()` gives the first three `sleepstudy` subjects slopes of 21.8, 2.3 and 6.1 ms per day, and the 18 slopes vary with an SD of 6.6.

Comparing `lmList` estimates with mixed-model estimates is a useful way to see [[Shrinkage]] ([[Partial Pooling]], [[Course Website]]). No pooling is not the most faithful to the data; it is faithful to the noise in small groups. Its opposite extreme is [[Complete Pooling]].

```r
library(lme4); L <- lmList(Reaction ~ Days | Subject, data = sleepstudy); round(head(coef(L), 3), 1); round(sd(coef(L)$Days), 2)
```

## Connections
- **Builds on:** [[Hierarchical Data]], [[Fixed Effect]], [[Group-level Model]], [[Mixed Effects Model]]
- **Leads to:** [[Complete Pooling]], [[Partial Pooling]], [[Shrinkage]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]], molecular note [[Complete, No and Partial Pooling]]

## Flashcards

What does no pooling mean?
??
Estimating each group separately, sharing no information among groups.
++++

What lme4 function fits a separate linear model per group?
??
lmList().
++++
