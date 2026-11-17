---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "MAP estimate"
  - "MAP"
  - "Posterior mode"
status: seedling
---

# Maximum a Posteriori Estimate

**In one line:** the maximum a posteriori estimate is the parameter value at the peak of the posterior distribution.

> [!info] Before this, it helps to know
> [[Posterior Distribution]] (whose peak it is) · [[Maximum Likelihood Estimation]] (its frequentist cousin) · [[Mode]] (the idea of a peak)

## The everyday picture
The single most likely suspect. Naming them is convenient, and it hides how close the runner-up was.

## Start from zero
1. **MAP = the mode of the posterior.**
2. **It maximises likelihood × prior.**
3. **With a flat prior it equals the maximum likelihood estimate.**
4. **With an informative prior it is pulled toward the prior.** This is how penalised likelihood and ridge regression can be read: a MAP estimate under a normal prior.
5. **It is a point, with no uncertainty attached.**
6. **For skewed posteriors** mode, median and mean differ. The mean or median is more often reported.
7. **The mode changes if you reparameterise** (say, from σ to σ²). Mean-based and quantile-based summaries are less awkward.

## In R
```r
p <- seq(0, 1, 0.0001)
p[which.max(dbinom(3, 10, p) * dbeta(p, 1, 1))]                     # flat prior: MAP = MLE = 0.3
p[which.max(dbinom(3, 10, p) * dbeta(p, 12, 8))]                    # informative prior: pulled toward 0.6
(3 + 12 - 1) / (10 + 12 + 8 - 2)
```

## Common confusions
- **"MAP is the Bayesian answer."** The posterior distribution is the answer. MAP is one point of it.

## Explain it back
- When does MAP equal the MLE?

*Pass test:* you can relate MAP to MLE and to the prior.

## Connections
- **Builds on:** [[Posterior Distribution]], [[Maximum Likelihood Estimation]]
- **Leads to:** [[Posterior Summary]], [[Regularization]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

What is the MAP estimate?
??
The mode of the posterior distribution: the parameter value maximising likelihood × prior.
++++

When does the MAP estimate equal the MLE?
??
When the prior is flat over the relevant range.
++++
