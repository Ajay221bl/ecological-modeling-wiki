---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Dispersion"
  - "Scale parameter of a GLM"
status: seedling
---

# Dispersion Parameter

**In one line:** a dispersion parameter is a number in a distribution or model that scales how much the data vary around the mean, separately from the mean itself.

> [!info] Before this, it helps to know
> [[Mean-Variance Relationship]] (what it scales) · [[Variance]] (what it controls) · [[Distribution Parameters]] (it is one)

## The everyday picture
The volume knob for noise. The mean sets the tune. The dispersion parameter sets how much static is laid over it. Some radios (Poisson, binomial) have the knob glued in one position.

## Start from zero
1. **Normal:** σ² is the dispersion. Free and estimated.
2. **Poisson and binomial:** dispersion fixed at 1. The variance is fully set by the mean.
3. **Quasi-Poisson:** variance = φ × mean. φ is estimated, and φ > 1 means overdispersion.
4. **Negative binomial:** variance = μ + μ²/k. Here k (theta, size) is the dispersion parameter, and *small k means more spread*.
5. **Gamma:** dispersion = 1/shape, the squared coefficient of variation.
6. **How φ is estimated in a quasi model:** sum of squared Pearson residuals ÷ residual degrees of freedom.
7. **Why it matters:** if the true dispersion is 4 and the model assumes 1, every standard error is too small by a factor of 2 (√4).
8. **Software differs in its definitions.** glmmTMB, brms and MASS each report it differently for the same family. Read the help page.

## In R
```r
set.seed(21); x <- runif(200); y <- rnbinom(200, mu = exp(1 + x), size = 1.5)
m <- glm(y ~ x, family = poisson)
phi <- sum(resid(m, "pearson")^2) / df.residual(m); phi         # well above 1
summary(glm(y ~ x, family = quasipoisson))$dispersion           # the same number
c(se_poisson = summary(m)$coefficients[2, 2], se_quasi = summary(glm(y ~ x, family = quasipoisson))$coefficients[2, 2], ratio = sqrt(phi))
MASS::glm.nb(y ~ x)$theta                                       # negative binomial's k: near 1.5
```

## In the course
[[Zuur et al. 2009 Ch9]] introduces φ for quasi-Poisson models and k for the negative binomial.

## Common confusions
- **"Dispersion parameter always means the same thing."** φ multiplies the variance. The negative binomial's k divides the extra term.

## Explain it back
- How is φ estimated?
- What does φ = 4 do to standard errors?

*Pass test:* you can compute the Pearson dispersion statistic for a Poisson GLM.

## Connections
- **Builds on:** [[Mean-Variance Relationship]], [[Variance]]
- **Leads to:** [[Overdispersion]], [[Quasi-Poisson]], [[Negative Binomial GLM]], [[Pearson Residuals]]
- **Part of:** [[MOC - Probability and Distributions]]

## Flashcards

What does a dispersion parameter do?
??
Scales the variance of the response relative to what the mean alone would imply.
++++

How is the quasi-Poisson dispersion φ estimated?
??
Sum of squared Pearson residuals divided by the residual degrees of freedom.
++++

What is the dispersion of a Poisson or binomial model?
??
Fixed at 1.
++++
