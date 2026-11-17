---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Overdispersion means the data vary more than the model's distribution allows, as when counts have a variance much greater than their mean under a Poisson model."
aliases:
  - "Overdispersed"
  - "Extra-Poisson variation"
  - "Overdispersed counts"
status: seedling
---

# Overdispersion

A forecaster who says "10 mm of rain, give or take 3" every day, when actual rainfall on such days ranges from 0 to 40, may have the average right but states far too little uncertainty, and decisions made on that false confidence go wrong. **Overdispersion** means the data vary more than the model's distribution allows, as when counts have a variance much greater than their mean under a Poisson model ([[Mean-Variance Relationship]], [[Poisson Regression]]). For counts with a fitted mean of about 5, a Poisson expects a variance of about 5; if you see 22, the dispersion is about 4.4. Detect it with the dispersion statistic, Σ(Pearson residual²) / residual df: about 1 is fine, and above roughly 1.5 to 2 deserves action ([[Dispersion Parameter]]). Simulated residuals also show it. The figure compares the same mean trend with scatter inside and far outside the Poisson band.

The consequence is that coefficient estimates are roughly fine, but the standard errors are too small by a factor of √dispersion, so p-values are too small and you declare effects that are not there. In the code below, clumped counts fitted with a Poisson give a dispersion well above 1 and a smaller standard error than the negative binomial does. The last line simulates data with no effect at all and finds the Poisson GLM's false-positive rate far above 5%.

Some causes are apparent and should be fixed in the mean model first: a missing predictor, a missing interaction or nonlinearity, outliers, or the wrong link. Others are real: animals clump, sites differ in unmeasured ways, observations are grouped, or there are excess zeros. The remedies are a [[Negative Binomial GLM]], [[Quasi-Poisson]], an [[Observation-level Random Effect]], random effects for the grouping, or a model for [[Zero Inflation]] ([[Zuur et al. 2009 Ch9]], [[Harrison et al. 2018]], [[Course Website]]). Anderson and Burnham handle it in model selection with ĉ and QAIC ([[Anderson and Burnham 2002]]). Single 0/1 outcomes cannot be overdispersed, though grouped binomial data can. Overdispersion mainly falsifies the precision of the coefficients rather than biasing them, and residual deviance / df is only a rough guide, with the Pearson statistic or simulation better for small counts. The opposite problem is [[Underdispersion]].

![[Overdispersion.png|700]]
*What to look at:* both panels have the same mean trend, but the right-hand scatter is far wider than the Poisson band.

```r
set.seed(17); x <- runif(200); y <- rnbinom(200, mu = exp(1 + 1 * x), size = 1.2)        # clumped counts
m <- glm(y ~ x, family = poisson)
sum(resid(m, "pearson")^2) / df.residual(m)                         # dispersion well above 1
se_p <- summary(m)$coefficients[2, 2]; se_nb <- summary(MASS::glm.nb(y ~ x))$coefficients[2, 2]; c(poisson_se = se_p, negbin_se = se_nb)
set.seed(18); mean(replicate(500, { yy <- rnbinom(200, mu = exp(1), size = 1.2); summary(glm(yy ~ x, family = poisson))$coefficients[2, 4] < 0.05 }))    # false-positive rate far above 5%
```

## Connections
- **Builds on:** [[Mean-Variance Relationship]], [[Poisson Regression]]
- **Leads to:** [[Negative Binomial GLM]], [[Quasi-Poisson]], [[Observation-level Random Effect]], [[Zero Inflation]], [[Underdispersion]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], molecular note [[What to do about overdispersion]]

## Flashcards

What is overdispersion?
??
More variability in the data than the assumed distribution predicts, such as count variance exceeding the mean under a Poisson model.
![[Overdispersion.png]]
++++

What is the main consequence of ignoring overdispersion?
??
Standard errors are too small, so p-values and intervals are overconfident.
++++

Name three remedies for overdispersed counts.
??
Negative binomial, quasi-Poisson, observation-level random effect (also zero-inflated models or adding missing structure).
++++
