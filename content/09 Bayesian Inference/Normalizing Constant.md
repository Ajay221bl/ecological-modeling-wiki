---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A normalizing constant is the number you divide an unnormalised curve by so that the area under it equals 1 and it becomes a proper probability distribution."
aliases:
  - "Normalising constant"
  - "Constant of proportionality"
  - "Normalization"
status: seedling
---

# Normalizing Constant

A recipe's "3 parts flour, 1 part sugar" has the right proportions; dividing by the total, 4, turns them into shares that add to 100%. A **normalizing constant** is the number you divide an unnormalised curve by so that the area under it equals 1 and it becomes a proper probability distribution ([[Probability Density Function]]). Likelihood × prior has the right shape but not area 1; divided by its total area it becomes the [[Posterior Distribution]], and that total area is the [[Marginal Likelihood]].

For many purposes the shape is all that matters: finding the peak, comparing two parameter values, where the constant cancels in the ratio, and running samplers such as the [[Metropolis Algorithm]]. That is why Bayesian formulas are so often written with "∝", "proportional to": the constant has been dropped. In the code below, for 3 successes in 10, the unnormalised curve has area 0.091; after dividing by it the area is 1, while the ratio of heights at 0.3 and 0.5 is 2.28 both before and after.

Dropping the constant does not change the answer; it changes the height of the curve, not its shape.

```r
p <- seq(0, 1, 0.01); unnorm <- dbinom(3, 10, p) * dbeta(p, 1, 1)
sum(unnorm) * 0.01                                                 # area: not 1
post <- unnorm / (sum(unnorm) * 0.01); sum(post) * 0.01            # after normalising: 1
unnorm[p == 0.3] / unnorm[p == 0.5]; post[p == 0.3] / post[p == 0.5]     # ratios are unchanged
```

## Connections
- **Builds on:** [[Probability Density Function]], [[Marginal Likelihood]]
- **Leads to:** [[Metropolis Algorithm]], [[Posterior Distribution]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is a normalizing constant?
??
The quantity that rescales an unnormalised density so that it integrates to 1.
++++

What is the normalizing constant of the posterior?
??
The marginal likelihood P(y).
++++
