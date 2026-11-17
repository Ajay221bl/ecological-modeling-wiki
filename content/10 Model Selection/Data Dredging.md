---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Data snooping"
  - "Fishing"
  - "Fishing expedition"
  - "Data Snooping"
  - "HARKing"
  - "p-hacking"
status: seedling
---

# Data Dredging

**In one line:** data dredging is searching through many models, variables or tests until something looks significant or well supported, and then reporting it as if it had been the plan all along.

> [!info] Before this, it helps to know
> [[Type I Error]] (what multiplies) · [[Candidate Model Set]] (what should prevent it) · [[Pairwise Comparisons|Multiple Comparisons]] (the same problem in tests)

## The everyday picture
Throwing darts at a barn and painting targets around wherever they land. Every throw looks like a bullseye. Nothing has been learned about your aim.

## Start from zero
1. **Each extra comparison is another chance for noise to look like signal.**
2. **Try enough predictors and some will "work"** by chance. With 20 independent tests at 0.05, the chance of at least one false positive is 64%.
3. **Forms:** all-subsets fishing, trying many transformations, choosing the response after seeing results, adding covariates until p < 0.05, inventing the hypothesis after the result (HARKing).
4. **The reported uncertainty is wrong:** it ignores the search.
5. **Results don't replicate** on new data.
6. **Burnham and Anderson's term for it in model selection** is the main error they warn against.
7. **Defence:** a small a priori candidate set, pre-registered hypotheses, honest labelling of exploratory results, and validation on new data.

## In R
```r
set.seed(10); 1 - 0.95^20
y <- rnorm(50); X <- matrix(rnorm(50 * 40), 50); p <- apply(X, 2, function(x) summary(lm(y ~ x))$coefficients[2, 4]); sum(p < 0.05); round(min(p), 4)      # 40 noise predictors, a few "significant"
```

## In the course
[[Anderson and Burnham 2002]], [[Johnson and Omland 2004]].

## Common confusions
- **"AIC protects against dredging."** AIC across 1,000 models dredges as well as p-values do.

## Explain it back
- Why do dredged results fail to replicate?

*Pass test:* you can name three forms of dredging and the defences.

## Connections
- **Builds on:** [[Type I Error]], [[Candidate Model Set]]
- **Leads to:** [[All-subsets Selection]], [[Stepwise Selection]], [[Post hoc Analysis]], [[Cross-validation]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]], molecular note [[Why build the candidate model set before seeing the data]]

## Flashcards

What is data dredging?
??
Searching many models or tests until something appears supported, then presenting it as planned.
++++

What is the chance of at least one false positive among 20 independent tests at α = 0.05?
??
About 64% (1 − 0.95²⁰).
++++
