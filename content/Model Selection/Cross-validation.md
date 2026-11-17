---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "CV"
  - "k-fold cross-validation"
  - "K-fold CV"
  - "Holdout validation"
  - "Train-test split"
status: seedling
---

# Cross-validation

**In one line:** cross-validation estimates how well a model predicts new data by repeatedly fitting it to part of the data and testing it on the part that was left out.

> [!info] Before this, it helps to know
> [[Out-of-sample Prediction]] (what it estimates) · [[Overfitting]] (what it detects) · [[Random Sampling]] (how folds are formed)

## The everyday picture
Studying with past exam papers. If you practise on the same papers you are tested on, your score means little. Hide some papers, study on the rest, and test yourself on the hidden ones.

## Start from zero
1. **Split the data into k groups (folds),** often 5 or 10.
2. **For each fold:** fit the model on the other k − 1 folds, predict the held-out fold, record the error.
3. **Average the errors** across folds.
4. **Compare models by their cross-validated error.** Lower is better.
5. **Error measures:** mean squared prediction error, log predictive density, misclassification rate.
6. **Leave-one-out** is the extreme case with k = n.
7. **Folds must respect structure.** With sites, years or space, hold out whole sites or blocks. Otherwise correlated neighbours leak information and CV is too optimistic.
8. **It needs no formula for the penalty.** It measures prediction directly.
9. **Costs:** k refits, and randomness in the fold assignment.

## In R
```r
set.seed(16); n <- 100; x <- runif(n, 0, 3); y <- sin(2 * x) + rnorm(n, 0, 0.3); fold <- sample(rep(1:10, length.out = n))
cv <- function(deg) mean(sapply(1:10, function(k) { tr <- fold != k; m <- lm(y ~ poly(x, deg), subset = tr); mean((y[!tr] - predict(m, data.frame(x = x[!tr])))^2) }))
round(sapply(c(1, 3, 5, 12), cv), 3)                    # too simple and too flexible both predict worse
round(sapply(c(1, 3, 5, 12), function(d) mean(resid(lm(y ~ poly(x, d)))^2)), 3)      # in-sample error keeps falling
```

## In the course
[[Hobbs and Hooten 2015 Ch9]]. Discussed in the model selection and Bayesian model comparison lectures ([[Course Website]]).

## Common confusions
- **"Random folds are always fine."** Not with clustered or autocorrelated data.

## Explain it back
- Why must clustered data be split by cluster?

*Pass test:* you can run k-fold CV and compare models.

## Connections
- **Builds on:** [[Out-of-sample Prediction]], [[Overfitting]]
- **Leads to:** [[Leave-one-out Cross-validation]], [[Mean Square Prediction Error]], [[AIC]], [[Scoring Rules]]
- **Part of:** [[MOC - Model Selection]]

## Flashcards

What is k-fold cross-validation?
??
Splitting data into k folds, fitting on k − 1 and testing on the remaining fold in turn, then averaging the prediction error.
++++

Why should structured data be cross-validated by blocks?
??
Correlated observations in training and test sets make the prediction error look too good.
++++
