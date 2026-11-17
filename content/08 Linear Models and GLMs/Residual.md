---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Residuals"
  - "Raw residual"
  - "resid()"
  - "eᵢ"
status: seedling
---

# Residual

**In one line:** a residual is the difference between what was observed and what the model fitted for that observation.

> [!info] Before this, it helps to know
> [[Fitted Value]] (what is subtracted) · [[Linear Regression]] (the model)

## The everyday picture
The gap between each point and the string, measured straight up or down. A point above the string has a positive residual. The model under-predicted it.

## A tiny example
Observed 8 species, fitted 7.3. Residual = 8 − 7.3 = +0.7.

## Start from zero
1. **eᵢ = yᵢ − ŷᵢ.** Observed minus fitted.
2. **Positive:** the observation is above the line.
3. **In a least-squares fit with an intercept they sum to zero.**
4. **They are the data's leftover after the model has taken what it can explain.**
5. **They are estimates of the unseen errors εᵢ.**
6. **Why they are the key diagnostic:** if the model is right, the residuals should look like patternless noise of constant spread. Any pattern (a curve, a funnel, clumps by site, runs in time) is information the model missed.
7. **Their SD estimates σ.**

## See it
![[Linear regression anatomy.png|700]]
*What to look at:* each vertical stick is one residual.

## In R
```r
d <- data.frame(tree = c(0, 10, 20, 30, 40), rich = c(12, 11, 9, 8, 5))
m <- lm(rich ~ tree, d); round(resid(m), 2); sum(resid(m))
d$rich - fitted(m)
```

## Common confusions
- **"Residual and error are the same."** The error is the distance from the unknown true line. The residual is the distance from the estimated line.
- **"Small residuals mean a correct model."** An overfitted model has tiny residuals and poor predictions.

## Explain it back
- What should residuals look like if the model is adequate?

*Pass test:* you can compute residuals and say what patterns in them mean.

## Connections
- **Builds on:** [[Fitted Value]]
- **Leads to:** [[Error Term]], [[Residuals vs Fitted Plot]], [[Residual Standard Error]], [[Pearson Residuals]]
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
