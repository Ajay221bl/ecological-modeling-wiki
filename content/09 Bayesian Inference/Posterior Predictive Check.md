---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "PPC"
  - "Posterior predictive checking"
  - "Posterior predictive checks"
  - "Graphical posterior predictive check"
status: seedling
---

# Posterior Predictive Check

**In one line:** a posterior predictive check simulates replicate datasets from the fitted model and compares them with the real data, on the logic that a good model should generate data that look like what was observed.

> [!info] Before this, it helps to know
> [[Posterior Predictive Distribution]] (where replicates come from) · [[Model Validation]] (the purpose) · [[Test Statistic]] (what may be compared)

## The everyday picture
A forger's test. If the model has really captured how the data arise, its forgeries should be indistinguishable from the original. If you can easily tell the fakes apart (too few zeros, never such large values), you have found what the model is missing.

## Start from zero
1. **Take a posterior draw of the parameters.**
2. **Simulate a complete dataset** of the same size and design: y_rep.
3. **Repeat** for many draws.
4. **Compare y_rep with y.** Overlay densities or histograms. Or compare a summary statistic.
5. **Choose statistics the model wasn't directly fitted to:** the proportion of zeros, the maximum, the variance, the skew. The mean is almost always reproduced and tells you little.
6. **Systematic differences reveal misfit:** real data with more zeros than any replicate means zero inflation. A wider real spread means overdispersion.
7. **In brms:** `pp_check(fit)` overlays densities. `pp_check(fit, type = "stat", stat = "max")` compares one statistic. `type = "bars"` suits counts.
8. **It is the Bayesian counterpart of residual analysis.** DHARMa is built on the same idea.
9. **Limitation:** the data are used twice (to fit and to check), so the check is somewhat lenient.

## See it
![[Posterior predictive check.png|700]]
*What to look at:* left, replicate densities wrap around the observed one. Right, the observed proportion of zeros lies far outside the replicates.

## In R
```r
set.seed(11); y <- rnbinom(200, mu = 4, size = 0.8)                       # overdispersed counts with many zeros
lam <- rgamma(1000, 0.01 + sum(y), 0.01 + 200)                            # posterior of a (wrong) Poisson model
yrep_zero <- sapply(lam, function(l) mean(rpois(200, l) == 0)); yrep_max <- sapply(lam, function(l) max(rpois(200, l)))
c(obs_zero = mean(y == 0), rep_zero = mean(yrep_zero), obs_max = max(y), rep_max = median(yrep_max))       # the Poisson's fakes have far too few zeros and too small a maximum
```

## In the course
`pp_check()` after every brms fit ([[Course Website]]). [[Hobbs and Hooten 2015 Ch8]].

## Common confusions
- **"The check passed on the mean, so the model is fine."** Check features that matter and that the model could get wrong.
- **"A passed check proves the model."** It shows no misfit in the features examined.

## Explain it back
- Why is the mean a poor statistic for a posterior predictive check?

*Pass test:* you can run and interpret a posterior predictive check.

## Connections
- **Builds on:** [[Posterior Predictive Distribution]], [[Model Validation]]
- **Leads to:** [[Bayesian P-value]], [[Prior Predictive Check]], [[DHARMa Simulated Residuals]], [[Overdispersion]], [[pp_check()]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[Prior Predictive vs Posterior Predictive Check]]

## Flashcards

What is a posterior predictive check?
??
Comparing data simulated from the fitted model's posterior predictive distribution with the observed data to detect misfit.
![[Posterior predictive check.png]]
++++

Which statistics are most useful in a posterior predictive check?
??
Features not directly fitted, such as the proportion of zeros, the maximum or the variance.
++++
