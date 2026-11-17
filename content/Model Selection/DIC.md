---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Deviance Information Criterion"
  - "Deviance information criterion (DIC)"
status: seedling
---

# DIC

**In one line:** DIC is an early Bayesian analogue of AIC that adds the posterior mean deviance to an effective number of parameters, DIC = D̄ + pD.

> [!info] Before this, it helps to know
> [[Deviance]] (what is averaged) · [[Effective Number of Parameters]] (its penalty) · [[AIC]] (its model)

## Start from zero
1. **Compute deviance D(θ) = −2 log p(y | θ) at each posterior draw.**
2. **D̄:** the posterior mean deviance.
3. **pD = D̄ − D(θ̄):** the gap between the average deviance and the deviance at the posterior mean.
4. **DIC = D̄ + pD = D(θ̄) + 2pD.**
5. **Smaller is better,** like AIC.
6. **Reported automatically by JAGS and R2jags.** Popular in 2000s ecology papers.
7. **Problems:** pD can be negative. It depends on the parameterisation. It assumes a roughly normal posterior. It handles hierarchical and mixture models poorly.
8. **WAIC and LOO have replaced it** in current practice.

## In R
```r
set.seed(4); y <- rpois(40, 3); lam <- rgamma(4000, 0.01 + sum(y), 0.01 + 40)
D <- sapply(lam, function(l) -2 * sum(dpois(y, l, log = TRUE))); Dbar <- mean(D); Dhat <- -2 * sum(dpois(y, mean(lam), log = TRUE))
c(Dbar = Dbar, pD = Dbar - Dhat, DIC = Dbar + (Dbar - Dhat))           # one parameter: pD close to 1
```

## In the course
[[Hobbs and Hooten 2015 Ch9]] reviews DIC and its problems.

## Common confusions
- **"DIC is the standard Bayesian criterion."** It was. WAIC and LOO are preferred now.

## Explain it back
- Write DIC in terms of D̄ and pD.

*Pass test:* you can compute DIC for a one-parameter model.

## Connections
- **Builds on:** [[Deviance]], [[Effective Number of Parameters]], [[AIC]]
- **Leads to:** [[WAIC]], [[Leave-one-out Cross-validation]], [[JAGS and BUGS]]
- **Part of:** [[MOC - Bayesian Model Selection]]

## Flashcards

What is DIC?
??
D̄ + pD: posterior mean deviance plus the effective number of parameters (pD = D̄ − D(θ̄)).
++++

Why has DIC fallen out of favour?
??
pD can be negative and parameterisation-dependent, and DIC performs poorly for hierarchical and non-normal posteriors.
++++
