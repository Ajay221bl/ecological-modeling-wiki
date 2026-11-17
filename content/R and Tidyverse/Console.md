---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "R console"
  - "Command line"
status: seedling
---

# Console

**In one line:** the console is the window where R actually runs commands and prints answers, one at a time, without saving them.

> [!info] Before this, it helps to know
> [[R and RStudio]] (where the console lives)

## The everyday picture
A pocket calculator's screen. You type, press equals, see the answer. Switch it off and the working is gone. Handy for a quick check, useless as a record.

## Start from zero
1. **The `>` prompt means R is waiting.**
2. **Type a command, press Enter, R answers.**
3. **A `+` prompt means R thinks the command is unfinished.** Usually a missing bracket or quote. Press Esc to cancel.
4. **Nothing typed here is saved.** *Why:* the console is for running, the script is for keeping.
5. **Use it for throwaway checks.** Peeking at an object, reading help, installing a package once.

## In R
```r
2 * 3            # type at the > prompt and press Enter
sqrt(16)
# ?mean         # opens help; fine to type in the console, not needed in a script
```

## Common confusions
- **"My analysis is in the console history."** History is fragile and unordered. Put it in a script.
- **"The + prompt is an error."** R is just waiting for you to finish the command.

## Explain it back
- What does a `+` at the start of the line mean?
- What belongs in the console and what in a script?

*Pass test:* you can explain why console work isn't reproducible.

## Connections
- **Builds on:** [[R and RStudio]]
- **Leads to:** [[Script]], [[Help Files in R]]
- **Part of:** [[MOC - R for Ecological Modeling]], molecular note [[Console vs Script]]

## Flashcards

What is the R console for?
??
Running commands immediately. Nothing typed there is saved as a record.
++++

What does a + prompt in the console mean?
??
R is waiting for the rest of an unfinished command. Press Esc to cancel.
++++
