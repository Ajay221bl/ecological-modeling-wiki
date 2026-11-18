---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Complete separation happens in logistic regression when some predictor splits the data perfectly into all-zeros on one side and all-ones on the other, so the estimated slope runs off toward infinity."
aliases:
  - "Perfect separation"
  - "Quasi-complete separation"
  - "Separation"
  - "Fitted probabilities 0 or 1"
status: seedling
---

# Complete Separation

Try to judge the steepness of a cliff from a photo in which every person is clearly at the top or clearly at the bottom, with nobody on the slope. The cliff might be steep, vertical or overhanging; nothing in the photo sets a limit. **Complete separation** happens in [[Logistic Regression]] when some [[Predictor Variable|predictor]] splits the data perfectly into all zeros on one side and all ones on the other. A species absent from every plot above 30% tree cover and present on every plot below is an example: the best-fitting S-curve is a vertical step at 30%, which needs an infinite slope. The likelihood keeps rising as the slope grows, so no finite [[Maximum Likelihood Estimation|maximum likelihood estimate]] exists, and the optimiser stops somewhere arbitrary ([[Convergence]]). The figure shows no overlap between the 0s and 1s and a fitted curve that has become a step.

The symptoms are a huge [[Regression Coefficient|coefficient]] with an even larger [[Standard Error|standard error]] and R's warnings "fitted probabilities numerically 0 or 1 occurred" and sometimes "algorithm did not converge". The [[Wald Test]] p-value comes out near 1, absurdly, for the strongest predictor in the data. In the code below, eight points with all 0s below x = 4.5 and all 1s above give exactly that; swapping one pair so the groups overlap gives finite, sensible estimates. Common causes are small samples, a rare outcome, a factor level with only 0s or only 1s, and too many predictors.

The remedies pull the estimate back to a finite value: a [[Weakly Informative Prior]] on the coefficients in a [[Bayesian Logistic Regression|Bayesian logistic regression]], or penalised likelihood such as Firth's method ([[Regularization]]). Merging sparse [[Categorical Variable|factor levels]] or simplifying the model also helps. Separation is not nonsense data; it signals a very strong effect that the data cannot put a number on, so p = 0.99 here does not mean the predictor is useless, it means the predictor is too good ([[Course Website]]).

![[Complete separation.png|700]]
*What to look at:* no overlap between the 0s and the 1s along the predictor, and a fitted curve that has become a step.

```r
x <- c(1, 2, 3, 4, 5, 6, 7, 8); y <- c(0, 0, 0, 0, 1, 1, 1, 1)
m <- suppressWarnings(glm(y ~ x, family = binomial)); round(summary(m)$coefficients, 2)     # enormous estimate, enormous SE, p near 1
y2 <- c(0, 0, 0, 1, 0, 1, 1, 1); round(summary(glm(y2 ~ x, family = binomial))$coefficients, 2)    # one overlapping pair: finite estimates
```

## Connections
- **Builds on:** [[Logistic Regression]], [[Maximum Likelihood Estimation]], [[Predictor Variable]], [[Regression Coefficient]], [[Standard Error]], [[Categorical Variable]]
- **Leads to:** [[Wald Test]], [[Weakly Informative Prior]], [[Convergence]], [[Regularization]], [[Bayesian Logistic Regression]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What is complete separation?
??
A predictor perfectly divides the 0s from the 1s, so the logistic slope has no finite maximum likelihood estimate.
![[Complete separation.png]]
++++

What output signals separation?
??
Huge coefficients with huge standard errors and the warning "fitted probabilities numerically 0 or 1 occurred".
++++

How can separation be handled?
??
Weakly informative priors or penalised likelihood, or simplifying the model.
++++
