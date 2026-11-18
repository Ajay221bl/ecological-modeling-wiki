---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "Hierarchical data come in groups, such as measurements within individuals, individuals within sites, or sites within regions, so observations in the same group tend to resemble each other."
aliases:
  - "Multilevel data"
  - "Nested data"
  - "Clustered data"
  - "Grouped data"
  - "Hierarchical (multilevel) data"
status: seedling
---

# Hierarchical Data

Russian dolls nest one inside another: leaf measurements sit inside trees, trees inside plots, plots inside forests, and each layer adds its own variation. **Hierarchical data** come in groups like that: measurements within individuals, individuals within sites, sites within regions. Members of a group share conditions such as soil, weather, genes or observer, so observations in the same group tend to resemble each other and are correlated ([[Independence of Observations|Independence]], [[Sampling Unit]]). Ecological examples are repeated captures of the same bird, quadrats within transects, years within sites, chicks within nests (Shipley et al. 2022) and counties within states (Christensen et al. 2020).

There are two tempting mistakes. Ignoring the grouping treats correlated observations as independent, which is [[Pseudoreplication]]; averaging to the group level throws away the within-group information. A [[Mixed Effects Model]] keeps every observation and models the grouping with a [[Random Effect]]. The code below shows the lab's `sleepstudy` data: 180 reaction-time observations, but from only 18 people, 10 each.

The course uses `sleepstudy` and the Niobrara mice data in the linear mixed models lab ([[Course Website]], [[Harrison et al. 2018]], [[Zuur et al. 2009 Ch5]]). More rows do not mean more independent data: rows within a group share information.

```r
library(lme4); data(sleepstudy); c(observations = nrow(sleepstudy), subjects = nlevels(sleepstudy$Subject), per_subject = nrow(sleepstudy) / nlevels(sleepstudy$Subject))
```

## Connections
- **Builds on:** [[Independence of Observations|Independence]], [[Sampling Unit]]
- **Leads to:** [[Grouping Variable|Grouping Factor]], [[Mixed Effects Model]], [[Pseudoreplication]], [[Nested Random Effects]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]], molecular note [[Why use a random effect instead of a fixed effect]]

## Flashcards

What are hierarchical data?
??
Data in groups (possibly nested), where observations in the same group tend to be similar.
++++
