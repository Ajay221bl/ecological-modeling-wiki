---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "git push"
  - "git pull"
  - "Syncing with a remote"
status: seedling
---

# Push and Pull

**In one line:** pushing sends your new commits to the remote repository, and pulling brings down commits that others, or you on another computer, put there.

> [!info] Before this, it helps to know
> [[Commit]] (what gets moved) · [[GitHub]] (the remote)

## The everyday picture
Posting letters and checking the mailbox. Push drops your outgoing letters at the post office. Pull collects whatever has arrived for you. Until you do either, the two sides don't know about each other's news.

## Start from zero
1. **Commits live locally until pushed.**
2. **`git push` uploads them.**
3. **`git pull` downloads and merges remote commits into your copy.**
4. **Pull before you start, push when you finish.** *Why:* working on an out-of-date copy leads to conflicts.
5. **A conflict means the same lines were changed in two places.** Git marks them and asks you to choose.

## Common confusions
- **"I committed, so it is on GitHub."** Not until you push.
- **"A rejected push is an error to force through."** It means the remote has commits you lack. Pull first.

## Explain it back
- In what order should you pull, commit and push in a work session?

*Pass test:* you can explain why a push can be rejected.

## Connections
- **Builds on:** [[Commit]], [[GitHub]]
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
