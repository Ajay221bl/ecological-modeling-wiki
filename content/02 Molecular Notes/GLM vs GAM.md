---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - gam
aliases: []
status: seedling
---

# GLM vs GAM

> [!summary] In plain words
> a GLM assumes each predictor's effect is a straight line on the link scale, while a GAM lets the data decide each effect's shape, paying for that flexibility with more effective parameters and less simple summaries.

## The question
When should I switch from a GLM to a GAM?

## Built from
- [[Generalized Linear Model]] and [[Generalized Additive Model]].
- [[Effective Degrees of Freedom]]: the cost of flexibility.
- [[Polynomial|Polynomial Regression]]: the old middle ground.
- [[Partial Effect Plots]]: how GAM results are read.

## The reasoning, step by step
1. **Same families and links;** a GAM is a GLM with smooth terms.
2. **Signs a GLM is too rigid:** curved residual patterns against a predictor, biological reasons for thresholds or optima, poor fit despite the right family.
3. **A GAM tells you** whether curvature is needed (edf near 1 means no).
4. **Interpretation:** GLM gives one slope per predictor. GAM gives a curve to plot.
5. **Hypothesis tests on shape** are easier in a GLM (is the quadratic term needed?). GAMs answer "what shape?"
6. **Extrapolation:** both are risky; GAMs especially.

| | GLM | GAM |
|---|---|---|
| Predictor effect | β × x | f(x), smooth |
| Shape chosen by | Analyst | Data (with penalty) |
| Summary | Slope and SE | edf, plot, test of the smooth |
| Parameters | Few | More (effective) |
| R | `glm()` | `mgcv::gam()` |

**A worked example in numbers.** in the GAM note's example (Poisson counts with a sine-shaped effect), AIC was 849 for the GLM and 746 for the GAM, whose smooth used 5.9 effective degrees of freedom.

## So in practice
Plot residuals against each predictor after a GLM. If curves appear, refit with s() and compare.

## What would go wrong otherwise
Adding x², x³ and x⁴ to a GLM until the curve fits instead of using a penalised smooth.

## Explain it back
- What edf suggests a straight line is enough?

*Pass test:* you can choose and justify GLM or GAM.

## Connections
- **Related:** [[Polynomial vs Spline]], [[Linear Model vs GLM]], [[GAM Workflow in R]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 15 - GAMs|MOC - GAMs]], [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What does a GAM add to a GLM?
??
Smooth functions of predictors whose shape is estimated from the data.
++++
