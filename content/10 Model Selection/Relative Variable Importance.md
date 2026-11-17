---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "Relative variable importance is the sum of the Akaike weights of all models that contain a given predictor, once widely used to rank predictors and now criticised as a weak measure."
aliases:
  - "Summed Akaike weights"
  - "Sum of weights"
  - "Variable importance"
  - "Σw"
  - "RVI"
status: seedling
---

# Relative Variable Importance

**Relative variable importance** is the sum of the Akaike weights of all models containing a given predictor, Σw(x), ranging from 0 to 1, with close to 1 meaning x appears in all well-supported models ([[Akaike Weight]]). It was once widely used to rank predictors. It requires a [[Balanced Model Set]], or variables appearing in more models get inflated sums.

It is now criticised as a weak measure (Galipaud et al. 2014, Cade 2015). A pure-noise predictor commonly gets Σw around 0.3 to 0.4, because of [[Uninformative Parameters|uninformative-parameter]] models; it isn't a measure of [[Effect Size]]; and it is sensitive to collinearity. In the code below, across 200 simulations a noise variable z in a four-model balanced set gets an average summed weight of 0.38.

Better practice is to report effect sizes with unconditional intervals and evidence ratios between models with and without the variable ([[Conditional vs Full Model Averaging]]). Σw = 0.35 does not mean "35% important": a noise variable often scores about that much.

```r
set.seed(15); n <- 80; sims <- replicate(200, { x <- rnorm(n); z <- rnorm(n); y <- 0.4 * x + rnorm(n)
  a <- c(AIC(lm(y ~ 1)), AIC(lm(y ~ x)), AIC(lm(y ~ z)), AIC(lm(y ~ x + z))); w <- exp(-(a - min(a)) / 2); w <- w / sum(w); w[3] + w[4] })
round(c(mean_sum_w_for_pure_noise = mean(sims)), 2)
```

## Connections
- **Builds on:** [[Akaike Weight]], [[Balanced Model Set]]
- **Leads to:** [[Uninformative Parameters]], [[Effect Size]], [[Conditional vs Full Model Averaging]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

How is relative variable importance computed?
??
By summing the Akaike weights of all models containing the variable.
++++

Why is summed weight a weak measure of importance?
??
Noise variables commonly receive substantial summed weight, and it reflects inclusion, not effect size.
++++
