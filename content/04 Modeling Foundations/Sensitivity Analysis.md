---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "A sensitivity analysis nudges each input of a model a little and measures how much the answer changes, which shows which inputs matter most."
aliases:
  - "Sensitivity"
status: seedling
---

# Sensitivity Analysis

Use 10% more sugar in a cake and it is a bit sweeter, no disaster; use 10% more baking powder and it might overflow the tin. The recipe is far more *sensitive* to baking powder than to sugar, and a good baker knows which ingredients to measure carefully. A **sensitivity analysis** finds this out for a model: nudge each input (a parameter such as survival or growth rate) a little, re-run the model, and measure how much the output changes. The inputs that cause big swings are the *sensitive* ones. It is step 6 of Starfield's [[Modeling Process]], phrased by Powell and Gale as "increase the survival rate slightly: what happens to population size?" ([[Powell and Gale 2015 Ch1]]).

An example. Population in 30 years is N₃₀ = 100 × λ³⁰, where λ ("lambda") is the yearly growth multiplier: λ = 1 means stable, above 1 growing, below 1 shrinking. With λ = 1.00, N₃₀ = 100. With λ = 0.97 it is 40, a 60% drop; with λ = 1.03 it is 243, a 143% rise. A 3% nudge to the input moved the output by 60 to 143%, because the 3% is applied thirty times over and small differences snowball. So λ is a highly sensitive input for long-term projections, and it is where the field budget should go. To compare inputs measured on different scales, such as survival (0 to 1) and fecundity (eggs per female, perhaps 0 to 12), nudge each by the same *percentage* and measure the percentage change in output. That ratio is the *elasticity*: a 1% rise in λ raises N₃₀ by about 35%, while for an input that simply multiplies the output, a 1% rise gives exactly 1%.

The purpose is to know how far to trust a conclusion and where better data would help most. A model's answer is only as trustworthy as its least-trustworthy important input, and the inputs that deserve the most effort are those that are both sensitive *and* uncertain; Powell and Gale note a simulation might tell you to study reproduction rather than adult survival. Sensitivity is a property of the model, not of your data, so a sensitive parameter that is already well known is not a worry. Testing one input at a time is not always enough either, because inputs can interact. The same instinct runs through statistics, in checking whether conclusions change under different priors ([[Prior Sensitivity Analysis]]) or with influential points removed ([[Outlier]]); it applies to both [[Analytical Model|analytical]] and [[Simulation Model|simulation]] models.

![[Sensitivity analysis.png|700]]
*What to look at:* a ±3% change in λ makes the 30-year population 40 or 243 instead of 100. Over long horizons, growth rate is a very sensitive parameter.

```r
N30 <- function(lambda) 100 * lambda^30
round(N30(c(0.97, 1.00, 1.03)))      # 40 100 243
(N30(1.01) - N30(1)) / N30(1)        # 0.35: a 1% rise in lambda gives about 35% more animals
```
The output moves about 35 times as much, in percentage terms, as the input did.

## Connections
- **Builds on:** [[Analytical Model]], [[Modeling Process]]
- **Leads to:** [[Prior Sensitivity Analysis]], [[Simulation Model]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]]
- **Go deeper:** [[Powell and Gale 2015 Ch1]]

## Flashcards

What is a sensitivity analysis?
??
Nudging each parameter or input a little, re-running the model, and measuring how much the output changes.
![[Sensitivity analysis.png]]
++++

Why measure sensitivity with proportional (elasticity) changes?
??
Parameters are on different scales; equal percentage nudges make their effects comparable.
++++

How should a sensitivity analysis change your fieldwork?
??
Spend effort pinning down parameters that are both sensitive and uncertain, because they drive uncertainty in the answer.
++++
