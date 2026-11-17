---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Mixture"
  - "Finite mixture"
  - "Compound distribution"
status: seedling
---

# Mixture Distribution

**In one line:** a mixture distribution describes data that come from two or more different distributions blended together in some proportions.

> [!info] Before this, it helps to know
> [[Probability Distribution]] (the components) · [[Law of Total Probability]] (how they combine)

## The everyday picture
A bag of mixed sweets from two factories. Factory A's sweets weigh about 5 g, factory B's about 9 g. Weigh sweets from the bag without knowing their origin and you see two humps: a blend of two simple distributions.

## A tiny example
Body mass of a bird species with larger males: 55% females ~ Normal(18, 1.5), 45% males ~ Normal(24, 1.5). The combined histogram has two peaks.

## Start from zero
1. **Each observation first comes from one of several components,** chosen with mixing probabilities that add to 1.
2. **Then its value is drawn from that component's distribution.**
3. **Density of the mixture = Σ (mixing probability × component density).**
4. **The component an observation came from is usually unobserved.**
5. **Why it matters in ecology: zero-inflated models are mixtures.** A point mass at zero is mixed with a count distribution.
6. **Continuous mixtures too.** A Poisson whose mean itself varies according to a gamma distribution is the negative binomial. *That is why the negative binomial handles overdispersion:* it is a Poisson with hidden extra variability in its mean.

## See it
![[Mixture distribution.png|700]]
*What to look at:* two component curves, scaled by their shares, add up to the two-humped total.

## In R
```r
set.seed(14)
male <- rbinom(1e4, 1, 0.45); mass <- rnorm(1e4, ifelse(male == 1, 24, 18), 1.5)
hist(mass, breaks = 50)
0.55 * dnorm(20, 18, 1.5) + 0.45 * dnorm(20, 24, 1.5)        # mixture density at 20 g
lam <- rgamma(1e5, shape = 2, rate = 0.5); y <- rpois(1e5, lam)   # gamma-Poisson mixture
c(mean(y), var(y)); c(4, 4 + 4^2 / 2)                         # matches a negative binomial with mean 4, size 2
```

## In the course
[[Hobbs and Hooten 2015 Ch3]] introduces mixtures. Zero-inflated models in [[Zuur et al. 2009 Ch11]].

## Common confusions
- **"A mixture is the sum of two random variables."** It is a choice between them, not an addition.

## Explain it back
- In what sense is a zero-inflated Poisson a mixture?

*Pass test:* you can simulate a two-component mixture.

## Connections
- **Builds on:** [[Probability Distribution]], [[Law of Total Probability]]
- **Leads to:** [[Zero-inflated Model]], [[Negative Binomial Distribution]], [[Violin Plot]], [[Latent Variable]]
- **Part of:** [[MOC - Probability and Distributions]]

## Flashcards

What is a mixture distribution?
??
A distribution formed by drawing each observation from one of several component distributions chosen with fixed probabilities.
![[Mixture distribution.png]]
++++

Which count distribution is a Poisson mixed over a gamma-distributed mean?
??
The negative binomial.
++++
