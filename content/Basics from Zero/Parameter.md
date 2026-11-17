---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Parameters"
  - "True value"
status: seedling
---

# Parameter

**In one line:** a parameter is a fixed but unknown number that describes a whole population or process, such as the true survival rate of elk in a park.

> [!info] Before this, it helps to know
> [[Population]] (a parameter describes it) · [[Greek Letters and Notation]] (parameters are written in Greek)

## The everyday picture
A jar of sweets at a school fair: "guess how many and win the jar". There *is* a true number in the jar, say 512. It's real, it's fixed, and it's hidden. That hidden true number is a parameter. Everyone's guesses differ; the number in the jar doesn't.

*Where the picture stops working:* at the fair someone opens the jar and tells you. In science nobody ever does.

## Words you'll need
- **Parameter:** a fixed, unknown number describing the population or process.
- **θ ("theta"):** the general symbol for a parameter. μ ("mew") is a mean, β ("beta") a slope, σ ("sigma") a standard deviation.
- **Fixed:** it doesn't change from one sample to the next.
- **Estimate:** a guess at the parameter from data ([[Estimate]]).

## A tiny example
You tag 10 fish to see whether tags stay on ([[Powell and Gale 2015 Ch3]], p. 24).
- **Parameter:** p, the true chance that a tag stays on a fish in this river. Maybe it's 0.73. You don't know.
- Today 7 of 10 tags stayed on; tomorrow, with new fish, perhaps 6 of 10. Those are estimates (0.7, 0.6). The parameter p didn't change overnight.

## Start from zero
1. **Some numbers describe the whole population.** The true average turtle mass in a pond; the true chance an elk survives winter.
2. **They're fixed.** *Why:* they're facts about the population (or the process producing the data), not about your sample.
3. **They're unknown.** *Why:* you never measure the whole population ([[Population]]).
4. **Models are built from parameters.** A straight line has two: where it starts (intercept) and how steep it is (slope). *Why:* the parameters are what you want to learn; the data are how you learn them.
5. **We write them in Greek so they're never confused with data.** θ, μ, β, σ ([[Greek Letters and Notation]]).
6. **Bayesians add a twist.** The parameter is still a fixed unknown, but your uncertainty about it is described by a probability distribution ([[Frequentist vs Bayesian Inference]]).

## See it
![[Parameter vs estimate.png|700]]
*What to look at:* the blue line is the parameter. It never moves.

## Why it is this way
A model is a claim about how nature works, and parameters are the knobs on that claim ("survival is 0.8", "each cm of rain adds 1.2 g of grass"). Keeping them as a separate idea from the numbers you calculate stops the most common reading error in statistics: taking your estimate for the truth.

## In R
```r
fit <- lm(dist ~ speed, data = cars)   # a model with two parameters: intercept and slope
coef(fit)   # these are NOT the parameters; they are our estimates of them
```

## In the course
Powell and Gale define a parameter as "an unknown quantity or constant characterizing a population" ([[Powell and Gale 2015 Ch2]], p. 16).

## Common confusions
- **"Parameter" in R means a function argument.** In statistics it means an unknown population quantity.
- **"The parameter is what `coef()` printed."** That's the estimate.

## Explain it back
- Use the sweet jar to explain what a parameter is.
- Why doesn't the tag-retention parameter change when tomorrow's estimate does?
- Why are parameters written in Greek?

*Pass test:* you can name the parameters in a straight-line model and say why they're unknown.

## Connections
- **Builds on:** [[Population]], [[Greek Letters and Notation]]
- **Leads to:** [[Estimate]], [[Estimator]], [[Statistical Model]], [[Maximum Likelihood Estimation]]
- **Part of:** [[MOC - Basics from Zero]], molecular note [[Parameter vs Estimate]]
- **Go deeper:** [[Powell and Gale 2015 Ch2]] (definitions box, p. 16)

## Flashcards

What is a parameter?
??
A fixed but unknown number describing a population or process (θ), like the true number of sweets in the jar.
![[Parameter vs estimate.png]]
++++

Why does a parameter not change between samples?
??
It is a fact about the population, not about which individuals you happened to sample.
++++
