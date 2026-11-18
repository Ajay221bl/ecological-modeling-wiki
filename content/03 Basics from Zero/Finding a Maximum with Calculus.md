---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "To find the highest point of a smooth curve, look for where its slope is zero."
aliases:
  - "Maximization"
  - "Setting the derivative to zero"
  - "Optimization by calculus"
status: seedling
---

# Finding a Maximum with Calculus

Imagine hiking to a summit in thick fog. You cannot see the top, but you can feel the ground: while it tilts up, keep walking; when it is level in every direction, you are on top. That is the whole idea of **finding a maximum with calculus**: the highest point of a smooth curve is where its slope, the [[Derivative]], is zero, because at the top the curve is neither rising nor falling. Level ground has two other possibilities, though: the bottom of a valley (a *minimum*), or a small hill that is highest nearby but not highest overall (a *local maximum*). To tell a peak from a valley you check the *second derivative*, the slope of the slope; if it is negative the curve bends downward, so you are on a peak.

A classic example. A coin lands heads 7 times in 10 tosses. Which heads-probability p makes that result most likely? The likelihood is [[Proportional To|proportional to]] p⁷(1 − p)³, and it is easier to work with its log, 7·log(p) + 3·log(1 − p). The log is an increasing function, so the [[Log-likelihood|log-likelihood]] and the likelihood peak at the same place. The slope of the log-likelihood is 7/p − 3/(1 − p). Set it to zero: 7(1 − p) = 3p, so 7 = 10p and p = 0.7. The best estimate is the observed proportion, exactly as intuition says. The recipe is always the same: write the function to maximize, take its derivative, set it to zero, solve, and check it bends downward.

"Best" in statistics nearly always means "the value that maximizes or minimizes something": the largest likelihood ([[Maximum Likelihood Estimation]]), the smallest [[Sum of Squares|sum of squares]] ([[Least Squares]]). Calculus turns that search into solving an equation, and the shape of the peak carries information too: a sharp peak means the data pin the answer down, a flat one means wide uncertainty, which is how curvature becomes a [[Standard Error]]. When the algebra cannot be solved, the computer climbs instead, taking steps uphill using numerical slopes ([[Numerical Optimization]]). It can stop on a local peak or fail to settle, which is what [[Convergence Warnings]] are about. Hobbs and Hooten derive maximum likelihood estimates this way ([[Hobbs and Hooten 2015 Ch4]]), as do Powell and Gale for survival ([[Powell and Gale 2015 Ch3]]). The same logic finds the optimum of a [[Quadratic Term]].

![[Likelihood peak.png|700]]
*What to look at:* the tangent at the top is horizontal, and the peak sits at p = 0.7.

```r
loglik <- function(p) 7 * log(p) + 3 * log(1 - p)
optimize(loglik, c(0.01, 0.99), maximum = TRUE)$maximum   # 0.70
p <- seq(0.05, 0.95, 0.01)
plot(p, loglik(p), type = "l"); abline(v = 0.7, lty = 2)
D(expression(7 * log(p) + 3 * log(1 - p)), "p")           # 7/p - 3/(1 - p)
```
`optimize()` climbs the curve numerically and lands on 0.7.

## Connections
- **Builds on:** [[Derivative]], [[Proportional To]], [[Sum of Squares]]
- **Leads to:** [[Maximum Likelihood Estimation]], [[Least Squares]], [[Numerical Optimization]], [[Log-likelihood]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]

## Flashcards

How does calculus locate a maximum?
??
Set the derivative equal to zero and solve, then check the curve bends downward there.
![[Likelihood peak.png]]
++++

Why does maximizing the log-likelihood give the same answer as maximizing the likelihood?
??
The log is an increasing function, so both peak at the same parameter value.
++++

What does a sharply curved peak in the log-likelihood mean?
??
The data pin the estimate down tightly, so the standard error is small.
++++
