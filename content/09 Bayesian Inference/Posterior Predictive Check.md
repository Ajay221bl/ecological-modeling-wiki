---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A posterior predictive check simulates replicate datasets from the fitted model and compares them with the real data, on the logic that a good model should generate data that look like what was observed."
aliases:
  - "PPC"
  - "Posterior predictive checking"
  - "Posterior predictive checks"
  - "Graphical posterior predictive check"
status: seedling
---

# Posterior Predictive Check

If a forger has really mastered a painter's style, their forgeries should be indistinguishable from the originals; if you can easily tell the fakes apart, you have found what they missed. A **posterior predictive check** applies that test to a model: simulate replicate datasets, y_rep, from the fitted model and compare them with the real data, on the logic that a good model should generate data that look like what was observed ([[Posterior Predictive Distribution]], [[Model Validation]]). Take a posterior draw of the parameters, simulate a complete dataset of the same size and design, repeat for many draws, and compare, by overlaying densities or histograms or by comparing a summary statistic ([[Test Statistic]]).

Choose statistics the model wasn't directly fitted to, such as the proportion of zeros, the maximum, the variance or the skew; the mean is almost always reproduced and tells you little. Systematic differences reveal misfit: real data with more zeros than any replicate mean zero inflation, and a wider real spread means [[Overdispersion]]. In the figure, replicate densities wrap around the observed one on the left, while on the right the observed proportion of zeros lies far outside the replicates. In the code below, overdispersed counts with 18% zeros and a maximum of 29 are fitted with a Poisson model, whose replicates have only 2% zeros and a typical maximum of 10. In brms `pp_check(fit)` overlays densities, `type = "stat", stat = "max"` compares one statistic and `type = "bars"` suits counts ([[pp_check()]]); a [[Bayesian P-value]] puts the comparison in one number.

It is the Bayesian counterpart of residual analysis, and [[DHARMa Simulated Residuals]] are built on the same idea; it is run after every brms fit in the labs ([[Course Website]], [[Hobbs and Hooten 2015 Ch8]]). Because the data are used twice, to fit and to check, the check is somewhat lenient. A check passed on the mean doesn't mean the model is fine, so check features that matter and that the model could get wrong; and a passed check shows no misfit only in the features examined. Its before-data counterpart is the [[Prior Predictive Check]].

![[Posterior predictive check.png|700]]
*What to look at:* left, replicate densities wrap around the observed one. Right, the observed proportion of zeros lies far outside the replicates.

```r
set.seed(11); y <- rnbinom(200, mu = 4, size = 0.8)                       # overdispersed counts with many zeros
lam <- rgamma(1000, 0.01 + sum(y), 0.01 + 200)                            # posterior of a (wrong) Poisson model
yrep_zero <- sapply(lam, function(l) mean(rpois(200, l) == 0)); yrep_max <- sapply(lam, function(l) max(rpois(200, l)))
c(obs_zero = mean(y == 0), rep_zero = mean(yrep_zero), obs_max = max(y), rep_max = median(yrep_max))       # the Poisson's fakes have far too few zeros and too small a maximum
```

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
