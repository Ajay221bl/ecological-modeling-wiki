---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The identity link leaves the mean unchanged, so the mean itself is modeled as a linear function of the predictors."
aliases:
  - "Identity link function"
  - "No link"
status: seedling
---

# Identity Link

A window of clear glass shows things exactly as they are from either side. The **identity link** leaves the mean unchanged, g(μ) = μ, so μ = η and the mean itself is modeled as a linear function of the predictors ([[Link Function]]). It is the default for the normal family, and `glm(y ~ x, family = gaussian)` is the same model as `lm(y ~ x)`, as the code below confirms ([[Linear Regression]]). Its coefficients are additive changes in the mean, in the data's own units.

Nothing stops the mean leaving its allowed range. With a Poisson or gamma family, an identity link can produce negative fitted means, and the fit fails. Ecologists still use it with other families when effects are believed to be additive in real units and the data stay far from the boundary.

An identity link does not mean "no GLM": it is a GLM with the simplest link. The usual alternative for positive data is the [[Log Link]].

```r
set.seed(5); x <- runif(50); y <- 2 + 3 * x + rnorm(50)
all.equal(coef(lm(y ~ x)), coef(glm(y ~ x, family = gaussian(link = "identity"))))
```

## Connections
- **Builds on:** [[Link Function]]
- **Leads to:** [[Log Link]], [[Linear Regression]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What is the identity link?
??
g(μ) = μ: the mean is modeled directly as a linear function of predictors.
++++
