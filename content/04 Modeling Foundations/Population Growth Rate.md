---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "The population growth rate λ is next year's population size divided by this year's, so it says by what factor the population multiplies each year."
aliases:
  - "Lambda"
  - "Finite rate of increase"
status: seedling
---

# Population Growth Rate

Interest on savings multiplies your balance: a 5% rate multiplies it by 1.05 each year. The **population growth rate** λ (lambda, also called the finite rate of increase) is that multiplier for animals: next year's population size divided by this year's, λ = Nₜ₊₁ / Nₜ. So λ = 1.05 means 5% growth, λ = 0.90 means a 10% loss, and λ = 1 means holding steady. Compare it with 1: above means growing, below means declining. A bank fixes its rate, but a population's λ changes every year with weather and density. With no immigration or emigration, λ is simply the share of animals that survive plus the new recruits per animal ([[Population Dynamics]]).

Counts of 200, 220 and 242 give λ = 220 / 200 = 1.10 and again 242 / 220 = 1.10. Growth multiplies, because each animal contributes survivors and offspring, so more animals add more animals; over t years the population is N₀ × λᵗ ([[Exponential Function]]). Ten years at 1.10 turns 200 into 200 × 1.10¹⁰ = 519, while ten years at 0.90 leaves 200 × 0.90¹⁰ = 70. On the log scale growth becomes addition: r = log(λ), here log(1.10) = 0.095 per year, where positive r means growth and λ = 1 corresponds to r = 0 ([[Natural Logarithm]]). λ and r are therefore not the same number: λ multiplies each year, r adds on the log scale.

λ compresses births, deaths and movement into the one number managers most need: is the population going up or down, and how fast? Because growth compounds, small differences in λ fan out into very different futures. A λ of 0.97 sounds harmless, yet it halves a population in log(0.5) / log(0.97) ≈ 23 years. One common slip: λ = 0.95 does not mean 95% growth, it means a 5% decline. Powell and Gale use λ as the summary of population status ([[Powell and Gale 2015 Ch1]]), the constant-λ projection is the [[Exponential Growth Model]], and in real populations λ falls as numbers approach [[Carrying Capacity]]. Its main ingredient for long-lived animals is the [[Survival Rate]].

![[Population growth lambda.png|700]]
*What to look at:* small differences in λ fan out into very different futures.

```r
N <- c(200, 220, 242)
N[-1] / N[-length(N)]          # 1.1 1.1
200 * 1.1^10; 200 * 0.9^10     # 519 and 70
log(1.1)                       # r = 0.095
log(0.5) / log(0.97)           # 22.8 years to halve at lambda = 0.97
```
Take the log to find how long a change takes.

## Connections
- **Builds on:** [[Population Dynamics]], [[Exponential Function]]
- **Leads to:** [[Exponential Growth Model]], [[Survival Rate]], [[Carrying Capacity]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]]

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
