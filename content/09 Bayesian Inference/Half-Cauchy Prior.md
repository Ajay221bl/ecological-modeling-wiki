---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A half-Cauchy prior is a positive-only prior with its peak at zero and a very heavy tail, often used for group-level standard deviations because it favours small values while still allowing large ones."
aliases:
  - "Half-Cauchy distribution"
  - "Half-Cauchy"
  - "Half Student-t prior"
status: seedling
---

# Half-Cauchy Prior

A net with a long handle catches most things close in, but the handle lets it reach far out if needed. A **half-Cauchy prior** is a positive-only prior with its peak at zero and a very heavy tail. The Cauchy is a [[Student t Distribution]] with 1 degree of freedom, with tails so heavy it has no mean; Half-Cauchy(0, s) keeps its positive half, and s is the median. It is popular for a group-level standard deviation ([[Variance Components|Variance Component]], [[Hierarchical Model]]): with few groups the data say little about between-group variation, and this prior leans toward small values without forbidding big ones.

In the code below, with the same scale, the half-Cauchy has median 1.0, 95th percentile 12.7 and 99th percentile 64, against 0.67, 1.97 and 2.58 for the [[Half-Normal Prior]]. A half-t with 3 or more degrees of freedom is a tamer relative, and brms uses a half Student-t(3, 0, 2.5) by default for standard deviations, with the scale adapted to the response.

The downside is that the heavy tail can occasionally let samplers wander to huge values; half-normal or exponential priors are tighter. A half-Cauchy is not vague: it has a preferred scale, which makes it a [[Weakly Informative Prior]].

```r
set.seed(10); hc <- abs(rcauchy(1e5, 0, 1)); hn <- abs(rnorm(1e5, 0, 1))
rbind(half_cauchy = quantile(hc, c(.5, .95, .99)), half_normal = quantile(hn, c(.5, .95, .99)))        # same scale, very different tails
```

## Connections
- **Builds on:** [[Half-Normal Prior]], [[Student t Distribution]]
- **Leads to:** [[Variance Components|Variance Component]], [[Hierarchical Model]], [[Weakly Informative Prior]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is a half-Cauchy prior?
??
A heavy-tailed, positive-only prior peaked at zero, commonly used for group-level standard deviations.
++++
