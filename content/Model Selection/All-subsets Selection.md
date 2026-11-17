---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "All possible subsets"
  - "Best subsets"
  - "dredge()"
  - "All-subsets regression"
status: seedling
---

# All-subsets Selection

**In one line:** all-subsets selection fits every combination of a list of predictors and ranks them all, which is thorough in a mechanical sense and is a form of data dredging when used without hypotheses.

> [!info] Before this, it helps to know
> [[Candidate Model Set]] (what it replaces) · [[Data Dredging]] (what it risks)

## Start from zero
1. **With p predictors there are 2^p models.** 10 predictors give 1,024. 20 give over a million.
2. **`MuMIn::dredge()` does this** from a global model.
3. **The top model among thousands is often a fluke.**
4. **Defensible uses:** a small set of predictors that are all biologically motivated, to compute balanced summed weights or full model averages. Or prediction validated on new data.
5. **Not defensible:** throwing in every column and reporting the winner as a finding.

## In R
```r
2^c(3, 5, 10, 20)
set.seed(11); d <- as.data.frame(matrix(rnorm(40 * 6), 40)); d$y <- rnorm(40); vars <- names(d)[1:6]
subs <- unlist(lapply(0:6, function(k) combn(vars, k, simplify = FALSE)), recursive = FALSE); length(subs)
aics <- sapply(subs, function(v) AIC(lm(reformulate(if (length(v)) v else "1", "y"), data = d))); subs[[which.min(aics)]]      # this time the empty model wins
best_size <- sapply(1:100, function(s) { set.seed(s); d <- as.data.frame(matrix(rnorm(240), 40)); d$y <- rnorm(40); a <- sapply(subs, function(v) AIC(lm(reformulate(if (length(v)) v else "1", "y"), data = d))); length(subs[[which.min(a)]]) }); mean(best_size > 0)      # but in most noise-only datasets the winner contains predictors
# With MuMIn installed (not available in the wiki's build environment):
# options(na.action = "na.fail"); MuMIn::dredge(lm(y ~ ., data = d))
```

## Common confusions
- **"Testing all subsets is objective."** It replaces thought with search.

## Explain it back
- How many models do 8 predictors give?

*Pass test:* you can say when all-subsets is and isn't defensible.

## Connections
- **Builds on:** [[Candidate Model Set]], [[Data Dredging]]
- **Leads to:** [[Stepwise Selection]], [[Balanced Model Set]], [[Model Averaging]]
- **Part of:** [[MOC - Model Selection]]

## Flashcards

How many models does all-subsets selection fit for p predictors?
??
2^p.
++++
