---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A commit is one saved snapshot of the project, labelled with a short message saying what changed."
aliases:
  - "git commit"
  - "Commit message"
status: seedling
---

# Commit

A save point in a video game: before the risky bit you save, and if things go wrong you reload from there instead of starting the game again. A **commit** is one saved snapshot of a project, labelled with a short message saying what changed. You stage the files that belong together, write the message and commit, and [[Git]] stores the snapshot with its author, time and a unique ID, adding it to the [[Repository]]'s history ([[Version Control]]).

A good message finishes the sentence "This commit will...", for example "Fix site codes for 2021 surveys". Messages such as "update" tell you nothing six months later. Commit small and often: a commit that does one thing can be understood, and undone, on its own, while a single commit at the end of the day forces one message to describe six unrelated changes.

Commit code and small data, not large outputs that can be regenerated, such as knitted reports or cached model fits; the [[gitignore File]] keeps those out. A commit stays on your computer until you send it to a remote copy ([[Push and Pull]]).

## Connections
- **Builds on:** [[Git]]
- **Leads to:** [[Push and Pull]], [[Repository]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What is a commit?
??
A labelled snapshot of the project's files recorded in Git's history.
++++

Why commit small, focused changes?
??
Each can be understood, traced and undone independently.
++++
