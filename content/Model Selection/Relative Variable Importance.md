---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Summed Akaike weights"
  - "Sum of weights"
  - "Variable importance"
  - "Σw"
  - "RVI"
status: seedling
---

# Relative Variable Importance

**In one line:** relative variable importance is the sum of the Akaike weights of all models that contain a given predictor, once widely used to rank predictors and now criticised as a weak measure.

> [!info] Before this, it helps to know
> [[Akaike Weight]] (what is summed) · [[Balanced Model Set]] (a requirement)

## Start from zero
1. **Σw(x) = sum of wᵢ over models that include x.**
2. **Ranges 0 to 1.** Close to 1 means x appears in all well-supported models.
3. **Requires a balanced model set,** or variables that appear in more models get inflated sums.
4. **Criticisms (Galipaud et al. 2014, Cade 2015):** a pure-noise predictor commonly gets Σw around 0.3 to 0.4, because of uninformative-parameter models. It isn't a measure of effect size. It is sensitive to collinearity.
5. **Better:** report effect sizes with unconditional intervals, and evidence ratios between models with and without the variable.

## In R
```r
set.seed(15); n <- 80; sims <- replicate(200, { x <- rnorm(n); z <- rnorm(n); y <- 0.4 * x + rnorm(n)
  a <- c(AIC(lm(y ~ 1)), AIC(lm(y ~ x)), AIC(lm(y ~ z)), AIC(lm(y ~ x + z))); w <- exp(-(a - min(a)) / 2); w <- w / sum(w); w[3] + w[4] })
round(c(mean_sum_w_for_pure_noise = mean(sims)), 2)
```

## Common confusions
- **"Σw = 0.35 means 35% important."** A noise variable often scores about that much.

## Explain it back
- What property of the model set is needed?

*Pass test:* you can compute Σw and explain its weaknesses.

## Connections
- **Builds on:** [[Akaike Weight]], [[Balanced Model Set]]
- **Leads to:** [[Uninformative Parameters]], [[Effect Size]], [[Conditional vs Full Model Averaging]]
- **Part of:** [[MOC - Model Selection]]

## Flashcards

How is relative variable importance computed?
??
By summing the Akaike weights of all models containing the variable.
++++

Why is summed weight a weak measure of importance?
??
Noise variables commonly receive substantial summed weight, and it reflects inclusion, not effect size.
++++
