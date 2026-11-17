---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Simple linear regression"
  - "Regression"
  - "Linear model"
  - "Regression line"
status: seedling
---

# Linear Regression

**In one line:** linear regression describes how the average of a numeric response changes with a predictor by fitting the straight line that comes closest to the data.

> [!info] Before this, it helps to know
> [[Scatterplot]] (the picture) · [[Linear Function]] (the line) · [[Normal Distribution]] (the scatter around it) · [[Statistical Model]] (what it is an example of)

## The everyday picture
Stretching a taut string through a cloud of points on a scatterplot so that it runs through the middle. The string gives the typical y for each x. The points don't sit on it. They scatter around it.

## A tiny example
Bird richness on 5 plots with tree cover 0, 10, 20, 30, 40%: 12, 11, 9, 8, 5.
- Fitted line: richness = 12.4 − 0.17 × tree cover.
- At 0% cover the line predicts 12.4 species.
- Each extra 1% of cover goes with 0.17 fewer species, so 10% more cover means 1.7 fewer.
- At 20% cover: 12.4 − 3.4 = 9.0. Observed 9. Residual 0.

## Start from zero
1. **Deterministic part:** μᵢ = β₀ + β₁xᵢ. The expected response at xᵢ.
2. **Stochastic part:** yᵢ ~ Normal(μᵢ, σ). Observations scatter around the line with standard deviation σ.
3. **Together:** yᵢ = β₀ + β₁xᵢ + εᵢ, with εᵢ ~ Normal(0, σ).
4. **Three unknowns:** intercept β₀, slope β₁, residual SD σ.
5. **Fitting** finds the β's that make the squared vertical distances from points to line as small as possible ([[Least Squares]]).
6. **Output:** estimates, their standard errors and σ.
7. **Why a straight line:** it is the simplest description of "y changes with x", it is easy to interpret, and over a short range most smooth relationships are nearly straight.
8. **"Linear" refers to the parameters.** y = β₀ + β₁x + β₂x² is still a linear model, because the β's enter by plain adding.

## See it
![[Linear regression anatomy.png|700]]
*What to look at:* the line is the deterministic part, the vertical sticks are residuals and the bell on its side is the normal scatter.

## Why it is this way
Almost every model in this course is this model with one piece changed. Swap the normal for another distribution and add a link: GLM. Add group-level scatter: mixed model. Replace the line with a flexible curve: GAM. Put priors on the β's: Bayesian regression.

## In R
```r
d <- data.frame(tree = c(0, 10, 20, 30, 40), rich = c(12, 11, 9, 8, 5))
m <- lm(rich ~ tree, data = d)
coef(m)                         # intercept 12.4, slope -0.17
round(fitted(m), 1); round(resid(m), 1)
summary(m)$sigma                # residual SD, about 0.61
plot(rich ~ tree, d); abline(m)
```

## In the course
Sep 15 lecture and the linear regression lab ([[Course Website]]). Background: [[Zuur et al. 2009 Appendix A]], [[Zuur et al. 2009 Ch2]].

## Common confusions
- **"Linear means a straight line only."** It means linear in the coefficients. Curves built from x² or log(x) qualify.
- **"Regression shows x causes y."** It describes association. Cause needs design.
- **"The line predicts individual points."** It predicts the mean. Individuals scatter by σ.

## Explain it back
- Write the model in its two parts.
- What are the three parameters?

*Pass test:* you can write the model, name its parameters and interpret a fitted intercept and slope.

## Connections
- **Builds on:** [[Linear Function]], [[Normal Distribution]], [[Statistical Model]]
- **Leads to:** [[Intercept]], [[Slope]], [[Residual]], [[Multiple Regression]], [[Generalized Linear Model]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]], molecular note [[Why every statistical model has a deterministic and a stochastic part]]

## Flashcards

Write the simple linear regression model.
??
yᵢ = β₀ + β₁xᵢ + εᵢ, with εᵢ ~ Normal(0, σ).
![[Linear regression anatomy.png]]
++++

What are the three parameters of simple linear regression?
??
Intercept β₀, slope β₁ and residual standard deviation σ.
++++

What does "linear" mean in "linear model"?
??
The model is a sum of coefficients times terms. The terms themselves may be curved functions of x.
++++
