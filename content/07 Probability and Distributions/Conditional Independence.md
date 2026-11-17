---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "Two things are conditionally independent when they are unrelated once you know the value of a third thing, even if they look related otherwise."
aliases:
  - "Conditionally independent"
  - "Independent given"
status: seedling
---

# Conditional Independence

Ice-cream sales and sunburn cases rise and fall together, but on days of the same temperature, knowing ice-cream sales tells you nothing more about sunburn. Given temperature, they are independent. Two things are **conditionally independent** given a third when they are unrelated once you know its value, even if they look related otherwise. Formally, A and B are conditionally independent given C when P(A, B | C) = P(A | C) × P(B | C) ([[Conditional Probability]], [[Independent Events]]). Unconditionally they may be strongly associated, because C drives both, which is the structure behind a [[Confounding Variable]].

The code below simulates it. Temperature drives both ice-cream sales and sunburn, so the two are correlated at about 0.5. Remove the effect of temperature from each, by taking residuals from regressions on temperature, and the leftovers have a correlation of about 0. So independence given C does not imply independence: the raw association is real, it just runs through C.

Statistical models lean on this idea constantly. Regression assumes observations are independent *given the predictors and parameters*: two plots can both have high counts because both are wet, but once the model knows wetness their leftover deviations should be unrelated. A [[Hierarchical Model]] is built from it: nests within a site are assumed independent given that site's random effect. A [[Directed Acyclic Graph]] draws it: two nodes with no arrow between them that share a parent are conditionally independent given the parent, which is how Hobbs and Hooten factor joint distributions into simple pieces ([[Hobbs and Hooten 2015 Ch3]], [[Hobbs and Hooten 2015 Ch6]]).

```r
set.seed(4)
temp <- rnorm(5000); ice <- temp + rnorm(5000); burn <- temp + rnorm(5000)
cor(ice, burn)                                         # about 0.5: associated
cor(resid(lm(ice ~ temp)), resid(lm(burn ~ temp)))     # about 0: independent given temperature
```

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
