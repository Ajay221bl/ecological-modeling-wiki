---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "All model combinations"
  - "Programmatic model building"
  - "Fixed by random combinations"
status: seedling
---

# Building All Fixed x Random Combinations

**In one line:** building all combinations means writing code that generates every candidate model from lists of fixed-effect sets and random-effect structures, fits them, and ranks them in one table.

> [!info] Before this, it helps to know
> [[Candidate Model Set]] · [[Model Ranking Tables]] · [[Loops, apply and map]]

## Start from zero
1. **Make a vector of fixed parts** ("1", "len", "len + sex", ...) and of random parts ("(1 | farm)", "(len | farm)").
2. **Paste them into formulas** with `expand.grid()` and `paste()`.
3. **Fit each** with `lapply()` or `purrr::map()`, catching errors and warnings.
4. **Rank** with `MuMIn::model.sel()` or a hand-made AIC table.
5. **Keep the set small and meaningful.** Every combination is a hypothesis; automated sets drift toward data dredging.
6. **Record convergence** for each fit (`performance::check_convergence()`), as the GLMM lab does.

## In R
```r
library(lme4); fx <- c("1", "Days"); rx <- c("(1 | Subject)", "(Days | Subject)"); g <- expand.grid(fx = fx, rx = rx, stringsAsFactors = FALSE)
g$formula <- paste("Reaction ~", g$fx, "+", g$rx); g$AIC <- sapply(g$formula, function(f) AIC(lmer(as.formula(f), sleepstudy, REML = FALSE))); g[order(g$AIC), c("formula", "AIC")]
```

## In the course
GLMM lab: all fixed by random combinations built programmatically and ranked with `MuMIn::model.sel()` ([[Course Website]]).

## Common confusions
- **"Fitting all combinations is objective."** It is only as good as the variables you put in.

## Explain it back
- Why fit with REML = FALSE when fixed parts differ?

*Pass test:* you can generate and rank a model set in code.

## Connections
- **Builds on:** [[Candidate Model Set]], [[Model Ranking Tables]], [[Loops, apply and map]]
- **Leads to:** [[All-subsets Selection]], [[Data Dredging]], [[Top-down Model Selection Protocol]]
- **Part of:** [[MOC - Mixed Models]]

## Flashcards

Why must models differing in fixed effects be fitted with ML before ranking by AIC?
??
REML likelihoods are not comparable across different fixed structures.
++++
