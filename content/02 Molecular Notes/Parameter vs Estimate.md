---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - basics
aliases:
  - "Parameter and estimate"
  - "theta hat"
status: seedling
---

# Parameter vs Estimate

> [!summary] In plain words
> A **parameter** is the true, fixed number describing a population, which you almost never see. An **estimate** is your best guess at it from a sample. The **estimator** is the recipe that turns the sample into the guess. Hats mark guesses: θ is the truth, θ̂ the estimate.

## The everyday picture
Guessing the number of sweets in a jar at a fair. The real number on the organiser's card is the parameter. Your written guess is the estimate. The method you used ("count one layer, times the number of layers") is the estimator.

*Where the picture stops working:* at the fair someone reads out the true number. In ecology nobody ever does.

## The question
How do parameters, estimates and estimators relate, and why keep them apart?

## Built from
- [[Parameter]]: the fixed, unknown truth
- [[Estimate]]: the number your sample gives
- [[Estimator]]: the rule that produces the estimate
- [[Sampling Variation]]: why estimates change from sample to sample

## See it
![[Parameter vs estimate.png|700]]
*What to look at:* the parameter stays put; estimates from different samples scatter around it.

## The reasoning, step by step
1. **The population has a true value** ([[Parameter]]).
2. **You can't measure all of it, so you apply a recipe to a sample** ([[Estimator]]).
3. **The recipe gives a number** ([[Estimate]]). *Why it isn't the truth:* a different sample would give a different number.
4. **Judge the recipe, not one number.** Over many samples, does it centre on the truth ([[Bias]]) and how tightly ([[Precision]])?

**A worked example in numbers.** True survival of a deer herd is 0.80. Three crews each collar 20 deer and see 17, 15 and 16 survive. Their estimates are 0.85, 0.75 and 0.80. Same parameter, same estimator, three different estimates. The [[Estimator]] note shows a simulation where alive/n averages 0.798 (nearly unbiased) and alive/(n+1) averages 0.726 (biased low).

## So in practice
Always report an estimate with its uncertainty (a standard error or interval), because the estimate is one draw from many possible ones ([[Standard Error]]).

## What would go wrong otherwise
- You'd treat a lucky sample as the truth.
- You'd compare recipes by one result instead of how they behave on average.

## Explain it back
- Use the sweet jar to name the parameter, estimate and estimator.
- Why do three crews get three different survival estimates?

*Pass test:* you can point at any number in a results table and say whether it's a parameter or an estimate.

## Connections
- **Related:** [[Population and Sample]], [[Bias and Precision]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]

## Flashcards

What's the difference between a parameter, an estimate and an estimator?
??
Parameter: the true, fixed population value. Estimate: the number your sample gives. Estimator: the rule that turns a sample into the estimate.
![[Parameter vs estimate.png]]
++++

What does a hat (θ̂) mean?
??
An estimate of the parameter θ, calculated from data.
++++
