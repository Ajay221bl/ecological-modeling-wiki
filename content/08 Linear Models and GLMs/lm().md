---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "`lm()` is the R function that fits a linear model by least squares from a formula and a data frame."
aliases:
  - "lm"
  - "Fitting a linear model in R"
status: seedling
---

# lm()

**`lm()`** is the R function that fits a [[Linear Model|linear model]] by [[Least Squares]]. You give it a formula and a data frame, `m <- lm(y ~ x1 + x2, data = d)`, and it returns a fitted model object ([[Model Formula Syntax]], [[Data Frame]]). From that object you pull everything else. `summary(m)` prints the coefficients with their standard errors, t and p values, the [[Residual Standard Error|residual standard error]] and R². `coef(m)` and `confint(m)` extract estimates and 95% intervals. `fitted(m)` and `resid(m)` give [[Fitted Value|fitted values]] and residuals, and `plot(m)` draws four diagnostic plots ([[plot() Diagnostics for lm]]). `predict(m, newdata)` makes predictions ([[predict()]]). `anova(m)` gives sequential F tests, and `anova(m1, m2)` compares [[Nested Models|nested models]].

The code below fits fuel economy against weight and number of cylinders in the built-in `mtcars` data. Because `factor(cyl)` is a factor, `lm()` dummy-codes it automatically, giving one [[Regression Coefficient|coefficient]] for 6 cylinders and one for 8, each compared with 4. The last line reports the number of observations used, the residual standard error and R².

Two cautions. Rows with any missing value are dropped silently, so check `nobs(m)` against the size of your data. And `lm()` is not only for straight lines: it fits any model that is linear in its coefficients, including polynomials, factors and interactions. Tidy tables of its output come from [[tidy()]], and its extension to non-normal responses is `glm()` ([[Generalized Linear Model]], [[Course Website]]).

```r
m <- lm(mpg ~ wt + factor(cyl), data = mtcars)
round(summary(m)$coefficients, 3)
round(confint(m), 2)
c(nobs = nobs(m), sigma = sigma(m), r2 = summary(m)$r.squared)
```

## Connections
- **Builds on:** [[Model Formula Syntax]], [[Least Squares]], [[Linear Model]], [[Residual Standard Error]], [[Fitted Value]], [[Nested Models]], [[Regression Coefficient]]
- **Leads to:** [[plot() Diagnostics for lm]], [[predict()]], [[tidy()]], [[Generalized Linear Model]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

Which R function fits a linear model by least squares?
??
lm(formula, data).
++++

Which function gives 95% confidence intervals for lm coefficients?
??
confint().
++++
