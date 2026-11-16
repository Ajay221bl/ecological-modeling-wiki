---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Sampling"
  - "Sample data"
status: seedling
---

# Sample

**In one line:** a sample is the part of the population you actually measured.

> [!info] Before this, it helps to know
> [[Population]] (the whole set the sample comes from) · [[Observation]]

## The everyday picture
You stir a pot of soup and taste **one spoonful**. The spoonful is the sample. You never drink the whole pot, but from the spoonful you decide whether the pot needs salt. The stirring matters: an unstirred pot with salt sunk to the bottom would give a misleading spoonful.

*Where the picture stops working:* soup can be stirred until every spoonful tastes the same. Nature can't be stirred, so different samples always come out a bit different.

## Words you'll need
- **Sample:** the units you measured.
- **Sample size (n):** how many units are in the sample.
- **Estimate:** a number calculated from the sample as a guess about the population ([[Estimate]]).
- **Representative:** looking like the population in the ways that matter ([[Representative Sample]]).
- **Sampling variation:** the fact that different samples give different answers ([[Sampling Variation]]).

## A tiny example
A pond holds 200 turtles (the population). You trap 40: that's the sample, n = 40. 10 of the 40 are female.
- In the sample: 10 / 40 = **0.25** female. That's a fact about these 40 turtles.
- Trap a different 40 tomorrow and you might get 8 or 13 females (0.20 or 0.33). Same pond, different sample, different answer.

## Start from zero
1. **You can't measure the whole population.** So you measure some of it.
2. **The units you measure are the sample.** *Why it's worth a name:* every number you calculate comes from it, and only from it.
3. **Numbers from the sample are facts about the sample.** "10 of my 40 turtles are female" is certain.
4. **You then use them to guess about the population.** That leap is inference by [[Induction]].
5. **The guess is only good if the sample looks like the population.** *Why:* the sample is your only window onto the pond ([[Representative Sample]]).
6. **Different samples give different guesses.** How much they differ is measured by the [[Standard Error]].

## See it
![[Population and sample.png|700]]
*What to look at:* the orange dots are the sample, the only part we see.

## Why it is this way
Measuring everything is almost never possible, so all of science runs on samples. Naming the sample separately keeps two kinds of number apart: certain facts about your data, and uncertain guesses about the world.

## In R
```r
set.seed(1)
population <- rnorm(200, mean = 20, sd = 5)  # the whole pond (unseen in real life)
my_sample  <- sample(population, 40)         # the 40 turtles we trapped
mean(my_sample)                              # a fact about the sample, a guess about the pond
mean(sample(population, 40))                 # another sample: a different answer
```

## In the course
Powell and Gale define the sample as the subset of the study population with data ([[Powell and Gale 2015 Ch2]], p. 14).

## Common confusions
- **"The sample mean is the population mean."** It's a guess at it.
- **"A bigger sample fixes a biased method."** It makes the guess more precise, not less biased ([[Bias]]).

## Explain it back
- In the soup picture, what is the sample and why does stirring matter?
- Which is a fact and which is a guess: "25% of my 40 turtles are female" or "25% of the pond is female"?
- Why do two samples from one pond give different answers?

*Pass test:* for any study, you can say what the sample is and why it might differ from the population.

## Connections
- **Builds on:** [[Population]], [[Observation]]
- **Leads to:** [[Estimate]], [[Representative Sample]], [[Standard Error]], [[Sampling Variation]]
- **Part of:** [[MOC - Basics from Zero]], molecular note [[Population and Sample]]
- **Go deeper:** [[Powell and Gale 2015 Ch2]]

## Flashcards

What is a sample?
??
The part of the population you actually measured (the spoonful of soup).
![[Population and sample.png]]
++++

Does a bigger sample fix a biased sampling method?
??
No. It makes the estimate more precise but leaves the bias in place.
++++
