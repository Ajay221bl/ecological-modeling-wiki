---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Shrinkage estimator"
  - "Shrunk estimates"
  - "Shrinkage toward the mean"
status: seedling
---

# Shrinkage

**In one line:** shrinkage is pulling individual estimates toward a common value, which adds a little bias but removes a lot of noise, so the estimates are more accurate on average.

> [!info] Before this, it helps to know
> [[Bias-Variance Trade-off]] (why it helps) · [[Partial Pooling]] (one source) · [[Regularization]] (another source)

## Start from zero
1. **Mixed models shrink group effects toward the population mean.**
2. **Penalised regression (ridge, lasso) shrinks coefficients toward zero.**
3. **Priors shrink Bayesian estimates toward the prior centre.**
4. **Why it works:** extreme estimates are partly extreme by chance. Pulling them in corrects for that ("regression to the mean").
5. **Stein's paradox (1956):** for three or more means, shrinking toward a common value beats estimating each separately in total squared error.
6. **Harrison et al. note shrinkage is strongest for groups with small samples,** and can feel strange to researchers used to treating group means independently.

## See it
![[Partial pooling shrinkage.png|700]]
*What to look at:* blue points sit between orange points and the dashed grand mean.

## In R
```r
set.seed(3); truth <- rnorm(30, 0, 1); obs <- truth + rnorm(30, 0, 1); shrunk <- obs * 1 / (1 + 1)     # optimal weight when signal and noise variances are equal
round(c(error_raw = mean((obs - truth)^2), error_shrunk = mean((shrunk - truth)^2)), 2)
```

## In the course
[[Harrison et al. 2018]].

## Common confusions
- **"Shrinkage is a bug of mixed models."** It is the reason they predict better.

## Explain it back
- Why does shrinkage reduce average error?

*Pass test:* you can name three sources of shrinkage.

## Connections
- **Builds on:** [[Bias-Variance Trade-off]], [[Partial Pooling]], [[Regularization]]
- **Leads to:** [[Partial Pooling|Borrowing Strength]], [[Conditional Modes]], [[Prior Distribution]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What is shrinkage?
??
Pulling estimates toward a common value, trading a little bias for a large reduction in variance.
![[Partial pooling shrinkage.png]]
++++

Name three sources of shrinkage.
??
Random effects (toward the group mean), penalties like ridge or lasso (toward zero), and Bayesian priors (toward the prior centre).
++++
