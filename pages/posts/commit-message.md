---
title: Commit Messages
date: 2021/12/24
description: A convention to commit messages
tag: git development, scm
author: You
---

# Commit Messages

A typical git commit message will look like this:

```
<type>(<scope>): <subject>
```

The type, the scope and the subject should always be written in lowercase and have no more than 70 chars. But what
we should write about each of them?

## Types

It should be adopted one of the following types in a commit message:

| **Type**   | **Description**                                                                                | **Notes**                                                                                            |
| ---------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `feat`     | A new feature                                                                                  | new feature for the user, not a new feature for the build script                                     |
| `fix`      | A bug fix                                                                                      | bugfix for the user, not a fix to a build script                                                     |
| `docs`     | Documentation related changes                                                                  | changes to the documentation                                                                         |
| `style`    | A code that is related to styling that not affects the meaning of the code                     | white-space, formatting, missing semicolons, etc.                                                    |
| `refactor` | A code that neither fix bug nor adds a feature                                                 | refactoring production code; when there are semantic changes; e.g. renaming a variable/function name |
| `perf`     | A code that improves performance                                                               | e.g. refactoring a function or a component                                                           |
| `test`     | Adding new test or making changes to existing test(s)                                          | adding missing tests, refactoring tests; no production code change                                   |
| `chore`    | Changes to the build process or auxiliary tools and libraries such as documentation generation | updating grunt tasks etc.; no production code change                                                 |

## Scope

The scope should always be chosen according to the following criteria:

- should be a generalist and simple, being always composed by only one word
- in case of being a code change that affects all the project, `global` should be the scope
- do not use the name of created files or the added feature.

## Subject

- describe briefly what you did in that commit
- use imperative, present tense (eg: use "add" instead of "added" or "adds")
- don't use dot(.) at the end
- don't capitalize the first letter

There are many tools that I used to write this article, like [Commitizen](https://commitizen.github.io/cz-cli/).

If you have any suggestions, please send me an email :)

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Emphasis

**This is bold text**

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Develop. Preview. Ship. – Vercel

## Lists

Unordered

- Lorem ipsum dolor sit amet
- Consectetur adipiscing elit
- Integer molestie lorem at massa

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

## Code

Inline `code`

```
export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
```

## Tables

| **Option** | **Description**                                                                                                             |
| ---------- | --------------------------------------------------------------------------------------------------------------------------- |
| First      | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. |
| Second     | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. |
| Third      | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. |

## Links

- [Next.js](https://nextjs.org)
- [Nextra](https://nextra.vercel.app/)
- [Vercel](http://vercel.com)

### Footnotes

- Footnote [^1].
- Footnote [^2].

[^1]: Footnote **can have markup**

    and multiple paragraphs.

[^2]: Footnote text.
