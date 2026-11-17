---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A model formula is R's shorthand for a model: the response on the left of `~`, the terms that explain it on the right."
aliases:
  - "Formula"
  - "Formula Syntax in R"
  - "y ~ x"
  - "Tilde notation"
status: seedling
---

# Model Formula Syntax

A shopping list for a model: you write what goes in, and R works out the quantities. A **model formula** is R's shorthand for a model, with the [[Response Variable]] on the left of `~` and the terms that explain it ([[Explanatory Variable]]) on the right. `birds ~ tree + burn` reads "birds is modelled by tree and burn". You never type the coefficients; estimating them is R's job ([[Linear Regression]]).

The symbols have special meanings inside a formula. `~` means "is modelled by"; `+` adds a term, not arithmetic; an intercept is included automatically, so `y ~ 1` is an intercept-only model and `- 1` or `+ 0` removes it. `a:b` is an interaction, and `a * b` is shorthand for `a + b + a:b` ([[Interaction Term]]). Because `^` and `*` are taken, real arithmetic must be protected with `I()`: `y ~ x + x^2` does *not* fit a quadratic, while `y ~ x + I(x^2)` (or `poly(x, 2)`) does. Functions work inline, as in `log(y) ~ scale(x)`. Packages extend the language: `(1 | g)` adds a random intercept for group g and `(x | g)` a random slope as well ([[lme4 Random-effect Syntax]]); `s(x)` adds a smooth ([[Smoothing Function s()]]); `offset(log(e))` adds an offset. The table summarises the common forms, and the code shows the coefficient names each one produces.

A formula is an object in its own right: it can be stored, inspected with `all.vars()`, and edited with `update()`, as in `update(f, . ~ . - g)`, which drops a term. That is why the model selection lab can keep a set of hypotheses as a named list of formulas and fit them all at once ([[Course Website]]). Behind every formula, R builds a [[Model Matrix]] with one column per coefficient, and [[lm()]] and every other modeling function in the course take a formula as their first argument.

| Formula | Meaning |
|---|---|
| `y ~ 1` | intercept only |
| `y ~ x` | intercept + slope |
| `y ~ x + z` | two additive effects |
| `y ~ x * z` | both effects and their interaction |
| `y ~ x + I(x^2)` | quadratic |
| `y ~ x + (1 \| site)` | random intercept per site |
| `y ~ s(x)` | smooth of x (mgcv) |

```r
d <- data.frame(y = c(9, 8, 6, 5, 3, 9, 5, 7), x = c(10, 20, 30, 40, 50, 15, 35, 25), g = rep(c("a", "b"), 4))
names(coef(lm(y ~ x, d)))
names(coef(lm(y ~ x * g, d)))          # x, g and x:g
names(coef(lm(y ~ x + I(x^2), d)))
f <- y ~ x + g; class(f); all.vars(f)  # a formula is an object you can store in a list
update(f, . ~ . - g)                   # drop a term
```
Because formulas are objects, a candidate model set can be a named list of them.

## Connections
- **Builds on:** [[Response Variable]], [[Explanatory Variable]]
- **Leads to:** [[lm()]], [[Interaction Term]], [[lme4 Random-effect Syntax]], [[Model Matrix]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What does ~ mean in an R formula?
??
"Is modelled by": response on the left, explanatory terms on the right.
++++

What does y ~ a * b expand to?
??
y ~ a + b + a:b, both main effects and their interaction.
++++

Why write I(x^2) in a formula?
??
Without I(), the ^ symbol is interpreted as formula syntax for interactions, not arithmetic.
++++
