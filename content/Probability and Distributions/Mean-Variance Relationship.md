---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Variance function"
  - "Mean-variance relation"
status: seedling
---

# Mean-Variance Relationship

**In one line:** the mean-variance relationship of a distribution is the rule that says how its variance changes as its mean changes.

> [!info] Before this, it helps to know
> [[Mean]] and [[Variance]] (the two linked quantities) · [[Probability Distribution]] (each has its own rule)

## The everyday picture
Estimating crowds. Guess the number in a small room and you're off by two or three. Guess the number in a stadium and you're off by thousands. For most things you count or measure, bigger quantities come with bigger errors. Each distribution has a precise version of that rule.

## Start from zero
1. **Normal:** variance is constant, unrelated to the mean.
2. **Poisson:** variance = mean.
3. **Negative binomial:** variance = mean + mean²/k.
4. **Binomial:** variance = np(1 − p). Largest in the middle, shrinking near 0 and n.
5. **Gamma and lognormal:** variance ∝ mean². The SD grows in step with the mean.
6. **Why this is how you choose a distribution:** plot the variance of your data against its mean (across groups or fitted values). The pattern points to the family.
7. **Why GLMs don't need equal variance:** each family builds its rule in. A Poisson GLM expects the fan shape that would count as a violation in a linear model.
8. **Diagnostics check the rule:** overdispersion means the data's variance grows faster than the family says.

## See it
![[Mean variance relationships.png|700]]
*What to look at:* one flat line, one diagonal, one curve bending upward. Three families, three rules.

## In R
```r
set.seed(20); mu <- c(1, 5, 20, 80)
rbind(mean = mu,
      normal = sapply(mu, function(m) var(rnorm(1e5, m, 2))),
      poisson = sapply(mu, function(m) var(rpois(1e5, m))),
      negbin = sapply(mu, function(m) var(rnbinom(1e5, mu = m, size = 2))),
      gamma = sapply(mu, function(m) var(rgamma(1e5, shape = 4, rate = 4 / m)))) |> round(1)
```

## In the course
The variance function is the second ingredient of a GLM in [[Zuur et al. 2009 Ch8]] and [[Zuur et al. 2009 Ch9]].

## Common confusions
- **"Unequal variance is always a problem."** In a GLM it is expected, in the specific form the family dictates.

## Explain it back
- State the mean-variance rule for Poisson, negative binomial and gamma.

*Pass test:* you can match a variance-against-mean plot to a family.

## Connections
- **Builds on:** [[Mean]], [[Variance]]
- **Leads to:** [[Overdispersion]], [[Dispersion Parameter]], [[Generalized Linear Model]], [[Heteroscedasticity]]
- **Part of:** [[MOC - Probability and Distributions]]

## Flashcards

What is the Poisson's mean-variance relationship?
??
Variance equals the mean.
![[Mean variance relationships.png]]
++++

What is the gamma's mean-variance relationship?
??
Variance is proportional to the mean squared.
++++

Why can a GLM handle variance that changes with the mean?
??
Each family includes its own variance function, so the expected heterogeneity is built in.
++++
