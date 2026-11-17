---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
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

**In one line:** the Mayfield method estimates the daily survival rate of nests as 1 − failures / exposure days, then raises it to the length of the nesting period to get nest success, correcting the bias of counting successful nests.

> [!info] Before this, it helps to know
> [[Exposure Days]] · [[Known-fate Models]] · [[Survival Rate]]

## A tiny example
Powell and Gale (Ch9) wood thrush data: 13 nests, 5 successful, so apparent nest success = 0.385. With 8 failures in 176 exposure days, Ŝ_d = 1 − 8/176 = 0.9545, and over a 24-day nest cycle Ŝ = 0.9545²⁴ = 0.327.

## Start from zero
1. **The problem (Mayfield 1961):** nests are usually found part-way through, so early failures are never in the sample. Apparent success (successes / nests found) is biased high.
2. **The fix:** make each nest-day the trial.
3. **Ŝ_d = 1 − deaths / exposure days;** nest success = Ŝ_d^L for a nesting period of L days.
4. **Variance:** var(Ŝ_d) = Ŝ_d (1 − Ŝ_d) / Σ exposure days. For the wood thrush data, SE ≈ 0.016. (Powell and Gale's worked example multiplies by 0.9545 instead of 0.0455 at this step and reports 0.07; the formula above gives 0.016.)
5. **Assumes constant daily survival** across nests, ages and dates.
6. **Small changes in Ŝ_d matter:** raised to the 24th power, 0.955 versus 0.950 gives 0.33 versus 0.29.

## In R
```r
Sd <- 1 - 8 / 176
round(c(daily = Sd, SE = sqrt(Sd * (1 - Sd) / 176), nest_24d = Sd^24, apparent = 5 / 13), 3)
```

## In the course
[[Powell and Gale 2015]] Ch9.

## Common confusions
- **"Apparent nest success is fine if you search hard."** Nests are almost never all found on day one.

## Explain it back
- Why is apparent nest success biased high?

*Pass test:* you can compute Mayfield daily and period survival.

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
