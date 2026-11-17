---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Normalising constant"
  - "Constant of proportionality"
  - "Normalization"
status: seedling
---

# Normalizing Constant

**In one line:** a normalizing constant is the number you divide an unnormalised curve by so that the area under it equals 1 and it becomes a proper probability distribution.

> [!info] Before this, it helps to know
> [[Probability Density Function]] (must integrate to 1) · [[Marginal Likelihood]] (the normalizing constant of the posterior)

## The everyday picture
Converting a recipe's "3 parts flour, 1 part sugar" into percentages. The parts give the right shape. Dividing by the total (4) turns them into shares that add to 100%.

## Start from zero
1. **Likelihood × prior has the right shape** but its area isn't 1.
2. **Divide by the total area** and it becomes the posterior.
3. **That total area is the marginal likelihood.**
4. **The shape is all that matters for many purposes:** finding the peak, comparing two parameter values (the constant cancels in ratios), and running MCMC.
5. **This is why you see "∝" in Bayesian formulas.** The constant has been dropped.

## In R
```r
p <- seq(0, 1, 0.01); unnorm <- dbinom(3, 10, p) * dbeta(p, 1, 1)
sum(unnorm) * 0.01                                                 # area: not 1
post <- unnorm / (sum(unnorm) * 0.01); sum(post) * 0.01            # after normalising: 1
unnorm[p == 0.3] / unnorm[p == 0.5]; post[p == 0.3] / post[p == 0.5]     # ratios are unchanged
```

## Common confusions
- **"Dropping the constant changes the answer."** It changes the height of the curve, not its shape.

## Explain it back
- Why does the constant cancel when comparing two parameter values?

*Pass test:* you can explain the ∝ sign in posterior ∝ likelihood × prior.

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
