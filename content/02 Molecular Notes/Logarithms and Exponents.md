---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - basics
aliases:
  - "Log and exp"
  - "Log scale"
status: seedling
---

# Logarithms and Exponents

> [!summary] In plain words
> An **exponent** says "multiply this many times"; a **logarithm** asks the reverse question, "how many times was it multiplied?". The **exponential function** exp() and the **natural log** ln() are the pair built on the number e ≈ 2.718, and they undo each other. Ecology leans on them because growth multiplies, and logs turn multiplying into adding.

## The everyday picture
Folding a sheet of paper. Each fold doubles the thickness: 3 folds gives 2³ = 8 layers (exponent). Someone hands you a stack 8 layers thick and asks how many folds made it: 3 (logarithm). Folding and counting folds are opposite directions of the same idea.

*Where the picture stops working:* folds are whole numbers. Exponents and logs work for any number, like 2^1.5.

## The question
How do exponents, logs, exp() and ln() fit together, and why does ecology use them so much?

## Built from
- [[Exponent]]: repeated multiplication
- [[Logarithm]]: the exponent you'd need; the reverse of an exponent
- [[Natural Logarithm]]: the log with base e
- [[Exponential Function]]: exp(x) = eˣ, which undoes ln

## See it
![[Logarithms and exponents.png|700]]
*What to look at:* the exponential curve shoots up; the log curve is the same curve mirrored, flattening out.

## The reasoning, step by step
1. **Growth multiplies.** A population growing 4% a year is multiplied by 1.04 each year ([[Exponent]]).
2. **Logs turn multiplying into adding.** log(100 × 1000) = 2 + 3 = 5 ([[Logarithm]]). *Why that helps:* straight-line models add things, so multiplying processes become straight lines on the log scale.
3. **The natural log is the convenient base.** Small differences in ln read as percentage changes: ln(1.05) ≈ 0.049 ([[Natural Logarithm]]).
4. **exp() brings you back.** Models fitted on the log scale are turned into real numbers with exp(), which is always positive ([[Exponential Function]]).

**A worked example in numbers.** A Poisson model says log(mean birds) = 0.5 + 0.2 × rainfall.
- At rainfall 5: log mean = 1.5, so mean = exp(1.5) = **4.48** birds.
- Each extra unit of rain *adds* 0.2 on the log scale, which *multiplies* the mean by exp(0.2) = **1.22**.
Adding on one scale is multiplying on the other. That's the whole trick.

## So in practice
When a GLM coefficient is on the log scale, exponentiate it and read it as "times as many" ([[Link Function]], [[Poisson Regression]]).

## What would go wrong otherwise
- You'd read a log-scale coefficient of 0.2 as "0.2 more birds".
- You'd fit straight lines to curved, multiplying growth.

## Explain it back
- Use folding paper to explain exponents and logs.
- Why does adding 0.2 on the log scale multiply the mean by 1.22?

*Pass test:* you can move a number between the log scale and the real scale and say what it means.

## Connections
- **Related:** [[Generalized Linear Model]], [[Why GLMs need a link function]], [[Lognormal Distribution]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Basics from Zero]]

## Flashcards

How are exponents and logarithms related?
??
An exponent multiplies a number by itself some number of times; a log asks how many times. They undo each other.
![[Logarithms and exponents.png]]
++++

Why does adding on the log scale mean multiplying on the real scale?
??
Because log(a × b) = log(a) + log(b); exp of a sum is a product, so +0.2 on the log scale is × exp(0.2) = 1.22.
++++
