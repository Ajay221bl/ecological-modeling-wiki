---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Writing Functions"
  - "function()"
  - "User-defined function"
status: seedling
---

# Writing Your Own Function

**In one line:** writing a function means packaging a few lines of code under a name so the same steps can be reused with different inputs.

> [!info] Before this, it helps to know
> [[Function Arguments]] (inputs to functions) · [[Script]] (where code lives)

## The everyday picture
A rubber stamp. Writing your address by hand twenty times invites twenty chances for a slip. Carve the stamp once, check it once, and every impression is identical.

## Start from zero
1. **Spot repetition.** Copy-pasting code three times is the signal.
2. **Write `name <- function(inputs) { steps }`.**
3. **The last value computed is returned.** Or use `return()`.
4. **Variables made inside stay inside.** *Why:* that isolation stops a function from disturbing the rest of your script.
5. **Test it on a case where you know the answer.**
6. **Fix a bug once, and it is fixed everywhere.** That is the real payoff.

## In R
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

## In the course
The coding crash course ends with writing a function that fits a list of models ([[Course Website]]). The syllabus suggests a separate script of custom functions ([[Splitting Scripts]]).

## Common confusions
- **"Functions are for programmers."** Any repeated calculation qualifies.
- **"The function changed my data."** It works on a copy. Assign the result to keep it.

## Explain it back
- When should code become a function?
- What does a function return if you don't write `return()`?

*Pass test:* you can write and test a two-line function.

## Connections
- **Builds on:** [[Function Arguments]]
- **Leads to:** [[lapply()]], [[Splitting Scripts]], [[Debugging]]
- **Part of:** [[MOC - R for Ecological Modeling]]

## Flashcards

How do you define a function in R?
??
name <- function(arguments) { code }, where the last value is returned.
++++

When is it worth writing a function?
??
When you would otherwise copy and paste the same code several times.
++++
