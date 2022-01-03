---
title: Shell Scripting - Intro
date: 2022/01/05
description: Intro to linux shell scripting
tag: shell, scripting
author: You
---

# Shell Scripting - Intro

## What is a shell script?

A shell script is text file that contains a series of commands. This means that any work you can do on the command line can be automated by a shell script.

Every shell script file has the extension `*.sh`, and you can create it using an editor text - _nano_ or _vim_, for example (or if you want to keep it simple at first, simply use _VS Code_ or other application).

## First steps

Imagine that you want to create the first shell scripting file. Making sure you have _nano_ installed, let's run the following command to start editing the file -> `nano day1.sh`:

```bash
#!/bin/bash
echo "The first steps into shell scripting"
```

**Note:** you will want to start each shell script with a shebang (`#!`) followed up by the path to an interpreter (`/bin/bash`), that is what determines what program executes the commands listed in the file. Otherwise, the script will be executred using the current shell.

After saving it, run `chmod +x day1.sh` to make sure you have permissions to execute the program.

Then, simply run `./day1.sh` and you'll get in the console the phrase above! Right, you just executed a script :)

Let's dive into more details, starting with simple commands.

## Simple commands

| **Type**                 | **Description**                     | **Notes**                                                    |
| ------------------------ | ----------------------------------- | ------------------------------------------------------------ |
| `cat <file>`             | Short for concatenate               | By default it displays the contents of files to the terminal |
| `chmod <options> <file>` | Short for change mode               | You can change the file permissions using this command       |
| `cd <path>`              | Short for change directory          | Used to navigate throughout your directory                   |
| `pwd`                    | Short for present working directory | Get the present working directory's path                     |
| `type <command>`         | Get shell built in command          | Indicates if the given command is a shell built in or not    |
| `echo <string>`          | Print in console what you wrote     | Can be seen as the `console.log('')` of shell                |

## Using variables

Let's now start creating a second file to start manipultaing with variables, running this command -> `nano day2.sh` :

```bash
#!/bin/bash
SKILL="shell scripting"
echo "I'm getting better at ${SKILL}! Yeahhh!"
```

After running it, you'll check that the variable has replaced by the text, getting the following message:

```bash
"I'm getting better at shell scripting! Yeahhh!"
```

Very simple, right? Note that you don't need to specify it's type, you simply need to assign the value to the variable. It's very important to know that there are no spaces around the equal sign, otherwise you'll get an error.
