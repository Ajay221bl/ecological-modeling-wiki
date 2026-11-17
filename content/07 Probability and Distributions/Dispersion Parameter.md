---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "A dispersion parameter is a number in a distribution or model that scales how much the data vary around the mean, separately from the mean itself."
aliases:
  - "Dispersion"
  - "Scale parameter of a GLM"
status: seedling
---

# Dispersion Parameter

Think of a radio. The mean sets the tune, and a separate knob sets how much static is laid over it. On some radios that knob is glued in one position. A **dispersion parameter** is that knob: a number in a distribution or model that scales how much the data vary around the mean, separately from the mean itself ([[Distribution Parameters]], [[Variance]]). In the normal, σ² is the dispersion, free and estimated. In the Poisson and binomial it is fixed at 1, so the variance is fully set by the mean ([[Mean-Variance Relationship]]). A [[Quasi-Poisson]] model frees it: variance = φ × mean, with φ > 1 meaning overdispersion. In the negative binomial, variance = μ + μ²/k, and k (theta, size) plays the role, with *small* k meaning more spread. In the gamma, dispersion = 1/shape, the squared coefficient of variation.

In a quasi model φ is estimated as the sum of squared [[Pearson Residuals]] divided by the residual degrees of freedom. The code below simulates overdispersed counts, fits a Poisson GLM, and computes φ by hand; it matches the dispersion `quasipoisson` reports. It matters because if the true dispersion is 4 and the model assumes 1, every standard error is too small by a factor of √4 = 2, and the code shows the quasi-Poisson standard error is larger than the Poisson one by exactly √φ. Fitting the same data with `MASS::glm.nb()` recovers k close to the true 1.5 ([[Negative Binomial GLM]], [[Zuur et al. 2009 Ch9]]).

The trap is that "dispersion parameter" does not always mean the same thing. φ multiplies the variance, while the negative binomial's k divides the extra term, so a big φ and a small k both mean more spread. Software differs too: glmmTMB, brms and MASS each report it differently for the same family, so read the help page before interpreting the number. It is the main tool for handling [[Overdispersion]].

```r
set.seed(21); x <- runif(200); y <- rnbinom(200, mu = exp(1 + x), size = 1.5)
m <- glm(y ~ x, family = poisson)
phi <- sum(resid(m, "pearson")^2) / df.residual(m); phi         # well above 1
summary(glm(y ~ x, family = quasipoisson))$dispersion           # the same number
c(se_poisson = summary(m)$coefficients[2, 2], se_quasi = summary(glm(y ~ x, family = quasipoisson))$coefficients[2, 2], ratio = sqrt(phi))
MASS::glm.nb(y ~ x)$theta                                       # negative binomial's k: near 1.5
```

## Connections
- **Builds on:** [[Mean-Variance Relationship]], [[Variance]]
- **Leads to:** [[Overdispersion]], [[Quasi-Poisson]], [[Negative Binomial GLM]], [[Pearson Residuals]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

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
