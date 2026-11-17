---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Overall detection probability"
  - "d = 1 − (1 − p)^k"
  - "Probability of detecting at least once"
status: seedling
---

# Cumulative Detection Probability

**In one line:** cumulative detection probability is the chance that a species present at a site is detected at least once across k surveys, d = 1 − (1 − p)^k.

> [!info] Before this, it helps to know
> [[Detection Probability]] · [[Independence of Observations|Independence]]

## The everyday picture
Rolling a die until you see a six. One roll gives a 1 in 6 chance, but five rolls give about 60 percent. More visits work the same way.

## A tiny example
Powell and Gale (2015 Ch15): with p = 0.60, three surveys give d = 0.94. With p = 0.25, eight surveys give d = 0.8999, which rounds to 0.90; strictly you need nine to pass 0.90.

## Start from zero
1. **1 − p** is the chance of missing on one visit.
2. **(1 − p)^k** is the chance of missing on all k independent visits.
3. **1 minus that** is the chance of at least one hit.
4. **Planning use:** solve for k to reach a target d, k = log(1 − d) / log(1 − p).
5. **It assumes independent visits with the same p.** Correlated visits (same observer, same day) give less than the formula promises.

## See it
![[Cumulative detection.png|700]]
*What to look at:* the low-p curve climbs slowly and needs many more visits to reach the dashed 0.9 line.

## In R
```r
p <- c(0.25, 0.6); d <- 0.9
ceiling(log(1 - d) / log(1 - p))  # visits needed to reach d >= 0.9
round(1 - (1 - 0.25)^8, 4)
```

## In the course
[[Powell and Gale 2015]] Ch15 (Figure 15.3).

## Common confusions
- **"Three visits are always enough."** Only when p is fairly high; rare, cryptic species need many more.

## Explain it back
- How many visits for d ≥ 0.9 when p = 0.6?

*Pass test:* you can compute d and the number of visits needed.

## Connections
- **Builds on:** [[Detection Probability]], [[Independence of Observations|Independence]]
- **Leads to:** [[Single-season Occupancy]], [[How many visits does an occupancy study need|Survey Effort and Number of Visits]]
- **Part of:** [[MOC - Population Estimation]]

## Flashcards

What is the formula for cumulative detection probability over k visits?
??
d = 1 − (1 − p)^k.
![[Cumulative detection.png]]
++++

How many visits give d ≥ 0.9 when p = 0.6?
??
Three (d = 0.936).
++++
