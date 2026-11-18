---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The total sum of squares is Σ(yᵢ − ȳ)², the total variation of the response around its mean before any predictor is used."
aliases:
  - "TSS"
  - "SST"
  - "Total variation"
  - "SS total"
status: seedling
---

# Total Sum of Squares

The **total sum of squares** (TSS) is Σ(yᵢ − ȳ)², the total variation of the response around its mean before any [[Predictor Variable|predictor]] is used ([[Sum of Squares]], [[Mean]]). For y = 3, 5 and 7, with mean 5, TSS = 4 + 0 + 4 = 8. It is the RSS of the [[Null Model|intercept-only model]], and its GLM counterpart is the null deviance ([[Deviance]]).

For [[Least Squares|least squares]] with an intercept, TSS = explained SS + RSS, and R² = 1 − RSS / TSS is the share of TSS explained ([[Residual Sum of Squares]], [[R-squared]]). A model with RSS = 2 on the data above explains 6 of 8, so R² = 0.75. In the code below `mtcars$mpg` has TSS 1,126.0 and `lm(mpg ~ wt)` leaves RSS 278.3, so R² = 0.753, matching `summary(m)$r.squared`.

It belongs to the [[Linear Model|linear models]] unit ([[Course Website]]). TSS does not depend on the model; it depends only on the response.

```r
m <- lm(mpg ~ wt, data = mtcars); TSS <- sum((mtcars$mpg - mean(mtcars$mpg))^2); RSS <- sum(resid(m)^2)
c(TSS = TSS, RSS = RSS, R2 = 1 - RSS / TSS, R2_lm = summary(m)$r.squared)
```

## Connections
- **Builds on:** [[Sum of Squares]], [[Mean]], [[Predictor Variable]], [[Least Squares]], [[Linear Model]]
- **Leads to:** [[R-squared]], [[Null Deviance]], [[Null Model]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What is the total sum of squares?
??
Σ(yᵢ − ȳ)², variation around the mean.
++++

Which model's RSS equals TSS?
??
The intercept-only (null) model.
++++
