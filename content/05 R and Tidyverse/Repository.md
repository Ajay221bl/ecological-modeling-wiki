---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Repo"
  - "Git repository"
status: seedling
---

# Repository

**In one line:** a repository is a project folder whose complete change history is tracked by Git.

> [!info] Before this, it helps to know
> [[Git]] (what tracks it) · [[Project Folder Structure]] (what goes inside)

## The everyday picture
A project binder with a logbook stapled inside the cover. The binder holds the current pages. The logbook records every page ever added, changed or removed.

## Start from zero
1. **Any folder becomes a repository when Git is initialised in it.**
2. **A hidden `.git` subfolder holds the history.** Delete it and the history is gone.
3. **One project, one repository.** It should match your RProject folder ([[RProject]]).
4. **A copy on your machine is "local", one on GitHub is "remote".**
5. **Cloning downloads a remote repository** with its entire history.

## Common confusions
- **"A repository is a place on the internet."** It is the tracked folder, wherever it sits.

## Explain it back
- What makes a folder a repository?

*Pass test:* you can say where a repository's history is stored.

## Connections
- **Builds on:** [[Git]]
- **Leads to:** [[Fork]], [[RProject]], [[gitignore File]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What is a Git repository?
??
A project folder plus the full history of its files, kept in a hidden .git folder.
++++

What does cloning do?
??
Downloads a complete copy of a remote repository, history included.
++++
