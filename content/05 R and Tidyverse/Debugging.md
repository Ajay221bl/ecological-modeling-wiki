---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Troubleshooting code"
  - "Finding bugs"
status: seedling
---

# Debugging

**In one line:** debugging is finding out why code doesn't do what you meant, by narrowing down where expectation and reality part ways.

> [!info] Before this, it helps to know
> [[Errors and Warnings in R]] (the clues) · [[Inspecting Data]] (how to look at objects)

## The everyday picture
Finding a dead bulb in a string of fairy lights. Don't stare at the whole string. Test the middle. If the first half works, the fault is in the second half. Halve again. A few steps find any bulb.

## Start from zero
1. **Read the message.** Last line, then the function it names.
2. **Rerun line by line** from a fresh session until it breaks.
3. **Inspect the inputs to the failing line.** `str()`, `class()`, `dim()`, `summary()`. *Most bugs are an object that isn't what you assumed:* text not numbers, NAs, wrong dimensions.
4. **Shrink the problem.** A few rows, one group, the simplest model.
5. **Search the exact message.**
6. **Make a minimal reproducible example** if you ask for help: the smallest code and data that still fail.
7. **For piped chains,** run up to each `|>` in turn.

## In R
```r
d <- data.frame(tree = c("10", "30", "50"), birds = c(9, 6, 3))   # tree was read as text
m <- try(lm(birds ~ tree, d), silent = TRUE)
coef(m)                 # three coefficients instead of two: a symptom
str(d)                  # the cause: tree is chr
d$tree <- as.numeric(d$tree)
coef(lm(birds ~ tree, d))
```
No error occurred. The bug showed only as a strange result, found by inspecting the input.

## Common confusions
- **"Change things until it works."** Without understanding the cause you can't know the result is right.
- **"Bugs always give errors."** The dangerous ones run silently.

## Explain it back
- What is the first thing to check about the line that fails?

*Pass test:* you can describe a routine for tracking down a failing line.

## Connections
- **Builds on:** [[Errors and Warnings in R]], [[Inspecting Data]]
- **Leads to:** [[Help Files in R]], [[Simulating Data|Simulated Data to Check Model Code]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What is the most common cause of R bugs?
??
An object that isn't what you assumed: wrong type, missing values or wrong dimensions.
++++

What is a minimal reproducible example?
??
The smallest self-contained code and data that still show the problem.
++++
