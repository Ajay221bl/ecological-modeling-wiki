---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "DHARMa residuals are quantile residuals obtained by simulating many new datasets from the fitted model and recording where each real observation ranks among its simulated counterparts."
aliases:
  - "DHARMa"
  - "Residual Diagnostics with DHARMa"
  - "simulateResiduals()"
  - "Simulation-based residuals"
  - "Scaled quantile residuals"
status: seedling
---

# DHARMa Simulated Residuals

To check a model of loaded dice by play, roll the model 250 times for each real throw and see where the real throw ranks among them; if the model is right, real throws rank anywhere from bottom to top equally often. **DHARMa residuals** are quantile residuals made that way. Simulate, say, 250 new responses from the fitted model for every observation ([[Simulating Data|Simulation]]); each observation's residual is the fraction of its simulations below the observed value, with randomisation for ties ([[Randomized Quantile Residuals]]). 0.5 means dead centre, and near 0 or 1 means the observation is extreme for the model. If the model is right, the residuals are uniform on 0 to 1, not normal.

`plot()` on the result gives two panels: a Q-Q plot against the uniform with tests for uniformity, dispersion and outliers, and residuals against ranked fitted values with quantile lines that should be flat at 0.25, 0.5 and 0.75. Extra tests include `testDispersion()`, `testZeroInflation()`, `testSpatialAutocorrelation()` and `testTemporalAutocorrelation()`. The code below, which is not run in the wiki build because the package is not installed there, fits a Poisson model to overdispersed counts: the Q-Q plot bends into an S and the dispersion test flags the problem ([[Overdispersion]], [[Zero Inflation]]).

It works with `glm`, `lme4`, `glmmTMB`, `mgcv` and more, which is why it is the standard for mixed models, where classical residuals are hard to interpret; Harrison and colleagues recommend it, and the GLM and mixed-model labs use it ([[Harrison et al. 2018]], [[Course Website]], [[Model Validation]]). With large n its tests flag trivial departures, so a significant DHARMa test does not mean the model is unusable: look at the plots and the size of the deviation, not only the p-values. Its Bayesian cousin is the [[Posterior Predictive Check]].

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
