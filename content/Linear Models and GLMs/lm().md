---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "lm"
  - "Fitting a linear model in R"
status: seedling
---

# lm()

**In one line:** `lm()` is the R function that fits a linear model by least squares from a formula and a data frame.

> [!info] Before this, it helps to know
> [[Model Formula Syntax]] (its first argument) · [[Data Frame]] (its second) · [[Least Squares]] (what it does)

## Start from zero
1. **`m <- lm(y ~ x1 + x2, data = d)`.**
2. **`summary(m)`** prints coefficients, standard errors, t and p values, residual standard error and R².
3. **`coef(m)`, `confint(m)`** extract estimates and 95% intervals.
4. **`fitted(m)`, `resid(m)`** for diagnostics. `plot(m)` draws four diagnostic plots.
5. **`predict(m, newdata)`** for predictions.
6. **`anova(m)`** for sequential F tests. `anova(m1, m2)` compares nested models.
7. **Factors are dummy-coded automatically.**
8. **Rows with missing values are dropped silently.** Check `nobs(m)`.

## In R
```r
m <- lm(mpg ~ wt + factor(cyl), data = mtcars)
round(summary(m)$coefficients, 3)
round(confint(m), 2)
c(nobs = nobs(m), sigma = sigma(m), r2 = summary(m)$r.squared)
```

## In the course
Linear regression lab ([[Course Website]]).

## Common confusions
- **"lm is only for straight lines."** It fits any model that is linear in its coefficients: polynomials, factors, interactions.

## Explain it back
- Which functions extract coefficients, intervals and residuals?

*Pass test:* you can fit a model and pull out each part of the output.

## Connections
- **Builds on:** [[Model Formula Syntax]], [[Least Squares]]
- **Leads to:** [[plot() Diagnostics for lm]], [[predict()]], [[tidy()]], [[Generalized Linear Model]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

Which R function fits a linear model by least squares?
??
lm(formula, data).
++++

Which function gives 95% confidence intervals for lm coefficients?
??
confint().
++++
