---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "A parameter is a fixed but unknown number that describes a whole population or process, such as the true survival rate of elk in a park."
aliases:
  - "Parameters"
  - "True value"
status: seedling
---

# Parameter

At a school fair there is a jar of sweets: guess how many and win the jar. There *is* a true number in the jar, say 512. It is real, it is fixed, and it is hidden. A **parameter** is that kind of number in statistics: a fixed but unknown quantity that describes a whole [[Population]] or the process producing the data, such as the true survival rate of elk in a park or the true average turtle mass in a pond. Everyone's guesses differ, but the number in the jar does not. The difference is that at the fair someone eventually opens the jar, and in science nobody ever does.

An example from Powell and Gale ([[Powell and Gale 2015 Ch3]]): you tag 10 fish to see whether the tags stay on. The parameter is p, the true chance that a tag stays on a fish in this river; maybe it is 0.73, but you do not know. Today 7 of 10 tags stayed on; tomorrow, with new fish, perhaps 6 of 10. The numbers 0.7 and 0.6 are *estimates*, guesses calculated from data ([[Estimate]]). The parameter did not change overnight; only the sample did. Parameters are fixed because they are facts about the population, not about your sample, and unknown because you never measure the whole population.

Models are built from parameters. A straight line has two, where it starts (the intercept) and how steep it is (the slope), and a claim such as "survival is 0.8" or "each centimetre of rain adds 1.2 g of grass" is a claim about parameter values. They are the knobs on your idea of how nature works: the parameters are what you want to learn, and the data are how you learn them. To keep them from being confused with data, parameters are written in Greek letters: θ ("theta") for any parameter, μ for a mean, β for a slope, σ for a standard deviation ([[Greek Letters and Notation]]). Keeping "parameter" separate from "the number I calculated" prevents the most common reading error in statistics, taking your estimate for the truth: the numbers `coef()` prints in R are estimates of the parameters, not the parameters themselves. Two more notes. In R, "parameter" can also mean a function's argument, which is unrelated. And Bayesians keep the parameter as a fixed unknown but describe their uncertainty about it with a probability distribution ([[Frequentist vs Bayesian Inference]]). Powell and Gale define a parameter as an unknown quantity characterizing a population ([[Powell and Gale 2015 Ch2]]).

![[Parameter vs estimate.png|700]]
*What to look at:* the blue line is the parameter. It never moves.

```r
fit <- lm(dist ~ speed, data = cars)   # a model with two parameters: intercept and slope
coef(fit)   # these are NOT the parameters; they are our estimates of them
```

## Connections
- **Builds on:** [[Population]], [[Greek Letters and Notation]]
- **Leads to:** [[Estimate]], [[Estimator]], [[Statistical Model]], [[Maximum Likelihood Estimation]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]], molecular note [[Parameter vs Estimate]]
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
