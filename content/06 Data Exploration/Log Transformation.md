---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Log transform"
  - "log(y)"
  - "log(x + 1)"
status: seedling
---

# Log Transformation

**In one line:** a log transformation replaces each value with its logarithm, which turns multiplying into adding and pulls large values in.

> [!info] Before this, it helps to know
> [[Natural Logarithm]] (the function) · [[Transformation]] (the general idea) · [[Exponential Function]] (the way back)

## The everyday picture
Counting in doublings. From 1 to 2 is one step. From 100 to 200 is also one step. On the log ruler, equal steps mean equal percentage changes, which is how growth, body size and abundance tend to behave.

## A tiny example
Body masses 10 g, 100 g, 1000 g, 10 000 g. On the raw scale the first three are crushed against zero. Their base-10 logs are 1, 2, 3, 4: evenly spaced.

## Start from zero
1. **Take log of each value** (natural log by default in R).
2. **Only positive values allowed.** log(0) is minus infinity.
3. **Effects that multiply become effects that add.** *This is the reason it suits biology:* growth, mortality and scaling are proportional processes.
4. **Right skew is reduced** and spread that grows with the mean is evened out.
5. **Interpreting a slope b in log(y) ~ x:** each unit of x multiplies y by e^b. For small b, that is about 100·b percent.
6. **Log both sides** and the slope is a power-law exponent: a 1% change in x goes with a b% change in y.
7. **Zeros are the snag.** log(y + 1) is a patch whose results depend on the arbitrary constant. For counts with zeros use a Poisson or negative binomial GLM with a log link.

## In R
```r
mass <- c(10, 100, 1000, 10000); log10(mass); log(mass)
set.seed(14); x <- runif(100, 0, 10); y <- exp(1 + 0.1 * x + rnorm(100, 0, 0.2))
b <- coef(lm(log(y) ~ x))[2]; c(slope = b, multiplier = exp(b))     # about 10% more y per unit x
log(0); log(0 + 1)                                                  # why zeros need care
```

## In the course
The crash course log-transforms brain and body mass to show the allometric relationship ([[Course Website]]).

## Common confusions
- **"log(y + 1) solves zeros."** It changes the question and the answer depends on the 1.
- **"A log-transformed linear model equals a log-link GLM."** The first models the mean of log y. The second models the log of the mean of y.

## Explain it back
- How do you read a slope of 0.2 when the response is logged?

*Pass test:* you can interpret a log-scale slope as a multiplier.

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
