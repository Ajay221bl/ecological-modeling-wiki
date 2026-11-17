---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Overdispersed"
  - "Extra-Poisson variation"
  - "Overdispersed counts"
status: seedling
---

# Overdispersion

**In one line:** overdispersion means the data vary more than the model's distribution allows, as when counts have a variance much greater than their mean under a Poisson model.

> [!info] Before this, it helps to know
> [[Mean-Variance Relationship]] (the rule that is broken) · [[Poisson Regression]] (where it is commonest) · [[Dispersion Parameter]] (how it is measured)

## The everyday picture
A weather forecaster who says "10 mm of rain, give or take 3" every day. If actual rainfall on such days ranges from 0 to 40, the forecast's average may be right but its stated uncertainty is far too small. Decisions made on that false confidence will go wrong.

## A tiny example
Counts with fitted mean about 5. A Poisson expects a variance of about 5. You observe a variance of 22. Dispersion ≈ 4.4.

## Start from zero
1. **Poisson: variance must equal the mean.** Binomial: variance must be np(1 − p).
2. **Real data often scatter more.**
3. **Detect:** dispersion statistic = Σ(Pearson residual²) / residual df. About 1 is fine. Above roughly 1.5 to 2 deserves action. Or use simulated residuals.
4. **Consequence:** the coefficient estimates are roughly fine, but the *standard errors are too small* by a factor of √dispersion. P-values are too small. You'll declare effects that aren't there.
5. **Apparent causes (fix the mean model first):** a missing predictor, a missing interaction or nonlinearity, outliers, the wrong link.
6. **Real causes:** animals clump, sites differ in unmeasured ways, observations are grouped, there are excess zeros.
7. **Remedies:** negative binomial. Quasi-Poisson. An observation-level random effect. Random effects for the grouping. A zero-inflated model.
8. **Single 0/1 outcomes can't be overdispersed.** Grouped binomial data can.

## See it
![[Overdispersion.png|700]]
*What to look at:* both panels have the same mean trend, but the right-hand scatter is far wider than the Poisson band.

## In R
```r
set.seed(17); x <- runif(200); y <- rnbinom(200, mu = exp(1 + 1 * x), size = 1.2)        # clumped counts
m <- glm(y ~ x, family = poisson)
sum(resid(m, "pearson")^2) / df.residual(m)                         # dispersion well above 1
se_p <- summary(m)$coefficients[2, 2]; se_nb <- summary(MASS::glm.nb(y ~ x))$coefficients[2, 2]; c(poisson_se = se_p, negbin_se = se_nb)
set.seed(18); mean(replicate(500, { yy <- rnbinom(200, mu = exp(1), size = 1.2); summary(glm(yy ~ x, family = poisson))$coefficients[2, 4] < 0.05 }))    # false-positive rate far above 5%
```

## In the course
A main theme of the count GLM lab ([[Course Website]]). [[Zuur et al. 2009 Ch9]], [[Harrison et al. 2018]], [[Anderson and Burnham 2002]] (ĉ and QAIC).

## Common confusions
- **"Overdispersion biases the coefficients."** Mainly it falsifies their precision.
- **"Residual deviance / df is the test."** It is a rough guide. The Pearson statistic or simulation is better, especially with small counts.

## Explain it back
- What does overdispersion do to p-values, and why?
- List four remedies.

*Pass test:* you can compute a dispersion statistic and choose a remedy.

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
