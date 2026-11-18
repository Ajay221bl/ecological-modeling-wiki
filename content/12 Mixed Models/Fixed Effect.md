---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "A fixed effect is a parameter estimated directly as a single value, such as an average slope or the difference between treatments, that applies to the whole population of interest."
aliases:
  - "Fixed effects"
  - "Population-level effect"
  - "Fixed factor"
status: seedling
---

# Fixed Effect

A **fixed effect** is a [[Parameter]] estimated directly as a single value, such as an average slope or the difference between treatments, that applies to the whole population of interest. Every coefficient in an ordinary `lm()` is a fixed effect ([[Regression Coefficient]]). In a [[Mixed Effects Model]] the fixed effects are the "average", population-level relationships, which `fixef(m)` extracts. In the code below the `sleepstudy` fixed effects are an intercept of 251.4 ms and a slope of 10.5 ms per day.

A [[Grouping Variable|grouping variable]] fitted as fixed gets one parameter per level, minus one, and each level is estimated on its own with no sharing of information ([[No Pooling]]). Use fixed effects for the [[Predictor Variable|predictors]] you want to test or interpret, for treatments, and for factors with few levels that are all of interest, such as sex or treatment; use a [[Random Effect]] for groups sampled from a larger population.

"Fixed" has several meanings in the literature, Gelman lists five, so say what you mean ([[Harrison et al. 2018]], [[Course Website]]). Fixed effects are not "the important ones"; they are the ones estimated individually.

```r
library(lme4); m <- lmer(Reaction ~ Days + (1 | Subject), data = sleepstudy); round(fixef(m), 2)
```

## Connections
- **Builds on:** [[Parameter]], [[Regression Coefficient]], [[Grouping Variable]], [[Predictor Variable]]
- **Leads to:** [[Random Effect]], [[Mixed Effects Model]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]], molecular note [[Fixed vs Random Effects]]

## Flashcards

What is a fixed effect?
??
A parameter estimated directly as a single value applying to the whole population, such as an average slope.
++++
