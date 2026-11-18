---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The beta distribution is a distribution for quantities that lie between 0 and 1, such as probabilities and proportions, with two parameters that set its shape."
aliases:
  - "dbeta()"
  - "Beta"
status: seedling
---

# Beta Distribution

After watching a coin give 7 heads and 3 tails, you believe the chance of heads is probably around 0.7, but 0.5 or 0.85 would not shock you. A curve over 0 to 1, humped near 0.7, is that belief. The **beta distribution** is a distribution for quantities that lie between 0 and 1, such as probabilities and proportions ([[Proportion]], [[Support of a Distribution]]). It has two positive parameters, a and b. Its mean is a/(a + b), and a + b acts like a [[Sample Size|sample size]]: the larger it is, the narrower the curve. A useful reading is that Beta(a, b) is like having seen a − 1 successes and b − 1 failures.

The same 0-to-1 axis carries very different shapes, as the figure shows. Beta(1, 1) is flat; equal a and b above 1 give a symmetric hump at 0.5; a > b leans toward 1; and both below 1 give a U shape. For Beta(7, 3) the mean is 0.7, the SD 0.14, and 95% of the belief lies between 0.40 and 0.93; the code below shows that Beta(70, 30), with the same mean and ten times the "sample size", is much narrower. To choose a and b for a given mean and SD, use [[Moment Matching]].

It is the natural prior for a probability because combined with binomial data it gives a beta posterior: start at Beta(a, b), see y successes in n trials, and end at Beta(a + y, b + n − y) ([[Conjugate Prior]], [[Binomial Distribution]]). With a [[Vague Prior|flat prior]] and 12 successes in 20 trials, that is Beta(13, 9), whose 95% interval of 0.38 to 0.78 is the last line of the code. Ecologists use it for priors on survival, detection and occupancy probabilities, and [[Beta Regression]] uses it for continuous proportions such as [[Percent Cover|percent cover]] ([[Hobbs and Hooten 2015 Ch3]], [[Hobbs and Hooten 2015 Ch5]]). Two confusions: beta is not for binary data, which are Bernoulli; and its support excludes exactly 0 and 1, so data containing them need another model. Its version for more than two categories is the [[Dirichlet Distribution]].

![[Beta distribution.png|700]]
*What to look at:* the same 0-to-1 axis carrying flat, humped, skewed and U-shaped curves.

```r
a <- 7; b <- 3; c(mean = a / (a + b), sd = sqrt(a * b / ((a + b)^2 * (a + b + 1))))
qbeta(c(0.025, 0.975), a, b)                    # 95% of the belief lies between 0.40 and 0.93
c(sd_small = sd(rbeta(1e5, 7, 3)), sd_large = sd(rbeta(1e5, 70, 30)))   # same mean, ten times the "sample size"
qbeta(c(0.025, 0.975), 1 + 12, 1 + 8)           # flat prior plus 12 successes in 20 trials
```

## Connections
- **Builds on:** [[Proportion]], [[Support of a Distribution]], [[Sample Size]]
- **Leads to:** [[Conjugate Prior]], [[Binomial Distribution]], [[Dirichlet Distribution]], [[Beta Regression]], [[Vague Prior]], [[Percent Cover]]
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
