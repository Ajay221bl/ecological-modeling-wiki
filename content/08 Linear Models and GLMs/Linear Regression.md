---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Linear regression describes how the average of a numeric response changes with a predictor by fitting the straight line that comes closest to the data."
aliases:
  - "Simple linear regression"
  - "Regression"
  - "Linear model"
  - "Regression line"
status: seedling
---

# Linear Regression

Stretch a taut string through a cloud of points on a [[Scatterplot]] so that it runs through the middle. The string gives the typical y for each x; the points do not sit on it but scatter around it. **Linear regression** describes how the average of a numeric response changes with a predictor by fitting the straight line that comes closest to the data. It has two parts, as every [[Statistical Model]] does. The deterministic part is the line, μᵢ = β₀ + β₁xᵢ, the expected response at xᵢ ([[Linear Function]]). The stochastic part says observations scatter around it: yᵢ ~ Normal(μᵢ, σ) ([[Normal Distribution]]). Together, yᵢ = β₀ + β₁xᵢ + εᵢ. There are three unknowns: the [[Intercept]] β₀, the [[Slope]] β₁ and the residual standard deviation σ.

An example. Bird richness on 5 plots with tree cover 0, 10, 20, 30 and 40% is 12, 11, 9, 8 and 5 species. The fitted line is richness = 12.4 − 0.17 × tree cover. At 0% cover it predicts 12.4 species; each extra 1% of cover goes with 0.17 fewer species, so 10% more cover means 1.7 fewer; at 20% cover it predicts 12.4 − 3.4 = 9.0, exactly what was observed. The line is found by making the squared vertical distances from the points as small as possible ([[Least Squares]]), and the code below fits it with `lm()` and reports a residual SD of about 0.61 species. The figure labels the anatomy: the line is the deterministic part, the vertical sticks are the [[Residual|residuals]], and the bell on its side is the normal scatter.

A straight line is the simplest description of "y changes with x", it is easy to interpret, and over a short range most smooth relationships are nearly straight. Almost every model in the course is this model with one piece changed: swap the normal for another distribution and add a link, and you have a [[Generalized Linear Model]]; add group-level scatter for a mixed model; replace the line with a flexible curve for a GAM; put priors on the β's for Bayesian regression. Adding more predictors gives [[Multiple Regression]]. Three confusions. "Linear" refers to the parameters, not the shape: y = β₀ + β₁x + β₂x² is still a linear model, because the β's enter by plain adding. Regression describes association, and showing that x causes y needs design. And the line predicts the mean, not individual points, which scatter by σ ([[Zuur et al. 2009 Appendix A]], [[Zuur et al. 2009 Ch2]], [[Course Website]]).

![[Linear regression anatomy.png|700]]
*What to look at:* the line is the deterministic part, the vertical sticks are residuals and the bell on its side is the normal scatter.

```r
d <- data.frame(tree = c(0, 10, 20, 30, 40), rich = c(12, 11, 9, 8, 5))
m <- lm(rich ~ tree, data = d)
coef(m)                         # intercept 12.4, slope -0.17
round(fitted(m), 1); round(resid(m), 1)
summary(m)$sigma                # residual SD, about 0.61
plot(rich ~ tree, d); abline(m)
```

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
