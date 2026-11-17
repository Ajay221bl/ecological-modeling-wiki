---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - modeling
aliases:
  - "Process-based vs descriptive model"
  - "Mechanistic or phenomenological"
status: seedling
---

# Mechanistic vs Phenomenological Model

> [!summary] In plain words
> a mechanistic model is built from how the system works (births, deaths, consumption), so its parameters have biological meaning, while a phenomenological model describes the shape of a pattern (a polynomial or smooth) without claiming why it happens.

## The question
Should my model describe the pattern or the process behind it?

## Built from
- [[Mechanistic Model]] and [[Phenomenological Model]].
- [[Deterministic Functions in Ecology]] and [[Functional Response]].
- [[Polynomial]] and [[Generalized Additive Model]].

## The reasoning, step by step
1. **Mechanistic:** start from a process, such as logistic growth or the Type II functional response, and derive the equation.
2. **Its parameters mean something:** attack rate, handling time, carrying capacity.
3. **Phenomenological:** choose a flexible curve that fits, such as a quadratic or a GAM smooth.
4. **Mechanistic models extrapolate better** when the mechanism holds; phenomenological ones can fit better within the data range.
5. **Hobbs and Hooten (2015 Ch2)** encourage writing deterministic models that express ecological ideas, then adding stochastic parts.
6. **Many real models mix both:** a mechanistic core with phenomenological covariate effects.

| | Mechanistic | Phenomenological |
|---|---|---|
| Built from | Process | Pattern |
| Parameters | Biological meaning | Shape only |
| Extrapolation | Better if the mechanism holds | Risky |
| Examples | Logistic growth, Holling Type II | Polynomial, GAM |

## So in practice
Use mechanistic forms when theory gives one and you want interpretable parameters; use phenomenological ones for exploration and prediction within the range of the data.

## What would go wrong otherwise
Interpreting the coefficient of x² in a quadratic as a biological rate.

## Explain it back
- Which kind usually extrapolates better, and when?

*Pass test:* you can classify a model and say what its parameters mean.

## Connections
- **Related:** [[Theoretical vs Empirical Modeling]], [[Polynomial vs Spline]], [[Linear vs Nonlinear Function]], [[Correlation vs Causation]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Modeling Foundations]], [[MOC - Linear Models and GLMs]]

## Flashcards

Mechanistic vs phenomenological model?
??
Mechanistic: built from process, parameters with biological meaning. Phenomenological: describes the pattern's shape.
++++
