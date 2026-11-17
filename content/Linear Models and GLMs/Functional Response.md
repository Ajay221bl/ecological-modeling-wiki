---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Holling functional response"
  - "Type I, II and III functional responses"
  - "Holling disc equation"
  - "Consumption rate"
status: seedling
---

# Functional Response

**In one line:** a functional response describes how a predator's or herbivore's consumption rate changes with prey or food density: linear (Type I), saturating (Type II) or sigmoid (Type III).

> [!info] Before this, it helps to know
> [[Functions in Maths]] · [[Asymptote]]

## The everyday picture
Eating sweets from a bowl. With few sweets you eat what you find; with a full bowl you can only chew so fast, so eating levels off.

## Start from zero
1. **Type I:** consumption rises linearly with density, then may cap abruptly.
2. **Type II (Holling disc):** f = aN / (1 + ahN), with attack rate a and handling time h; it saturates at 1/h.
3. **Type III:** sigmoid; low consumption at low density (prey switching, refuges), then saturation.
4. **A classic deterministic model** of the kind Hobbs and Hooten (2015 Ch2) use to express ecological ideas.
5. **Fitted with nonlinear least squares or likelihood,** or approximated by a GAM.

## In R
```r
N <- c(0, 5, 10, 20, 40, 80); a <- 0.5; h <- 0.2
round(a * N / (1 + a * h * N), 2)   # Type II; levels off toward 1/h = 5
```

## In the course
[[Hobbs and Hooten 2015 Ch2]].

## Common confusions
- **"The asymptote is the attack rate."** It is 1 / handling time.

## Explain it back
- What sets the Type II asymptote?

*Pass test:* you can write and sketch the three types.

## Connections
- **Builds on:** [[Functions in Maths]], [[Asymptote]]
- **Leads to:** [[Michaelis-Menten Function]], [[Mechanistic vs Phenomenological Model]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

Write the Type II functional response.
??
f = aN / (1 + ahN).
++++

What is the Type II asymptote?
??
1/h, the inverse of handling time.
++++
