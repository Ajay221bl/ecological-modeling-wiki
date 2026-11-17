---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "Data dredging is searching through many models, variables or tests until something looks significant or well supported, and then reporting it as if it had been the plan all along."
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

Throw darts at a barn and paint targets around wherever they land, and every throw looks like a bullseye while nothing is learned about your aim. **Data dredging** is searching through many models, variables or tests until something looks significant or well supported, then reporting it as if it had been the plan. Each extra comparison is another chance for noise to look like signal ([[Type I Error]], [[Pairwise Comparisons|Multiple Comparisons]]): with 20 independent tests at 0.05, the chance of at least one false positive is 1 − 0.95²⁰ = 64%. In the code below, 3 of 40 pure-noise predictors are "significant", the best with p = 0.015.

Forms include all-subsets fishing ([[All-subsets Selection]]), [[Stepwise Selection]], trying many transformations, choosing the response after seeing results, adding covariates until p < 0.05, and inventing the hypothesis after the result, called HARKing. The reported uncertainty is wrong because it ignores the search, and the results don't replicate on new data.

It is the main error Burnham and Anderson warn against in model selection ([[Anderson and Burnham 2002]], [[Johnson and Omland 2004]]). The defence is a small a priori [[Candidate Model Set]], pre-registered hypotheses, honest labelling of exploratory results ([[Post hoc Analysis]]) and validation on new data ([[Cross-validation]]). AIC does not protect against dredging: AIC across 1,000 models dredges as well as p-values do.

```r
set.seed(10); 1 - 0.95^20
y <- rnorm(50); X <- matrix(rnorm(50 * 40), 50); p <- apply(X, 2, function(x) summary(lm(y ~ x))$coefficients[2, 4]); sum(p < 0.05); round(min(p), 4)      # 40 noise predictors, a few "significant"
```

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
