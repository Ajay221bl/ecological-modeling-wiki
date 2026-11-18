---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The uniform distribution spreads probability evenly over an interval, so every value between its lower and upper limit is equally likely."
aliases:
  - "dunif()"
  - "Flat distribution"
  - "Rectangular distribution"
status: seedling
---

# Uniform Distribution

The pointer on a board-game spinner is as likely to stop at one angle as at any other; no region is favoured. The **uniform distribution** spreads probability evenly over an interval from a lower limit a to an upper limit b, so every value in between is equally likely. Its density is a flat line at height 1/(b − a) inside the interval and zero outside ([[Probability Density Function]], [[Support of a Distribution]]). Its mean is the midpoint (a + b)/2 and its variance (b − a)²/12.

Because the density is flat, the probability of a sub-interval is just its length divided by the whole length. For Uniform(0, 10), the density is 0.1 everywhere and P(below 3) = 3/10 = 0.3; the code below checks that, and the simulated variance matches 100/12 = 8.3. Uniform draws are the raw material of randomness on a computer: `runif()` produces them, and other random draws and random locations are built from them ([[Random Numbers and set.seed()]]).

It is often used as a "vague" prior, and that needs care ([[Vague Prior]], [[Hobbs and Hooten 2015 Ch3]]). Its hard edges forbid values outside the limits completely, and it is flat only on the scale you wrote it on. The last line of the code puts a uniform prior on a probability p and looks at the implied prior on [[Logit Link|logit]](p): it is peaked, not flat. So uniform does not mean uninformative; it carries information in its limits and takes a specific shape on any other scale. Uniform(0, 1) is the same as Beta(1, 1) ([[Beta Distribution]]).

```r
dunif(3, 0, 10); punif(3, 0, 10)                 # density 0.1, P(below 3) = 0.3
set.seed(5); u <- runif(1e5, 0, 10); c(mean(u), var(u), 100 / 12)
p <- runif(1e5); hist(qlogis(p), breaks = 60)    # a flat prior on p is a peaked (logistic) prior on logit(p)
```

## Connections
- **Builds on:** [[Probability Density Function]]
- **Leads to:** [[Vague Prior]], [[Random Numbers and set.seed()]], [[Beta Distribution]], [[Logit Link]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What is the density of a Uniform(a, b) distribution?
??
1/(b − a) between a and b, zero elsewhere.
++++

Why is a uniform prior not automatically uninformative?
??
It imposes hard limits and is not flat after a nonlinear transformation of the parameter.
++++
