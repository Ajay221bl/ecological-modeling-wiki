---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Population (statistics)"
  - "Target population"
status: seedling
---

# Population

**In one line:** in statistics, the population is the whole set of things your question is about: every nest, plot or day you want your conclusion to cover.

> [!info] Before this, it helps to know
> [[Observation]] (one measured case) · its partner idea is [[Sample]]

## The everyday picture
A big pot of soup. You want to know if *the pot* needs salt. The pot is the population: the whole thing your question ("is it salty enough?") is about. You'll only taste a spoonful, but the question is always about the pot.

*Where the picture stops working:* a pot has a clear edge. A statistical population's edge is something you have to define: which nests, where, and when.

## Words you'll need
- **Population (statistical):** the full set of units your conclusion is about.
- **Unit:** one member of the population (a nest, a plot, a day).
- **Parameter:** a number describing the whole population, such as its true mean ([[Parameter]]).
- **Biological population:** a different meaning, the organisms of one species in a place ([[Biological Population]]).

## A tiny example
Question: "What is the average clutch size of tree swallows nesting in New York this year?"
- **Population:** every tree swallow nest in New York this year. Perhaps tens of thousands.
- **Parameter:** their true average clutch size, say 5.2 eggs. Nobody will ever know this exact number.
- Change the question to "...in Albany County" and the population changes, even though the birds didn't.

## Start from zero
1. **Every question is about some set of things.** "All tree swallow nests in New York this year."
2. **That set is the population.** *Why name it:* so you know what your answer must describe.
3. **It's defined by the question, not by biology.** A population can be plots, days, ponds or visits. *Why:* statistics only needs "the set my conclusion covers".
4. **You almost never measure all of it.** Too many units, too spread out, too little time ([[Powell and Gale 2015 Ch2]], p. 14). So you measure a [[Sample]].
5. **In practice you can only reach the units your method could sample.** Powell and Gale call that reachable set the [[Statistical Population]], and your conclusions stop at its edge.

## See it
![[Population and sample.png|700]]
*What to look at:* the grey dots are the population. We'll never see most of them.

## Why it is this way
A conclusion has to be *about* something. Defining the population first stops you from accidentally answering a different question (all of New York when you only sampled Albany). It also gives every later number a home: a parameter is a fact about the population, an estimate is a guess from the sample.

## In R
```r
set.seed(1)
population <- rnorm(200, mean = 20, sd = 5)   # 200 simulated turtle masses: the whole pond
length(population)                            # 200 units
mean(population)                              # the parameter: we never see this in real life
```

## In the course
Powell and Gale define the study population as the group to which inferences will be made ([[Powell and Gale 2015 Ch2]], p. 14). Every interval in the course is a statement about a population.

## Common confusions
- **"Population means animals."** In statistics it means whatever your conclusion is about.
- **"The population is what I measured."** That's the sample.

## Explain it back
- In the soup picture, what is the population?
- Why does changing "New York" to "Albany County" change the population?
- Why can a population be made of days or plots?

*Pass test:* for any study question, you can say exactly which units the population contains.

## Connections
- **Builds on:** [[Observation]]
- **Leads to:** [[Sample]], [[Parameter]], [[Statistical Population]], [[Biological Population]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]], molecular note [[Population and Sample]]
- **Go deeper:** [[Powell and Gale 2015 Ch2]]

## Flashcards

What is a population in statistics?
??
The whole set of units your question and conclusion are about (the pot of soup).
![[Population and sample.png]]
++++

Who decides what the population is: biology or the question?
??
The question. The same birds can belong to different populations depending on what you ask.
++++
