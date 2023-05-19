# Hooks

Git hooks provide developers with the ability to run scripts during git executions. Usually, scripts can be written in Shell, Perl, Python, Javascript or Ruby.

There are two groups of hooks:
- **client-side**<br/>
    Hooks run on a **local git repository** when executing commands such as merge, commit, checkout and push.
- **server-side**<br/>
    Hooks run on a **remote git repository** when receiving a push from clients and updating branches.

:::tip
- The default path of hooks is **.git/hooks**, and it can be changed by `git config core.hookspath <path>`.

- You may encounter the error: *"The **<path\>** hook was ignored because it's not set as executable"*. To use `chmod +x <path>` to set the **<path\>** as executable.

:::

<br/>




## Client-side Hooks
:::info
Here introduces some commonly used hooks.
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
The hook is always invoked after made a commit. It takes no arguments and is only used for notification.

### 5. pre-merge-commit
The hook is invoked by `git merge` and can be bypassed with `--no-verify`. It only executed if when a merge is carried out automatically and without **mannually** resolving conflicts, otherwise **pre-commit** will be called. The purpose of this hook is similar with pre-commit. 

For convenience, we can run **pre-commit** hook inside this hook.
```bash showLineNumbers
# pre-merge-commit.sh
# run pre-commit inside the hook
source ".git/hooks/pre-commit"
```

In a word, either pre-merge-commit or pre-commit is invoked right after `git merge`.

### 6. post-merge
The hook is invoked only if a merge is made without mannully resolving conflicts. It takes one argument that is a signal indicating whether the merge is squash merge or not. It can be used to restore

### 7. pre-rebase
The hook is invoked by `git rebase` and can be bypassed with `--no-verify`. It takes one to two arguments:
1. the <newbase\>, it can be a branch name or a commit hash.
2. the name of the branch being rebased. 

### 8. post-rewrite
The hook is 


### 9. post-checkout



## Server-side Hooks
## Tools for hooks
## Reference
1. [Customizing Git - Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)
1. [Git Hooks](https://git-scm.com/docs/githooks)




