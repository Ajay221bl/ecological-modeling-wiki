---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Conditionally independent"
  - "Independent given"
status: seedling
---

# Conditional Independence

**In one line:** two things are conditionally independent when they are unrelated once you know the value of a third thing, even if they look related otherwise.

> [!info] Before this, it helps to know
> [[Independent Events]] (the unconditional version) · [[Conditional Probability]] (the "given")

## The everyday picture
Ice-cream sales and sunburn rise and fall together. But on days of the same temperature, knowing ice-cream sales tells you nothing more about sunburn. Given temperature, they are independent.

## Start from zero
1. **A and B are conditionally independent given C when P(A, B | C) = P(A | C) × P(B | C).**
2. **Unconditionally they may be strongly associated,** because C drives both.
3. **Why models rely on it:** regression assumes observations are independent *given the predictors and parameters*. Two plots can both have high counts because both are wet. Once the model knows wetness, their leftover deviations should be unrelated.
4. **Hierarchical models are built from it.** Nests within a site are assumed independent given that site's random effect.
5. **A DAG draws it:** two nodes with no arrow between them, sharing a parent, are conditionally independent given the parent.

## In R
```r
set.seed(4)
temp <- rnorm(5000); ice <- temp + rnorm(5000); burn <- temp + rnorm(5000)
cor(ice, burn)                                         # about 0.5: associated
cor(resid(lm(ice ~ temp)), resid(lm(burn ~ temp)))     # about 0: independent given temperature
```

## In the course
Used when Hobbs and Hooten factor joint distributions with Bayesian networks ([[Hobbs and Hooten 2015 Ch3]]; [[Hobbs and Hooten 2015 Ch6]]).

## Common confusions
- **"Independent given C implies independent."** No. The ice-cream example shows association without conditioning.

## Explain it back
- Why are grouped observations "independent given the random effect"?

*Pass test:* you can give an example of two variables related only through a common cause.

## Connections
- **Builds on:** [[Independent Events]], [[Conditional Probability]]
- **Leads to:** [[Directed Acyclic Graph]], [[Hierarchical Model]], [[Confounding Variable]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What is conditional independence?
??
A and B are independent once C is known: P(A, B | C) = P(A | C) P(B | C).
++++

What independence does a regression model assume?
??
That observations are independent conditional on the predictors and parameters.
++++
