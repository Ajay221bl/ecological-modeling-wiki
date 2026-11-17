---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - basics
aliases:
  - "False positive and false negative"
  - "Alpha and beta errors"
  - "Type I vs Type II error"
status: seedling
---

# Type I and Type II Errors

> [!summary] In plain words
> a Type I error rejects a null hypothesis that is actually true (false positive, rate α), and a Type II error fails to reject a null that is false (false negative, rate β); power is 1 − β, and for a fixed sample size lowering one raises the other.

## The question
How do Type I and Type II errors trade off?

## Built from
- [[Type I Error]] and [[Type II Error]].
- [[Significance Level]] and [[Statistical Power]].
- [[Inflated Type I Error]].

## The reasoning, step by step
1. **Set α (often 0.05):** the false-positive rate when H₀ is true.
2. **β depends on α, effect size, noise and sample size.**
3. **Smaller α makes rejecting harder,** so β rises unless n rises.
4. **Power = 1 − β:** chance of detecting a real effect of a given size.
5. **Pseudoreplication and autocorrelation** inflate the real Type I rate above α ([[Why non-independence inflates false positives]]).

| | H₀ true | H₀ false |
|---|---|---|
| Reject H₀ | Type I error (α) | Correct (power) |
| Do not reject | Correct | Type II error (β) |
Two groups of 20, true difference 0.5 SD: power is 0.34 at α = 0.05 and only 0.14 at α = 0.01. Two in three real effects of this size would be missed even at 0.05.

## So in practice
For a conservation decision, ask which error costs more: missing a real decline (Type II) or acting on a false one (Type I).

## In R
```r
power.t.test(n = 20, delta = 0.5, sd = 1, sig.level = 0.05)$power
power.t.test(n = 20, delta = 0.5, sd = 1, sig.level = 0.01)$power
```

## What would go wrong otherwise
"p > 0.05, so there is no effect," ignoring that a small study has low power.

## Explain it back
- What happens to β when α is made smaller at fixed n?

*Pass test:* you can fill in the 2 × 2 table.

## Connections
- **Related:** [[What a p-value does and does not tell you]], [[Statistical vs Biological Significance]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 01 - Basics from Zero|MOC - Basics from Zero]], [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

Type I vs Type II error?
??
Type I: rejecting a true null (false positive). Type II: missing a false null (false negative).
++++

What is power?
??
1 − β, the chance of detecting a real effect.
++++
