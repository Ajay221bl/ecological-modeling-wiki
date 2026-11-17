---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Grouping variable"
  - "Random-effect grouping factor"
  - "Cluster variable"
  - "Levels of a random effect"
  - "Grouping Factor and Levels"
status: seedling
---

# Grouping Factor

**In one line:** a grouping factor is the categorical variable that defines which observations belong together in a mixed model, such as Subject, Site or Year, and its categories are the levels.

> [!info] Before this, it helps to know
> [[Categorical Variable]] · [[Hierarchical Data]]

## Start from zero
1. **It appears to the right of the bar:** `(1 | Site)`.
2. **Its levels are the groups.** 18 subjects means 18 levels.
3. **It must be a factor or character,** not a number. Site coded 1, 2, 3 as numeric needs `factor(Site)`.
4. **Unique labels matter for nesting:** plot "A" in site 1 and plot "A" in site 2 must get different labels, or use `(1 | site/plot)`.
5. **The number of levels limits what can be estimated:** a variance from 3 levels is very uncertain.
6. **Choose groupings from the design:** the units that were sampled repeatedly or that share conditions.

## In R
```r
library(lme4); str(sleepstudy$Subject); nlevels(sleepstudy$Subject)
```

## In the course
Linear and generalized linear mixed models labs ([[Course Website]]).

## Common confusions
- **"Any factor can be a grouping factor."** A factor whose levels you want to compare directly (treatments) is usually fixed.

## Explain it back
- What must you check about plot labels before using (1 | plot)?

*Pass test:* you can set up a grouping factor correctly.

## Connections
- **Builds on:** [[Categorical Variable]], [[Hierarchical Data]]
- **Leads to:** [[Random Effect]], [[Nested Random Effects]], [[Crossed Random Effects]], [[How Many Levels for a Random Effect]]
- **Part of:** [[MOC - Mixed Models]]

## Flashcards

What is a grouping factor?
??
The categorical variable defining which observations share a random effect; its categories are the levels.
++++
