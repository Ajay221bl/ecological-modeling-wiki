---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Half-Cauchy distribution"
  - "Half-Cauchy"
  - "Half Student-t prior"
status: seedling
---

# Half-Cauchy Prior

**In one line:** a half-Cauchy prior is a positive-only prior with its peak at zero and a very heavy tail, often used for group-level standard deviations because it favours small values while still allowing large ones.

> [!info] Before this, it helps to know
> [[Half-Normal Prior]] (the lighter-tailed alternative) · [[Student t Distribution]] (Cauchy is t with 1 degree of freedom) · [[Variance Components|Variance Component]] (what it is usually put on)

## The everyday picture
A net with a long handle. Most of the catch is close in, near zero. The long handle (the heavy tail) means that if the truth is far out, the net can still reach it.

## Start from zero
1. **Cauchy = Student t with 1 degree of freedom.** Tails so heavy it has no mean.
2. **Half-Cauchy(0, s):** keep the positive half. s is the median.
3. **Why for hierarchical sds:** with few groups the data say little about between-group variation. This prior leans toward small values without forbidding big ones.
4. **Half-t with 3 or more df** is a tamer relative. `brms` uses a half Student-t(3, 0, 2.5) by default for standard deviations (the scale adapts to the response).
5. **Downside:** the heavy tail can occasionally let samplers wander to huge values. Half-normal or exponential priors are tighter.

## In R
```r
set.seed(10); hc <- abs(rcauchy(1e5, 0, 1)); hn <- abs(rnorm(1e5, 0, 1))
rbind(half_cauchy = quantile(hc, c(.5, .95, .99)), half_normal = quantile(hn, c(.5, .95, .99)))        # same scale, very different tails
```

## Common confusions
- **"Half-Cauchy is vague."** It is weakly informative: it has a preferred scale.

## Explain it back
- How does its tail compare with the half-normal's?

*Pass test:* you can say why it suits group-level standard deviations.

## Connections
- **Builds on:** [[Half-Normal Prior]], [[Student t Distribution]]
- **Leads to:** [[Variance Components|Variance Component]], [[Hierarchical Model]], [[Weakly Informative Prior]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is a half-Cauchy prior?
??
A heavy-tailed, positive-only prior peaked at zero, commonly used for group-level standard deviations.
++++
