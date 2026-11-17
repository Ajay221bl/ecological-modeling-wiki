---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The beta-binomial distribution describes successes out of n trials when the success probability itself varies from unit to unit, giving more spread than a plain binomial."
aliases:
  - "Beta-binomial"
  - "Beta-binomial model"
  - "Overdispersed binomial"
status: seedling
---

# Beta-binomial Distribution

In a litter of pups, survival is tied together: with a healthy mother nearly all survive, and with an ill one nearly all die. So litters are more "all or nothing" than independent coin flips per pup would give. The **beta-binomial distribution** describes successes out of n trials when the success probability itself varies from unit to unit: each unit has its own p drawn from a [[Beta Distribution]], and given that p the successes are binomial ([[Binomial Distribution]], [[Mixture Distribution]]). Averaged over units, the counts are more variable than Binomial(n, mean p), with one extra parameter for how much p varies.

In the code below, litters of 10 with p drawn from Beta(2, 2), which averages 0.5, have a variance of about 7 against 2.5 for a plain binomial with p = 0.5, and the table shows many 0s and 10s that a plain binomial would almost never give.

It is to the binomial what the [[Negative Binomial Distribution]] is to the Poisson, and it handles [[Overdispersion]] in proportions such as survival within broods or germination within pots. In R it is `glmmTMB(cbind(y, n - y) ~ x, family = betabinomial())`. Harrison and colleagues recommend it, or an [[Observation-level Random Effect]], for overdispersed binomial data ([[Harrison et al. 2018]]). Overdispersed proportions do not need a transformation; they need a distribution with an extra variance parameter.

```r
set.seed(14); n <- 10; p_i <- rbeta(5000, 2, 2); y_bb <- rbinom(5000, n, p_i); y_b <- rbinom(5000, n, 0.5)
c(var_betabinomial = var(y_bb), var_binomial = var(y_b)); round(table(y_bb) / 5000, 2)      # far more spread, with 0s and 10s that a plain binomial would almost never give
```

## Connections
- **Builds on:** [[Binomial Distribution]], [[Beta Distribution]]
- **Leads to:** [[Overdispersion]], [[Negative Binomial Distribution]], [[Observation-level Random Effect]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What is the beta-binomial distribution?
??
A binomial whose success probability varies among units according to a beta distribution, allowing overdispersion.
++++
