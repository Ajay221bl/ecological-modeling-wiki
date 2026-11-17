---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Lambda"
  - "Finite rate of increase"
status: seedling
---

# Population Growth Rate

**In one line:** the population growth rate λ is next year's population size divided by this year's, so it says by what factor the population multiplies each year.

> [!info] Before this, it helps to know
> [[Population Dynamics]] (what changes numbers) · [[Exponential Function]] (repeated multiplication)

## The everyday picture
Interest on savings. A 5% interest rate multiplies your balance by 1.05 each year. λ is that multiplier for animals: 1.05 means 5% growth, 0.90 means a 10% loss, exactly 1 means holding steady.

*Where the picture stops working:* banks fix the rate. A population's λ changes every year with weather and density.

## A tiny example
Counts: 200, 220, 242.
- λ = 220 / 200 = **1.10**. Again 242 / 220 = **1.10**.
- Ten years at 1.10: 200 × 1.10¹⁰ = **519**.
- At 0.90 instead: 200 × 0.90¹⁰ = **70**.
- On the log scale: r = log(1.10) = 0.095 per year.

## Start from zero
1. **Divide next year's N by this year's.** λ = Nₜ₊₁ / Nₜ.
2. **Compare with 1.** Above: growing. Below: declining.
3. **Growth multiplies.** *Why:* each animal contributes offspring and survival, so more animals add more animals.
4. **Over t years, N = N₀ × λᵗ.**
5. **Its log, r, adds up.** r = log(λ). Positive r means growth, and log scale makes multiplication into addition ([[Natural Logarithm]]).
6. **With no movement, λ = survival + recruitment per animal.**

## See it
![[Population growth lambda.png|700]]
*What to look at:* small differences in λ fan out into very different futures.

## Why it is this way
λ compresses births, deaths and movement into the one number managers most need: is the population going up or down, and how fast? Because growth compounds, a λ of 0.97 looks harmless and still halves a population in 23 years.

## In R
```r
N <- c(200, 220, 242)
N[-1] / N[-length(N)]          # 1.1 1.1
200 * 1.1^10; 200 * 0.9^10     # 519 and 70
log(1.1)                       # r = 0.095
log(0.5) / log(0.97)           # 22.8 years to halve at lambda = 0.97
```
Take the log to find how long a change takes.

## In the course
[[Powell and Gale 2015 Ch1]] uses λ as the summary of population status.

## Common confusions
- **"λ = 0.95 means 95% growth."** It means a 5% decline.
- **"λ and r are the same."** λ multiplies, r = log(λ) adds. λ = 1 matches r = 0.

## Explain it back
- What does λ = 1.2 mean in words?
- Why does a small difference in λ matter over decades?

*Pass test:* you can compute λ from two counts and project forward.

## Connections
- **Builds on:** [[Population Dynamics]], [[Exponential Function]]
- **Leads to:** [[Exponential Growth Model]], [[Survival Rate]], [[Carrying Capacity]]
- **Part of:** [[MOC - Modeling Foundations]]

## Flashcards

What is λ, the population growth rate?
??
Next year's population divided by this year's: the yearly multiplication factor.
![[Population growth lambda.png]]
++++

What do λ > 1, λ = 1 and λ < 1 mean?
??
Growing, stable and declining.
++++

How are λ and r related?
??
r = log(λ). λ multiplies each year, r adds on the log scale.
++++
