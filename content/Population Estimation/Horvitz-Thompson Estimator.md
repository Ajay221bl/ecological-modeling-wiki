---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Horvitz-Thompson"
  - "Inverse probability weighting"
  - "N̂ = Σ 1/π_i"
status: seedling
---

# Horvitz-Thompson Estimator

**In one line:** the Horvitz-Thompson estimator estimates a population total by weighting each sampled unit by one over its probability of being included in the sample.

> [!info] Before this, it helps to know
> [[Probability]] · [[Detection Probability]]

## The everyday picture
If each student in a class had a one-in-four chance of being chosen for a survey, each chosen student "stands for" four students.

## Start from zero
1. **Total = Σ y_i / π_i** over sampled units, where π_i is the inclusion probability.
2. **For abundance,** y_i = 1 for each animal detected and π_i is its detection probability, giving N̂ = Σ 1/π_i.
3. **Unbiased if π_i are correct and above zero.**
4. **Used** after Huggins models, in distance sampling, and in survey sampling generally.

## In R
```r
p_i <- c(0.5, 0.5, 0.25, 0.8)   # each detected animal's detection probability
sum(1 / p_i)                     # estimated total
```

## In the course
General survey-sampling idea behind [[Powell and Gale 2015]] Ch8 and Ch19 (not named in the course sources).

## Common confusions
- **"Rare detections should be down-weighted."** They are up-weighted: a hard-to-detect animal stands for many missed ones.

## Explain it back
- What weight does an animal with p = 0.25 get?

*Pass test:* you can compute a Horvitz-Thompson total.

## Connections
- **Builds on:** [[Probability]], [[Detection Probability]]
- **Leads to:** [[Huggins Closed Capture Model]], [[Distance Sampling]]
- **Part of:** [[MOC - Population Estimation]]

## Flashcards

What is the Horvitz-Thompson estimator of abundance?
??
N̂ = Σ 1/p_i over detected animals.
++++
