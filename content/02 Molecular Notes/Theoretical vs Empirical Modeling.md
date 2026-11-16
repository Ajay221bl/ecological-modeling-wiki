---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - modeling
aliases:
  - "Modeling styles"
  - "Mechanistic vs phenomenological"
status: seedling
---

# Theoretical vs Empirical Modeling

> [!summary] In plain words
> A **theoretical** model starts from ideas about how nature works and asks, with maths, what must follow. An **empirical** model starts from data and describes the pattern in them, with probability saying how sure we are. Theory asks "what would happen if?"; empirical work asks "what does happen here?". Good ecology uses both.

## The everyday picture
Two cooks. One works out from chemistry that sugar caramelises at about 170 °C and plans the recipe on paper (theoretical). The other bakes 40 batches at different temperatures and notes which taste best (empirical). The first can explain why; the second knows what works in this oven.

*Where the picture stops working:* most real models mix both, like a theory-based equation whose parameters are estimated from data.

## The question
How do theoretical and empirical models differ, and when do you want each?

## Built from
- [[Theoretical Model]]: equations from ideas, studied without data
- [[Empirical Model]]: patterns fitted to data, with uncertainty
- [[Analytical Model]] and [[Statistical Model]]: the usual tools for each

## The reasoning, step by step
1. **Theory gives mechanisms.** The logistic model says growth slows as N nears K ([[Theoretical Model]]).
2. **Data give local patterns.** A regression gives the slope in these plots, with an SE ([[Empirical Model]]).
3. **Theory without data can be elegant and wrong.** *Why:* its assumptions are never checked.
4. **Data without theory can be accurate and shallow.** *Why:* a fitted slope doesn't say why, and may not transfer elsewhere.
5. **So combine them.** Let theory choose the model's form; let data estimate its numbers.

**A worked example in numbers.** Theoretical: logistic growth with r = 0.4 and K = 500 says growth is fastest at N = 250 (50 per year) and zero at 500. No data needed. Empirical: 40 plots give a grazing slope of −3.2 g per grazer, SE 0.8. Real, local, and silent about why. Fit the logistic model to a real time series and you get both: a mechanism and estimates of r and K.

## So in practice
Ask whether your question is "what follows from this idea?" (theory) or "what is the effect here?" (empirical), and choose the model style to match.

## What would go wrong otherwise
- You'd treat a fitted slope as a law of nature.
- You'd trust a theoretical prediction nobody ever tested against data.

## Explain it back
- Use the two cooks to explain the two styles.
- Why combine them instead of choosing one?

*Pass test:* given any model, you can say which style it is and what it can and can't tell you.

## Connections
- **Related:** [[Why model at all]], [[Exploration, Inference and Prediction]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Modeling Foundations]]

## Flashcards

What is the difference between theoretical and empirical modeling?
??
Theoretical models derive consequences of ideas with maths, often without data; empirical models describe patterns in data, with probability for uncertainty.
++++

Why combine theoretical and empirical modeling?
??
Theory alone is untested and data alone don't explain why; theory can set the model's form while data estimate its parameters.
++++
