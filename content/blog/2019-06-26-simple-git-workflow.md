---
title: A Simple Git Workflow
date: "2019-06-26T11:44:00.284Z"
tags: GIT, Workflow
---

At [Sodium Halogen](http://sodiumhalogen.com?ref=chancesmithio-blog), we use Git with every development project. Our primary Git hosts are Github, BitBucket, and GitLab (in that order).

## our common git commands

In terminal, be sure you are in the root of your project's GIT repo. We all have a `~/wip/` work-in-progress folder where all of our development project go. So we'll do something like this...

- `cd ~/wip/PROJECT_NAME` to access project
- `git pull` - to fetch all changes from the remote repo (Github, Bitbucket, GitLab)
- make some changes to the files
- `git status` to check and see what files we have changed
- if you want commit all the changes at once, go to the next step
- `git add .` to add all files in current directory
- `git commit -m "[FILE, FILE] YOUR MESSAGE HERE"` - add a note of the files you changed and what you did. Yet, [we use emmojis in our commits](https://github.com/sodiumhalogenteam/git-emoji-commit#readme).
- `git push` - to push changes up to remote repo

## Our workflow

This is what the workflow looks like for us, with a real example.

- `cd ~/wip/vtx` to access the Vertex project.
- `git status` to check if there is anything I need to commit before making new changes
- `git pull`
- if you want commit all the changes at once, go to the next step
- make some changes to the files (index.html, Modal.js)
- `git add .`
- `git commit -m "[index, Modal] add modal root, add Modal"` - except replace with [gec](https://github.com/sodiumhalogenteam/git-emoji-commit#readme).
- `git push` - all done, now move on to the next change

## Git tips

- Use GIT often, even by yourself. Just keep using it. This will help as you do more with other developers. I've even used repo for class notes for practice.
- FOCUS - make small changes and commit after that small change is done (like above, or when fixing a single bug)
- Use [git-emoji-commit](https://github.com/sodiumhalogenteam/git-emoji-commit#readme) to keep yourself focused on one category of change at a time.
- after you get the flow of GIT, create [terminal aliases](https://github.com/sodiumhalogenteam/setup-mac/blob/master/.zshrc#L118) for your git commands to speed your workflow up
