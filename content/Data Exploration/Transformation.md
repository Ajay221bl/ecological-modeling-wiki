---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Data transformation"
  - "Transforming variables"
status: seedling
---

# Transformation

**In one line:** a transformation replaces a variable with a mathematical function of itself, such as its logarithm, before analysis.

> [!info] Before this, it helps to know
> [[Functions in Maths]] (what is applied) · [[Logarithm]] (the commonest choice) · [[Linearity]] (one goal)

## The everyday picture
Changing the ruler. A map of the solar system drawn to scale puts the inner planets in one unreadable clump. Draw it with a ruler whose marks are 1, 10, 100, 1000 and every planet has room. The planets haven't moved. The ruler changed.

## Start from zero
1. **Choose a function:** log, square root, logit, reciprocal.
2. **Apply it to every value** of the response or a predictor.
3. **Fit the model on the new scale.**
4. **Three reasons people transform:** to straighten a curved relationship, to even out the spread, to reduce the pull of extreme values.
5. **The cost:** the model now describes the transformed variable. A slope is per log-unit, and back-transforming a mean does not give the mean on the original scale.
6. **Transforming a predictor is harmless** to the error assumptions and often sensible (log body mass).
7. **Transforming a response is the delicate case.** For counts and proportions, a GLM usually does the same job better: *it changes the scale of the mean through the link function and leaves the data alone*.

## See it
![[Transformation effect.png|700]]
*What to look at:* a curved fan becomes a straight even band on the log scale.

## In R
```r
set.seed(13)
x <- runif(100, 1, 10); y <- exp(0.3 * x + rnorm(100, 0, 0.4))
op <- par(mfrow = c(1, 3)); plot(x, y); plot(x, sqrt(y)); plot(x, log(y)); par(op)
m <- lm(log(y) ~ x); coef(m)                         # slope close to the true 0.3
exp(coef(m)[2])                                      # each unit of x multiplies y by about 1.31
c(mean(y), exp(mean(log(y))))                        # back-transformed mean of logs is NOT the mean
```

## In the course
Zuur's protocol treats transformation as one option when outliers or heterogeneity appear, and prefers changing the model where possible ([[Zuur et al. 2010]]). The lab says to consider it before deleting outliers.

## Common confusions
- **"Transform until the response looks normal."** The aim is a well-behaved relationship and residuals.
- **"Back-transform the mean to get the mean."** exp(mean(log y)) is the geometric mean, smaller than the arithmetic mean.

## Explain it back
- What are three reasons to transform?
- Why is a GLM often preferred to transforming a count?

*Pass test:* you can say what a transformation changes and what it costs.

## Connections
- **Builds on:** [[Functions in Maths]], [[Logarithm]]
- **Leads to:** [[Log Transformation]], [[Square-root Transformation]], [[Link Function]], [[Logit Link|Logit Transformation]]
- **Part of:** [[MOC - Data Exploration]], molecular note [[Transform the data or change the model]]

## Flashcards

What is a transformation?
??
Replacing a variable by a function of itself (log, square root, logit) before analysis.
![[Transformation effect.png]]
++++

What are the three usual aims of transforming?
??
Linearise a relationship, stabilise variance, reduce the influence of extreme values.
++++

What is lost when the response is transformed?
??
Direct interpretation on the original scale. Back-transformed means are not original-scale means.
++++
