---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The Dirichlet distribution is a distribution over a whole set of proportions that must add up to 1, such as the shares of a diet made up by each prey type."
aliases:
  - "Dirichlet"
status: seedling
---

# Dirichlet Distribution

Break a stick into K pieces and hand one to each of K owners. Each break is one way of dividing the stick. With some settings the pieces come out nearly equal every time; with others the splits are wildly uneven. The **Dirichlet distribution** is a distribution over a whole set of proportions that must add to 1, such as the shares of a diet made up by each prey type ([[Proportion]]). One draw is a vector of K proportions summing to 1. It has K positive parameters α₁ to α_K, and the expected share of category i is αᵢ divided by the sum of the α's. With K = 2 it is the [[Beta Distribution]].

The sum of the α's is the *concentration*. When it is large, draws stay close to the expected shares; when small, they vary greatly; and all α equal to 1 gives a uniform spread over every possible split. In the code below, draws from Dirichlet(5, 2, 3) average 0.5, 0.2 and 0.3, and draws from Dirichlet(50, 20, 30), with the same expected shares and ten times the concentration, have much smaller standard deviations. The code builds the draws by generating independent gamma values and dividing each by their total, which is a standard way to simulate it.

It exists in Bayesian work because it is the conjugate prior for multinomial probabilities: a Dirichlet(α) prior plus observed counts n gives a Dirichlet(α + n) posterior ([[Multinomial Distribution]], [[Conjugate Prior]], [[Hobbs and Hooten 2015 Ch3]]). Separate independent beta priors would not do instead, because the shares would not add to 1. It is a [[Multivariate Distribution]].

```r
rdirich <- function(n, alpha) { g <- matrix(rgamma(n * length(alpha), alpha), n, byrow = TRUE); g / rowSums(g) }   # normalised gammas
set.seed(17); d <- rdirich(1e4, c(5, 2, 3)); head(round(d, 2), 3); round(colMeans(d), 2)     # means 0.5, 0.2, 0.3
round(apply(rdirich(1e4, c(50, 20, 30)), 2, sd), 3); round(apply(d, 2, sd), 3)             # higher concentration, less spread
```

## Connections
- **Builds on:** [[Beta Distribution]], [[Multinomial Distribution]]
- **Leads to:** [[Conjugate Prior]], [[Multivariate Distribution]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What is a draw from a Dirichlet distribution?
??
A vector of proportions that sum to 1.
++++

What is the Dirichlet used for in Bayesian models?
??
As the conjugate prior for multinomial category probabilities.
++++
