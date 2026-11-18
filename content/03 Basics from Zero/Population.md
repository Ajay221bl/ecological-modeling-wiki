---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "In statistics, the population is the whole set of things your question is about: every nest, plot or day you want your conclusion to cover."
aliases:
  - "Population (statistics)"
  - "Target population"
status: seedling
---

# Population

You want to know if a big pot of soup needs salt. The pot is the **population**: the whole thing your question is about. You will only taste a spoonful, but the question is always about the pot. In statistics the population is the full set of units your conclusion is meant to cover, where a *unit* is one member of it: a nest, a plot, a day. A number that describes the whole population, such as its true mean, is a [[Parameter]]. Note that this is not the biologist's meaning of "population", the organisms of one species in one place ([[Biological Population]]); a statistical population can be made of plots, days, ponds or visits, because statistics only needs "the set my conclusion covers".

Take the question "What is the average [[Fecundity|clutch size]] of tree swallows nesting in New York this year?" The population is every tree swallow nest in New York this year, perhaps tens of thousands of them. The parameter is their true average clutch size, perhaps 5.2 eggs, and nobody will ever know that exact number. Change the question to "...in Albany County" and the population changes, even though the birds did not. That is the key point: the population is defined by your question, not by biology, and a pot of soup has a clear edge while a statistical population's edge is something you must define: which units, where and when.

You almost never measure the whole population, because there are too many units, too spread out, and too little time, so you measure a [[Sample]] of [[Observation]]s ([[Powell and Gale 2015 Ch2]]). In practice you can only reach the units your method could have sampled, a set Powell and Gale call the [[Statistical Population]], and your conclusions stop at its edge. Defining the population first stops you from accidentally answering a different question, such as making a claim about all of New York when you only sampled Albany, and it gives every later number a home: a parameter is a fact about the population, an estimate is a guess from the sample. Every interval in the course is ultimately a statement about a population. The sample is the part you measured; the population is the whole you want to know about.

![[Population and sample.png|700]]
*What to look at:* the grey dots are the population. We'll never see most of them.

```r
set.seed(1)
population <- rnorm(200, mean = 20, sd = 5)   # 200 simulated turtle masses: the whole pond
length(population)                            # 200 units
mean(population)                              # the parameter: we never see this in real life
```

## Connections
- **Builds on:** [[Observation]]
- **Leads to:** [[Sample]], [[Parameter]], [[Statistical Population]], [[Biological Population]], [[Fecundity]]
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
