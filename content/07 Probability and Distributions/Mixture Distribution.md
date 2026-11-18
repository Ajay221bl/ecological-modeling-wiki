---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "A mixture distribution describes data that come from two or more different distributions blended together in some proportions."
aliases:
  - "Mixture"
  - "Finite mixture"
  - "Compound distribution"
status: seedling
---

# Mixture Distribution

A bag of sweets comes from two factories: factory A's weigh about 5 g, factory B's about 9 g. Weigh sweets from the bag without knowing their origin and you see two humps, a blend of two simple distributions. A **mixture distribution** describes data that come from two or more different distributions blended together in some proportions ([[Probability Distribution]]). Each observation first comes from one of several components, chosen with mixing probabilities that add to 1, and then its value is drawn from that component's distribution. The density of the mixture is Σ (mixing probability × component density), the [[Law of Total Probability]] in action. Usually the component an observation came from is unobserved, a [[Latent Variable]].

An example. Body mass in a bird species with larger males: 55% females following Normal(18, 1.5) and 45% males following Normal(24, 1.5). The combined [[Histogram|histogram]] has two peaks, and the figure shows the two component curves, each scaled by its share, adding up to the two-humped total. The code below simulates it and computes the mixture density at 20 g as 0.55 × (female density at 20) + 0.45 × (male density at 20). Two peaks are also what a [[Violin Plot]] reveals and a [[Boxplot|boxplot]] hides.

Mixtures matter in ecology because zero-inflated models are mixtures: a point mass at zero mixed with a count distribution ([[Zero-inflated Model]], [[Zuur et al. 2009 Ch11]]). Mixtures can also be continuous. A Poisson whose mean itself varies according to a [[Gamma Distribution|gamma distribution]] is exactly the [[Negative Binomial Distribution]], which is why the negative binomial handles [[Overdispersion|overdispersion]]: it is a Poisson with hidden extra variability in its mean. The last lines of the code confirm it: a gamma-Poisson mixture with mean 4 has variance 12, the variance of a negative binomial with mean 4 and size 2. One confusion: a mixture is a *choice* between components, not the *sum* of two [[Random Variable|random variables]] ([[Hobbs and Hooten 2015 Ch3]]).

![[Mixture distribution.png|700]]
*What to look at:* two component curves, scaled by their shares, add up to the two-humped total.

```r
set.seed(14)
male <- rbinom(1e4, 1, 0.45); mass <- rnorm(1e4, ifelse(male == 1, 24, 18), 1.5)
hist(mass, breaks = 50)
0.55 * dnorm(20, 18, 1.5) + 0.45 * dnorm(20, 24, 1.5)        # mixture density at 20 g
lam <- rgamma(1e5, shape = 2, rate = 0.5); y <- rpois(1e5, lam)   # gamma-Poisson mixture
c(mean(y), var(y)); c(4, 4 + 4^2 / 2)                         # matches a negative binomial with mean 4, size 2
```

## Connections
- **Builds on:** [[Probability Distribution]], [[Law of Total Probability]], [[Histogram]], [[Boxplot]], [[Gamma Distribution]], [[Random Variable]]
- **Leads to:** [[Zero-inflated Model]], [[Negative Binomial Distribution]], [[Violin Plot]], [[Latent Variable]], [[Overdispersion]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

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
