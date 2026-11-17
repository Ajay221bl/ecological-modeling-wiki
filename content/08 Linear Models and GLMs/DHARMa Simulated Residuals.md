---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "DHARMa"
  - "Residual Diagnostics with DHARMa"
  - "simulateResiduals()"
  - "Simulation-based residuals"
  - "Scaled quantile residuals"
status: seedling
---

# DHARMa Simulated Residuals

**In one line:** DHARMa residuals are quantile residuals obtained by simulating many new datasets from the fitted model and recording where each real observation ranks among its simulated counterparts.

> [!info] Before this, it helps to know
> [[Randomized Quantile Residuals]] (what they are) · [[Simulating Data|Simulation]] (how they are computed) · [[Model Validation]] (their purpose)

## The everyday picture
Checking loaded dice by play. You have a model of the dice. Roll your model 250 times for each throw and see where the real throw ranks among them. If the model is right, real throws rank anywhere from bottom to top equally often.

## Start from zero
1. **Simulate** (say 250) new responses from the fitted model for every observation.
2. **For each observation, the residual is the fraction of simulations below the observed value** (with randomisation for ties).
3. **0.5 means dead centre.** Near 0 or 1 means the observation is extreme for the model.
4. **If the model is right the residuals are uniform on 0 to 1.**
5. **`plot()` gives two panels:** a Q-Q plot against the uniform, with tests for uniformity, dispersion and outliers. And residuals against (ranked) fitted values with quantile lines that should be flat at 0.25, 0.5 and 0.75.
6. **Extra tests:** `testDispersion()`, `testZeroInflation()`, `testSpatialAutocorrelation()`, `testTemporalAutocorrelation()`.
7. **Works with** `glm`, `lme4`, `glmmTMB`, `mgcv` and more. This is why it is the standard for mixed models, where classical residuals are hard to interpret.
8. **With large n the tests flag trivial departures.** Look at the plots and the size of the deviation, not only the p-values.

## In R
```r
# norun (the DHARMa package is not installed in the wiki's build environment)
library(DHARMa)
set.seed(10); x <- runif(300); y <- rnbinom(300, mu = exp(1 + x), size = 1)
m_pois <- glm(y ~ x, family = poisson)
res <- simulateResiduals(m_pois, n = 250)
plot(res)                     # S-shaped Q-Q plot: overdispersion
testDispersion(res); testZeroInflation(res)
plotResiduals(res, x)         # residuals against a predictor
```

## In the course
Used for model checking in the GLM and mixed model labs ([[Course Website]]). Recommended by [[Harrison et al. 2018]].

## Common confusions
- **"A significant DHARMa test means the model is unusable."** With big data tiny misfits are significant. Judge the size.
- **"DHARMa residuals should be normal."** Uniform by default.

## Explain it back
- How is one DHARMa residual computed?
- What should the Q-Q panel look like?

*Pass test:* you can run DHARMa on a model and interpret both panels.

## Connections
- **Builds on:** [[Randomized Quantile Residuals]], [[Simulating Data|Simulation]]
- **Leads to:** [[Model Validation]], [[Overdispersion]], [[Zero Inflation]], [[Posterior Predictive Check]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], molecular note [[Which residuals to use for a GLM]]

## Flashcards

How does DHARMa compute residuals?
??
It simulates many datasets from the fitted model and takes each observation's quantile among its simulated values.
++++

What distribution should DHARMa residuals follow if the model is correct?
??
Uniform between 0 and 1.
++++
