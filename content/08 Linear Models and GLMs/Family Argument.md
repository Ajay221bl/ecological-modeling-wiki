---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "family ="
  - "Family object"
  - "Error family"
  - "poisson()"
  - "binomial()"
status: seedling
---

# Family Argument

**In one line:** the `family` argument tells a GLM function which response distribution and link function to use.

> [!info] Before this, it helps to know
> [[Generalized Linear Model]] (what it configures) · [[Link Function]] (half of what it sets) · [[Choosing a Distribution for Your Response]] (how to pick)

## Start from zero
1. **`glm(y ~ x, family = poisson)`** sets a Poisson distribution with its default log link.
2. **Change the link inside the family:** `binomial(link = "cloglog")`, `Gamma(link = "log")`.
3. **Base R families:** `gaussian`, `binomial`, `poisson`, `Gamma`, `inverse.gaussian`, `quasipoisson`, `quasibinomial`, `quasi`.
4. **More in packages:** `MASS::glm.nb` (negative binomial). `glmmTMB`: `nbinom2`, `nbinom1`, `beta_family`, `betabinomial`, `truncated_poisson`, `tweedie`. `mgcv`: `nb`, `betar`, `tw`. `brms`: `negbinomial`, `Beta`, `zero_inflated_poisson` and many more.
5. **A family object carries functions:** `$linkfun`, `$linkinv`, `$variance`. Handy for back-transforming without hard-coding the link.
6. **Forgetting `family` gives a normal model** without any warning.

## In R
```r
f <- poisson(); f$family; f$link; f$linkinv(1); f$variance(5)
b <- binomial(link = "probit"); b$linkfun(0.975)
Gamma()$link; Gamma(link = "log")$link
```

## Common confusions
- **"`Gamma` and `gamma` are interchangeable."** The family is capital-G `Gamma`. `gamma()` is the gamma function.

## Explain it back
- What happens if you omit `family` in `glm()`?

*Pass test:* you can specify a family and a non-default link.

## Connections
- **Builds on:** [[Generalized Linear Model]], [[Link Function]]
- **Leads to:** [[Poisson Regression]], [[Logistic Regression]], [[Gamma GLM]], [[Inverse Link Function]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What does the family argument of glm() specify?
??
The response distribution and its link function.
++++

How do you fit a gamma GLM with a log link?
??
glm(y ~ x, family = Gamma(link = "log")).
++++
