---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "Global smooth"
  - "Common smoother"
  - "Population-level smooth"
status: seedling
---

# Global Smoother

**In one line:** a global smoother is the single smooth curve shared by all groups in a hierarchical GAM, describing the average relationship.

> [!info] Before this, it helps to know
> [[Hierarchical GAM]] · [[Fixed Effect]] (its role is similar)

## Start from zero
1. **Written as an ordinary `s(x)` term** alongside group-level smooths.
2. **Present in models G, GS and GI;** absent in S and I.
3. **Group smooths in GS and GI are deviations from it.**
4. **Use it when there is a shared response you want to report.**
5. **Identifiability:** in GI, group smooths with m = 2 can overlap the global smooth; Pedersen et al. use m = 1 for group smooths to reduce this.
6. **Predict it alone** with `exclude =` the group terms.

## In the course
[[Pedersen et al. 2019]].

## Common confusions
- **"The global smooth is the average of the group fits."** It is estimated jointly, with group deviations penalised.

## Explain it back
- Which HGAM types include a global smooth?

*Pass test:* you can add and interpret a global smoother.

## Connections
- **Builds on:** [[Hierarchical GAM]], [[Fixed Effect]]
- **Leads to:** [[Group-level Smoothers]], [[Conditional vs Marginal Predictions]]
- **Part of:** [[MOC - GAMs]]

## Flashcards

What is a global smoother in an HGAM?
??
The shared smooth curve describing the average relationship across groups.
++++
