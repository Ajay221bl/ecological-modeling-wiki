---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "Tweedie"
  - "tw()"
  - "Compound Poisson-gamma"
status: seedling
---

# Tweedie Distribution

**In one line:** the Tweedie distribution covers non-negative continuous data with a lump of exact zeros, such as biomass or catch weight, by mixing a Poisson number of gamma-distributed amounts.

> [!info] Before this, it helps to know
> [[Gamma Distribution]] · [[Poisson Distribution]] · [[Zero-inflated Model]]

## Start from zero
1. **Variance = φ μᵖ with 1 < p < 2** in the compound Poisson-gamma range.
2. **p near 1:** Poisson-like. p near 2: gamma-like.
3. **Story:** the number of fish caught is Poisson; each fish's weight is gamma; total weight is Tweedie, with zero when no fish are caught.
4. **mgcv:** `family = tw()` estimates p. glmmTMB also offers `tweedie()`.
5. **An alternative to hurdle models** for positive continuous data with zeros.

## In R
```r
set.seed(25); n <- 1e4; k <- rpois(n, 1.2); w <- sapply(k, function(i) sum(rgamma(i, 2, 1)))
round(c(prop_zero = mean(w == 0), expected_zero = exp(-1.2), mean = mean(w)), 3)
```

## In the course
Not in the in-scope labs. Included because GAM examples often use it for biomass.

## Common confusions
- **"Zeros need a zero-inflated model."** A Tweedie handles exact zeros naturally.

## Explain it back
- What story generates a Tweedie variable?

*Pass test:* you can say when to use tw().

## Connections
- **Builds on:** [[Gamma Distribution]], [[Poisson Distribution]], [[Zero-inflated Model]]
- **Leads to:** [[Generalized Additive Model]], [[Hurdle Model]]
- **Part of:** [[MOC - GAMs]]

## Flashcards

What data suit a Tweedie distribution?
??
Non-negative continuous data with exact zeros, such as biomass.
++++
