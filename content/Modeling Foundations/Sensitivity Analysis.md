---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Sensitivity"
status: seedling
---

# Sensitivity Analysis

**In one line:** a sensitivity analysis nudges each input of a model a little and measures how much the answer changes, which shows which inputs matter most.

> [!info] Before this, it helps to know
> [[Analytical Model]] · [[Simulation Model]] · [[Modeling Process]] (it's step 6)

## The everyday picture
Baking a cake from a recipe. Use 10% more sugar and the cake is a bit sweeter, no disaster. Use 10% more baking powder and it might overflow the tin. The recipe is far more *sensitive* to baking powder than to sugar. A good baker knows which ingredients to measure carefully and which can be eyeballed.

A sensitivity analysis is finding that out for a model: which inputs are "baking powder" (a small change, a big effect) and which are "sugar".

*Where the picture stops working:* a baker learns by ruining cakes. With a model you can test every ingredient on a computer in seconds.

## Words you'll need
- **Input (parameter):** a number the model needs, such as survival or growth rate.
- **Output:** the answer the model gives, such as population size in 30 years.
- **Sensitive:** a small change in the input causes a big change in the output.
- **λ ("lambda"):** the yearly growth multiplier. λ = 1 means stable, above 1 growing, below 1 shrinking.
- **Elasticity:** the percentage change in output for a 1% change in input. It lets you compare inputs measured on different scales.
- **Uncertain:** not known precisely.

## A tiny example
Model: population in 30 years, N₃₀ = 100 × λ³⁰ ("start with 100 and multiply by λ thirty times").

| λ | N₃₀ | Change from λ = 1 |
|---|---|---|
| 0.97 | 40 | −60% |
| 1.00 | 100 | |
| 1.03 | 243 | +143% |

A 3% nudge in the input moved the output by 60 to 143%. *Why so dramatic:* the 3% is applied thirty times over, so small differences snowball. λ is a highly sensitive parameter for long-term projections. Spend your field budget estimating it well.

## Start from zero
1. **Your model's inputs are uncertain.** You estimated survival as 0.80, but it might be 0.75 or 0.85.
2. **Ask: if this input were a bit different, would my conclusion change?**
3. **So change it slightly, re-run the model and compare.** "Increase the survival rate slightly: what happens to population size?" ([[Powell and Gale 2015 Ch1]], p. 7).
4. **Do this for each input in turn.** The ones that cause big swings are the *sensitive* ones.
5. **Compare fairly with proportional nudges.** Change each input by the same percentage (say 1%) and measure the percentage change in output: the *elasticity*. *Why:* survival (0 to 1) and fecundity (eggs per female, maybe 0 to 12) are on different scales, so "add 0.1 to each" isn't a fair test.
6. **Use the results.** Inputs that are both sensitive and uncertain deserve more field effort, because they drive the uncertainty in your answer. Powell and Gale suggest a simulation might tell you to spend money studying reproduction rather than adult survival ([[Powell and Gale 2015 Ch1]], pp. 6 to 7).

## See it
![[Sensitivity analysis.png|700]]
*What to look at:* a ±3% change in λ makes the 30-year population 41 or 243 instead of 100. Over long horizons, growth rate is a very sensitive parameter.

## Why it is this way
A model's answer is only as trustworthy as its least-trustworthy important input. Sensitivity analysis is how you find out which inputs are important. It tells you how far to trust a conclusion, and where better data would help most. The same instinct appears throughout statistical modeling: checking whether conclusions change under different priors ([[Prior Sensitivity Analysis]]) or with influential points removed ([[Outlier]]).

## In R
```r
N30 <- function(lambda) 100 * lambda^30
lambdas <- c(0.97, 1.00, 1.03)
round(N30(lambdas))                # 40 100 243

# Elasticity: % change in output per 1% change in input
base <- N30(1.0)
(N30(1.01) - base) / base / 0.01   # about 35: output is 35 times as sensitive as the input
```

## In the course
Step 6 of Starfield's modeling process ([[Powell and Gale 2015 Ch1]], p. 7), and one of the questions to ponder at the start of the course: "What is a sensitivity analysis?"

## Common confusions
- **Sensitivity vs uncertainty.** A parameter can be sensitive but well known (not a worry), or insensitive but poorly known (also not much worry). Worry about parameters that are both sensitive *and* uncertain.
- **"One at a time is enough."** Inputs can interact, so changing two at once may matter more than either alone.
- **"Sensitive means badly estimated."** Sensitivity is a property of the model, not of your data.

## Explain it back
- Use sugar and baking powder to explain what a sensitive input is.
- Why does a 3% change in λ change the 30-year population by so much?
- Why compare inputs with percentage nudges rather than equal-sized ones?

*Pass test:* given a model, you can say which input you'd nudge first and what you'd do with the answer.

## Connections
- **Builds on:** [[Analytical Model]], [[Modeling Process]]
- **Leads to:** [[Prior Sensitivity Analysis]], [[Simulation Model]]
- **Part of:** [[MOC - Modeling Foundations]]
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
