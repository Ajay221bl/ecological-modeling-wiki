---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Process variance"
  - "Process error"
  - "Process noise"
status: seedling
---

# Process Variation

**In one line:** process variation is real up-and-down change in nature that your model doesn't explain, such as good and bad years for a bird population.

> [!info] Before this, it helps to know
> [[Stochastic Component]] · its partner is [[Observation Error]]

## The everyday picture
Your real body weight goes up and down a little from day to day: a big dinner, a hot day, a long run. That's real change in *you*, not in the scales. Process variation is nature's version: the true number of birds really does rise and fall around any trend.

*Where the picture stops working:* you know why your weight changed. In nature the causes (weather, food, disease) are often unmeasured, which is exactly why they end up as "variation".

## Words you'll need
- **True state (z):** the real value in nature, such as the actual number of birds this year.
- **Process variation (σ²ₚ):** variation in the true state that the model's deterministic part doesn't explain.
- **Process model:** the part of a model describing the true state ([[Data Model, Process Model and Parameter Model]]).
- **Process error:** the same thing; "error" here means "unexplained", not "mistake".

## A tiny example
The true population on a ranch over four years: **100, 104, 98, 107**. A trend line might predict 100, 102, 104, 106. The differences (0, +2, −6, +1) are process variation: real changes from weather and food that the trend doesn't capture. Nobody miscounted anything; these are the true numbers.

## Start from zero
1. **Imagine you knew the true number of birds each year.**
2. **It would still wiggle around any trend you fitted.** *Why:* weather, food and predators not in your model change the real population.
3. **That wiggle is process variation.** It's a fact about ecology.
4. **Hobbs and Hooten give it its own layer, the process model** ([[Hobbs and Hooten 2015 Ch1]], pp. 7 to 9). *Why separate it:* it tells you about the biology, while [[Observation Error]] tells you about your methods.
5. **It drives forecasts of risk.** *Why:* the bigger the real swings, the higher the chance a population dips dangerously low.

## See it
![[Process vs observation error.png|700]]
*What to look at:* the blue line's wiggles are process variation.

## Why it is this way
Real populations are pushed around by countless unmeasured forces. Modeling that variation explicitly, and keeping it separate from measurement noise, is what lets you estimate true variability and extinction risk honestly.

## In R
```r
set.seed(7)
N <- numeric(25); N[1] <- 50
for (t in 2:25) N[t] <- N[t - 1] * exp(rnorm(1, 0.02, 0.12))   # real yearly swings
sd(diff(log(N)))      # about 0.12: the process variation we built in
```

## In the course
The process model in Hobbs and Hooten's preview chapter ([[Hobbs and Hooten 2015 Ch1]], Fig. 1.1.2) and their hierarchical models ([[Hobbs and Hooten 2015 Ch6]]).

## Common confusions
- **"Process error means a mistake."** It means unexplained real variation.
- **"More counting removes it."** Counting better reduces observation error; nature's real swings remain.

## Explain it back
- Use day-to-day body weight to explain process variation.
- In the four-year example, why aren't the differences from the trend anyone's mistake?
- Why does process variation matter for extinction risk?

*Pass test:* for any time series, you can say what real forces might cause its process variation.

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
