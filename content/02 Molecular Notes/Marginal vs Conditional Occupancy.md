---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - popest
aliases:
  - "Marginal and conditional occupancy"
  - "Marginal, conditional and co-occurrence probability"
status: seedling
---

# Marginal vs Conditional Occupancy

> [!summary] In plain words
> marginal occupancy says how widespread a species is overall, conditional occupancy says how its occupancy changes with another species present or absent, and co-occurrence says how often both are there; interaction shows up as the gap between them.

## The question
In a multi-species occupancy model, which occupancy number answers which question?

## Built from
- [[Marginal Occupancy]]: ψ(B), averaged over the other species.
- [[Conditional Occupancy]]: ψ(B | A) and ψ(B | no A).
- [[Co-occurrence Probability]]: ψ(A and B).
- [[Joint, Marginal and Conditional Probability]]: the same three ideas for any two events.

## See it
![[Marginal vs conditional occupancy.png|700]]
*What to look at:* the marginal value is a weighted average of the two conditional values, weighted by how common the other species is.

## The reasoning, step by step
1. **Start with conditionals** from the model: ψ(culpeo | puma) = 0.20, ψ(culpeo | no puma) = 0.50, with ψ(puma) = 0.40.
2. **Marginal** by total probability: 0.4 × 0.20 + 0.6 × 0.50 = 0.38.
3. **Co-occurrence** by multiplication: 0.4 × 0.20 = 0.08.
4. **Independence benchmark:** ψ(puma) × ψ(culpeo) = 0.4 × 0.38 = 0.152.
5. **Interaction:** 0.08 / 0.152 = 0.53 < 1, so they co-occur about half as often as chance; equivalently ψ(culpeo | puma) < ψ(culpeo | no puma).

| Question | Number to use |
|---|---|
| How widespread is culpeo? | Marginal ψ(culpeo) |
| Does puma presence change culpeo occupancy? | Conditional ψ(culpeo given puma) vs ψ(culpeo given no puma) |
| How often are both at one site? | Co-occurrence ψ(puma and culpeo) |
The guest lecture's carnivore panel, read roughly: culpeo marginal about 0.29, puma 0.38, culpeo-puma co-occurrence about 0.06 against 0.11 expected under independence, so ψ(culpeo | puma) ≈ 0.06 / 0.38 ≈ 0.16.

## So in practice
Report all three, with the conditional pair as the evidence for interaction, and add habitat covariates so that shared or opposite habitat preferences are not mistaken for interaction.

## In R
```r
psiA <- 0.4; cB_A <- 0.2; cB_a <- 0.5
marg <- psiA * cB_A + (1 - psiA) * cB_a; joint <- psiA * cB_A
round(c(marginal = marg, joint = joint, independent = psiA * marg, SIF = joint / (psiA * marg)), 3)
```

## What would go wrong otherwise
Reading the slide's "Conditional" panel as conditional occupancy: its axis is P(co-occurrence), a joint probability, which is small for rare species even without any interaction.

## Explain it back
- Given ψ(A) and the two conditionals of B, compute B's marginal, the co-occurrence and the interaction factor.

*Pass test:* you can move between marginal, conditional and joint occupancy and say which one answers which question.

## Connections
- **Related:** [[Multi-species Occupancy]], [[Species Interaction]], [[Assumptions of Occupancy Models]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

Which occupancy number answers "does species A change where species B lives"?
??
The conditional pair: ψ(B given A) vs ψ(B given no A).
![[Marginal vs conditional occupancy.png]]
++++

Why is a low co-occurrence probability not evidence of avoidance on its own?
??
Rare species co-occur rarely even if independent; compare with ψ(A) × ψ(B).
++++
