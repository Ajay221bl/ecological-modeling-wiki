---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "τ"
  - "tau"
  - "Inverse variance"
status: seedling
---

# Precision Parameter

**In one line:** precision is one divided by the variance, so a high precision means a narrow distribution.

> [!info] Before this, it helps to know
> [[Variance]] (what it inverts) · [[Standard Deviation]] (the scale you think in) · [[Normal Distribution]] (where it appears)

## The everyday picture
The sharpness of a photograph. Variance measures blur. Precision is the same information stated as sharpness: little blur, high sharpness.

## Start from zero
1. **τ = 1/σ².**
2. **σ = 1/√τ.**
3. **Why it exists:** the algebra of normal models is tidier in precision, and the gamma distribution is a conjugate prior for it.
4. **BUGS and JAGS write normals with precision:** `dnorm(mu, tau)`. A "vague" `dnorm(0, 0.001)` means variance 1000, sd about 32.
5. **Stan, brms and R use the standard deviation:** `normal(mu, sigma)`, `dnorm(x, mean, sd)`.
6. **Mixing them up is a classic error.** `dnorm(0, 0.001)` read as sd 0.001 is an extremely tight prior.
7. **Other uses of the word:** the φ of beta regression is also called a precision, and "precision" in the everyday sense means low sampling variability.

## In R
```r
tau <- 0.001; c(variance = 1 / tau, sd = 1 / sqrt(tau))
sigma <- 2.5; 1 / sigma^2
```

## In the course
[[Hobbs and Hooten 2015 Ch5]] and later chapters write JAGS code with precisions.

## Common confusions
- **"dnorm(0, 0.001) is the same everywhere."** In JAGS the second argument is precision. In R and Stan it is sd.

## Explain it back
- Convert a precision of 4 to a standard deviation.

*Pass test:* you can convert both ways and know which software uses which.

## Connections
- **Builds on:** [[Variance]], [[Standard Deviation]]
- **Leads to:** [[JAGS and BUGS]], [[Bias and Precision]], [[Conjugate Prior]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

How is precision related to variance?
??
Precision τ = 1/σ².
++++

Which software parameterises the normal by precision?
??
BUGS and JAGS. (Stan, brms and R use the standard deviation.)
++++
