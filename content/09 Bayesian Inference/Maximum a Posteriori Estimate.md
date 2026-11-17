---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "The maximum a posteriori estimate is the parameter value at the peak of the posterior distribution."
aliases:
  - "MAP estimate"
  - "MAP"
  - "Posterior mode"
status: seedling
---

# Maximum a Posteriori Estimate

Naming the single most likely suspect is convenient and hides how close the runner-up was. The **maximum a posteriori (MAP) estimate** is the parameter value at the peak of the [[Posterior Distribution]], its [[Mode]], the value that maximises likelihood × prior. With a flat prior it equals the [[Maximum Likelihood Estimation|maximum likelihood estimate]]; with an informative prior it is pulled toward the prior. In the code below, 3 occupied ponds out of 10 give a MAP of 0.3 under a flat prior, but 0.5 under a Beta(12, 8) prior centred on 0.6, matching the formula (3 + 12 − 1)/(10 + 12 + 8 − 2).

Penalised likelihood and ridge regression can be read as MAP estimates under a normal prior ([[Regularization]]). But a MAP is a single point with no uncertainty attached. For skewed posteriors the mode, median and mean differ, and the mode changes if you reparameterise, say from σ to σ², so the mean or median is more often reported ([[Posterior Summary]]).

MAP is not "the Bayesian answer": the posterior distribution is the answer and the MAP one point of it.

```r
p <- seq(0, 1, 0.0001)
p[which.max(dbinom(3, 10, p) * dbeta(p, 1, 1))]                     # flat prior: MAP = MLE = 0.3
p[which.max(dbinom(3, 10, p) * dbeta(p, 12, 8))]                    # informative prior: pulled toward 0.6
(3 + 12 - 1) / (10 + 12 + 8 - 2)
```

## Connections
- **Builds on:** [[Posterior Distribution]], [[Maximum Likelihood Estimation]]
- **Leads to:** [[Posterior Summary]], [[Regularization]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is the MAP estimate?
??
The mode of the posterior distribution: the parameter value maximising likelihood × prior.
++++

When does the MAP estimate equal the MLE?
??
When the prior is flat over the relevant range.
++++
