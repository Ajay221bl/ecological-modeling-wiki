---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Dirichlet"
status: seedling
---

# Dirichlet Distribution

**In one line:** the Dirichlet distribution is a distribution over a whole set of proportions that must add up to 1, such as the shares of a diet made up by each prey type.

> [!info] Before this, it helps to know
> [[Beta Distribution]] (the two-category case) · [[Multinomial Distribution]] (its partner) · [[Proportion]] (what it produces)

## The everyday picture
Breaking a stick into pieces. Each draw is one way of dividing the stick among K owners. Some settings give nearly equal pieces every time. Others give wildly uneven splits.

## Start from zero
1. **One draw is a vector of K proportions summing to 1.**
2. **K positive parameters α₁, …, α_K.**
3. **Expected share of category i: αᵢ / Σα.**
4. **Σα is the concentration.** Large: draws stay close to the expected shares. Small: draws vary greatly.
5. **All α = 1 is uniform** over all possible splits.
6. **With K = 2 it is the beta.**
7. **Why it exists in Bayesian work:** it is the conjugate prior for multinomial probabilities. Prior Dirichlet(α) plus observed counts n gives posterior Dirichlet(α + n).

## In R
```r
rdirich <- function(n, alpha) { g <- matrix(rgamma(n * length(alpha), alpha), n, byrow = TRUE); g / rowSums(g) }   # normalised gammas
set.seed(17); d <- rdirich(1e4, c(5, 2, 3)); head(round(d, 2), 3); round(colMeans(d), 2)     # means 0.5, 0.2, 0.3
round(apply(rdirich(1e4, c(50, 20, 30)), 2, sd), 3); round(apply(d, 2, sd), 3)             # higher concentration, less spread
```

## In the course
[[Hobbs and Hooten 2015 Ch3]].

## Common confusions
- **"Independent betas would do."** Separate betas wouldn't add to 1.

## Explain it back
- What does the sum of the α's control?

*Pass test:* you can describe what one Dirichlet draw looks like.

## Connections
- **Builds on:** [[Beta Distribution]], [[Multinomial Distribution]]
- **Leads to:** [[Conjugate Prior]], [[Multivariate Distribution]]
- **Part of:** [[MOC - Probability and Distributions]]

## Flashcards

What is a draw from a Dirichlet distribution?
??
A vector of proportions that sum to 1.
++++

What is the Dirichlet used for in Bayesian models?
??
As the conjugate prior for multinomial category probabilities.
++++
