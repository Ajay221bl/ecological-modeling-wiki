---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "R talks back in three ways: a message is information, a warning means \"I finished but something may be wrong\", and an error means \"I stopped\"."
aliases:
  - "Warning"
  - "Message"
status: seedling
---

# Errors and Warnings in R

R talks back in three ways, like traffic signals. A **message** is a road sign: neutral information, such as which packages were loaded. A **warning** is an amber light: R finished and returned a result, but something about it may be unreliable. An **error** is a red light: R stopped, and no result exists. In the code below, `message()` prints information, `as.numeric("abc")` returns `NA` with a warning, and `stop()` raises an error, which `try()` catches so the example can continue. They appear in the [[Console]], and with long output the last line is the one to read first, followed by the function it names.

Some warnings matter greatly. In this course, "model failed to converge" ([[Convergence Warnings]]), "boundary (singular) fit" ([[Singular Fit]]), "fitted probabilities numerically 0 or 1" ([[Complete Separation]]) and "divergent transitions" ([[Divergent Transitions]]) each mean that a model's estimates may not be trustworthy, and each has its own note. A warning can be safe to ignore, but only after reading and understanding it; never silence one you have not understood.

The most important limit: no error does not mean the answer is right. R reports problems it can detect, such as a function receiving the wrong type, but it cannot detect a wrong model, a mis-coded variable or data read in incorrectly. Those bugs run silently, which is why [[Debugging]] starts with inspecting results, not just watching for red text.

```r
message("just so you know")
as.numeric("abc")                    # warning: NAs introduced by coercion (still returns NA)
res <- tryCatch(log(-1), warning = function(w) "caught a warning")
res
out <- try(stop("this is an error"), silent = TRUE); class(out)   # execution would normally halt here
```

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
