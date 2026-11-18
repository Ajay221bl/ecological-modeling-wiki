---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A functional response describes how a predator's or herbivore's consumption rate changes with prey or food density: linear (Type I), saturating (Type II) or sigmoid (Type III)."
aliases:
  - "Holling functional response"
  - "Type I, II and III functional responses"
  - "Holling disc equation"
  - "Consumption rate"
status: seedling
---

# Functional Response

Eating sweets from a bowl, with few sweets you eat what you find, but with a full bowl you can only chew so fast, so eating levels off. A **functional response** describes how a predator's or herbivore's consumption rate changes with prey or food density ([[Functions in Maths]], [[Asymptote]]). Type I rises linearly with density and may then cap abruptly. Type II, the Holling disc equation, is f = aN / (1 + ahN), with attack rate a and handling time h, and it saturates at 1/h. Type III is sigmoid, with low consumption at low density because of prey switching or refuges, and then saturation.

It is a classic deterministic model of the kind [[Hobbs and Hooten 2015 Ch2]] use to express ecological ideas ([[Deterministic Component|Deterministic Model]]). It is fitted with [[Nonlinear Least Squares|nonlinear least squares]] or likelihood, or approximated by a GAM ([[Generalized Additive Model]]). In the code below a Type II response with a = 0.5 and h = 0.2 gives consumption of 1.67, 2.50, 3.33, 4.00 and 4.44 at densities of 5, 10, 20, 40 and 80, levelling off toward 1/h = 5.

The asymptote is not the attack rate; it is 1 / handling time.

```r
N <- c(0, 5, 10, 20, 40, 80); a <- 0.5; h <- 0.2
round(a * N / (1 + a * h * N), 2)   # Type II; levels off toward 1/h = 5
```

## Connections
- **Builds on:** [[Functions in Maths]], [[Asymptote]], [[Nonlinear Least Squares]]
- **Leads to:** [[Michaelis-Menten Function]], [[Mechanistic vs Phenomenological Model]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

Write the Type II functional response.
??
f = aN / (1 + ahN).
++++

What is the Type II asymptote?
??
1/h, the inverse of handling time.
++++
