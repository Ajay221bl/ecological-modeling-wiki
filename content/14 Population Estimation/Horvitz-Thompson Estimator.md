---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "The Horvitz-Thompson estimator estimates a population total by weighting each sampled unit by one over its probability of being included in the sample."
aliases:
  - "Horvitz-Thompson"
  - "Inverse probability weighting"
  - "N̂ = Σ 1/π_i"
status: seedling
---

# Horvitz-Thompson Estimator

If each student in a class had a one-in-four chance of being chosen for a survey, each chosen student "stands for" four students. The **Horvitz-Thompson estimator** estimates a population total by weighting each sampled unit by one over its probability of being included in the sample: total = Σ yᵢ / πᵢ over sampled units, where πᵢ is the inclusion probability ([[Probability]]). For abundance, yᵢ = 1 for each animal detected and πᵢ is its [[Detection Probability]], giving N̂ = Σ 1/πᵢ.

It is unbiased if the πᵢ are correct and above zero. It is used after Huggins models, in distance sampling, and in survey sampling generally ([[Huggins Closed Capture Model]], [[Distance Sampling]], [[Survey Sampling Designs]]). In the code below four detected animals with detection probabilities 0.5, 0.5, 0.25 and 0.8 give an estimated total of 2 + 2 + 4 + 1.25 = 9.25 animals.

It is the general survey-sampling idea behind [[Powell and Gale 2015]] Ch8 and Ch19, not named in the course sources ([[Count-based Abundance Estimation]]). Rare detections should not be down-weighted; they are up-weighted, because a hard-to-detect animal stands for many missed ones.

```r
p_i <- c(0.5, 0.5, 0.25, 0.8)   # each detected animal's detection probability
sum(1 / p_i)                     # estimated total
```

## Connections
- **Builds on:** [[Probability]], [[Detection Probability]]
- **Leads to:** [[Huggins Closed Capture Model]], [[Distance Sampling]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What is the Horvitz-Thompson estimator of abundance?
??
N̂ = Σ 1/p_i over detected animals.
++++
