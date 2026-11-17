---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "The Mayfield method estimates the daily survival rate of nests as 1 − failures / exposure days, then raises it to the length of the nesting period to get nest success, correcting the bias of counting successful nests."
aliases:
  - "Mayfield method"
  - "Nest Survival (Mayfield)"
  - "Mayfield estimator"
  - "Daily survival rate"
  - "DSR"
  - "Apparent nest success"
status: seedling
---

# Mayfield Nest Survival

The **Mayfield method** estimates the daily survival rate of nests as 1 − failures / exposure days, then raises it to the length of the nesting period to get nest success, correcting the bias of counting successful nests ([[Exposure Days]], [[Known-fate Models]], [[Survival Rate]]). The problem (Mayfield 1961) is that nests are usually found part-way through, so early failures are never in the sample, and apparent success, successes divided by nests found, is biased high. The fix is to make each nest-day the trial: Ŝ_d = 1 − deaths / exposure days, and nest success = Ŝ_d^L for a nesting period of L days.

The variance is var(Ŝ_d) = Ŝ_d(1 − Ŝ_d) / Σ exposure days. It assumes constant daily survival across nests, ages and dates, which the [[Logistic Exposure Model]] relaxes. Small changes in Ŝ_d matter: raised to the 24th power, 0.955 against 0.950 gives 0.33 against 0.29. In the code below, Powell and Gale's (Ch9) wood thrush data of 13 nests, 5 successful, give an apparent nest success of 0.385; with 8 failures in 176 exposure days, Ŝ_d = 0.955 (SE 0.016), and over a 24-day nest cycle Ŝ = 0.327.

Powell and Gale's worked example multiplies by 0.9545 instead of 0.0455 at the variance step and reports an SE of 0.07; the formula gives 0.016 ([[Powell and Gale 2015]] Ch9, [[Staggered Entry Design]]). Apparent nest success is not fine even if you search hard, because nests are almost never all found on day one.

```r
Sd <- 1 - 8 / 176
round(c(daily = Sd, SE = sqrt(Sd * (1 - Sd) / 176), nest_24d = Sd^24, apparent = 5 / 13), 3)
```

## Connections
- **Builds on:** [[Exposure Days]], [[Known-fate Models]]
- **Leads to:** [[Logistic Exposure Model]], [[Kaplan-Meier Estimator]], [[Delta Method]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Mayfield vs Kaplan-Meier]]

## Flashcards

What is Mayfield's daily survival estimator?
??
Ŝ_d = 1 − failures / exposure days.
++++

Why is apparent nest success biased high?
??
Nests that failed before they could be found are missing from the sample.
++++

Ŝ_d = 0.9545, 24-day nest period. Nest success?
??
About 0.33 (0.9545²⁴).
++++
