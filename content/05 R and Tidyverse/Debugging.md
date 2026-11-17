---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "Debugging is finding out why code doesn't do what you meant, by narrowing down where expectation and reality part ways."
aliases:
  - "Troubleshooting code"
  - "Finding bugs"
status: seedling
---

# Debugging

Finding a dead bulb in a string of fairy lights, you do not stare at the whole string. You test the middle: if the first half lights up, the fault is in the second half; halve again, and a few steps find any bulb. **Debugging** is finding out why code does not do what you meant, by narrowing down where expectation and reality part ways. Start with the message, if there is one: read its last line, then the function it names ([[Errors and Warnings in R]]). Then rerun the code line by line from a fresh session until it breaks, and for piped chains run up to each `|>` in turn.

Most bugs are an object that is not what you assumed: numbers stored as text, unexpected `NA`s, wrong dimensions. So inspect the inputs to the failing line with `str()`, `class()`, `dim()` and `summary()` ([[Inspecting Data]]). The example below shows the dangerous kind of bug, one with no error at all. Tree cover was read in as text, so `lm(birds ~ tree)` treats it as three categories and returns three coefficients instead of an intercept and a slope. The strange result is the only symptom; `str(d)` reveals the cause, and converting tree to numbers fixes it.

When stuck, shrink the problem: a few rows, one group, the simplest model. Search the exact error message, and read the help page ([[Help Files in R]]). If you ask someone for help, send a *minimal reproducible example*, the smallest code and data that still fail. Simulated data with known answers are a powerful debugging tool for model code, because they tell you what the output should be ([[Simulating Data|Simulated Data to Check Model Code]]). Avoid changing things at random until the code runs: without understanding the cause, you cannot know the result is right.

```r
d <- data.frame(tree = c("10", "30", "50"), birds = c(9, 6, 3))   # tree was read as text
m <- try(lm(birds ~ tree, d), silent = TRUE)
coef(m)                 # three coefficients instead of two: a symptom
str(d)                  # the cause: tree is chr
d$tree <- as.numeric(d$tree)
coef(lm(birds ~ tree, d))
```
No error occurred. The bug showed only as a strange result, found by inspecting the input.

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
