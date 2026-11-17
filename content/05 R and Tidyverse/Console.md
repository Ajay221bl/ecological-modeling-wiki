---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "The console is the window where R actually runs commands and prints answers, one at a time, without saving them."
aliases:
  - "R console"
  - "Command line"
status: seedling
---

# Console

A pocket calculator's screen: you type, press equals, and see the answer; switch it off and the working is gone. The R **console** is that screen. It is the window where R actually runs commands, one at a time, and prints the results, and nothing typed there is kept as a record. In RStudio it sits in the bottom-left pane ([[R and RStudio]]).

The console talks to you through its prompt. A `>` at the start of the line means R is waiting for a command; type one, press Enter, and R answers, as with `2 * 3` or `sqrt(16)` in the code below. A `+` instead means R thinks your command is unfinished, usually because of a missing closing bracket or quote. That is not an error: R is waiting for the rest. Finish the command, or press Esc to cancel it and get the `>` back.

The console is the right place for throwaway checks: peeking at an object, opening a help page with `?mean` ([[Help Files in R]]), or installing a package once. It is the wrong place for the analysis itself. The console history is fragile and unordered, and code run there in a different order from your script can leave hidden objects that make results impossible to reproduce. So the rule is simple: the console is for running, the [[Script]] is for keeping ([[Console vs Script]]).

```r
2 * 3            # type at the > prompt and press Enter
sqrt(16)
# ?mean         # opens help; fine to type in the console, not needed in a script
```

## Connections
- **Builds on:** [[R and RStudio]]
- **Leads to:** [[Script]], [[Help Files in R]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]], molecular note [[Console vs Script]]

## Flashcards

What is the R console for?
??
Running commands immediately. Nothing typed there is saved as a record.
++++

What does a + prompt in the console mean?
??
R is waiting for the rest of an unfinished command. Press Esc to cancel.
++++
