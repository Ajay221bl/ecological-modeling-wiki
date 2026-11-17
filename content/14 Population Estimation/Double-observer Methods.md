---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Double-observer methods use two observers surveying at the same time, and the pattern of animals seen by one, the other or both estimates detection probability and abundance."
aliases:
  - "Double-observer method"
  - "Dependent double-observer"
  - "Independent double-observer"
  - "Two-observer surveys"
  - "Primary and secondary observer"
status: seedling
---

# Double-observer Methods

Two proofreaders working on the same page tell you something neither can alone: if each finds typos the other missed, there are probably many typos neither found. **Double-observer methods** use two observers surveying at the same time, and the pattern of animals seen by one, the other or both estimates detection probability and abundance ([[Detection Probability]]). With independent observers, both record without cueing each other, and the overlap works like a [[Lincoln-Petersen Estimator]]: observer 1 "marks" and observer 2 "recaptures".

With dependent observers, the primary calls out everything seen and the secondary records only what the primary missed; the observers then swap roles (Powell and Gale Ch16, "when do I get to be the primary observer?"). The method assumes equal detectability across animals, so groups that are easy for both to see bias N low ([[Capture Heterogeneity Models]]). It is common in aerial surveys of waterfowl and marine mammals, and it is one way to estimate [[Detection on the Line g(0)]] in distance sampling.

It is covered in [[Powell and Gale 2015]] Ch16 ([[unmarked Package]]). Two imperfect observers are not worse than one: individually they miss animals, but together their overlap measures detection.

## Connections
- **Builds on:** [[Detection Probability]], [[Lincoln-Petersen Estimator]]
- **Leads to:** [[Removal Sampling]], [[Count-based Abundance Estimation]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

How does the independent double-observer design estimate detection?
??
Like Lincoln-Petersen: animals seen by observer 1 act as marks, and observer 2's overlap estimates p.
++++

In the dependent double-observer design, what does the secondary record?
??
Only animals the primary observer missed.
++++
