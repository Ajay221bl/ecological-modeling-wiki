---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "A grouping factor is the categorical variable that defines which observations belong together in a mixed model, such as Subject, Site or Year, and its categories are the levels."
aliases:
  - "Grouping variable"
  - "Random-effect grouping factor"
  - "Cluster variable"
  - "Levels of a random effect"
  - "Grouping Factor and Levels"
status: seedling
---

# Grouping Factor

A **grouping factor** is the categorical variable that defines which observations belong together in a mixed model, such as Subject, Site or Year; its categories are the levels, which are the groups ([[Categorical Variable]], [[Hierarchical Data]]). It appears to the right of the bar, as in `(1 | Site)`. In the code below `sleepstudy$Subject` is a factor with 18 levels.

It must be a factor or character, not a number, so a site coded 1, 2, 3 as numeric needs `factor(Site)`. Unique labels matter for nesting: plot "A" in site 1 and plot "A" in site 2 must get different labels, or use `(1 | site/plot)` ([[Nested Random Effects]]). The number of levels limits what can be estimated, and a variance from 3 levels is very uncertain ([[How Many Levels for a Random Effect]]).

Choose groupings from the design: the units that were sampled repeatedly or that share conditions. It is used in the linear and generalized linear mixed models labs ([[Course Website]]). Not every factor should be a grouping factor: one whose levels you want to compare directly, such as treatments, is usually a [[Fixed Effect]].

```r
library(lme4); str(sleepstudy$Subject); nlevels(sleepstudy$Subject)
```

## Connections
- **Builds on:** [[Categorical Variable]], [[Hierarchical Data]]
- **Leads to:** [[Random Effect]], [[Nested Random Effects]], [[Crossed Random Effects]], [[How Many Levels for a Random Effect]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What is a grouping factor?
??
The categorical variable defining which observations share a random effect; its categories are the levels.
++++
