---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The model matrix is the table of numbers a model actually works with: one row per observation and one column per coefficient."
aliases:
  - "Design matrix"
  - "X matrix"
  - "model.matrix()"
status: seedling
---

# Model Matrix

Behind a recipe calculator sits a spreadsheet: each row is one cake, each column one ingredient amount; multiply each column by its [[Regression Coefficient|coefficient]], add across the row, and you have that cake's predicted height. The **model matrix**, or design matrix X, is that table for a model: one row per observation and one column per coefficient ([[Matrix]]). Column 1 is all 1s, for the intercept. Numeric [[Predictor Variable|predictors]] appear as they are, factors appear as dummy columns ([[Dummy Coding]]), and interactions appear as products of columns. Prediction is X %*% β: each row's values times the coefficients, summed ([[Matrix Notation for Models]], [[Linear Predictor]]).

In the code below, four plots with tree cover and a burn factor give a model matrix with columns for the intercept, tree, burnyes and tree:burnyes; the interaction column is tree × burnyes, so it is zero for unburned plots. Multiplying by coefficients 12, −0.05, 3 and −0.15 gives the four predictions by hand. `model.matrix(formula, data)` shows it for any formula.

Look at it whenever a coefficient's meaning is unclear: it shows exactly how R has coded your factors and interactions, which settles most puzzles. It is also what you need later, because predicting by hand from a mixed or Bayesian model is `X %*% β` with a matrix built from new data, as the mixed-model labs do ([[Predicting New Data]], [[Zuur et al. 2009 Ch5]], [[Course Website]]). It is not your [[Data Frame|data frame]]: it is the numeric translation of the right-hand side of your formula.

```r
d <- data.frame(tree = c(5, 20, 40, 10), burn = factor(c("no", "no", "yes", "yes")))
X <- model.matrix(~ tree * burn, d); X
beta <- c(12, -0.05, 3, -0.15); X %*% beta          # predictions by hand
```

## Connections
- **Builds on:** [[Matrix]], [[Dummy Coding]], [[Regression Coefficient]], [[Predictor Variable]], [[Data Frame]]
- **Leads to:** [[Matrix Notation for Models]], [[Predicting New Data]], [[Linear Predictor]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What is a model (design) matrix?
??
A matrix with one row per observation and one column per coefficient, holding the numeric values of each model term.
++++

How are predictions computed from it?
??
Multiply the matrix by the coefficient vector: X β.
++++
