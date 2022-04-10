---
title: Oh My Zsh Git Aliases
date: 2022/03/25
description: An alternative and efficient way to use git in the console
tag: git development, scm, oh my zsh
author: You
---

# Oh My Zsh Git Aliases

## What is Oh My Zsh

First of all, it's important to mention that, according to its [website](https://www.zsh.org/), **Zsh** (Z-shell) is a shell designed for interactive use, although it is also a powerful scripting language.

**Oh My Zsh** stands for a community-driven and open-source framework that allow Zsh configuration management and it comes bundled with thousands of helpful functions, helpers, plugins and themes (you can find my configuration [here](https://github.com/carlosrsabreu/dotfiles/blob/master/.zshrc)).

One of the helpful things that **Oh My Zsh** already has integrated is some git aliases that we can use, to write git commands but faster and more efficient.

## Git aliases

Let's take a look on some aliases that you can use:

| **Alias** | **Command**                                        | **Notes**                                                |
| --------- | -------------------------------------------------- | -------------------------------------------------------- |
| `gco`     | `git checkout`                                     | write the name of the branch you want to checkout        |
| `gco -`   | `git checkout ${previous_branch}`                  | so nice when you're working frequently in two branches   |
| `gcd`     | `git checkout develop`                             | straightforward                                          |
| `gcb`     | `git checkout -b`                                  | when you need to create a branch                         |
| `gcmsg`   | `git commit -m`                                    | just need to write the commit message using `''` or `""` |
| `gpsup`   | `git push --set-upstream origin $(current_branch)` | in the first push, there's no set upstream anymore       |
| `gl`      | `git pull`                                         | straightforward                                          |
| `gp`      | `git push`                                         | straightforward                                          |
| `gm`      | `git merge`                                        | straightforward                                          |
| `gst`     | `git status`                                       | straightforward                                          |

## Some notes

Of course, you can use and personalize your configuration with a lot of stuff. This is only one of the things that will save some (but a lot) time in your work time. :D
