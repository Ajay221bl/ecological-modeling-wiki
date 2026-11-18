---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The exponential distribution describes the waiting time until the next event when events happen at random at a constant average rate."
aliases:
  - "dexp()"
  - "Exponential waiting time"
status: seedling
---

# Exponential Distribution

Shooting stars come at random. Having already waited ten minutes does not make one "due": the chance of one in the next minute is the same as it was when you started. The **exponential distribution** describes the waiting time until the next event when events happen at random at a constant average rate λ, events per unit time ([[Rate of Change]]). It lives on positive numbers, its density is highest at zero and falls away steadily, so short waits are common and long ones rare. Its mean is 1/λ, and so is its [[Standard Deviation|standard deviation]]. It is the [[Gamma Distribution]] with shape 1.

With rate 0.5 per minute the average wait is 2 minutes. The defining property is that it is *memoryless*: the time already waited tells you nothing about the time remaining. In the code below, P(wait > 3) is 0.22, and among those who have already waited 2 minutes, P(wait > 5) is also 0.22. This follows from the constant rate. It has a partner: if the waiting times between events are exponential with rate λ, the number of events per unit time is Poisson with mean λ, which the last line confirms with counts whose mean and variance are both about 3 ([[Poisson Distribution]]).

Ecologists use it for survival times under a constant [[Hazard Rate]], for distances between randomly placed points, and as a common prior for standard [[Deviation|deviations]] in Bayesian models, where brms and McElreath use exponential(1) ([[Prior Distribution]], [[Hobbs and Hooten 2015 Ch3]]). Do not confuse the exponential distribution with [[Exponential Growth Model|exponential growth]]: one is a [[Probability Distribution|probability distribution]] of waiting times, the other a deterministic curve.

```r
set.seed(4); w <- rexp(1e5, rate = 0.5); c(mean(w), sd(w))          # both about 2
mean(w > 3); mean(w[w > 2] > 5)                                     # P(wait > 3) equals P(wait > 5 | already waited 2)
ev <- cumsum(rexp(1e5, rate = 3)); counts <- table(cut(ev, 0:floor(max(ev)))); c(mean(counts), var(counts))   # counts per unit time: Poisson, mean = var = 3
```

## Connections
- **Builds on:** [[Gamma Distribution]], [[Standard Deviation]], [[Deviation]], [[Probability Distribution]]
- **Leads to:** [[Poisson Distribution]], [[Hazard Rate]], [[Prior Distribution]], [[Exponential Growth Model]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

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
