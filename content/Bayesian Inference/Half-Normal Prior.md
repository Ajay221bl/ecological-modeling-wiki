---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Half-normal distribution"
  - "Half-normal"
  - "Folded normal prior"
status: seedling
---

# Half-Normal Prior

**In one line:** a half-normal prior is a normal distribution centred at zero with its negative half cut away, used for parameters that must be positive such as standard deviations.

> [!info] Before this, it helps to know
> [[Normal Distribution]] (what is halved) · [[Truncated Distribution]] (the operation) · [[Weakly Informative Prior]] (its usual role)

## The everyday picture
Fold a bell curve at zero and keep the right-hand side. The most plausible values are small, and plausibility fades smoothly as values grow.

## Start from zero
1. **A standard deviation can't be negative.** Its prior needs positive support.
2. **Half-Normal(0, s):** take Normal(0, s), keep values above 0.
3. **Mode at zero. Thin tail:** values beyond 3s are nearly excluded.
4. **s sets the scale.** Choose it from the scale of the response.
5. **In Stan and brms:** declare the parameter with a lower bound of zero and give it `normal(0, s)`. The software does the halving.
6. **Compared with half-Cauchy:** much lighter tail, so stronger regularisation of large values.

## In R
```r
set.seed(9); s <- abs(rnorm(10000, 0, 1)); quantile(s, c(0.5, 0.95, 0.99)); qnorm(c(0.75, 0.975, 0.995))       # half-normal quantiles are normal quantiles at shifted probabilities
```

## Common confusions
- **"Half-normal has mean zero."** Its mode is zero. Its mean is s × √(2/π), about 0.8s.

## Explain it back
- Why does a standard deviation need this kind of prior?

*Pass test:* you can describe its shape and when to use it.

## Connections
- **Builds on:** [[Normal Distribution]], [[Truncated Distribution]]
- **Leads to:** [[Half-Cauchy Prior]], [[Variance Components|Variance Component]], [[Weakly Informative Prior]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

What is a half-normal prior used for?
??
Positive parameters such as standard deviations: a zero-centred normal restricted to positive values.
++++
