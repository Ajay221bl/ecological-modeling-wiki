---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Multilevel data"
  - "Nested data"
  - "Clustered data"
  - "Grouped data"
  - "Hierarchical (multilevel) data"
status: seedling
---

# Hierarchical Data

**In one line:** hierarchical data come in groups, such as measurements within individuals, individuals within sites, or sites within regions, so observations in the same group tend to resemble each other.

> [!info] Before this, it helps to know
> [[Independence of Observations|Independence]] (what grouping breaks) · [[Sampling Unit]] (the levels)

## The everyday picture
Russian dolls. Leaf measurements sit inside trees, trees inside plots, plots inside forests. Each layer adds its own variation.

## Start from zero
1. **Each level is a grouping:** observation, then individual, then site, then region.
2. **Members of a group share conditions** (soil, weather, genes, observer), so they are correlated.
3. **Ignoring the grouping** treats correlated observations as independent: pseudoreplication.
4. **Averaging to the group level** throws away within-group information.
5. **Mixed models keep every observation** and model the grouping with random effects.
6. **Common ecological examples:** repeated captures of the same bird, quadrats within transects, years within sites, chicks within nests (Shipley et al. 2022), counties within states (Christensen et al. 2020).

## In R
```r
library(lme4); data(sleepstudy); c(observations = nrow(sleepstudy), subjects = nlevels(sleepstudy$Subject), per_subject = nrow(sleepstudy) / nlevels(sleepstudy$Subject))
```

## In the course
`sleepstudy` (reaction times of 18 people over 10 days) and the Niobrara mice data in the linear mixed models lab ([[Course Website]]). [[Harrison et al. 2018]]. [[Zuur et al. 2009 Ch5]].

## Common confusions
- **"More rows means more independent data."** Rows within a group share information.

## Explain it back
- Give an example of three-level hierarchical data from your field.

*Pass test:* you can identify the levels in a dataset.

## Connections
- **Builds on:** [[Independence of Observations|Independence]], [[Sampling Unit]]
- **Leads to:** [[Grouping Factor]], [[Mixed Effects Model]], [[Pseudoreplication]], [[Nested Random Effects]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]], molecular note [[Why use a random effect instead of a fixed effect]]

## Flashcards

What are hierarchical data?
??
Data in groups (possibly nested), where observations in the same group tend to be similar.
++++
