---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Perfect separation"
  - "Quasi-complete separation"
  - "Separation"
  - "Fitted probabilities 0 or 1"
status: seedling
---

# Complete Separation

**In one line:** complete separation happens in logistic regression when some predictor splits the data perfectly into all-zeros on one side and all-ones on the other, so the estimated slope runs off toward infinity.

> [!info] Before this, it helps to know
> [[Logistic Regression]] (where it occurs) · [[Maximum Likelihood Estimation]] (which fails) · [[Convergence]] (the symptom)

## The everyday picture
Trying to find the steepness of a cliff from a photo in which every person is either clearly at the top or clearly at the bottom, with nobody on the slope. The cliff might be steep, or vertical, or overhanging. Nothing in the photo sets a limit.

## A tiny example
A species absent from every plot above 30% tree cover and present on every plot below. The best-fitting S-curve is a vertical step at 30%, which needs an infinite slope.

## Start from zero
1. **The likelihood keeps rising** as the slope grows. A steeper curve fits the perfectly split data ever better.
2. **So no finite maximum likelihood estimate exists.**
3. **The optimiser stops somewhere arbitrary.** You see a huge coefficient (like 40) with an even larger standard error (like 20,000).
4. **R warns:** "fitted probabilities numerically 0 or 1 occurred" and sometimes "algorithm did not converge".
5. **The Wald p-value is near 1,** absurdly, for the strongest predictor in the data.
6. **Common causes:** small samples, a rare outcome, a factor level with only 0s or only 1s, too many predictors.
7. **Remedies:** a weakly informative prior on the coefficients (Bayesian logistic regression) or penalised likelihood (Firth), which pull the estimate back to a finite value. Or merge sparse factor levels. Or simplify the model.
8. **It isn't nonsense data.** It signals a very strong effect that the data can't put a number on.

## See it
![[Complete separation.png|700]]
*What to look at:* no overlap between the 0s and the 1s along the predictor, and a fitted curve that has become a step.

## In R
```r
x <- c(1, 2, 3, 4, 5, 6, 7, 8); y <- c(0, 0, 0, 0, 1, 1, 1, 1)
m <- suppressWarnings(glm(y ~ x, family = binomial)); round(summary(m)$coefficients, 2)     # enormous estimate, enormous SE, p near 1
y2 <- c(0, 0, 0, 1, 0, 1, 1, 1); round(summary(glm(y2 ~ x, family = binomial))$coefficients, 2)    # one overlapping pair: finite estimates
```

## In the course
Raised in the logistic regression lab and again as a motivation for priors ([[Course Website]]).

## Common confusions
- **"p = 0.99 means the predictor is useless."** Under separation the Wald test breaks down. The predictor is too good.

## Explain it back
- Why does the slope head to infinity?
- Name two remedies.

*Pass test:* you can recognise separation from model output.

## Connections
- **Builds on:** [[Logistic Regression]], [[Maximum Likelihood Estimation]]
- **Leads to:** [[Wald Test]], [[Weakly Informative Prior]], [[Convergence]], [[Regularization]]
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
