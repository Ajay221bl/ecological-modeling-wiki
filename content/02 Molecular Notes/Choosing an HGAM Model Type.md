---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - gam
aliases:
  - "HGAM Model Types"
  - "HGAM model types (G, GS, GI, S, I)"
  - "Pedersen model types"
status: seedling
---

# Choosing an HGAM Model Type

> [!summary] In plain words
> Pedersen et al.'s five HGAM types differ in two choices, whether there is a global curve shared by all groups and whether group curves share one smoothness, and the right type follows from the biological question.

## The question
Which of G, GS, GI, S and I should I fit?

## Built from
- [[Hierarchical GAM]], [[Global Smoother]], [[Group-level Smoothers]], [[Shared Wiggliness]].
- [[by= Smooths vs Factor Smooths]]: the code for each.

## See it
![[HGAM model types.png|700]]
*What to look at:* compare panels with and without the black global curve, and with similar versus different wiggliness.

## The reasoning, step by step
1. **Is there a common response?** If yes, include a global smooth (G, GS, GI).
2. **Do groups differ?** If no, model G.
3. **Similar complexity across groups?** If yes, shared wiggliness (GS or S); if no, individual (GI or I).
4. **Is the common response of interest?** If not, drop the global smooth (S or I).
5. **Compare candidates** with AIC (and out-of-sample checks); Lawton et al. found GS and S most supported for locust outbreaks.

| Type | Global smooth | Group smooths | Wiggliness | mgcv |
|---|---|---|---|---|
| G | Yes | No | ,  | `s(x)` |
| GS | Yes | Yes | Shared | `s(x) + s(x, g, bs = "fs")` |
| GI | Yes | Yes | Individual | `s(x) + s(x, by = g, m = 1) + s(g, bs = "re")` |
| S | No | Yes | Shared | `s(x, g, bs = "fs")` |
| I | No | Yes | Individual | `g + s(x, by = g)` |

**A worked example in numbers.** for the CO2 data (12 plants), AIC was 62.6 for model G, −215.4 for GS and −216.3 for GI: group curves were clearly needed, and shared versus individual wiggliness made little difference.

## So in practice
Fit G and GS first; add GI only if groups plausibly differ in complexity and you have the data.

## What would go wrong otherwise
Fitting model I with many sparse groups, getting erratic curves for each.

## Explain it back
- Which models have no global smooth?

*Pass test:* you can choose and code an HGAM type.

## Connections
- **Related:** [[by= Smooths vs Factor Smooths]], [[HGAM vs GLMM with Random Slopes]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - GAMs]]

## Flashcards

What two choices define Pedersen's HGAM model types?
??
Whether there is a global smooth, and whether group smooths share one smoothing parameter.
![[HGAM model types.png]]
++++

What is model GS?
??
A global smooth plus group-level smooths with shared wiggliness.
++++
