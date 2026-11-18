---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "A function is a rule that turns each input into exactly one output, written y = f(x) and read \"y equals f of x\"."
aliases:
  - "Mathematical function"
  - "f(x)"
status: seedling
---

# Functions in Maths

Press B4 on a vending machine and out comes the same packet of crisps, every time: button in, rule inside the machine, snack out. You never get crisps once and chocolate the next time. A **function** in maths is the same machine with numbers: a rule that turns each input into exactly one output. It is written y = f(x), read "y equals f of x". The *input* x is the value you feed in (in a model, a [[Predictor Variable|predictor]] such as centimetres of rain), the *output* y or f(x) is what comes out (such as expected grass biomass), and f(x) means "the function f applied to x", not f times x. A function with no randomness, where the same input always gives the same output, is *deterministic*.

Take the rule f(x) = 3 + 1.2x: "multiply x by 1.2, then add 3". Then f(0) = 3, f(1) = 4.2, f(5) = 9 and f(10) = 15. Every extra unit of x adds the same 1.2 to y; that is the [[Slope]]. The 3 is where the line starts when x is 0, the *intercept*. These fixed numbers inside the rule are the function's *parameters*: change 1.2 to 2 and the line gets steeper, change 3 to 0 and it starts at zero. In modeling you usually know the kind of rule but not its parameters, and estimating them from data is the job of statistics ([[Parameter vs Estimate]]). Different rules give different shapes, and each shape is a different idea about nature: "more rain always means more grass" is a [[Equation of a Line|straight line]], while "more rain helps until the soil is soaked" is a curve that levels off ([[Deterministic Functions in Ecology]]). Hobbs and Hooten tour a "few good functions" ecologists reuse: linear, exponential, power, asymptotic and threshold ([[Hobbs and Hooten 2015 Ch2]]).

Why insist on exactly one output per input? Because a prediction has to be definite. If "10 cm of rain" could give either 15 or 40 units of biomass from the rule itself, the rule would not be saying anything. Real data do scatter, but that randomness is kept in a separate part of the model: the function gives the average, and a [[Probability Distribution|probability distribution]] describes the scatter around it ([[Deterministic and Stochastic Components]]). So a fitted function is not supposed to pass through every data point. Hobbs and Hooten write a deterministic model as μ = g(θ, x): parameters θ and observed inputs x go in, the [[Expected Value|expected value]] μ comes out. Every model in the course has such a function at its core, even when the software hides it, and writing it down forces you to say what you think happens. The same input-rule-output idea is how you write [[Functions in R|functions in R]] ([[Writing Your Own Function|Writing Functions]]), although an R function can do far more than map numbers to numbers. Inputs and outputs are variables measured on observations ([[Variable and Observation]]), written in the notation of [[Greek Letters and Notation]].

![[Function shapes.png|700]]
*What to look at:* each panel turns the same inputs x into different outputs y. Choosing the shape is choosing your ecological hypothesis.

```r
# Write your own function: input x, parameters a and b, output y
f <- function(x, a = 3, b = 1.2) {
  a + b * x
}
f(5)             # 9
f(0:10)          # works on a whole vector of inputs at once
curve(f(x), from = 0, to = 10, ylab = "y")   # draw it
```
Writing maths functions as R functions is also how you build simulations ([[Writing Your Own Function|Writing Functions]]).

## Connections
- **Builds on:** [[Variable and Observation]], [[Greek Letters and Notation]], [[Equation of a Line]]
- **Leads to:** [[Deterministic Functions in Ecology]], [[Deterministic and Stochastic Components]], [[Linear Regression]], [[Predictor Variable]], [[Probability Distribution]], [[Expected Value]], [[Functions in R]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]
- **Go deeper:** [[Hobbs and Hooten 2015 Ch2]]

## Flashcards

What is a function, in one sentence?
??
A rule that turns each input x into exactly one output y, like a vending machine button.
![[Function shapes.png]]
++++

In μ = g(θ, x), what is each symbol?
??
g is the deterministic function, θ the parameters, x the observed inputs (predictors), and μ the expected value it returns.
![[Function shapes.png]]
++++

Why does choosing a function's shape matter ecologically?
??
Each shape (linear, levelling off, threshold) is a different claim about how nature works.
++++
