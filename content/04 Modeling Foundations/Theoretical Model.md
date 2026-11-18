---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "A theoretical model is a small set of equations about how nature works, studied with maths to find out what follows from them, usually without any data."
aliases:
  - "Theoretical modeling"
status: seedling
---

# Theoretical Model

An engineer with a pencil works out how much weight a bridge beam can hold from the physics of forces, before any bridge is built. She is not measuring bridges; she is asking "*if* the beam behaves like this, what must follow?" A **theoretical model** asks the same of nature: it is a small set of equations about a *mechanism*, the biological process behind a pattern such as births or competition, studied with maths to find out what follows from them, usually without any data. Its parameters mean something biological, so they are portable quantities you could compare between places; Hobbs and Hooten count it as one of three modeling traditions, beside empirical and simulation models ([[Hobbs and Hooten 2015 Ch2]]).

The classic example is the [[Logistic Regression|logistic model]]: change in N per year = r × N × (1 − N / K), where r is the *intrinsic growth rate* (how fast a population grows when small) and K the *[[Carrying Capacity|carrying capacity]]* (the size the environment can support). With r = 0.4 and K = 500: at N = 50 the change is 0.4 × 50 × 0.9 = 18; at N = 450 it is 0.4 × 450 × 0.1 = 18 too; at N = 250 it is 0.4 × 250 × 0.5 = 50, the fastest; and at N = 500 it is 0, an *equilibrium*, a state where the model stops changing. No data were used: the maths alone shows that the population levels off at K and grows fastest at K/2.

Some questions are about logic, not measurement, such as "can two competitors coexist if...?", and a theoretical model answers them cleanly. Its weakness is the flip side: it has no built-in way to handle uncertainty or to be tested against data, which is the strength of the [[Empirical Model]], and its conclusions are only as good as its assumptions, which are much shakier in ecology than in bridge physics. Theoretical does not mean useless in practice: its equations often become the deterministic part of applied [[Statistical Model|statistical models]] ([[Deterministic Component]]). Nor is it the same as an [[Analytical Model]], which is any equation with given parameters; a theoretical model is one studied for what its mechanism implies ([[Functions in Maths]]).

```mermaid
flowchart LR
  A["Assumptions about a mechanism"] --> E["Equations with biological parameters (r, K)"]
  E --> M["Maths: equilibria, stability"]
  M --> I["Insight, no data needed"]
```
*What to look at:* data never enter the chain.

```r
logistic_change <- function(N, r = 0.4, K = 500) r * N * (1 - N / K)
logistic_change(c(50, 250, 450, 500))   # 18 50 18 0
curve(logistic_change(x), 0, 500, xlab = "N", ylab = "change per year")
```

## Connections
- **Builds on:** [[Analytical Model]], [[Functions in Maths]], [[Statistical Model]]
- **Leads to:** [[Empirical Model]], [[Deterministic Functions in Ecology]], [[Hierarchical Model]], [[Logistic Regression]], [[Carrying Capacity]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]], molecular note [[Theoretical vs Empirical Modeling]]
- **Go deeper:** [[Hobbs and Hooten 2015 Ch2]]

## Flashcards

What is a theoretical model's main strength?
??
Its parameters are biological quantities (like r and K), and maths alone reveals what the assumed mechanism implies.
++++

What does a theoretical model lack?
??
A built-in treatment of uncertainty and a test against data.
++++
