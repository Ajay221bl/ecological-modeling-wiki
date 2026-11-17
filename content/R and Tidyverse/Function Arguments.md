---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Arguments"
  - "Defaults"
  - "Calling a function"
status: seedling
---

# Function Arguments

**In one line:** arguments are the inputs you hand to a function, either by position or by name, and many have default values that apply when you say nothing.

> [!info] Before this, it helps to know
> [[Functions in Maths]] (input to output rules) · [[Objects and Assignment]] (naming things)

## The everyday picture
Ordering coffee. "A latte" gets you the defaults: medium, whole milk, hot. "A latte, size large, milk oat" changes two settings and leaves the rest. You only mention what differs from the usual.

## Start from zero
1. **A call is `name(arguments)`.**
2. **Arguments match by name or by position.** `rnorm(5, 10, 2)` and `rnorm(n = 5, mean = 10, sd = 2)` are the same.
3. **Defaults fill in what you omit.** `rnorm(5)` uses mean 0 and sd 1.
4. **Name everything after the first argument or two.** *Why:* positions are easy to swap by mistake, and names document your intent.
5. **`?name` lists the arguments and defaults** ([[Help Files in R]]).
6. **Defaults are choices someone made for you.** `glm()` defaults to a normal family. Know the important ones.

## In R
```r
set.seed(1)
rnorm(3)                        # defaults: mean 0, sd 1
rnorm(3, mean = 10, sd = 2)     # named
rnorm(sd = 2, n = 3, mean = 10) # names allow any order
args(rnorm)                     # shows arguments and defaults
round(3.14159, digits = 2)
```

## Common confusions
- **"Argument order never matters."** It matters whenever you don't use names.
- **"If I don't set it, nothing happens."** The default happens. REML in `lmer()` is one such default.

## Explain it back
- What does `rnorm(5)` assume?
- Why name arguments?

*Pass test:* you can call a function with named arguments and look up its defaults.

## Connections
- **Builds on:** [[Functions in Maths]]
- **Leads to:** [[Writing Your Own Function]], [[Help Files in R]]
- **Part of:** [[MOC - R for Ecological Modeling]]

## Flashcards

What is a default argument?
??
A value the function uses automatically when you don't supply one.
++++

Why name arguments when calling a function?
??
It prevents mix-ups from positional matching and makes the code readable.
++++
