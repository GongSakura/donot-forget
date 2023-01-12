# Hooks

Git hooks provide developers with the ability to run scripts during git executions. Usually, scripts are one of these programming languages: Shell, Perl, Python, Javascript(node) and Ruby.

There are two group of hooks: 
- **client-side**<br/>
    Hooks runs on local git repository during such as merge, commit, checkout and push.
- **server-side**<br/>
    Hooks runs on remote git repository during receiving push from clients, and updating branches.


## Client-side Hooks
### pre-commit
The hook is invoked immediately by `git commit`, it can be bypassed with `--no-verify`. It passes no arugements, and you can exit with non-zero to abort the commit. Usually, we run code testing, linting or formatting wihtin this hook.

### prepare-commit-msg
The hook is invoked by `git commit` right after creating default commit message, and before the editor is fired, and it can't be skipped by `--no-verify`. We can edit the default commit message within this hook. 
It has one to three arugments:
 - the first one is the name of the commit message file, such as .git/COMMIT_EDITMSG
 - the second one is the source of the commit message. Sources could be:
    - `message`  if it commits with `-m` or `-F` option
    - `template`  if it commits with `-t` option
    - `commit`  if it commits with `-c`, `-C` or `--amend` option
 - the last one is the commit HASH, it only exists if the source is `commit`

### commit-msg
The hook is invoked after finalized the commit message, and it can be bypassed with `--no-verify`. It takes only one arugment that is the path of a file containing the commit message.

Two ways to finalize commit message:
1. `git commit` with `-m` option
2. Saved commit message in an editor.

So, this hook could be triggered during `git commit` or `git merge` .
Normally, we could do some, 

### post-commit

## Server-side Hooks
## Tools for hooks
## Reference
1. [Customizing Git - Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)
1. [Git Hooks](https://git-scm.com/docs/githooks)




