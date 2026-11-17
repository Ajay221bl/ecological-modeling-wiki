---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "A bounded count is a count that cannot exceed a known maximum, such as seedlings out of seeds sown, and it is modeled as a binomial number of successes out of trials rather than as an open-ended Poisson count."
aliases:
  - "Count with a known maximum"
  - "Successes out of trials"
  - "Binomial count"
  - "Count out of a known total"
  - "Germination count"
status: seedling
---

# Bounded Count

Counting birds that fly past a window has no upper limit; counting how many of 10 coins land heads does. A **bounded count** is a count that cannot exceed a known maximum, the number of trials: seedlings that emerged out of seeds sown, eggs that hatched out of eggs laid, sites occupied out of sites surveyed. It is naturally a binomial number of successes out of n trials ([[Binomial Distribution]]), and the question it answers is about a proportion, the chance each seed becomes a seedling ([[Proportion]]). An open-ended count such as animals passing has no n and is Poisson or negative binomial ([[Count Data]], [[Binomial vs Poisson]]).

In Homework 4 each 4 m² plot was sown with 538 seeds and seedlings were counted in each 1 m² subplot, so each subplot got about 538 / 4 ≈ 134 seeds. If counts are a sizeable share of that, a binomial GLMM with `cbind(seedlings, 134 - seedlings)` respects the ceiling and models establishment probability directly; if counts are far below the ceiling, a Poisson or negative binomial model behaves almost the same and is common ([[GLMM|Generalized Linear Mixed Model]]). Either way, check overdispersion, since seeds in one subplot share soil and predators ([[Overdispersion]], [[Observation-level Random Effect]]).

The ceiling has to be real. Here the seeds were split across subplots by area, not counted into each one, so 134 is an approximation, and natural seeds from nearby plants could push some counts above it. Check the maximum count before choosing; a count above the supposed ceiling means the binomial is wrong.

```r
set.seed(9); n <- 134; p <- c(0.05, 0.2, 0.5)
x <- sapply(p, function(pp) rbinom(5000, n, pp))
dimnames(x) <- NULL; round(rbind(p_percent = p * 100, mean = colMeans(x), var_binomial = apply(x, 2, var), var_if_poisson = colMeans(x)), 1)
```

## Connections
- **Builds on:** [[Binomial Distribution]], [[Proportion]], [[Count Data]]
- **Leads to:** [[GLMM|Generalized Linear Mixed Model]], [[Overdispersion]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]], molecular note [[Homework 4 - Thistle Seedlings and Enemy Release]], [[Binomial vs Poisson]]

## Flashcards

What is a bounded count?
??
A count with a known maximum (the number of trials), such as seedlings out of seeds sown.
++++

Which distribution fits a bounded count?
??
The binomial, successes out of n trials.
++++

How do you write a binomial response with counts in R?
??
cbind(successes, trials - successes).
++++

When does a Poisson model behave like the binomial for a bounded count?
??
When counts are a small fraction of the maximum, so the binomial variance is close to its mean.
++++
