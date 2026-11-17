---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - lm-glm
aliases:
  - "Linear in parameters"
  - "What linear means in a linear model"
  - "Linear vs nonlinear model"
status: seedling
---

# Linear vs Nonlinear Function

> [!summary] In plain words
> "linear" in "linear model" means linear in the parameters, not a straight line in x, so y = a + bx + cx² is a linear model, while y = ax / (b + x) is nonlinear because b sits inside a fraction.

## The question
Why is a quadratic regression still called a linear model?

## Built from
- [[Linear Function]] and [[Nonlinear Function]].
- [[Polynomial]] and [[Quadratic Term]].
- [[Michaelis-Menten Function]] and [[Nonlinear Least Squares]].

## The reasoning, step by step
1. **Linear in parameters:** each parameter multiplies a known quantity and the terms are added.
2. **x can be transformed freely:** x², log(x), sin(x) are just new columns in the [[Model Matrix]].
3. **Nonlinear in parameters:** a parameter appears in an exponent, denominator or inside another function, such as a, b in a·e^(bx) or ax/(b + x).
4. **Linear-in-parameter models** have closed-form least-squares solutions and are fitted by `lm()`.
5. **Nonlinear ones** need iterative fitting (`nls()`, likelihood with `optim()`) and starting values.
6. **GLMs are linear on the link scale** and nonlinear on the response scale; GAMs are linear in their basis coefficients.

| Model | Linear in parameters? |
|---|---|
| y = a + bx | Yes |
| y = a + bx + cx² | Yes |
| y = a + b log(x) | Yes |
| log(y) = a + bx | Yes (after taking logs) |
| y = ax / (b + x) | No |
| y = a e^(bx) + noise | No (unless you log it and accept multiplicative error) |

## So in practice
If you can write the model as columns of known numbers times coefficients, use `lm()` or `glm()`; otherwise use `nls()` or a likelihood.

## What would go wrong otherwise
Using `nls()` for a polynomial, or thinking `lm()` can only fit straight lines.

## Explain it back
- Is y = a + b/x linear in the parameters?

*Pass test:* you can classify any equation.

## Connections
- **Related:** [[Mechanistic vs Phenomenological Model]], [[Polynomial vs Spline]], [[Linear, Semi-log and Log-log Models]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Linear Models and GLMs]], [[MOC - Basics from Zero]]

## Flashcards

What does "linear" mean in "linear model"?
??
Linear in the parameters, not necessarily a straight line in x.
++++

Is y = ax/(b + x) linear?
??
No; b is in the denominator.
++++
