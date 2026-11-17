---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "dexp()"
  - "Exponential waiting time"
status: seedling
---

# Exponential Distribution

**In one line:** the exponential distribution describes the waiting time until the next event when events happen at random at a constant average rate.

> [!info] Before this, it helps to know
> [[Gamma Distribution]] (it is the shape = 1 case) · [[Rate of Change]] (the rate parameter)

## The everyday picture
Waiting for a shooting star. They come at random. Having already waited ten minutes doesn't make one "due". The chance in the next minute is the same as it was at the start.

## Start from zero
1. **One parameter: the rate λ,** events per unit time.
2. **Support:** positive numbers.
3. **Mean = 1/λ. SD = 1/λ too.**
4. **Shape:** highest at zero, falling away steadily. Short waits are common, long waits rare.
5. **Memoryless.** *The time already waited tells you nothing about the time remaining.* This follows from the constant rate.
6. **Partner of the Poisson:** if waiting times between events are exponential with rate λ, the count of events per unit time is Poisson with mean λ.
7. **In models:** survival times under constant hazard, distances between random points, and a common prior for standard deviations in Bayesian models.

## In R
```r
set.seed(4); w <- rexp(1e5, rate = 0.5); c(mean(w), sd(w))          # both about 2
mean(w > 3); mean(w[w > 2] > 5)                                     # P(wait > 3) equals P(wait > 5 | already waited 2)
ev <- cumsum(rexp(1e5, rate = 3)); counts <- table(cut(ev, 0:floor(max(ev)))); c(mean(counts), var(counts))   # counts per unit time: Poisson, mean = var = 3
```

## In the course
[[Hobbs and Hooten 2015 Ch3]]. brms and McElreath use exponential(1) priors on standard deviations.

## Common confusions
- **"Exponential distribution = exponential growth."** One is a probability distribution, the other a deterministic curve.

## Explain it back
- What does "memoryless" mean?

*Pass test:* you can relate rate to mean wait and link it to the Poisson.

## Connections
- **Builds on:** [[Gamma Distribution]]
- **Leads to:** [[Poisson Distribution]], [[Hazard Rate]], [[Prior Distribution]]
- **Part of:** [[MOC - Probability and Distributions]]

## Flashcards

What does the exponential distribution describe?
??
Waiting time to the next event under a constant event rate.
++++

What is the mean of an exponential with rate λ?
??
1/λ.
++++

What does memoryless mean?
??
The probability of waiting a further time t does not depend on how long you have already waited.
++++
