---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - basics
aliases:
  - "Data types"
  - "Kinds of data"
status: seedling
---

# Continuous vs Discrete Data

> [!summary] In plain words
> Data come in kinds. **Continuous** data can take any value in a range (body mass 23.47 g). **Discrete** data come in separate steps, usually counts (3 nests). **Categorical** variables are labels (grassland, shrubland), and **binary** ones have only two (alive or dead). The kind decides which distribution and which model you're allowed to use.

## The everyday picture
A ramp versus a staircase. On a ramp you can stand at any height (continuous). On a staircase you stand on step 3 or step 4, never 3.6 (discrete). A row of labelled doors is categorical: door A isn't "more" than door B. A light switch is binary.

*Where the picture stops working:* real measurements are always rounded, so even "continuous" data come in tiny steps. What matters is whether in-between values make sense.

## The question
How do the kinds of data differ, and why does the kind decide the model?

## Built from
- [[Continuous Data]]: any value in a range
- [[Discrete Data]]: separate values, usually counts
- [[Categorical Variable]]: labels with no order of size
- [[Binary Variable]]: exactly two outcomes

## See it
![[Continuous vs discrete data.png|700]]
*What to look at:* a smooth spread for continuous data, separate bars for counts.

## The reasoning, step by step
1. **Ask whether in-between values make sense.** Yes: continuous. No: discrete ([[Continuous Data]], [[Discrete Data]]).
2. **Ask whether the values are numbers at all.** Labels are categorical; two labels are binary ([[Categorical Variable]], [[Binary Variable]]).
3. **Match the distribution to the kind.** *Why:* a distribution that allows impossible values (−0.4 nests) will mispredict. Continuous often goes Normal or Gamma; counts go Poisson or Negative Binomial; binary goes Bernoulli ([[Why the response type decides the distribution]]).

**A worked example in numbers.** Counts of 0, 1, 1, 2, 5 nests have mean 1.8. A Normal model with that mean and SD 1.9 gives about a 17% chance of a negative count, which can never happen. A Poisson model gives 0% chance, because it only allows 0, 1, 2 and so on.

## So in practice
Classify the response first, before choosing any model ([[Data Exploration Protocol]]).

## What would go wrong otherwise
- You'd predict impossible values (negative counts, probabilities above 1).
- You'd treat labels coded as 1, 2, 3 as if 3 were "more" than 1.

## Explain it back
- Use the ramp and staircase to explain continuous and discrete.
- Why is a Normal model risky for small counts?

*Pass test:* you can classify every column of a dataset in a few seconds.

## Connections
- **Related:** [[Variable and Observation]], [[Probability Distribution]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Basics from Zero]]

## Flashcards

How do you tell continuous from discrete data?
??
Ask whether in-between values make sense: yes means continuous (mass), no means discrete (counts).
![[Continuous vs discrete data.png]]
++++

Why does the data type decide the distribution?
??
A distribution that allows impossible values (negative counts, probabilities over 1) will mispredict the data.
++++
