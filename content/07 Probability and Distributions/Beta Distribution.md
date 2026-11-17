---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "dbeta()"
  - "Beta"
status: seedling
---

# Beta Distribution

**In one line:** the beta distribution is a distribution for quantities that lie between 0 and 1, such as probabilities and proportions, with two parameters that set its shape.

> [!info] Before this, it helps to know
> [[Proportion]] (what it describes) · [[Support of a Distribution]] (0 to 1) · [[Moment Matching]] (to choose its parameters)

## The everyday picture
Your belief about a coin after watching some flips. Having seen 7 heads and 3 tails, you believe the chance of heads is probably around 0.7, but 0.5 or 0.85 wouldn't shock you. A Beta curve over 0 to 1, humped near 0.7, is that belief.

## Start from zero
1. **Support:** 0 to 1.
2. **Two positive parameters, a and b.**
3. **Mean = a/(a + b).**
4. **a + b acts like a sample size.** The larger it is, the narrower the curve.
5. **Shapes:** Beta(1, 1) is flat. a = b > 1 gives a symmetric hump at 0.5. a > b leans toward 1. Both below 1 gives a U shape.
6. **A useful reading:** Beta(a, b) is like having seen a − 1 successes and b − 1 failures.
7. **Why it is the natural prior for a probability:** combined with binomial data it gives a beta posterior. Start at Beta(a, b), see y successes in n trials, end at Beta(a + y, b + n − y).
8. **In models:** priors for survival, detection and occupancy probabilities, and beta regression for continuous proportions such as percent cover.

## See it
![[Beta distribution.png|700]]
*What to look at:* the same 0-to-1 axis carrying flat, humped, skewed and U-shaped curves.

## In R
```r
a <- 7; b <- 3; c(mean = a / (a + b), sd = sqrt(a * b / ((a + b)^2 * (a + b + 1))))
qbeta(c(0.025, 0.975), a, b)                    # 95% of the belief lies between 0.40 and 0.93
c(sd_small = sd(rbeta(1e5, 7, 3)), sd_large = sd(rbeta(1e5, 70, 30)))   # same mean, ten times the "sample size"
qbeta(c(0.025, 0.975), 1 + 12, 1 + 8)           # flat prior plus 12 successes in 20 trials
```

## In the course
[[Hobbs and Hooten 2015 Ch3]] and the beta-binomial conjugate example in [[Hobbs and Hooten 2015 Ch5]].

## Common confusions
- **"Beta is for binary data."** It is for probabilities and continuous proportions. Binary data are Bernoulli.
- **"Beta can model 0s and 1s."** Its support excludes exactly 0 and 1.

## Explain it back
- What does a + b control?

*Pass test:* you can sketch Beta(1, 1), Beta(2, 8) and Beta(20, 20).

## Connections
- **Builds on:** [[Proportion]], [[Support of a Distribution]]
- **Leads to:** [[Conjugate Prior]], [[Binomial Distribution]], [[Dirichlet Distribution]], [[Beta Regression]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What kind of quantity does the beta distribution describe?
??
Continuous values between 0 and 1, such as probabilities and proportions.
![[Beta distribution.png]]
++++

What is the mean of Beta(a, b)?
??
a / (a + b).
++++

Why is the beta the standard prior for a binomial probability?
??
It is conjugate: a Beta(a, b) prior with y successes in n trials gives a Beta(a + y, b + n − y) posterior.
++++
