# Hooks

Git hooks provide developers with the ability to run scripts during git executions. Usually, scripts can be Shell, Perl, Python, Javascript(node) or Ruby.

:::tip
- The default path of hooks is **.git/hooks**, and it can be changed by `git config core.hookspath <path>`.

- Sometimes you may encounter the error: *"The **<path\>** hook was ignored because it's not set as executable"*. To use `chmod +x <path>` to set the **<path\>** as executable.
:::

<br/>

There are two group of hooks:
- **client-side**<br/>
    Hooks runs on local git repository during such as merge, commit, checkout and push.
- **server-side**<br/>
    Hooks runs on remote git repository during receiving push from clients and updating branches.


## Client-side Hooks
:::info
Here only introduces commonly used hooks.
:::
### 1. pre-commit
The hook is invoked immediately by `git commit`, it can be bypassed with `--no-verify`. It takes no arugements, and you can exit with non-zero to abort the commit. Usually, we run code testing, linting or formatting inside this hook.

### 2. prepare-commit-msg
The hook is invoked by `git commit` right after creating default commit message, and before the editor is fired, and it can't be skipped by `--no-verify`. We can edit the default commit message within this hook. 
It has one to three arguments:
 - the first one is the name of the commit message file, such as .git/COMMIT_EDITMSG
 - the second one is the source of the commit message. Sources can be:
    - `message`  if it commits with `-m` or `-F` option
    - `template`  if it commits with `-t` option
    - `commit`  if it commits with `-c`, `-C` or `--amend` option
 - the last one is the commit HASH, it only exists if the source is `commit`

### 3. commit-msg
The hook is invoked after **"finalized"** the commit message, and it can be bypassed with `--no-verify`. It takes only one argument that is the path of a file containing the final commit message. Normally, we inspect or format the message at this hook.
:::info
The "final commit message" still can be changed within this hook.
:::

<br/>

Two ways to **"finalize"** commit message:
1. `git commit` with messages.
2. Saved commit message in an editor.


### 4. post-commit
The hook is always invoked after made a commit. It takes no arguments and only uses for notification.

### 5. pre-merge-commit

## Server-side Hooks
## Tools for hooks
## Reference
1. [Customizing Git - Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)
1. [Git Hooks](https://git-scm.com/docs/githooks)




