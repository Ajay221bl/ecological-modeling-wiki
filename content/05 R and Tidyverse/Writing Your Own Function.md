---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "Writing a function means packaging a few lines of code under a name so the same steps can be reused with different inputs."
aliases:
  - "Writing Functions"
  - "function()"
  - "User-defined function"
status: seedling
---

# Writing Your Own Function

Writing your address by hand twenty times invites twenty chances for a slip; carve a rubber stamp once, check it once, and every impression is identical. **Writing your own function** means packaging a few lines of code under a name so the same steps can be reused with different inputs. The signal to do it is repetition: if you have copy-pasted a block of code three times, it wants to be a function. The form is `name <- function(inputs) { steps }`, and the value of the last line is returned (or you can use `return()`).

In the code below, `cv()` computes a coefficient of variation, the standard deviation divided by the mean; for 8, 9, 7 and 8 it returns 0.10. Its `na.rm = TRUE` is a default argument, just like those of built-in functions ([[Function Arguments]]). Variables created inside a function stay inside it, and a function works on a copy of its inputs, so it cannot quietly change your data; if you want to keep its result, assign it. The second function, `fit_all()`, is the coding crash course's challenge: it fits every formula in a list to one dataset, using [[lapply()]], and returns a list of models whose AICs can then be compared.

The real payoff is maintenance. When a function has a bug, you fix it once and it is fixed everywhere it is used; with copy-pasted code you have to find every copy. Test each function on a case where you know the answer before trusting it. Functions are not only for programmers: any repeated calculation qualifies, and the course suggests keeping custom functions in a separate script that the analysis loads ([[Splitting Scripts]], [[Debugging]]).

```r
cv <- function(x, na.rm = TRUE) {            # coefficient of variation
  sd(x, na.rm = na.rm) / mean(x, na.rm = na.rm)
}
cv(c(8, 9, 7, 8))                            # 0.10
# a function that fits a list of formulas to one dataset (the lab's challenge)
fit_all <- function(forms, data) lapply(forms, function(f) lm(f, data = data))
d <- data.frame(tree = c(10, 20, 30, 40, 50), birds = c(9, 8, 6, 5, 3))
m <- fit_all(list(null = birds ~ 1, cover = birds ~ tree), d)
sapply(m, AIC)
```

## Connections
- **Builds on:** [[Function Arguments]]
- **Leads to:** [[lapply()]], [[Splitting Scripts]], [[Debugging]]
- **See also:** [[Script]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

How do you define a function in R?
??
name <- function(arguments) { code }, where the last value is returned.
++++

When is it worth writing a function?
??
When you would otherwise copy and paste the same code several times.
++++
