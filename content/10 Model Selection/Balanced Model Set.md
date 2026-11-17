---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Balanced candidate set"
  - "Balanced design of models"
status: seedling
---

# Balanced Model Set

**In one line:** a balanced model set includes every predictor in the same number of models, which is required if summed weights are to be compared between predictors.

> [!info] Before this, it helps to know
> [[Candidate Model Set]] (what is balanced) · [[Relative Variable Importance]] (what needs it)

## Start from zero
1. **Example with x1 and x2:** null, x1, x2, x1 + x2. Each predictor appears in 2 of the 4.
2. **Unbalanced example:** null, x1, x1 + x2, x1 + x3. x1 appears in 3 models, x2 in 1. x1's summed weight is inflated just by appearing more often.
3. **All-subsets sets are balanced automatically.**
4. **Hypothesis-driven sets are often unbalanced.** That is fine for ranking models, not for summed weights.

## In R
```r
balanced <- list(c(), "x1", "x2", c("x1", "x2")); unbalanced <- list(c(), "x1", c("x1", "x2"), c("x1", "x3"))
cnt <- function(s) table(unlist(s)); cnt(balanced); cnt(unbalanced)
```

## Common confusions
- **"Balance matters for ranking models."** It matters for variable-level summaries.

## Explain it back
- Give an unbalanced set of three predictors.

*Pass test:* you can check whether a set is balanced.

## Connections
- **Builds on:** [[Candidate Model Set]]
- **Leads to:** [[Relative Variable Importance]], [[All-subsets Selection]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What is a balanced model set?
??
One in which each predictor appears in the same number of models.
++++
