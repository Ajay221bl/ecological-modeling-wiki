---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "All-subsets selection fits every combination of a list of predictors and ranks them all, which is thorough in a mechanical sense and is a form of data dredging when used without hypotheses."
aliases:
  - "All possible subsets"
  - "Best subsets"
  - "dredge()"
  - "All-subsets regression"
status: seedling
---

# All-subsets Selection

**All-subsets selection** fits every combination of a list of predictors and ranks them all. With p predictors there are 2^p models: 10 predictors give 1,024 and 20 give over a million. `MuMIn::dredge()` does this from a global model. It is thorough in a mechanical sense and a form of [[Data Dredging]] when used without hypotheses, because the top model among thousands is often a fluke ([[Candidate Model Set]]).

In the code below, six noise predictors give 64 models; in this dataset the empty model wins, but across 100 noise-only datasets the winner contains at least one predictor 73% of the time.

Defensible uses are a small set of predictors that are all biologically motivated, to compute balanced summed weights or full model averages ([[Balanced Model Set]], [[Model Averaging]]), or prediction validated on new data. Throwing in every column and reporting the winner as a finding is not defensible, and the same objection applies to [[Stepwise Selection]]. Testing all subsets is not objective; it replaces thought with search.

```r
2^c(3, 5, 10, 20)
set.seed(11); d <- as.data.frame(matrix(rnorm(40 * 6), 40)); d$y <- rnorm(40); vars <- names(d)[1:6]
subs <- unlist(lapply(0:6, function(k) combn(vars, k, simplify = FALSE)), recursive = FALSE); length(subs)
aics <- sapply(subs, function(v) AIC(lm(reformulate(if (length(v)) v else "1", "y"), data = d))); subs[[which.min(aics)]]      # this time the empty model wins
best_size <- sapply(1:100, function(s) { set.seed(s); d <- as.data.frame(matrix(rnorm(240), 40)); d$y <- rnorm(40); a <- sapply(subs, function(v) AIC(lm(reformulate(if (length(v)) v else "1", "y"), data = d))); length(subs[[which.min(a)]]) }); mean(best_size > 0)      # but in most noise-only datasets the winner contains predictors
# With MuMIn installed (not available in the wiki's build environment):
# options(na.action = "na.fail"); MuMIn::dredge(lm(y ~ ., data = d))
```

## Connections
- **Builds on:** [[Candidate Model Set]], [[Data Dredging]]
- **Leads to:** [[Stepwise Selection]], [[Balanced Model Set]], [[Model Averaging]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

How many models does all-subsets selection fit for p predictors?
??
2^p.
++++
