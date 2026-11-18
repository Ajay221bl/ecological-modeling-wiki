---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The likelihood function is the curve you get by computing the likelihood at every possible value of a parameter while the data stay fixed."
aliases:
  - "L(θ | y)"
  - "Likelihood curve"
  - "Likelihood surface"
status: seedling
---

# Likelihood Function

Draw a hill over the parameter axis. Walk along the axis trying one value after another, and the height under your feet is how probable your data are at that value. The **likelihood function** is that hill: the curve you get by computing the [[Likelihood]] at every possible value of a parameter while the data stay fixed. Write the probability of the data, P(y | θ), and treat it as a function of θ, written L(θ | y). It is the same formula as the probability mass or [[Probability Density Function|density function]], read sideways: a PMF fixes θ and varies y, while the likelihood function fixes y and varies θ ([[Functions in Maths]]). Hobbs and Hooten write it L(θ | y) = [y | θ].

Its peak is the [[Maximum Likelihood Estimation|maximum likelihood estimate]], and its width shows precision. A sharp peak means the data pin the parameter down; a broad dome means many values do nearly as well. The figure and code compare 7 successes in 10 trials with 70 in 100. Both curves peak at 0.7, but the values within a factor of 8 of the peak span about 0.39 to 0.92 with 10 trials and only 0.61 to 0.78 with 100: more data, a narrower hill. With several parameters the curve becomes a surface over all of them, which is reduced to a curve for one parameter by a [[Likelihood Profile]].

Its area is not 1. The code adds up the area under the 10-trial curve and gets 0.09. So it is not a [[Probability Distribution|probability distribution]] for θ, and it has no such interpretation without a prior; multiplying it by a prior and [[Scaling Predictors|rescaling]] is exactly what produces a [[Posterior Distribution]] ([[Hobbs and Hooten 2015 Ch4]], [[Powell and Gale 2015 Ch3]]). In practice it is usually worked with on the log scale ([[Log-likelihood]]).

![[Likelihood function n.png|700]]
*What to look at:* same proportion of successes, more data, a narrower hill.

```r
p <- seq(0.01, 0.99, by = 0.01)
L10 <- dbinom(7, 10, p); L100 <- dbinom(70, 100, p)
p[which.max(L10)]; p[which.max(L100)]                 # both peak at 0.7
range(p[L10 > max(L10) / 8]); range(p[L100 > max(L100) / 8])     # values within a factor of 8 of the peak: far narrower with n = 100
sum(L10 * 0.01)                                       # area under the curve is 0.09, not 1
```

## Connections
- **Builds on:** [[Likelihood]], [[Probability Density Function]], [[Probability Distribution]], [[Scaling Predictors]]
- **Leads to:** [[Maximum Likelihood Estimation]], [[Likelihood Profile]], [[Posterior Distribution]], [[Log-likelihood]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]], molecular note [[Probability vs Likelihood]]

## Flashcards

What is the likelihood function?
??
The probability of the fixed observed data viewed as a function of the parameter(s).
![[Likelihood function n.png]]
++++

How does a PMF differ from a likelihood function built on the same formula?
??
The PMF fixes the parameter and varies the data. The likelihood fixes the data and varies the parameter.
++++
