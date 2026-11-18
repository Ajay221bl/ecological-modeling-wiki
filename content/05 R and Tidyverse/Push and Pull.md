---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "Pushing sends your new commits to the remote repository, and pulling brings down commits that others, or you on another computer, put there."
aliases:
  - "git push"
  - "git pull"
  - "Syncing with a remote"
status: seedling
---

# Push and Pull

Posting letters and checking the mailbox: posting drops your outgoing letters at the post office, checking collects whatever has arrived for you, and until you do either, the two sides do not know each other's news. **Pushing** sends your new commits to the remote [[Repository|repository]], such as one on [[GitHub]]; **pulling** brings down commits that others, or you on another computer, put there, and merges them into your copy. Commits live only on your computer until pushed ([[Commit]]).

The working rhythm is: pull before you start, commit as you go, push when you finish. Working on an out-of-date copy is what leads to *conflicts*, which happen when the same lines of a file were changed in two places. Git then marks the conflicting lines and asks you to choose which version to keep.

Two misunderstandings. Committing does not put work on GitHub; only pushing does. And a rejected push is not an error to force through: it means the remote has commits you do not have yet, so pull first, then push. Contributing to someone else's repository works the same way through your own copy of it ([[Fork]]).

## Connections
- **Builds on:** [[Commit]], [[GitHub]], [[Repository]]
- **Leads to:** [[Fork]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What do git push and git pull do?
??
Push uploads your commits to the remote. Pull downloads and merges commits from the remote.
++++

What is a merge conflict?
??
The same lines were edited differently in two copies, so Git needs you to decide which to keep.
++++
