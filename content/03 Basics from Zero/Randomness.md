---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "Randomness means individual outcomes can't be predicted, even though the long-run pattern of many outcomes can."
aliases:
  - "Stochasticity"
status: seedling
---

# Randomness

Roll a die. You cannot say what the next roll will be, but you can say that over 6,000 rolls each face will come up about 1,000 times. **Randomness** means exactly this: individual outcomes cannot be predicted, even though the long-run pattern of many outcomes can. Each single result is an *outcome*; the share of times an outcome occurs over many repeats is its *long-run frequency*; and the full list of outcomes with their chances is a [[Probability Distribution]]. A die's chances are known and equal. In ecology the chances are unknown, and estimating them is the job.

Say each egg has a 0.3 chance of hatching. A clutch of 4 might hatch 0, 1, 2, 3 or 4, and nobody can say which. But over thousands of clutches about 24% hatch none, 41% one, 26% two, 8% three and 1% all four. The single clutch is random; the percentages are fixed and knowable. Two common misreadings follow. Random does not mean every outcome is equally likely; here one hatchling is far likelier than four. And random does not mean "no pattern": the single outcome has none, but the long run has a precise one. Nor does chance keep score: after several failures a success is not "due", because [[Independent Events|independent events]] have no memory.

Where does randomness come from in a model? Some causes are too many or too small to track: which egg got chilled, which seed landed in shade. You cannot model every one, but you can lump them together and model their combined pattern as chance. That is why every [[Statistical Model|statistical model]] has a random part on purpose ([[Stochastic Component]]); it stands for everything not explained by the [[Predictor Variable|predictors]], and it is your honest admission of [[Uncertainty]]. Whether the world is "truly" random does not matter. Randomness is also a tool: random sampling and [[Randomization|random assignment]] of treatments protect against bias ([[Random Sampling]]). Computers imitate it with functions such as `rbinom()` and `rnorm()`, and a *seed* makes those draws repeatable ([[Random Numbers and set.seed()]]). Building on this, a [[Random Variable]] is a quantity whose value is set by chance, and [[Probability]] measures the chances.

![[Randomness long run.png|700]]
*What to look at:* the running share of hatched eggs jumps about at first, then settles on 0.3.

```r
set.seed(11)
rbinom(5, size = 4, prob = 0.3)              # five clutches: unpredictable
round(table(rbinom(1e5, 4, 0.3)) / 1e5, 2)   # long run: 0.24 0.41 0.26 0.08 0.01
dbinom(0:4, 4, 0.3)                           # the exact probabilities
```
The simulated shares match the exact probabilities once there are many clutches.

## Connections
- **Builds on:** [[Stochastic Component]]
- **Leads to:** [[Probability]], [[Random Variable]], [[Probability Distribution]], [[Random Numbers and set.seed()]], [[Independent Events]], [[Statistical Model]], [[Predictor Variable]], [[Randomization]]
- **See also:** [[Hobbs and Hooten 2015 Ch3]], [[Simulating Data]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]

## Flashcards

What does randomness mean in statistics?
??
Single outcomes are unpredictable, but the long-run pattern of many outcomes is stable.
![[Randomness long run.png]]
++++

Why do models include a random component?
??
It represents the combined effect of all the causes not included in the model.
++++

What does set.seed() do?
??
It fixes the starting point of R's random number generator so results can be reproduced.
++++
