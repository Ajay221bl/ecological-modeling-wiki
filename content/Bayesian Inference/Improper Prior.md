---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Improper distribution"
  - "Improper flat prior"
status: seedling
---

# Improper Prior

**In one line:** an improper prior is a "prior" whose area is infinite, such as a flat line over all real numbers, so it isn't a real probability distribution.

> [!info] Before this, it helps to know
> [[Proper Prior]] (the contrast) · [[Vague Prior]] (where improper priors come from)

## The everyday picture
Spreading a finite amount of butter over an infinitely long slice of bread. The layer has zero thickness everywhere. A flat prior over the whole number line tries to do that.

## Start from zero
1. **Example:** P(β) ∝ 1 for all β from −∞ to ∞. Area is infinite.
2. **It can still work:** if the likelihood is informative enough, likelihood × prior has finite area and the posterior is proper.
3. **It can fail without warning:** in some models (variance parameters in hierarchical models are the classic case) the posterior is improper too. A sampler will still produce numbers, and they are meaningless.
4. **You can't simulate from an improper prior.**
5. **Stan and brms use improper flat priors by default** for some parameters when you set none. Set proper priors yourself.

## In R
```r
f <- function(b) rep(1, length(b)); sapply(c(10, 1000, 1e5), function(L) integrate(f, -L, L)$value)       # the area grows without limit
```

## Common confusions
- **"If the sampler ran, the posterior exists."** Not necessarily under improper priors.

## Explain it back
- What risk does an improper prior carry?

*Pass test:* you can explain why a flat prior over all reals is improper.

## Connections
- **Builds on:** [[Proper Prior]], [[Vague Prior]]
- **Leads to:** [[Posterior Distribution]], [[Jeffreys Prior]]
- **Part of:** [[MOC - Bayesian Inference]], molecular note [[Proper vs Improper Prior]]

## Flashcards

What is an improper prior?
??
A prior whose integral is infinite, so it is not a valid probability distribution.
++++

What can go wrong with an improper prior?
??
The posterior may also be improper, making the results meaningless even though a sampler returns numbers.
++++
