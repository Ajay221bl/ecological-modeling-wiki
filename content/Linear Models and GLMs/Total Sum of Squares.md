---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "TSS"
  - "SST"
  - "Total variation"
  - "SS total"
status: seedling
---

# Total Sum of Squares

**In one line:** the total sum of squares is Σ(yᵢ − ȳ)², the total variation of the response around its mean before any predictor is used.

> [!info] Before this, it helps to know
> [[Sum of Squares]] · [[Mean]]

## A tiny example
y = 3, 5, 7, mean 5: TSS = 4 + 0 + 4 = 8. A model with RSS = 2 explains 6 of 8, so R² = 0.75.

## Start from zero
1. **It is the RSS of the intercept-only model.**
2. **TSS = explained SS + RSS** for least squares with an intercept.
3. **R² = 1 − RSS / TSS** is the share of TSS explained.
4. **Null deviance** is its GLM counterpart.

## In R
```r
m <- lm(mpg ~ wt, data = mtcars); TSS <- sum((mtcars$mpg - mean(mtcars$mpg))^2); RSS <- sum(resid(m)^2)
c(TSS = TSS, RSS = RSS, R2 = 1 - RSS / TSS, R2_lm = summary(m)$r.squared)
```

## In the course
Linear models unit ([[Course Website]]).

## Common confusions
- **"TSS depends on the model."** It depends only on the response.

## Explain it back
- What model has RSS equal to TSS?

*Pass test:* you can compute TSS and R².

## Connections
- **Builds on:** [[Sum of Squares]], [[Mean]]
- **Leads to:** [[R-squared]], [[Null Deviance]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

What is the total sum of squares?
??
Σ(yᵢ − ȳ)², variation around the mean.
++++

Which model's RSS equals TSS?
??
The intercept-only (null) model.
++++
