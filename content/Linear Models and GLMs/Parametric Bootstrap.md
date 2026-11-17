---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Parametric bootstrapping"
  - "Simulation-based inference"
  - "simulate()"
status: seedling
---

# Parametric Bootstrap

**In one line:** a parametric bootstrap estimates uncertainty by simulating many new datasets from the fitted model, refitting the model to each and looking at the spread of the results.

> [!info] Before this, it helps to know
> [[Bootstrap]] (the resampling idea) · [[Simulating Data]] (the engine) · [[Maximum Likelihood Estimation]] (repeated each time)

## The everyday picture
Rehearsing an experiment in a simulator built to your best blueprint of reality. Run the simulated experiment a thousand times and see how much the result jumps around.

## Start from zero
1. **Fit the model.** Take its estimates as the truth for now.
2. **Simulate a new response vector** from the fitted model, same size and predictors.
3. **Refit the model** to the simulated data. Record the quantity of interest.
4. **Repeat many times.**
5. **The spread of the recorded values estimates its uncertainty.**
6. **Difference from the ordinary bootstrap:** new data come from the model's distributions, not from resampling rows.
7. **Advantage:** it handles complicated structures (random effects, correlation) that row resampling would break.
8. **Cost:** it is only as good as the model. If the model is wrong, the simulated variation is wrong too.
9. **Uses:** intervals for mixed-model parameters and predictions, likelihood ratio tests with a simulated null distribution, DHARMa residuals.

## In R
```r
set.seed(14); x <- runif(60, 0, 10); y <- rpois(60, exp(0.5 + 0.15 * x)); m <- glm(y ~ x, family = poisson)
boot <- replicate(1000, coef(glm(simulate(m)[[1]] ~ x, family = poisson))[2])
c(estimate = coef(m)[[2]], boot_se = sd(boot), model_se = summary(m)$coefficients[2, 2]); quantile(boot, c(0.025, 0.975))
```

## In the course
`lme4::bootMer()` and `confint(method = "boot")` in the mixed-model labs ([[Course Website]]; [[Harrison et al. 2018]]).

## Common confusions
- **"It is assumption-free."** It leans on the model more than any other interval method.

## Explain it back
- How does it differ from the nonparametric bootstrap?

*Pass test:* you can run a parametric bootstrap with `simulate()` and refitting.

## Connections
- **Builds on:** [[Bootstrap]], [[Simulating Data]]
- **Leads to:** [[bootMer()]], [[Percentile Bootstrap Interval]], [[DHARMa Simulated Residuals]], [[Posterior Predictive Check]]
- **Part of:** [[MOC - Likelihood and Estimation]]

## Flashcards

What is a parametric bootstrap?
??
Simulating new datasets from the fitted model, refitting each time, and using the spread of results to quantify uncertainty.
++++

What is its main weakness?
??
It assumes the fitted model is correct.
++++
