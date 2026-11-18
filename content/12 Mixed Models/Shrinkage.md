---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "Shrinkage is pulling individual estimates toward a common value, which adds a little bias but removes a lot of noise, so the estimates are more accurate on average."
aliases:
  - "Shrinkage estimator"
  - "Shrunk estimates"
  - "Shrinkage toward the mean"
status: seedling
---

# Shrinkage

**Shrinkage** is pulling individual estimates toward a common value, which adds a little bias but removes a lot of noise, so the estimates are more [[Accuracy|accurate]] on average ([[Bias-Variance Trade-off]]). [[Mixed Effects Model|Mixed models]] shrink group effects toward the population mean ([[Partial Pooling]]); penalised regression such as ridge and lasso shrinks coefficients toward zero ([[Regularization]]); and priors shrink Bayesian estimates toward the prior centre.

It works because extreme estimates are partly extreme by chance, and pulling them in corrects for that, which is "regression to the mean". Stein's paradox (1956) showed that for three or more means, shrinking toward a common value beats estimating each separately in total squared error. In the code below 30 noisy estimates have a mean squared error of 0.97; shrinking each halfway toward zero, the best weight when signal and noise variances are equal, cuts it to 0.36. In the figure the blue points sit between the orange points and the dashed grand mean.

Harrison et al. note shrinkage is strongest for groups with small samples and can feel strange to researchers used to treating group means independently ([[Harrison et al. 2018]], [[Conditional Modes]]). Shrinkage is not a bug of mixed models; it is the reason they predict better.

![[Partial pooling shrinkage.png|700]]
*What to look at:* blue points sit between orange points and the dashed grand mean.

```r
set.seed(3); truth <- rnorm(30, 0, 1); obs <- truth + rnorm(30, 0, 1); shrunk <- obs * 1 / (1 + 1)     # optimal weight when signal and noise variances are equal
round(c(error_raw = mean((obs - truth)^2), error_shrunk = mean((shrunk - truth)^2)), 2)
```

## Connections
- **Builds on:** [[Bias-Variance Trade-off]], [[Partial Pooling]], [[Regularization]], [[Accuracy]], [[Mixed Effects Model]]
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
