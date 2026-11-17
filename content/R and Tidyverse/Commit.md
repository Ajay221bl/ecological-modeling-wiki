---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "git commit"
  - "Commit message"
status: seedling
---

# Commit

**In one line:** a commit is one saved snapshot of the project, labelled with a short message saying what changed.

> [!info] Before this, it helps to know
> [[Git]] (what records it) · [[Version Control]] (the idea)

## The everyday picture
A save point in a video game. Before the risky bit you save. If things go wrong you reload from there instead of starting the game again.

## Start from zero
1. **Stage the files that belong together.**
2. **Write a message that finishes the sentence "This commit will...".** For example "Fix site codes for 2021 surveys".
3. **Commit.** Git stores the snapshot with author, time and a unique ID.
4. **Commit small and often.** *Why:* a commit that does one thing can be understood and undone on its own.
5. **Commit code and small data, not large outputs** ([[gitignore File]]).

## Common confusions
- **"One commit at the end of the day."** Then one message has to describe six unrelated changes.
- **"Messages like 'update' are fine."** Six months later they tell you nothing.

## Explain it back
- What makes a good commit message?

*Pass test:* you can describe when to commit and what to write.

## Connections
- **Builds on:** [[Git]]
- **Leads to:** [[Push and Pull]], [[Repository]]
- **Part of:** [[MOC - R for Ecological Modeling]]

## Flashcards

What is a commit?
??
A labelled snapshot of the project's files recorded in Git's history.
++++

Why commit small, focused changes?
??
Each can be understood, traced and undone independently.
++++
