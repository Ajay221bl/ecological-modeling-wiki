---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Omitted variable bias is the distortion of an estimated effect when a variable that affects the response and is correlated with an included predictor is left out of the model."
aliases:
  - "Omitted-variable bias"
  - "Missing covariate bias"
  - "Left-out variable bias"
status: seedling
---

# Omitted Variable Bias

Ice cream sales predict sunburn, and if you leave sunshine out of the model, ice cream gets the credit for what the sun did. **Omitted variable bias** is the distortion of an estimated effect when a variable that affects the response and is correlated with an included [[Predictor Variable|predictor]] is left out of the model ([[Confounding|Confounding Variable]], [[Multiple Regression]]). Both conditions are needed: the omitted variable affects y, and it is correlated with an included x. Then x's [[Regression Coefficient|coefficient]] absorbs part of its effect, biasing it up or down, and more data does not fix it.

In spatial data an omitted spatially structured covariate shows up as [[Residual Autocorrelation|residual autocorrelation]] (Zuur et al. 2009 Section 7.5) ([[Spatial Autocorrelation]]). The fixes are to measure and include the variable, to design it away by randomisation, or to use random effects or spatial terms as proxies ([[Random Effect]], [[Spatial Smooths]]). In the code below sunburn depends only on sun, and ice cream is correlated with sun: the ice cream slope is 1.05 without sun in the model and 0.00 with it.

It is discussed in [[Zuur et al. 2009 Ch7]] and [[Guthery and Bingham 2007]]. An uncorrelated omitted variable does not bias coefficients; it only adds noise, and bias needs correlation with an included predictor.

```r
set.seed(2); sun <- rnorm(500); ice <- sun + rnorm(500); burn <- 2 * sun + rnorm(500)
round(c(without_sun = coef(lm(burn ~ ice))[2], with_sun = coef(lm(burn ~ ice + sun))[2]), 2)
```

## Connections
- **Builds on:** [[Confounding|Confounding Variable]], [[Multiple Regression]], [[Predictor Variable]], [[Regression Coefficient]]
- **Leads to:** [[Why residual autocorrelation can mean a missing covariate]], [[Collinearity]], [[Residual Autocorrelation]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]], molecular note [[Correlation vs Causation]]

## Flashcards

When does leaving out a variable bias a coefficient?
??
When it affects y and is correlated with an included predictor.
++++
