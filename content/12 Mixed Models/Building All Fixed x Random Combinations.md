---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "Building all combinations means writing code that generates every candidate model from lists of fixed-effect sets and random-effect structures, fits them, and ranks them in one table."
aliases:
  - "All model combinations"
  - "Programmatic model building"
  - "Fixed by random combinations"
status: seedling
---

# Building All Fixed x Random Combinations

**Building all combinations** means writing code that generates every candidate model from lists of fixed-effect sets and random-effect structures, fits them, and ranks them in one table ([[Candidate Model Set]], [[Model Ranking Tables]]). Make a vector of fixed parts ("1", "len", "len + sex") and of random parts ("(1 | farm)", "(len | farm)"), paste them into formulas with `expand.grid()` and `paste()`, fit each with `lapply()` or `purrr::map()` while catching errors and warnings ([[Loops, apply and map]]), and rank them with `MuMIn::model.sel()` or a hand-made AIC table.

Keep the set small and meaningful, since every combination is a hypothesis and automated sets drift toward [[Data Dredging]]. Record convergence for each fit with `performance::check_convergence()`, as the GLMM lab does ([[Convergence Warnings]]). In the code below four `sleepstudy` models fitted by ML rank `Reaction ~ Days + (Days | Subject)` first with AIC 1763.9, ahead of 1785.5, 1802.1 and 1916.5 for the others.

The GLMM lab builds all fixed-by-random combinations programmatically and ranks them with `MuMIn::model.sel()` ([[Course Website]]). Fitting all combinations is not objective: it is only as good as the variables you put in.

```r
library(lme4); fx <- c("1", "Days"); rx <- c("(1 | Subject)", "(Days | Subject)"); g <- expand.grid(fx = fx, rx = rx, stringsAsFactors = FALSE)
g$formula <- paste("Reaction ~", g$fx, "+", g$rx); g$AIC <- sapply(g$formula, function(f) AIC(lmer(as.formula(f), sleepstudy, REML = FALSE))); g[order(g$AIC), c("formula", "AIC")]
```

## Connections
- **Builds on:** [[Candidate Model Set]], [[Model Ranking Tables]], [[Loops, apply and map]]
- **Leads to:** [[All-subsets Selection]], [[Data Dredging]], [[Top-down Model Selection Protocol]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

Why must models differing in fixed effects be fitted with ML before ranking by AIC?
??
REML likelihoods are not comparable across different fixed structures.
++++
