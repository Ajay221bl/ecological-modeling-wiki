---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Deviance residual"
  - "type = \"deviance\""
status: seedling
---

# Deviance Residuals

**In one line:** a deviance residual is the signed square root of one observation's contribution to the deviance, the default residual R reports for GLMs.

> [!info] Before this, it helps to know
> [[Deviance]] (what they add up to) · [[Pearson Residuals]] (the alternative)

## The everyday picture
Splitting a restaurant bill by what each person ordered. The total misfit (deviance) is itemised, with each observation's share shown and given a plus or minus sign for whether it sat above or below its fitted value.

## Start from zero
1. **Each observation contributes dᵢ to the deviance.**
2. **Deviance residual = sign(yᵢ − μ̂ᵢ) × √dᵢ.**
3. **Their squares sum to the residual deviance.**
4. **`resid(m)` returns these by default** for a `glm`.
5. **Usually a little closer to symmetric than Pearson residuals.**
6. **Same weakness for small counts and binary data:** discrete bands that are hard to interpret.

## In R
```r
set.seed(8); x <- runif(100); y <- rpois(100, exp(1 + x)); m <- glm(y ~ x, family = poisson)
rd <- resid(m); c(sum(rd^2), deviance(m))
head(cbind(deviance = rd, pearson = resid(m, type = "pearson")), 4)
```

## Common confusions
- **"`resid()` gives raw residuals for a GLM."** It gives deviance residuals.

## Explain it back
- What do squared deviance residuals sum to?

*Pass test:* you can say which residual type R returns by default.

## Connections
- **Builds on:** [[Deviance]], [[Pearson Residuals]]
- **Leads to:** [[Residual Deviance]], [[Randomized Quantile Residuals]]
- **Part of:** [[MOC - Generalized Linear Models]], molecular note [[Which residuals to use for a GLM]]

## Flashcards

What is a deviance residual?
??
The signed square root of an observation's contribution to the model deviance.
++++

What type of residual does resid() return for a glm by default?
??
Deviance residuals.
++++
