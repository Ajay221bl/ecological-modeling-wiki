---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Encounter history (marked animals)"
  - "Capture histories"
  - "Capture-history string"
  - "ch"
status: seedling
---

# Capture History

**In one line:** a capture history is the string of 1s and 0s showing on which occasions an individually marked animal was caught or seen, such as 1011.

> [!info] Before this, it helps to know
> [[Mark-Recapture]] · [[Binary Variable]]

## The everyday picture
A student's attendance record for a course, with a tick for each lecture attended.

## A tiny example
Closed population, two occasions (Powell and Gale Ch8):
| History | Probability | Count |
|---|---|---|
| 11 | p₁p₂ | m₂ |
| 10 | p₁(1 − p₂) | n₁ − m₂ |
| 01 | (1 − p₁)p₂ | n₂ − m₂ |
| 00 | (1 − p₁)(1 − p₂) | never observed |

## Start from zero
1. **Each history has a probability** written from the model's parameters; the likelihood multiplies them over animals.
2. **Closed model:** a 0 means "not caught". Open (CJS) model: a 0 can mean "not caught" or "dead or gone".
3. **Every observed history contains at least one 1,** because animals enter the data when first caught. The all-zero history is the missing piece N − r that closed models estimate.
4. **Program MARK input** is one row per animal (or per identical history, with a count column).
5. **Individual covariates** (mass, sex) can sit alongside each history.

## In R
```r
ch <- c("1011", "0110", "1000", "1111")
mat <- do.call(rbind, lapply(strsplit(ch, ""), as.integer)); mat
rowSums(mat); apply(mat, 1, function(h) which(h == 1)[1])   # captures and first capture
```

## In the course
[[Powell and Gale 2015]] Ch7, Ch8 and Ch10.

## Common confusions
- **"Capture histories and detection histories are the same thing."** Same 1/0 form, but capture histories follow individuals from first capture; detection histories follow sites and can be all zero.

## Explain it back
- Why is the 00 history never in your data?

*Pass test:* you can write a capture history and its probability under a simple model.

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
