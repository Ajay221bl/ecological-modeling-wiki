---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Omitted-variable bias"
  - "Missing covariate bias"
  - "Left-out variable bias"
status: seedling
---

# Omitted Variable Bias

**In one line:** omitted variable bias is the distortion of an estimated effect when a variable that affects the response and is correlated with an included predictor is left out of the model.

> [!info] Before this, it helps to know
> [[Confounding Variable]] · [[Multiple Regression]]

## The everyday picture
Ice cream sales predict sunburn. Leave out sunshine, and ice cream gets credit for what the sun did.

## Start from zero
1. **Two conditions:** the omitted variable affects y, and it is correlated with an included x.
2. **Then x's coefficient absorbs part of its effect,** biasing it up or down.
3. **More data does not fix it;** the bias stays.
4. **In spatial data,** an omitted spatially structured covariate shows up as residual autocorrelation (Zuur et al. 2009 Section 7.5).
5. **Fixes:** measure and include it, design (randomisation), or use random effects or spatial terms as proxies.

## In R
```r
set.seed(2); sun <- rnorm(500); ice <- sun + rnorm(500); burn <- 2 * sun + rnorm(500)
round(c(without_sun = coef(lm(burn ~ ice))[2], with_sun = coef(lm(burn ~ ice + sun))[2]), 2)
```

## In the course
[[Zuur et al. 2009 Ch7]]. [[Guthery and Bingham 2007]].

## Common confusions
- **"An uncorrelated omitted variable biases coefficients."** It only adds noise; bias needs correlation with an included predictor.

## Explain it back
- What two conditions create omitted variable bias?

*Pass test:* you can predict when leaving out a variable biases an estimate.

## Connections
- **Builds on:** [[Confounding Variable]], [[Multiple Regression]]
- **Leads to:** [[Why residual autocorrelation can mean a missing covariate]], [[Collinearity]]
- **Part of:** [[MOC - Linear Models and GLMs]], molecular note [[Correlation vs Causation]]

## Flashcards

When does leaving out a variable bias a coefficient?
??
When it affects y and is correlated with an included predictor.
++++
