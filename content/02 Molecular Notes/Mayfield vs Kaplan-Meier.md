---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - popest
aliases: []
status: seedling
---

# Mayfield vs Kaplan-Meier

> [!summary] In plain words
> Mayfield's method treats each exposure day as a trial with one constant daily survival rate, while Kaplan-Meier multiplies interval-specific survival estimates, allowing survival to change over time.

## The question
When do I use Mayfield's method and when Kaplan-Meier?

## Built from
- [[Mayfield Nest Survival]] and [[Kaplan-Meier Estimator]].
- [[Exposure Days]], [[Censoring]], [[Staggered Entry Design]].

## The reasoning, step by step
1. **Same building block:** in an interval, survival = 1 − deaths / at-risk units.
2. **Mayfield:** one constant daily rate, units are exposure days, raised to the period length.
3. **Kaplan-Meier:** a separate rate per interval, units are animals at risk, multiplied together.
4. **Variance:** Mayfield uses exposure days; Kaplan-Meier uses number of animals (Powell and Gale Ch9).
5. **Covariates:** neither directly; use [[Logistic Exposure Model]] or Cox models.

| | Mayfield | Kaplan-Meier |
|---|---|---|
| Survival over time | Constant | Can change |
| Trial unit | Exposure day | Animal at risk per interval |
| Typical data | Nests checked every few days | Radio-collared animals |
| Output | Daily rate, period success | Step curve of S(t) |

## So in practice
Nests with irregular checks and short cycles: Mayfield or logistic exposure. Collared animals over seasons: Kaplan-Meier, with staggered entry.

## What would go wrong otherwise
Using Mayfield when predation is concentrated in the nestling stage; a constant rate hides that.

## Explain it back
- Which method shows when risk is high?

*Pass test:* you can choose between the two and explain the trade-off.

## Connections
- **Related:** [[Choosing a Survival Model]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

Key difference between Mayfield and Kaplan-Meier?
??
Mayfield assumes constant daily survival; Kaplan-Meier lets survival differ between intervals.
++++
