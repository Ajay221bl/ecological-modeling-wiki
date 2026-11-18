---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Maximum likelihood estimation chooses, as the estimate of a parameter, the value that makes the observed data more probable than any other value would."
aliases:
  - "MLE"
  - "Maximum likelihood"
  - "ML"
  - "Maximum likelihood estimate"
  - "ML estimation"
status: seedling
---

# Maximum Likelihood Estimation

[[Tuning Parameter|Tuning]] a radio, you turn the dial and listen: at most positions the station is faint, at one it comes through loudest, and you stop there. **Maximum likelihood estimation** (MLE) chooses as the estimate of a parameter the value that makes the observed data more probable than any other value would: the peak of the [[Likelihood Function]]. Write the [[Log-likelihood]] of the data as a function of the parameters and find where it is highest. Sometimes there is a formula: set the derivative to zero and solve ([[Finding a Maximum with Calculus]]). For 7 successes in 10 trials, the log-likelihood 7·log(p) + 3·log(1 − p) peaks at p = 7/10, the observed proportion; for a Poisson the MLE is the [[Mean|sample mean]], and for a normal mean, the sample mean. Usually the peak is found by computer search ([[Numerical Optimization]]).

The peak's location is the estimate, and its sharpness gives the [[Standard Error|standard error]]: a sharply curved peak means small changes in the parameter cost a lot of likelihood, so the estimate is precise ([[Hessian Matrix]]). The code below finds p = 0.7 with `optimize()`, then fits a Poisson mean to 50 counts with `optim()`: the estimate equals the sample mean, the standard error from the curvature matches the formula √(λ̂/n), and `glm()` finds the same estimate. The figure marks the estimate under the summit.

The reasoning is simple: if one parameter value makes what you saw quite probable and another makes it nearly impossible, prefer the first. Maximum likelihood turns that into a recipe for any model that assigns probabilities to data, and with enough data its estimates are close to the truth, about as precise as any method can be, and approximately normal, which gives intervals and tests ([[Likelihood Ratio Test]]). It is what `glm()`, `glmmTMB()` and `lmer(REML = FALSE)` do, and for normal errors it gives the same answer as [[Least Squares]] ([[Powell and Gale 2015 Ch3]], [[Hobbs and Hooten 2015 Ch4]], [[Zuur et al. 2009 Ch8]], [[Course Website]]). Two confusions. The MLE is not the most probable parameter value; it is the value under which the data are most probable. And MLEs are not always unbiased: in small samples they can be, as the ML variance divides by n rather than n − 1. It also uses no prior knowledge; adding a prior and taking the peak gives the [[Maximum a Posteriori Estimate]].

![[Likelihood peak.png|700]]
*What to look at:* the estimate is the parameter value under the summit.

```r
ll <- function(p) dbinom(7, 10, p, log = TRUE)
optimize(ll, c(0, 1), maximum = TRUE)$maximum                    # 0.7
set.seed(2); y <- rpois(50, 4.2)
nll <- function(l) -sum(dpois(y, l, log = TRUE)); fit <- optim(3, nll, method = "BFGS", hessian = TRUE)
c(mle = fit$par, mean = mean(y), se = sqrt(1 / fit$hessian), se_formula = sqrt(mean(y) / 50))
exp(coef(glm(y ~ 1, family = poisson)))                          # glm finds the same estimate
```

## Connections
- **Builds on:** [[Likelihood Function]], [[Log-likelihood]], [[Mean]], [[Standard Error]]
- **Leads to:** [[Numerical Optimization]], [[Hessian Matrix]], [[Least Squares]], [[Likelihood Ratio Test]], [[Maximum a Posteriori Estimate]], [[Tuning Parameter]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]], molecular note [[Least Squares vs Maximum Likelihood]]

## Flashcards

What does maximum likelihood estimation do?
??
Finds the parameter values that maximise the probability of the observed data under the model.
![[Likelihood peak.png]]
++++

What is the MLE of a binomial probability?
??
The observed proportion, y/n.
++++

How is the standard error obtained in maximum likelihood?
??
From the curvature of the log-likelihood at its peak: sharper curvature, smaller SE.
++++
