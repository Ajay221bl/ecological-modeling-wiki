---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Repeated measurements"
  - "Longitudinal data"
  - "Within-subject design"
  - "Repeated-measures design"
status: seedling
---

# Repeated Measures

**In one line:** repeated measures are several measurements of the same unit (an animal, a plant, a plot) taken over time or under different conditions, which are correlated because they share the unit.

> [!info] Before this, it helps to know
> [[Hierarchical Data]] · [[Pseudoreplication]] (the risk)

## Start from zero
1. **Examples:** the same bird weighed every week, reaction time of the same person each day (sleepstudy), a plot surveyed each year.
2. **Two sources of correlation:** the shared unit (handled by a random intercept) and closeness in time (AR(1) structure).
3. **Classic repeated-measures ANOVA** assumes sphericity and needs balanced data. Mixed models relax both.
4. **Advantages:** each unit acts as its own control, so within-unit comparisons are precise.
5. **Missing visits are fine** in a mixed model, unlike in repeated-measures ANOVA.

## In R
```r
library(lme4); table(table(sleepstudy$Subject))       # 18 subjects each measured 10 times
```

## In the course
`sleepstudy` in the linear mixed models lab ([[Course Website]]). [[Harrison et al. 2018]].

## Common confusions
- **"Repeated measures need repeated-measures ANOVA."** Mixed models are more flexible.

## Explain it back
- Name two sources of correlation in repeated measures.

*Pass test:* you can model repeated measures with a mixed model.

## Connections
- **Builds on:** [[Hierarchical Data]], [[Pseudoreplication]]
- **Leads to:** [[Random Intercept]], [[AR(1) Error Structure]], [[Temporal Autocorrelation]]
- **Part of:** [[MOC - Mixed Models]]

## Flashcards

What are repeated measures?
??
Several measurements of the same unit, which are correlated because they share the unit.
++++
