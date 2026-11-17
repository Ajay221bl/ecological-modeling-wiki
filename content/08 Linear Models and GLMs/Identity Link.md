---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Identity link function"
  - "No link"
status: seedling
---

# Identity Link

**In one line:** the identity link leaves the mean unchanged, so the mean itself is modeled as a linear function of the predictors.

> [!info] Before this, it helps to know
> [[Link Function]] (the family it belongs to) · [[Linear Regression]] (which uses it)

## The everyday picture
A window with clear glass. What is on one side looks exactly the same from the other.

## Start from zero
1. **g(μ) = μ.** So μ = η.
2. **Default for the normal family.** `glm(y ~ x, family = gaussian)` equals `lm(y ~ x)`.
3. **Coefficients are additive changes in the mean,** in the data's own units.
4. **Nothing stops the mean leaving its allowed range.** With a Poisson or gamma family, an identity link can produce negative fitted means and the fit fails.
5. **When ecologists still use it with other families:** when effects are believed to be additive in real units, and the data stay far from the boundary.

## In R
```r
set.seed(5); x <- runif(50); y <- 2 + 3 * x + rnorm(50)
all.equal(coef(lm(y ~ x)), coef(glm(y ~ x, family = gaussian(link = "identity"))))
```

## Common confusions
- **"Identity link means no GLM."** It is a GLM with the simplest link.

## Explain it back
- What goes wrong with an identity link for counts?

*Pass test:* you can say which model uses it by default.

## Connections
- **Builds on:** [[Link Function]]
- **Leads to:** [[Log Link]], [[Linear Regression]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What is the identity link?
??
g(μ) = μ: the mean is modeled directly as a linear function of predictors.
++++
