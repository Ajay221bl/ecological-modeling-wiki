---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - r
aliases:
  - "GitHub vs Git"
  - "Version control and hosting"
status: seedling
---

# Git vs GitHub

> [!summary] In plain words
> Git is the version-control program on your computer that records snapshots (commits) of a project, while GitHub is a website that hosts copies of Git repositories so you can back them up, share them and collaborate.

## The question
What is the difference between Git and GitHub?

## Built from
- [[Git]] and [[GitHub]].
- [[Repository]], [[Commit]], [[Push and Pull]].
- [[Version Control]].

## The reasoning, step by step
1. **Git works offline:** `commit` saves a snapshot with a message in your local repository.
2. **GitHub is a remote:** `push` sends commits up; `pull` brings others' commits down.
3. **You can use Git without GitHub,** but not GitHub's version history without Git.
4. **GitHub adds sharing tools:** forks, pull requests, issues, web pages.
5. **Keep large data and secrets out** with a `.gitignore` file.

| | Git | GitHub |
|---|---|---|
| What | Program | Website |
| Where | Your computer | The internet |
| Does | Records commits | Hosts and shares repositories |
| Needs internet | No | Yes |

## So in practice
Commit after each meaningful step with a message saying why; push at the end of each session as a backup.

## What would go wrong otherwise
Thinking files are "saved to GitHub" after a commit, before pushing.

## Explain it back
- Which step sends commits to GitHub?

*Pass test:* you can explain commit, push and pull.

## Connections
- **Related:** [[Why a reproducible project structure saves you]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]]

## Flashcards

Git vs GitHub?
??
Git: version control on your computer. GitHub: website hosting Git repositories.
++++

What moves commits to GitHub?
??
git push.
++++
