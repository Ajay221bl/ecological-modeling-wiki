---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A residual is the difference between what was observed and what the model fitted for that observation."
aliases:
  - "Residuals"
  - "Raw residual"
  - "resid()"
  - "eᵢ"
status: seedling
---

# Residual

Measure the gap from each point straight up or down to the fitted string. A point above the string has a positive gap: the model under-predicted it. A **residual** is that gap, the difference between what was observed and what the model fitted: eᵢ = yᵢ − ŷᵢ ([[Fitted Value]]). With 8 species observed and 7.3 fitted, the residual is 8 − 7.3 = +0.7. For the five bird plots the residuals are −0.4, 0.3, 0, 0.7 and −0.6; in a least-squares fit with an intercept they always sum to zero, which the code below shows. Each vertical stick in the figure is one residual.

Residuals are the data's leftovers after the model has taken what it can explain, and they are the key diagnostic. If the model is right, they should look like patternless noise of constant spread. Any pattern, such as a curve, a funnel, clumps by site or runs in time, is information the model missed ([[Residuals vs Fitted Plot]]). Their [[Standard Deviation|standard deviation]] estimates σ, the [[Residual Standard Error]].

Two confusions. A residual is not the same as the error: the [[Error Term]] is the distance from the unknown true line, the residual the distance from the estimated line, so residuals are estimates of the unseen errors. And small residuals do not mean a correct model: an [[Overfitting|overfitted model]] has tiny residuals and poor predictions. For [[Generalized Linear Model|GLMs]], [[Response Residuals|raw residuals]] are rescaled into [[Pearson Residuals]] so their spread can be judged.

![[Linear regression anatomy.png|700]]
*What to look at:* each vertical stick is one residual.

```r
d <- data.frame(tree = c(0, 10, 20, 30, 40), rich = c(12, 11, 9, 8, 5))
m <- lm(rich ~ tree, d); round(resid(m), 2); sum(resid(m))
d$rich - fitted(m)
```

## Connections
- **Builds on:** [[Fitted Value]], [[Standard Deviation]], [[Overfitting]], [[Generalized Linear Model]], [[Response Residuals]]
- **Leads to:** [[Error Term]], [[Residuals vs Fitted Plot]], [[Residual Standard Error]], [[Pearson Residuals]]
- **See also:** [[Linear Regression]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What is a residual?
??
Observed value minus fitted value.
![[Linear regression anatomy.png]]
++++

What does a pattern in the residuals indicate?
??
Structure in the data that the model has not captured.
++++
