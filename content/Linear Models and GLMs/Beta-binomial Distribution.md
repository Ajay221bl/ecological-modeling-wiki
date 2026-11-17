---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Beta-binomial"
  - "Beta-binomial model"
  - "Overdispersed binomial"
status: seedling
---

# Beta-binomial Distribution

**In one line:** the beta-binomial distribution describes successes out of n trials when the success probability itself varies from unit to unit, giving more spread than a plain binomial.

> [!info] Before this, it helps to know
> [[Binomial Distribution]] (the base) · [[Beta Distribution]] (how p varies) · [[Mixture Distribution]] (the construction) · [[Overdispersion]] (what it handles)

## The everyday picture
Litters of pups. In one litter the mother is healthy and nearly all survive. In another she is ill and nearly all die. Survival within a litter is tied together, so litters are more "all or nothing" than independent coin flips per pup would give.

## Start from zero
1. **Each unit has its own p,** drawn from a beta distribution.
2. **Given that p, successes are binomial.**
3. **Averaged over units,** counts are more variable than Binomial(n, mean p).
4. **Extra parameter:** how much p varies between units.
5. **It is to the binomial what the negative binomial is to the Poisson.**
6. **Use it for** overdispersed proportions: survival within broods, germination within pots.
7. **In R:** `glmmTMB(cbind(y, n - y) ~ x, family = betabinomial())`.

## In R
```r
set.seed(14); n <- 10; p_i <- rbeta(5000, 2, 2); y_bb <- rbinom(5000, n, p_i); y_b <- rbinom(5000, n, 0.5)
c(var_betabinomial = var(y_bb), var_binomial = var(y_b)); round(table(y_bb) / 5000, 2)      # far more spread, with 0s and 10s that a plain binomial would almost never give
```

## In the course
[[Harrison et al. 2018]] recommends it, or observation-level random effects, for overdispersed binomial data.

## Common confusions
- **"Overdispersed proportions need a transformation."** They need a distribution with an extra variance parameter.

## Explain it back
- What does the beta-binomial add to the binomial?

*Pass test:* you can explain the analogy with the negative binomial.

## Connections
- **Builds on:** [[Binomial Distribution]], [[Beta Distribution]]
- **Leads to:** [[Overdispersion]], [[Negative Binomial Distribution]], [[Observation-level Random Effect]]
- **Part of:** [[MOC - Generalized Linear Models]]

## Flashcards

What is the beta-binomial distribution?
??
A binomial whose success probability varies among units according to a beta distribution, allowing overdispersion.
++++
