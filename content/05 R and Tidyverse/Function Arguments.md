---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "Arguments are the inputs you hand to a function, either by position or by name, and many have default values that apply when you say nothing."
aliases:
  - "Arguments"
  - "Defaults"
  - "Calling a function"
status: seedling
---

# Function Arguments

Order "a latte" and you get the defaults: medium, whole milk, hot. Order "a latte, size large, milk oat" and you change two settings and leave the rest. A function call in R works the same way. It is written `name(arguments)`, and **arguments** are the inputs you hand over, either by position or by name. Many arguments have *default values* that apply when you say nothing, so you only mention what differs from the usual. A function is a rule from inputs to an output, just as in maths ([[Functions in Maths]]).

In the code below, `rnorm(3)` draws three random numbers using the defaults, mean 0 and standard deviation 1. `rnorm(3, mean = 10, sd = 2)` changes two of them by name, and because names are matched first, `rnorm(sd = 2, n = 3, mean = 10)` does exactly the same thing in any order. Unnamed arguments are matched by position, so `rnorm(5, 10, 2)` also works, but positions are easy to swap by mistake. A good habit is to name every argument after the first one or two, which also documents your intent. `args(rnorm)` or the help page `?rnorm` lists all arguments and their defaults ([[Help Files in R]]).

Defaults are choices someone else made for you, and some of them matter statistically. `glm()` assumes a normal (Gaussian) family unless told otherwise, and `lmer()` fits by REML unless you set `REML = FALSE`. "If I don't set it, nothing happens" is never true: the default happens. Knowing the important defaults of the functions you use is part of knowing what your model is. The same idea carries over when you write functions of your own ([[Writing Your Own Function]]).

```r
set.seed(1)
rnorm(3)                        # defaults: mean 0, sd 1
rnorm(3, mean = 10, sd = 2)     # named
rnorm(sd = 2, n = 3, mean = 10) # names allow any order
args(rnorm)                     # shows arguments and defaults
round(3.14159, digits = 2)
```

## Connections
- **Builds on:** [[Functions in Maths]]
- **Leads to:** [[Writing Your Own Function]], [[Help Files in R]]
- **See also:** [[Objects and Assignment]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What is a default argument?
??
A value the function uses automatically when you don't supply one.
++++

Why name arguments when calling a function?
??
It prevents mix-ups from positional matching and makes the code readable.
++++
