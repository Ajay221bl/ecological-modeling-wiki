---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Mathematical function"
  - "f(x)"
status: seedling
---

# Functions in Maths

**In one line:** a function is a rule that turns each input into exactly one output, written y = f(x) and read "y equals f of x".

> [!info] Before this, it helps to know
> [[Variable and Observation]] (inputs and outputs are variables) · [[Greek Letters and Notation]]

## The everyday picture
A vending machine. You press B4 and out comes the same packet of crisps, every time. Button in, rule inside the machine, snack out. Press B4 twice and you never get crisps once and chocolate the next time: one input, one output.

A mathematical function is the same machine with numbers. You put in a value of x (say, how many centimetres of rain fell), the rule inside does some arithmetic, and out comes one value of y (the expected grass biomass).

*Where the picture stops working:* a vending machine's rule is hidden. In modeling, writing the rule down is the whole point, because the rule is your idea about how nature works.

## Words you'll need
- **Function:** a rule that gives exactly one output for each input.
- **Input (x):** the value you feed in; in a model, a predictor.
- **Output (y or f(x)):** the value that comes out.
- **f(x):** "f of x", the output of function f when the input is x. It does *not* mean f times x.
- **Parameter:** a fixed number inside the rule that sets its exact shape ([[Parameter vs Estimate]]).
- **Slope:** how much the output changes for each one-unit increase in the input ([[Slope]]).
- **Deterministic:** with no randomness; the same input always gives the same output.

## A tiny example
The rule: f(x) = 3 + 1.2x. "Take x, multiply by 1.2, then add 3."
- f(0) = 3 + 1.2 × 0 = **3**
- f(1) = 3 + 1.2 = **4.2**
- f(5) = 3 + 6 = **9**
- f(10) = 3 + 12 = **15**

Every extra unit of x adds the same 1.2 to y. That's the **slope**. The 3 is where the line starts when x = 0: the **intercept**. Change 1.2 to 2 and you get a steeper line; change 3 to 0 and the line starts at zero. Those two numbers are the parameters.

## Start from zero
1. **Start with the machine.** Input goes in, a rule is applied, one output comes out.
2. **Write the rule in symbols.** f(x) = 3 + 1.2x. *Why symbols:* so the rule can be applied to any x, not just the ones you tried.
3. **The fixed numbers in the rule are parameters.** *Why they matter:* they set the exact shape. In modeling we usually know the *kind* of rule but not its parameters, and estimating them from data is the job of statistics ([[Parameter vs Estimate]]).
4. **Different rules give different shapes.** A linear function rises at a constant rate. A power function bends. An asymptotic function rises then levels off. A threshold function jumps. *Why it matters:* each shape is a different idea about nature. "More rain always means more grass" is linear; "more rain helps until the soil is soaked" is asymptotic ([[Deterministic Functions in Ecology]]).
5. **A deterministic model is just a function.** Hobbs and Hooten write it as μ = g(θ, x): parameters θ ("theta") and observed inputs x go in, and the expected value μ comes out ([[Hobbs and Hooten 2015 Ch2]], p. 21).
6. **Real data scatter around the function.** The function gives the average; the scatter of real points around it is handled separately by a probability distribution ([[Deterministic and Stochastic Components]]).

## See it
![[Function shapes.png|700]]
*What to look at:* each panel turns the same inputs x into different outputs y. Choosing the shape is choosing your ecological hypothesis.

## Why it is this way
Why insist on exactly *one* output per input? Because a prediction has to be definite. If "10 cm of rain" could give either 15 or 40 units of biomass from the rule itself, the rule wouldn't be saying anything. The randomness of real life is real, but we keep it in a separate piece of the model so the function can be a clear, testable statement. Every model in the course has a function at its core, even when the software hides it. Writing the function down forces you to say what you think happens.

## In R
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

## In the course
Hobbs and Hooten's chapter on deterministic models is a tour of a "few good functions" ecologists reuse: linear, exponential, power, asymptotic (Michaelis-Menten) and threshold models ([[Hobbs and Hooten 2015 Ch2]], §2.2).

## Common confusions
- **f(x) is not f times x.** It means "the function f applied to x".
- **A maths function vs an R function.** The idea is the same (input, rule, output), but an R function can do anything, including reading files. A maths function only maps numbers to numbers.
- **"The function should pass through every data point."** No. It describes the average; real points scatter around it.

## Explain it back
- Explain a function using a vending machine.
- For f(x) = 3 + 1.2x, what is f(2), and what do the 3 and the 1.2 each control?
- Why does a model keep the function separate from the random scatter?

*Pass test:* you can sketch what a linear and a levelling-off function would each claim about rain and grass.

## Connections
- **Builds on:** [[Variable and Observation]], [[Greek Letters and Notation]]
- **Leads to:** [[Deterministic Functions in Ecology]], [[Deterministic and Stochastic Components]], [[Linear Regression]]
- **Part of:** [[MOC - Basics from Zero]]
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
