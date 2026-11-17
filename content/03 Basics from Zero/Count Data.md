---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Counts"
status: seedling
---

# Count Data

**In one line:** count data are whole numbers, 0, 1, 2 and up, that record how many things or events were seen.

> [!info] Before this, it helps to know
> [[Discrete Data]] (values that jump in steps) · [[Variable]] (a column of data)

## The everyday picture
Counting cars passing your window in a minute. You can get 0, 3 or 12, never 2.5 and never minus 1. On a quiet street most minutes give 0 or 1, with a rare burst. That lopsided pattern is the signature of counts.

*Where the picture stops working:* cars pass on a fixed road. Animals may be present and missed, so an ecological count is often less than the truth ([[Detection Probability]]).

## Words you'll need
- **Non-negative integer:** a whole number that is zero or more.
- **Skewed:** lopsided, with a long tail on one side.
- **Mean-variance relationship:** how the spread changes as the average changes ([[Mean-Variance Relationship]]).

## A tiny example
Nests on 8 plots: 0, 0, 1, 0, 2, 1, 0, 6.
- Mean = 10 / 8 = **1.25** nests.
- Half the plots have zero. One plot has 6.
- A bell curve centred on 1.25 would predict negative nests on some plots, which is impossible.

## Start from zero
1. **Counts can't go below zero.** That wall at zero squashes the left side.
2. **So counts are skewed when the mean is small.** Most values pile near zero, a few are large.
3. **Spread grows with the mean.** *Why:* a plot that averages 100 birds can vary by 10 either way. A plot averaging 1 bird can't.
4. **So the normal distribution is the wrong tool.** It allows negatives and assumes constant spread.
5. **Use count distributions.** [[Poisson Distribution]] when variance is about equal to the mean, [[Negative Binomial Distribution]] when it is larger.

## See it
![[Count data shape.png|700]]
*What to look at:* the pile at zero and the long right tail, compared with the symmetric bell.

## Why it is this way
Counting is the most common measurement in ecology: individuals, species, eggs, detections. Because counts arise from many chances for an event to happen, each with small probability, their randomness follows its own laws. Models that respect those laws give sensible predictions (never negative) and honest uncertainty.

## In R
```r
nests <- c(0, 0, 1, 0, 2, 1, 0, 6)
mean(nests); var(nests)      # 1.25 and 4.21: variance exceeds the mean
table(nests)                 # how many plots had each count
# a Poisson model keeps predictions positive
m <- glm(nests ~ 1, family = poisson)
exp(coef(m))                 # 1.25, the mean count
```
The variance being more than three times the mean hints at [[Overdispersion]].

## In the course
Counts drive the GLM sessions on Sep 1 and 3: bird richness, bobwhite whistle counts and parasite larvae are all counts ([[Course Website]]; [[Zuur et al. 2009 Ch9]]).

## Common confusions
- **"Counts are just numbers, use lm()."** A straight-line normal model can predict negative counts and gets the uncertainty wrong.
- **"Log-transform the counts."** log(0) is undefined, and Zuur and colleagues argue for a GLM instead ([[Zuur et al. 2010]]).

## Explain it back
- Why are counts with a small mean lopsided?
- Why does the spread of a count grow with its mean?

*Pass test:* you can explain why counts need their own distributions.

## Connections
- **Builds on:** [[Discrete Data]]
- **Leads to:** [[Poisson Distribution]], [[Negative Binomial Distribution]], [[Poisson Regression]], [[Zero Inflation]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]], molecular note [[Why the response type decides the distribution]]

## Flashcards

What makes count data special?
??
They are whole numbers, never negative, usually skewed, and their variance grows with their mean.
![[Count data shape.png]]
++++

Why is a normal linear model a poor fit for small counts?
??
It can predict negative values and assumes constant variance.
++++

Which two distributions are the usual choices for counts?
??
Poisson (variance equals mean) and negative binomial (variance larger than mean).
++++
