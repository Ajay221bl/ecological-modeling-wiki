---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "A capture history is the string of 1s and 0s showing on which occasions an individually marked animal was caught or seen, such as 1011."
aliases:
  - "Encounter history (marked animals)"
  - "Capture histories"
  - "Capture-history string"
  - "ch"
status: seedling
---

# Capture History

A student's attendance record for a course, with a tick for each lecture attended, is a capture history for one student. A **capture history** is the string of 1s and 0s showing on which occasions an individually marked animal was caught or seen, such as 1011 ([[Mark-Recapture]], [[Binary Variable]]). Each history has a probability written from the model's parameters, and the likelihood multiplies them over animals ([[Likelihood Function]]). For a closed population with two occasions (Powell and Gale Ch8), history 11 has probability p₁p₂ and count m₂; 10 has p₁(1 − p₂) and count n₁ − m₂; 01 has (1 − p₁)p₂ and count n₂ − m₂; and 00 has (1 − p₁)(1 − p₂) and is never observed.

In a closed model a 0 means "not caught"; in an open (CJS) model a 0 can mean "not caught" or "dead or gone" ([[Cormack-Jolly-Seber Model]]). Every observed history contains at least one 1, because animals enter the data when first caught; the all-zero history is the missing piece, N − r, that closed models estimate ([[Closed Population]]). Program MARK input is one row per animal, or per identical history with a count column, and individual covariates such as mass or sex can sit alongside each history ([[Program MARK]]). In the code below four histories become a 0/1 matrix; the animals were caught 3, 2, 1 and 4 times and first caught on occasions 1, 2, 1 and 1.

Capture histories are used in [[Powell and Gale 2015]] Ch7, Ch8 and Ch10. They are not the same as [[Detection History|detection histories]], though both use 1s and 0s: capture histories follow individuals from first capture, while detection histories follow sites and can be all zero.

```r
ch <- c("1011", "0110", "1000", "1111")
mat <- do.call(rbind, lapply(strsplit(ch, ""), as.integer)); mat
rowSums(mat); apply(mat, 1, function(h) which(h == 1)[1])   # captures and first capture
```

## Connections
- **Builds on:** [[Mark-Recapture]], [[Binary Variable]]
- **Leads to:** [[Detection History]], [[Cohort]], [[Likelihood Function]], [[Program MARK]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What is a capture history?
??
A 1/0 string recording on which occasions a marked individual was caught or seen.
++++

Under a closed two-occasion model, what is P(history 10)?
??
p₁(1 − p₂).
++++
