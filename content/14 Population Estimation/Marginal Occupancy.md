---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Marginal occupancy is the probability that a site is occupied by one species, averaged over whether the other species in the model are present or absent."
aliases:
  - "Marginal occupancy probability"
  - "psi marginal"
  - "Unconditional occupancy"
status: seedling
---

# Marginal Occupancy

If you want to know how many houses have a cat, you count cat houses on the whole street, without caring which ones also have a dog. **Marginal occupancy** is the probability that a site is occupied by one species, averaged over whether the other species in the model are present or absent ([[Multi-species Occupancy]], [[Marginal Probability]]). It is the multi-species version of ordinary ψ, and it answers "how widespread is this species?" ([[Occupancy]]).

It is built from the conditional pieces by the law of total probability: ψ(culpeo) = ψ(puma)·ψ(culpeo | puma) + (1 − ψ(puma))·ψ(culpeo | no puma). With ψ(puma) = 0.4, ψ(culpeo | puma) = 0.2 and ψ(culpeo | no puma) = 0.5, that is 0.4 × 0.2 + 0.6 × 0.5 = 0.38, and the code below confirms it on 2,000 simulated sites (0.387). In the guest lecture's carnivore example, read roughly from the slide's panel A, marginal occupancy was about 0.64 for chilla fox, 0.29 for culpeo fox, 0.38 for puma and 0.77 for humans ([[Occupancy Guest Lecture]]).

Use marginal occupancy for range and status questions; use [[Conditional Occupancy]] for interaction questions. A high marginal occupancy does not mean a species is unaffected by others: it can be widespread overall and still be much rarer at sites where its competitor or predator lives.

![[Marginal vs conditional occupancy.png|700]]
*What to look at:* the marginal bar (0.38) sits between the two conditional bars, because it is their weighted average.

```r
psiA <- 0.4; psiB_A <- 0.2; psiB_a <- 0.5
psiA * psiB_A + (1 - psiA) * psiB_a                   # marginal occupancy of species B
set.seed(9); S <- 2000; zA <- rbinom(S, 1, psiA); zB <- rbinom(S, 1, ifelse(zA == 1, psiB_A, psiB_a))
round(mean(zB), 3)                                     # simulated marginal
```

## Connections
- **Builds on:** [[Multi-species Occupancy]], [[Marginal Probability]]
- **Leads to:** [[Conditional Occupancy]], [[Co-occurrence Probability]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Marginal vs Conditional Occupancy]]

## Flashcards

What is marginal occupancy?
??
The chance a site is occupied by a species, averaged over the presence or absence of the other species.
![[Marginal vs conditional occupancy.png]]
++++

Compute ψ(B) if ψ(A) = 0.4, ψ(B given A) = 0.2, ψ(B given no A) = 0.5.
??
0.4 × 0.2 + 0.6 × 0.5 = 0.38.
++++
