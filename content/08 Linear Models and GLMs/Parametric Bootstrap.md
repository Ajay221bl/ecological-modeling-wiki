---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A parametric bootstrap estimates uncertainty by simulating many new datasets from the fitted model, refitting the model to each and looking at the spread of the results."
aliases:
  - "Parametric bootstrapping"
  - "Simulation-based inference"
  - "simulate()"
status: seedling
---

# Parametric Bootstrap

Rehearse an experiment in a simulator built to your best blueprint of reality, run it a thousand times, and see how much the result jumps around. A **parametric bootstrap** estimates uncertainty that way: simulate many new datasets from the fitted model, refit the model to each, and look at the spread of the results. Fit the model and take its estimates as the truth for now; simulate a new response vector from it, the same size and with the same [[Predictor Variable|predictors]] ([[Simulating Data]]); refit the model to the simulated data and record the quantity of interest ([[Maximum Likelihood Estimation]]); repeat many times. The spread of the recorded values estimates its uncertainty.

It differs from the ordinary [[Bootstrap]] in that new data come from the model's distributions rather than from resampling rows. In the code below, a [[Poisson Regression|Poisson regression]] is refitted to 1,000 datasets made with `simulate()`; the [[Standard Deviation|standard deviation]] of the 1,000 slopes matches the model's own [[Standard Error|standard error]], and their 2.5% and 97.5% quantiles give an interval ([[Percentile Bootstrap Interval]]).

Its advantage is that it handles complicated structures, such as [[Random Effect|random effects]] and correlation, that row resampling would break, which is why `lme4::bootMer()` and `confint(method = "boot")` use it in the mixed-model labs ([[bootMer()]], [[Harrison et al. 2018]], [[Course Website]]). It also gives [[Likelihood Ratio|likelihood ratio]] tests a simulated null distribution, and it is the engine of [[DHARMa Simulated Residuals]] and, in Bayesian form, of the [[Posterior Predictive Check]]. Its cost is that it is only as good as the model: if the model is wrong, the simulated variation is wrong too. So it is not assumption-free; it leans on the model more than any other interval method.

```r
set.seed(14); x <- runif(60, 0, 10); y <- rpois(60, exp(0.5 + 0.15 * x)); m <- glm(y ~ x, family = poisson)
boot <- replicate(1000, coef(glm(simulate(m)[[1]] ~ x, family = poisson))[2])
c(estimate = coef(m)[[2]], boot_se = sd(boot), model_se = summary(m)$coefficients[2, 2]); quantile(boot, c(0.025, 0.975))
```

## Connections
- **Builds on:** [[Bootstrap]], [[Simulating Data]], [[Predictor Variable]], [[Poisson Regression]], [[Standard Deviation]], [[Standard Error]], [[Likelihood Ratio]]
- **Leads to:** [[bootMer()]], [[Percentile Bootstrap Interval]], [[DHARMa Simulated Residuals]], [[Posterior Predictive Check]], [[Random Effect]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

What is a parametric bootstrap?
??
Simulating new datasets from the fitted model, refitting each time, and using the spread of results to quantify uncertainty.
++++

What is its main weakness?
??
It assumes the fitted model is correct.
++++
