---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Warning"
  - "Message"
status: seedling
---

# Errors and Warnings in R

**In one line:** R talks back in three ways: a message is information, a warning means "I finished but something may be wrong", and an error means "I stopped".

> [!info] Before this, it helps to know
> [[Console]] (where they appear)

## The everyday picture
Traffic signals. A message is a road sign: informative. A warning is an amber light: proceed, but look. An error is a red light: nothing further happens until you fix it.

## Start from zero
1. **Message:** neutral news, such as which packages loaded.
2. **Warning:** the code ran and returned something. The something may be unreliable.
3. **Error:** the code stopped. No result exists.
4. **Read the last line first,** then find the function named.
5. **Some warnings matter greatly.** *In this course:* "model failed to converge", "boundary (singular) fit", "fitted probabilities numerically 0 or 1", "divergent transitions". Each has its own note because each means the estimates may not be trustworthy.
6. **Never silence a warning you haven't understood.**

## In R
```r
message("just so you know")
as.numeric("abc")                    # warning: NAs introduced by coercion (still returns NA)
res <- tryCatch(log(-1), warning = function(w) "caught a warning")
res
out <- try(stop("this is an error"), silent = TRUE); class(out)   # execution would normally halt here
```

## Common confusions
- **"Warnings can be ignored."** Some can, after reading. Convergence warnings can't.
- **"No error means the answer is right."** R reports problems it can detect, not wrong models.

## Explain it back
- What is the practical difference between a warning and an error?

*Pass test:* you can classify a console line as message, warning or error and say what to do next.

## Connections
- **Builds on:** [[Console]]
- **Leads to:** [[Debugging]], [[Convergence Warnings]], [[Singular Fit]], [[Complete Separation]], [[Divergent Transitions]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What is the difference between a warning and an error in R?
??
A warning means the code finished but something may be wrong. An error means the code stopped with no result.
++++

Name three warnings in this course that must not be ignored.
??
Failed convergence, singular fit, and divergent transitions.
++++
