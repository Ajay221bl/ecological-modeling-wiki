---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Area under a curve"
  - "Integration"
  - "∫"
status: seedling
---

# Integral

**In one line:** an integral adds up a continuous curve, giving the area between the curve and the horizontal axis.

> [!info] Before this, it helps to know
> [[Summation Notation]] (adding up a list) · [[Derivative]] (the opposite operation)

## The everyday picture
Rain in a gauge. The rain rate changes minute by minute. The water collected is the rate added up over the whole storm. An integral is that running total of something that changes smoothly.

*Where the picture stops working:* a gauge adds automatically. Many integrals in statistics have no formula and must be approximated.

## Words you'll need
- **∫:** a stretched S for "sum". ∫ f(x) dx is the area under f.
- **dx:** a very thin slice of the x-axis.
- **Limits:** where the adding starts and stops.
- **Density:** a curve whose area, not height, gives probability ([[Probability Density Function]]).

## A tiny example
Area under y = 2x from x = 0 to x = 3.
- It is a triangle: base 3, height 6, area = ½ × 3 × 6 = **9**.
- By thin slices of width 1 (midpoints 0.5, 1.5, 2.5): 1 + 3 + 5 = **9**.
- For a probability density, the whole area is 1, and the area between two values is the probability of landing there.

## Start from zero
1. **A sum adds separate items.** Σ handles lists.
2. **A curve has no separate items.** So cut the area into thin strips, each about height × width.
3. **Add the strips.** As they get thinner, the total settles on the exact area. That limit is the integral.
4. **Integration undoes differentiation.** The integral of 2x is x², whose derivative is 2x again.
5. **Probability for continuous variables is an area.** *Why:* any single exact value has probability zero, so only ranges have probability.
6. **Hard integrals are done by simulation.** Draw many random values and average ([[Monte Carlo Integration]]).

## See it
![[Integral as area.png|700]]
*What to look at:* the strips approximate the shaded area, and thinner strips fit better.

## Why it is this way
Continuous quantities can't be totalled by counting, so you need a way to add infinitely many infinitely thin pieces. Statistics needs this constantly: the chance a bird weighs between 18 and 22 g, the average of a distribution, and the denominator of Bayes' theorem are all integrals. The last one is usually impossible to do exactly, which is the whole reason MCMC exists.

## In R
```r
integrate(function(x) 2 * x, 0, 3)$value        # 9
integrate(dnorm, -1.96, 1.96)$value             # 0.95: area = probability
pnorm(1.96) - pnorm(-1.96)                      # the same, via the CDF
# Monte Carlo version: the share of random draws that land in the range
set.seed(1); mean(abs(rnorm(1e5)) < 1.96)       # about 0.95
```
Area under the normal curve between −1.96 and 1.96 is 0.95.

## In the course
Hobbs and Hooten define probabilities and marginal distributions as integrals ([[Hobbs and Hooten 2015 Ch3]]) and replace them with MCMC in Chapter 7 ([[Hobbs and Hooten 2015 Ch7]]).

## Common confusions
- **"The height of a density curve is a probability."** The area is. Heights can exceed 1.
- **"Integrals need formulas."** Computers do them numerically or by simulation.

## Explain it back
- Why is the probability of an exact mass, such as 20.000 g, zero?
- How is an integral like a sum?

*Pass test:* you can explain probability as an area and say why Bayes' theorem's denominator is hard.

## Connections
- **Builds on:** [[Summation Notation]], [[Derivative]]
- **Leads to:** [[Probability Density Function]], [[Marginal Likelihood]], [[Monte Carlo Integration]]
- **Part of:** [[MOC - Basics from Zero]]

## Flashcards

What is an integral?
??
The area under a curve, found by adding up infinitely thin strips.
![[Integral as area.png]]
++++

For a continuous variable, what gives probability: height or area of the density?
??
Area. The probability of a range is the integral of the density over it.
++++

Why does Bayesian inference need MCMC?
??
The integral in the denominator of Bayes' theorem usually can't be computed exactly.
++++
