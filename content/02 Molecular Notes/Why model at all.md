---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - modeling
aliases:
  - "Why model"
  - "Should I model"
status: seedling
---

# Why model at all

> [!summary] In plain words
> Because data never speak for themselves. A model is the explicit story of how the data came to be, and writing it down is what lets data test an idea, estimate the numbers we care about, and say how uncertain we are. Even before data exist, building a model shows what to measure.

## The everyday picture
A doctor with a patient's test results. A page of numbers (blood pressure 140, temperature 38.2, heart rate 95) doesn't diagnose anything on its own. The doctor brings a model of how the body works: "a fever plus a fast heart rate suggests infection". Only through that model do the numbers become an explanation, a prediction ("this should clear in a week with treatment") and a plan for the next test. Without it, the doctor is just reading out numbers.

Ecological data are the same. The model is the story that turns numbers into understanding.

*Where the picture stops working:* the doctor's model of the body is well established. An ecologist's model is often a hypothesis, which is exactly why the data are used to test it.

## The question
Why should an ecologist build models instead of just collecting data and describing them?

## Built from
- [[Model]]: a purposeful simplification of the real world
- [[Real World and Model World]]: models speak about a simplified world, and we infer back to the real one
- [[Conceptual Model]]: the first, cheapest model, a sketch of what affects what
- [[Statistical Model]]: learns parameters from data, with uncertainty
- [[Induction vs Deduction]]: generalizing from samples needs a framework for uncertainty
- [[Exploration, Inference and Prediction]]: the three purposes a model can serve
- [[Sensitivity Analysis]]: shows which parameters matter most

## See it
![[Data vs understanding grid.png|700]]
*What to look at:* modeling is useful in every corner, but for a different job in each one.

## The reasoning, step by step
1. **Ecologists want to understand *why* populations and communities change** ([[Powell and Gale 2015 Ch1]], p. 1).
2. **Data alone are a list of numbers.** To get from "these 30 sites had these counts" to "grazing reduces bird richness" you need a claim about how the counts arose, which is a model ([[Statistical Model]]).
3. **Every analysis already contains a model, even if it's hidden.** A t-test assumes two means and normal scatter. Writing the model out makes those assumptions visible and open to challenge ([[Deterministic and Stochastic Components]]).
4. **Conclusions from samples are inductive, so they need uncertainty.** A statistical model supplies it: SEs, CIs, posteriors ([[Induction vs Deduction]]).
5. **Models serve different goals.** They explore patterns, test a priori hypotheses or predict the future, and knowing which one you're doing shapes the whole analysis ([[Exploration, Inference and Prediction]]).
6. **Models help even with little data.** Powell and Gale's practical reasons are: resources are scarce (simulate before spending), decisions need support, models help us "visualize" and learn the system, and we want to predict ([[Powell and Gale 2015 Ch1]], pp. 6 to 7).
7. **The process of modeling teaches as much as the result.** Deciding what goes in the Model World forces you to think critically about the system ([[Powell and Gale 2015 Ch1]], p. 9), and a [[Sensitivity Analysis]] tells you which data to collect next.

**A worked example in numbers.** You count birds at 30 ranches and find a mean of 6 species on lightly grazed ranches and 4 on heavily grazed ones.
- *Without a model:* "the means differ by 2". True, but is 2 more than chance? Would it hold elsewhere? Did grass cover cause it, or did heavily grazed ranches also happen to be drier?
- *With a model:* richness ~ grazing + rainfall, with Poisson scatter. Now you get an estimated grazing effect with a standard error (say −1.8 species, SE 0.6), adjusted for rainfall, with assumptions you can list and check. Those 30 counts have become evidence about a hypothesis.

## So in practice
Start every analysis, homework or project by writing the model in words: "I think y depends on x₁ and x₂ like this, and the leftover scatter looks like that." Then translate it into R. The data exploration, model fitting and model checking in the rest of the course are all steps in testing that story.

## What would go wrong otherwise
- You'd report patterns without knowing which assumptions they depend on.
- You'd mix exploring with testing, and report chance patterns as findings ([[Data Dredging]]).
- You'd have no principled measure of uncertainty, so you couldn't tell a real effect from noise.
- You'd spend field effort on parameters that don't affect your answer.

## Explain it back
- Use a doctor reading test results to explain why data don't speak for themselves.
- Name three things a model gives you that a table of means doesn't.
- Why can a model help even before any data are collected?

*Pass test:* you can say, for any dataset, what story about how it arose you'd write down first.

## Connections
- **Related:** [[Modeling Process]], [[Why every statistical model has a deterministic and a stochastic part]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Modeling Foundations]]

## Flashcards

Why do ecologists build models instead of just describing data?
??
A model is the explicit story of how data arose; it lets data test ideas, gives estimates with uncertainty, and exposes the assumptions behind conclusions.
![[Data vs understanding grid.png]]
++++

What are Powell and Gale's (after Starfield) four practical reasons to model?
??
Resources are scarce (simulate first), decisions need support, modeling helps us visualize and learn the system, and we want to predict the future.
++++

When you have little data and little understanding, what kind of model helps?
??
An exploratory, conceptual model, to learn about the system and decide which data to collect first.
![[Data vs understanding grid.png]]
++++
