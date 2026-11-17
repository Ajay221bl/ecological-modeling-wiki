---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "MLE"
  - "Maximum likelihood"
  - "ML"
  - "Maximum likelihood estimate"
  - "ML estimation"
status: seedling
---

# Maximum Likelihood Estimation

**In one line:** maximum likelihood estimation chooses, as the estimate of a parameter, the value that makes the observed data more probable than any other value would.

> [!info] Before this, it helps to know
> [[Likelihood Function]] (whose peak is sought) · [[Log-likelihood]] (the working scale) · [[Finding a Maximum with Calculus]] (one way to find the peak)

## The everyday picture
Tuning a radio. You turn the dial and listen. At most positions the station is faint. At one position it comes through loudest. You stop there. The dial position is the parameter, the loudness is the likelihood.

## A tiny example
7 successes in 10 trials. Which p makes that most probable? The log-likelihood 7·log(p) + 3·log(1 − p) peaks at p = 7/10. The MLE is the observed proportion.

## Start from zero
1. **Write the log-likelihood of the data as a function of the parameters.**
2. **Find the parameter values where it is highest.**
3. **Sometimes by formula.** Set the derivative to zero and solve. Binomial: p̂ = y/n. Poisson: λ̂ = mean. Normal: μ̂ = mean.
4. **Usually by computer search,** climbing the surface step by step.
5. **The peak's location is the estimate.**
6. **The peak's sharpness gives the standard error.** A sharply curved peak means small changes in the parameter cost a lot of likelihood, so the estimate is precise.
7. **Why it is the default method:** with enough data, ML estimates are close to the truth, about as precise as any method can be, and approximately normal, which gives intervals and tests.
8. **Its caveats:** small samples can give biased estimates (the ML variance divides by n, not n − 1), and it returns a single best value with no use of prior knowledge.
9. **It is what `glm()`, `glmmTMB()` and `lmer(REML = FALSE)` do.**

## See it
![[Likelihood peak.png|700]]
*What to look at:* the estimate is the parameter value under the summit.

## Why it is this way
If one parameter value makes what you saw quite probable and another makes it nearly impossible, it is reasonable to prefer the first. Maximum likelihood turns that intuition into a general recipe that works for any model that assigns probabilities to data.

## In R
```r
ll <- function(p) dbinom(7, 10, p, log = TRUE)
optimize(ll, c(0, 1), maximum = TRUE)$maximum                    # 0.7
set.seed(2); y <- rpois(50, 4.2)
nll <- function(l) -sum(dpois(y, l, log = TRUE)); fit <- optim(3, nll, method = "BFGS", hessian = TRUE)
c(mle = fit$par, mean = mean(y), se = sqrt(1 / fit$hessian), se_formula = sqrt(mean(y) / 50))
exp(coef(glm(y ~ 1, family = poisson)))                          # glm finds the same estimate
```

## In the course
Sep 10 and the likelihood lab ([[Course Website]]). [[Powell and Gale 2015 Ch3]], [[Hobbs and Hooten 2015 Ch4]], [[Zuur et al. 2009 Ch8]].

## Common confusions
- **"The MLE is the most probable parameter value."** It is the value under which the data are most probable.
- **"MLEs are always unbiased."** Not in small samples.

## Explain it back
- What are the two ways of finding an MLE?
- How does the shape of the peak relate to the standard error?

*Pass test:* you can find an MLE numerically and explain what it maximises.

## Connections
- **Builds on:** [[Likelihood Function]], [[Log-likelihood]]
- **Leads to:** [[Numerical Optimization]], [[Hessian Matrix]], [[Least Squares]], [[Likelihood Ratio Test]], [[Maximum a Posteriori Estimate]]
- **Part of:** [[MOC - Likelihood and Estimation]], molecular note [[Least Squares vs Maximum Likelihood]]

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
