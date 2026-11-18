---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A deviance residual is the signed square root of one observation's contribution to the deviance, the default residual R reports for GLMs."
aliases:
  - "Deviance residual"
  - "type = \"deviance\""
status: seedling
---

# Deviance Residuals

Splitting a restaurant bill by what each person ordered itemises the total. A **deviance residual** itemises a GLM's total misfit: it is the signed [[Square Root|square root]] of one observation's contribution dᵢ to the [[Deviance]], sign(yᵢ − μ̂ᵢ) × √dᵢ, with a plus or minus for whether the observation sat above or below its [[Fitted Value|fitted value]]. Their squares sum to the [[Residual Deviance]], which the code below confirms.

`resid(m)` returns deviance residuals by default for a `glm`, not [[Response Residuals|raw residuals]]. They do much the same job as [[Pearson Residuals]] and are usually a little closer to symmetric; the code prints the two types side by side for the first few observations.

They share the same weakness for small counts and binary data: discrete bands that are hard to interpret. For those cases use [[Randomized Quantile Residuals]].

```r
set.seed(8); x <- runif(100); y <- rpois(100, exp(1 + x)); m <- glm(y ~ x, family = poisson)
rd <- resid(m); c(sum(rd^2), deviance(m))
head(cbind(deviance = rd, pearson = resid(m, type = "pearson")), 4)
```

## Connections
- **Builds on:** [[Deviance]], [[Pearson Residuals]], [[Square Root]], [[Fitted Value]], [[Response Residuals]]
- **Leads to:** [[Residual Deviance]], [[Randomized Quantile Residuals]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], molecular note [[Which residuals to use for a GLM]]

## Flashcards

What is a deviance residual?
??
The signed square root of an observation's contribution to the model deviance.
++++

What type of residual does resid() return for a glm by default?
??
Deviance residuals.
++++
