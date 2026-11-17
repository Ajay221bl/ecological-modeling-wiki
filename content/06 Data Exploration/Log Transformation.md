---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "A log transformation replaces each value with its logarithm, which turns multiplying into adding and pulls large values in."
aliases:
  - "Log transform"
  - "log(y)"
  - "log(x + 1)"
status: seedling
---

# Log Transformation

Counting in doublings, going from 1 to 2 is one step and going from 100 to 200 is also one step. On a log ruler, equal steps mean equal *percentage* changes, which is how growth, body size and abundance tend to behave. A **log transformation** replaces each value with its logarithm, usually the [[Natural Logarithm]] (R's `log()`), which turns multiplying into adding and pulls large values in ([[Transformation]]). Body masses of 10, 100, 1,000 and 10,000 g are crushed against zero on the raw scale, but their base-10 logs are 1, 2, 3 and 4, evenly spaced. The way back is the [[Exponential Function]].

Because effects that multiply become effects that add, the log suits biology, where growth, mortality and scaling are proportional processes ([[Multiplicative Effects]]). It reduces right skew and evens out spread that grows with the mean. Interpreting a slope b in a model of log(y) on x: each unit of x multiplies y by e^b, which for small b is about 100·b percent. In the code below b ≈ 0.1, so each unit of x brings about 10% more y. Log both sides and the slope becomes a power-law exponent: a 1% change in x goes with about a b% change in y, the form used for [[Allometry]], as in the crash course's brain and body mass example ([[Course Website]]).

Only positive values are allowed, since log(0) is minus infinity. The common patch, log(y + 1), changes the question, and the answer depends on the arbitrary constant; for counts with zeros, a Poisson or negative binomial GLM with a [[Log Link]] is better. These are not the same model: a linear model of log(y) describes the mean of log y, while a log-link GLM describes the log of the mean of y, and a log-normal response is its own distribution ([[Lognormal Distribution]]).

```r
mass <- c(10, 100, 1000, 10000); log10(mass); log(mass)
set.seed(14); x <- runif(100, 0, 10); y <- exp(1 + 0.1 * x + rnorm(100, 0, 0.2))
b <- coef(lm(log(y) ~ x))[2]; c(slope = b, multiplier = exp(b))     # about 10% more y per unit x
log(0); log(0 + 1)                                                  # why zeros need care
```

## Connections
- **Builds on:** [[Natural Logarithm]], [[Transformation]]
- **Leads to:** [[Log Link]], [[Lognormal Distribution]], [[Allometry]], [[Multiplicative Effects]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What does a log transformation do to multiplicative effects?
??
Turns them into additive effects.
++++

How is slope b interpreted when the response is log-transformed?
??
Each unit of x multiplies the response by e^b.
++++

Why is log(y + 1) discouraged for counts?
??
The added constant is arbitrary and affects results. A count GLM with a log link handles zeros properly.
++++
