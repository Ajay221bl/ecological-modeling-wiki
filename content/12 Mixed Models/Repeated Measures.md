---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "Repeated measures are several measurements of the same unit (an animal, a plant, a plot) taken over time or under different conditions, which are correlated because they share the unit."
aliases:
  - "Repeated measurements"
  - "Longitudinal data"
  - "Within-subject design"
  - "Repeated-measures design"
status: seedling
---

# Repeated Measures

**Repeated measures** are several measurements of the same unit, such as an animal, a plant or a plot, taken over time or under different conditions; they are correlated because they share the unit ([[Hierarchical Data]], with [[Pseudoreplication]] as the risk). Examples are the same bird weighed every week, the same person's reaction time each day in `sleepstudy`, and a plot surveyed each year. There are two sources of correlation: the shared unit, handled by a [[Random Intercept]], and closeness in time, handled by an AR(1) structure ([[Correlation Structure]]).

The classic repeated-measures [[ANOVA]] assumes sphericity and needs [[Balanced Data|balanced data]]; mixed models relax both and cope with missed visits. The design's strength is that each unit acts as its own control, so within-unit comparisons are precise. In the code below `sleepstudy` has 18 subjects, each measured 10 times.

`sleepstudy` is used in the linear mixed models lab ([[Course Website]], [[Harrison et al. 2018]]). Repeated measures don't need repeated-measures ANOVA; a [[Mixed Effects Model]] is more flexible.

```r
library(lme4); table(table(sleepstudy$Subject))       # 18 subjects each measured 10 times
```

## Connections
- **Builds on:** [[Hierarchical Data]], [[Pseudoreplication]], [[ANOVA]], [[Balanced Data]]
- **Leads to:** [[Random Intercept]], [[AR(1) Error Structure]], [[Temporal Autocorrelation]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What are repeated measures?
??
Several measurements of the same unit, which are correlated because they share the unit.
++++
