---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "Process variation is real up-and-down change in nature that your model doesn't explain, such as good and bad years for a bird population."
aliases:
  - "Process variance"
  - "Process error"
  - "Process noise"
status: seedling
---

# Process Variation

Your real body weight goes up and down a little from day to day: a big dinner, a hot day, a long run. That is real change in *you*, not a fault in the scales. **Process variation** is nature's version: real up-and-down change in the true state of the system that your model's deterministic part does not explain, such as good and bad years for a bird population. Hobbs and Hooten write the true state as z (the actual number of birds this year) and the process variance as σ²ₚ, and give it a layer of its own, the *process model* ([[Hobbs and Hooten 2015 Ch1]], [[Data Model, Process Model and Parameter Model]]). It is also called *process error*, but "error" here means "unexplained", not "mistake".

An example. The true population on a ranch over four years is 100, 104, 98 and 107. A trend line predicts 100, 102, 104 and 106. The differences, 0, +2, −6 and +1, are process variation: real changes from weather, food and predators that the trend does not capture. Nobody miscounted anything; these are the true numbers. In nature the causes are usually unmeasured, which is exactly why they end up as "variation" rather than as terms in the model.

Keeping process variation separate from measurement noise matters because they tell you different things. Process variation is a fact about the biology, while [[Observation Error]] is a fact about your methods. Counting better reduces observation error, but nature's real swings remain. Process variation drives forecasts of risk: the bigger the real swings, the higher the chance a population dips dangerously low, so estimating it honestly is what lets you estimate extinction risk. In a statistical model it is part of what the [[Stochastic Component]] has to describe, and Hobbs and Hooten's hierarchical models estimate it as its own quantity ([[Hobbs and Hooten 2015 Ch6]]).

![[Process vs observation error.png|700]]
*What to look at:* the blue line's wiggles are process variation.

```r
set.seed(7)
N <- numeric(25); N[1] <- 50
for (t in 2:25) N[t] <- N[t - 1] * exp(rnorm(1, 0.02, 0.12))   # real yearly swings
sd(diff(log(N)))      # about 0.12: the process variation we built in
```

## Connections
- **Builds on:** [[Stochastic Component]]
- **Leads to:** [[Observation Error]], [[Sampling Variation]], [[Hierarchical Model]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]], molecular note [[Process vs Observation Error]]
- **Go deeper:** [[Hobbs and Hooten 2015 Ch1]]

## Flashcards

What is process variation?
??
Real variation in the true state of nature (e.g., true population size) that the model's deterministic part doesn't explain.
![[Process vs observation error.png]]
++++

Why is "process error" not a mistake?
??
"Error" here just means unexplained; the variation is real change in nature, not a measurement fault.
++++
