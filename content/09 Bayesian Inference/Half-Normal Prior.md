---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A half-normal prior is a normal distribution centred at zero with its negative half cut away, used for parameters that must be positive such as standard deviations."
aliases:
  - "Half-normal distribution"
  - "Half-normal"
  - "Folded normal prior"
status: seedling
---

# Half-Normal Prior

Fold a bell curve at zero and keep the right-hand side: the most plausible values are small, and plausibility fades smoothly as values grow. A **half-normal prior** is a [[Normal Distribution]] centred at zero with its negative half cut away ([[Truncated Distribution]]), used for parameters that must be positive, above all standard deviations. Half-Normal(0, s) has its mode at zero and a thin tail, so values beyond 3s are nearly excluded; s sets the scale and is chosen from the scale of the response.

In Stan and brms you declare the parameter with a lower bound of zero and give it `normal(0, s)`; the software does the halving. In the code below, absolute values of standard normal draws have median 0.67, 95th percentile 1.96 and 99th percentile 2.58, which are the normal quantiles at 0.75, 0.975 and 0.995.

Compared with the [[Half-Cauchy Prior]] it has a much lighter tail and so regularises large values more strongly, which makes it a common [[Weakly Informative Prior]] for a [[Variance Components|Variance Component]]. Its mode is zero but its mean is not: the mean is s × √(2/π), about 0.8s.

```r
set.seed(9); s <- abs(rnorm(10000, 0, 1)); quantile(s, c(0.5, 0.95, 0.99)); qnorm(c(0.75, 0.975, 0.995))       # half-normal quantiles are normal quantiles at shifted probabilities
```

## Connections
- **Builds on:** [[Normal Distribution]], [[Truncated Distribution]]
- **Leads to:** [[Half-Cauchy Prior]], [[Variance Components|Variance Component]], [[Weakly Informative Prior]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is a half-normal prior used for?
??
Positive parameters such as standard deviations: a zero-centred normal restricted to positive values.
++++
