---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Formula"
  - "Formula Syntax in R"
  - "y ~ x"
  - "Tilde notation"
status: seedling
---

# Model Formula Syntax

**In one line:** a model formula is R's shorthand for a model: the response on the left of `~`, the terms that explain it on the right.

> [!info] Before this, it helps to know
> [[Response Variable]] (left side) · [[Explanatory Variable]] (right side) · [[Linear Regression]] (what it describes)

## The everyday picture
A shopping list for the model. You write what goes in, and R works out the quantities. `birds ~ tree + burn` says "explain birds using tree and burn". You never type the coefficients: estimating them is R's job.

## Start from zero
1. **`~` reads "is modelled by".**
2. **`+` adds a term.** It is not arithmetic.
3. **An intercept is included automatically.** `y ~ 1` is intercept only. `- 1` or `+ 0` removes it.
4. **`a:b` is an interaction. `a * b` means `a + b + a:b`** ([[Interaction Term]]).
5. **`I()` protects real arithmetic:** `I(x^2)`. *Why:* inside a formula `^` and `*` have special meanings.
6. **Functions work inline:** `log(y) ~ scale(x)`.
7. **`(1 | g)` adds a random intercept for group g, `(x | g)` a random slope too** ([[lme4 Random-effect Syntax]]). **`s(x)` adds a smooth** ([[Smoothing Function s()]]). **`offset(log(e))` adds an offset.**

## See it
| Formula | Meaning |
|---|---|
| `y ~ 1` | intercept only |
| `y ~ x` | intercept + slope |
| `y ~ x + z` | two additive effects |
| `y ~ x * z` | both effects and their interaction |
| `y ~ x + I(x^2)` | quadratic |
| `y ~ x + (1 \| site)` | random intercept per site |
| `y ~ s(x)` | smooth of x (mgcv) |

## In R
```r
d <- data.frame(y = c(9, 8, 6, 5, 3, 9, 5, 7), x = c(10, 20, 30, 40, 50, 15, 35, 25), g = rep(c("a", "b"), 4))
names(coef(lm(y ~ x, d)))
names(coef(lm(y ~ x * g, d)))          # x, g and x:g
names(coef(lm(y ~ x + I(x^2), d)))
f <- y ~ x + g; class(f); all.vars(f)  # a formula is an object you can store in a list
update(f, . ~ . - g)                   # drop a term
```
Because formulas are objects, a candidate model set can be a named list of them.

## In the course
Used in every lab. The model selection lab stores hypotheses as a list of formulas ([[Course Website]]).

## Common confusions
- **"`y ~ x + x^2` fits a quadratic."** It doesn't. Use `I(x^2)` or `poly(x, 2)`.
- **"`a * b` multiplies a and b."** It expands to main effects plus interaction.

## Explain it back
- Expand `y ~ a * b`.
- How do you remove the intercept?

*Pass test:* you can translate a model described in words into a formula.

## Connections
- **Builds on:** [[Response Variable]], [[Explanatory Variable]]
- **Leads to:** [[lm()]], [[Interaction Term]], [[lme4 Random-effect Syntax]], [[Model Matrix]]
- **Part of:** [[MOC - R for Ecological Modeling]]

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
