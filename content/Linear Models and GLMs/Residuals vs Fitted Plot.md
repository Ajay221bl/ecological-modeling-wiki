---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Residual plot"
  - "Residuals against fitted values"
  - "Fitted-residual plot"
status: seedling
---

# Residuals vs Fitted Plot

**In one line:** a residuals-versus-fitted plot puts each observation's fitted value on the horizontal axis and its residual on the vertical axis, to reveal what the model has missed.

> [!info] Before this, it helps to know
> [[Residual]] (y-axis) · [[Fitted Value]] (x-axis) · [[Linear Model Assumptions]] (what it checks)

## The everyday picture
Looking at the dust left after sweeping. If the floor is evenly clean, the broom did its job. A line of dust along one wall or a pile in a corner shows exactly where the sweeping failed.

## Start from zero
1. **Ideal:** a shapeless horizontal band centred on zero.
2. **A curve:** the mean structure is wrong (non-linearity).
3. **A funnel:** the variance changes with the mean (heteroscedasticity).
4. **Isolated points far from zero:** outliers.
5. **Diagonal stripes:** the response is discrete (counts). Normal for count data.
6. **Why fitted values on the x-axis:** it works for any number of predictors, since it summarises them in one dimension.
7. **Also plot residuals against each predictor, against predictors left out, against time and against location.** Patterns there point to missing terms or dependence.

## See it
![[Residual patterns.png|700]]
*What to look at:* four panels showing the good case, a curve, a funnel and an outlier.

## In R
```r
set.seed(2); x <- runif(150, 1, 10)
good <- lm(I(2 + x + rnorm(150)) ~ x); funnel <- lm(I(2 + x + rnorm(150, 0, 0.4 * x)) ~ x)
op <- par(mfrow = c(1, 2)); plot(fitted(good), resid(good)); abline(h = 0); plot(fitted(funnel), resid(funnel)); abline(h = 0); par(op)
plot(good, which = 1)            # R's built-in version with a smoother
```

## In the course
The first plot inspected in every lab ([[Course Website]]). [[Zuur et al. 2009 Ch2]].

## Common confusions
- **"Plot residuals against the observed response."** That always shows a trend, even for a perfect model. Use fitted values.

## Explain it back
- What do a curve and a funnel each indicate?

*Pass test:* you can diagnose the four standard patterns.

## Connections
- **Builds on:** [[Residual]], [[Fitted Value]]
- **Leads to:** [[plot() Diagnostics for lm]], [[Linearity]], [[Heteroscedasticity]], [[DHARMa Simulated Residuals]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

What should a residuals-versus-fitted plot look like for an adequate model?
??
A patternless horizontal band of roughly constant width centred on zero.
![[Residual patterns.png]]
++++

What does a funnel shape in this plot indicate?
??
Variance that changes with the fitted value (heteroscedasticity).
++++
