---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Cumulative detection probability is the chance that a species present at a site is detected at least once across k surveys, d = 1 − (1 − p)^k."
aliases:
  - "Overall detection probability"
  - "d = 1 − (1 − p)^k"
  - "Probability of detecting at least once"
status: seedling
---

# Cumulative Detection Probability

Rolling a die until you see a six: one roll gives a 1 in 6 chance, but five rolls give about 60 percent, and more visits to a site work the same way. **Cumulative detection probability** is the chance that a species present at a site is detected at least once across k surveys, d = 1 − (1 − p)^k ([[Detection Probability]]). 1 − p is the chance of missing on one visit, (1 − p)^k the chance of missing on all k independent visits, and one minus that is the chance of at least one hit. Powell and Gale (2015 Ch15) give two cases: with p = 0.60, three surveys give d = 0.94; with p = 0.25, eight surveys give d = 0.8999.

For planning, solve for the number of visits needed to reach a target d: k = log(1 − d) / log(1 − p). The figure shows the low-p curve climbing slowly and needing many more visits to reach the dashed 0.9 line. In the code below reaching d ≥ 0.9 takes 3 visits when p = 0.6 but 9 when p = 0.25, since eight give 0.8999, which rounds to 0.90 but falls just short ([[Study Design]]).

The formula assumes [[Independence of Observations|independent]] visits with the same p; correlated visits, such as the same observer on the same day, give less than it promises. It is Figure 15.3 in [[Powell and Gale 2015]] Ch15 ([[Single-season Occupancy]]). Three visits are not always enough: only when p is fairly high, and rare, cryptic species need many more.

![[Cumulative detection.png|700]]
*What to look at:* the low-p curve climbs slowly and needs many more visits to reach the dashed 0.9 line.

```r
p <- c(0.25, 0.6); d <- 0.9
ceiling(log(1 - d) / log(1 - p))  # visits needed to reach d >= 0.9
round(1 - (1 - 0.25)^8, 4)
```

## Connections
- **Builds on:** [[Detection Probability]], [[Independence of Observations|Independence]]
- **Leads to:** [[Single-season Occupancy]], [[How many visits does an occupancy study need|Survey Effort and Number of Visits]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

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
