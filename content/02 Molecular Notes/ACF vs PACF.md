---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - autocorrelation
aliases: []
status: seedling
---

# ACF vs PACF

> [!summary] In plain words
> the ACF gives the total correlation at each lag, including correlation passed along through intermediate steps, while the PACF gives only the direct correlation at that lag, which makes the pair useful for choosing AR and MA terms.

## The question
Why are there two autocorrelation plots and which tells me what?

## Built from
- [[Autocorrelation Function]] and [[Partial Autocorrelation Function]].
- [[AR(1) Error Structure]] and [[ARMA Error Structure]].

## The reasoning, step by step
1. **ACF at lag 2** includes the indirect path t−2 → t−1 → t.
2. **PACF at lag 2** removes it.
3. **AR(p) signature:** ACF tails off gradually. PACF cuts off after lag p.
4. **MA(q) signature:** ACF cuts off after lag q. PACF tails off.
5. **ARMA:** both tail off. Compare a few small models by AIC.

| Process | ACF | PACF |
|---|---|---|
| AR(p) | Tails off | Cuts off after p |
| MA(q) | Cuts off after q | Tails off |
| ARMA(p, q) | Tails off | Tails off |
| White noise | Nothing beyond lag 0 | Nothing |

**A worked example in numbers.** for a simulated AR(1) with φ = 0.7 (n = 300), the ACF read 0.73, 0.53, 0.37, 0.26 at lags 1 to 4, while the PACF read 0.73, −0.02, −0.02, 0.00.

## So in practice
Plot both for the residuals of your model. Use them to suggest a structure, then let AIC decide among a few candidates.

## What would go wrong otherwise
Choosing a high-order ARMA from a noisy PACF of a 20-point series.

## Explain it back
- What does an AR(2) PACF look like?

*Pass test:* you can suggest a structure from the two plots.

## Connections
- **Related:** [[Temporal vs Spatial Autocorrelation]], [[How to detect and handle autocorrelation]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

Which plot cuts off after lag p for an AR(p) process?
??
The PACF.
++++

Which plot cuts off after lag q for an MA(q) process?
??
The ACF.
++++
