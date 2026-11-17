---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - distributions
aliases:
  - "Probability mass vs density"
  - "Discrete vs Continuous Random Variable"
  - "Discrete vs continuous distributions"
status: seedling
---

# PMF vs PDF

> [!summary] In plain words
> a probability mass function gives the actual probability of each value of a discrete random variable, while a probability density function gives a density for a continuous one, and probability comes only from the area under the density over an interval.

## The everyday picture
Sand piled in separate buckets versus sand spread along a trough. With buckets, each bucket's share is a probability. Along the trough, a single point has no sand; you need a length of trough to scoop any.

## The question
Why can a density be bigger than 1, and why is the probability of exactly 2.5 cm zero?

## Built from
- [[Discrete Random Variable]] and [[Probability Mass Function]].
- [[Continuous Random Variable]] and [[Probability Density Function]].
- [[Cumulative Distribution Function]]: works for both.
- [[Integral]]: area under a curve.

## The reasoning, step by step
1. **Discrete:** P(X = x) = f(x), and the f(x) values sum to 1. In R, `dpois(2, 3)` is a real probability.
2. **Continuous:** f(x) is a height, not a probability. P(a < X < b) is the area under f between a and b, and the total area is 1.
3. **A single point has zero width,** so P(X = x) = 0 for a continuous variable.
4. **Densities can exceed 1** when the distribution is narrow; only the area must be 1.
5. **Likelihoods use either:** a mass for discrete data, a density for continuous data ([[Probability vs Likelihood]]).
`dnorm(0, 0, 0.1)` = 3.99, a density far above 1. Yet `pnorm(0.1, 0, 0.1) - pnorm(-0.1, 0, 0.1)` = 0.68, a proper probability.

## So in practice
Read `d` functions for discrete distributions as probabilities, and for continuous ones as heights; use `p` functions for probabilities of ranges.

## In R
```r
c(pmf = dpois(2, 3), pdf_height = dnorm(0, 0, 0.1), area = pnorm(0.1, 0, 0.1) - pnorm(-0.1, 0, 0.1))
sum(dpois(0:100, 3))                              # masses sum to 1
integrate(dnorm, -Inf, Inf, mean = 0, sd = 0.1)$value   # density integrates to 1
```

## What would go wrong otherwise
Saying "`dnorm(5, 5, 2)` = 0.199, so there is a 20 percent chance of exactly 5."

## Explain it back
- What must sum to 1 for a PMF, and what must equal 1 for a PDF?

*Pass test:* you can explain why a density of 4 is fine.

## Connections
- **Related:** [[Continuous vs Discrete Data]], [[Probability vs Likelihood]], [[Binomial vs Poisson]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

PMF vs PDF in one line?
??
A PMF gives probabilities of single values (discrete); a PDF gives density, and probability is area under it (continuous).
++++

Why can a PDF exceed 1?
??
Only the total area must be 1; a narrow distribution has tall density.
++++

What is P(X = x) for a continuous variable?
??
Zero; only intervals have probability.
++++
