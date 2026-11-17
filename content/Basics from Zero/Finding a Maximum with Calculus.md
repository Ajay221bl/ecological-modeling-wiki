---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Maximization"
  - "Setting the derivative to zero"
  - "Optimization by calculus"
status: seedling
---

# Finding a Maximum with Calculus

**In one line:** to find the highest point of a smooth curve, look for where its slope is zero.

> [!info] Before this, it helps to know
> [[Derivative]] (slope at a point) · [[Quadratic Term]] (a curve with a peak)

## The everyday picture
Hiking in fog. You can't see the summit, but you can feel the ground. While it tilts up, keep walking. When it is level in every direction, you are on top. "Level" is "slope zero".

*Where the picture stops working:* level ground could also be the bottom of a valley or a small local hill that isn't the highest one.

## Words you'll need
- **Maximum:** the highest point. **Minimum:** the lowest.
- **Second derivative:** the slope of the slope. Negative means the curve bends downward (a peak).
- **Local maximum:** highest nearby, not necessarily highest overall.

## A tiny example
A coin lands heads 7 times in 10. Which heads-probability p makes that most likely?
- Likelihood ∝ p⁷(1 − p)³. Its log is 7·log(p) + 3·log(1 − p).
- Slope: 7/p − 3/(1 − p).
- Set to zero: 7(1 − p) = 3p, so 7 = 10p and p = **0.7**.
- The best estimate is the observed proportion, exactly as intuition says.

## Start from zero
1. **Write the function you want to maximize.** Often a log-likelihood.
2. **Take its derivative.**
3. **Set the derivative to zero and solve.** *Why:* at the top the curve is neither rising nor falling.
4. **Check it is a peak.** The second derivative must be negative.
5. **The curvature at the peak tells precision.** A sharp peak means the data pin the answer down. A flat one means wide uncertainty ([[Standard Error]]).
6. **When algebra fails, the computer climbs.** It takes steps uphill using numerical slopes ([[Numerical Optimization]]).

## See it
![[Likelihood peak.png|700]]
*What to look at:* the tangent at the top is horizontal, and the peak sits at p = 0.7.

## Why it is this way
"Best" in statistics nearly always means "the value that maximizes or minimizes something": largest likelihood, smallest sum of squares. Calculus turns that search into solving an equation. Even when no neat solution exists, every fitting routine in R is hunting for the place where the slope is zero.

## In R
```r
loglik <- function(p) 7 * log(p) + 3 * log(1 - p)
optimize(loglik, c(0.01, 0.99), maximum = TRUE)$maximum   # 0.70
p <- seq(0.05, 0.95, 0.01)
plot(p, loglik(p), type = "l"); abline(v = 0.7, lty = 2)
D(expression(7 * log(p) + 3 * log(1 - p)), "p")           # 7/p - 3/(1 - p)
```
`optimize()` climbs the curve numerically and lands on 0.7.

## In the course
Hobbs and Hooten derive maximum likelihood estimates this way ([[Hobbs and Hooten 2015 Ch4]]). Powell and Gale do the same for survival ([[Powell and Gale 2015 Ch3]]).

## Common confusions
- **"The computer always finds the maximum."** It can stop on a local peak or fail to settle, which is what convergence warnings are about ([[Convergence Warnings]]).
- **"Maximizing likelihood and log-likelihood differ."** The log is always increasing, so both peak at the same place.

## Explain it back
- Why is the slope zero at a maximum?
- Why does the sharpness of the peak relate to the standard error?

*Pass test:* you can find the peak of a simple log-likelihood by setting its slope to zero.

## Connections
- **Builds on:** [[Derivative]]
- **Leads to:** [[Maximum Likelihood Estimation]], [[Least Squares]], [[Numerical Optimization]]
- **Part of:** [[MOC - Basics from Zero]]

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
