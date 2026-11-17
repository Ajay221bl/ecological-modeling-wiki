---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "L(θ | y)"
  - "Likelihood curve"
  - "Likelihood surface"
status: seedling
---

# Likelihood Function

**In one line:** the likelihood function is the curve you get by computing the likelihood at every possible value of a parameter while the data stay fixed.

> [!info] Before this, it helps to know
> [[Likelihood]] (one point on the curve) · [[Functions in Maths]] (input: parameter, output: likelihood)

## The everyday picture
A hill drawn over the parameter axis. Walk along the axis trying one parameter value after another, and the height under your feet is how probable your data are at that value. The summit is the best-supported value. A sharp peak means the data pin it down. A broad dome means many values do nearly as well.

## Start from zero
1. **Write the probability of the data, P(y | θ).**
2. **Treat it as a function of θ.** Written L(θ | y) or L(θ).
3. **Same formula as the PMF or PDF, read sideways.** A PMF fixes θ and varies y. The likelihood function fixes y and varies θ.
4. **Its peak is the maximum likelihood estimate.**
5. **Its width shows precision.** More data make it narrower.
6. **With several parameters it is a surface** over all of them.
7. **Its area is not 1.** It is not a probability distribution.
8. **Hobbs and Hooten's notation:** L(θ | y) = [y | θ].

## See it
![[Likelihood function n.png|700]]
*What to look at:* same proportion of successes, more data, a narrower hill.

## In R
```r
p <- seq(0.01, 0.99, by = 0.01)
L10 <- dbinom(7, 10, p); L100 <- dbinom(70, 100, p)
p[which.max(L10)]; p[which.max(L100)]                 # both peak at 0.7
range(p[L10 > max(L10) / 8]); range(p[L100 > max(L100) / 8])     # values within a factor of 8 of the peak: far narrower with n = 100
sum(L10 * 0.01)                                       # area under the curve is 0.09, not 1
```

## In the course
[[Hobbs and Hooten 2015 Ch4]]. [[Powell and Gale 2015 Ch3]] draws it for survival probabilities.

## Common confusions
- **"It is a probability distribution for θ."** It doesn't integrate to 1 and has no such interpretation without a prior.

## Explain it back
- How does the likelihood function change as sample size grows?

*Pass test:* you can plot a likelihood function and read its peak and width.

## Connections
- **Builds on:** [[Likelihood]]
- **Leads to:** [[Maximum Likelihood Estimation]], [[Likelihood Profile]], [[Posterior Distribution]], [[Log-likelihood]]
- **Part of:** [[MOC - Likelihood and Estimation]], molecular note [[Probability vs Likelihood]]

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
