---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The `family` argument tells a GLM function which response distribution and link function to use."
aliases:
  - "family ="
  - "Family object"
  - "poisson()"
  - "binomial()"
status: seedling
---

# Family Argument

The **`family` argument** tells a [[glm()|GLM function]] which response distribution and link function to use ([[Generalized Linear Model]], [[Link Function]]). `glm(y ~ x, family = poisson)` sets a [[Poisson Distribution|Poisson distribution]] with its default [[Log Link|log link]], and the link is changed inside the family, as in `binomial(link = "cloglog")` or `Gamma(link = "log")`. Base R's families are `gaussian`, `binomial`, `poisson`, `Gamma`, `inverse.gaussian`, `quasipoisson`, `quasibinomial` and `quasi`. Packages add more: `MASS::glm.nb` for the negative binomial; `nbinom2`, `nbinom1`, `beta_family`, `betabinomial`, `truncated_poisson` and `tweedie` in glmmTMB; `nb`, `betar` and `tw` in mgcv; and `negbinomial`, `Beta`, `zero_inflated_poisson` and many more in brms. Choose by the type of response ([[Choosing a Distribution for Your Response]]).

A family object carries functions: `$linkfun`, `$linkinv` and `$variance`. The code below shows the Poisson family's name and link, its inverse link at 1 (e¹ = 2.72) and its variance at a mean of 5 (5), then the [[Probit Link|probit link]] of 0.975 (1.96), and the default and log links of the Gamma family. These are handy for back-transforming without hard-coding the link ([[Inverse Link Function]]).

Two slips. Forgetting `family` gives a normal model without any warning. And the family is capital-G `Gamma`; lower-case `gamma()` is the [[Gamma Function|gamma function]]. Typical uses are in [[Poisson Regression]], [[Logistic Regression]] and the [[Gamma GLM]].

```r
f <- poisson(); f$family; f$link; f$linkinv(1); f$variance(5)
b <- binomial(link = "probit"); b$linkfun(0.975)
Gamma()$link; Gamma(link = "log")$link
```

## Connections
- **Builds on:** [[Generalized Linear Model]], [[Link Function]], [[glm()]], [[Poisson Distribution]], [[Log Link]], [[Probit Link]], [[Gamma Function]]
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
