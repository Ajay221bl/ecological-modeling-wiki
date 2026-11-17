---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Theoretical modeling"
status: seedling
---

# Theoretical Model

**In one line:** a theoretical model is a small set of equations about how nature works, studied with maths to find out what follows from them, usually without any data.

> [!info] Before this, it helps to know
> [[Analytical Model]] (an equation with given parameters) · [[Functions in Maths]]

## The everyday picture
An engineer with a pencil works out how much weight a bridge beam can hold, purely from the physics of forces, before any bridge is built. She isn't measuring bridges; she's asking "*if* the beam behaves like this, what must follow?"

Theoretical ecologists do the same: "*if* a population grows faster when small and stops at a ceiling, what happens over time?"

*Where the picture stops working:* bridge physics is very well known. Ecological "laws" are much shakier, so a theoretical model's conclusions are only as good as its assumptions.

## Words you'll need
- **Mechanism:** the biological process behind a pattern (births, competition, grazing).
- **Equilibrium:** a state where the model stops changing.
- **Carrying capacity (K):** the population size the environment can support.
- **Intrinsic growth rate (r):** how fast a population grows when it's small.
- **Logistic model:** growth that slows as the population nears K.

## A tiny example
The logistic model says: change in N per year = r × N × (1 − N / K).
- With r = 0.4 and K = 500: at N = 50, change = 0.4 × 50 × 0.9 = **18**. At N = 450, change = 0.4 × 450 × 0.1 = **18** too. At N = 500, change = **0**: the equilibrium.
- No data were used. The maths alone told you the population levels off at K, and grows fastest at N = K/2 = 250 (change = 0.4 × 250 × 0.5 = 50).

## Start from zero
1. **Write down a few rules you believe about a process.** "Growth slows as the population fills up."
2. **Turn them into equations with parameters that mean something biological** (r, K).
3. **Use maths to find what follows:** equilibria, whether they're stable, how fast things change. *Why maths, not data:* the question is "what do these rules imply?", which logic can answer.
4. **Strength:** parameters are portable biological quantities you could compare between places ([[Hobbs and Hooten 2015 Ch2]], p. 18).
5. **Weakness:** no built-in way to handle uncertainty or test against data. That's the [[Empirical Model]]'s strength.

## See it
```mermaid
flowchart LR
  A["Assumptions about a mechanism"] --> E["Equations with biological parameters (r, K)"]
  E --> M["Maths: equilibria, stability"]
  M --> I["Insight, no data needed"]
```
*What to look at:* data never enter the chain.

## Why it is this way
Some questions are about logic, not measurement: "can two competitors coexist if...?" A theoretical model answers those cleanly, and its equations can later become the deterministic part of a statistical model ([[Deterministic Component]]).

## In R
```r
logistic_change <- function(N, r = 0.4, K = 500) r * N * (1 - N / K)
logistic_change(c(50, 250, 450, 500))   # 18 50 18 0
curve(logistic_change(x), 0, 500, xlab = "N", ylab = "change per year")
```

## In the course
One of the three modeling traditions in Hobbs and Hooten's chapter on deterministic models ([[Hobbs and Hooten 2015 Ch2]], §2.1).

## Common confusions
- **"Theoretical means useless in practice."** Its equations often become the core of applied statistical models.
- **Theoretical vs analytical.** An analytical model is any equation with given parameters; a theoretical model is one studied for what its mechanism implies.

## Explain it back
- Use the engineer with a pencil to explain a theoretical model.
- In the logistic example, why is N = 500 an equilibrium?
- What is a theoretical model good at, and what is it weak at?

*Pass test:* you can say what a logistic model predicts without any data.

## Connections
- **Builds on:** [[Analytical Model]], [[Functions in Maths]]
- **Leads to:** [[Empirical Model]], [[Deterministic Functions in Ecology]], [[Hierarchical Model]]
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
