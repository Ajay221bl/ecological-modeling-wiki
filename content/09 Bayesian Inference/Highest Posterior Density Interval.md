---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "HPDI"
  - "HPD interval"
  - "HDI"
  - "Highest density interval"
  - "Highest posterior density"
status: seedling
---

# Highest Posterior Density Interval

**In one line:** a highest posterior density interval is the narrowest range that contains the stated share of the posterior, so every value inside it is more probable than any value outside.

> [!info] Before this, it helps to know
> [[Credible Interval]] (the general idea) · [[Probability Density Function]] (density height decides membership) · [[Equal-tailed Interval]] (the alternative)

## The everyday picture
Flooding a landscape and then lowering the water until 95% of the land area is exposed. What stands above the waterline is the highest ground. For one hill that is one stretch. For two hills it can be two separate islands.

## Start from zero
1. **Find the shortest interval containing 95% of the draws.**
2. **Inside it, density is everywhere higher than outside.**
3. **For symmetric posteriors** it matches the equal-tailed interval.
4. **For skewed posteriors** it shifts toward the peak and is shorter.
5. **Not invariant to transformation:** the HPDI of σ² isn't the square of the HPDI of σ.
6. **Noisier to estimate** from draws than quantiles.
7. **For multimodal posteriors** it may be a set of disjoint intervals.
8. **In R:** `coda::HPDinterval()`, `bayestestR::hdi()`, `tidybayes::hdi()`.

## In R
```r
set.seed(5); d <- rexp(20000, 1); library(coda)
rbind(equal_tailed = quantile(d, c(0.025, 0.975)), hpd = HPDinterval(mcmc(d))[1, ])       # HPD starts at the mode and is shorter
```

## In the course
[[Hobbs and Hooten 2015 Ch8]].

## Common confusions
- **"HPDI and ETI contain different amounts of probability."** Both contain 95%. They differ in which 95%.

## Explain it back
- When do HPDI and ETI differ?

*Pass test:* you can compute both and say which is narrower.

## Connections
- **Builds on:** [[Credible Interval]], [[Equal-tailed Interval]]
- **Leads to:** [[Posterior Summary]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[Equal-tailed vs Highest Density Interval]]

## Flashcards

What is a highest posterior density interval?
??
The narrowest interval containing the specified posterior probability. All points inside have higher density than points outside.
++++
