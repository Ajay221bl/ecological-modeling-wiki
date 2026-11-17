---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "A balanced model set includes every predictor in the same number of models, which is required if summed weights are to be compared between predictors."
aliases:
  - "Balanced candidate set"
  - "Balanced design of models"
status: seedling
---

# Balanced Model Set

A **balanced model set** includes every predictor in the same number of models ([[Candidate Model Set]]). With x1 and x2, the set null, x1, x2 and x1 + x2 is balanced, each predictor appearing in 2 of the 4. The set null, x1, x1 + x2 and x1 + x3 is not: x1 appears in 3 models and x2 and x3 in one each, as the code below counts.

Balance matters for [[Relative Variable Importance]], the summed weight of the models containing a predictor: in an unbalanced set, x1's summed weight is inflated just by appearing more often. All-subsets sets are balanced automatically ([[All-subsets Selection]]). Hypothesis-driven sets are often unbalanced, which is fine for ranking models but not for summed weights.

So balance matters for variable-level summaries, not for ranking models.

```r
balanced <- list(c(), "x1", "x2", c("x1", "x2")); unbalanced <- list(c(), "x1", c("x1", "x2"), c("x1", "x3"))
cnt <- function(s) table(unlist(s)); cnt(balanced); cnt(unbalanced)
```

## Connections
- **Builds on:** [[Candidate Model Set]]
- **Leads to:** [[Relative Variable Importance]], [[All-subsets Selection]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What is a balanced model set?
??
One in which each predictor appears in the same number of models.
++++
