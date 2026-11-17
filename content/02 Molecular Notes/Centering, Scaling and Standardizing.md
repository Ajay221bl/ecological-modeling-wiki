---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - exploration
aliases:
  - "Centering vs scaling vs standardizing"
  - "z-scores"
  - "Rescaling predictors"
status: seedling
---

# Centering, Scaling and Standardizing

> [!summary] In plain words
> centering subtracts the mean so zero means "average", scaling divides by the standard deviation (or two) so units become comparable, and standardizing does both, turning values into z-scores; none changes the fit, but each changes what the coefficients mean and can help model fitting.

## The question
Should I centre or standardise my predictors, and what does it change?

## Built from
- [[Centering]], [[Scaling Predictors]], [[Standardizing]].
- [[Intercept]] and [[Interpreting Regression Coefficients]].
- [[Predicting with Scaled Covariates]].

## The reasoning, step by step
1. **Centering:** x − x̄. The intercept becomes the expected y at the average x, and main effects in interaction models become effects at the average of the other variable.
2. **Scaling:** x / SD. A slope becomes the change in y per SD of x, so predictors in different units can be compared. Gelman suggests dividing by 2 SD to compare with binary predictors.
3. **Standardizing:** (x − x̄) / SD, `scale(x)` in R.
4. **Fit, residuals and predictions are unchanged;** only the parameters are re-expressed.
5. **Mixed models and Bayesian samplers** converge more easily with standardized predictors, and default priors make more sense on that scale.
6. **To predict new data,** apply the same mean and SD you used in fitting.

| | Subtract mean | Divide by SD | Intercept means | Slope means |
|---|---|---|---|---|
| Raw | No | No | y at x = 0 | per unit x |
| Centred | Yes | No | y at mean x | per unit x |
| Scaled | No | Yes | y at x = 0 | per SD of x |
| Standardized | Yes | Yes | y at mean x | per SD of x |
For `mpg ~ wt`, the raw slope is −5.34 per 1,000 lb; standardized it is −5.23 per SD (0.98 thousand lb), and the intercept moves from 37.3 (a weightless car) to 20.1 (the average car).

## So in practice
Centre predictors that have no meaningful zero or appear in interactions; standardize when comparing effect sizes or fitting mixed and Bayesian models.

## In R
```r
m_raw <- lm(mpg ~ wt, mtcars); m_std <- lm(mpg ~ scale(wt), mtcars)
round(rbind(raw = coef(m_raw), std = coef(m_std)), 3); round(c(sd_wt = sd(mtcars$wt), same_fit = all.equal(fitted(m_raw), fitted(m_std))), 3)
```

## What would go wrong otherwise
Predicting from a standardized model by plugging in raw covariate values.

## Explain it back
- Does standardizing change the fitted values?

*Pass test:* you can convert a standardized slope back to raw units.

## Connections
- **Related:** [[Additive vs Interaction Model]], [[Why collinearity inflates standard errors]], [[Treatment vs Sum-to-zero Contrasts]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 04 - Data Exploration|MOC - Data Exploration]], [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]], [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

Centering vs scaling vs standardizing?
??
Subtract the mean; divide by the SD; do both (z-scores).
++++

Does standardizing change predictions?
??
No, only how coefficients are expressed.
++++
