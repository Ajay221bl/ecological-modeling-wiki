---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "Cross-validation estimates how well a model predicts new data by repeatedly fitting it to part of the data and testing it on the part that was left out."
aliases:
  - "CV"
  - "k-fold cross-validation"
  - "K-fold CV"
  - "Holdout validation"
  - "Train-test split"
status: seedling
---

# Cross-validation

If you practise on the same exam papers you are tested on, your score means little; hide some papers, study the rest, and test yourself on the hidden ones. **Cross-validation** estimates how well a model predicts new data by repeatedly fitting it to part of the data and testing it on the part left out ([[Out-of-sample Prediction]]). Split the data into k groups, or folds, often 5 or 10, assigned at random ([[Random Sampling]]). For each fold, fit the model on the other k − 1 folds, predict the held-out fold and record the error; then average the errors across folds and compare models by their cross-validated error, lower being better.

Error measures include the [[Mean Square Prediction Error]], the [[Log Pointwise Predictive Density|log predictive density]] and the misclassification rate ([[Scoring Rules]]). [[Leave-one-out Cross-validation]] is the extreme case with k = n. It needs no formula for a penalty, since it measures prediction directly, and it detects [[Overfitting]]. In the code below polynomial curves are fitted to a sine-shaped relationship: the in-sample error keeps falling as the degree rises from 1 to 12 (0.22 to 0.09), while the 10-fold cross-validated error is worst for the [[Equation of a Line|straight line]] (0.23), best at degree 5 (0.11) and rises again at degree 12 (0.12).

Folds must respect structure: with sites, years or space, hold out whole sites or blocks, otherwise correlated neighbours leak information and the result is too optimistic. The costs are k refits and randomness in the fold assignment. It is the direct counterpart of [[AIC]], discussed in [[Hobbs and Hooten 2015 Ch9]] and the [[Model Selection|model selection]] and Bayesian comparison lectures ([[Course Website]]). Random folds are not always fine: not with clustered or [[Autocorrelation|autocorrelated]] data.

```r
set.seed(16); n <- 100; x <- runif(n, 0, 3); y <- sin(2 * x) + rnorm(n, 0, 0.3); fold <- sample(rep(1:10, length.out = n))
cv <- function(deg) mean(sapply(1:10, function(k) { tr <- fold != k; m <- lm(y ~ poly(x, deg), subset = tr); mean((y[!tr] - predict(m, data.frame(x = x[!tr])))^2) }))
round(sapply(c(1, 3, 5, 12), cv), 3)                    # too simple and too flexible both predict worse
round(sapply(c(1, 3, 5, 12), function(d) mean(resid(lm(y ~ poly(x, d)))^2)), 3)      # in-sample error keeps falling
```

## Connections
- **Builds on:** [[Out-of-sample Prediction]], [[Overfitting]], [[Log Pointwise Predictive Density]], [[Equation of a Line]], [[Model Selection]]
- **Leads to:** [[Leave-one-out Cross-validation]], [[Mean Square Prediction Error]], [[AIC]], [[Scoring Rules]], [[Autocorrelation]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What is k-fold cross-validation?
??
Splitting data into k folds, fitting on k − 1 and testing on the remaining fold in turn, then averaging the prediction error.
++++

Why should structured data be cross-validated by blocks?
??
Correlated observations in training and test sets make the prediction error look too good.
++++
