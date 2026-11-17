---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Design matrix"
  - "X matrix"
  - "model.matrix()"
status: seedling
---

# Model Matrix

**In one line:** the model matrix is the table of numbers a model actually works with: one row per observation and one column per coefficient.

> [!info] Before this, it helps to know
> [[Matrix]] (its form) · [[Dummy Coding]] (how factors enter) · [[Matrix Notation for Models]] (y = Xβ + ε)

## The everyday picture
The spreadsheet behind a recipe calculator. Every row is one cake. Every column is one ingredient amount. Multiply each column by its coefficient, add across the row and you get that cake's predicted height.

## Start from zero
1. **Column 1 is all 1s:** the intercept.
2. **Numeric predictors appear as they are.**
3. **Factors appear as dummy columns.**
4. **Interactions appear as products of columns.**
5. **Prediction = X %*% β.** Each row's values times the coefficients, summed.
6. **`model.matrix(formula, data)` shows it.**
7. **Why look at it:** it shows exactly how R has coded your factors and interactions, which settles most "what does this coefficient mean" puzzles.
8. **Why you need it later:** predicting by hand from a mixed or Bayesian model is `X %*% β` with a new-data matrix.

## In R
```r
d <- data.frame(tree = c(5, 20, 40, 10), burn = factor(c("no", "no", "yes", "yes")))
X <- model.matrix(~ tree * burn, d); X
beta <- c(12, -0.05, 3, -0.15); X %*% beta          # predictions by hand
```

## In the course
Used in the mixed-model labs to compute predictions and intervals by hand ([[Course Website]]). [[Zuur et al. 2009 Ch5]].

## Common confusions
- **"It is my data frame."** It is the numeric translation of the right-hand side of your formula.

## Explain it back
- What does each column of the model matrix correspond to?

*Pass test:* you can build a model matrix and multiply it by coefficients.

## Connections
- **Builds on:** [[Matrix]], [[Dummy Coding]]
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
