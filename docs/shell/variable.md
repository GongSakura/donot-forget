# 1. Variable
A **variable** is a character string to which we assign a value, and particularly the value is **untyped** by default. Every shell instance(shell process) maintains its variables. 

For example, in a shell window "A", if you create a variable "v", then in another shell window "B" (another shell process), the "v" does not exist.

## Declaring Syntax
There are **no whitespaces** around the **equal sign** `=`.<br/>
```bash showLineNumbers
v="Hello Shell"     # correct ✅
v= "Hello Shell"    # incorrect ❌
v = "Hello Shell"   # incorrect ❌
v ="Hello Shell"    # incorrect ❌
```

## Naming Rules
- Only consist of **a-z**, **A-Z**, **0-9** and **underscore(_)** 
- Can't start with numbers
- Case sensitive
- **Snake Case** is a good choice
- In convention, environment variables use uppercase letters

```bash showLineNumbers
v="John"               # correct ✅
_v="Grace"             # correct ✅
HOME_PATH="/usr/bin"   # correct ✅
1v="Tom"               # incorrect ❌
```

## Operations
### Access
Use the **dollar sign** `$` to access variables.
```bash showLineNumbers
v="Hello Shell"
echo $v       # print: "Hello Shell"
```

A more general way is to use **curly braces** `{}` to wrap the variable.

```bash showLineNumbers
v="Hello Shell"
echo ${v}    # print: "Hello Shell"
```

<br/>

### Assign
To assign plain text, simply use the **double quote**, or without quotes.
```bash showLineNumbers
v="Hi, do not forget!"
v1=Hi
v2="99"
v3=123   # the value of v3 is not an integer
```

<br/>

To assign a numeric value, we need to add the `let` prefix.
```bash showLineNumbers
v=2*3       # without  prefix
let v1=2*3  

echo $v     # print: "2*3"
echo $v1    # print: "6"
```

<br/>

Sometimes, to assign **the output** of a function or a command, we need to use the mechanism called **command substitution** with syntax `$(<command> <args>)` or use the backward quote `` `<command> <args>` ``
```bash showLineNumbers
func(){
  if [[ $1 == 1 ]]
    then
      echo "the first parameter is == 1"
    else
      echo "the first parameter is != 1"
  fi
}

v=$(func "1")
echo $v   # print: the first parameter is == 1

v=`func "2"`
echo $v  # print: the first parameter is != 1
```

<br/>

### Delete
Use `unset` or assign empty string(""), to delete variables.
```bash showLineNumbers
v="Hello Shell"
unset v           # delete "v"
echo $v           # print: null("")

v1="Hello Delete"
v1=""             # not recommended, it's unclear in semantics
```

<br/>

### Attributes
Use `declare` or `typeset` to add attributes to a variable, different attributes have different usages.

Some commonly used attributes are shown as follows:

| command| result|
| :-:|:-:|
| `declare -p <variable_name>`  |  Print out all attributes of the variable. |
| `declare -r <variable_name>`  |  Make the variable **readonly**. |
| `declare -x <variable_name>`  |  Set the variable as a **environment variable** |
| `declare -u <variable_name>`  |  Set the value to **UPPERCASE**  |
| `declare -l <variable_name>`  |  Set the value to **lowercase**. |

<br/>

To **remove attributes**, use `+`. For example:
```bash showLineNumbers
declare -r v=readonly!
declare -p v    # print: "typeset -r v=readonly!"

declare +r v    # remove readonly attribute
declare -p v    # print: "typeset v=readonly!"
```


## Variable Scopes
Different types of variables have different scopes(contexts), there are three kinds of scopes:
**local**, **global**, and **environment**.

:::caution

In a subprocess(subshell), variables are **only scoped locally**, meaning no matter what kinds of variables are declared in the subprocess, they are unaccessible and invisible to its main process(parent process),  the in subprocess.

:::
<br/>

- **Local variables**<br/>
They are **scoped only** in a function or a block of code, and it declares with the `local` prefix.

  ```bash showLineNumbers
    func(){
      local v="Hello Shell"
      echo $v               
    }

    func      # call the function, print: "Hello Shell"             
    echo $v   # access outside the function, print: null("")
  ```
  
<br/>

- **Global variables**<br/>
They are **scoped only** in a process. They can be declared anywhere, and accessed anywhere within the process.

  ```bash showLineNumbers
    v="I'm v"         # declare outside a function
    func(){
      v2="I'm v2"     # declare inside a function
      echo $v         # access inside a function
    }

    func              # call the function, print: "I'm v"     
    echo $v2          # print: "I'm v2"
  ```

<br/>

- **Environment variables**<br/>
  They are **scoped** in both the main process and subprocesses. Any variable can be declared as a environment variable by a prefix: `export`.

  Use command ` env ` or ` printenv ` to check all environment variables.
    ```bash showLineNumbers
      # script1.sh
      v="Hello Shell"
      export v

      # script2.sh
      echo $v               # print: "Hello Shell"
      
      # in terminal
      source script1.sh     # execute script1.sh in current process
      env                   # now, "v=Hello Shell" is in the output
      printenv              # now, "v=Hello Shell" is in the output
      sh script2.sh         # execute script2.sh in subprocess, print: "v=Hello Shell"
    ```

## Reference
1. Learning the bash Shell, 3rd Edition
2. [shell-scripting-different-types-of-variables](https://www.geeksforgeeks.org/shell-scripting-different-types-of-variables/)
3. [Unix / Linux - Using Shell Variables](https://www.tutorialspoint.com/unix/unix-using-variables.htm)
4. [How to Use Bash Source Command](https://linuxhint.com/bash_source_example/)
5. [Advanced Bash-Scripting Guide. Chapter21: subshells](https://tldp.org/LDP/abs/html/subshells.html)
6. https://www.baeldung.com/linux/bash-single-vs-double-brackets
