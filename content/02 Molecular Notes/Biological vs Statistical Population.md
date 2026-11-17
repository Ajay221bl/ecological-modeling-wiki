---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - modeling
aliases:
  - "Two kinds of population"
status: seedling
---

# Biological vs Statistical Population

> [!summary] In plain words
> The **biological population** is the organisms that live in a place at a time. The **statistical population** is the units your method could actually have sampled. Your conclusions reach the statistical population only, so when the two differ, your answer can be precise and still wrong about the biology (Powell and Gale 2015).

## The everyday picture
A phone survey of "the town". The town is everyone who lives there (biological). The survey can only reach people with a listed phone number who answer calls (statistical). Call 10,000 of them and you'll learn a lot about phone-answerers, and still nothing about people without phones.

*Where the picture stops working:* survey firms can sometimes reweight for missing groups. In ecology the missing animals often leave no trace at all.

## The question
How do the two kinds of population differ, and why does the gap matter?

## Built from
- [[Biological Population]]: the organisms in a place and time
- [[Statistical Population]]: the units your method could reach
- [[Population]]: the general statistical idea
- [[Representative Sample]]: a sample that resembles the population you care about

## The reasoning, step by step
1. **You care about the biological population** ([[Biological Population]]).
2. **Your method can only reach some of it** ([[Statistical Population]]).
3. **Estimates describe what you could reach.** *Why:* units that are never caught can't affect your numbers.
4. **More effort doesn't close the gap.** It makes the estimate more precise about the wrong thing ([[Bias]]).
5. **So close the gap by design:** more methods, or a model of who gets missed ([[Observation Error]]).

**A worked example in numbers.** A pond holds 8 turtles: 4, 5, 6, 12, 14, 15, 18 and 20 cm. Biological mean: 94 / 8 = **11.75 cm**. Traps catch only turtles of 10 cm or more, so the statistical population is 5 turtles with mean 79 / 5 = **15.8 cm**. Trap a thousand times and you'll be very sure of 15.8, and 4 cm off the biological answer.

## So in practice
Before sampling, write down which units your method can and can't reach, and state your scope of inference in the methods.

## What would go wrong otherwise
- You'd report a tightly estimated but biased answer as fact.
- You'd generalise from roadside counts to the whole landscape.

## Explain it back
- Use the phone survey to explain the two populations.
- Why doesn't trapping more turtles fix the problem?

*Pass test:* for any study, you can name both populations and say whether they differ.

## Connections
- **Related:** [[Population and Sample]], [[Bias and Precision]], [[Powell and Gale 2015 Ch2]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]]

## Flashcards

What's the difference between a biological and a statistical population?
??
Biological: the organisms in a place and time. Statistical: the units your sampling method could actually measure; conclusions only reach this one.
++++

Why doesn't more sampling effort fix a gap between the two populations?
??
Units your method can't reach never enter the data, so more effort only makes the estimate more precise about the wrong population.
++++
